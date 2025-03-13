import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 不需要登录就能访问的路由
const publicRoutes = ['/login', '/register']
// 管理员登录页面
const adminLoginRoute = '/admin/login'

// 添加默认导出
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value
  const adminToken = request.cookies.get('admin_token')?.value

  // 处理管理员路由
  if (pathname.startsWith('/admin')) {
    // 如果是管理员登录页面，直接放行
    if (pathname === adminLoginRoute) {
      return NextResponse.next()
    }
    
    // 如果不是管理员登录页面且没有管理员 token，重定向到管理员登录页面
    if (!adminToken) {
      return NextResponse.redirect(new URL(adminLoginRoute, request.url))
    }
    
    // 有管理员 token，放行
    return NextResponse.next()
  }

  // 处理普通路由
  // 如果是公开路由且已登录，重定向到首页
  if (publicRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // 如果不是公开路由且未登录，重定向到登录页
  if (!publicRoutes.includes(pathname) && !token && !pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// 配置需要进行中间件处理的路由
export const config = {
  matcher: [
    /*
     * 匹配所有路由，除了：
     * - api 路由
     * - _next/static (静态文件)
     * - _next/image (图片优化)
     * - favicon.ico
     * - avatars (头像文件)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|avatars).*)',
  ],
} 