"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Users, BarChart, Settings } from "lucide-react"

export default function AdminDashboard() {
  const router = useRouter()

  const dashboardItems = [
    {
      title: "充值审核",
      description: "审核用户充值申请",
      icon: CreditCard,
      href: "/admin/recharge",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "用户管理",
      description: "管理平台用户",
      icon: Users,
      href: "/admin/users",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "数据统计",
      description: "查看平台数据统计",
      icon: BarChart,
      href: "/admin/stats",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "系统设置",
      description: "管理系统设置",
      icon: Settings,
      href: "/admin/settings",
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">管理后台</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardItems.map((item) => (
          <Card 
            key={item.href} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => router.push(item.href)}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">{item.title}</CardTitle>
              <div className={`p-2 rounded-full ${item.color}`}>
                <item.icon className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 