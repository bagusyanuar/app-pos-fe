import React, { useState, type HTMLInputTypeAttribute } from 'react'
import { twMerge } from 'tailwind-merge'
import { LuLock, LuEye, LuEyeOff } from 'react-icons/lu'

interface IProps {
  className?: string
  inputClassName?: string
  isError?: boolean
  placeholder?: string
  disabled?: boolean
}

const PasswordField: React.FC<IProps> = ({
  className = '',
  inputClassName = '',
  isError = false,
  placeholder = '',
  disabled = false
}) => {
  const [type, setType] = useState<HTMLInputTypeAttribute>('password')

  const handleChangeType = () => {
    if (!disabled) {
      setType(prev => prev === 'password' ? 'text' : 'password');
    }
  }

  return (
    <div className={twMerge(
      'relative group w-full border border-neutral-400 rounded-lg focus-within:border-neutral-700 transition-[border] duration-300 ease-in-out',
      isError && 'border-red-500 focus-within:border-red-500',
      className
    )}>
      <div className='h-full w-8 rounded-l-lg absolute top-0 left-0 flex items-center justify-center text-neutral-500 group-focus-within:text-neutral-700 transition-colors duration-300 ease-in-out'>
        <LuLock size={14} />
      </div>
      <input
        type={type}
        className={twMerge(
          'w-full py-2.5 px-8 text-sm leading-none rounded-lg text-neutral-500 focus:text-neutral-700 focus:ring-0 focus:outline-none placeholder:text-neutral-400 disabled:bg-neutral-200 transition-colors duration-300 ease-in-out',
          inputClassName
        )}
        placeholder={placeholder}
        disabled={disabled}
      />
      <div
        className='h-full w-8 rounded-l-lg cursor-pointer absolute top-0 right-0 flex items-center justify-center text-neutral-500 group-focus-within:text-neutral-700 transition-colors duration-300 ease-in-out'
        onClick={handleChangeType}
      >
        {type === 'text' ? <LuEye size={14} /> : <LuEyeOff size={14} />}
      </div>
    </div>
  )
}

export default PasswordField