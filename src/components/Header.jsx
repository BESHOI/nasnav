import Announcement from './Announcment'
import Breadcrumb from './Breadcrumb'
import HeaderCategories from './HeaderCategories'
import MainHeader from './MainHeader'

export default function Header({ cart, setCart, setOverlay }) {
  return (
    <header>
      <Announcement />
      <MainHeader cart={cart} setCart={setCart} setOverlay={setOverlay} />
      <HeaderCategories />
      <Breadcrumb />
    </header>
  )
}
