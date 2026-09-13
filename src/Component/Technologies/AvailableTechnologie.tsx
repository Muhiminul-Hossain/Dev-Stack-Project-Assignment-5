import type { Dispatch, SetStateAction } from "react";
import type { ITechnologies } from "../../../Types/Technologies";
import TechnologiesCards from "./TechnologiesCards";

interface technologiesProp {
  technologies: ITechnologies[];
  stackNumber: number;
  setStackNumber: Dispatch<SetStateAction<number>>;
  selectedStack:ITechnologies[];
  setSelectedStack: Dispatch<SetStateAction<ITechnologies[]>>;
}
const AvailableTechnologie = ({
  technologies,
  stackNumber,
  setStackNumber,
  selectedStack,
  setSelectedStack,
}: technologiesProp) => {
  return (
    <section className="grid  md:grid-cols-3 grid-cols-1 gap-5 container mx-auto my-10 flex-1">
      {technologies.map((technologie: ITechnologies) => {
        return (
          <>
            <TechnologiesCards
              technologie={technologie}
              stackNumber={stackNumber}
              setStackNumber={setStackNumber}
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
            ></TechnologiesCards>
          </>
        );
      })}
    </section>
  );
};

export default AvailableTechnologie;
