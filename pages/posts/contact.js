import Intro from "../../components/intro_nav";

export default function Profile({ pageProps }) {
  return (
    <>
      <component {...pageProps} />

      <div class="h-screen w-screen">
        <Intro class="h-1/2" />

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
      </div>
    </>
  );
}
{
  /* <script>
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    var json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
                result.classList.remove('text-gray-500');
                result.classList.add('text-green-500');
            } else {
                console.log(response);
                result.innerHTML = json.message;
                result.classList.remove('text-gray-500');
                result.classList.add('text-red-500');
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none"; 
            }, 5000);
        });
})
</script>
    </div>
    </div>
  </>
  
} */
}
