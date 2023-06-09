import { memo } from "react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import NavBar from "~/components/NavBar";

interface indexProps {}

const Index: NextPage<indexProps> = memo(({}) => {
  const router = useRouter();
  const { data: sessionData, status } = useSession();
  if (status === "unauthenticated") router.push("/");
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
        <div className="flex items-center justify-center pt-20 ">
          <div className="card glass w-96">
            <figure>
              <img
                src={sessionData?.user?.image!}
                alt="car!"
                className="h-20 w-20 rounded-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Sub {sessionData?.user?.name}</h2>
              <p>Excited for your forms?</p>
              <div className="card-actions justify-end">
                <button className="btn-primary btn">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
});

export default Index;
