import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Apps from './pages/app/Apps'
import Auth from './pages/auth/Auth'
import OtherPages from './pages/otherPages/OtherPages'
import BasicUi from './pages/BasicUI/BasicUi'
import UiElement from './pages/UI element/UiElement'
import Forms from './pages/forms/Forms'
import Maps from './pages/maps/Maps'
import Charts from './pages/charts/Charts'
import Widgets from './pages/widgets/Widgets'
import Tables from './pages/tables/Tables'
import DataTable from './pages/data table/DataTable'
import StaterKit from './pages/starter kit/StaterKit'
import MultiLevel from './pages/mutltilevel/MultiLevel'
import Documentation from './pages/documentation/Documentation'
import Home2 from './pages/home/Home2'
import Sidebar from './component/sidebar/Sidebar'
import Home3 from './pages/home/Home3'
import Home4 from './pages/home/Home4'


export default function App() {
  return (
    <div className='app' style={{ display: 'flex' }}>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home2' element={<Home2 />} />
          <Route path='/home3' element={<Home3 />} />
          <Route path='/home4' element={<Home4 />} />
          <Route path='/apps' element={<Apps />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/other' element={<OtherPages />} />
          <Route path='/basicUi' element={<BasicUi />} />
          <Route path='/UiElement' element={<UiElement />} />
          <Route path='/forms' element={<Forms />} />
          <Route path='/maps' element={<Maps />} />
          <Route path='/charts' element={<Charts />} />
          <Route path='/widgets' element={<Widgets />} />
          <Route path='/tables' element={<Tables />} />
          <Route path='/datatable' element={<DataTable />} />
          <Route path='/staterKit' element={<StaterKit />} />
          <Route path='/multiLevel' element={<MultiLevel />} />
          <Route path='/documentation' element={<Documentation />} />


        </Routes>
      </Router>
    </div>
  )
}
