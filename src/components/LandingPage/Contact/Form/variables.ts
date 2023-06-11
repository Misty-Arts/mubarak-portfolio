import { FCIInput } from "./Input";

export const handleSubmit = () => {
  console.log("submit");
};

export interface IContactValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const initialValues: IContactValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const fields: Partial<FCIInput>[] = [
  {
    name: "name",
    inputProps: {
      type: "text",
      placeholder: "Name",
    },
    inputContainerProps: {
      className: "mb-4",
    },
  },
  {
    name: "email",
    inputProps: {
      type: "email",
      placeholder: "Email",
    },
    inputContainerProps: {
      className: "mb-4",
    },
  },
  {
    name: "subject",
    inputProps: {
      type: "text",
      placeholder: "Subject",
    },
  },
];
