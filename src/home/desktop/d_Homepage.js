import React,{Component} from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import Popup from './d_Env_Selection_Popup'
import { CSSTransition } from 'react-transition-group';

const Styles = styled.div `
    
        // - - - - - -  FULL PAGE - - - - - - //

.fullPage {
    width: 100%;
    height: 100vh;
}

        // - - - - - - PAGE SETUP - - - - - - //

.pageSetup:after {
    content: "";
    display: table;
    clear: both;
}

.leftPane {
    height: 100vh;
    float: left;
    text-align: left;
    width: 16.25%;
    background-color: #f9f9fb;
    border-right: 1.48px solid #e0e1e6;
}

.rightPane {
    float: left;
    text-align: center;
    width: 83.75%;
}

        // - - - -  LEFT PANE - - - //

    // - HEADER - //

.leftPaneHeader h5 {
    margin-top: 8%;
    margin-left: 10%;
    font-family: Poppins;
    font-size: 90%;
    margin-bottom: 5%;
}

.leftPaneHeader img {
    margin-top: 9.4%;
    margin-right: 9.5%;
    width: 14.35px;
    height: 14.35px;
    cursor: pointer;
}

    // - ENVIRONMENT SELECTION DROPDOWN - //

.envSelectDropdown {
    padding: 2%;
    margin-left: 9%;
    margin-right: 9%;
    background-color: #fefefe;
    border: 0.85px solid #909397;
    border-radius: 6px;
}

.envSelectDropdownElements:after {
    content: "";
    clear: both;
    display: table;
}

.envSelectDropdownIcon {
    float: left;
    text-align: center;
    width: 12%;
}

.envSelectDropdownTitle {
    float: left;
    text-align: left;
    width: 73%;
}

.envSelectDropdownClicker {
    float: left;
    text-align: center;
    width: 15%;
}

    // # SELCTION ICON # 

.envSelectDropdownIcon img {
    margin-top: 12.5%;
    width: 80%;
}

    // # TITLE # 

.envSelectDropdownTitle p {
    margin-top: 3%;
    margin-bottom: 0px;
    margin-left: 4%;
    font-size: 85%;
    font-family: rubik;
    font-weight: bold;
}

    // # DROPDOWN CLICKER ICON #

.envSelectDropdownClicker img {
    margin-top: 18%;
    width: 50%;
    margin-left: 2.5%;
    cursor: pointer;
}

.envSelectDropdownClickerIcon {
    transition: transform 0.3s ease; /* Add transition for transform property */
}

.envSelectDropdownClickerRotated {
    transform: rotate(180deg); /* Rotate the arrow 180 degrees */
}

    // - MENU OPTIONS - //

.menu-option-cell {
    all: unset;
    background-color: #E8E8EA;
    margin-left: 10%;
    width: 80%;
    margin-top: 3%;
    border-radius: 7px;
    padding-left: 2%;
}

.menu-option {
    margin-top: 5%;
}

.menu-option:after {
    content: "";
    clear: both;
    display: after;
}

.menu-option-icon {
    float: left;
    text-align: right;
    width: 8.5%;
}

.menu-option-title {
    float: left;
    text-align: left;
    width: 91.5%;
}

    // # ICON

.menu-option-icon img {
    margin-top: 4%;
    width: 14px;
    height: 14px;
}

    // # TITLE

.menu-option-title p {
    margin-left: 5%;
    margin-top: 0%;
    margin-bottom: 6%;
    font-family: rubik;
    font-size: 90%;
    font-weight: bold;
}


`

export default class DesktopHome extends Component {
    constructor (props) {
        super(props)
        this.state = {
                //* - - LEFT PANE HEADER - - *//
            leftPaneSettingsIconHovered: false,
            leftPaneSettingsIcon: "/assets/left_pane_setting.png",
            envSelectDropdownClickerOpen: false,
            envSelectDropdownVisible: false,
        }
    }

