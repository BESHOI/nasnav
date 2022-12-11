import ProductDetails from './ProductDetails'
import SimilarProducts from './SimilarProducts'
import * as s from '../styles/ProductPage.module.scss'
import Slider from './Slider'

export default function ProductPage({ data, cart, setCart }) {
  const simlarProducts = data.slice(1)

  return (
    <div className={s.productPage}>
      <div className="container">
        <ProductDetails data={data[0]} cart={cart} setCart={setCart} />
        <div className={s.info}>
          <h2 className={s.title}>Similar Products</h2>
          <p className={s.description}>You may like these products also</p>
        </div>
        <div className={s.similar}>
          {simlarProducts.map((item, index) => {
            return (
              <div key={index}>
                <SimilarProducts data={item} />
              </div>
            )
          })}
        </div>
        <Slider />
      </div>
    </div>
  )
}
