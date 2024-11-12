import { Flex, Menu, Layout, Breadcrumb, Button } from 'antd';
const { Header, Content, Footer, sider } = Layout



const Navbar = () => {
    const handle_evenet = ()=>{
        window.location.href = "/login" 
    }

    const Items = [
        {
            label: <a href="/#inicio">Inicio</a>,
            key: '/inicio',
        },
        {
            label: <a href="/#about_us">¿Que es Fiseuc?</a>,
            key: '/about-us',
        },
        {
            label:<Button type="primary" shape="round" onClick={handle_evenet} >Acceder</Button>
        }
    ]

    return (
        <Header
            style={{
                background: 'white',
                width: '100%',
                display: 'flex',
                alignItems: 'end',
                position: "fixed",
                zIndex: 999,
            }}
        >
            <div className="demo-logo" >
                <h2>Fiseuc</h2>
            </div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['/inicio']}
                items={Items}
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: 'end'
                }}
                
            />
        </Header>


    )
}

export default Navbar;