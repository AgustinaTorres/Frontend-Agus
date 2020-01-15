import React from 'react';
import ToolBar from './../ToolBar/toolBar';
import Home from './../Home/home';
import './layout.css';

const Layout = () => {
    return(
        <div className="layoutBackground">
            <ToolBar/>
            <Home/>
        </div>
    )};

export default Layout;



