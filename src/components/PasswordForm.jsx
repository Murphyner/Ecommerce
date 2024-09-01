import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';

function PasswordForm() {
    return (
        <Formik
            initialValues={{
                oldPass: '',
                newPass: '',
                repPass: ''
            }}
            validationSchema={Yup.object({
                oldPass: Yup.string()
                    .required('Old Password is required')
                    .min(8, 'Old Password must be at least 8 characters')
                    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        'Old Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
                newPass: Yup.string()
                    .required('New Password is required')
                    .min(8, 'New Password must be at least 8 characters')
                    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        'New Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
                repPass: Yup.string()
                    .required('Please repeat the new password')
                    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
            })}
        >
            {() => (
                <Form>
                    <div className='mb-5 flex flex-wrap'>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="oldPass">Old password</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Old password' name="oldPass" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="oldPass" component="div" />
                        </div>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="newPass">New password</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='New password' name="newPass" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="newPass" component="div" />
                        </div>
                        <div className='w-full'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="repPass">Repeat new password</label>
                            <Field className='bg-transparent text-[#9CA3AF] rounded-md  outline-none border-2 w-full py-2 px-4 block' placeholder='Repeat new password' name="repPass" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="repPass" component="div" />
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default PasswordForm