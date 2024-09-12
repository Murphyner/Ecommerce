import Register from '../../pages/sign/Register'

function AccountAuth({ children }) {
    const token = localStorage.getItem("token")
    return (
        <>
            {token ? children : <Register />}
        </>
    )
}

export default AccountAuth