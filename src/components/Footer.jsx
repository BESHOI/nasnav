import Image from 'next/image'
import Link from 'next/link'
import * as s from '../styles/Footer.module.scss'
import clsx from 'clsx'

const navitems = [
  {
    title: 'About us',
    link: 'about',
  },

  {
    title: 'contact us',
    link: 'contact',
  },
  {
    title: 'Track Order',
    link: 'track',
  },
  {
    title: 'Terms & Conditions',
    link: 'terms',
  },
  {
    title: 'Privacy Policy',
    link: 'privacy',
  },
  {
    title: 'Sell With Us',
    link: 'sell',
  },
  {
    title: 'Shipping And Returns',
    link: 'shiping',
  },
]

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={clsx('container', s.grid)}>
        <div className={s.wrapper}>
          <div className={s.info}>
            <Image src="/images/logo.svg" width={200} height={50} alt="logo" />
            <div className={s.infoText}>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>

              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia
              </p>

              <p>
                m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                wisi enim ad minim veniam, quis. iusto odio dignissim qui blandit.
              </p>
            </div>
          </div>

          <div className={s.linksWrapper}>
            <div className={s.email}>
              <p>Subscribe to our newsletter</p>
              <input type="email" id="subEmail" placeholder="Enter Your Mail" />
              <label htmlFor="subEmail">
                <button type="submit">
                  Subscribe
                  <Image src="/images/share.svg" width={20} height={20} alt="" />
                </button>
              </label>
            </div>

            <div className={s.links}>
              <nav>
                <ul className={s.socialList}>
                  {navitems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.title}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className={s.socialLinks}>
                <a href="//facebook.com/yeshtery" className={s.socailLink}>
                  <Image src="/images/facebook.svg" alt="our-facebok" width={32} height={32} />
                  /YESHTERY
                </a>

                <a href="//instagram.com/yeshtery" className={s.socailLink}>
                  <Image src="/images/instagram.svg" alt="our-instagram" width={32} height={32} />
                  /YESHTERY
                </a>

                <a href="//linkedin.com/company/yeshtery" className={s.socailLink}>
                  <Image src="/images/linkedin.svg" alt="our-linkedin" width={32} height={32} />
                  /YESHTERY
                </a>

                <a href="//twitter.com/#" className={s.socailLink}>
                  <Image src="/images/twitter.svg" alt="our-twitter" width={32} height={32} />
                  /YESHTERY
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={s.rights}>
          <p> © 2021 yeshtery, all rights reserved.</p>
          <div className={s.paymentIcons}>
            <Image src="/images/cod-2x.png" alt="cod-logo" width={100} height={40} />
            <Image src="/images/visa-2x.png" alt="visa-logo" width={64} height={40} />
            <Image src="/images/master-2x.png" alt="master-logo" width={64} height={40} />
          </div>
          <p className={s.powerd}>
            Powered By <Image src="/images/nasnav.svg" alt="nasnav-logo" width={100} height={20} />
          </p>
        </div>
      </div>
    </footer>
  )
}
