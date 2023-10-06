import '../styles/globals.css'
import { ApplicationProvider } from '@hooks/useApplication'

export default function App({ Component, pageProps }) {
  return(
    <ApplicationProvider>
      <Component {...pageProps} />
    </ApplicationProvider>
  )
}
