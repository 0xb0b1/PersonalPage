import { useState } from 'react'

const useToggle = ((initialValue = false) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    toggle: () => setValue(!value),
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
  }
})

export default useToggle