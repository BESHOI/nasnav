import Image from 'next/image'
import * as s from '../styles/ProductGallery.module.scss'

export default function ProductGallery({ images }) {
  const main = images[0]
  const gallery = images.slice(1)

  return (
    <>
      <div className={s.main}>
        <Image src={main} alt="product-main-image" width={568} height={568} />
        <div className={s.image}>
          <Image src="/images/360-2x.svg" alt="" width={45} height={48} />
        </div>
      </div>

      <div className={s.flex}>
        <Image src="/images/left-arrow-2x.svg" alt="" width={15} height={24} />

        {gallery.map((img, index) => (
          <Image key={index} src={img} alt={`product-image-${index}`} width={120} height={120} />
        ))}
        <Image src="/images/right-arrow-2x.svg" alt="" width={15} height={24} />
      </div>
    </>
  )
}
