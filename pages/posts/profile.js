import Link from 'next/link'
import  Intro from '../../components/intro_nav';


export default function Profile({pageProps }) {
  return <>
  <component {...pageProps} />

  <Intro />


      <h1>My profile</h1>

      <h2>
        <ul>
          <li>2002.10.21  神奈川県生</li>
          <li>2021.  4.  1 関西学院大学　商学部入学</li>
          <li>2025.  3   同学卒業見込み</li>
        </ul>
      </h2>
      <h3>

      </h3>
  </>
  
}