import Loginpage from "../../pages/admin/Loginpage"

function Auth({ children }) {
    const token = localStorage.getItem("token")
    return (
        <>
            {token ? children : <Loginpage />}
        </>
    )
}

export default Auth