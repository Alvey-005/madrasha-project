
import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Layout from "../components/layout";
import {AuthContextProvider} from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoutes";
import {useRouter} from "next/router";

// Client-side cache shared for the whole session 
// of the user in the browser.
const authRequired = ['/admin/all-notice', '/admin/create-notice', '/admin/edit-notice']

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const router = useRouter()

    const { Component, emotionCache =
      clientSideEmotionCache, pageProps } = props;

  return (
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport"
                content="initial-scale=1, width=device-width" />
        </Head>
          <AuthContextProvider>


          <ThemeProvider theme={theme}>

          {/* CssBaseline kickstart an elegant,
                consistent, and simple baseline to
                build upon. */}

          <CssBaseline />
            <Layout>
                {!authRequired.includes(router.pathname) ? (
                    <Component {...pageProps} />
                ) : (
                    <ProtectedRoute>
                        <Component {...pageProps} />
                    </ProtectedRoute>
                )}            </Layout>
        </ThemeProvider>
          </AuthContextProvider>
      </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};