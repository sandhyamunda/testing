// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashbord from './page/Dashbord';
import Header from './component/Header/Header';
import Sidebar from './component/Header/Sidebar/Sidebar';


function App() {
  return (
  <BrowserRouter>
  <Header/>
  <div className='main'>
    <div className='sidebarWrapper'>
      <Sidebar />
    </div>
    <div className='content'>
    <Routes>
    <Route path='/' exact ={true} element={<Dashbord/>} />
    <Route path='/dashbord' exact ={true} element={<Dashbord/>} />
    </Routes>
  </div>
  </div>


    
    
  </BrowserRouter>
  );
}

export default App;
