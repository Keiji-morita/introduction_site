import Intro from "../../components/intro_nav";

import Footer  from "../../components/footer";


export default function Profile({ pageProps }) {
  return (
    <>
          <component {...pageProps} />
      <div class="h-screen w-screen">
    
      <Intro class="h-1/2" />

      <div class="h-1/2">
        <h2 class="font-mono  text-2xl">There is no articles. Stay tuned!</h2>
      </div>
      <Footer />


      </div>
    </>
  )
}