import { Flex, Menu, Layout, Breadcrumb, Button, Avatar } from 'antd';

import { Children } from 'react';
const { Header, Content, Footer, sider } = Layout






const DashNavbar = () => {


    const Items = [
        {
            label: <a href="/"></a>,
            key: '/inicio',
        },
        {
            label: <a href="/#about_us"></a>,
            key: '/about-us',
        },
        {
            label:    <Avatar  size={42} src="" />    ,
            children: [
                {
                    label: <a href='/'>Salir</a>,
                    key:"1.4"
                }

            ]
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

export default DashNavbar;