import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';

function AccountForm() {
    return (
        <Formik
            initialValues={{
                firstName: '',
                userName: '',
                accountEmail: ''
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .required('First Name is required')
                    .min(2, 'First Name must be at least 2 characters')
                    .max(50, 'First Name must be 50 characters or less'),
                userName: Yup.string()
                    .required('User Name is required')
                    .min(2, 'User Name must be at least 2 characters')
                    .max(50, 'User Name must be 50 characters or less'),
                accountEmail: Yup.string()
                    .required('Email is required')
                    .email('Email is not valid'),
            })}
        >
            {() => (
                <Form>
                    <div className='mb-5 flex flex-wrap'>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="firstName">First name *</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='First name' name="firstName" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="firstName" component="div" />
                        </div>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="userName">User name *</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='User name' name="userName" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="userName" component="div" /></div>
                        <div className='w-full'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="accountEmail">Email *</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Email' name="accountEmail" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="accountEmail" component="div" />
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default AccountForm