import { NextResponse } from 'next/server'
import { TradeService } from '@/lib/services/tradeService'
import { verifyAuth } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const user = await verifyAuth(request)
    if (!user) {
      return NextResponse.json(
        { error: '请先登录' },
        { status: 401 }
      )
    }

    const {
      type,
      symbol,
      price,
      amount,
      mentorId,
      mentorName
    } = await request.json()

    if (!type || !symbol || !price || !amount) {
      return NextResponse.json(
        { error: '交易参数不完整' },
        { status: 400 }
      )
    }

    const trade = await TradeService.createTrade(
      user.id,
      type,
      symbol,
      price,
      amount,
      mentorId,
      mentorName
    )

    return NextResponse.json({
      message: '创建交易成功',
      trade
    })
  } catch (error) {
    console.error('创建交易失败:', error)
    return NextResponse.json(
      { error: '创建交易失败，请稍后重试' },
      { status: 500 }
    )
  }
} 