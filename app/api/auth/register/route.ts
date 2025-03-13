import { NextResponse } from 'next/server'
import { UserService } from '@/lib/services/userService'

export async function POST(request: Request) {
  try {
    const { username, password, referralCode } = await request.json()

    if (!username || !password) {
      return NextResponse.json(
        { error: '用户名和密码不能为空' },
        { status: 400 }
      )
    }

    const user = await UserService.createUser(username, password, referralCode)

    return NextResponse.json({
      message: '注册成功',
      user: {
        id: user.id,
        username: user.username,
        inviteCode: user.inviteCode
      }
    })
  } catch (error) {
    console.error('注册失败:', error)
    return NextResponse.json(
      { error: '注册失败，请稍后重试' },
      { status: 500 }
    )
  }
} 