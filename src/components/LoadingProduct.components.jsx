import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const LoadingProductComponents = () => {
    const loadings = Array.from({ length: 4 }, (_, index) => index)
    return (
        <div className='grid grid-cols-4'>
            {loadings.map((loading) => <div key={loading} className="flex flex-col space-y-5">
                <Skeleton className = "h-10 w-[250px] rounded-xl" />
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
                <Skeleton className=" h-10 w-[250px] rounded-xl" />
            </div>
            )}
        </div>


    )
}

export default LoadingProductComponents