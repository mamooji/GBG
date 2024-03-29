import React from "react";

interface Props {
  text?: string;
}
const Divider: React.FC<Props> = ({ text }) => {
  return (
    <div className={`relative ${text !== "Statistics" ? "my-24" : "mb-24"} `}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-3 bg-white text-lg font-medium text-gray-900">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Divider;
