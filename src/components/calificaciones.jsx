import {Flex, Form, Table, Spin, Tag} from 'antd'
import { useEffect, useState } from 'react'



const Columns =[
    {
        title: 'Materias Calificadas',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'parcial 1',
        dataIndex: 'parcial1',
        key: 'parcial1',
    },
    {
        title: 'parcial 2',
        dataIndex: 'parcial2',
        key: 'parcial2',
    },
    {
        title: 'parcial 3',
        dataIndex: 'parcial3',
        key: 'parcial3',
    },
    {
        title: 'Final',
        dataIndex: 'final',
        key: 'final',
    },
    {
        title: 'Estado',
        key: 'estado',
        render: (text, record) => (
            // SI es 8 o mayor es aprobado menor a 8 es ordinario y menor a 6 es reprobado
            <Tag color={record.final >= 8 ? 'green' : record.final >= 6 ? 'yellow' : 'red'}>
                {record.final >= 8 ? 'Aprobado' : record.final >= 6 ? 'Ordinario' : 'Reprobado' }
            </Tag>
        )
    }
]



async function getDataSource(alumno){
    const materias = await fetch('http://localhost:3000/materias/'+alumno)
    const response = await fetch('http://localhost:3000/calificaciones/'+alumno)
    const data = await response.json()
    let i = 0
    let Format =[]
    data.forEach((element)=>{

        Format.push({
            key: i++,
            name: element.Materia,
            parcial1: element.Parcial1,
            parcial2: element.Parcial2,
            parcial3: element.Parcial3,
            final: ((parseFloat(element.Parcial1) + parseFloat(element.Parcial2)+ parseFloat(element.Parcial3)) / 3).toFixed(2)
        })
    })
    console.log(Format)
    return Format
}



const Calificaciones = ({alumno}) => {

    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        getDataSource(alumno).then(data => {
            setTimeout(() => {
                setDataSource(data)
            }, 1000)
        })
    }, [])

    return(
        <div>
            <h2>Evaluaciones en curso</h2>
            <hr />
            {
                dataSource.length > 0 ? (
                    <Table dataSource={dataSource} columns={Columns} />
                ) : (
                    <Flex justify="center" gap="middle">
                        <Spin size="large" />
                    </Flex>
                )
            }
        </div>
    )
}

export default Calificaciones