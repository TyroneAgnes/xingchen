import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import { CustomErrorBoundary } from "@/components/error-boundary"
import ReturnsProcessor from '@/components/returns-processor'
import ClientDataLoader from '@/components/client-data-loader'
import './globals.css'

export const metadata: Metadata = {
  title: "星辰资本",
  description: "星辰资本平台",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CustomErrorBoundary>
          <ClientDataLoader />
          <ReturnsProcessor />
          <Toaster />
          {children}
        </CustomErrorBoundary>
      </body>
    </html>
  )
}
