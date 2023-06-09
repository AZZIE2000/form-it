import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "~/components/NavBar";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

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
        <p>hi</p>
      </main>
    </>
  );
};

export default Home;
