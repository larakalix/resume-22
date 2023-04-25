import Head from "next/head";
import { CvScreen } from "../src/pages/about/CvScreen";

const Cv = () => {
  return (
    <div>
      <Head>
        <title>CV - Ivan Lara</title>
      </Head>

      <CvScreen />
    </div>
  );
};

export default Cv;
