import Link from 'next/link'
import  Intro from '../../components/intro_nav';


export default function Profile({pageProps }) {
  return <>
  <component {...pageProps} />
  <div class="h-screen w-screen">
  <Intro class="h-1/2"/>

      <table class="table-auto container mx-auto ">
        <thead>
          {/* <tr>
            <th class="border">When</th>
            <th class="border"> Event</th>
          </tr> */}
        </thead>

        <tbody>
          <tr>
            <td class="border">2002.10.21</td>
            <td class="border">神奈川県生</td>
          </tr>

          <tr>
            <td class="border">2021.4</td>
            <td class="border">関西学院大学　商学部入学</td>
          </tr>

          <tr>
            <td class="border">2025.3</td>
            <td class="border">同学卒業見込み</td>
          </tr>
        </tbody>
      </table>
      </div>
  </>
  
}