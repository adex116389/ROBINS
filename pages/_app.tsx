import "../styles/globals.css";
import "../styles/app.scss";
import "../styles/theme.scss";
import "../styles/all.min.scss";
import "../styles/layout5.scss";

import type { AppProps } from "next/app";
import { createContext, useState } from "react";

export const DataContext = createContext({} as any);

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState();
  return (
    <DataContext.Provider value={{ data, setData }}>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}

export default MyApp;
