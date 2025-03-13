import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

// 确保数据目录存在
const DATA_DIR = path.join(process.cwd(), 'data')
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}

// 默认管理员账号
const DEFAULT_ADMIN = {
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

// 确保数据包含管理员账号和XC888888推荐码
function ensureAdminAccount(data: any): any {
  try {
    // 处理多层嵌套的JSON字符串
    let parsedData = data;
    
    // 如果是字符串，尝试解析，可能需要多次解析
    if (typeof parsedData === 'string') {
      try {
        // 尝试解析直到不再是JSON字符串
        while (typeof parsedData === 'string') {
          const tempData = JSON.parse(parsedData);
          // 如果解析后仍然是字符串且看起来像JSON，继续解析
          if (typeof tempData === 'string' && 
              (tempData.startsWith('{') || tempData.startsWith('['))) {
            parsedData = tempData;
          } else {
            // 否则使用当前解析结果并退出循环
            parsedData = tempData;
            break;
          }
        }
      } catch (e) {
        // 如果解析失败，使用最后一次成功的解析结果
        console.log('JSON解析中断，使用当前结果:', e);
      }
    }
    
    // 确保parsedData是对象
    if (typeof parsedData !== 'object' || parsedData === null) {
      console.log('数据格式无效，初始化为空对象');
      parsedData = {};
    }
    
    // 如果没有registeredUsers字段或不是数组，初始化为空数组
    if (!parsedData.registeredUsers || !Array.isArray(parsedData.registeredUsers)) {
      parsedData.registeredUsers = [];
    }
    
    // 检查是否存在管理员账号
    const adminExists = parsedData.registeredUsers.some(
      (user: any) => user.username === 'admin' && user.inviteCode === 'XC888888'
    );
    
    // 如果不存在管理员账号，添加默认管理员
    if (!adminExists) {
      parsedData.registeredUsers.push(DEFAULT_ADMIN);
    }
    
    return typeof data === 'string' ? JSON.stringify(parsedData) : parsedData;
  } catch (error) {
    console.error('Error ensuring admin account:', error);
    // 出错时返回原始数据
    return data;
  }
}

// 创建备份文件
function createBackup(key: string, data: string) {
  try {
    const backupDir = path.join(DATA_DIR, 'backups')
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true })
    }
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const backupPath = path.join(backupDir, `${key}-${timestamp}.json`)
    fs.writeFileSync(backupPath, data)
  } catch (error) {
    console.error('Error creating backup:', error)
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  switch (method) {
    case 'GET':
      // 获取存储的数据
      try {
        const { key } = req.query
        if (!key || typeof key !== 'string') {
          return res.status(400).json({ error: 'Key is required' })
        }

        const filePath = path.join(DATA_DIR, `${key}.json`)
        if (!fs.existsSync(filePath)) {
          return res.status(404).json({ error: 'Data not found' })
        }

        let data = fs.readFileSync(filePath, 'utf-8')
        
        // 确保数据包含管理员账号
        if (key === 'app-storage') {
          try {
            // 直接返回处理后的数据，不再进行额外的字符串化
            const processedData = ensureAdminAccount(data);
            return res.status(200).json({ data: processedData });
          } catch (e) {
            console.error('处理app-storage数据时出错:', e);
            return res.status(200).json({ data });
          }
        }
        
        return res.status(200).json({ data })
      } catch (error) {
        console.error('Error reading data:', error)
        return res.status(500).json({ error: 'Failed to read data' })
      }

    case 'POST':
      // 保存数据
      try {
        const { key, data } = req.body
        if (!key || !data) {
          return res.status(400).json({ error: 'Key and data are required' })
        }

        // 创建备份
        const filePath = path.join(DATA_DIR, `${key}.json`)
        if (fs.existsSync(filePath)) {
          const existingData = fs.readFileSync(filePath, 'utf-8')
          createBackup(key, existingData)
        }
        
        // 确保数据包含管理员账号
        let dataToSave = data
        if (key === 'app-storage') {
          try {
            dataToSave = ensureAdminAccount(data);
            // 确保保存的是字符串
            if (typeof dataToSave !== 'string') {
              dataToSave = JSON.stringify(dataToSave);
            }
          } catch (e) {
            console.error('处理app-storage数据保存时出错:', e);
            // 出错时使用原始数据
            dataToSave = data;
          }
        }
        
        fs.writeFileSync(filePath, dataToSave)
        return res.status(200).json({ success: true })
      } catch (error) {
        console.error('Error saving data:', error)
        return res.status(500).json({ error: 'Failed to save data' })
      }

    case 'DELETE':
      // 删除数据
      try {
        const { key } = req.body
        if (!key) {
          return res.status(400).json({ error: 'Key is required' })
        }

        // 如果是app-storage，不允许删除
        if (key === 'app-storage') {
          return res.status(403).json({ error: 'Cannot delete app-storage' })
        }

        const filePath = path.join(DATA_DIR, `${key}.json`)
        if (fs.existsSync(filePath)) {
          // 创建备份后再删除
          const existingData = fs.readFileSync(filePath, 'utf-8')
          createBackup(key, existingData)
          
          fs.unlinkSync(filePath)
        }
        return res.status(200).json({ success: true })
      } catch (error) {
        console.error('Error deleting data:', error)
        return res.status(500).json({ error: 'Failed to delete data' })
      }

    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
} 