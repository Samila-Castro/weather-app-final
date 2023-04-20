//import "@/styles/globals.css";
import "rsuite/dist/rsuite.min.css";

import type { AppProps } from "next/app";
import { CustomProvider } from "rsuite";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
