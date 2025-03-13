"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // 模拟登录请求
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 验证用户名和密码
      if (username === "admin" && password === "admin888") {
        // 设置cookie
        document.cookie = "admin_token=admin-token; path=/; max-age=86400"
        
        toast({
          title: "登录成功",
          description: "正在进入管理后台",
        })
        
        router.push("/admin")
      } else {
        toast({
          title: "登录失败",
          description: "用户名或密码错误",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("登录失败", error)
      toast({
        title: "登录失败",
        description: "请稍后重试",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Image src="/logo.png" alt="星辰资本" width={64} height={64} />
          <h1 className="text-2xl font-bold">星辰资本管理后台</h1>
          <p className="text-sm text-gray-500 mt-2">管理员登录</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">管理员账号</Label>
            <Input
              id="username"
              placeholder="请输入管理员账号"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">密码</Label>
            <Input
              id="password"
              type="password"
              placeholder="请输入密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "登录中..." : "登录"}
          </Button>
        </form>
      </div>
    </div>
  )
} 