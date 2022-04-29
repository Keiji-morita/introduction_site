import  Intro from '../../components/intro_nav';

export default function Profile({pageProps }) {
  return <>
  <component {...pageProps} />

  <div class="h-screen w-screen">
  <Intro class="h-1/2"/>
    
    <h1>These are my products</h1>
    </div>
  </>
  
}