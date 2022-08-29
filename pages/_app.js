import '../styles/globals.css'
import {MoralisProvider} from "react-moralis"

function MyApp({Component, pageProps}) {
  return(
    <MoralisProvider 
      appId='C0rrXYgl79xbxha97kvuywTXVR5axD9RjdwKm8B9' 
      serverUrl='https://4rxb4urekbd8.usemoralis.com:2053/server'>
        {
          <Component {...pageProps} />
        }
    </MoralisProvider>
    );
  }
  




export default MyApp
