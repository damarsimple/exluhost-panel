import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#FFFFFF",
  //   },
  //   secondary: {
  //     main: "#f50057",
  //   },
  // },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
