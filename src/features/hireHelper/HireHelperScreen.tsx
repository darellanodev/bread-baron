import React from 'react'
import { HireHelperHeader, HelpersList, HireHelperFooter } from './layout'

interface HireHelperScreenProps {
  onClose: () => void
}

const HireHelperScreen: React.FC<HireHelperScreenProps> = ({ onClose }) => {
  return (
    <div className="bg-bgSecondary dark:bg-bgDark min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-bgLight dark:bg-deepDark rounded-3xl shadow-2xl overflow-hidden border border-borderLight dark:border-borderDark flex flex-col h-[600px]">
        <HireHelperHeader onClose={onClose} />
        <HelpersList />
        <HireHelperFooter onClose={onClose} />
      </div>
    </div>
  )
}

export default HireHelperScreen
