import clsx from 'clsx'
import Image from 'next/image'
import * as s from '../styles/ProductRaiting.module.scss'

export default function ProductRaiting({ rating, large }) {
  const { rate, count } = rating
  const fixedRate = Math.floor(rate)
  let i = 0

  const stars = () => {
    fixedRate === 5 ? (i = 1) : i
    for (i; i < fixedRate; i++) {
      i++
    }
    return i
  }

  const emptyStars = 5 - stars()
  const width = large ? 20 : 16
  const height = large ? 20 : 16

  return (
    <div className={s.rating}>
      <div className={s.stars}>
        {[...Array(stars())]?.map((star, index) => (
          <Image key={index} src="/images/star.svg" alt="" width={width} height={height} />
        ))}

        {emptyStars > 0 &&
          [...Array(emptyStars)]?.map((star, index) => (
            <Image key={index} src="/images/empty-star.svg" alt="" width={width} height={height} />
          ))}
      </div>
      <p className={clsx(s.rate, large ? s.rateLarge : s.rateSmall)}>{rate + ' of 5'}</p>
      {large && <p className={s.count}>{count + ' Rates'}</p>}
    </div>
  )
}
