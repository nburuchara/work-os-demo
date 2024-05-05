import React,{Component} from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import Popup from './d_Home_Components/d_Env_Selection_Popup'
import Sidepane from './d_Home_Components/d_Menu_Sidepane';
import DesktopOverview from './d_Home_Pages/d_Overview/d_Overview';
import DesktopWorkspace from './d_Home_Pages/d_Workspace/d_Workspace';
import DesktopOrganizations from './d_Home_Pages/d_Organizations/d_Organizations'
import DesktopUsers from './d_Home_Pages/d_Users/d_Users'
import DesktopAuthentication from './d_Home_Pages/d_Authentication/d_Authentication'
import DesktopDirectorySync from './d_Home_Pages/d_Directory_Sync/d_Directory_Sync'
import DesktopRoles from './d_Home_Pages/d_Roles/d_Roles'
import DesktopAuditLogs from './d_Home_Pages/d_Audit_Logs/d_Audit_Logs'
import DesktopBranding from './d_Home_Pages/d_Branding/d_Branding'
import DesktopDomains from './d_Home_Pages/d_Domains/d_Domains'
import DesktopRedirects from './d_Home_Pages/d_Redirects/d_Redirects'
import DesktopAPIKeys from './d_Home_Pages/d_API_Keys/d_API_Keys'
import DesktopAPILogs from './d_Home_Pages/d_API_Logs/d_API_Logs'
import DesktopWebhooks from './d_Home_Pages/d_Webhooks/d_Webhooks'
import DesktopEvents from './d_Home_Pages/d_Events/d_Events';
import DesktopTestSSO from './d_Home_Pages/d_Test_SSO/d_Test_SSO';
import RightPaneHeader from './d_Home_Components/d_Right_Pane_Header'
import DocsSelectedPopup from './d_Home_Components/d_Right_Pane_Header_Components/d_Docs_Selected_Popup'

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
    // height: 100vh;
    float: left;
    text-align: center;
    width: 82%;
}

        // - - - -  LEFT PANE - - - - //

    // - HEADER - //

.leftPaneHeader h5 {
    margin-top: 8%;
    margin-left: 10%;
    font-family: Poppins;
    font-size: 90%;
    margin-bottom: 3%;
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

        // - - - -  RIGHT PANE - - - - //



`

export default class DesktopHome extends Component {
    constructor (props) {
        super(props)
        this.state = {
                //* - - LEFT SIDEPANE HEADER - - *//

            leftPaneSettingsIconHovered: false,
            leftPaneSettingsIcon: "/assets/left_pane_setting.png",
            envSelectDropdownClickerOpen: false,
            envSelectDropdownVisible: false,

                //* - - LEFT SIDEPANE MENU PAGES - - *//

            overview_page: true,
            workspace_page: false,
            organizations_page: false,
            users_page: false,
            authentication_page: false,
            directorySync_page: false,
            roles_page: false,
            auditLogs_page: false,
            branding_page: false,
            domains_page: false,
            redirects_page: false,
            apiKeys_page: false,
            apiLogs_page: false,
            webhooks_page: false,
            events_page: false,
            testSSO_page: false

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

                    {/* - - - - MENU SIDE PANE OPTIONS - - - */}

                        <Sidepane receiveMenuOptionClicked={this.handleMenuOptionClicked}/>

                    </div>

                        {/* - - - - - - RIGHT SIDE PANE - - - - - - */}
                
                    <div className='rightPane'>

                        {/* - - - - TOP RIGHT HEADER - - - - - */}
                        
                        <RightPaneHeader/>


                        {/* - - - - MENU PAGES - - - - - */}
                        
                        {this.state.overview_page && <DesktopOverview/>}
                        {this.state.workspace_page && <DesktopWorkspace/>}
                        {this.state.organizations_page && <DesktopOrganizations/>}
                        {this.state.users_page && <DesktopUsers/>}
                        {this.state.authentication_page && <DesktopAuthentication/>}
                        {this.state.directorySync_page && <DesktopDirectorySync/>}
                        {this.state.roles_page && <DesktopRoles/>}
                        {this.state.auditLogs_page && <DesktopAuditLogs/>}
                        {this.state.branding_page && <DesktopBranding/>}
                        {this.state.domains_page && <DesktopDomains/>}
                        {this.state.redirects_page && <DesktopRedirects/>}
                        {this.state.apiKeys_page && <DesktopAPIKeys/>}
                        {this.state.apiLogs_page && <DesktopAPILogs/>}
                        {this.state.webhooks_page && <DesktopWebhooks/>}
                        {this.state.events_page && <DesktopEvents/>}
                        {this.state.testSSO_page && <DesktopTestSSO/>}

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

    handleMenuOptionClicked = (menuOption, prevMenuOption) => {
        this.setState({
            [`${prevMenuOption}_page`]: false,
        }, () => {
            this.setState({
                [`${menuOption}_page`]: true,
            })
        })
        console.log(`Option: ${menuOption}_page`)
        console.log(`Prev Menu Option: ${prevMenuOption}_page`)
    }

        //* - - MORE DESKTOP VIEWS - - *//

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

