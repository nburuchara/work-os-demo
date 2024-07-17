import React, {Component} from 'react'
import styled from 'styled-components'
import HelpPopup from './d_Right_Pane_Header_Components/d_Help_Popup'
import FeedbackPopup from './d_Right_Pane_Header_Components/d_Feedback_Popup'
import DocsPopup from './d_Right_Pane_Header_Components/d_Docs_Popup'
import DocsSelected from './d_Right_Pane_Header_Components/d_Docs_Selected_Popup'
import { CSSTransition } from 'react-transition-group';

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


    // - - FLOATING NOTIFICATION - - //

.floating-notification {
    position: fixed;
    float: left;
    border: 1px solid white;
    left: 1.35%;
    background-color: white;
    width: 21%;
    padding: 0.6%;
    border-radius: 10px;
    top: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

.close-notification p {
    margin-top: 2%;
    margin-bottom: 0px;
    font-size: 85%;
    font-family: rubik;
    color: #6363f1;
    font-weight: bold;
    padding-left: 3%;
}

.close-notification span {
    border-radius: 10px;
    border: 1px solid #6363f1;
    background-color: #6363f1;
    color: white;
    font-family: poppins;
    font-size: 70%;
    padding: 1%;
    width: 13%;
    text-align: center;
    cursor: pointer;
}

.close-notification label {
    font-weight: bold;
    cursor: pointer;
}

    // - - MAIN NOTIFICATION TEXT - - //

.main-notification-text {
    // margin-top: %;
    font-size: 82%;
    color: black;
    font-family: rubik;
    padding-left: 3%;
    padding-right: 3%;
    // font-weight: bold;
}

    // - - VIBRATING ANIMATION - - //

.vibrate {
    display: inline-block;
    animation: vibrate 0.5s linear;
    position: fixed;
    float: left;
    border: 1px solid white;
    left: 1.35%;
    background-color: white;
    width: 21%;
    padding: 0.6%;
    border-radius: 10px;
    top: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}
  
@keyframes vibrate {
    0% { transform: translateX(0); }
    20% { transform: translateX(-2px); }
    40% { transform: translateX(2px); }
    60% { transform: translateX(-2px); }
    80% { transform: translateX(2px); }
    100% { transform: translateX(0); }
}

    // - - CSS Transition Definitions - - //

.docs-side-panel-enter {
    transform: translateX(-100%) !important;
    opacity: 0 !important;
}

.docs-side-panel-enter-active {
    transform: translate(0) !important;
    opacity: 1 !important;
    transition: transform 500ms, opacity 500ms !important;
}

.docs-side-panel-exit {
    transform: translateY(0);
    opacity: 1;
}

.docs-side-panel-exit-active {
    transform: translateX(10%) !important;
    opacity: 0 !important;
    transition: transform 500ms, opacity 500ms !important;
}

// - - CSS Transition Definitions - - //

.docs-top-panel-enter {
    transform: translateX(100%) !important;
    opacity: 0 !important;
}

.docs-top-panel-enter-active {
    transform: translate(0) !important;
    opacity: 1 !important;
    transition: transform 500ms, opacity 500ms !important;
}

.docs-top-panel-exit {
    transform: translateX(0);
    opacity: 1;
}

.docs-top-panel-exit-active {
    transform: translateX(10%) !important;
    opacity: 0 !important;
    transition: transform 500ms, opacity 500ms !important;
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

            nightModeToggled: false,
            toggleThemeHovered: false,
            toggleThemeBtnBgColor: "",
            profileBtnToggled: false,
            profileBtnBgColor: "#5e626a",

                //* - - POPUPS - - *//

            showHelpPopup: false,
            showFeedbackPopup: false,
            showDocsPopup: false,
            showNotification: false,
            toggleNotificationVibration: false,
            helpPopupToggled: false,
            feedbackPopupToggled: false,
            docsPopupToggled: false

        }
    }

    helpBtnEnter = () => {
        this.setState({helpBtnHovered: true, helpTxtColor: "#2e2eff", helpBgColor: "#F6F7FF"})
    }

    helpBtnLeave = () => {
        if (!this.state.helpPopupToggled) {
            this.setState({helpBtnHovered: false, helpTxtColor: "#5e626a", helpBgColor: "transparent"})
        }
    }

    feedbackBtnEnter = () => {
        this.setState({feedbackBtnHovered: true, feedbackTxtColor: "#2e2eff", feedbackBgColor: "#F6F7FF"})
    }

    feedbackBtnLeave = () => {
        if (!this.state.feedbackPopupToggled) {
            this.setState({feedbackBtnHovered: false, feedbackTxtColor: "#5e626a", feedbackBgColor: "transparent"})
        }
    }

    docsBtnEnter = () => {
        this.setState({docsBtnHovered: true, docsTxtColor: "#2e2eff", docsBgColor: "#F6F7FF"})
    }

    docsBtnLeave = () => {
        if (!this.state.docsPopupToggled) {
            this.setState({docsBtnHovered: false, docsTxtColor: "#5e626a", docsBgColor: "transparent"})
        }
    }

    toggleThemeEnter = () => {
        this.setState({toggleThemeHovered: true, toggleThemeBtnBgColor: "#F6F7FF"})
    }

    toggleThemeLeave = () => {
        if (!this.state.nightModeToggled) {
            this.setState({toggleThemeHovered: false, toggleThemeBtnBgColor: ""})
        }
    }

    toggleProfileEnter = () => {
        this.setState({ profileBtnBgColor: "#2e2eff" })
    }

    toggleProfileLeave = () => {
        if (!this.state.profileBtnToggled) {
            this.setState({ profileBtnBgColor: "#5e626a" })
        }
    }

    nightModeClicked = () => {
        if (this.state.profileBtnToggled) {
            this.setState({
                toggleNotificationVibration: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        toggleNotificationVibration: false
                    })
                }, 500)
            })
        } else if (this.state.nightModeToggled === false && this.state.profileBtnToggled === false) {
            this.setState({
                nightModeToggled: true,
                toggleThemeHovered: true, 
                toggleThemeBtnBgColor: "#F6F7FF",
                showNotification: true
            })
        } else if (this.state.nightModeToggled) {
            this.setState({
                nightModeToggled: false,
                toggleThemeHovered: false, 
                toggleThemeBtnBgColor: "",
                showNotification: false
            })
        }
    }

    hideNotification = () => {
        this.setState({
            toggleThemeHovered: false, 
            toggleThemeBtnBgColor: "",
            showNotification: false,
            nightModeToggled: false,
            toggleThemeHovered: false, 
            toggleThemeBtnBgColor: "",
            profileBtnToggled: false,
            profileBtnBgColor: "#5e626a", 
        })
    }

    profileClicked = () => {
        if (this.state.nightModeToggled) {
            this.setState({
                toggleNotificationVibration: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        toggleNotificationVibration: false
                    })
                }, 500)
            })
        } else if (this.state.nightModeToggled === false && this.state.profileBtnToggled === false) {
            this.setState({
                profileBtnToggled: true,
                profileBtnBgColor: "#2e2eff", 
                showNotification: true
            })
        } else if (this.state.profileBtnToggled) {
            this.setState({
                profileBtnToggled: false,
                profileBtnBgColor: "#5e626a", 
                showNotification: false
            })
        }
    }

    helpPopupClicked = () => {
        if (this.state.showFeedbackPopup === true) {
            this.setState({
                showFeedbackPopup: false,
                feedbackPopupToggled: false,
                feedbackBtnHovered: false, 
                feedbackTxtColor: "#5e626a",
                feedbackBgColor: "transparent",
                helpPopupToggled: true,
                helpBtnHovered: true, 
                helpTxtColor: "#2e2eff",
                helpBgColor: "#F6F7FF"
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showHelpPopup: true,
                    })
                }, 500)
            })
        } else if (this.state.showDocsPopup === true) {
            this.setState({
                showDocsPopup: false,
                docsPopupToggled: false,
                docsBtnHovered: false, 
                docsTxtColor: "#5e626a",
                docsBgColor: "transparent",
                helpPopupToggled: true,
                helpBtnHovered: true, 
                helpTxtColor: "#2e2eff",
                helpBgColor: "#F6F7FF"
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showHelpPopup: true,
                    })
                }, 500)
            })
        } else if (this.state.showHelpPopup) {
            this.setState({
                showHelpPopup: false,
                helpPopupToggled: false,
                helpBtnHovered: false, 
                helpTxtColor: "#5e626a",
                helpBgColor: "transparent"
            })
        } else {
            this.setState({
                showHelpPopup: true,
                helpPopupToggled: true,
                helpBtnHovered: true, 
                helpTxtColor: "#2e2eff",
                helpBgColor: "#F6F7FF"
            })
        }
    }

    feedbackPopupClicked = () => {
        if (this.state.showHelpPopup === true) {
            this.setState({
                showHelpPopup: false,
                helpPopupToggled: false,
                helpBtnHovered: false, 
                helpTxtColor: "#5e626a",
                helpBgColor: "transparent",
                feedbackPopupToggled: true,
                feedbackBtnHovered: true, 
                feedbackTxtColor: "#2e2eff",
                feedbackBgColor: "#F6F7FF"
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showFeedbackPopup: true,
                    })
                }, 500)
            })
        } else if (this.state.showDocsPopup === true) {
            this.setState({
                showDocsPopup: false,
                docsPopupToggled: false,
                docsBtnHovered: false, 
                docsTxtColor: "#5e626a",
                docsBgColor: "transparent",
                feedbackPopupToggled: true,
                feedbackBtnHovered: true, 
                feedbackTxtColor: "#2e2eff",
                feedbackBgColor: "#F6F7FF"
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showFeedbackPopup: true,
                    })
                }, 500)
            })
        } else if (this.state.showFeedbackPopup) {
            this.setState({
                showFeedbackPopup: false,
                feedbackPopupToggled: false,
                feedbackBtnHovered: false, 
                feedbackTxtColor: "#5e626a",
                feedbackBgColor: "transparent"
            })
        } else {
            this.setState({
                showFeedbackPopup: true,
                feedbackPopupToggled: true,
                feedbackBtnHovered: true, 
                feedbackTxtColor: "#2e2eff",
                feedbackBgColor: "#F6F7FF"
            })
        }
    }

    cancelFeedbackBtnClicked = () => {
        this.setState({
            showFeedbackPopup: false,
            feedbackPopupToggled: false,
            feedbackBtnHovered: false, 
            feedbackTxtColor: "#5e626a",
            feedbackBgColor: "transparent"
        })
    }

    docsPopupClicked = () => {
        if (this.state.showHelpPopup === true) {
            this.setState({
                showHelpPopup: false,
                helpPopupToggled: false,
                helpBtnHovered: false, 
                helpTxtColor: "#5e626a",
                helpBgColor: "transparent",
                docsPopupToggled: true,
                docsBtnHovered: true, 
                docsTxtColor: "#2e2eff",
                docsBgColor: "#F6F7FF"
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showDocsPopup: true,
                    })
                }, 500)
            })
        } else if (this.state.showFeedbackPopup === true) {
            this.setState({
                showFeedbackPopup: false,
                feedbackPopupToggled: false,
                feedbackBtnHovered: false, 
                feedbackTxtColor: "#5e626a",
                feedbackBgColor: "transparent",
                docsPopupToggled: true,
                docsBtnHovered: true, 
                docsTxtColor: "#2e2eff",
                docsBgColor: "#F6F7FF"
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showDocsPopup: true,
                    })
                }, 500)
            })
        } else if (this.state.showDocsPopup) {
            this.setState({
                showDocsPopup: false,
                docsPopupToggled: false,
                docsBtnHovered: false, 
                docsTxtColor: "#5e626a",
                docsBgColor: "transparent"
            })
        } else {
            this.setState({
                showDocsPopup: true,
                docsPopupToggled: true,
                docsBtnHovered: true, 
                docsTxtColor: "#2e2eff",
                docsBgColor: "#F6F7FF"
            })
        }
    }

    hideDocsBtnClicked = () => {
        this.setState({
            showDocsPopup: false,
            docsPopupToggled: false,
            docsBtnHovered: false, 
            docsTxtColor: "#5e626a",
            docsBgColor: "transparent"
        })
    }

    render () {
        return(
            <Styles>
                <div className='rightPaneHeader'>
                    <div className='rightPaneLeftSide'>
                        {/* Don't remove */}
                        <p></p> 
                        <CSSTransition
                        in={this.state.showNotification}
                        timeout={500}
                        classNames="docs-side-panel"
                        unmountOnExit
                        >
                            <div className={this.state.toggleNotificationVibration ? "vibrate" : "floating-notification"}>
                                <div className='close-notification' style={{justifyContent: "space-between", display: "flex"}}>
                                    <p>FEATURE UNAVAILABLE</p>
                                    <span onClick={this.hideNotification}><label>Close</label></span>
                                </div>
                                <p className='main-notification-text'>Unfortunately, this feature has not been implemented in this demo. Consider hiring Norman to access a full version 😄</p>
                            </div>
                        </CSSTransition>
                    </div>
                    <div className='rightPaneRightSide'>
                        <div className='rightSideCol1'>
                            <button
                            style={{backgroundColor: this.state.helpBgColor}}
                            onMouseEnter={this.helpBtnEnter}
                            onMouseLeave={this.helpBtnLeave}
                            onClick={this.helpPopupClicked}
                            >
                                <div className='rightSideCol1Icon'>
                                    <img src={this.state.helpBtnHovered ? '/assets/right_pane_header_help_icon_color.png' : '/assets/right_pane_header_help_icon.png'} alt='img not available'/>
                                </div>
                                <div className='rightSideCol1Text'>
                                    <p style={{color: this.state.helpTxtColor}}>Help</p>
                                </div>
                            </button>
                            {/* <DocsPopup/> */}
                        </div>
                        <div className='rightSideCol2'>
                            <button
                            style={{backgroundColor: this.state.feedbackBgColor}}
                            onMouseEnter={this.feedbackBtnEnter}
                            onMouseLeave={this.feedbackBtnLeave}
                            onClick={this.feedbackPopupClicked}
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
                            onClick={this.docsPopupClicked}
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
                            onClick={this.nightModeClicked}
                            >
                                <img 
                                className={this.state.toggleThemeHovered ? 'toggleThemeIcon toggleThemeIconRotated' : 'toggleThemeIcon'}
                                src={this.state.toggleThemeHovered ? '/assets/right_pane_header_theme_icon_color.png' : '/assets/right_pane_header_theme_icon.png'} alt='img not available'/>
                            </button>
                        </div> 
                        <div className='rightSideCol5'>
                            <button
                            style={{backgroundColor: this.state.profileBtnBgColor}}
                            onMouseEnter={this.toggleProfileEnter}
                            onMouseLeave={this.toggleProfileLeave}
                            onClick={this.profileClicked}
                            >
                                <h2>N</h2>
                            </button>
                        </div>
                    </div>
                </div>
                <CSSTransition
                in={this.state.showHelpPopup}
                timeout={500}
                classNames="docs-top-panel"
                unmountOnExit
                >
                    <div style={{textAlign: "right", marginLeft: "70%", width: "122.5%"}}>
                        <HelpPopup/>
                    </div>
                </CSSTransition>

                <CSSTransition
                in={this.state.showFeedbackPopup}
                timeout={500}
                classNames="docs-top-panel"
                unmountOnExit
                >
                    <div style={{textAlign: "right", marginLeft: "70%", width: "122.5%"}}>
                        <FeedbackPopup cancelFeedbackBtnClicked={this.cancelFeedbackBtnClicked}/>
                    </div>
                </CSSTransition>

                <CSSTransition
                in={this.state.showDocsPopup}
                timeout={500}
                classNames="docs-top-panel"
                unmountOnExit
                >
                    <div style={{width: "120%"}}>
                        <DocsSelected hideDocsBtnClicked={this.hideDocsBtnClicked}/>
                    </div>
                </CSSTransition>
            </Styles>
        )
    }
}