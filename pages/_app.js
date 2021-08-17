import "@fontsource/roboto";

import { CssBaseline } from "@material-ui/core";
import "styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
