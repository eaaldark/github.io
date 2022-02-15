import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SumaryItem = ({ location, title, subTitle, info, icon }: any) => {
  return (
    <React.Fragment>
      <div className="w-auto flex flex-col p-5 text-center place-items-center rounded-xl border-gray-200 shadow-gray-200 border shadow-md break-inside">
        <h1 className="font-semibold text-xl mb-2">{title}</h1>
        <p className="font-medium mb-2">{location}</p>
        <p className="mb-5">{info}</p>
        <span className="flex flex-row space-x-2 items-center">
          <FontAwesomeIcon icon={icon} />
          <p className="text-gray-500 bor">{subTitle}</p>
        </span>
      </div>
    </React.Fragment>
  );
};

export default SumaryItem;
