import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import * as s from '../styles/Announcment.module.scss'

export default function Announcement() {
  return (
    <div className={s.announcement}>
      <div className={clsx('container', s.wrapper)}>
        <div className={clsx(s.menu)}>
          <Image src="/images/menu.svg" alt="" width={24} height={18} />
          <Image src="/images/logo-dark.svg" alt="logo" width={116} height={30} />
        </div>

        <div className={s.offer}>
          <Image src="/images/left-arrow.svg" alt="logo" width={7} height={12} />
          <p className={s.text}>
            Valentine’s Day Offers! Buy Two Get One Free <Link href="/shop">Shop Now</Link>
          </p>
          <Image src="/images/right-arrow.svg" alt="logo" width={7} height={12} />
        </div>

        <div className={s.cta}>
          <Link href="/contact" className={s.flex}>
            <Image src="/images/phone.svg" alt="logo" width={20} height={20} />
            Contact Us
          </Link>
          <Link href="/track" className={s.flex}>
            <Image src="/images/shop-car.svg" alt="logo" width={20} height={20} />
            Track Order
          </Link>
          <Link href="/store" className={s.flex}>
            <Image src="/images/location.svg" alt="logo" width={20} height={20} />
            Find A Store
          </Link>
        </div>
      </div>
    </div>
  )
}
