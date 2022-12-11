import clsx from 'clsx'
import { useState } from 'react'
import * as s from '../styles/ProductSize.module.scss'

export default function ProductSize({ sizes }) {
  const [sizeIndex, setSizeIndex] = useState(2)

  return (
    <div className={s.sizes}>
      <h3 className={s.title}>Size</h3>
      <div className={s.flex}>
        {sizes.map((size, index) => (
          <div
            key={index}
            className={clsx(s.size, index == sizeIndex && s.active)}
            onClick={() => setSizeIndex(index)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  )
}
