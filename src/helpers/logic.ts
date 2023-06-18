import { isValidateJson } from "./common";

const findInputType = (value: any, key: any) => {
  if (value === null) return "null";
  if (Array.isArray(value)) {
    if (value.length > 0) {
      if (typeof value[0] === "string") {
        return "multi-select";
      } else {
        const data: any = handleButton(JSON.stringify(value[0]), key);
        if (data) return data as any;
        return "array";
      }
    } else {
      return "empty-array";
    }
  }
  if (typeof value === "boolean" || value === "true" || value === "false")
    return "checkbox";
  if (typeof value === "number") return "number";
  if (typeof value === "object") {
    const data: any = handleButton(JSON.stringify(value), key);
    if (data) return data as any;
  }
  if (typeof value === "string") return "text";
};

const handleChildren = (value: any, parent: string) => {
  if (Array.isArray(value)) {
    if (value.length > 0) {
      if (typeof value[0] === "string") {
        return null;
      } else {  
        const data: any = handleButton(JSON.stringify(value[0]), parent);
        if (data) return data as any;
      }
    } else {
      return "empty-array";
    }
  } else {
    const data: any = handleButton(JSON.stringify(value), parent);
    if (data) return data as any;
  }
};

const handleButton = (json: any, parent: string) => {
  if (!isValidateJson(json)) return;
  const obj = JSON.parse(json);
  const textArea = ["desc", "info", "about", "description"];
  const res = Object.keys(obj).map((key) => {
    return {
      name: key,
      parent,
      isMaster: typeof obj[key] === "object",
      isId: key.includes("id"),
      inputType:
        typeof obj[key] !== "object" || !Array.isArray(obj[key])
          ? textArea.includes(key)
            ? "textarea"
            : findInputType(obj[key], key)
          : Array.isArray(obj[key]) &&
            obj[key]?.length > 0 &&
            typeof obj[key][0] === "string" &&
            "multi-select",
      placeholder: key,
      label: key,
      childern:
        typeof obj[key] === "object" || Array.isArray(obj[key])
          ? handleChildren(obj[key], key)
          : null,
    };
  });

  return res;
};

export { handleButton, findInputType };
