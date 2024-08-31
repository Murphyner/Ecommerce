import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';

function CheckoutForm() {
    return (
        <Formik
            initialValues={{
                first_name: '',
                last_name: '',
                phone_number: '',
                email_address: ''
            }}
            validationSchema={Yup.object({
                first_name: Yup.string()
                    .required('First Name is required')
                    .min(2, 'First Name must be at least 2 characters')
                    .max(50, 'First Name must be 50 characters or less'),
                last_name: Yup.string()
                    .required('Last Name is required')
                    .min(2, 'Last Name must be at least 2 characters')
                    .max(50, 'Last Name must be 50 characters or less'),
                phone_number: Yup.string()
                    .required('Phone number is required')
                    .matches(/^(0|\+994)(50|51|55|60|70|77|99)\d{7}$/, 'Phone number is not valid'),
                email_address: Yup.string()
                    .required('Email is required')
                    .email('Email is not valid'),
            })}
        >
            {() => (
                <Form>
                    <div className='mb-5 flex flex-wrap'>
                        <div className='w-6/12 pr-3 mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="first_name">First Name</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='First Name' name="first_name" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="first_name" component="div" />
                        </div>
                        <div className='w-6/12 pl-3 mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="last_name">Last Name</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Last Name' name="last_name" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="last_name" component="div" />
                        </div>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="phone_number">Phone Number</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Phone Number' name="phone_number" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="phone_number" component="div" />
                        </div>
                        <div className='w-full'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="email_address">Email address</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Email address' name="email_address" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="email_address" component="div" />
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default CheckoutForm