import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  children,
  submit,
  submitLabel = "",
  headerText,
  showFooter = true,
  loading=false,

}) => {
  const footerContent = (
    <div>
      <Button
        loading={loading}
        label={submitLabel}
        icon="pi pi-check"
        onClick={submit}
        autoFocus
      />
    </div>
  );
  return (
    <Dialog
      header={headerText}
      visible={true}
      style={{ width: "50vw", padding: "10px" }}
      footer={showFooter && footerContent}
      closable={false}
    >
      <div style={{ margin: "10px", padding: "10px" }}>{children}</div>
    </Dialog>
  );
};
