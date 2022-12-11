import * as s from '../styles/ProductCategory.module.scss'

export default function ProductCategory({ category }) {
  return (
      <p className={s.category}>{category}</p>
  )
}
