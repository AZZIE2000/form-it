import { memo, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import NavBar from "~/components/NavBar";

interface IndexProps {}

const Index: NextPage<IndexProps> = memo(({}) => {
  const [json, setJson] = useState("{}");
  return (
    <>
      <Head>
        <title>Form It</title>
        <meta
          name="description"
          content="create form using only objects fast"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" min-h-screen  bg-gradient-to-b from-[#2e026d] to-[#15162c] ">
        <NavBar />
        <div className="pt-5">
          <div className="flex justify-center">
            <textarea
              value={json}
              onChange={(e) => setJson(e.target.value)}
              className="textarea-accent textarea textarea-lg"
            ></textarea>
          </div>
        </div>
      </main>
    </>
  );
});

export default Index;
