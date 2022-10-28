import React from 'react'
import toast from 'react-hot-toast'
import { AiOutlineCheck, AiOutlineCloseCircle } from 'react-icons/ai'
import { RESPONSE_TYPE } from '../../constants/constants'

import { Icon } from './ToastCustom.styled'

export const ToastCustom = (type: string, description = '') => (
  <>
    {type === RESPONSE_TYPE.ERROR && 
      toast.error(description, {
        position: 'bottom-left',
        icon: <Icon><AiOutlineCloseCircle/></Icon>,
        style: {border:'1px solid #FF1D39', background: '#FF1D39',color:'#fff'},
        duration: 5000,
    })}
    {type === RESPONSE_TYPE.SUCCESS && 
      toast.success(description, {
        position: 'bottom-left',
        icon: <Icon><AiOutlineCheck/></Icon>,
        style: {border:'1px solid #06af00', background: '#06af00',color:'#fff'},
        duration: 5000,
    })}
  </>
)
