import { Calendar, Badge } from "antd"


// Ejemplo de datos de eventos
const eventos = [
  //vacaciones de Invierno
    { date: '2024-11-29', type: 'warning', },
    { date: '2024-11-30', type: 'warning', },
    { date: '2024-12-1', type: 'warning', },
    { date: '2024-12-2', type: 'warning', },
    { date: '2024-12-3', type: 'warning', },
    { date: '2024-12-4', type: 'warning', },
    { date: '2024-12-4', type: 'warning', },
    { date: '2024-12-5', type: 'warning', },
    { date: '2024-12-6', type: 'warning', },
    { date: '2024-12-7', type: 'warning', },
    { date: '2024-12-8', type: 'warning', },
    { date: '2024-12-9', type: 'warning', },
    { date: '2024-12-10', type: 'warning', },
    { date: '2024-12-11', type: 'warning', },
    { date: '2024-12-12', type: 'warning', },
    { date: '2024-12-13', type: 'warning', },
    { date: '2024-12-14', type: 'warning', },
    { date: '2024-12-15', type: 'warning', },
    { date: '2024-12-16', type: 'warning', },
    { date: '2024-12-17', type: 'warning', },
    { date: '2024-12-18', type: 'warning', },
    { date: '2024-12-19', type: 'warning', },
    { date: '2024-12-20', type: 'warning', },
    { date: '2024-12-21', type: 'warning', },
    { date: '2024-12-22', type: 'warning', },
    { date: '2024-12-23', type: 'warning', },
    { date: '2024-12-24', type: 'warning', },
    { date: '2024-12-25', type: 'warning', },
    { date: '2024-12-26', type: 'warning', },
    { date: '2024-12-27', type: 'warning', },
    { date: '2024-12-28', type: 'warning', },
    { date: '2024-12-29', type: 'warning', },
    { date: '2024-12-30', type: 'warning', },
    { date: '2024-12-31', type: 'warning', },
    { date: '2025-1-1', type: 'warning', },
    { date: '2025-1-2', type: 'warning', },
    { date: '2025-1-3', type: 'warning', },
    { date: '2025-1-4', type: 'warning', },
    { date: '2025-1-5', type: 'warning', },
    { date: '2025-1-6', type: 'warning', },
    { date: '2025-1-7', type: 'warning', },
    { date: '2025-1-8', type: 'warning', },
    { date: '2025-1-9', type: 'warning', },
    { date: '2025-1-10', type: 'warning', },
    { date: '2025-1-11', type: 'warning', },
    { date: '2025-1-12', type: 'warning', },
    { date: '2025-1-13', type: 'warning', },
    { date: '2025-1-14', type: 'warning', },
    { date: '2025-1-15', type: 'warning', },
    { date: '2025-1-16', type: 'warning', },
    { date: '2025-1-17', type: 'warning', },
    { date: '2025-1-18', type: 'warning', },
    { date: '2025-1-19', type: 'warning', },
    { date: '2025-1-20', type: 'warning', },
    { date: '2025-1-21', type: 'warning', },
    { date: '2025-1-22', type: 'warning', },
    { date: '2025-1-23', type: 'warning', },
    { date: '2025-1-24', type: 'warning', },
    { date: '2025-1-25', type: 'warning', },
    { date: '2025-1-26', type: 'warning', },
    { date: '2025-1-27', type: 'warning', },
    { date: '2025-1-28', type: 'warning', },
    { date: '2025-1-29', type: 'warning', },
    { date: '2025-1-30', type: 'warning', },
    { date: '2025-1-31', type: 'warning', },
    { date: '2025-2-1', type: 'warning', },

    
  ];
  
  // Función para obtener los eventos de un día específico
  const obtenerEventos = (date) => {
    return eventos.filter(
      (evento) => evento.date === date.format('YYYY-MM-DD')
    );
  };
  
  const CalendarioConEventos = () => {
    const dateCellRender = (date) => {
      const dailyEvents = obtenerEventos(date);
      return (
        <ul>
          {dailyEvents.map((item, index) => (
            <li key={index}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))}
        </ul>
      );
    };
  
    return <Calendar dateCellRender={dateCellRender} fullscreen={false} />;
  };
  
  export default CalendarioConEventos;