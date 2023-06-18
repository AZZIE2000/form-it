import { memo, useEffect, useState } from "react";
import { NextPage } from "next";

interface indexProps {}

const index: NextPage<indexProps> = memo(({}) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({
      name: "Duaa Nawwas",
      email: "",
    });
  }, []);
  // Please honey fix the h-screen make it calc(100vh - 4rem *the navbar h) or something like that
  return (
    <>
      <div className="flex h-screen items-center justify-center gap-2">
        <div className="indicator ">
          <div className="card  h-[320px] w-[500px]  bg-base-200 p-5 shadow-lg">
            <figure className="indicator-start indicator-item indicator-top">
              <img
                className="h-32 w-32 rounded-full "
                src="https://cf.quizizz.com/avatars/images/eyes4-nose9-mouth5-7ED321.png"
                alt="profile_image"
              />
            </figure>
            <div className="card-body">
              <div className="flex w-full items-center justify-between">
                <h2 className="card-title">Hello Duaa</h2>
                <h2 className="card-title">💜</h2>
              </div>
              <div className="mt-5 flex flex-col gap-7">
                <p>Here is some info about you</p>
                <div className="space-y-1">
                  <p className="card-title">Name: Duaa Nawwas</p>
                  <p className="card-title">Email: duaa.nawwas@gmail.com</p>
                  <p className="card-title">Phone: 0778086357</p>
                  <p className="card-title">Date Of Birth: 29/6/1996</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stats  stats-vertical h-[320px] bg-base-200 shadow-xl">
          <div className="stat">
            <div className="stat-title">Claimed Deals</div>
            <div className="stat-value">69</div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Amount</div>
            <div className="stat-value">69$</div>
          </div>
        </div>
      </div>
    </>
  );
});

export default index;
