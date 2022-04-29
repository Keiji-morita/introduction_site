import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import "tailwindcss/tailwind.css";

import { Container } from 'postcss'

export default function Intro() {
  return (
<header>

<div class="bg-gray-400 opacity-50 flex flex-row">
  <div class="basis-2/4">
      <h3 class="font-serif">
      Hello!
      </h3>
      <h3 class="font-serif">Nice to meet you!</h3>
    </div>


  <Image class="rounded-full basis-2/4" src="/images/introduction.jpg" width={64} height={64} alt="My avatar" />
</div>


<div>
<nav list-none>
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
</div>
</header>
  )
}