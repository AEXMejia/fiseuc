import { Flex, Menu, Layout, Breadcrumb, Button, Col, Row } from 'antd';
const { Content } = Layout





const _content = {
    marginTop: "1.9rem",
    width: "100%",
    padding: "2rem",
    paddingTop: "5rem"
}

const Hero = () => {

    const handle_evenet = ()=>{
        window.location.href = "/login" 
    }


    return(
    <Content style={_content} className='hero' id='inicio' >
        <Row>
            <Col span={11} style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }} >
                <h1 className='hero_title'>
                    Sistema para la Gestión
                    del Aprendizaje en Línea
                    de la Universidad de Colima
                </h1>
                <h3 className='hero-subtitle'>Fiseuc Sistema de calificaciones</h3>
                <Button type='primary' shape='round' size='large' onClick={handle_evenet} >Acceder</Button>
            </Col>
            <Col span={13} style={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center'
            }}>
            <img srcSet="https://educ.ucol.mx/assets/img/media/persons.svg" alt="" />
            </Col>
        </Row>
    </Content>
    )
}

export default Hero