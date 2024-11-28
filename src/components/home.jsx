import { Row, Col, Calendar, Collapse, Flex, Spin } from "antd"
import React, { useEffect, useState } from "react"
import CalendarioConEventos from "./calendar_class"
import { ControlOutlined } from "@ant-design/icons"

const Home = ({alumno}) => {
    const [data, setData] = useState(null)
    const [Items, setItems] = useState([])

    useEffect(() => {
        getData(alumno).then((data) => {
            setTimeout(() => {
                setData(data[0])
            }, 100)
        })

        getMaterias(alumno).then((item) => {
            setTimeout(() => {
                //Formato estandar de los items collapse antd
                let items = []
                item.forEach((element, index) => {
                    items.push({
                        key: index,
                        label: element.Materia,
                        children: "Profesor: "+element.Profesor
                    })
                })
                setItems(items)
            })
        })
    }, [])



    

    return (
        <div>
            <h2>Informacion del Alumno</h2>
            <hr />
            <Row style={{
                padding: "1.3rem"
            }}>
                <Col span={12}>
                    <Row>
                        {data ? (
                            <>
                            <img src={data.Imagen} width={110} style={{margin:"0.3rem"}}></img>
                            </>) : (
                            <>
                            <Flex justify="center"  gap="middle">
                                <Spin size="large" />
                            </Flex>
                            </>)}
                        <Col span={19} style={{ display: "flex", flexDirection: "column" }}>
                            {data ?(
                                <>
                                <Row style={{gap: 5}}><h3>Nombre:</h3><span>{data.Alumno}</span></Row>
                            <Row style={{gap: 5}}><b>Numero de cuenta: </b><span><span>{data.Matricula}</span></span></Row>
                            <Row style={{gap: 5}}><b>CURP:</b><span><span>{data.CURP}</span></span></Row>
                            <Row style={{gap: 5}}><b>Fecha de Nacimiento:</b><span><span>{data.Fecha_Nacimiento}</span></span></Row>
                            </>
                            ):(
                            <>
                            <Flex justify="center"  gap="middle">
                                <Spin size="large" />
                            </Flex>
                            </>
                            )}

                        </Col>
                    </Row>
                </Col>
                <hr />
                <Col span={10} style={{paddingLeft: "1rem"}}>
                    {
                        data ? (
                            <>
                            <h3>{data.Carrera}</h3>
                            <Row style={{gap: 5}}><b>Facultad:</b><span><span>{data.Facultad}</span></span></Row>
                            <Row style={{gap: 5}}><b>Correo:</b><span><span>{data.Correo}</span></span></Row>
                            <Row style={{gap: 5}}><b>Semestre:</b><span><span>{data.Semestre}</span></span></Row>
                            <Row style={{gap: 5}}><b>Grupo:</b><span><span>{data.Grupo}</span></span></Row>
                            </>
                        ):(
                            <>
                            <Flex justify="center"  gap="middle">
                                <Spin size="large" />
                            </Flex>
                            </>
                        )
                    }
                </Col>
            </Row>
            <h2>Semestre en Curso</h2>
            <hr />
            <Row>
                <Col span={12}>
                <h3>Materias</h3>
                {
                    Items ? (
                        <>
                        <Collapse items={Items}></Collapse>
                        </>
                    ):(
                        <>
                        <Flex justify="center"  gap="middle">
                            <Spin size="large" />
                        </Flex>
                        </>
                    )
                }
                </Col>
                <hr />
                <Col span={10} style={{paddingLeft: "1rem"}}>
                <h3>Calendario</h3>
                <CalendarioConEventos></CalendarioConEventos>
                </Col>
            </Row>


        </div>
    )
}


async function getData(alumno) {
    const response = await fetch('http://localhost:3000/alumno/'+alumno)
    const data = await response.json()
    return data
}

async function getMaterias(alumno) {
   const response = await fetch('http://localhost:3000/materias/'+alumno)
    const data = await response.json()
    return data
}

export default Home