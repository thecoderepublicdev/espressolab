import 'material-symbols';
import '@styles/globals.css';
import ApplicationProvider from '@hooks/useApplication'

export default function App({ Component, pageProps }) {
  return(
    <ApplicationProvider>
      <Component test="I'm a test!" {...pageProps} />
    </ApplicationProvider>
  )
}
