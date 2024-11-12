
import {Row,Col, Card, Flex} from "antd"

const About = ()=>{
    return(
        <div>
            <Card id="about_us">
            <Row className="About_us" style={{height: "90vh"}}>
            <Col span={12} style={{display: "flex",  justifyContent: "center", flexDirection: "column"}}>
            <h2 className="about_title">¿Qué es Fiseuc?</h2>
            <p>Es la plataforma de formación en línea de la Universidad de Colima que integra herramientas para la gestión de contenidos, la gestión de usuarios, la comunicación e interacción entre participantes, y para el seguimiento y evaluación de los estudiantes.</p>
            </Col>
            <Col span={12} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src="https://educ.ucol.mx/assets/img/media/whats.svg" alt="" width={480} />
            </Col>
        </Row>
            </Card>
        </div>
    )
}


export default About