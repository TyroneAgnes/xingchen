import { prisma } from '../db'

export class TradeService {
  // 创建交易记录
  static async createTrade(
    userId: string,
    type: 'buy' | 'sell',
    symbol: string,
    price: number,
    amount: number,
    mentorId?: string,
    mentorName?: string
  ) {
    const total = price * amount

    return prisma.tradeRecord.create({
      data: {
        userId,
        type,
        symbol,
        price,
        amount,
        total,
        status: 'pending',
        mentorId,
        mentorName
      }
    })
  }

  // 完成交易
  static async completeTrade(
    tradeId: string,
    returnAmount: number,
    returnRate: number
  ) {
    return prisma.tradeRecord.update({
      where: { id: tradeId },
      data: {
        status: 'completed',
        returnTime: new Date(),
        returnAmount,
        returnRate
      }
    })
  }

  // 获取用户交易记录
  static async getUserTrades(userId: string) {
    return prisma.tradeRecord.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        mentorTrades: true
      }
    })
  }

  // 获取导师交易记录
  static async getMentorTrades(mentorId: string) {
    return prisma.tradeRecord.findMany({
      where: { mentorId },
      orderBy: { createdAt: 'desc' },
      include: {
        mentorTrades: true
      }
    })
  }

  // 创建导师交易记录
  static async createMentorTrade(
    tradeRecordId: string,
    stockCode: string,
    stockName: string,
    type: 'buy' | 'sell',
    price: number,
    volume: number,
    profit?: number,
    profitRate?: string
  ) {
    return prisma.mentorTrade.create({
      data: {
        tradeRecordId,
        time: new Date(),
        stockCode,
        stockName,
        type,
        price,
        volume,
        profit,
        profitRate
      }
    })
  }
} 