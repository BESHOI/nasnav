import * as s from '../styles/Breadcrumb.module.scss'

export default function Breadcrumb() {
  return (
    <div className={s.breadcrumb}>
      <div className="container">
        <a className={s.link}>
          <span>Men</span> / <span>Clothing</span> / <span>Tops</span> / <span>Adidas</span> /
          Adidas Black T-Shirt
        </a>
      </div>
    </div>
  )
}
