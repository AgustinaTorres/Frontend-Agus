import React from 'react';
import './arrow.css';
import { Icon } from 'semantic-ui-react'

class Arrow extends React.Component{

    scrollUp = () => {
        window.scrollTo(0, 0)
        }

    render() {
        return (
            <div className="arrow">
                <button class="ui circular tiny icon button" onClick={this.scrollUp}><Icon disabled name='angle up' size='huge' className="center"/></button>
            </div>
        )
    }}

  
export default Arrow;

