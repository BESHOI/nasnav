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

  const handleAddToCart = () => {
    setCart([{ item, quantity: counter }])

    cart.filter((cartItem) => {
      cartItem.item.id !== id
        ? setCart([...cart, { item, quantity: counter }])
        : setCart([{ item, quantity: cartItem.quantity + counter }])
    })
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
          <Button text="Add To Cart" primary large onClick={() => handleAddToCart()} />
          <Button text="Pickup From Store" large />
        </div>
      </div>
    </div>
  )
}
