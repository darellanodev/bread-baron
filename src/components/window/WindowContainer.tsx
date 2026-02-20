import type { ReactNode } from 'react'

interface WindowContainerProps {
  children: ReactNode
  maxWidth?: string
  height?: string
  rounded?: 'xl' | '3xl'
}

export function WindowContainer({
  children,
  maxWidth = 'max-w-4xl',
  height = 'max-h-[calc(100vh-100px)]',
  rounded = 'xl',
}: WindowContainerProps) {
  return (
    <div className="bg-bgSecondary dark:bg-bgDark min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <div
        className={`bg-bgLight dark:bg-deepDark w-full ${maxWidth} ${height} overflow-hidden ${rounded === 'xl' ? 'rounded-xl' : 'rounded-3xl'} shadow-2xl flex flex-col border border-borderLight dark:border-borderDark`}
      >
        {children}
      </div>
    </div>
  )
}
