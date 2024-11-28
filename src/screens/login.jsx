import Navbar from "../components/navbar"
import LoginForm from "../components/login_form"
import {Layout} from  "antd"
const {Footer} = Layout


const Login = ()=>{
    return(
        <Layout>
            <Navbar></Navbar>
            <LoginForm></LoginForm>

        </Layout>
    )
}


export default Login