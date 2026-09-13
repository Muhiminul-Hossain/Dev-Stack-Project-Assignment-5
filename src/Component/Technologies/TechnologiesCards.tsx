import { useState, type Dispatch, type SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import type { ITechnologies } from "../../../Types/Technologies";
import { toast } from "react-toastify";
interface ITechnologiesProp {
  technologie: ITechnologies;
  stackNumber: number;
  setStackNumber: Dispatch<SetStateAction<number>>;
  selectedStack: ITechnologies[];
  setSelectedStack: Dispatch<SetStateAction<ITechnologies[]>>;
}
const TechnologiesCards = ({
  technologie,
  stackNumber,
  setStackNumber,
  selectedStack,
  setSelectedStack,
}: ITechnologiesProp) => {
  const inStack = selectedStack.some(
    (technology) => technology.id === technologie.id,
  );

  const hanldeStackNumber = () => {
    if (inStack) {
      toast("This Technology was already Selected");
      return
    } else{
      toast.success(`${technologie.name} Added to Stack`);
    }

    setStackNumber(stackNumber + 1);
    setSelectedStack([...selectedStack, technologie]);
  };
  return (
    <div
      key={technologie.id}
      className=" flex flex-col gap-5  p-4 md:p-7 border border-gray-200 rounded-2xl mx-auto "
    >
      <div className="flex justify-between ">
        <img src={technologie.icon} alt="" className="w-8" />
        <div className="badge badge-soft badge-primary font-bold">
          {technologie.badge}
        </div>
      </div>
      <div className="my-2.5 grid gap-1.5">
        <h3 className="text-2xl font-bold">{technologie.name}</h3>
        <p>{technologie.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="badge badge-soft badge-primary">{technologie.category}</p>
        <p>{technologie.difficulty}</p>
        <p className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          {technologie.rating}
        </p>
      </div>
      <button
        onClick={() => {
          hanldeStackNumber();
          
        }}
        className={
          inStack === true
            ? "btn btn-soft btn-secondary my-5 "
            : "btn btn-neutral my-5 "
        }
      >
        {inStack === true ? "Added to Stock" : "Add to Stock"}
      </button>
    </div>
  );
};

export default TechnologiesCards;
