import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';

function BankCardForm({formikRef3}) {
    const isValidExpiryDate = (value) => {
        const [month, year] = value.split('/').map(num => parseInt(num, 10));
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        const expYear = year + 2000;

        if (expYear < currentYear || (expYear === currentYear && month < currentMonth)) {
            return false;
        }
        return month >= 1 && month <= 12;
    };

    return (
        <Formik
            innerRef={formikRef3}
            initialValues={{
                card_number: '',
                ex_date: '',
                cvc_code: ''
            }}
            validationSchema={Yup.object({
                card_number: Yup.string()
                    .required('Card Number is required')
                    .matches(/^\d{13,19}$/, 'Card Number must be between 13 and 19 digits'),
                ex_date: Yup.string()
                    .required('Expiration Date is required')
                    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration Date must be in MM/YY format'),
                cvc_code: Yup.string()
                    .required('CVC Code is required')
                    .matches(/^\d{3,4}$/, 'CVC Code must be 3 or 4 digits'),
            })}>
            {() => (
                <Form>
                    <div className='flex flex-wrap'>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="card_number">Card Number</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='1234 1234 1234' name="card_number" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="card_number" component="div" />
                        </div>
                        <div className='w-6/12 mb-4 pr-3'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="ex_date">Expiration date</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='MM/YY' name="ex_date" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="ex_date" component="div" />
                        </div>
                        <div className='w-6/12 mb-4 pl-3'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="cvc_code">CVC</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='CVC code' name="cvc_code" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="cvc_code" component="div" />
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default BankCardForm