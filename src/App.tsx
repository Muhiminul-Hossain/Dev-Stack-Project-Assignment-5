import { Suspense, useState } from "react";
import Banner from "./Component/Banner";
import Navbar from "./Component/Navbar";
import Technologies from "./Component/Technologies/Technologies";
import type { ITechnologies } from "../Types/Technologies";
import Footer from "./Component/Footer";
const TechnologiesFetch = async (): Promise<ITechnologies[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
function App() {
  const [TechnologiesPromies] = useState(() => TechnologiesFetch());
  const [stackNumber, setStackNumber] = useState(0);
  return (
    <>
      <Navbar></Navbar>
      <Banner />
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            {
              <span className="loading loading-infinity loading-xl">
                Loading...
              </span>
            }
          </div>
        }
      >
        <Technologies
          technologiesPromise={TechnologiesPromies}
          stackNumber={stackNumber}
          setStackNumber={setStackNumber}
        ></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
