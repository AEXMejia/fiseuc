import { Row, Col, Calendar, Collapse, Flex, Spin, Form, Upload, Input, DatePicker, FloatButton, Button  } from "antd"
import { SmileOutlined, SaveOutlined , SettingOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react"
import dayjs from 'dayjs'

const Acount = ({alumno}) => {


    const [day, setDay] = useState(null)
    const [data, setData] = useState(null)
    const [Items, setItems] = useState([])
    const [dontMatch, setDontMatch] = useState('primary')
    const [form] = Form.useForm();

   

    const actualizarDatos= ()=>{
        let NombreAlumno = document.getElementById("NombreAlumno").value || data.Alumno
        let InCURP = document.getElementById("InCURP").value || data.CURP
        let nacimiento = document.getElementById("nacimiento").value.slice(0,10) || day

        fetch("http://localhost:3000/update/alumno/simple/",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            Matricula: alumno,  
            Nombre: NombreAlumno,
            CURP: InCURP,
            Nacimiento: nacimiento,
            })
        }).then((response) => response).then(
            alert("Datos Actualizados")
        )

    }

    const _change_password = ()=>{
        const lastP = document.getElementById("lastPassword").value 
        const newPassword = document.getElementById("newPassword").value
        const confirmPassword = document.getElementById("confirmPassword").value

        if (newPassword === confirmPassword ) {
            fetch("http://localhost:3000/update/alumno/password/",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Matricula: alumno,
                    lastPassword: lastP,
                    newPassword: newPassword,
                })
            }).then((response) => response).then((data)=>{
                if(data.ok){
                    alert("Contraseña Actualizada")
                }else{
                    alert("Contraseña Incorrecta")
                }
            })    

            console.log({
                last_password: lastP,
                new_password: newPassword,
                confirm_password: confirmPassword
            })
        }else{
            alert("Las contraseñas no coinciden")
        }

        

    }
    


    useEffect(() => {
        getData(alumno).then((data) => {
            setTimeout(() => {
                setData(data[0])
                setDay(dayjs(data[0].Fecha_Nacimiento))
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
                        children: "Profesor: " + element.Profesor
                    })
                })
                setItems(items)
            })
        })
    }, [])

    const _save_data = ()=>{
        //Obtener todos los datos del formulario
        
    }




    return (
        <Form>
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
                                    <img src={data.Imagen} width={110} style={{ margin: "0.3rem" }}></img>

                                </>) : (
                                <>
                                    <Flex justify="center" gap="middle">
                                        <Spin size="large" />
                                    </Flex>
                                </>)}
                            <Col span={19} style={{ display: "flex", flexDirection: "column" }}>
                                {data ? (
                                    <>
                                        <Row style={{ gap: 5 }}><Col><h3>Nombre:</h3></Col><Col><Input size="small"  id="NombreAlumno" placeholder={data.Alumno}></Input></Col></Row>
                                        <Row style={{ gap: 5 }}><Col><h3>Numero de cuenta:</h3></Col><Col><span>{data.Matricula}</span></Col></Row>
                                        <Row style={{ gap: 5 }}><Col><h3>CURP:</h3></Col><Col><Input size="small" placeholder={data.CURP} id="InCURP"></Input></Col></Row>
                                        <Row style={{ gap: 5 }}><Col><h3>Fecha de Nacimineto:</h3></Col><Col><DatePicker size="small"  id="nacimiento"></DatePicker></Col></Row>
                                    </>
                                ) : (
                                    <>
                                        <Flex justify="center" gap="middle">
                                            <Spin size="large" />
                                        </Flex>
                                    </>
                                )}
                                <Button type="primary" size="small" style={{margin:"0.3rem"}} onClick={actualizarDatos}>Guardar cambios</Button>
                            </Col>
                        </Row>
                    </Col>
                    <hr />
                    <Col span={10} style={{ paddingLeft: "1rem" }}>
                        {
                            data ? (
                                <>
                                    <h3>{data.Carrera}</h3>
                                    <Row style={{ gap: 5 }}><b>Facultad:</b><span><span>{data.Facultad}</span></span></Row>
                                    <Row style={{ gap: 5 }}><b>Correo:</b><span><span>{data.Correo}</span></span></Row>
                                    <Row style={{ gap: 5 }}><b>Semestre:</b><span><span>{data.Semestre}</span></span></Row>
                                    <Row style={{ gap: 5 }}><b>Grupo:</b><span><span>{data.Grupo}</span></span></Row>
                                </>
                            ) : (
                                <>
                                    <Flex justify="center" gap="middle">
                                        <Spin size="large" />
                                    </Flex>
                                </>
                            )
                        }
                    </Col>
                </Row>
                <h2>Configuracion de cuenta</h2>
                <hr />
                <Collapse accordion style={{margin: '1rem'}} activeKey={1}>
                    <Collapse.Panel header="Cambiar Contraseña" key="1" extra={<SettingOutlined />}>
                        <Form.Item label="Contraseña Actual" name="password">
                            <Input.Password id="lastPassword"  />
                        </Form.Item>
                        <Form.Item label="Nueva Contraseña" name="newpassword" >
                            <Input.Password id="newPassword" status={dontMatch}  />
                        </Form.Item>
                        <Form.Item label="Repetir Contraseña" name="repeatpassword" status={dontMatch}>
                            <Input.Password id="confirmPassword"/>
                        </Form.Item>
                        <Button type="primary" id="savePassword" onClick={_change_password}>Guardar Cambios</Button>
                    </Collapse.Panel>
                </Collapse>
            </div>
        </Form>
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

export default Acount