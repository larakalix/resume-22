import Head from "next/head";
import { Button } from "@ui/kit";

export default function Docs() {
  return (
    <>
      <Head>
        <title>Documentation App</title>
      </Head>

      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex space-x-3 items-center">
          <h1 className="font-bold text-lg">Docs</h1>
          <Button>
            <span>Let&apos;s get it!</span>
          </Button>
        </div>
      </div>
    </>
  );
}
