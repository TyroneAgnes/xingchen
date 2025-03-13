"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Copy, AlertCircle, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Header from "@/components/header"
import { toast } from "@/hooks/use-toast"
import { useStore } from "@/lib/store"

export default function RechargePage() {
  const { submitRecharge, getUserRechargeRecords } = useStore()
  const [selectedNetwork, setSelectedNetwork] = useState("USDT-TRC20")
  const [rechargeAmount, setRechargeAmount] = useState("")
  const [cnyAmount, setCnyAmount] = useState("")
  const [usdtAmount, setUsdtAmount] = useState("")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isCopied, setIsCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 钱包地址
  const walletAddress = "TPjoRCVvDLqfKyMdKccAMoxvGMBinCpNtm"

  // 汇率
  const exchangeRate = 7.4

  // 网络选项
  const networks = [
    { id: "trc20", name: "USDT-TRC20", icon: "https://cryptologos.cc/logos/tron-trx-logo.png" },
    { id: "erc20", name: "USDT-ERC20", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
    { id: "bep20", name: "USDT-BEP20", icon: "https://cryptologos.cc/logos/bnb-bnb-logo.png" },
    { id: "polygon", name: "USDT-POLYGON", icon: "https://cryptologos.cc/logos/polygon-matic-logo.png" },
    { id: "solana", name: "USDT-SOLANA", icon: "https://cryptologos.cc/logos/solana-sol-logo.png" },
  ]

  // 获取充值记录
  const rechargeHistory = getUserRechargeRecords()

  // 复制文本
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setIsCopied(true)
    toast({
      title: "复制成功",
      description: "内容已复制到剪贴板",
    })

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  // 计算USDT数量
  const calculateUsdt = () => {
    if (!cnyAmount || isNaN(Number(cnyAmount))) {
      toast({
        title: "请输入有效的人民币金额",
        variant: "destructive",
      })
      return
    }

    const calculatedUsdt = (Number(cnyAmount) / exchangeRate).toFixed(2)
    setUsdtAmount(calculatedUsdt)
  }

  // 处理图片上传
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // 提交充值凭证
  const handleSubmitRecharge = async () => {
    if (!rechargeAmount) {
      toast({
        title: "请输入充值金额",
        variant: "destructive",
      })
      return
    }

    if (!uploadedImage) {
      toast({
        title: "请上传充值成功截图",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // 调用 store 中的 submitRecharge 方法
      const success = await submitRecharge(Number(rechargeAmount), uploadedImage)
      
      if (success) {
        toast({
          title: "充值凭证已提交",
          description: "后台已收到，等待工作人员确认后将为您处理充值",
        })
        
        // 清空表单
        setRechargeAmount("")
        setUploadedImage(null)
      } else {
        throw new Error("提交失败")
      }
    } catch (error) {
      toast({
        title: "提交失败",
        description: "请稍后重试",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        title="充值"
        centerTitle={true}
        showBell={false}
        showLogo={false}
        leftComponent={
          <Link href="/profile" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
        }
      />

      <div className="px-4 py-4 space-y-4">
        {/* 选择网络 */}
        <div className="font-medium">选择 USDT 网络</div>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {networks.map((network) => (
                <div
                  key={network.id}
                  className={`flex items-center p-2 rounded-lg border cursor-pointer ${
                    selectedNetwork === network.name ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white/60"
                  }`}
                  onClick={() => setSelectedNetwork(network.name)}
                >
                  <img src={network.icon || "/placeholder.svg"} alt={network.name} className="w-6 h-6 mr-2" />
                  <span className="text-sm font-medium">{network.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* USDT兑换比例 */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <img src="https://cryptologos.cc/logos/tether-usdt-logo.png" alt="USDT" className="w-6 h-6 mr-2" />
                <span className="font-medium">今日USDT兑换比例</span>
              </div>
              <div className="text-xs text-gray-500">更新于 10:30</div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center p-2 border-r border-gray-100">
                <div className="text-xs text-gray-500 mb-1">USDT/CNY</div>
                <div className="font-semibold">{exchangeRate} ¥</div>
              </div>
              <div className="text-center p-2 border-r border-gray-100">
                <div className="text-xs text-gray-500 mb-1">USDT/USD</div>
                <div className="font-semibold">0.999 $</div>
              </div>
              <div className="text-center p-2">
                <div className="text-xs text-gray-500 mb-1">USDT/EUR</div>
                <div className="font-semibold">0.921 €</div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100">
              <div className="text-sm font-medium mb-2">人民币兑换USDT计算</div>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <Input
                    type="number"
                    placeholder="输入人民币金额"
                    value={cnyAmount}
                    onChange={(e) => setCnyAmount(e.target.value)}
                  />
                </div>
                <div className="text-gray-500">→</div>
                <div className="flex-1">
                  <Input type="number" placeholder="USDT数量" value={usdtAmount} readOnly className="bg-gray-50" />
                </div>
                <Button size="sm" onClick={calculateUsdt}>
                  计算
                </Button>
              </div>
            </div>

            <div className="text-xs text-gray-500 text-right mt-2">数据来源: 欧意交易所</div>
          </CardContent>
        </Card>

        {/* 钱包地址 */}
        <div className="font-medium">{selectedNetwork} 充值地址</div>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="relative bg-gray-50 p-3 rounded-lg mb-4 break-all font-mono text-sm">
              {walletAddress}
              <Button
                variant="outline"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 text-xs"
                onClick={() => copyToClipboard(walletAddress)}
              >
                {isCopied ? <CheckCircle className="h-3 w-3 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
                {isCopied ? "已复制" : "复制"}
              </Button>
            </div>

            <div className="flex justify-center mb-4">
              <div className="w-48 h-48 bg-white/60 p-2 border border-gray-200 rounded-lg">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${walletAddress}`}
                  alt="USDT 钱包地址二维码"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg">
              <div className="flex items-center font-medium text-amber-800 mb-2">
                <AlertCircle className="h-4 w-4 mr-2" />
                充值提示
              </div>
              <div className="text-sm text-amber-700 space-y-1">
                <p>1. 请确保充值网络正确，仅支持 {selectedNetwork} 网络充值。</p>
                <p>2. 最小充值金额：10 USDT，小于最小金额的充值将不会被处理。</p>
                <p>3. 充值需要网络确认，一般 1-3 个确认后到账。</p>
                <p>4. 请勿向上述地址充值任何非 USDT 资产，否则资产将不可找回。</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 提交充值凭证 */}
        <div className="font-medium">提交充值凭证</div>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">充值金额 (USDT)</label>
                <Input
                  type="number"
                  placeholder="请输入您已充值的USDT金额"
                  value={rechargeAmount}
                  onChange={(e) => setRechargeAmount(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">充值截图</label>
                <div className="mt-1">
                  <input
                    type="file"
                    id="screenshotUpload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  {!uploadedImage ? (
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500"
                      onClick={() => document.getElementById("screenshotUpload")?.click()}
                    >
                      <div className="text-gray-500">
                        <div className="flex justify-center mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <p>上传充值成功截图</p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={uploadedImage || "/placeholder.svg"}
                        alt="充值截图"
                        className="max-h-48 mx-auto rounded-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Button
                          variant="destructive"
                          size="sm"
                          className="h-7 w-7 p-0 rounded-full"
                          onClick={() => setUploadedImage(null)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="text-center mt-2 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4 inline mr-1" />
                        已上传截图
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Button 
                className="w-full" 
                onClick={handleSubmitRecharge}
                disabled={isSubmitting}
              >
                {isSubmitting ? "提交中..." : "提交充值凭证"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 充值记录 */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="font-medium">充值记录</div>
              <Button variant="ghost" size="sm" className="h-7 text-xs text-blue-600">
                查看全部
              </Button>
            </div>

            <div className="space-y-3">
              {rechargeHistory.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-3 border rounded-lg"
                >
                  <div>
                    <div className="font-medium">充值 ¥{item.amount}</div>
                    <div className="text-sm text-gray-500">
                      {new Date(item.createTime).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    {item.status === "approved" ? (
                      <span className="text-green-600 text-sm">已完成</span>
                    ) : item.status === "rejected" ? (
                      <span className="text-red-600 text-sm">已拒绝</span>
                    ) : (
                      <span className="text-yellow-600 text-sm">审核中</span>
                    )}
                  </div>
                </div>
              ))}
              {rechargeHistory.length === 0 && (
                <div className="text-center py-4 text-gray-500">暂无充值记录</div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

