import clsx from 'clsx'
import * as s from '../styles/ProductPrice.module.scss'

export default function ProductPrice({ price, large, percentage }) {
  const { regular, discount } = price
  const percentageCalc = percentage && ((regular - discount) / regular).toFixed(2) * 100

  return (
    <div className={clsx(s.price, large ? s.priceLarge : s.priceSmall)}>
      <p className={clsx(s.discount, large ? s.discountLarge : s.discountSmall)}>
        {discount}
        <span>L.E</span>
      </p>
      {percentageCalc > 0 && (
        <div className={clsx(s.wrapper, !large ? s.wrapperSmall : '')}>
          <p className={clsx(s.regular, large ? s.regularLarge : s.regularSmall)}>
            <del> {regular} </del>
            <span>L.E</span>
          </p>
          <p className={clsx(s.percentage, large ? s.percentageLarge : s.percentageSmall)}>
            {percentageCalc + '%'}
            <span>{percentageCalc > 0 && large ? 'off' : null}</span>
          </p>
        </div>
      )}
    </div>
  )
}
