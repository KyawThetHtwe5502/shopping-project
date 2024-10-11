import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const LoadingCategoryComponents = () => {
  return (
    <div className='flex items-center gap-x-2'>
        <Skeleton className="w-[50px] h-[40px] rounded-md" />
        <Skeleton className="w-[100px] h-[40px] rounded-md" />
        <Skeleton className="w-[100px] h-[40px] rounded-md" />
        <Skeleton className="w-[100px] h-[40px] rounded-md" />
        <Skeleton className="w-[100px] h-[40px] rounded-md" />

    </div>
  )
}

export default LoadingCategoryComponents