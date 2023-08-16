import React from "react";

import { Dropdown } from "primereact/dropdown";

import { InputText } from "primereact/inputtext";
import statusOptions from "../constants/status.options";
import content from "../constants/content";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({onChangeFilterStatus,filterStatus}) => {
  return (
    <div className="flex align-items-center justify-content-between py-3 px-5 flex-wrap">
      <div className="text-500 w-6 md:w-2 font-medium">
        <Dropdown
          value={filterStatus}
          options={statusOptions}
          placeholder={content.filter.statusDropdown.placeHolderText}
          onChange={onChangeFilterStatus}
        />
      </div>
      <div className="w-6 md:w-2 flex justify-content-end">
        <InputText placeholder={content.filter.searchInput.placeHolderText} />
      </div>
    </div>
  );
};
