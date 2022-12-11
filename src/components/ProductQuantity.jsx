import Image from 'next/image'
import { useState } from 'react'
import * as s from '../styles/ProductQuantity.module.scss'
import Button from './Button'

export default function ProductQuantity({ cart, setCart, item, id }) {
  let [counter, setCounter] = useState(1)

  const handleMinusClick = () => {
    setCounter(counter > 1 ? counter - 1 : counter)
  }

  const handleAddClick = () => {
    setCounter(counter + 1)
  }

  const handleAddToCart = (id) => {
    cart.filter((item) => item.id !== id)
      ? setCart([{ item, quantity: counter }])
      : (handleAddClick, setCart([...cart, { ...item, quantity: counter }]))
  }

  return (
    <div className={s.quantity}>
      <h3 className={s.title}>Quantity</h3>
      <div className={s.quantityWrapper}>
        <div className={s.flex}>
          <button className={s.btn} onClick={handleMinusClick}>
            <Image src="/images/minus.svg" alt="" width={10} height={10} />
          </button>
          <p>{counter}</p>
          <button className={s.btn} onClick={handleAddClick}>
            <Image src="/images/plus.svg" alt="" width={10} height={10} />
          </button>
        </div>
        <div className={s.btns}>
          <Button text="Add To Cart" primary large onClick={(id) => handleAddToCart(id)} />
          <Button text="Pickup From Store" large />
        </div>
      </div>
    </div>
  )
}
