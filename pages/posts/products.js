import  Intro from '../../components/intro_nav';
import   Footer from '../../components/footer';

export default function Profile({pageProps }) {
  return <>
  <component {...pageProps} />

  <div class="h-screen w-screen">
  <Intro class="h-1/2"/>
    
    <h1>My products</h1>


<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />


<section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
  <div class="container">
      <div class="flex flex-wrap -mx-4">

        <div class="w-full md:w-1/2 xl:w-1/3 px-4">
            <div class="bg-white rounded-lg overflow-hidden mb-10">
              <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
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
                    The ultimate UX and UI guide to card design
                    </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
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

        
        <div class="w-full md:w-1/2 xl:w-1/3 px-4">
            <div class="bg-white rounded-lg overflow-hidden mb-10">
              <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
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
                    Creative Card Component designs graphic elements
                    </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
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
</section>

  
    <div>
        <Footer />
      </div>

  </div>


  </>
  
}