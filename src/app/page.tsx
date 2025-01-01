import {NextPage} from "next";
import {JSX} from "react";

const Home: NextPage = (): JSX.Element => {
  return (
      <>
          <h1 className="text-bold text-2xl">
              Hello world!
          </h1>
      </>
  );
}

export default Home;