"use client"

import { useState, useEffect } from "react"
import { Wallet, Star, Calendar, Filter, ChevronRight, Plus, Download, Bell } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PageBackground from "@/components/page-background"
import { useRouter } from "next/navigation"
import BottomNav from "@/components/bottom-nav"
import { useStore } from "@/lib/store"

// 定义交易记录类型
interface TradeRecord {
  id: string
  type: string
  product: string
  amount: string
  date: string
  time: string
  status: string
  profit?: string
  profitPercentage?: string
  method?: string
  bank?: string
}

export default function TradePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [timeRange, setTimeRange] = useState("7d")
  const [totalProfit, setTotalProfit] = useState("0")
  const [profitPercentage, setProfitPercentage] = useState("0")
  const [profitTrend, setProfitTrend] = useState<number[]>([])
  const router = useRouter()

  const { userBalance, starWalletBalance, tradeRecords } = useStore()

  // 移除模拟数据的useEffect
  useEffect(() => {
    setTotalProfit("0")
    setProfitPercentage("0")
    setProfitTrend([])
  }, [timeRange])

  // 交易记录数据 - 设置为空数组
  const transactionData: {
    starInvest: TradeRecord[]
    starWallet: TradeRecord[]
    deposit: TradeRecord[]
    withdraw: TradeRecord[]
  } = {
    starInvest: [],
    starWallet: [],
    deposit: [],
    withdraw: []
  }

  // 获取收益曲线数据点
  const getChartPath = () => {
    if (!profitTrend.length) return ""

    const maxValue = Math.max(...profitTrend)
    const minValue = Math.min(...profitTrend)
    const range = maxValue - minValue
    const height = 100
    const width = 100

    // 计算标准化后的点
    const points = profitTrend.map((value, index) => {
      const x = (index / (profitTrend.length - 1)) * width
      const y = height - ((value - minValue) / range) * height
      return `${x},${y}`
    })

    return `M0,${points[0].split(",")[1]} L${points.join(" L")} L100,${points[profitTrend.length - 1].split(",")[1]}`
  }

  return (
    <PageBackground>
      <div className="flex flex-col min-h-screen pb-14">
        {/* 使用Header组件 */}
        <Header title="交易" rightComponent={<Bell className="h-5 w-5 text-gray-600" />} />

        {/* 内容区域 */}
        <div className="px-4 py-4 space-y-5">
          {/* 余额钱包卡片 */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="border-0 shadow-sm overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-3">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <Wallet className="h-4 w-4 mr-1.5 opacity-80" />
                      <span className="text-sm opacity-90">余额钱包</span>
                    </div>
                  </div>
                  <div className="text-xl font-bold">¥ {userBalance.toLocaleString()}</div>
                </div>
                <div className="p-2 flex justify-between">
                  <Link href="/recharge">
                    <Button variant="ghost" size="sm" className="text-xs h-8 px-2">
                      <Plus className="h-3.5 w-3.5 mr-1" />
                      充值
                    </Button>
                  </Link>
                  <Link href="/withdraw">
                    <Button variant="ghost" size="sm" className="text-xs h-8 px-2">
                      <Download className="h-3.5 w-3.5 mr-1" />
                      提现
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 星钱包卡片 */}
            <Card className="border-0 shadow-sm overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white p-3">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1.5 opacity-80" />
                      <span className="text-sm opacity-90">星钱包</span>
                    </div>
                    <Button
                      size="sm"
                      variant="default"
                      className="h-8 px-4 bg-orange-600 hover:bg-orange-700 text-white border-0 font-medium"
                      onClick={() => router.push("/star-invest/transfer")}
                    >
                      转入
                    </Button>
                  </div>
                  <div className="text-xl font-bold">¥ {starWalletBalance.toLocaleString()}</div>
                </div>
                <div className="p-2 flex justify-between items-center">
                  <div className="text-xs text-green-600 font-medium">+¥{totalProfit}</div>
                  <div className="text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded">+{profitPercentage}%</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 收益曲线 */}
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold">收益曲线</h2>
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-24 h-7 text-xs">
                    <SelectValue placeholder="时间范围" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">7天</SelectItem>
                    <SelectItem value="30d">30天</SelectItem>
                    <SelectItem value="90d">90天</SelectItem>
                    <SelectItem value="1y">1年</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="h-48 w-full relative">
                <div className="h-full w-full flex items-center justify-center text-gray-400">暂无数据</div>
                {/* 收益数据 */}
                <div className="absolute top-0 left-0 p-2">
                  <div className="text-sm text-gray-500">总收益</div>
                  <div className="text-xl font-bold text-green-600">+¥{totalProfit}</div>
                  <div className="text-sm text-green-600">+{profitPercentage}%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 交易记录标签页 */}
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-4">
              <Tabs defaultValue="starInvest" className="w-full">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="starInvest">星投记录</TabsTrigger>
                  <TabsTrigger value="starWallet">星钱包</TabsTrigger>
                  <TabsTrigger value="deposit">充值</TabsTrigger>
                  <TabsTrigger value="withdraw">提现</TabsTrigger>
                </TabsList>

                {/* 星投记录 */}
                <TabsContent value="starInvest">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-sm">星投交易记录</h3>
                    <div className="flex items-center">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Filter className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {transactionData.starInvest.map((item) => (
                      <div key={item.id} className="border border-gray-100 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <span
                              className={`text-xs px-2 py-0.5 rounded ${
                                item.type === "买入" ? "bg-blue-100 text-blue-600" : "bg-orange-100 text-orange-600"
                              }`}
                            >
                              {item.type}
                            </span>
                            <span className="ml-2 font-medium text-sm">{item.product}</span>
                          </div>
                          <span className="text-xs text-gray-500">{item.date}</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold">¥{item.amount}</span>
                          <div className="flex items-center">
                            <span className="text-sm text-green-600 font-medium mr-2">{item.profit}</span>
                            <span className="text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded">
                              {item.profitPercentage}
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                          <span>订单号: {item.id}</span>
                          <span>{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full mt-3 text-sm text-blue-600">
                    查看更多 <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </TabsContent>

                {/* 星钱包记录 */}
                <TabsContent value="starWallet">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-sm">星钱包交易记录</h3>
                    <div className="flex items-center">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Filter className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {transactionData.starWallet.map((item) => (
                      <div key={item.id} className="border border-gray-100 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <span
                              className={`text-xs px-2 py-0.5 rounded ${
                                item.type === "买入" ? "bg-purple-100 text-purple-600" : "bg-orange-100 text-orange-600"
                              }`}
                            >
                              {item.type}
                            </span>
                            <span className="ml-2 font-medium text-sm">{item.product}</span>
                          </div>
                          <span className="text-xs text-gray-500">{item.date}</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold">¥{item.amount}</span>
                          <div className="flex items-center">
                            <span className="text-sm text-green-600 font-medium mr-2">{item.profit}</span>
                            <span className="text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded">
                              {item.profitPercentage}
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                          <span>订单号: {item.id}</span>
                          <span>{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full mt-3 text-sm text-blue-600">
                    查看更多 <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </TabsContent>

                {/* 充值记录 */}
                <TabsContent value="deposit">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-sm">充值记录</h3>
                    <div className="flex items-center">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Filter className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {transactionData.deposit.map((item) => (
                      <div key={item.id} className="border border-gray-100 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-600">{item.type}</span>
                            <span className="ml-2 font-medium text-sm">¥{item.amount}</span>
                          </div>
                          <span className="text-xs text-gray-500">{item.date}</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">{item.method}</span>
                          <span className="text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded">
                            {item.status}
                          </span>
                        </div>

                        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                          <span>订单号: {item.id}</span>
                          <span>{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full mt-3 text-sm text-blue-600">
                    查看更多 <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </TabsContent>

                {/* 提现记录 */}
                <TabsContent value="withdraw">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-sm">提现记录</h3>
                    <div className="flex items-center">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Filter className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {transactionData.withdraw.map((item) => (
                      <div key={item.id} className="border border-gray-100 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-orange-600">
                              {item.type}
                            </span>
                            <span className="ml-2 font-medium text-sm">¥{item.amount}</span>
                          </div>
                          <span className="text-xs text-gray-500">{item.date}</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">{item.method}</span>
                          <span className="text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded">
                            {item.status}
                          </span>
                        </div>

                        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                          <span>订单号: {item.id}</span>
                          <span>{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full mt-3 text-sm text-blue-600">
                    查看更多 <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* 底部标签栏 */}
        <BottomNav />
      </div>
    </PageBackground>
  )
}

