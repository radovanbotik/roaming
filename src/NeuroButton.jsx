import { PlusSmallIcon } from "@heroicons/react/24/solid";

const NeuroButton = () => {
  return (
    <div className="min-h-screen grid  place-content-center">
      <button className="p-4 shadow-glass-to-tl bg-gradient-to-tl from-gray-100 via-gray-200 to-gray-400 rounded-full ">
        <PlusSmallIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default NeuroButton;

// background: linear-gradient(145deg, #cacaca, #f0f0f0);
// box-shadow:  20px 20px 40px #bebebe,
//              -20px -20px 40px #ffffff;
