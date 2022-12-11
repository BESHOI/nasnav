import ProductSize from './ProductSize'
import ProductColor from './ProductColor'
import ProductQuantity from './ProductQuantity'
import ProductGallery from './ProductGallery'
import ProductLogo from './ProductLogo'
import ProductTitle from './ProductTitle'
import ProductCategory from './ProductCategory'
import ProductPrice from './ProductPrice'
import ProductRaiting from './ProductRaiting'
import * as s from '../styles/ProductDetails.module.scss'

export default function ProductDetails({ data, cart, setCart }) {

  return (
    <>
      {[data].map((item) => {
        const { id, price, images, colors, size, logo, title, category, rating } = item

        return (
          <div key={id} className={s.details}>
            <div>
              <ProductGallery images={images} />
            </div>
            <div>
              <ProductLogo logo={logo} large />
              <ProductTitle title={title} large />
              <ProductCategory category={category} />
              <ProductRaiting rating={rating} large />
              <ProductPrice price={price} large percentage />
              <ProductSize sizes={size} />
              <ProductColor colors={colors} />
              <ProductQuantity cart={cart} item={item} setCart={setCart} id={id} />
            </div>
          </div>
        )
      })}
    </>
  )
}
