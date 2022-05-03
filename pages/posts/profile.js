import Link from 'next/link'
import  Intro from '../../components/intro_nav';
import Resume from '../../components/resume';
import About from '../../components/aboout';


export default function Profile({pageProps}) {
  return <>
  <component {...pageProps} />
  <div class="h-screen w-screen">
  <Intro class="h-1/2"/>

  <About />

  <Resume />

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
          <p>賞を頂いた際の賞状です</p>
          </a>
          
      

        </div>
      </div>
      
      </div>
  </>
  
}

