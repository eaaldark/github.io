import React from "react";

const SkillItem = ({ skillName, percentaje, color }: any) => {
  const percentajeWidthAndColor = {
    width: `${percentaje}%`,
    backgroundColor: `rgb(${color} / 1)`,
    height: "0.25rem",
  };
  return (
    <React.Fragment>
      <div>
        <h4 className="font-bold text-sm">{`${skillName} - ${percentaje}%`}</h4>
        <div className="w-full bg-gray-200 h-1 mb-6 shadow-sm">
          <div style={percentajeWidthAndColor} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SkillItem;
