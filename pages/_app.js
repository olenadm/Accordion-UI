import "../styles/customBootstrap.scss";
import { useEffect } from "react";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
