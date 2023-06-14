import { memo } from "react";
import { NextPage } from "next";
interface DATA {
  name: string;
  parent: string;
  isMaster: boolean;
  isId: boolean;
  inputType: any;
  placeholder: string;
  label: string;
  childern: any;
}
interface FormBuilderProps {
  data: DATA[];
}

const FormBuilder: NextPage<FormBuilderProps> = memo(({ data }) => {
  console.log("data 🔥🔥", data);


  return (
    <div>
      {data?.map((item) => {
        if (item && item?.childern !== null && item?.childern?.length > 0) {
          return (
            <>
              <div className="divider">{item.name}</div>
              <FormBuilder data={item.childern} />
            
            </>
          );
        } else if (item.inputType === "text") {
          return (
            <input
              placeholder={item.name + " - TEXT"}
              type="text"
              className="input-bordered input-primary input w-full max-w-xs"
            />
          );
        } else if (item.inputType === "number") {
          return (
            <input
              placeholder={item.name + " - NUMBER"}
              type="number"
              className="input-bordered input-secondary input w-full max-w-xs"
            />
          );
        } else if (item.inputType === "checkbox") {
          return (
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">{item.name}</span>
                <input
                  type="checkbox"
                  // checked="checked"
                  className="checkbox-primary checkbox"
                />
              </label>
            </div>
          );
        } else if (item.inputType === "multi-select") {
          return (
            <input
              placeholder={item.name + " - MULTI-SELECT"}
              type="text"
              className="input-accent input"
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
});

export default FormBuilder;
