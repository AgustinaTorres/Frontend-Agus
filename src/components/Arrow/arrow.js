import React from 'react';
import './arrow.css';
import { Icon } from 'semantic-ui-react'

const Arrow = () => {
    return(
            <div className="arrow">
                <a href="#top"><Icon disabled name='angle up' size='huge'/></a>
            </div>
    )
}

export default Arrow;
