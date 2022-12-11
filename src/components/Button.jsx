import clsx from 'clsx'
import * as s from '../styles/Button.module.scss'

export default function Button({ text, primary, large, onClick }) {
  return (
    <button
      className={clsx(s.btn, primary ? s.primary : s.secondary, large ? s.large : s.small)}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
