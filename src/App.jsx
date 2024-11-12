import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ConfigProvider} from "antd"
import Landing from './screens/landing';
import Login from './screens/login';
import "../src/assets/css/style.css"

function App() {

  return (
    <ConfigProvider theme={{
      "token": {
        "colorPrimary": "#148700",
        "colorInfo": "#148700",
        "colorLink": "#148703",
        "sizeStep": 4
      }
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path='/login' element={<Login></Login>}/>
        </Routes>
      </BrowserRouter>

    </ConfigProvider>
  )
}

export default App
