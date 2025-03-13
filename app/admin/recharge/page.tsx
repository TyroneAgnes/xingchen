"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useStore } from "@/lib/store"
import type { RechargeRecord } from "@/lib/store"
import { Check, X, Search, RefreshCw } from "lucide-react"

export default function AdminRechargePage() {
  const { toast } = useToast()
  const rechargeRecords = useStore(state => state.rechargeRecords) || []
  const approveRecharge = useStore(state => state.approveRecharge)
  const rejectRecharge = useStore(state => state.rejectRecharge)
  const [activeTab, setActiveTab] = useState("pending")
  const [isLoading, setIsLoading] = useState(false)

  // 处理审核通过
  const handleApprove = async (record: RechargeRecord) => {
    try {
      setIsLoading(true)
      const success = await approveRecharge(record.id)
      if (success) {
        toast({
          title: "审核成功",
          description: "充值已通过审核并已添加到用户余额"
        })
      } else {
        throw new Error("审核失败")
      }
    } catch (error) {
      toast({
        title: "审核失败",
        description: error instanceof Error ? error.message : "未知错误",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  // 处理拒绝充值
  const handleReject = async (record: RechargeRecord) => {
    try {
      setIsLoading(true)
      const success = await rejectRecharge(record.id, "充值凭证不符合要求，请重新提交")
      if (success) {
        toast({
          title: "已拒绝充值申请",
          description: "已通知用户充值被拒绝"
        })
      } else {
        throw new Error("操作失败")
      }
    } catch (error) {
      toast({
        title: "操作失败",
        description: error instanceof Error ? error.message : "未知错误",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  // 根据状态筛选记录
  const filteredRecords = rechargeRecords.filter(record => {
    if (activeTab === "all") return true
    return record.status === activeTab
  })

  // 获取各状态的记录数量
  const pendingCount = rechargeRecords.filter(record => record.status === "pending").length
  const approvedCount = rechargeRecords.filter(record => record.status === "approved").length
  const rejectedCount = rechargeRecords.filter(record => record.status === "rejected").length

  // 模拟刷新数据
  const refreshData = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "数据已刷新",
        description: "充值记录已更新"
      })
    }, 1000)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">充值审核</h1>
        <Button variant="outline" size="sm" onClick={refreshData} disabled={isLoading}>
          {isLoading ? (
            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4 mr-2" />
          )}
          刷新
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">待审核</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">已通过</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{approvedCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">已拒绝</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{rejectedCount}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="pending">
            待审核
            {pendingCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {pendingCount}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="approved">已通过</TabsTrigger>
          <TabsTrigger value="rejected">已拒绝</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {filteredRecords.length === 0 ? (
            <Card className="p-8 text-center text-gray-500">
              <div className="flex flex-col items-center justify-center">
                <Search className="h-12 w-12 text-gray-300 mb-4" />
                <p>暂无待审核的充值申请</p>
              </div>
            </Card>
          ) : (
            filteredRecords.map(record => (
              <Card key={record.id} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 md:border-r">
                    <h3 className="font-medium mb-2">充值信息</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">用户ID:</span>
                        <span className="font-medium">{record.userId.substring(0, 8)}...</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">充值金额:</span>
                        <span className="font-medium text-blue-600">¥{record.amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">申请时间:</span>
                        <span className="text-sm">{new Date(record.createTime).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:col-span-2">
                    <h3 className="font-medium mb-2">支付凭证</h3>
                    <div className="relative w-full h-48 bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={record.imageUrl}
                        alt="支付凭证"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button
                        className="flex-1"
                        onClick={() => handleApprove(record)}
                        disabled={isLoading}
                      >
                        <Check className="h-4 w-4 mr-2" />
                        通过
                      </Button>
                      <Button
                        variant="destructive"
                        className="flex-1"
                        onClick={() => handleReject(record)}
                        disabled={isLoading}
                      >
                        <X className="h-4 w-4 mr-2" />
                        拒绝
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4">
          {filteredRecords.length === 0 ? (
            <Card className="p-8 text-center text-gray-500">
              <div className="flex flex-col items-center justify-center">
                <Search className="h-12 w-12 text-gray-300 mb-4" />
                <p>暂无已通过的充值记录</p>
              </div>
            </Card>
          ) : (
            filteredRecords.map(record => (
              <Card key={record.id} className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">用户ID: {record.userId.substring(0, 8)}...</p>
                    <p className="text-blue-600 font-medium">¥{record.amount}</p>
                    <p className="text-xs text-gray-500">
                      申请时间: {new Date(record.createTime).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">
                      审核时间: {new Date(record.createTime).toLocaleString()}
                    </p>
                  </div>
                  <Badge className="bg-green-100 text-green-600 hover:bg-green-100">已通过</Badge>
                </div>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4">
          {filteredRecords.length === 0 ? (
            <Card className="p-8 text-center text-gray-500">
              <div className="flex flex-col items-center justify-center">
                <Search className="h-12 w-12 text-gray-300 mb-4" />
                <p>暂无已拒绝的充值记录</p>
              </div>
            </Card>
          ) : (
            filteredRecords.map(record => (
              <Card key={record.id} className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">用户ID: {record.userId.substring(0, 8)}...</p>
                    <p className="text-blue-600 font-medium">¥{record.amount}</p>
                    <p className="text-xs text-gray-500">
                      申请时间: {new Date(record.createTime).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">
                      拒绝原因: {record.rejectReason || "无"}
                    </p>
                  </div>
                  <Badge variant="destructive">已拒绝</Badge>
                </div>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
} 