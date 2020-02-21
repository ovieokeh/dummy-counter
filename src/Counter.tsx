import * as React from 'react'

const Counter: React.FC<{
  count: number
  className: string
}> = ({ count, className }) => (
  <div className={`counter ${className}`}>
    <p
      key={count}
      className={`counter__count ${className ? className + '__count' : ''}`}
    >
      {count}
    </p>
  </div>
)

export default Counter
