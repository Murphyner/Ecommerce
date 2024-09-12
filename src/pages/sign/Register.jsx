import { useState } from "react"
import LoginForm from "../../components/sign/LoginForm"
import RegisterForm from "../../components/sign/RegisterForm"

function Register() {
  const [change, setChange] = useState(true)

  return (
    <main>
      <div className="container 2xl:w-[1280px] mx-auto md:px-4">
        <div className='px-8 md:px-0'>
          <div className="min-h-[80dvh] flex justify-center items-center">
            <div className={`${change ? 'w-[350px]' : 'w-[500px]'}`}>
              <div className='mb-4'>
                <h2 className='text-center font-bold text-[2em]'>{change ? 'Sign in' : 'Sign up'}</h2>
                <p className='text-gray-600 text-center text-[.9em]'>{change ? 'Sign in to access your account' : 'Sign in to create an account'}</p>
              </div>
              <div>
                {change ? <LoginForm setChange={setChange} /> : <RegisterForm setChange={setChange} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Register