import React from 'react'
import PasswordForm from '../formik/PasswordForm'
import AccountForm from '../formik/AccountForm'

function AccountComp() {
    return (
        <div>
            <div className="mb-6">
                <h3 className="text-[1.25em] font-semibold mb-4">Account Details</h3>
                <AccountForm />
            </div>
            <div className="mb-6">
                <h3 className="text-[1.25em] font-semibold mb-4">Password</h3>
                <PasswordForm />
            </div>
            <div>
                <button className="bg-[#DC375F] font-medium text-[1em] text-white rounded-lg py-3 px-10">
                    Save changes
                </button>
            </div>
        </div>
    )
}

export default AccountComp