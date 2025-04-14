import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/custom.scss'
import Layout from '../components/layout'
import http from '@/helpers/http';
import { doObjToFormData } from '@/helpers/helpers';
import NextNProgress from 'nextjs-progressbar';



export default function App({ Component, pageProps , siteSettings }) {

  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout siteSettings={siteSettings}>{page}</Layout>;
    };

  return renderWithLayout(
    <>
    <NextNProgress color="#C69E66" />
    <Component {...pageProps} />
  </>
);
  
}


App.getInitialProps = async ({ ctx }) => {
  // const cookies = parse(ctx?.req?.headers?.cookie || "");
  // const authToken = cookies?.authToken || "";
  const siteSettings = await http
    .post("site-settings", doObjToFormData({ token: "" }))
    .then((response) => response?.data?.site_settings)
    .catch((error) => error?.response?.data?.message);
  return { siteSettings };
};