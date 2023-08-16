import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (<li className="flex justify-content-between align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
    <div className="text-500 w-6 md:w-2 font-medium">Title</div>
    <div className="text-900 flex justify-content-center">
      <Tag severity="success" value="Success"></Tag>
    </div>
    <div className="w-6 md:w-2 flex justify-content-end">
      <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
    </div>
  </li>)
}