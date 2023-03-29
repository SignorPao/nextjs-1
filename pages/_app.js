import Image from "next/image";
import Head from "next/head";

// import components
import Layout from "@/components/Layout";

// import styles
import "@/styles/globals.scss";

// import image
import pic from "@/public/pic.jpg";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    {/* <div className="img-wrapper">
      <Image
        src={pic}
        width={500}
        height={400}
        alt="some pic"
        placeholder="blur"
      />
    </div> */}
  </Layout>
);

export default MyApp;
