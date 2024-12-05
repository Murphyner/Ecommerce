import React from 'react'
import LoginpageForm from '../../components/admin/loginpage/LoginPageForm'

function Loginpage() {
  return (
    <main className='bg-gray-200'>
        <div className='h-screen flex justify-center items-center'>
            <div className='w-[350px]'>
                <div className='mb-4'>
                    <h2 className='text-center font-bold text-[2em]'>Sign in</h2>
                    <p className='text-gray-600 text-center text-[.9em]'>Sign in to access your account</p>
                </div>
                <div>
                    <LoginpageForm />
                </div>
            </div>
        </div>
    </main>
  )
}

export default Loginpage