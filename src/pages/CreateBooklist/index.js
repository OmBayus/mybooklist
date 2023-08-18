import React from "react";
import Dia from "components/Dia";
import { InputText } from "primereact/inputtext";
import useCreateBooklist from "./hooks/useCreateBooklist";
import content from "./constants/content";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { name, onChange, submit, loading } = useCreateBooklist();
  return (
    <Dia
      submit={submit}
      headerText={content.dialog.header}
      submitLabel={content.dialog.submitLabel}
      loading={loading}
      isForm
    >
      <div className="field col-12">
        <h5 className="required" style={{ marginBottom: "0.5em" }}>
          {content.dialog.form.fields.name.label}
        </h5>
        <InputText value={name} onChange={onChange} style={{ width: "100%" }} />
      </div>
      <input type="submit" className="hidden" /> 
    </Dia>
  );
};
