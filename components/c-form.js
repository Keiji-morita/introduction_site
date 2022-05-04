import "tailwindcss/tailwind.css";

export default function C_form() {
  return(
      
    

    <div class="w-full bg-gray-800 h-screen">
      <div class="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
      <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
          <p class="text-3xl font-bold leading-7 text-center text-black font-mono ">
            Contact
          </p>
          <form action="" method="post">
            <div class="md:flex items-center mt-12">
              <div class="w-full md:w-1/2 flex flex-col">
                <label class="font-semibold leading-none text-black font-mono ">
                  Name
                </label>
                <input
                  type="text"
                  class="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border placeholder-gray-500 rounded"
                />
              </div>
              <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label class="font-semibold leading-none text-black font-mono ">
                  Phone
                </label>
                <input
                  type="email"
                  class="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border placeholder-gray-500 rounded font-mono "
                />
              </div>
            </div>
            <div class="md:flex items-center mt-8">
              <div class="w-full flex flex-col">
                <label class="font-semibold leading-none text-black font-mono ">
                  E-mail adress
                </label>
                <input
                  type="text"
                  class="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border placeholder-gray-500 rounded"
                />
              </div>
            </div>
            <div>
              <div class="w-full flex flex-col mt-8">
                <label class="font-semibold leading-none text-black font-mono ">
                  Message
                </label>
                <textarea
                  type="text"
                  class="h-40 text-base leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border placeholder-gray-500 rounded"
                ></textarea>
              </div>
            </div>
            <div class="flex items-center justify-center w-full">
              <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none font-mono ">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
 

      
    )
  
}