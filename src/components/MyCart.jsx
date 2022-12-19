import Button from './Button'
import * as s from '../styles/MyCart.module.scss'
import ProductMainImage from './ProductMainImage'
import ProductPrice from './ProductPrice'
import ProductTitle from './ProductTitle'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

export default function MyCart({ cart, setCart, show, setOverlay }) {
  const [isShow, setIsShow] = useState(show)
  const [isRemoved, setIsRemoved] = useState(false)
  let totalPrice = 0

  const handleCloseClick = () => {
    setIsShow(false), setOverlay(false)
  }

  const handleClick = (id) => {
    setIsRemoved(!isRemoved)
    setTimeout(() => {
      setCart(cart.filter((item) => item.id === id))
    }, 200)
  }

  return (
    <div className={clsx(s.mycart, isShow ? s.show : s.hide)}>
      <Image
        src="/images/close.svg"
        alt=""
        width={16}
        height={16}
        onClick={handleCloseClick}
        className={s.closeBtn}
      />
      <h3 className={s.title}>My Cart</h3>
      <p className={s.text}>{cart?.length !== 0 ? 'Cart Summary' : 'Cart Empty'} </p>

      {cart?.length !== 0 &&
        cart.map((cartItem, index) => {
          const { images, title, price } = cartItem.item
          const quantity = cartItem.quantity
          const MainImage = images[0]
          const { discount, regular } = price

          const percentage = ((regular - discount) / regular).toFixed(2) * 100
          const productPrice = (percentage > 0 ? discount * quantity : regular * quantity).toFixed()
          totalPrice = productPrice * cart.length

          return (
            <div key={index} className={clsx(s.card, isRemoved ? s.removed : null)}>
              <ProductMainImage image={MainImage} />
              <div>
                <ProductTitle title={title} />
                <p className={s.quantity}> quantity: {quantity} </p>
                <div className={s.flex}>
                  <ProductPrice price={price} />
                  <Button text="Remove" onClick={(id) => handleClick(id)} />
                </div>
              </div>
            </div>
          )
        })}
      {totalPrice > 0 && <p className={s.total}>Total: {totalPrice} LE</p>}
    </div>
  )
}
