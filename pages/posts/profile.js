import Link from 'next/link'
import  Intro from '../../components/intro_nav';


export default function Profile({pageProps }) {
  return <>
  <component {...pageProps} />
  <div class="h-screen w-screen">
  <Intro class="h-1/2"/>

      <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
        <thead>
          {/* <tr>
            <th class="border">When</th>
            <th class="border"> Event</th>
          </tr> */}
        </thead>

        <tbody>
          <tr class="text-left border-b-2 border-gray-300">
            <td class="border">2002.10.21</td>
            <td class="border">神奈川県生</td>
          </tr>

          <tr class="text-left border-b-2 border-gray-300">
            <td class="border">2021.4</td>
            <td class="border">関西学院大学　商学部入学</td>
          </tr>

          <tr class="text-left border-b-2 border-gray-300">
            <td class="border">2021.6</td>
            <td class="border">関西学院大学　プログラミング研究会　Tech.uniへ入会</td>
          </tr>

          <tr class="text-left border-b-2 border-gray-300">
            <td class="border">2022.3</td>
            <td class="border">Geek salon内でのハッカソンでオーディエンス賞受賞</td>
          </tr>

          <tr class="text-left border-b-2 border-gray-300">
            <td class="border">2025.3</td>
            <td class="border">同学卒業見込み</td>
          </tr>
        </tbody>
      </table>

      <div class="grid grid-cols-2 gap-3 ">
      {/* <div>
        <a Link href="https://geek-salon.com/webex" class="font-mono  text-2xl hover:text-blue-600/75"> Geek Salon WebExpert Course 👉</a>
      </div>
      <div>
        <img src="/images/winning.png"/>
      </div> */}
      <div class="bg-white shadow-xl rounded-lg overflow-hidden h-1/3">

            <div class="m-2 text-justify text-sm">
                <div class="flex flex-wrap items-center -mt-8 pb-3 ">
                    <img 
                        src="/images/original.png"
                        alt="Perfil" />
                    <span class="block text-lg font-bold text-white">Author</span>

                </div>
                <h2 class=" font-bold h-2 mb-5 text-center"> Tech.uniとは </h2>
            </div>
            <div class="w-full text-center  "><button class=" text-gray-400 text-lg mb-2"><i
                        class="fas fa-plus-circle"></i></button>
            </div>
        </div>

        <div class="bg-white shadow-xl rounded-lg overflow-hidden">
            <div class="bg-cover bg-center h-56 p-4">
            </div>
            <div class="m-2 text-justify text-sm">
                <div class="flex flex-wrap items-center -mt-8 pb-3 ">
                    <img 
                        src="/images/winning.png"
                        alt="Perfil" />
                    <span class="block text-lg font-bold text-white">Author</span>

                </div>
                <h2 class=" font-bold h-2 mb-5 text-center"> Geek Salonとは </h2>
            </div>
        </div>

      </div>
      
      </div>
  </>
  
}