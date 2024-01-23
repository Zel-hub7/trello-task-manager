import React from "react";
import Done from "./Done";
import Progress from "./Progress";
import ToDo from "./Todo";

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-4 min-h-screen p-24">
      <div className="card bg-silver">
        <h2 className="text-white">Done</h2>
        <div className="card-content">
          <Done />
        </div>
      </div>
      <div className="card bg-silver">
        <h2 className="text-white">Progress</h2>
        <div className="card-content">
          <Progress />
        </div>
      </div>
      <div className="card bg-silver">
        <h2 className="text-white">To Do</h2>
        <div className="card-content">
          <ToDo />
        </div>
      </div>
    </div>
  );
};

export default Card;
