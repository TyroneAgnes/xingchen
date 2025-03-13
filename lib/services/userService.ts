import { prisma } from '../db'
import { hash, compare } from 'bcryptjs'

export class UserService {
  // 创建新用户
  static async createUser(username: string, password: string, referralCode?: string) {
    const hashedPassword = await hash(password, 10)
    const inviteCode = Math.random().toString(36).substring(2, 8).toUpperCase()

    let referrer = null
    if (referralCode) {
      referrer = await prisma.user.findFirst({
        where: { inviteCode: referralCode }
      })
    }

    return prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        inviteCode,
        referralCode: referralCode,
        referrerId: referrer?.id
      }
    })
  }

  // 用户登录
  static async login(username: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { username }
    })

    if (!user) {
      throw new Error('用户不存在')
    }

    const isValid = await compare(password, user.password)
    if (!isValid) {
      throw new Error('密码错误')
    }

    return user
  }

  // 获取用户资产信息
  static async getUserAssets(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        balance: true,
        starWalletBalance: true,
        starInvestBalance: true,
        totalProfit: true,
        yesterdayProfit: true
      }
    })

    if (!user) {
      throw new Error('用户不存在')
    }

    return {
      totalAssets: user.balance + user.starWalletBalance + user.starInvestBalance,
      ...user
    }
  }

  // 获取用户团队信息
  static async getTeamInfo(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        referees: true
      }
    })

    if (!user) {
      throw new Error('用户不存在')
    }

    return {
      teamCount: user.teamCount,
      directCount: user.directCount,
      teamProfit: user.teamProfit,
      teamPerformance: user.teamPerformance,
      referees: user.referees
    }
  }

  // 更新用户信息
  static async updateUser(userId: string, data: any) {
    return prisma.user.update({
      where: { id: userId },
      data
    })
  }
} 