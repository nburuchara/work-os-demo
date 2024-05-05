import React, {Component} from 'react'
import styled from 'styled-components'
import HelpPopup from './d_Right_Pane_Header_Components/d_Help_Popup'
import FeedbackPopup from './d_Right_Pane_Header_Components/d_Feedback_Popup'
import DocsPopup from './d_Right_Pane_Header_Components/d_Docs_Popup'
import DocsSelected from './d_Right_Pane_Header_Components/d_Docs_Selected_Popup'

const Styles = styled.div `


        // - - - - - - RIGHT PANE HEADER - - - - - - //

.rightPaneHeader {
    width: 100%;
    margin-top: 0.75%;
}

.rightPaneHeader:after {
    display: table;
    content: "";
    clear: both;
}

.rightPaneLeftSide {
    float: left;
    text-align: left;
    width: 70%;
}

.rightPaneRightSide {
    float: left;
    text-align: right;
    width: 30%;
}

    // - - RIGHT PANE HEADER (TOP RIGHT SIDE) - - //

.rightPaneRightSide {
    
}

.rightPaneRightSide button {
    cursor: pointer;
}

.rightPaneRightSide:after {
    display: table;
    clear: both;
    content: "";
}

.rightSideCol1 {
    float: left;
    text-align: center;
    width: 22.5%;
}

.rightSideCol2 {
    float: left;
    text-align: center;
    width: 35%;
}

.rightSideCol3 {
    float: left;
    text-align: center;
    width: 22.5%;
}

.rightSideCol4 {
    float: left;
    text-align: center;
    width: 10%;
}

.rightSideCol5 {
    float: left;
    text-align: center;
    width: 10%;
}

    // - HELP BUTTON - //


.rightSideCol1:after {
    content: "";
    display: table;
    clear: both;
}

.rightSideCol1Icon {
    float: left;
    text-align: center;
    width: 40%;
}

.rightSideCol1Text {
    float: left;
    text-align: left;
    width: 60%;
}

    // # BUTTON CONTAINER

.rightSideCol1 button {
    width: 90%;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 3%;
}

    // # ICON

.rightSideCol1Icon img {
    margin-top: 16%;
    width: 15px;
    height: 15px;
}

    // # TEXT

.rightSideCol1Text p {
    margin-top: 5%;
    font-family: poppins;
    font-size: 102%;
    margin-left: 2%;
    margin-bottom: 0px;
}


    // - FEEDBACK BUTTON - //


.rightSideCol2:after {
    content: "";
    display: table;
    clear: both;
}

.rightSideCol2Icon {
    float: left;
    text-align: center;
    width: 25%;
}

.rightSideCol2Text {
    float: left;
    text-align: left;
    width: 75%;
}

// # BUTTON CONTAINER

.rightSideCol2 button {
    width: 90%;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 1%;
    padding-right: 1.5%;
    padding-bottom: 1.5%;
}

    // # ICON

.rightSideCol2Icon img {
    margin-top: 11.5%;
    width: 18px;
    height: 18px;
}

    // # TEXT

.rightSideCol2Text p {
    margin-top: 4.35%;
    font-family: poppins;
    font-size: 100%;
    // margin-left: 2%;
    margin-bottom: 0px;
}

    // - DOCS BUTTON - //


.rightSideCol3:after {
    content: "";
    display: table;
    clear: both;
}

.rightSideCol3Icon {
    float: left;
    text-align: center;
    width: 32%;
}

.rightSideCol3Text {
    float: left;
    text-align: left;
    width: 68%;
}

// # BUTTON CONTAINER

.rightSideCol3 button {
    width: 90%;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 2.5%;
    padding-left: 7.5%;
}

    // # ICON

.rightSideCol3Icon img {
    margin-top: 21%;
    width: 16.25px;
    height: 16.25px;
}

    // # TEXT

.rightSideCol3Text p {
    margin-top: 7.5%;
    font-family: poppins;
    font-size: 100%;
    margin-left: 2%;
    margin-bottom: 0px;
}

        // - TOGGLE THEME BUTTON - //

    // # BUTTON CONTAINER

.rightSideCol4 button {
    margin-top: 3.5%;
    border: 1px solid transparent;
    border-radius: 50%;
    padding-left: 12.5%;
    padding-right: 11%;
}

    // # ICON

.rightSideCol4 img {
    width: 16.85px;
    height: 16.85px;
    margin-top: 15.5%;
}

.toggleThemeIcon {
    transition: transform 0.3s ease; /* Add transition for transform property */
}

.toggleThemeIconRotated {
    transform: rotate(180deg); /* Rotate the arrow 180 degrees */
}

        // - USER NAME BUTTON - //

    // # BUTTON CONTAINER

.rightSideCol5 button {
    margin-top: 3.5%;
    border: 1px solid transparent;
    border-radius: 50%;
    padding: 12.5%;
    padding-left: 21%;
    padding-right: 20%;
    margin-right: 2.5%;
    background-color: #5e626a;
}

.rightSideCol5 button:hover {
    background-color: #2e2eff;
}


.rightSideCol5 h2 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 100%;
    color: white;
}


`

