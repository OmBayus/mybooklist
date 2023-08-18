import React from "react";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { redoAsync,undoAsync } from "features/history/historySlice";
import content from "../constants/content";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ name = "", addBook }) => {
  const dispatch = useDispatch();

  return (
    <div className="border-bottom-1 border-300">
      <div className="flex align-items-center justify-content-between py-3 px-5 flex-wrap">
        <div className="text-500 w-6 md:w-2 font-medium">
          {content.header.title(name)}
        </div>
        <div className="w-6 md:w-2 flex justify-content-end">
          <Button icon="pi pi-undo" className="p-button-text" onClick={()=>{dispatch(undoAsync())}} />
          <Button icon="pi pi-refresh" className="p-button-text" onClick={()=>dispatch(redoAsync())} />
          <Button
            label="Add"
            icon="pi pi-plus"
            className="p-button-text"
            onClick={() =>
              addBook({
                name: "Book1",
                author: "Author1",
                rate: 3,
                status: "reading",
                review: "review",
              })
            }
          />
        </div>
      </div>
    </div>
  );
};
