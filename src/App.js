import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
<<<<<<< HEAD
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                          <Route exact path = "/"  element= {<ListEmployeeComponent/>}></Route>
                          <Route exact path = "/employees" element= {<ListEmployeeComponent/>}></Route>
                          <Route exact path = "/add-employee/:id" element= {<CreateEmployeeComponent/>}></Route>
                          <Route exact path = "/view-employee/:id" element = {<ViewEmployeeComponent />}></Route>
                          {<Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>}
                    </Routes>
                </div>
              <FooterComponent />
        </Router>
=======
        <div className="header">
            <div className='Saddala'>
                <NavLink className={({isActive}) => isActive? 'active':''} to="/">Home</NavLink>
            </div>
            &nbsp;
            <div className='Reddy'>
                <NavLink className={({isActive}) => isActive? 'active':''} to="/Employees">Employees</NavLink>
            </div>
            &nbsp;
            <div className='Prasad'>
                <NavLink className={({isActive}) => isActive? 'active':''} to="/create">Add</NavLink>
            </div>
        </div>
        <div className="content">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Employees' element={<Employees/>}/>
                <Route path='/create' element={<Add/>}/>
                <Route path='/edit' element={<Edit/>}/>
            </Routes>
        </div>
>>>>>>> b619f9ee3cbb8b2639a70d84ab8c3ad0854c22cd
    </div>
    
  );
}

export default App;