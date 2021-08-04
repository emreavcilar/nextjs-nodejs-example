import '../styles/globals.css';
import App from 'next/app';
import { Provider, useSelector } from 'react-redux';
import { useStore } from 'store';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  console.log('appProps', appProps)
  return { ...appProps }
}

export default MyApp;
