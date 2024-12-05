import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';

function ContactForm() {
    return (
        <Formik
            initialValues={{
                user_name: '',
                user_email: '',
                message: '',
            }}
            validationSchema={Yup.object({
                user_name: Yup.string()
                    .min(3, 'Name must be at least 3 characters')
                    .required('Name is required'),

                user_email: Yup.string()
                    .email('Invalid email address')
                    .required('Email required'),

                message: Yup.string()
                    .min(10, 'Description must be at least 10 characters')
                    .required('Description required')
            })}
        >
            {() => (
                <Form>
                    <div className='mb-5 flex flex-wrap'>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="user_name">Full Name</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Your name' name="user_name" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="user_name" component="div" />
                        </div>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="user_email">Email address</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Your Email' name="user_email" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="user_email" component="div" />
                        </div>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="message">Message</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Your message' name="message" as="textarea" rows="5" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="message" component="div" />
                        </div>
                        <div className='w-full flex justify-center'>
                            <button className='bg-[#DC375F] text-white rounded-lg py-2 px-10'>Send Message</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm