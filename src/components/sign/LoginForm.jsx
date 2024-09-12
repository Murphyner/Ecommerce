import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from 'yup';
import { useLoginUserMutation } from "../../store/api";
import { useNavigate } from "react-router-dom";

function LoginForm({ setChange }) {
    const [flag, setFlag] = useState(false)

    const [loginUser, { data, isError }] = useLoginUserMutation()
    const navigate = useNavigate()

    useEffect(() => {
        if (data && data.token) {
            localStorage.clear()
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))
            navigate("/account")
            window.location.reload()
        }
    }, [data])

    useEffect(() => {
        if (isError) {
            toast.error("Invalid username or password")
        }
    }, [isError])

    function handleSubmit(obj) {
        loginUser(obj)
    }

    return (
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .required('First Name is required'),
                password: Yup.string()
                    .required('Last Name is required')
            })}
            onSubmit={(values) => {
                handleSubmit(values)
            }}
        >

            {() => (
                <Form>
                    <ToastContainer />
                    <div className='mb-5 flex flex-wrap'>
                        <div className='w-full mb-4'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="username">Username</label>
                            <Field className='bg-transparent text-gray-700 border-gray-700 rounded-md outline-none border-2 w-full py-2 px-4 block' placeholder='Username' name="username" type="text" />
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="username" component="div" />
                        </div>
                        <div className='w-full mb-8'>
                            <label className='block font-bold mb-1 text-[0.75em] text-[#6C7275]' htmlFor="password">Password</label>
                            <div className=' relative'>
                                <button onClick={() => setFlag(!flag)} type='button' className='absolute right-3 top-[50%] translate-y-[-50%] z-10'>
                                    {flag ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                <Field className='bg-transparent text-gray-700 border-gray-700 rounded-md outline-none border-2 w-full py-2 px-4 block' placeholder='Password' name="password" type={flag ? 'text' : 'password'} />
                            </div>
                            <ErrorMessage className='text-red-500 pl-4 text-[0.75em]' name="password" component="div" />
                        </div>
                        <div className='w-full'>
                            <button type='submit' className='block w-full py-3 rounded-md font-medium text-white bg-[#DC375F]'>Login</button>
                        </div>
                        <p className="text-sm w-full text-center pt-1 text-gray-600">Don't have an account yet?
                            <button type="button" onClick={() => setChange(false)} className="hover:underline text-blue-600">Sign up</button>.
                        </p>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm