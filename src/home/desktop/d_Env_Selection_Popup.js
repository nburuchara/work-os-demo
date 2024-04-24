import React, { Component } from 'react';
import styled from 'styled-components';

const Styles = styled.div `

        // - - - - - - POPUP CONTAINER - - - - - - //

.popup-container {
    position: absolute;
    width: 24.4%;
    background-color: white;
    border: 0.5px solid #ccc;
    border-radius: 7px;
    // padding: 0.5%;
    z-index: 999; /* Set a negative z-index to position it under other elements */
    margin-top: 0.75%;
    margin-left: 1.5%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}

    // - - POPUP TITLE - - //

.popup-title {
    border-bottom: 1px solid #ccc;
}

.popup-title p {
    margin-top: 0px;
    margin-bottom: 0.4%;
    font-family: rubik;
    font-weight: bold;
    font-size: 87.5%;
    padding: 2%;
    margin-left: 2%;
}

    // - - POPUP OPTION (SELECTION) - - //

.popup-option {
    padding-bottom: 2%; 
    padding-top: 2%;
    border-bottom: 1px solid #ccc;
}

.popup-option-hover {

}

.popup-option:after {
    content: "";
    display: table;
    clear: both;
}

.popup-option-icon {
    float: left;
    text-align: right;
    width: 7%;
    padding: 1.5%;
}

.popup-option-desc {
    float: left;
    text-align: left;
    width: 82%;
}

    // # ICON 

.popup-option-icon img {
    width: 18.5px;
    height: 18.5px;
}

    // # DESCRIPTION

.popup-option-desc p {
    margin-top: 2%;
    font-family: rubik;
    font-weight: bold;
    font-size: 87.5%;
    margin-bottom: 1%;
}

.popup-option-desc-text {
    font-weight: normal !important;
    font-size: 75% !important;
    margin-top: 1% !important;
    margin-bottom: 1px;
    color: #494A4D;
}

.popup-option-desc-text label:hover {
    text-decoration: underline;
    cursor: pointer;
}



`

class Popup extends Component {
  render() {
    return (
        <Styles>
            <div className="popup-container">
                <div className='popup-title'>
                    <p>Environment Selection</p>
                </div>
                <div className='popup-option'>
                    <div className='popup-option-icon'>
                        <img src='/assets/staging_icon.png'/>
                    </div>
                    <div className='popup-option-desc'>
                        <p>Staging</p>
                        <p className='popup-option-desc-text' >Free environment for integration and testing.</p>
                        <p className='popup-option-desc-text' >Storage and usage limits apply.</p>
                    </div>
                </div>
                <div className='popup-option'>
                    <div className='popup-option-icon'>
                        <img src='/assets/production_icon.png'/>
                    </div>
                    <div className='popup-option-desc'>
                        <p>Production</p>
                        <p className='popup-option-desc-text' >Highly available paid environment for production applications. To enable <label style={{color: "#6363f1"}}>enter your billing information.</label></p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </Styles>
    );
  }
}

export default Popup;