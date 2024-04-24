import React,{Component} from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

const Styles = styled.div `
    
        // - - - - - - FULL PAGE - - - - - - //

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

        // - - - LEFT PANE - - - //

    // - HEADER - //

.leftPaneHeader h5 {
    margin-top: 8%;
    margin-left: 10%;
    font-family: Poppins;
    font-size: 90%;
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
    
}

.envSelectDropdownElements:after {
    content: "";
    clear: both;
    display: table;
}


`

export default class DesktopHome extends Component {
    constructor (props) {
        super(props)
        this.state = {
                //* - - LEFT PANE HEADER - - *//
            leftPaneSettingsIconHovered: false,
            leftPaneSettingsIcon: "/assets/left_pane_setting.png"
        }
    }

    renderDesktopView = () => {
        const { leftPaneSettingsIcon, leftPaneSettingsIconHovered } = this.state;
        return(
            <div className='fullPage'>
                <div className='pageSetup'>

                    {/* - - LEFt SIDE PANE  */}

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
                        <div className='envSelectDropdown'>
                            <div className='envSelectDropdownElements'>
                                <div className='envSelectDropdownIcon'>

                                </div>
                                <div className='envSelectDropdownTitle'>

                                </div>
                            </div>
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

