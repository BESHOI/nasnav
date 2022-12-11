import clsx from 'clsx'
import Link from 'next/link'
import * as s from '../styles/HeaderCategories.module.scss'

const categories = [
  {
    link: '/Men',
    title: 'Men',
  },
  {
    link: '/Women',
    title: 'Women',
  },
  {
    link: '/Unisex',
    title: 'Unisex',
  },
  {
    link: '/Kids',
    title: 'Kids',
  },
  {
    link: '/BestSellers',
    title: 'Best Sellers',
  },
  {
    link: '/NewArrivals',
    title: 'New Arrivals',
  },
  {
    link: '/Offers',
    title: 'Offers',
  },
]

export default function HeaderCategories() {
  return (
    <div className={s.headercategories}>
      <div className="container">
        <nav>
          <ul className={s.list}>
            {categories.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className={clsx(item.title === 'Offers' && s.offer)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
