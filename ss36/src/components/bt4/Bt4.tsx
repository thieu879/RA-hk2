import React, { useEffect, useRef } from 'react'

export default function Bt4() {
    const focusInput = useRef<HTMLInputElement>(null)
    useEffect(() => {
        focusInput.current?.focus()
    })
  return (
      <div>
        Bt4:
        <br />
        <input ref={focusInput} type="text" />
      </div>
  )
}
