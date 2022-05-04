import "tailwindcss/tailwind.css";
import Link from 'next/link'
import { FaGithub } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

export default function Footer() {
  return(
      
<footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800 absolute w-full ">

    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 森田　恭示   
    created by Keiji Morita
    
    <div class="flex justify-center items-center my-8">
    <Link href="https://github.com/Keiji-morita" >
          <a>
            {/* アイコンをセットする */}
            <FaGithub class="mx-8 w-4 h-4"/>
            
          </a>
        </Link>


    <Link href="https://twitter.com/tamoyasu1021">
          <a>
            {/* アイコンをセットする */}
              <FaTwitter class="mx-8 w-4 h-4"/>
          </a>
    </Link>
    </div>
    </span>

    
</footer>

    )
    
  
}