    renderDesktopView = () => {
        const {leftPaneSettingsIconHovered, envSelectDropdownClickerOpen, envSelectDropdownVisible} = this.state;
        return(
            <div className='fullPage'>
                <div className='pageSetup'>

                        {/* - - - - - - LEFT SIDE PANE - - - - - - */}
                        
                    {/* - - - -  HEADER - - - */}

                    <div className='leftPane'>
                        <div style={{display: "flex", justifyContent: "space-between"}} className='leftPaneHeader'>
                            <h5>team_name</h5>
                            <img 
                            onMouseEnter={this.leftPaneSettingsIconEnter}
                            onMouseLeave={this.leftPaneSettingsIconLeave}
                            src={leftPaneSettingsIconHovered ? '/assets/left_pane_setting_color.png' : '/assets/left_pane_setting.png'} 
                            alt='img not available'
                            />
                        </div>

                    {/* - - - -  ENV. SELECT DROPDOWN - - - */}

                        <div className='envSelectDropdown'>
                            <div className='envSelectDropdownElements'>
                                <div className='envSelectDropdownIcon'>
                                    <img src='/assets/staging_icon.png' alt='img not available'/>
                                </div>
                                <div className='envSelectDropdownTitle'>
                                    <p>Staging</p>
                                </div>
                                <div className='envSelectDropdownClicker'>
                                    <img 
                                    className={envSelectDropdownClickerOpen ? 'envSelectDropdownClickerIcon envSelectDropdownClickerRotated' : 'envSelectDropdownClickerIcon'}
                                    src='/assets/env_select_dropdown.png'
                                    alt='img not available'
                                    onClick={this.envSelectDropdownClickerClicked}
                                    />
                                </div>
                            </div>
                        </div>
                        <Popup isVisibleProp={envSelectDropdownVisible}/>

                    {/* - - - -  SIDE PANE OPTIONS - - - */}

                        <div className='menu-options'>
                            <button className='menu-option-cell'>
                                <div className='menu-option'>
                                    <div className='menu-option-icon'>
                                        <img src='/assets/overview_icon_color.png' alt='img not available'/>
                                    </div>
                                    <div className='menu-option-title'>
                                        <p>Overview</p>
                                    </div>
                                </div>
                            </button>
                        </div>

                    </div>

                    {/* - - RIGHT SIDE PANE  */}
                
                    <div className='rightPane'>
                        
                    </div>
                </div>
            </div>
        )
    }

        //* - - - LEFT PANE FUNCTIONS - - - *//

    leftPaneSettingsIconEnter = () => {
        this.setState({ leftPaneSettingsIconHovered: true, leftPaneSettingsIcon: '/assets/left_pane_setting_color.png' });
    };

    leftPaneSettingsIconLeave = () => {
        this.setState({ leftPaneSettingsIconHovered: false, leftPaneSettingsIcon: '/assets/left_pane_setting.png' });
    };

    envSelectDropdownClickerClicked = () => {
        this.setState(prevState => ({
            envSelectDropdownClickerOpen: !prevState.envSelectDropdownClickerOpen,
            envSelectDropdownVisible: !prevState.envSelectDropdownVisible,
        }));
    }

    renderLargerDesktopView = () => {

    }

    renderLargeDesktopView = () => {

    }

    renderLargestDesktopView = () => {

    }

    renderFinalDesktopView = () => {

    }

    render () {
        
        const computerMediaQuery = `(min-width: 1456px)`
        const computerFinallMediaQuery = `(min-width: 1361px) and (max-width: 1455px)`
        const computerLargestlMediaQuery = `(min-width: 1266px) and (max-width: 1360px)`
        const computerLargeMediaQuery = `(min-width: 1171px) and (max-width: 1265px)`
        const computerLargerMediaQuery = `(min-width: 1076px) and (max-width: 1170px)`

        return (
            <Styles>

                {/*  - - RENDER LAPTOP/DESKTOP VIEWS - - */}

                <MediaQuery query={computerMediaQuery}>
                    {this.renderDesktopView()}
                </MediaQuery>


                <MediaQuery query={computerLargerMediaQuery}>
                    {this.renderLargerDesktopView()}
                </MediaQuery>


                <MediaQuery query={computerLargeMediaQuery}>
                    {this.renderLargeDesktopView()}
                </MediaQuery>


                <MediaQuery query={computerLargestlMediaQuery}>
                    {this.renderLargestDesktopView()}
                </MediaQuery>


                <MediaQuery query={computerFinallMediaQuery}>
                    {this.renderFinalDesktopView()}
                </MediaQuery>

            </Styles>
        )
    }
}

