import React from "react";

import { Dropdown } from "primereact/dropdown";

import { InputText } from "primereact/inputtext";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="flex align-items-center justify-content-between py-3 px-5 flex-wrap">
      <div className="text-500 w-6 md:w-2 font-medium">
        <Dropdown
          optionLabel="name"
          optionValue="id"
          options={[]}
          placeholder="Select a booklist"
        />
      </div>
      <div className="w-6 md:w-2 flex justify-content-end">
        <InputText placeholder="Search" />
      </div>
    </div>
  );
};
