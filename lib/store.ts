import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { calculateStarInvestReturn, calculateStarWalletReturn, shouldReturnProfit } from "./utils"

// 自定义存储实现
const customStorage = {
  getItem: (name: string): string | null => {
    try {
      // 在客户端使用 localStorage
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        return localStorage.getItem(name)
      }
      return null
    } catch (error) {
      console.error('Error reading from storage:', error)
      return null
    }
  },
  
  setItem: (name: string, value: string): void => {
    try {
      // 保存到 localStorage
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem(name, value)
      }
      
      // 同时保存到 API
      if (typeof window !== 'undefined') {
        fetch('/api/storage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ key: name, data: value }),
        }).catch(error => {
          console.error('Error saving to API:', error)
        })
      }
    } catch (error) {
      console.error('Error writing to storage:', error)
    }
  },
  
  removeItem: (name: string): void => {
    try {
      // 从 localStorage 中删除
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.removeItem(name)
      }
      
      // 同时从 API 中删除
      if (typeof window !== 'undefined') {
        fetch('/api/storage', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ key: name }),
        }).catch(error => {
          console.error('Error deleting from API:', error)
        })
      }
    } catch (error) {
      console.error('Error removing from storage:', error)
    }
  }
}

// 从 API 加载数据的函数
export const loadDataFromAPI = async () => {
  if (typeof window !== 'undefined') {
    try {
      const response = await fetch('/api/storage?key=app-storage')
      if (response.ok) {
        const { data } = await response.json()
        // 更新 localStorage
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('app-storage', data)
          
          // 解析数据并应用到状态，而不是刷新页面
          try {
            const parsedData = JSON.parse(data)
            
            // 确保数据中包含管理员账号和XC888888推荐码
            if (parsedData.registeredUsers && Array.isArray(parsedData.registeredUsers)) {
              // 检查是否存在管理员账号
              const adminExists = parsedData.registeredUsers.some(
                (user: UserInfo) => user.username === 'admin' && user.inviteCode === 'XC888888'
              )
              
              // 如果不存在管理员账号，添加默认管理员
              if (!adminExists) {
                parsedData.registeredUsers.push({
                  id: "ADMIN",
                  username: "admin",
                  nickname: "管理员",
                  password: "admin888",
                  inviteCode: "XC888888",
                  referees: [],
                  token: "admin-token",
                  balance: "200000",
                  baseDeposit: "0",
                  starWalletBalance: "200000",
                  starInvestBalance: "200000",
                  vipLevel: 1,
                  vipName: "普通代理",
                  teamCount: 0,
                  directCount: 0,
                  teamProfit: "0",
                  totalProfit: "0",
                  yesterdayProfit: "0",
                  starInvestProfit: "0",
                  starWalletProfit: "0",
                  avatar: "/avatars/admin.jpg",
                  createTime: new Date().toISOString(),
                  isFirstLogin: true,
                  commission: "0",
                  teamPerformance: "0",
                  completedTasks: [],
                  currentTasks: [],
                  taskHistory: []
                })
              }
            }
            
            // 使用 useStore.setState 更新状态，但保留现有用户数据
            const { useStore } = require('./store')
            const currentState = useStore.getState()
            
            // 合并用户数据，保留现有用户
            if (parsedData.registeredUsers && Array.isArray(parsedData.registeredUsers) && 
                currentState.registeredUsers && Array.isArray(currentState.registeredUsers)) {
              
              // 创建用户ID映射，以便快速查找
              const userMap = new Map<string, UserInfo>()
              currentState.registeredUsers.forEach((user: UserInfo) => {
                userMap.set(user.id, user)
              })
              
              // 合并用户数据，优先使用API中的数据，但保留本地不存在于API中的用户
              const mergedUsers = [...parsedData.registeredUsers]
              
              // 添加本地存在但API中不存在的用户
              currentState.registeredUsers.forEach((localUser: UserInfo) => {
                const exists = parsedData.registeredUsers.some((apiUser: UserInfo) => apiUser.id === localUser.id)
                if (!exists) {
                  mergedUsers.push(localUser)
                }
              })
              
              parsedData.registeredUsers = mergedUsers
            }
            
            // 合并充值记录，保留所有记录
            if (parsedData.rechargeRecords && Array.isArray(parsedData.rechargeRecords) && 
                currentState.rechargeRecords && Array.isArray(currentState.rechargeRecords)) {
              
              // 创建记录ID映射，以便快速查找
              const recordMap = new Map<string, RechargeRecord>()
              parsedData.rechargeRecords.forEach((record: RechargeRecord) => {
                recordMap.set(record.id, record)
              })
              
              // 添加本地存在但API中不存在的记录
              currentState.rechargeRecords.forEach((localRecord: RechargeRecord) => {
                if (!recordMap.has(localRecord.id)) {
                  parsedData.rechargeRecords.push(localRecord)
                }
              })
            }
            
            // 更新状态
            useStore.setState(parsedData)
            
            // 立即保存合并后的数据回API
            saveDataToAPI(parsedData)
          } catch (parseError) {
            console.error('Error parsing data:', parseError)
          }
        }
      }
    } catch (error) {
      console.error('Error loading data from API:', error)
    }
  }
}

// 辅助函数：保存数据到API
const saveDataToAPI = (data: any) => {
  if (typeof window !== 'undefined') {
    try {
      fetch('/api/storage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          key: 'app-storage', 
          data: data  // 不再对data进行JSON.stringify
        }),
      }).catch(error => {
        console.error('Error saving to API:', error)
      })
    } catch (error) {
      console.error('Error preparing data for API:', error)
    }
  }
}

export interface UserInfo {
  id: string           // 用户唯一ID
  username: string     // 用户名（登录账号）
  nickname: string     // 用户昵称（显示名称）
  password: string     // 密码
  inviteCode: string   // 用户的推荐码
  referralCode?: string // 用户注册时填写的推荐人码
  referrer?: string    // 推荐人ID
  referees: string[]   // 被推荐人ID列表
  token: string
  balance: string      // 余额
  baseDeposit: string  // 底仓（不可提现的充值金额）
  starWalletBalance: string  // 星钱包余额
  starInvestBalance: string  // 星投资金
  vipLevel: number     // 代理等级（1-普通代理）
  vipName: string      // 代理级别名称
  teamCount: number    // 团队总人数
  directCount: number  // 直推人数
  teamProfit: string   // 团队总收益
  totalProfit: string  // 总收益
  yesterdayProfit: string  // 昨日收益
  starInvestProfit: string // 星投收益
  starWalletProfit: string // 星钱包收益
  avatar: string       // 头像URL
  createTime: string
  isFirstLogin: boolean // 添加首次登录标记
  commission: string     // 未提现的佣金
  teamPerformance: string // 团队业绩（任务获取资金总和）
  completedTasks: Task[] // 已完成的任务
  currentTasks: Task[]   // 当前进行中的任务
  taskHistory: {         // 任务历史记录
    taskId: string
    type: Task['type']
    completeTime: string
    reward: number
  }[]
}

