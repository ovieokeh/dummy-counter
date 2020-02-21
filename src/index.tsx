import * as React from 'react'

import Counter from './Counter'
import './styles.scss'

const { useState, useEffect } = React

export type ICounterProps = {
  className?: string
}

const App: React.FC<ICounterProps> = ({ className = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 99) return setCount(0)

      setCount(count + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [count, setCount])

  return <Counter className={className} count={count} />
}

export default App
