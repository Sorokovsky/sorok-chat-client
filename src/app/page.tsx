import {NextPage} from "next";
import {JSX} from "react";

const Home: NextPage = (): JSX.Element => {
  return (
      <>
          <h1 className="text-[30px] font-bold">
              Hello world!
          </h1>
      </>
  );
}

export default Home;