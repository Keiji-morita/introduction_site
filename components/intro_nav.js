import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";

import { Container } from "postcss";

export default function Intro() {
  return (
    <>
      <header></header>
      <div class="h-2/3 w-screen">
      <div class="  flex flex-row h-3/4 ">
          <div class="basis-2/4 ">
            <div class="p-8 max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center mt-auto place-content-between">
              <h3 class="font-mono  text-2xl ">Hello!</h3>
              <h3 class="font-mono  text-2xl">Nice to meet you!</h3>
              <h1 class="font-mono my-16">Keiji Morita</h1>
            </div>
          </div>

          <img
            class="rounded-full basis-1/4 h-67 w-60"
            src="/images/IMG_2715.jpg"
            alt="My avatar"
          />
        </div>
        <div class="border-double">
          <nav
            list-none
            class="  relative
  w-3/4
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light container mx-auto"
          >
            <div class="flex flex-row container mx-auto text-center">
              <div>
                <a
                  href="/posts/profile"
                  class="py-2 px-6 flex font-mono  hover:text-blue-600/75"
                >
                  Profile
                </a>
              </div>
              <div>
                <a
                  href="/posts/products"
                  class="py-2 px-6 flex font-mono  hover:text-blue-600/75"
                >
                  Products
                </a>
              </div>

              <div>
                <a
                  href="/posts/blogs"
                  class="py-2 px-6 flex font-mono  hover:text-blue-600/75"
                >
                  Articles
                </a>
              </div>

              <div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeqYXCcBJQ3uePXDDAkcNYRdpqOVqvJ6PaqQAlQgVImou5BoQ/viewform?usp=sf_link"
                  class="py-2 px-6 flex font-mono  hover:text-blue-600/75"
                >
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
