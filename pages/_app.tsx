import "../styles/global.scss";
import type { AppProps } from "next/app";
import SiteWrapper from "../components/site-wrapper";

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <>
        <SiteWrapper>
          <Component {...pageProps} />
        </SiteWrapper>
      </>
  )
}

export default MyApp
