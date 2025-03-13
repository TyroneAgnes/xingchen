"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  CreditCard, 
  Users, 
  BarChart, 
  Settings, 
  Menu, 
  X,
  LogOut
} from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navItems = [
    {
      name: "充值审核",
      href: "/admin/recharge",
      icon: CreditCard,
    },
    {
      name: "用户管理",
      href: "/admin/users",
      icon: Users,
    },
    {
      name: "数据统计",
      href: "/admin/stats",
      icon: BarChart,
    },
    {
      name: "系统设置",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  // 处理管理员退出登录
  const handleLogout = () => {
    // 清除管理员 token
    document.cookie = "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // 跳转到登录页
    window.location.href = "/admin/login";
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 移动端侧边栏切换按钮 */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-white shadow-md"
        >
          {sidebarOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* 侧边栏 */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold text-blue-600">星辰管理后台</h1>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className={`h-5 w-5 mr-3 ${isActive ? "text-blue-600" : "text-gray-500"}`} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </nav>

          <div className="p-4 border-t">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-blue-600"
              onClick={() => setSidebarOpen(false)}
            >
              <span>返回前台</span>
            </Link>
            
            <button
              onClick={handleLogout}
              className="flex items-center text-red-600 hover:text-red-700 mt-4"
            >
              <LogOut className="h-4 w-4 mr-2" />
              <span>退出登录</span>
            </button>
          </div>
        </div>
      </div>

      {/* 主内容区 */}
      <div className={`lg:ml-64 min-h-screen transition-all duration-300`}>
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
} 