export default class Header extends Component {
    constructor() {
        super()
        this.state = {

                //* - - HELP / FEEDBACK / DOCS BUTTONS - - *//

            helpBgColor: "transparent",
            helpTxtColor: "#5e626a",
            feedbackBgColor: "transparent",
            feedbackTxtColor: "#5e626a",
            docsBgColor: "transparent",
            docsTxtColor: "#5e626a",
            helpBtnHovered: false,
            feedbackBtnHovered: false,
            docsBtnHovered: false,

                //* - - TOGGLE THEME / USER PROFILE BUTTONS - - *//

            toggleThemeHovered: false,
            toggleThemeBtnBgColor: "",

        }
    }

    helpBtnEnter = () => {
        this.setState({helpBtnHovered: true, helpTxtColor: "#2e2eff", helpBgColor: "#F6F7FF"})
    }

    helpBtnLeave = () => {
        this.setState({helpBtnHovered: false, helpTxtColor: "#5e626a", helpBgColor: "transparent"})
    }

    feedbackBtnEnter = () => {
        this.setState({feedbackBtnHovered: true, feedbackTxtColor: "#2e2eff", feedbackBgColor: "#F6F7FF"})
    }

    feedbackBtnLeave = () => {
        this.setState({feedbackBtnHovered: false, feedbackTxtColor: "#5e626a", feedbackBgColor: "transparent"})
    }

    docsBtnEnter = () => {
        this.setState({docsBtnHovered: true, docsTxtColor: "#2e2eff", docsBgColor: "#F6F7FF"})
    }

    docsBtnLeave = () => {
        this.setState({docsBtnHovered: false, docsTxtColor: "#5e626a", docsBgColor: "transparent"})
    }

    toggleThemeEnter = () => {
        this.setState({toggleThemeHovered: true, toggleThemeBtnBgColor: "#F6F7FF"})
    }

    toggleThemeLeave = () => {
        this.setState({toggleThemeHovered: false, toggleThemeBtnBgColor: ""})
    }

    render () {
        return(
            <Styles>
                <div className='rightPaneHeader'>
                    <div className='rightPaneLeftSide'>
                        {/* Don't remove */}
                        <p></p> 
                    </div>
                    <div className='rightPaneRightSide'>
                        <div className='rightSideCol1'>
                            <button
                            style={{backgroundColor: this.state.helpBgColor}}
                            onMouseEnter={this.helpBtnEnter}
                            onMouseLeave={this.helpBtnLeave}
                            >
                                <div className='rightSideCol1Icon'>
                                    <img src={this.state.helpBtnHovered ? '/assets/right_pane_header_help_icon_color.png' : '/assets/right_pane_header_help_icon.png'} alt='img not available'/>
                                </div>
                                <div className='rightSideCol1Text'>
                                    <p style={{color: this.state.helpTxtColor}}>Help</p>
                                </div>
                            </button>
                            {/* <HelpPopup/> */}
                            {/* <FeedbackPopup/> */}
                            <DocsPopup/>
                        </div>
                        <div className='rightSideCol2'>
                            <button
                            style={{backgroundColor: this.state.feedbackBgColor}}
                            onMouseEnter={this.feedbackBtnEnter}
                            onMouseLeave={this.feedbackBtnLeave}
                            >
                                <div className='rightSideCol2Icon'>
                                    <img src={this.state.feedbackBtnHovered ? '/assets/right_pane_header_feedback_icon_color.png' : '/assets/right_pane_header_feedback_icon.png'} alt='img not available'/>
                                </div>
                                <div className='rightSideCol2Text'>
                                    <p style={{color: this.state.feedbackTxtColor}}>Feedback?</p>
                                </div>
                            </button>
                        </div>
                        <div className='rightSideCol3'>
                            <button
                            style={{backgroundColor: this.state.docsBgColor}}
                            onMouseEnter={this.docsBtnEnter}
                            onMouseLeave={this.docsBtnLeave}
                            >
                                <div className='rightSideCol3Icon'>
                                    <img src={this.state.docsBtnHovered ? '/assets/right_pane_header_docs_icon_color.png' : '/assets/right_pane_header_docs_icon.png'} alt='img not available'/>
                                </div>
                                <div className='rightSideCol3Text'>
                                    <p style={{color: this.state.docsTxtColor}}>Docs</p>
                                </div>
                            </button>
                        </div>
                        <div className='rightSideCol4'>
                            <button
                            className='userProfileBtn'
                            style={{backgroundColor: this.state.toggleThemeBtnBgColor}}
                            onMouseEnter={this.toggleThemeEnter}
                            onMouseLeave={this.toggleThemeLeave}
                            >
                                <img 
                                className={this.state.toggleThemeHovered ? 'toggleThemeIcon toggleThemeIconRotated' : 'toggleThemeIcon'}
                                src={this.state.toggleThemeHovered ? '/assets/right_pane_header_theme_icon_color.png' : '/assets/right_pane_header_theme_icon.png'} alt='img not available'/>
                            </button>
                        </div> 
                        <div className='rightSideCol5'>
                            <button>
                                <h2>N</h2>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <DocsSelected/>
                </div>
            </Styles>
        )
    }
}