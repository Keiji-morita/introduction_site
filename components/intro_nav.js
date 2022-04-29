import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import "tailwindcss/tailwind.css";

import { Container } from 'postcss'

export default function Intro() {
  return (
    <><header>

    </header>
    <div class="h-2/3 w-screen">
    <div class="bg-gray-400   flex flex-row h-3/4 ">
        <div class="basis-2/4">
          <h3 class="font-serif">
            Hello!
          </h3>
          <h3 class="font-serif">Nice to meet you!</h3>
        </div>


        <img class="rounded-full basis-1/4 h-67 w-60" src="/images/introduction.jpg" alt="My avatar" />
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
      </div>
      </>

  )
}