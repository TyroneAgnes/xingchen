import { verify } from 'jsonwebtoken'
import { prisma } from './db'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function verifyAuth(request: Request) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '')
    
    if (!token) {
      return null
    }

    const decoded = verify(token, JWT_SECRET) as { userId: string }
    
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    })

    if (!user || user.token !== token) {
      return null
    }

    return user
  } catch (error) {
    return null
  }
}

export function getTokenFromRequest(request: Request) {
  return request.headers.get('Authorization')?.replace('Bearer ', '') || null
} 