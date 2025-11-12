 import {Formik, Form, Field } from 'formik'
 import { useId } from "react";
 import { ErrorMessage } from "formik";
 import * as Yup from "yup";
 import { nanoid } from 'nanoid'
 

 const initialValues = {
    name: "",
    number: ""
 };

const ContactForm = ({addContact}) => {
     const handleSubmit = (values, actions) => {
		
      addContact({name: values.name, number: values.number, id:{nanoid} })
	};
     const nameFieldId = useId();
     const numberFieldId = useId();

     const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.number().required("Required")
     });
return (
    <Formik 
    initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}
      >
    	<Form>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="name" id={nameFieldId} />
            <ErrorMessage name="name" as="span" />
             <label htmlFor={numberFieldId}>Number</label>
			<Field type="string" name="number" id={numberFieldId} />
            <ErrorMessage name="number" as="span" />
				<button type="submit">Add Contact</button>
        </Form>
    </Formik>
  )
};


export default ContactForm;