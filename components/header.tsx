import type React from "react"
import { Bell, ChevronLeft } from "lucide-react"
import StarCapitalLogo from "@/components/logo"
import { useStore } from "@/lib/store"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"

interface HeaderProps {
  title: string
  showBackButton?: boolean
  showBell?: boolean
  showLogo?: boolean
  centerTitle?: boolean
  leftComponent?: React.ReactNode
  rightComponent?: ReactNode
}

export default function Header({
  title,
  showBackButton = false,
  showBell = true,
  showLogo = true,
  centerTitle = false,
  leftComponent,
  rightComponent
}: HeaderProps) {
  const router = useRouter()

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center">
        {showBackButton && (
          <button
            onClick={() => router.back()}
            className="mr-2 rounded-full p-1 hover:bg-gray-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}
        {leftComponent || (
          <>
            {showLogo && (
              <div className="mr-3">
                <StarCapitalLogo />
              </div>
            )}
            <h1 className={`text-lg font-semibold ${centerTitle ? "flex-1 text-center" : ""}`}>{title}</h1>
          </>
        )}
      </div>

      {centerTitle && <div className="flex-1"></div>}

      {rightComponent || (showBell && <Bell className="h-5 w-5 text-gray-600" />)}
    </header>
  )
}

