import React, { useEffect, useRef } from 'react'
import PasswordForm from '../formik/PasswordForm'
import AccountForm from '../formik/AccountForm'
import { useUpdateUserMutation } from '../../store/api';
import { useSelector } from 'react-redux';

function AccountComp() {

    const formikRef1 = useRef(null);
    const formikRef2 = useRef(null);

    let values = []

    const {img} = useSelector(state => state.accountSlice)

    const [updateUser , {data, isSuccess}] = useUpdateUserMutation()

    useEffect(() => {
        if(isSuccess){
            localStorage.removeItem("user")
            localStorage.setItem("user", JSON.stringify(data.user))
            window.location.reload()
        }
    }, [data, isSuccess])

    const handleButtonClick = async () => {
        const formikRefs = [formikRef1, formikRef2];
        let allFormsValid = true;

        for (const formikRef of formikRefs) {
            if (formikRef.current) {
                await formikRef.current.validateForm();
                values.push(formikRef.current.values)
                if (!formikRef.current.isValid) {
                    allFormsValid = false;
                }
            }
        }
        if (allFormsValid) {
            let obj = {
                name: values[0].firstName,
                password: values[1].newPass,
                user_img : img
            }
            updateUser(obj)
        }
    };

    return (
        <div>
            <div className="mb-6">
                <h3 className="text-[1.25em] font-semibold mb-4">Account Details</h3>
                <AccountForm formikRef1={formikRef1} />
            </div>
            <div className="mb-6">
                <h3 className="text-[1.25em] font-semibold mb-4">Password</h3>
                <PasswordForm formikRef2={formikRef2} />
            </div>
            <div>
                <button
                    onClick={handleButtonClick}
                    className="bg-[#DC375F] font-medium text-[1em] text-white rounded-lg py-3 px-10">
                    Save changes
                </button>
            </div>
        </div>
    )
}

export default AccountComp