import clsx from 'clsx'
import * as s from '../styles/ProductPickup.module.scss'

export default function ProductPickup({ pickup }) {
  const { local, global } = pickup
  const { from, to, time } = global
  return (
    <div className={clsx(s.pickup, local !== '' && s.center)}>
      {local !== '' && (
        <p className={s.local}>
          Pickup From: <span> {pickup.local} </span>
        </p>
      )}

      {global !== {} && local === '' && (
        <div className={s.global}>
          <p>
            From: <span>{from}</span>
          </p>
          <p>
            To: <span>{to} </span>
          </p>
          <p>
            In: <span>{time}</span>
          </p>
        </div>
      )}
    </div>
  )
}
