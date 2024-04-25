import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

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

// - - POPUP CONTAINER ANIMATION - - //

/* CSS Transition Definitions */
.dialog-slide-enter {
    transform: translateY(10%);
    opacity: 0;
}

.dialog-slide-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: transform 500ms, opacity 500ms;
}

.dialog-slide-exit {
    transform: translateY(0);
    opacity: 1;
}

.dialog-slide-exit-active {
    transform: translateY(10%);
    opacity: 0;
    transition: transform 500ms, opacity 500ms;
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
    cursor: pointer;
}

.popup-option:hover {
    background-color: #EFEFF0;
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

    // - - POPUP FOOTER - - //

.popup-footer {
    padding: 1%;
    padding-bottom: 3.25%;
    padding-top: 2.5%;
}

.popup-footer:after {
    content: "";
    clear: both;
    display: table;
}

.popup-footer-desc {
    float: left;
    text-align: right;
    width: 50%;
}

.popup-footer-icon {
    float: left;
    text-align: left:
    width: 50%;
}

.popup-footer-icon img {
    width: 16px;
    height: 16px;
    margin-top: 14.25%;
    margin-left: 3.5%;
    cursor: pointer;
}


`

class Popup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // isVisible: false
        }
    }

    render() {
        return (
            <Styles>
                <CSSTransition
                in={this.props.isVisibleProp}
                timeout={500}
                classNames="dialog-slide"
                unmountOnExit
                >
                <div className="popup-container">
                    <div className='popup-title'>
                        <p>Environment Selection</p>
                    </div>
                    <div className='popup-option'>
                        <div className='popup-option-icon'>
                            <img src='/assets/staging_icon.png' alt='img not available'/>
                        </div>
                        <div className='popup-option-desc'>
                            <p>Staging</p>
                            <p className='popup-option-desc-text' >Free environment for integration and testing.</p>
                            <p className='popup-option-desc-text' >Storage and usage limits apply.</p>
                        </div>
                    </div>
                    <div className='popup-option'>
                        <div className='popup-option-icon'>
                            <img src='/assets/production_icon.png' alt='img not available'/>
                        </div>
                        <div className='popup-option-desc'>
                            <p>Production</p>
                            <p className='popup-option-desc-text' >Highly available paid environment for production applications. To enable <label style={{color: "#6363f1"}}>enter your billing information.</label></p>
                        </div>
                    </div>
                    <div className='popup-footer'>
                        <div className='popup-footer-desc'>
                            <span style={{marginLeft: "2.5%", padding: '2%', paddingBottom: "3%"}} className='popup-option-desc-text'><label style={{paddingBottom: "2%"}}>Learn more about pricing</label></span> 
                        </div>
                        <div className='popup-footer-icon'>
                            <img src='/assets/external_link_color.png' alt='img not available'/>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            </Styles>
        );
    }
}

export default Popup;