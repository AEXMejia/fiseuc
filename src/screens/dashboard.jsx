import { Breadcrumb, Layout, Menu, theme, Card, Row, Button } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from '../components/home';
import DashNavbar from '../components/dashnavbar';
import Calificaciones from '../components/calificaciones';
import VerMaterias from '../components/materias';
import Acount from '../components/account';
const { Header, Content, Footer, Sider } = Layout;




const Dashboard = () => {
    const [alumno, setAlumno] = useState(()=>{
        if (localStorage.getItem('user')) {
            return JSON.parse(localStorage.getItem('user')).Matricula
        }else{
            window.location.href = "/"
        }
    })






    const [view, setView] = useState('home')

    const _handle_outSession = () => {
        localStorage.removeItem('user')
        window.location.href = '/'
    }

    const RenderComponents = ()=>{
        switch(view){
            case 'home':
                return <Home alumno={alumno} />
            case 'calificaciones':
                return <Calificaciones alumno={alumno}/> 
            case 'materias':
                return <VerMaterias alumno={alumno}/>
            case 'cuenta':
                return <Acount alumno={alumno}/>
            default:
                return <h1>404</h1>
        }
    }


    const Items = [
        {
            label: 'Inicio',
            key: 'home',
        },
        {
            label: 'Calificaciones',
            key: 'calificaciones',
        },
        {
            label: 'Mis Materias',
            key: 'materias',
        },
        {
            label: 'Mi cuenta',
            key: 'cuenta'
        }

    ]

    return (
        <Layout style={{ height: "100%" }}>
            <DashNavbar></DashNavbar>
            <Content
                style={{
                    padding: '0 48px',
                    height: "100vh",
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                <Layout
                    style={{
                        padding: '24px 0',
                        background: "white",
                        borderRadius: "6px",
                        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
                    }}
                >
                    <Sider
                        style={{
                            background: "white",
                        }}
                        width={200}
                    >
                        <Menu
                            mode="inline"
                            style={{
                                height: "90%"
                            }}
                            items={Items}
                            defaultSelectedKeys={view}
                            onClick={(e) => {
                                setView(e.key)
                            }}
                        />
                        <Button type='primary' danger style={{
                            margin: " 0 1rem 0 1rem"
                        }} onClick={_handle_outSession}>Cerrar Sesion</Button>
                    </Sider>
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 560,
                        }}
                    >
                            <div>{RenderComponents()}</div>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    )
}


export default Dashboard