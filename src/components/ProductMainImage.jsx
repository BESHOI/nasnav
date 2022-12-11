import Image from 'next/image'
import * as s from '../styles/ProductMainImage.module.scss'

export default function ProductMainImage({ image, large }) {
  const width = large ? 254 : 104
  const height = large ? 254 : 104

  return (
    <div className={s.mainImage}>
      <Image src={image} alt="main-product-image" width={width} height={height} />
      {large && (
        <div className={s.image}>
          <Image src="/images/360.svg" alt="" width={28} height={30} />
        </div>
      )}
    </div>
  )
}
