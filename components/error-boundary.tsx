"use client"

import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class CustomErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // 更新 state 使下一次渲染能够显示降级 UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // 你同样可以将错误日志上报给服务器
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      // 你可以自定义降级 UI 并渲染
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">出错了</h1>
          <p className="text-gray-600 mb-6">应用程序遇到了一个问题，请刷新页面重试。</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            刷新页面
          </button>
          {process.env.NODE_ENV !== 'production' && (
            <div className="mt-6 p-4 bg-gray-100 rounded text-left overflow-auto max-w-full">
              <p className="font-mono text-sm text-red-500">{this.state.error?.toString()}</p>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
} 