import React, { memo, useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import NavBar from "~/components/NavBar";
import { isValidateJson } from "~/helpers/common";
import { handleButton } from "~/helpers/logic";
import FormBuilder from "~/components/FormBuilder";

interface DATA {
  name: string;
  parent: string;
  isMaster: boolean;
  isId: boolean;
  inputType: any;
  placeholder: string;
  label: string;
  childern: any;
}

const Index: NextPage = memo(() => {
  const [json, setJson] = useState("{}");
  const [jsonRes, setJsonRes] = useState<DATA[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const handleGo = async (data: any) => {
    setLoading(true);
    try {
      const res = await handleButton(json, "root");
      if (res) {
        setJsonRes(res);
        // console.log(res);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.log("🚀🚀🚀", jsonRes);
  }, [jsonRes]);

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
        <div className="pt-5 ">
          <div className="flex justify-center">
            <div className="space-y-2">
              <p>place you json here</p>
              <textarea
                value={json}
                onChange={(e) => setJson(e.target.value)}
                className="textarea-accent textarea textarea-lg block w-96 text-xs"
              ></textarea>
              <button
                onClick={() => handleGo(json)}
                className="btn-primary btn  "
              >
                submit
              </button>
            </div>
          </div>
          <div>
            <FormBuilder data={jsonRes || []} />
          </div>
        </div>
      </main>
    </>
  );
});

export default Index;
