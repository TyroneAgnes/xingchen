import { NextResponse } from 'next/server'
import { UserService } from '@/lib/services/userService'
import { sign } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json(
        { error: '用户名和密码不能为空' },
        { status: 400 }
      )
    }

    const user = await UserService.login(username, password)

    // 生成 JWT token
    const token = sign(
      { 
        userId: user.id,
        username: user.username
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    // 更新用户的 token
    await UserService.updateUser(user.id, { token })

    return NextResponse.json({
      message: '登录成功',
      user: {
        id: user.id,
        username: user.username,
        token
      }
    })
  } catch (error: any) {
    console.error('登录失败:', error)
    return NextResponse.json(
      { error: error.message || '登录失败，请稍后重试' },
      { status: 401 }
    )
  }
} 