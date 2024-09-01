import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';

function AccountForm() {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                displayName: '',
                accountEmail: ''
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .required('First Name is required')
                    .min(2, 'First Name must be at least 2 characters')
                    .max(50, 'First Name must be 50 characters or less'),
                lastName: Yup.string()
                    .required('Last Name is required')
                    .min(2, 'Last Name must be at least 2 characters')
                    .max(50, 'Last Name must be 50 characters or less'),
                displayName: Yup.string()
                    .required('Display Name is required')
                    .min(2, 'Display Name must be at least 2 characters')
                    .max(50, 'Display Name must be 50 characters or less'),
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
                            <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="firstName" component="div" />
                        </div>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="lastName">Last name *</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Last name' name="lastName" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="lastName" component="div" />
                        </div>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="displayName">Display name *</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Display name' name="displayName" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="displayName" component="div" />
                            <p className='italic text-[#6C7275] text-[0.75em] font-normal mt-3'>This will be how your name will be displayed in the account section and in reviews</p>
                        </div>
                        <div className='w-full'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="accountEmail">Email *</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Email' name="accountEmail" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="accountEmail" component="div" />
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default AccountForm