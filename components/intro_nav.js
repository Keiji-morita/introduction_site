import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Intro() {
  return (
<header>
<p>
  Hello!Nice to meet you!
</p>

<section>
<Image src="/images/introduction.jpg" width={64} height={64} alt="My avatar" />
</section>

<section>
<nav>
      <ul>
        <li>
          <Link href="/posts/profile">
            <a>Profile</a>
          </Link>
        </li>

        <li>
          <Link href="/posts/products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
</section>
</header>
  )
}