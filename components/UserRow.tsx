"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SaveButton } from "./SaveButton";
import { DeleteButton } from "./DeleteButton";
import { UserRowProps } from "./UserRowProps";
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  role: Yup.string().required(),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const UserRow = (user: UserRowProps) => {
  const save = () => {};
  return (
    <div className="border-b hover:bg-orange-100 bg-gray-100">
      <Formik
        initialValues={{ email: user.email, fullname: user.fullname, role: user.role }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, handleSubmit, submitForm, errors }) => (
          <Form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4">
            <div className="p-3 px-5">
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="p-3 px-5">
              <Field type="text" name="fullname" />
              <ErrorMessage name="fullname" component="div" />
            </div>

            <div className="p-3 px-5">
              <Field as="select" name="role">
                <option value="">Select</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Field>
              <ErrorMessage name="role" component="div" />
            </div>
            <div className="p-3 px-5 flex justify-end">
              <SaveButton onClick={submitForm} isDisabled={isSubmitting} />
              <DeleteButton />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
