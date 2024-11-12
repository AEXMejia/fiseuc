import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about_us"
import {Layout} from "antd"
import { Footer } from "antd/es/layout/layout"


const Landing = ()=>{
    return(
        <Layout>
            <Navbar></Navbar>,
            <Hero></Hero>
            <About></About>
            <Footer style={{display: "flex", justifyContent: "center"}}>
            Ant Design ©{new Date().getFullYear()} Created by Alex Mejia & Arnoldo Cisneros
            </Footer>
        </Layout>
    )
}

export default Landing