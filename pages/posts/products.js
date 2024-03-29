import  Intro from '../../components/intro_nav';
import   Footer from '../../components/footer';


export default function Profile({pageProps }) {
  return <>
  <component {...pageProps} />

  <div class="h-screen w-screen">
  <Intro class="h-1/2"/>
    
    


<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />



<div class="w-full  h-screen">
  <div class="container">
      <div class="flex flex-wrap -mx-4">

        <div class="w-full md:w-1/2 xl:w-1/3 px-4 outline-1 ">
            <div class="rounded-lg overflow-hidden mb-10 bg-slate-200">
              <img
                  src="/images/icon.png"
                  alt="image"
                  class="w-full"
                  />
              <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                        href="javascript:void(0)"
                        class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                    i-Listenner -Flutter-
                    </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed mb-7">
                  Flutterのtext_to_speechライブラリを使用し、音声入力した内容をメモとして残せるアプリです。
                  </p>
                  <a
                    href="https://apps.apple.com/jp/app/%E9%9F%B3%E5%A3%B0%E5%85%A5%E5%8A%9B-i-listener/id1644501381"
                    class="
                    inline-block
                    py-2
                    px-7
                    border border-[#E5E7EB]
                    rounded-full
                    text-base text-body-color
                    font-medium
                    hover:border-primary hover:bg-primary hover:text-white
                    transition
                    "
                    >
                  View Details
                  </a>
              </div>
            </div>
        </div>

        
        <div class="outline-1 w-full md:w-1/2 xl:w-1/3 px-4 ">
            <div class=" rounded-lg overflow-hidden mb-10 bg-slate-200">
              <img
                  src="/images/codable.png"
                  alt="image"
                  class="w-full"
                  />
              <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                        href="javascript:void(0)"
                        class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                    Codable -Vue.js-
                    </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed mb-7">
                    プログラミングサークルのハッカソンでチーム開発を行いました。
                  </p>
                  <a
                    href="https://setouchi-web-app.web.app/"
                    class="
                    inline-block
                    py-2
                    px-7
                    border border-[#E5E7EB]
                    rounded-full
                    text-base text-body-color
                    font-medium
                    hover:border-primary hover:bg-primary hover:text-white
                    transition
                    "
                    >
                  View Details
                  </a>
              </div>
            </div>
        </div>
      </div>
  </div>
  </div>



  
    <div>
        <Footer />
      </div>

  </div>


  </>
  
}