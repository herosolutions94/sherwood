import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/custom.scss'
import Layout from '../components/layout' 
'Zoya';


export default function App({ Component, pageProps }) {

  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };

  return renderWithLayout(<Component {...pageProps} />);
}