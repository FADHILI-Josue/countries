"use client"
import { setSelector } from '@/redux/features/selector.slice'
import { RootState } from '@/redux/store'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

interface ClientProps {
  
}

const Client: FC<ClientProps> = ({}) => {
    const { selector } = useSelector((state:RootState) => state.selector)
    const dispatch = useDispatch()
  return <div>
    <h1>{selector}</h1>
    <button onClick={()=>dispatch( selector? setSelector(null):setSelector('Africa'))}>hell</button>
  </div>
}

export default Client