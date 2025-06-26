import { Formik, Form, Field } from 'formik'
import css from './FeedbackForm.module.css'
import { useId } from 'react'
import * as Yup from 'yup'

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
    selector: Yup.string().oneOf(["Option 1", "Option 2", "Option 3"]).required("Required")
})

const initialValues = {
        username: "",
        email: "hanna@com",
        massage: "",
        selector: ""
}

const FeedbackForm = () => {
    const handleSubmit = (values, actions) => {
        console.log(values)
        actions.resetForm()
    }

    const nameFieldId = useId()
    const emailFieldId = useId()
    const msgFieldId = useId()
    const selFieldId = useId()


    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={css.form}>
            <label htmlFor={nameFieldId}>Username:</label>
            <Field id={nameFieldId} type="text" name="username" className={css.field}></Field>

            <label htmlFor={emailFieldId}>Email:</label>
            <Field id={emailFieldId} type="email" name="email" className={css.field}></Field>

            <Field as="textarea" cols="20" rows="5" name="massage" id={msgFieldId}/>

            <Field as="select" name="selector" id={selFieldId}>
                <option value="o1">Option 1</option>
                <option value="o2">Option 2</option>
                <option value="o3">Option 3</option>
            </Field>

            <button type="submit" className={css.btn}>Submit</button>
        </Form>
      </Formik>
    )
  }
export default FeedbackForm