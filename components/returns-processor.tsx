"use client"

import { useEffect } from "react"
import { useStore } from "@/lib/store"

export default function ReturnsProcessor() {
  const { processReturns } = useStore()

  // 每分钟检查一次是否需要返还收益
  useEffect(() => {
    const interval = setInterval(() => {
      processReturns()
    }, 60000) // 60秒

    return () => clearInterval(interval)
  }, [processReturns])

  return null
} 