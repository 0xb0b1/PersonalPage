import { useEffect, useRef } from 'react'

const useDimension = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0})

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth
    dimensions.current.height = ref.current.offsetHeight
  })

  return dimensions.current
}

export default useDimension