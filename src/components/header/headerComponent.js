import React, { Component } from 'react';
import './headerComponent.css';
import logo from '../../images/logo/logo.png';

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <div className="pc-label-div">
                    <img src={logo}/>
                    {/* <h1 className="pc-label">
                        Product Catalog
                    </h1> */}
                </div>
            </div>
        )
    }
}