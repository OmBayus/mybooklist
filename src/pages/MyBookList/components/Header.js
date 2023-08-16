import React from "react";
import { useSelector } from "react-redux";
import { Button } from "primereact/button";
import content from "../constants/content";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const booklist = useSelector((state) => state.booklist);
  return (
    <div className="border-bottom-1 border-300">
      <div className="flex align-items-center justify-content-between py-3 px-5 flex-wrap">
        <div className="text-500 w-6 md:w-2 font-medium">{content.header.title(booklist.name)}</div>
        <div className="w-6 md:w-2 flex justify-content-end">
          <Button label="Add" icon="pi pi-plus" className="p-button-text" />
        </div>
      </div>
    </div>
  );
};