export interface MarketData {
  symbol: string        // 股票代码
  name: string         // 股票名称
  market: string       // 市场类型（港股/美股/期货/日股）
  price: number        // 当前价格
  change: number       // 价格变动
  changePercent: number // 涨跌幅
  volume: number       // 成交量
  isPositive: boolean  // 是否上涨
  updateTime: string   // 更新时间
}

// 市场指数数据
export interface MarketIndex {
  title: string        // 指数名称
  value: number        // 指数值
  change: number       // 变动点数
  changePercent: number // 变动百分比
  isPositive: boolean  // 是否上涨
  updateTime: string   // 更新时间
}

// 导师交易记录类型定义
interface MentorTrade {
  time: string
  stockCode: string
  stockName: string
  type: '买入' | '卖出'
  price: number
  volume: number
  profit?: number
  profitRate?: string
  action?: "buy" | "sell"
  reason?: string
}

// 扩展TradeRecord接口
interface TradeRecord {
  id: string
  type: "buy" | "sell"
  symbol: string
  price: number
  amount: number
  total: number
  status: "pending" | "completed" | "cancelled"
  createTime: string
  returnTime?: string
  returnAmount?: number
  mentorReturn?: number
  mentorId?: string
  mentorName?: string
  mentorTrades?: MentorTrade[]
  returnRate?: number
}

export interface Task {
  id: string
  type: 'weekly' | 'fiveStars' | 'threeDay' | 'sevenDay' | 'fifteenDay' | 'thirtyDay'
  status: 'pending' | 'completed' | 'expired'
  createTime: string
  completeTime?: string
  reward: number
  requirements: {
    inviteCount: number
    minDeposit: number
    timeLimit: number // 天数
  }
}

// 充值记录状态
export type RechargeStatus = "pending" | "approved" | "rejected"

// 充值记录接口
export interface RechargeRecord {
  id: string
  userId: string
  amount: number
  imageUrl: string
  status: RechargeStatus
  createTime: string
  approveTime?: string
  rejectReason?: string
}

interface StoreState {
  // 用户相关
  userInfo: UserInfo | null
  isLoading: boolean
  userBalance: number        // 余额钱包
  starWalletBalance: number  // 星钱包余额
  starInvestBalance: number  // 星投资金
  totalAssets: number       // 总资产
  registeredUsers: UserInfo[]  // 添加注册用户列表
  setUserInfo: (info: UserInfo | null) => void
  setLoading: (loading: boolean) => void
  logout: () => void
  setUserBalance: (balance: number) => void
  setStarWalletBalance: (balance: number) => void  // 星钱包余额设置器
  setStarInvestBalance: (balance: number) => void  // 星投资金设置器
  clearUserInfo: () => void
  // 账号相关功能
  register: (username: string, password: string, referralCode: string) => Promise<boolean>
  login: (username: string, password: string) => Promise<boolean>
  changePassword: (oldPassword: string, newPassword: string) => Promise<boolean>
  // 生成唯一ID和推荐码
  generateUniqueId: () => string
  generateUniqueInviteCode: () => string

  // 市场数据
  marketList: MarketData[]
  setMarketList: (list: MarketData[]) => void
  updateMarketPrice: (symbol: string, price: number, change: number) => void

  // 交易记录
  tradeRecords: TradeRecord[]
  setTradeRecords: (records: TradeRecord[]) => void
  addTradeRecord: (record: TradeRecord) => void
  processReturns: () => void

  // 系统配置
  theme: "light" | "dark"
  toggleTheme: () => void

  // 添加任务完成后的团队收益更新函数
  updateTeamProfit: (amount: number) => void

  // 计算总资产
  calculateTotalAssets: () => number  // 计算总资产的函数

  // 添加收益相关函数
  getYesterdayTotalProfit: () => string    // 昨日总收益（星投+星钱包）
  getStarInvestTotalProfit: () => string   // 星投累计收益
  getTodayStarWalletProfit: () => string   // 今日星钱包收益（10点结算）
  getDailyProfitCurve: () => {             // 收益曲线数据（星投+星钱包）
    date: string
    profit: number
  }[]

  // 任务相关函数
  submitWeeklyTask: () => Promise<boolean>
  submitFiveStarsTask: () => Promise<boolean>
  submitThreeDayTask: () => Promise<boolean>
  submitSevenDayTask: () => Promise<boolean>
  submitFifteenDayTask: () => Promise<boolean>
  submitThirtyDayTask: () => Promise<boolean>
  checkTaskEligibility: () => void
  getTaskProgress: (taskType: Task['type']) => {
    completed: number
    required: number
    timeLeft: number // 剩余天数
  }
  withdrawCommission: (amount: number) => Promise<boolean>

  // 充值记录相关
  rechargeRecords: RechargeRecord[]
  submitRecharge: (amount: number, imageUrl: string) => Promise<boolean>
  approveRecharge: (recordId: string) => Promise<boolean>
  rejectRecharge: (recordId: string, reason: string) => Promise<boolean>
  getUserRechargeRecords: () => RechargeRecord[]

  // 添加获取可提现余额的函数
  getWithdrawableBalance: () => number

  // 获取收益概览数据
  getProfitOverview: () => {
    totalProfit: string
    profitRate: string
  }

  // 获取星投历史记录
  getStarInvestHistory: () => {
    date: string
    mentorName: string
    amount: string
    profit: string
    profitRate: string
    mentorTrades: MentorTrade[]
  }[]

  // 获取当月星投统计数据
  getCurrentMonthStarInvestStats: () => {
    totalProfit: string
    averageRate: string
  }
}

// 代理等级定义
export const AgentLevels = {
  NORMAL: { name: "普通代理", directCount: 0, teamCount: 0 },  // 添加普通代理等级
  WHITE_SHEEP: { name: "白羊座", directCount: 0, teamCount: 2 },
  GOLDEN_BULL: { name: "金牛座", directCount: 3, teamCount: 3 },
  GEMINI: { name: "巨蟹座", directCount: 5, teamCount: 10 },
  CANCER: { name: "狮子座", directCount: 6, teamCount: 30 },
  VIRGO: { name: "处女座", directCount: 7, teamCount: 100 },
  LIBRA: { name: "天秤座", directCount: 8, teamCount: 300 },
  SCORPIO: { name: "天蝎座", directCount: 10, teamCount: 1000 },
  SAGITTARIUS: { name: "射手座", directCount: 12, teamCount: 3000 },
  CAPRICORN: { name: "摩羯座", directCount: 15, teamCount: 10000 },
  AQUARIUS: { name: "水瓶座", directCount: 20, teamCount: 20000 },
  PISCES: { name: "双鱼座", directCount: 30, teamCount: 50000 },
  TEACHER: { name: "双子座(教皇)", directCount: 40, teamCount: 80000 }
}

// 获取下一个等级信息
export const getNextLevel = (currentLevel: string): { name: string, directNeeded: number, teamNeeded: number } | null => {
  const levels = Object.values(AgentLevels)
  const currentIndex = levels.findIndex(level => level.name === currentLevel)
  
  if (currentIndex === -1 || currentIndex === levels.length - 1) {
    return null // 已经是最高等级
  }

  const nextLevel = levels[currentIndex + 1]
  return {
    name: nextLevel.name,
    directNeeded: nextLevel.directCount,
    teamNeeded: nextLevel.teamCount
  }
}

