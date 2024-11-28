import { Collapse, Flex, Spin } from "antd";
import { useState, useEffect } from "react";










const VerMaterias = ({alumno}) => {
    const [Items, setItems] = useState([])


    useEffect(() => {
            fetch('http://localhost:3000/materias/'+alumno).then(response => response.json()).then(data => {
                console.log(data)
                const elements = []
                let i = 0
                data.forEach(element => {
                    elements.push({
                        key: i++,
                        label: element.Materia,
                        children: [
                            <p><b>Profesor:</b> {element.Profesor}</p>,
                            <p><b>Grupo:</b> {element.Grupo}</p>,
                            <p><b>Semestre:</b> {element.Semestre}</p>,
                            <p><b>Creditos:</b> {element.Creditos}</p>,
                        ]
                    })
                })
                setTimeout(() => {
                    setItems(elements)
                }, 1000)
            });
        

    }, [])

    return (
        <div>
            <h2>Materias</h2>
            <hr />
            {
                Items.length > 0 ? (
                    <Collapse items={Items} style={{margin: "1rem"}}  ></Collapse>
                ) : (
                  <Collapse items={[{label: <Spin></Spin>}]} style={{margin: "1rem"}}></Collapse>
                )
            }
        </div>
    );
 }

export default VerMaterias;