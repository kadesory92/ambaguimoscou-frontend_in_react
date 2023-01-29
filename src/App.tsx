import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicRouter from './routes/publicRoutes/PublicRouter';
import AdminRouter from './routes/publicRoutes/AdminRouter';
import UserRouter from './routes/publicRoutes/UserRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter/>} />
          <Route path="/admin/*" element={<AdminRouter/>} />
          <Route path="/user/*" element={<UserRouter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
