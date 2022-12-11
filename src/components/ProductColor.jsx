import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import * as s from '../styles/ProductColor.module.scss'

export default function ProductColor({ colors }) {
  const [colorIndex, setColorIndex] = useState(0)

  const handleCLick = (e, index) => {
    setActive(e.currentTarget.id == index && true)
  }

  return (
    <div className={s.colors}>
      <h3 className={s.title}>Colors</h3>
      <div className={s.flex}>
        {colors.map((color, index) => (
          <Image
            src={color}
            key={color}
            alt=""
            width={80}
            height={80}
            onClick={() => setColorIndex(index)}
            className={clsx(colorIndex == index && s.active)}
          />
        ))}
      </div>
    </div>
  )
}