// 获取升级还需要的人数
export const getUpgradeNeeds = (userInfo: UserInfo): { directNeeded: number, teamNeeded: number } | null => {
  const nextLevel = getNextLevel(userInfo.vipName)
  if (!nextLevel) return null

  return {
    directNeeded: Math.max(0, nextLevel.directNeeded - userInfo.directCount),
    teamNeeded: Math.max(0, nextLevel.teamNeeded - userInfo.teamCount)
  }
}

// 检查并更新用户等级
const checkAndUpdateLevel = (userInfo: UserInfo): UserInfo => {
  let highestLevel = AgentLevels.NORMAL // 从普通代理开始检查
  
  // 遍历所有等级，找到用户符合条件的最高等级
  Object.values(AgentLevels).forEach(level => {
    if (userInfo.directCount >= level.directCount && userInfo.teamCount >= level.teamCount) {
      if (level.directCount >= highestLevel.directCount && level.teamCount >= highestLevel.teamCount) {
        highestLevel = level
      }
    }
  })

  // 如果等级发生变化，更新用户信息
  if (userInfo.vipName !== highestLevel.name) {
    return {
      ...userInfo,
      vipName: highestLevel.name,
      vipLevel: Object.values(AgentLevels).findIndex(l => l.name === highestLevel.name) + 1
    }
  }

  return userInfo
}

// 递归计算用户的团队人数
const calculateTeamCount = (userId: string, users: UserInfo[]): number => {
  const user = users.find(u => u.id === userId)
  if (!user) return 0
  
  let teamCount = 0
  // 遍历直推用户
  user.referees.forEach(refereeId => {
    // 直推用户算一个团队成员
    teamCount += 1
    // 递归计算直推用户的团队人数
    teamCount += calculateTeamCount(refereeId, users)
  })
  
  return teamCount
}

// 更新用户的团队人数
const updateTeamCounts = (users: UserInfo[]): UserInfo[] => {
  return users.map(user => ({
    ...user,
    teamCount: calculateTeamCount(user.id, users)
  }))
}

// 添加获取导师操作记录的函数
const getMentorTrades = (mentorId: string, date: string): TradeRecord['mentorTrades'] => {
  // 这里应该从导师详情页面获取数据
  // 目前使用模拟数据，实际实现时需要从导师详情同步
  return [
    {
      time: `${date} 09:30:00`,
      action: "buy" as const,
      stockCode: "600519",
      stockName: "贵州茅台",
      price: 1800.00,
      reason: "市场企稳，龙头股具有较强防御性",
      type: "买入",
      volume: 100
    },
    {
      time: `${date} 14:30:00`,
      action: "sell" as const,
      stockCode: "600519",
      stockName: "贵州茅台",
      price: 1830.00,
      reason: "获利了结，注意控制仓位",
      type: "卖出",
      volume: 100
    }
  ]
}

