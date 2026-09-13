import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { ITechnologies } from "../../../Types/Technologies";
import AvailableTechnologie from "./AvailableTechnologie";
import UserStack from "./UserStack";
interface TechnologiesProps {
  technologiesPromise: Promise<ITechnologies[]>;
  stackNumber: number;
  setStackNumber: Dispatch<SetStateAction<number>>;
  selectedStack:object[];
  setSelectedStack:Dispatch<SetStateAction<number>>
}
const Technologies = ({
  technologiesPromise,
  stackNumber,
  setStackNumber,
}: TechnologiesProps) => {
  const technologies = use(technologiesPromise);
  const[selectedStack,setSelectedStack] =useState<ITechnologies[]>([])
  return (
    <>
      <div className="container px-5 m-auto md:flex md:flex-col gap-1 md:gap-2 justify-center md:justify-start items-center md:items-start">
        <h2 className="md:text-[32px] text-3xl font-semibold md:font-extrabold inter-font">
          Explore the <br />
          <span className="inter-font brand-text ">Technologies</span>
        </h2>
        <p className="text-[#64748bFF] text-[12px] md:text-[16px] md:max-w-xl max-w-4xs">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="md:flex justify-between md:container md:mx-auto md:gap-x-5">
        <AvailableTechnologie
          technologies={technologies}
          stackNumber={stackNumber}
          setStackNumber={setStackNumber}
          selectedStack={selectedStack}
          setSelectedStack={setSelectedStack}
        ></AvailableTechnologie>
        <UserStack
          stackNumber={stackNumber}
          setStackNumber={setStackNumber}
          selectedStack={selectedStack}
          setSelectedStack={setSelectedStack}
        ></UserStack>
      </div>
    </>
  );
};

export default Technologies;
