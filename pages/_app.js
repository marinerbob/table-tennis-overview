import ReduxShell from 'components/shells/reduxShell';

import { CssBaseline } from "@material-ui/core";
import "styles/globals.scss";
import './index.scss';
import "@fontsource/roboto";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxShell>
      <CssBaseline />
      <Component {...pageProps} />
    </ReduxShell>
  );
}

export default MyApp;
