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

      <div class="w-screen flex justify-center items-center ">
      <div class="border-double border-4 border-gray-600 flex flex-row p-16">
      
      <a href="https://techuni.org/" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-mono">関西学院大学　プログラミング研究会　Tech.uni</h5>
          <img 
          src="/images/original.png"
          alt="Perfil" />
          </a>
        

      


      <a href="https://geek-salon.com/webex" class="container mx-auto block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-mono">GeekSalon Webexpert</h5>
          <img 
          src="/images/winning.png"
          alt="Perfil" />
          </a>
      

        </div>
      </div>
      
      </div>
  </>
  
}

