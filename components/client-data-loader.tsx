"use client"

import { useEffect } from "react"
import { loadDataFromAPI } from "@/lib/store"

export default function ClientDataLoader() {
  useEffect(() => {
    // 在组件挂载时加载数据
    loadDataFromAPI()
    
    // 设置定时器，每5分钟从API重新加载一次数据
    const intervalId = setInterval(() => {
      loadDataFromAPI()
    }, 5 * 60 * 1000)
    
    // 清理函数
    return () => clearInterval(intervalId)
  }, [])
  
  return null
} 