import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import * as s from '../styles/MainHeader.module.scss'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicMyCart = dynamic(() => import('./MyCart'), {
  suspense: true,
})

export default function MainHeader({ cart, setCart, setOverlay }) {
  const [isClicked, setIsClicked] = useState(false)

  const handelClick = () => {
    setIsClicked(!isClicked)
    setOverlay(!isClicked)
  }

  return (
    <div className={clsx('container', s.mainheader)}>
      <div className={s.search}>
        <input type="text" id="search" placeholder="Search" />
        <label htmlFor="search">
          <Image src="/images/search.svg" alt="" width={24} height={24} />
        </label>
      </div>

      <Image src="/images/adidas.svg" alt="adidas-logo" width={86} height={56} className={s.logo} />

      <div className={s.nav}>
        <div className={clsx(s.navIcon)}>
          <div className={s.basket} onClick={handelClick}>
            <Image src="/images/basket.svg" alt="" width={30} height={24} />
            <div className={s.dot}>
              <Image src="/images/yellow-dot.svg" alt="" width={15} height={15} className={s.dot} />
              <div className={s.number}>
                {cart.length !== 0 ? cart.map((item) => item.quantity) : 0}
              </div>
            </div>
          </div>
          Cart
        </div>
        <div className={s.navIcon}>
          <Image src="/images/like.svg" alt="" width={25} height={24} />
          Wishlist
        </div>
        <div className={s.navIcon}>
          <Image src="/images/user.svg" alt="" width={24} height={24} />
          Login
        </div>
      </div>

      <Suspense>
        {isClicked && <DynamicMyCart cart={cart} setCart={setCart} show setOverlay={setOverlay} />}
      </Suspense>
    </div>
  )
}
