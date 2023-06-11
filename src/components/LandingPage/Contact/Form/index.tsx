"use client";
import { Field, FieldProps, Form, Formik } from "formik";
import { FC } from "react";
import Input from "./Input";
import {
  IContactValues,
  fields,
  handleSubmit,
  initialValues,
} from "./variables";

const ContactForm: FC = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formik) => (
        <Form>
          <div className="flex justify-between items-center gap-16">
            <div className="w-1/2">
              {fields.map(({ field, form, meta, name, ...others }) => (
                <Field key={name} name={name}>
                  {(fieldProps: FieldProps<IContactValues>) => (
                    <Input {...fieldProps} {...others} />
                  )}
                </Field>
              ))}
            </div>
            <div className="w-1/2">
              <Field name="message">
                {(fieldProps: any) => (
                  <textarea
                    {...fieldProps}
                    placeholder="Message"
                    className="h-full form-control"
                  />
                )}
              </Field>
            </div>
          </div>

          <div className="flex justify-end mt-12">
            <button className="btn btn-blue bg-white">Send Message</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
