import clsx from 'clsx'
import ProductLogo from './ProductLogo'
import ProductMainImage from './ProductMainImage'
import ProductPickup from './ProductPickup'
import ProductPrice from './ProductPrice'
import ProductRaiting from './ProductRaiting'
import ProductTitle from './ProductTitle'
import * as s from '../styles/SimilarProducts.module.scss'

export default function SimilarProducts({ data }) {
  const { images, title, price, logo, rating, pickup } = data
  const MainImage = images[0]

  return (
    <div className={s.card}>
      <ProductMainImage image={MainImage} large />
      <ProductTitle title={title} />

      <div className={clsx(s.flex)}>
        <ProductPrice price={price} percentage />
        <ProductLogo logo={logo} />
      </div>

      <div className={s.center}>
        <ProductRaiting rating={rating} />
      </div>

      <ProductPickup pickup={pickup} />
    </div>
  )
}
