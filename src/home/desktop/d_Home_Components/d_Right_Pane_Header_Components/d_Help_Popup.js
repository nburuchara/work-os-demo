import React, {Component} from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';

const Styles = styled.div  `

            // - - - - - - POPUP CONTAINER - - - - - - //

.popup-container {
    // height: 40vh;
    position: absolute;
    width: 22.4%;
    background-color: white;
    border: 0.5px solid #ccc;
    border-radius: 7px;
    padding: 0.75%;
    z-index: 999; /* Set a negative z-index to position it under other elements */
    margin-top: 0.75%;
    margin-left: 0.5%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.20);
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


    // - - POP UP OPTIONS - - //

.popup-options {
    cursor: pointer;
    padding: 1%;
    border-radius: 7px;
    background-color: white;
}

.popup-options:hover {
    background-color: #E5E5E5;
}

.popup-options:after {
    content: "";
    clear: both;
    display: table;
}

.popup-icon {
    float: left;
    text-align: center;
    width: 23%;
    // border-right: 1px solid black;
}

.popup-text {
    float: left;
    text-align: left;
    width: 77%;
}

    // # BUTTON CONTAINER 

.popup-icon button {
    padding: 3% !important;
    border: 0.5px solid #ccc;
    margin-top: 18.5% !important;
    margin-bottom: 12.5% !important;
    width: 50px !important;
    height: 50px !important;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 6px 20px 0 rgba(0, 0, 0, 0.00);
}

    // # ICON

.popup-icon img {
    margin-top: 6% !important;
    width: 70% !important;
}

    // # TEXT

.popup-text p {
    font-family: poppins;
    // width: 95%;
}

.popup-text-header {
    margin-top: 3%;
    margin-bottom: 0px;
    font-size: 80%;
    font-weight: bold;
}

.popup-text-subtext {
    margin-top: 0px;
    font-size: 80%;
}

`

export default class Popup extends Component {
    constructor() {
        super()
        this.state = {
            helpOption1Hovered: false,
            helpOption2Hovered: false,
            helpOption3Hovered: false
        }
    }

    helpOption1Enter = () => {this.setState({helpOption1Hovered: true})}
    helpOption1Leave = () => {this.setState({helpOption1Hovered: false})}

    helpOption2Enter = () => {this.setState({helpOption2Hovered: true})}
    helpOption2Leave = () => {this.setState({helpOption2Hovered: false})}

    helpOption3Enter = () => {this.setState({helpOption3Hovered: true})}
    helpOption3Leave = () => {this.setState({helpOption3Hovered: false})}

    render () {
        return (
            <Styles>
                {/* <CSSTransition
                in={this.props.isVisibleProp}
                timeout={500}
                classNames="dialog-slide"
                unmountOnExit
                > */}
                <div className='popup-container'>
                    <div 
                    onMouseEnter={this.helpOption1Enter}
                    onMouseLeave={this.helpOption1Leave}
                    className='popup-options'>
                        <div className='popup-icon'>
                            <button>
                                <img src={this.state.helpOption1Hovered ? '/assets/help_popup_slack_icon_color.png' : '/assets/help_popup_slack_icon.png'} alt='img not available'/>
                            </button>
                        </div>
                        <div className='popup-text'>
                            <p className='popup-text-header'>Create a shared slack channel</p>
                            <p className='popup-text-subtext'>Get personalized integration support directly with our engineers.</p>
                        </div>
                    </div>
                    <div 
                    onMouseEnter={this.helpOption2Enter}
                    onMouseLeave={this.helpOption2Leave}
                    className='popup-options'>
                        <div className='popup-icon'>
                            <button>
                                <img src={this.state.helpOption2Hovered ? '/assets/right_pane_header_docs_icon_color.png' : '/assets/help_popup_docs_icon.png'} alt='img not available'/>
                            </button>
                        </div>
                        <div className='popup-text'>
                            <p className='popup-text-header'>Read the docs</p>
                            <p className='popup-text-subtext'>Extensive guides for each feature and a complete API reference.</p>
                        </div>
                    </div>
                    <div 
                    onMouseEnter={this.helpOption3Enter}
                    onMouseLeave={this.helpOption3Leave}
                    className='popup-options'>
                        <div className='popup-icon'>
                            <button>
                                <img src={this.state.helpOption3Hovered ? '/assets/help_popup_message_icon_color.png' : '/assets/help_popup_message_icon.png'} alt='img not available'/>
                            </button>
                        </div>
                        <div className='popup-text'>
                            <p className='popup-text-header'>Contact us</p>
                            <p className='popup-text-subtext'>Need help with something else? Contact our support team.</p>
                        </div>
                    </div>
                    
                    
                </div>
                {/* </CSSTransition> */}
            </Styles>
        )
    }
}