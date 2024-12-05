import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import * as Yup from 'yup';
import { eGender } from "../../enum/Enum";
import { useRegisterUserMutation } from "../../store/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBasket } from "../../store/BasketSlice";

function RegisterForm({ setChange }) {
    const [flag, setFlag] = useState(false)
    const [check, setCheck] = useState(false)

    const navigate = useNavigate()

    const gender = eGender

    const dispatch = useDispatch()

    const [registerUser, { data, isError, error, isSuccess }] = useRegisterUserMutation()

    function handleSubmit(values) {
        let obj = {
            name: values.name,
            username: values.username,
            phone: String(values.phone),
            gender: values.gender,
            email: values.email,
            address: "123 Main St",
            dob: "1990-01-01T00:00:00Z",
            password: values.password
        }
        registerUser(obj)
    }

    useEffect(() => {
        if (isSuccess) {
            localStorage.clear()
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))
            localStorage.setItem("wish", JSON.stringify([]))
            dispatch(setBasket(data.user.cart))
            navigate(`/account`)
            window.location.reload()
        }
    }, [data, isError, isSuccess])

    return (
        <Formik
            initialValues={{
                name: '',
                username: '',
                phone: '',
                gender: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Name is required')
                    .min(2, 'Name must be at least 2 characters')
                    .max(50, 'Name must be 50 characters or less'),
                username: Yup.string()
                    .required('Username is required')
                    .min(3, 'Username must be at least 3 characters')
                    .max(20, 'Username must be 20 characters or less')
                    .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
                phone: Yup.string()
                    .required('Phone number is required'),
                gender: Yup.string()
                    .required('Phone number is required'),
                email: Yup.string()
                    .required('Email is required')
                    .email('Invalid email address'),
                password: Yup.string()
                    .required('Password is required')
                    .min(8, 'Password must be at least 8 characters'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required')
            })}
            onSubmit={(values) => {
                handleSubmit(values)
            }}
        >

            {() => (
                <Form>
                    <ToastContainer />
                    <div className='mb-5 flex flex-wrap'>
                        <div className='w-full lg:w-6/12 lg:pr-2 mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="name">Name</label>
                            <Field className='bg-transparent text-gray-700 border-gray-700 rounded-md outline-none border-2 w-full py-2 px-4 block' placeholder='name' name="name" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="name" component="div" />
                        </div>
                        <div className='w-full lg:w-6/12 lg:pl-2 mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="username">Username</label>
                            <Field className='bg-transparent text-gray-700 border-gray-700 rounded-md outline-none border-2 w-full py-2 px-4 block' placeholder='username' name="username" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="username" component="div" />
                        </div>
                        <div className='w-full lg:w-6/12 lg:pr-2 mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="phone">Phone Number</label>
                            <Field className='bg-transparent text-gray-700 border-gray-700 rounded-md outline-none border-2 w-full py-2 px-4 block' placeholder='phone number' name="phone" type="number" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="phone" component="div" />
                        </div>
                        <div className='w-full lg:w-6/12 lg:pl-2 mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="gender">Gender</label>
                            <Field className='bg-transparent text-gray-700 border-gray-700 rounded-md outline-none border-2 w-full py-2 px-4 block' placeholder='gender' name="gender" as="select">
                                <option value="" label="Select an option" />
                                {gender.map((item, i) => <option value={item} key={i} label={item} />)}
                            </Field>
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="gender" component="div" />
                        </div>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="email">E-mail</label>
                            <Field className='bg-transparent text-gray-700 border-gray-700 rounded-md outline-none border-2 w-full py-2 px-4 block' placeholder='email' name="email" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="email" component="div" />
                        </div>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="password">Password</label>
                            <div className=' relative'>
                                <button onClick={() => setFlag(!flag)} type='button' className='absolute right-3 top-[50%] translate-y-[-50%] z-10'>
                                    {flag ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                <Field className='bg-transparent text-gray-700 border-gray-700 rounded-md outline-none border-2 w-full py-2 px-4 block' placeholder='Password' name="password" type={flag ? 'text' : 'password'} />
                            </div>
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="password" component="div" />
                        </div>
                        <div className='w-full mb-8'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="confirmPassword">Confirm Password</label>
                            <div className=' relative'>
                                <button onClick={() => setCheck(!check)} type='button' className='absolute right-3 top-[50%] translate-y-[-50%] z-10'>
                                    {check ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                <Field className='bg-transparent text-gray-700 border-gray-700 rounded-md outline-none border-2 w-full py-2 px-4 block' placeholder='confirm password' name="confirmPassword" type={check ? 'text' : 'password'} />
                            </div>
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="confirmPassword" component="div" />
                        </div>
                        <div className='w-full'>
                            <button type='submit' className='block w-full py-3 rounded-md font-medium text-white bg-[#DC375F]'>Register</button>
                        </div>
                        <p className="text-sm w-full text-center pt-1 text-gray-600">Already have an account?
                            <button type="button" onClick={() => setChange(true)} className="hover:underline text-blue-600">Sign in</button>.
                        </p>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default RegisterForm