import clsx from 'clsx'
import * as s from '../styles/ProductTitle.module.scss'

export default function ProductTitle({ title, large }) {
  return <h3 className={clsx(s.title, large ? s.titleLarge : s.titleSmall)}>{title}</h3>
}
