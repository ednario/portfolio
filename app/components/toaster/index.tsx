'use client'

import { Toaster } from 'react-hot-toast'

function AppToaster() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          background: '#111827',
          color: '#f3f4f6',
          border: '1px solid #374151',
        },
      }}
    />
  )
}

export default AppToaster
