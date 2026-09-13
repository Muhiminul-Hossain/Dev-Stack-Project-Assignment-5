import { type Dispatch, type SetStateAction } from "react";
import { TbTrash } from "react-icons/tb";
import type { ITechnologies } from "../../Types/Technologies";
import { toast } from "react-toastify";

interface IUserStackProps {
  stackNumber: number;
  setStackNumber: Dispatch<SetStateAction<number>>;
  selectedStack: ITechnologies[];
  setSelectedStack: Dispatch<SetStateAction<ITechnologies[]>>;
}

const UserStack = ({
  stackNumber,
  setStackNumber,
  selectedStack,
  setSelectedStack,
}: IUserStackProps) => {
  const handelRemoveStack = (technologie: ITechnologies) => {
    const restStack = selectedStack.filter((item) => {
      return item.id !== technologie.id;
    });
    toast(`${technologie.name} Remove from Stack`);
    setSelectedStack(restStack);
    setStackNumber((stackNum) => (stackNum > 0 ? stackNum - 1 : 0));
  };

  const handleRemoveAllStack = () => {
    toast("All stacks are Removed");
    setSelectedStack([]);
    setStackNumber(0);
  };

  return (
    <section className="my-10">
      <div className="flex flex-col gap w-87.5 p-7 border border-gray-200 rounded-2xl mx-auto">
        <h4 className="text-2xl font-bold">Your Stack</h4>
        <p className="text-gray-400">
          {selectedStack.length === 0
            ? "No technologies selected yet."
            : `${selectedStack.length} Technologies Selected`}
        </p>

        <div className="my-3">
          {selectedStack.length === 0 ? (
            <div className="border border-dashed border-gray-200 rounded-2xl py-8 text-center text-gray-400">
              Your stack is empty.
            </div>
          ) : (
            selectedStack.map((technologie: ITechnologies) => {
              return (
                <div key={technologie.id} className="my-3">
                  <div className="flex justify-between border border-gray-200 rounded-2xl items-center px-5">
                    <div className="flex gap-2.5 py-3">
                      <img className="w-8" src={technologie.icon} alt="" />
                      <div>
                        <h2 className="font-bold text-xl">
                          {technologie.name}
                        </h2>
                        <p className="text-[10px] text-gray-400">
                          {technologie.category}
                        </p>
                      </div>
                    </div>
                    <span
                      className="text-red-600 text-2xl cursor-pointer"
                      onClick={() => handelRemoveStack(technologie)}
                    >
                      <TbTrash />
                    </span>
                  </div>
                </div>
              );
            })
          )}
          {selectedStack.length > 0 && (
            <button
              onClick={handleRemoveAllStack}
              className="w-full mt-4 py-2.5 border border-red-200 text-red-500 font-medium rounded-xl  cursor-pointer"
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserStack;
