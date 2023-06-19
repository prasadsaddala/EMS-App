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
    </div>
    
  );
}

export default App;