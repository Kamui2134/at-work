import React from 'react'
import './Button.css'

export default function Button({onClick}) {
  return (
    <button onClick={onClick} className='button text-2 semibold'>
      Сохранить
    </button>
  )
}
