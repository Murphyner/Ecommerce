import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';

function ShippingForm({formikRef2}) {
    return (
        <Formik
            innerRef={formikRef2}
            initialValues={{
                street_address: '',
                country: '',
                town: '',
                state: '',
                zip_code: ''
            }}
            validationSchema={Yup.object({
                street_address: Yup.string()
                    .required('Street Address is required'),
                country: Yup.string()
                    .required('Country is required')
                    .min(2, 'Country must be at least 2 characters'),
                town: Yup.string()
                    .required('Town is required'),
                state: Yup.string()
                    .required('State is required'),
                zip_code: Yup.string()
                    .required('Zip Code is required')
                    .matches(/^\d{4,5}$/, 'Zip Code must be 4 or 5 digits')
            })}>
            {() => (
                <Form>
                    <div className='flex flex-wrap'>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="street_address">Street Address *</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Street Address' name="street_address" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="street_address" component="div" />
                        </div>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="country">Country *</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Country' name="country" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="country" component="div" />
                        </div>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="town">Town / City *</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Town / City' name="town" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="town" component="div" />
                        </div>
                        <div className='w-6/12 mb-4 pr-3'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="state">State</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='State' name="state" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="state" component="div" />
                        </div>
                        <div className='w-6/12 mb-4 pl-3'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="zip_code">Zip Code</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Zip Code' name="zip_code" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="zip_code" component="div" />
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ShippingForm