import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import statusTag from "../constants/status.tag";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({book}) => {
    return (<li className="flex justify-content-between align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
    <div className="text-500 w-6 md:w-2 font-medium">{book.name}</div>
    <div className="text-900 flex justify-content-center">
      <Tag severity={statusTag[book.status].severity} value={statusTag[book.status].value} />
    </div>
    <div className="w-6 md:w-2 flex justify-content-end">
      <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
    </div>
  </li>)
}