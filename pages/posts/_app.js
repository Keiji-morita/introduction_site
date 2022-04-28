import  Intro from '../../components/intro_nav';
import  Profile from '../../pages/posts/profile';
import  Products from '../../pages/posts/products';
// import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  console.log("I am loading")
  return <>
  <component {...pageProps} />
  
    <Intro />
    

      </> 
  
}

export default MyApp;