import React from 'react';
import Home from './../Home/home';
import './layout.css';
import ToolBar from './../ToolBar/toolBar';

const Layout = () => {
    return(
        <div className="layoutBackground">
            <ToolBar/>
            <Home/>
        </div>
    )};

export default Layout;