// 任务配置
const TaskConfigs = {
  weekly: {
    reward: 1000,
    requirements: {
      inviteCount: 1,
      minDeposit: 5000,
      timeLimit: 7 // 自然周
    }
  },
  fiveStars: {
    reward: 5000,
    requirements: {
      inviteCount: 5,
      minDeposit: 5000,
      timeLimit: 0 // 无时间限制
    }
  },
  threeDay: {
    reward: 1000,
    requirements: {
      inviteCount: 1,
      minDeposit: 5000,
      timeLimit: 3
    }
  },
  sevenDay: {
    reward: 5000,
    requirements: {
      inviteCount: 5,
      minDeposit: 5000,
      timeLimit: 7
    }
  },
  fifteenDay: {
    reward: 10000,
    requirements: {
      inviteCount: 15,
      minDeposit: 5000,
      timeLimit: 15
    }
  },
  thirtyDay: {
    reward: 20000,
    requirements: {
      inviteCount: 30,
      minDeposit: 5000,
      timeLimit: 30
    }
  }
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => {
      // 创建初始状态对象
      const initialState = {
        userInfo: null,
        isLoading: false,
        userBalance: 0,
        starWalletBalance: 0,
        starInvestBalance: 0,
        totalAssets: 0,
        marketList: [],
        tradeRecords: [],
        theme: "light" as const,
        registeredUsers: [{
          id: "ADMIN",
          username: "admin",
          nickname: "管理员",
          password: "admin888",
          inviteCode: "XC888888",
          referees: [],
          token: "admin-token",
          balance: "200000",
          baseDeposit: "0",
          starWalletBalance: "200000",
          starInvestBalance: "200000",
          vipLevel: 1,
          vipName: "普通代理",
          teamCount: 0,
          directCount: 0,
          teamProfit: "0",
          totalProfit: "0",
          yesterdayProfit: "0",
          starInvestProfit: "0",
          starWalletProfit: "0",
          avatar: "/avatars/admin.jpg",
          createTime: new Date().toISOString(),
          isFirstLogin: true,
          commission: "0",
          teamPerformance: "0",
          completedTasks: [],
          currentTasks: [],
          taskHistory: []
        }],
        rechargeRecords: []
      }

      return {
        ...initialState,
        
        setUserInfo: (info) => set({ userInfo: info }),
        setLoading: (loading) => set({ isLoading: loading }),
        
        logout: () => {
          // 清除cookie
          document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
          
          // 只清除当前用户的状态，不清除整个存储
          set({
            userInfo: null,
            isLoading: false,
            userBalance: 0,
            starWalletBalance: 0,
            starInvestBalance: 0,
            marketList: [],
            tradeRecords: [],
            rechargeRecords: []
          })

          // 重定向到登录页
          if (typeof window !== 'undefined') {
            window.location.href = '/login'
          }
        },

        login: async (username: string, password: string) => {
          const state = get()
          // 从注册用户列表中查找用户
          const user = state.registeredUsers.find(
            u => u.username === username && u.password === password
          )

          if (user) {
            // 更新用户状态，保持原有数据
            const updatedUser = {
              ...user,
              balance: user.balance || "200000",
              starWalletBalance: user.starWalletBalance || "200000",
              starInvestBalance: user.starInvestBalance || "200000"
            }
            
            // 更新状态
            set({
              userInfo: updatedUser,
              registeredUsers: state.registeredUsers.map(u => 
                u.id === updatedUser.id ? updatedUser : u
              ),
              userBalance: parseFloat(updatedUser.balance),
              starWalletBalance: parseFloat(updatedUser.starWalletBalance),
              starInvestBalance: parseFloat(updatedUser.starInvestBalance),
              tradeRecords: state.tradeRecords || []
            })

            // 在客户端设置cookie
            if (typeof window !== 'undefined') {
              document.cookie = `token=${updatedUser.token}; path=/; max-age=86400`
            }
            
            return true
          }
          return false
        },

        register: async (username: string, password: string, referralCode: string) => {
          const state = get()
          
          // 检查用户名是否已存在
          if (state.registeredUsers.some(user => user.username === username)) {
            return false
          }

          // 验证推荐码（不区分大小写）
          const referrer = state.registeredUsers.find(
            user => user.inviteCode.toUpperCase() === referralCode.toUpperCase()
          )
          if (!referrer) {
            return false
          }

          // 生成唯一ID和推荐码
          const id = state.generateUniqueId()
          const inviteCode = state.generateUniqueInviteCode()

          // 创建新用户，所有代理中心数据清零
          const newUser: UserInfo = {
            id,
            username,
            nickname: username,
            password,
            inviteCode,
            referralCode,
            referrer: referrer.id,
            referees: [],
            token: Math.random().toString(36).substring(2),
            balance: "0",
            baseDeposit: "0",
            starWalletBalance: "0",
            starInvestBalance: "0",
            vipLevel: 1,
            vipName: "普通代理",
            teamCount: 0,
            directCount: 0,
            teamProfit: "0",
            totalProfit: "0",
            yesterdayProfit: "0",
            starInvestProfit: "0",
            starWalletProfit: "0",
            avatar: "/avatars/default.png",
            createTime: new Date().toISOString(),
            isFirstLogin: true,
            commission: "0",
            teamPerformance: "0",
            completedTasks: [],
            currentTasks: [],
            taskHistory: []
          }

          // 更新推荐人数据
          const updatedUsers = state.registeredUsers.map(user => {
            if (user.id === referrer.id) {
              // 更新直推人数据
              return {
                ...user,
                referees: [...user.referees, id],
                directCount: user.referees.length + 1
              }
            }
            return user
          })

          // 添加新用户并更新所有用户的团队人数
          const allUsers = [...updatedUsers, newUser]
          const usersWithUpdatedTeamCounts = updateTeamCounts(allUsers)

          set({
            ...get(),
            registeredUsers: usersWithUpdatedTeamCounts,
            userInfo: usersWithUpdatedTeamCounts.find(u => u.id === newUser.id)!,
            userBalance: 200000,
            starWalletBalance: 200000,
            starInvestBalance: 200000
          })

          return true
        },

        // 修改密码功能
        changePassword: async (oldPassword: string, newPassword: string) => {
          const state = get()
          if (!state.userInfo) return false

          // 验证旧密码
          if (state.userInfo.password !== oldPassword) {
            return false
          }

          // 验证新密码长度
          if (newPassword.length < 8 || newPassword.length > 20) {
            return false
          }

          // 更新密码
          const updatedUser = {
            ...state.userInfo,
            password: newPassword
          }

          // 更新用户信息和注册用户列表
          set(state => ({
            userInfo: updatedUser,
            registeredUsers: state.registeredUsers.map(user =>
              user.id === updatedUser.id ? updatedUser : user
            )
          }))

          return true
        },

        setUserBalance: (balance) => set({ userBalance: balance }),
        setStarWalletBalance: (balance) => set({ starWalletBalance: balance }),
        setStarInvestBalance: (balance) => set({ starInvestBalance: balance }),
        clearUserInfo: () => set({ userInfo: null }),

        // 市场数据
        marketList: [],
        setMarketList: (list) => set({ marketList: list }),
        updateMarketPrice: (symbol, price, change) =>
          set((state) => ({
            marketList: state.marketList.map((item) =>
              item.symbol === symbol ? { ...item, price, change } : item
            ),
          })),

        // 交易记录
        tradeRecords: [],
        setTradeRecords: (records) => set({ tradeRecords: records }),
        addTradeRecord: (record) => {
          // 根据交易类型计算返还时间和金额
          let returnInfo = null
          if (record.symbol.startsWith('星投-')) {
            // 计算收益率（0.8% - 1.5%之间随机）
            const returnRate = 0.8 + Math.random() * 0.7
            returnInfo = calculateStarInvestReturn(record.total, record.mentorReturn || 0)
            
            // 获取导师当日交易记录
            const mentorTrades = record.mentorId ? 
              getMentorTrades(record.mentorId, new Date().toISOString().split('T')[0]) : 
              []

            record = {
              ...record,
              returnRate,
              mentorTrades
            }
          } else if (record.symbol.startsWith('星钱包-')) {
            returnInfo = calculateStarWalletReturn(record.total)
          }

          const newRecord = {
            ...record,
            returnTime: returnInfo?.returnTime.toISOString(),
            returnAmount: returnInfo?.returnAmount
          }

          set((state) => ({
            tradeRecords: [newRecord, ...state.tradeRecords],
          }))
        },

        // 计算总资产
        calculateTotalAssets: () => {
          const state = get()
          return state.userBalance + state.starWalletBalance + state.starInvestBalance
        },

        // 获取昨日总收益（星投+星钱包）
        getYesterdayTotalProfit: () => {
          const state = get()
          if (!state.userInfo) return "0"
          return state.userInfo.yesterdayProfit
        },

        // 获取星投累计收益
        getStarInvestTotalProfit: () => {
          const state = get()
          if (!state.userInfo) return "0"
          return state.userInfo.starInvestProfit
        },

        // 获取今日星钱包收益
        getTodayStarWalletProfit: () => {
          const state = get()
          const now = new Date()
          const today = now.toISOString().split('T')[0]
          
          // 只统计今天10点结算的收益
          return state.tradeRecords
            .filter(record => {
              if (!record.returnTime) return false
              const returnDate = new Date(record.returnTime)
              const recordDate = returnDate.toISOString().split('T')[0]
              return recordDate === today && 
                     record.symbol.startsWith('星钱包-') &&
                     returnDate.getHours() === 10
            })
            .reduce((sum, record) => sum + (record.returnAmount || 0), 0)
            .toFixed(2)
        },

        // 获取收益曲线数据
        getDailyProfitCurve: () => {
          const state = get()
          const profitMap = new Map<string, number>()

          // 统计每日收益
          state.tradeRecords
            .filter(record => record.returnAmount && record.returnTime)
            .forEach(record => {
              const date = new Date(record.returnTime!).toISOString().split('T')[0]
              const currentProfit = profitMap.get(date) || 0
              profitMap.set(date, currentProfit + record.returnAmount!)
            })

          // 转换为数组并排序
          return Array.from(profitMap.entries())
            .map(([date, profit]) => ({ date, profit }))
            .sort((a, b) => a.date.localeCompare(b.date))
        },

        // 处理收益返还
        processReturns: () => {
          const state = get()
          const now = new Date()
          const yesterday = new Date(now)
          yesterday.setDate(yesterday.getDate() - 1)
          
          // 检查所有待返还的交易记录
          state.tradeRecords.forEach((record) => {
            if (
              record.status === "completed" &&
              record.returnTime &&
              record.returnAmount &&
              shouldReturnProfit(record.createTime, new Date(record.returnTime))
            ) {
              const returnDate = new Date(record.returnTime)
              const isYesterdayReturn = returnDate.getDate() === yesterday.getDate() &&
                                      returnDate.getMonth() === yesterday.getMonth() &&
                                      returnDate.getFullYear() === yesterday.getFullYear()

              // 更新用户余额和收益
              set((state) => {
                const userInfo = state.userInfo
                if (!userInfo) return state

                let newStarInvestProfit = parseFloat(userInfo.starInvestProfit)
                let newStarWalletProfit = parseFloat(userInfo.starWalletProfit)
                let newYesterdayProfit = parseFloat(userInfo.yesterdayProfit)
                let newUserBalance = state.userBalance
                let newStarWalletBalance = state.starWalletBalance
                let newStarInvestBalance = state.starInvestBalance

                // 更新星投收益：本金和收益都转入余额钱包
                if (record.symbol.startsWith('星投-')) {
                  newStarInvestProfit += record.returnAmount! // 累计星投收益
                  newUserBalance += (record.total + record.returnAmount!) // 本金 + 收益
                  newStarInvestBalance -= record.total // 减少星投资金
                  if (isYesterdayReturn) {
                    newYesterdayProfit += record.returnAmount! // 更新昨日总收益
                  }

                  // 获取导师当日操作记录
                  const mentorTrades = record.mentorId ? 
                    getMentorTrades(record.mentorId, record.createTime.split('T')[0]) : 
                    []

                  // 创建新的交易记录
                  const newRecord: TradeRecord = {
                    id: `return-${record.id}`,
                    type: "sell",
                    symbol: record.symbol.replace("买入", "返还"),
                    price: record.price,
                    amount: record.amount,
                    total: record.returnAmount!,
                    status: "completed",
                    createTime: record.createTime,  // 使用原始购买时间
                    returnTime: now.toISOString(),  // 实际返还时间
                    mentorId: record.mentorId,
                    mentorName: record.mentorName,
                    mentorTrades: mentorTrades      // 添加导师操作记录
                  }

                  return {
                    userBalance: newUserBalance,
                    starWalletBalance: newStarWalletBalance,
                    starInvestBalance: newStarInvestBalance,
                    
                    userInfo: {
                      ...userInfo,
                      balance: newUserBalance.toFixed(2),
                      starWalletBalance: newStarWalletBalance.toFixed(2),
                      starInvestBalance: newStarInvestBalance.toFixed(2),
                      starInvestProfit: newStarInvestProfit.toFixed(2),
                      starWalletProfit: newStarWalletProfit.toFixed(2),
                      yesterdayProfit: newYesterdayProfit.toFixed(2),
                      totalProfit: (newStarInvestProfit + newStarWalletProfit).toFixed(2)
                    },

                    tradeRecords: [newRecord, ...state.tradeRecords]
                  }
                }

                // 更新星钱包收益：本金和收益都转入余额钱包
                if (record.symbol.startsWith('星钱包-')) {
                  newStarWalletProfit += record.returnAmount! // 累计星钱包收益
                  newUserBalance += (record.total + record.returnAmount!) // 本金 + 收益
                  newStarWalletBalance -= record.total // 减少星钱包余额
                  if (isYesterdayReturn) {
                    newYesterdayProfit += record.returnAmount! // 更新昨日总收益
                  }
                }

                return {
                  userBalance: newUserBalance,
                  starWalletBalance: newStarWalletBalance,
                  starInvestBalance: newStarInvestBalance,
                  userInfo: {
                    ...userInfo,
                    balance: newUserBalance.toFixed(2),
                    starWalletBalance: newStarWalletBalance.toFixed(2),
                    starInvestBalance: newStarInvestBalance.toFixed(2),
                    starInvestProfit: newStarInvestProfit.toFixed(2),
                    starWalletProfit: newStarWalletProfit.toFixed(2),
                    yesterdayProfit: newYesterdayProfit.toFixed(2),
                    totalProfit: (newStarInvestProfit + newStarWalletProfit).toFixed(2)
                  }
                }
              })
            }
          })

          // 每天0点重置昨日收益
          const resetYesterdayProfit = () => {
            const now = new Date()
            if (now.getHours() === 0 && now.getMinutes() === 0) {
              set((state) => ({
                userInfo: state.userInfo ? {
                  ...state.userInfo,
                  yesterdayProfit: "0"
                } : null
              }))
            }
          }

          // 设置定时器检查是否需要重置昨日收益
          setInterval(resetYesterdayProfit, 60000) // 每分钟检查一次
        },

        // 添加任务完成后的团队收益更新函数
        updateTeamProfit: (amount: number) => {
          set((state) => {
            const userInfo = state.userInfo
            if (!userInfo) return state

            const currentTeamProfit = parseFloat(userInfo.teamProfit)
            const newTeamProfit = currentTeamProfit + amount

            return {
              userInfo: {
                ...userInfo,
                teamProfit: newTeamProfit.toFixed(2)
              }
            }
          })
        },

        // 系统配置
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === "light" ? "dark" : "light",
          })),

        // 生成唯一ID
        generateUniqueId: () => {
          const state = get()
          let id: string
          do {
            id = Math.random().toString(36).substring(2, 10).toUpperCase()
          } while (state.registeredUsers.some(user => user.id === id))
          return id
        },

        // 生成唯一推荐码
        generateUniqueInviteCode: () => {
          const state = get()
          let code: string
          do {
            // 生成6位数字
            const numbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('')
            code = 'XC' + numbers
          } while (state.registeredUsers.some(user => user.inviteCode.toUpperCase() === code.toUpperCase()))
          return code
        },

        // 添加升级检查函数
        checkLevelUpgrade: () => {
          const state = get()
          if (!state.userInfo) return

          const updatedUser = checkAndUpdateLevel(state.userInfo)
          if (updatedUser !== state.userInfo) {
            set({
              userInfo: updatedUser,
              registeredUsers: state.registeredUsers.map(user => 
                user.id === updatedUser.id ? updatedUser : user
              )
            })
          }
        },

        // 检查用户是否满足任务要求
        checkTaskEligibility: () => {
          const state = get()
          if (!state.userInfo) return

          const now = new Date()
          const userCreateTime = new Date(state.userInfo.createTime)
          const daysSinceRegistration = Math.floor((now.getTime() - userCreateTime.getTime()) / (1000 * 60 * 60 * 24))

          // 获取用户的有效推荐人（充值5000以上的）
          const getValidReferrals = (timeLimit: number) => {
            const cutoffDate = new Date()
            cutoffDate.setDate(cutoffDate.getDate() - timeLimit)

            return state.registeredUsers
              .filter(user => 
                user.referrer === state.userInfo?.id &&
                new Date(user.createTime) > cutoffDate &&
                parseFloat(user.balance) >= 5000
              )
          }

          // 检查周薪任务
          const weekStart = new Date(now)
          weekStart.setDate(now.getDate() - now.getDay()) // 设置为本周一
          weekStart.setHours(0, 0, 0, 0)
          const weeklyReferrals = state.registeredUsers
            .filter(user => 
              user.referrer === state.userInfo?.id &&
              new Date(user.createTime) > weekStart &&
              parseFloat(user.balance) >= 5000
            )
          
          // 检查五星拱月任务
          const fiveStarsReferrals = state.registeredUsers
            .filter(user => 
              user.referrer === state.userInfo?.id &&
              parseFloat(user.balance) >= 5000
            )

          // 更新任务状态
          set(state => {
            const userInfo = state.userInfo
            if (!userInfo) return state

            const newTasks: Task[] = []

            // 周薪任务
            if (weeklyReferrals.length >= 1) {
              newTasks.push({
                id: `weekly-${Date.now()}`,
                type: 'weekly',
                status: 'completed',
                createTime: weekStart.toISOString(),
                completeTime: now.toISOString(),
                reward: TaskConfigs.weekly.reward,
                requirements: TaskConfigs.weekly.requirements
              })
            }

            // 五星拱月任务
            if (fiveStarsReferrals.length >= 5) {
              newTasks.push({
                id: `fiveStars-${Date.now()}`,
                type: 'fiveStars',
                status: 'completed',
                createTime: now.toISOString(),
                completeTime: now.toISOString(),
                reward: TaskConfigs.fiveStars.reward,
                requirements: TaskConfigs.fiveStars.requirements
              })
            }

            // 新人任务检查
            if (daysSinceRegistration <= 30) {
              // 三天挑战
              if (daysSinceRegistration <= 3 && getValidReferrals(3).length >= 1) {
                newTasks.push({
                  id: `threeDay-${Date.now()}`,
                  type: 'threeDay',
                  status: 'completed',
                  createTime: userInfo.createTime,
                  completeTime: now.toISOString(),
                  reward: TaskConfigs.threeDay.reward,
                  requirements: TaskConfigs.threeDay.requirements
                })
              }

              // 7天五星
              if (daysSinceRegistration <= 7 && getValidReferrals(7).length >= 5) {
                newTasks.push({
                  id: `sevenDay-${Date.now()}`,
                  type: 'sevenDay',
                  status: 'completed',
                  createTime: userInfo.createTime,
                  completeTime: now.toISOString(),
                  reward: TaskConfigs.sevenDay.reward,
                  requirements: TaskConfigs.sevenDay.requirements
                })
              }

              // 15天团队
              if (daysSinceRegistration <= 15 && getValidReferrals(15).length >= 15) {
                newTasks.push({
                  id: `fifteenDay-${Date.now()}`,
                  type: 'fifteenDay',
                  status: 'completed',
                  createTime: userInfo.createTime,
                  completeTime: now.toISOString(),
                  reward: TaskConfigs.fifteenDay.reward,
                  requirements: TaskConfigs.fifteenDay.requirements
                })
              }

              // 30天团队
              if (daysSinceRegistration <= 30 && getValidReferrals(30).length >= 30) {
                newTasks.push({
                  id: `thirtyDay-${Date.now()}`,
                  type: 'thirtyDay',
                  status: 'completed',
                  createTime: userInfo.createTime,
                  completeTime: now.toISOString(),
                  reward: TaskConfigs.thirtyDay.reward,
                  requirements: TaskConfigs.thirtyDay.requirements
                })
              }
            }

            return {
              userInfo: {
                ...userInfo,
                currentTasks: newTasks
              }
            }
          })
        },

        // 获取任务进度
        getTaskProgress: (taskType: Task['type']) => {
          const state = get()
          if (!state.userInfo) return { completed: 0, required: 0, timeLeft: 0 }

          const now = new Date()
          const userCreateTime = new Date(state.userInfo.createTime)
          const config = TaskConfigs[taskType]

          // 获取有效的推荐人数
          const getValidReferrals = (timeLimit: number) => {
            const cutoffDate = new Date()
            cutoffDate.setDate(cutoffDate.getDate() - timeLimit)

            return state.registeredUsers
              .filter(user => 
                user.referrer === state.userInfo?.id &&
                new Date(user.createTime) > cutoffDate &&
                parseFloat(user.balance) >= config.requirements.minDeposit
              ).length
          }

          let completed = 0
          let timeLeft = 0

          switch (taskType) {
            case 'weekly': {
              const weekStart = new Date(now)
              weekStart.setDate(now.getDate() - now.getDay())
              weekStart.setHours(0, 0, 0, 0)
              completed = getValidReferrals(7)
              timeLeft = 7 - now.getDay()
              break
            }
            case 'fiveStars':
              completed = getValidReferrals(0)
              timeLeft = 0 // 无时间限制
              break
            case 'threeDay':
              completed = getValidReferrals(3)
              timeLeft = Math.max(0, 3 - Math.floor((now.getTime() - userCreateTime.getTime()) / (1000 * 60 * 60 * 24)))
              break
            case 'sevenDay':
              completed = getValidReferrals(7)
              timeLeft = Math.max(0, 7 - Math.floor((now.getTime() - userCreateTime.getTime()) / (1000 * 60 * 60 * 24)))
              break
            case 'fifteenDay':
              completed = getValidReferrals(15)
              timeLeft = Math.max(0, 15 - Math.floor((now.getTime() - userCreateTime.getTime()) / (1000 * 60 * 60 * 24)))
              break
            case 'thirtyDay':
              completed = getValidReferrals(30)
              timeLeft = Math.max(0, 30 - Math.floor((now.getTime() - userCreateTime.getTime()) / (1000 * 60 * 60 * 24)))
              break
          }

          return {
            completed,
            required: config.requirements.inviteCount,
            timeLeft
          }
        },

        // 提现佣金
        withdrawCommission: async (amount: number) => {
          const state = get()
          if (!state.userInfo) return false

          const commission = parseFloat(state.userInfo.commission)
          if (amount > commission) return false

          set(state => ({
            userInfo: {
              ...state.userInfo!,
              commission: (commission - amount).toFixed(2),
              balance: (parseFloat(state.userInfo!.balance) + amount).toFixed(2)
            }
          }))

          return true
        },

        // 提交任务
        submitWeeklyTask: async () => {
          const progress = get().getTaskProgress('weekly')
          if (progress.completed < progress.required) return false
          
          const reward = TaskConfigs.weekly.reward
          set(state => ({
            userInfo: {
              ...state.userInfo!,
              commission: (parseFloat(state.userInfo!.commission) + reward).toFixed(2),
              teamPerformance: (parseFloat(state.userInfo!.teamPerformance) + reward).toFixed(2)
            }
          }))
          
          return true
        },

        // 提交五星拱月任务
        submitFiveStarsTask: async () => {
          const progress = get().getTaskProgress('fiveStars')
          if (progress.completed < progress.required) return false
          
          const reward = TaskConfigs.fiveStars.reward
          set(state => ({
            userInfo: {
              ...state.userInfo!,
              commission: (parseFloat(state.userInfo!.commission) + reward).toFixed(2),
              teamPerformance: (parseFloat(state.userInfo!.teamPerformance) + reward).toFixed(2),
              taskHistory: [
                ...state.userInfo!.taskHistory,
                {
                  taskId: `fiveStars-${Date.now()}`,
                  type: 'fiveStars',
                  completeTime: new Date().toISOString(),
                  reward
                }
              ]
            }
          }))
          
          return true
        },

        // 提交三天挑战任务
        submitThreeDayTask: async () => {
          const progress = get().getTaskProgress('threeDay')
          if (progress.completed < progress.required || progress.timeLeft <= 0) return false
          
          const reward = TaskConfigs.threeDay.reward
          set(state => ({
            userInfo: {
              ...state.userInfo!,
              commission: (parseFloat(state.userInfo!.commission) + reward).toFixed(2),
              teamPerformance: (parseFloat(state.userInfo!.teamPerformance) + reward).toFixed(2),
              completedTasks: [
                ...state.userInfo!.completedTasks,
                {
                  id: `threeDay-${Date.now()}`,
                  type: 'threeDay',
                  status: 'completed',
                  createTime: state.userInfo!.createTime,
                  completeTime: new Date().toISOString(),
                  reward,
                  requirements: TaskConfigs.threeDay.requirements
                }
              ]
            }
          }))
          
          return true
        },

        // 提交7天五星任务
        submitSevenDayTask: async () => {
          const progress = get().getTaskProgress('sevenDay')
          if (progress.completed < progress.required || progress.timeLeft <= 0) return false
          
          const reward = TaskConfigs.sevenDay.reward
          set(state => ({
            userInfo: {
              ...state.userInfo!,
              commission: (parseFloat(state.userInfo!.commission) + reward).toFixed(2),
              teamPerformance: (parseFloat(state.userInfo!.teamPerformance) + reward).toFixed(2),
              taskHistory: [
                ...state.userInfo!.taskHistory,
                {
                  taskId: `sevenDay-${Date.now()}`,
                  type: 'sevenDay',
                  completeTime: new Date().toISOString(),
                  reward
                }
              ]
            }
          }))
          
          return true
        },

        // 提交15天团队任务
        submitFifteenDayTask: async () => {
          const progress = get().getTaskProgress('fifteenDay')
          if (progress.completed < progress.required || progress.timeLeft <= 0) return false
          
          const reward = TaskConfigs.fifteenDay.reward
          set(state => ({
            userInfo: {
              ...state.userInfo!,
              commission: (parseFloat(state.userInfo!.commission) + reward).toFixed(2),
              teamPerformance: (parseFloat(state.userInfo!.teamPerformance) + reward).toFixed(2),
              completedTasks: [
                ...state.userInfo!.completedTasks,
                {
                  id: `fifteenDay-${Date.now()}`,
                  type: 'fifteenDay',
                  status: 'completed',
                  createTime: state.userInfo!.createTime,
                  completeTime: new Date().toISOString(),
                  reward,
                  requirements: TaskConfigs.fifteenDay.requirements
                }
              ]
            }
          }))
          
          return true
        },

        // 提交30天团队任务
        submitThirtyDayTask: async () => {
          const progress = get().getTaskProgress('thirtyDay')
          if (progress.completed < progress.required || progress.timeLeft <= 0) return false
          
          const reward = TaskConfigs.thirtyDay.reward
          set(state => ({
            userInfo: {
              ...state.userInfo!,
              commission: (parseFloat(state.userInfo!.commission) + reward).toFixed(2),
              teamPerformance: (parseFloat(state.userInfo!.teamPerformance) + reward).toFixed(2),
              completedTasks: [
                ...state.userInfo!.completedTasks,
                {
                  id: `thirtyDay-${Date.now()}`,
                  type: 'thirtyDay',
                  status: 'completed',
                  createTime: state.userInfo!.createTime,
                  completeTime: new Date().toISOString(),
                  reward,
                  requirements: TaskConfigs.thirtyDay.requirements
                }
              ]
            }
          }))
          
          return true
        },

        // 充值记录相关
        rechargeRecords: [],

        // 提交充值申请
        submitRecharge: async (amount: number, imageUrl: string) => {
          const state = get()
          if (!state.userInfo) return false

          const newRecord: RechargeRecord = {
            id: Math.random().toString(36).substring(2),
            userId: state.userInfo.id,
            amount,
            imageUrl,
            status: "pending",
            createTime: new Date().toISOString()
          }

          // 更新充值记录
          set(state => ({
            rechargeRecords: [...state.rechargeRecords, newRecord]
          }))

          // 立即保存到 API
          if (typeof window !== 'undefined') {
            try {
              const currentState = get()
              const dataToSave = {
                registeredUsers: currentState.registeredUsers,
                rechargeRecords: currentState.rechargeRecords
              }
              
              fetch('/api/storage', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                  key: 'app-storage', 
                  data: dataToSave  // 不再对dataToSave进行JSON.stringify
                }),
              }).catch(error => {
                console.error('Error saving recharge records to API:', error)
              })
            } catch (error) {
              console.error('Error preparing recharge data:', error)
            }
          }

          return true
        },

        // 审核通过充值
        approveRecharge: async (recordId: string) => {
          const state = get()
          const record = state.rechargeRecords.find(r => r.id === recordId)
          if (!record || record.status !== "pending") return false

          // USDT 到人民币的汇率
          const exchangeRate = 7.4

          // 更新用户余额和充值记录状态
          set(state => {
            // 找到对应的用户
            const userToUpdate = state.registeredUsers.find(u => u.id === record.userId)
            if (!userToUpdate) return state

            // 将 USDT 金额转换为人民币
            const amountInCNY = record.amount * exchangeRate
            
            // 更新用户余额
            const updatedUsers = state.registeredUsers.map(user => {
              if (user.id === record.userId) {
                const newBalance = parseFloat(user.balance) + amountInCNY
                const newBaseDeposit = parseFloat(user.baseDeposit) + amountInCNY
                return {
                  ...user,
                  balance: newBalance.toFixed(2),
                  baseDeposit: newBaseDeposit.toFixed(2)
                }
              }
              return user
            })

            // 更新当前用户信息（如果当前登录的是被充值的用户）
            const userInfo = state.userInfo && state.userInfo.id === record.userId
              ? {
                  ...state.userInfo,
                  balance: (parseFloat(state.userInfo.balance) + amountInCNY).toFixed(2),
                  baseDeposit: (parseFloat(state.userInfo.baseDeposit) + amountInCNY).toFixed(2)
                }
              : state.userInfo

            // 更新充值记录状态
            const updatedRechargeRecords = state.rechargeRecords.map(r => 
              r.id === recordId 
                ? { ...r, status: "approved" as const, approveTime: new Date().toISOString() }
                : r
            )

            // 返回更新后的状态
            const updatedState = {
              userInfo,
              registeredUsers: updatedUsers,
              rechargeRecords: updatedRechargeRecords
            }

            // 立即保存到 API
            if (typeof window !== 'undefined') {
              try {
                // 获取完整的更新后状态
                const fullState = { ...get(), ...updatedState }
                
                // 保存到 API
                fetch('/api/storage', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ 
                    key: 'app-storage', 
                    data: fullState  // 不再对fullState进行JSON.stringify
                  }),
                }).catch(error => {
                  console.error('Error saving to API:', error)
                })
                
                // 同时更新 localStorage
                if (typeof localStorage !== 'undefined') {
                  localStorage.setItem('app-storage', JSON.stringify(fullState))
                }
              } catch (error) {
                console.error('Error preparing data:', error)
              }
            }

            return updatedState
          })

          return true
        },

        // 拒绝充值申请
        rejectRecharge: async (recordId: string, reason: string) => {
          const state = get()
          const record = state.rechargeRecords.find(r => r.id === recordId)
          if (!record || record.status !== "pending") return false

          set(state => ({
            rechargeRecords: state.rechargeRecords.map(r => 
              r.id === recordId 
                ? { ...r, status: "rejected" as const, rejectReason: reason }
                : r
            )
          }))

          return true
        },

        // 获取用户的充值记录
        getUserRechargeRecords: () => {
          const state = get()
          if (!state.userInfo) return []

          return state.rechargeRecords.filter(r => r.userId === state.userInfo?.id)
        },

        // 添加获取可提现余额的函数
        getWithdrawableBalance: () => {
          const state = get()
          if (!state.userInfo) return 0
          
          const totalBalance = parseFloat(state.userInfo.balance)
          const baseDeposit = parseFloat(state.userInfo.baseDeposit)
          const exchangeRate = 7.4 // 使用固定汇率
          
          // 计算可提现金额：(余额-底仓)/汇率*0.9
          const withdrawable = ((totalBalance - baseDeposit) / exchangeRate * 0.9)
          return Math.max(0, withdrawable) // 确保不会返回负数
        },

        // 获取收益概览数据
        getProfitOverview: () => {
          const state = get()
          const userInfo = state.userInfo
          if (!userInfo) return { totalProfit: "0", profitRate: "0" }

          // 计算总收益（星投 + 星钱包）
          const totalProfit = parseFloat(userInfo.starInvestProfit) + parseFloat(userInfo.starWalletProfit)
          
          // 计算收益率
          const totalInvestment = parseFloat(userInfo.starInvestBalance) + parseFloat(userInfo.starWalletBalance)
          const profitRate = totalInvestment > 0 ? (totalProfit / totalInvestment * 100).toFixed(1) : "0"
          
          return {
            totalProfit: totalProfit.toFixed(2),
            profitRate: profitRate
          }
        },

        // 获取星投历史记录
        getStarInvestHistory: () => {
          const state = get()
          return state.tradeRecords.filter(record => 
            record.symbol?.startsWith('星投-') && 
            record.mentorName && 
            record.mentorName === '陈维德' &&
            record.returnAmount && 
            record.returnRate
          ).map(record => ({
            date: new Date(record.createTime).toISOString().split('T')[0],
            mentorName: record.mentorName || '陈维德',
            amount: record.total.toFixed(2),
            profit: record.returnAmount?.toFixed(2) || "0",
            profitRate: record.returnRate?.toFixed(1) || "0",
            mentorTrades: record.mentorTrades || []
          }))
        },

        // 获取当月星投统计数据
        getCurrentMonthStarInvestStats: () => {
          const state = get()
          const now = new Date()
          const currentMonth = now.toISOString().slice(0, 7) // 格式：YYYY-MM
          
          // 获取当月的星投记录
          const monthlyRecords = state.tradeRecords.filter(record => {
            const recordDate = new Date(record.createTime)
            return record.symbol?.startsWith('星投-') && 
                   record.mentorName === '陈维德' &&
                   recordDate.toISOString().slice(0, 7) === currentMonth
          })

          // 计算当月累计收益
          const totalProfit = monthlyRecords.reduce((sum, record) => 
            sum + (record.returnAmount || 0), 0
          )

          // 计算平均日收益率
          const daysInMonth = 30
          const totalRate = monthlyRecords.reduce((sum, record) => 
            sum + (record.returnRate || 0), 0
          )
          const averageRate = monthlyRecords.length > 0 ? 
            (totalRate / daysInMonth).toFixed(1) : "0"

          return {
            totalProfit: totalProfit.toFixed(2),
            averageRate: `${averageRate}%`
          }
        },
      }
    },
    {
      name: "app-storage",
      storage: createJSONStorage(() => ({
        getItem: (name) => {
          try {
            if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
              return localStorage.getItem(name);
            }
            return null;
          } catch (error) {
            console.error('Error reading from storage:', error);
            return null;
          }
        },
        setItem: (name, value) => {
          try {
            if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
              localStorage.setItem(name, value);
            }
            
            if (typeof window !== 'undefined') {
              fetch('/api/storage', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ key: name, data: value }),
              }).catch(error => {
                console.error('Error saving to API:', error);
              });
            }
          } catch (error) {
            console.error('Error writing to storage:', error);
          }
        },
        removeItem: (name) => {
          try {
            if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
              localStorage.removeItem(name);
            }
            
            if (typeof window !== 'undefined') {
              fetch('/api/storage', {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ key: name }),
              }).catch(error => {
                console.error('Error deleting from API:', error);
              });
            }
          } catch (error) {
            console.error('Error removing from storage:', error);
          }
        }
      })),
      partialize: (state) => ({
        theme: state.theme,
        registeredUsers: state.registeredUsers,
        userInfo: state.userInfo,
        userBalance: state.userBalance,
        starWalletBalance: state.starWalletBalance,
        starInvestBalance: state.starInvestBalance,
        tradeRecords: state.tradeRecords,
        rechargeRecords: state.rechargeRecords,
        totalAssets: state.userBalance + state.starWalletBalance + state.starInvestBalance,
        marketList: state.marketList
      }),
      version: 6,
      migrate: (persistedState: any) => {
        // 确保有默认的管理员账号和XC888888推荐码
        const defaultAdmin = {
          id: "ADMIN",
          username: "admin",
          nickname: "管理员",
          password: "admin888",
          inviteCode: "XC888888",
          referees: [],
          token: "admin-token",
          balance: "200000",
          baseDeposit: "0",
          starWalletBalance: "200000",
          starInvestBalance: "200000",
          vipLevel: 1,
          vipName: "普通代理",
          teamCount: 0,
          directCount: 0,
          teamProfit: "0",
          totalProfit: "0",
          yesterdayProfit: "0",
          starInvestProfit: "0",
          starWalletProfit: "0",
          avatar: "/avatars/admin.jpg",
          createTime: new Date().toISOString(),
          isFirstLogin: true,
          commission: "0",
          teamPerformance: "0",
          completedTasks: [],
          currentTasks: [],
          taskHistory: []
        }
        
        // 获取现有的注册用户列表
        let registeredUsers = persistedState.registeredUsers || []
        
        // 检查是否存在管理员账号
        const adminExists = registeredUsers.some(
          (user: any) => user.username === 'admin' && user.inviteCode === 'XC888888'
        )
        
        // 如果不存在管理员账号，添加默认管理员
        if (!adminExists) {
          registeredUsers.push(defaultAdmin)
        }
        
        return {
          ...persistedState,
          totalAssets: (persistedState.userBalance || 0) + 
                      (persistedState.starWalletBalance || 0) + 
                      (persistedState.starInvestBalance || 0),
          userInfo: persistedState.userInfo || null,
          userBalance: persistedState.userBalance || 0,
          starWalletBalance: persistedState.starWalletBalance || 0,
          starInvestBalance: persistedState.starInvestBalance || 0,
          tradeRecords: persistedState.tradeRecords || [],
          theme: persistedState.theme || "light",
          registeredUsers: registeredUsers,
          rechargeRecords: persistedState.rechargeRecords || [],
          marketList: persistedState.marketList || []
        }
      }
    }
  )
) 