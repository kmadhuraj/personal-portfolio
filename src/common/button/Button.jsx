import React, { Children } from 'react'

export default function Button({children}) {
  return (
   <>
        <button className='tw-border-neutral-50 tw-border-none tw-w-40 tw-rounded-md tw-h-10 tw-bg-violet-500 hover:tw-bg-violet-600 tw-active:bg-violet-700 focus:tw-outline-none focus:tw-ring  focus:tw-ring-violet-300 tw-p-2'>
          {children}
        </button>
   </>
  )
}
