"use client"
import { FC } from 'react'
import { useRouter } from 'next/navigation'

interface BackButtonProps {
  
}

const BackButton: FC<BackButtonProps> = ({}) => {
  const router = useRouter()
  return <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 shadow-md bg-slate-300 dark:bg-gray-700 hover:bg-slate-400 dark:hover:bg-gray-700/80 h-10 px-4 py-2"> <span className="font-bold text-xl mr-2" onClick={() => router.back()}>&larr;</span>back</button>
}

export default BackButton