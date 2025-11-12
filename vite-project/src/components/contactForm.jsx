 import {Formik, Form, Field } from 'formik'
 import { useId } from "react";
 import { ErrorMessage } from "formik";
 import * as Yup from "yup";

 const initialValues = {
    name: "",
    number: ""
 }
const ContactForm = () => {
    const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};
     const nameFieldId = useId();
     const numberFieldId = useId();

     const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.number().required("Required")
     });
  return (
    <Formik 
    initialValues={initialValues}
     onSubmit={handleSubmit}
     validationSchema={FeedbackSchema}>
    	<Form>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" as="span" />
             <label htmlFor={numberFieldId}>Number</label>
			<Field type="string" name="number" />
            <ErrorMessage name="number" as="span" />
				<button type="submit">Add Contact</button>
        </Form>
    </Formik>
  )
};


export default ContactForm;