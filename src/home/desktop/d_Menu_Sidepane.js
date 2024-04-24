import React, {Component} from 'react'
import styled from 'styled-components'

const Styles = styled.div `


    // - - - - - - MENU OPTIONS - - - - - - - //

.menu-options {
    margin-top: 2.75%;
}

.menu-option-cell {
    all: unset;
    margin-left: 9%;
    width: 80%;
    margin-top: 0.75%;
    border-radius: 7px;
    padding: 0px;
    padding-left: 2%;
    cursor: pointer;
}

.menu-option-cell:hover {
    background-color: #E8E8EA;
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
    width: 10%;
}

.menu-option-title {
    float: left;
    text-align: left;
    width: 90%;
}

    // - - ICON - - //

.menu-option-icon img {
    padding-top: 4%;
    width: 15px;
    height: 15px;
}

    // - - TITLE - - //

.menu-option-title p {
    margin-left: 5%;
    margin-top: 0px;
    margin-bottom: 4%;
    font-family: poppins;
    font-size: 81%;
    color: #43474C;
}

    // - - CONFIGURATION HEADER - - //

.configurationHeader {
    margin-left: 12.5%;
    font-size: 75%;
    font-family: poppins;
    margin-bottom: 0px;
}

`

//* Highlighted Icon Color: #2E2EFF

export default class Sidepane extends Component {
    constructor(props) {
        super(props)
        this.state = {

            selectedMenuOption: "Overview",

                //* - "GENERAL" - *//

            overviewClicked: true,
            overviewBgColor: "#E8E8EA",
            overviewFontWeight: "bold",

            organizationsClicked: false,
            organizationsBgColor: "transparent",
            organizationsFontWeight: "normal",

            usersClicked: false,
            usersBgColor: "transparent",
            usersFontWeight: "normal",

                //* - CONFIG - *//

            authenticationClicked: false,
            authenticationBgColor: "transparent",
            authenticationFontWeight: "normal",

            directorySyncClicked: false,
            directorySyncBgColor: "transparent",
            directorySyncFontWeight: "normal",

            rolesClicked: false,
            rolesBgColor: "transparent",
            rolesFontWeight: "normal",

            auditLogsClicked: false,
            auditLogsBgColor: "transparent",
            auditLogsFontWeight: "normal",

            brandingClicked: false,
            brandingBgColor: "transparent",
            brandingFontWeight: "normal",

            domainsClicked: false,
            domainsBgColor: "transparent",
            domainsFontWeight: "normal",

                //* - DEVELOPER - *//

            redirectsClicked: false,
            redirectsBgColor: "transparent",
            redirectsFontWeight: "normal",

            apiKeysClicked: false,
            apiKeysBgColor: "transparent",
            apiKeysFontWeight: "normal",

            apiLogsClicked: false,
            apiLogsBgColor: "transparent",
            apiLogsFontWeight: "normal",

            webhooksClicked: false,
            webhooksBgColor: "transparent",
            webhooksFontWeight: "normal",

            eventsClicked: false,
            eventsBgColor: "transparent",
            eventsFontWeight: "normal",

            testSSOClicked: false,
            testSSOBgColor: "transparent",
            testSSOFontWeight: "normal"

        }
    }

            //* - - - - - MENU OPTIONS FUNCTIONS - - - - - *//

        //* - "GENERAL" OPTIONS - *//

    overviewOptionEnter = () => {this.setState({overviewClicked: true, overviewBgColor: "#E8E8EA"});}
    overviewOptionLeave = () => {if (this.state.selectedMenuOption !== 'Overview') {this.setState({overviewClicked: false, overviewBgColor: "transparent"});}}

    organizationsOptionEnter = () => {this.setState({organizationsClicked: true, organizationsBgColor: "#E8E8EA"});}
    organizationsOptionLeave = () => {if (this.state.selectedMenuOption !== 'Organizations') {this.setState({organizationsClicked: false, organizationsBgColor: "transparent"});}}

    usersOptionEnter = () => {this.setState({usersClicked: true, usersBgColor: "#E8E8EA"});}
    usersOptionLeave = () => {if (this.state.selectedMenuOption !== 'Users') {this.setState({usersClicked: false, usersBgColor: "transparent"});}}

        //* - CONFIGURATION OPTIONS - *//

    authenticationOptionEnter = () => {this.setState({authenticationClicked: true, authenticationBgColor: "#E8E8EA"});}
    authenticationOptionLeave = () => {if (this.state.selectedMenuOption !== 'Authentication') {this.setState({authenticationClicked: false, authenticationBgColor: "transparent"});}}
    
    directorySyncOptionEnter = () => {this.setState({directorySyncClicked: true, directorySyncBgColor: "#E8E8EA"});}
    directorySyncOptionLeave = () => {if (this.state.selectedMenuOption !== 'Directory Sync') {this.setState({directorySyncClicked: false, directorySyncBgColor: "transparent"});}}
    
    rolesOptionEnter = () => {this.setState({rolesClicked: true, rolesBgColor: "#E8E8EA"});}
    rolesOptionLeave = () => {if (this.state.selectedMenuOption !== 'Roles') {this.setState({rolesClicked: false, rolesBgColor: "transparent"});}}
    
    auditLogsOptionEnter = () => {this.setState({auditLogsClicked: true, auditLogsBgColor: "#E8E8EA"});}
    auditLogsOptionLeave = () => {if (this.state.selectedMenuOption !== 'Audit Logs') {this.setState({auditLogsClicked: false, auditLogsBgColor: "transparent"});}}
    
    brandingOptionEnter = () => {this.setState({brandingClicked: true, brandingBgColor: "#E8E8EA"});}
    brandingOptionLeave = () => {if (this.state.selectedMenuOption !== 'Branding') {this.setState({brandingClicked: false, brandingBgColor: "transparent"});}}
    
    domainsOptionEnter = () => {this.setState({domainsClicked: true, domainsBgColor: "#E8E8EA"});}
    domainsOptionLeave = () => {if (this.state.selectedMenuOption !== 'Domains') {this.setState({domainsClicked: false, domainsBgColor: "transparent"});}}
    

        //* - DEVELOPERS OPTIONS - *//

    redirectsOptionEnter = () => {this.setState({redirectsClicked: true, redirectsBgColor: "#E8E8EA"});}
    redirectsOptionLeave = () => {if (this.state.selectedMenuOption !== 'Redirects') {this.setState({redirectsClicked: false, redirectsBgColor: "transparent"});}}
    
    apiKeysOptionEnter = () => {this.setState({apiKeysClicked: true, apiKeysBgColor: "#E8E8EA"});}
    apiKeysOptionLeave = () => {if (this.state.selectedMenuOption !== 'API Keys') {this.setState({apiKeysClicked: false, apiKeysBgColor: "transparent"});}}
    
    apiLogsOptionEnter = () => {this.setState({apiLogsClicked: true, apiLogsBgColor: "#E8E8EA"});}
    apiLogsOptionLeave = () => {if (this.state.selectedMenuOption !== 'API Logs') {this.setState({apiLogsClicked: false, apiLogsBgColor: "transparent"});}}
   
    webhooksOptionEnter = () => {this.setState({webhooksClicked: true, webhooksBgColor: "#E8E8EA"});}
    webhooksOptionLeave = () => {if (this.state.selectedMenuOption !== 'Webhooks') {this.setState({webhooksClicked: false, webhooksBgColor: "transparent"});}}
    
    eventsOptionEnter = () => {this.setState({eventsClicked: true, eventsBgColor: "#E8E8EA"});}
    eventsOptionLeave = () => {if (this.state.selectedMenuOption !== 'Events') {this.setState({eventsClicked: false, eventsBgColor: "transparent"});}}
    
    testSSOOptionEnter = () => {this.setState({testSSOClicked: true, testSSOBgColor: "#E8E8EA"});}
    testSSOOptionLeave = () => {if (this.state.selectedMenuOption !== 'Test SSO') {this.setState({testSSOClicked: false, testSSOBgColor: "transparent"});}}
    
    
    render () {
        
        return (
            <Styles>
                        {/* - - - - - MENU OPTIONS - - - - - */}

                    {/* - - "GENERAL" MENU OPTIONS */}

                <div className='menu-options'>
                    <button 
                    onMouseEnter={this.overviewOptionEnter}
                    onMouseLeave={this.overviewOptionLeave}
                    style={{backgroundColor: this.state.overviewBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.overviewClicked ? '/assets/left_pane_overview_icon_color.png' : '/assets/left_pane_overview_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.overviewFontWeight}}>Overview</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onMouseEnter={this.organizationsOptionEnter}
                    onMouseLeave={this.organizationsOptionLeave}
                    style={{backgroundColor: this.state.organizationsBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.organizationsClicked ? '/assets/left_pane_organizations_icon_color.png' : '/assets/left_pane_organizations_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.organizationsFontWeight}}>Organizations</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onMouseEnter={this.usersOptionEnter}
                    onMouseLeave={this.usersOptionLeave}
                    style={{backgroundColor: this.state.usersBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.usersClicked ? '/assets/left_pane_users_icon_color.png' : '/assets/left_pane_users_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.usersFontWeight}}>Users</p>
                            </div>
                        </div>
                    </button>
                </div>

                    {/* - - CONFIGURATION MENU OPTIONS - - */}

                <p className='configurationHeader'>CONFIGURATION</p>

                <div className='menu-options'>
                    <button 
                    onMouseEnter={this.authenticationOptionEnter}
                    onMouseLeave={this.authenticationOptionLeave}
                    style={{backgroundColor: this.state.authenticationBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.authenticationClicked ? '/assets/left_pane_authentication_icon_color.png' : '/assets/left_pane_authentication_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.authenticationFontWeight}}>Authentication</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onMouseEnter={this.directorySyncOptionEnter}
                    onMouseLeave={this.directorySyncOptionLeave}
                    style={{backgroundColor: this.state.directorySyncBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.directorySyncClicked ? '/assets/left_pane_directory_sync_icon_color.png' : '/assets/left_pane_directory_sync_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.directorySyncFontWeight}}>Directory Sync</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onMouseEnter={this.rolesOptionEnter}
                    onMouseLeave={this.rolesOptionLeave}
                    style={{backgroundColor: this.state.rolesBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.rolesClicked ? '/assets/left_pane_roles_icon_color.png' : '/assets/left_pane_roles_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.rolesFontWeight}}>Roles</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onMouseEnter={this.auditLogsOptionEnter}
                    onMouseLeave={this.auditLogsOptionLeave}
                    style={{backgroundColor: this.state.auditLogsBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.auditLogsClicked ? '/assets/left_pane_audit_logs_icon_color.png' : '/assets/left_pane_audit_logs_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.auditLogsFontWeight}}>Audit Logs</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onMouseEnter={this.brandingOptionEnter}
                    onMouseLeave={this.brandingOptionLeave}
                    style={{backgroundColor: this.state.brandingBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.brandingClicked ? '/assets/left_pane_branding_icon_color.png' : '/assets/left_pane_branding_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.brandingFontWeight}}>Branding</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onMouseEnter={this.domainsOptionEnter}
                    onMouseLeave={this.domainsOptionLeave}
                    style={{backgroundColor: this.state.domainsBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.domainsClicked ? '/assets/left_pane_domains_icon_color.png' : '/assets/left_pane_domains_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.domainsFontWeight}}>Domains</p>
                            </div>
                        </div>
                    </button>
                </div>

                {/* - - DEVELOPER MENU OPTIONS - - */}

                <p className='configurationHeader'>DEVELOPER</p>

                <div className='menu-options'>
                    <button 
                    onMouseEnter={this.redirectsOptionEnter}
                    onMouseLeave={this.redirectsOptionLeave}
                    style={{backgroundColor: this.state.redirectsBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.redirectsClicked ? '/assets/left_pane_redirects_icon_color.png' : '/assets/left_pane_redirects_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.redirectsFontWeight}}>Redirects</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onMouseEnter={this.apiKeysOptionEnter}
                    onMouseLeave={this.apiKeysOptionLeave}
                    style={{backgroundColor: this.state.apiKeysBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.apiKeysClicked ? '/assets/left_pane_api_keys_icon_color.png' : '/assets/left_pane_api_keys_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.apiKeysFontWeight}}>API Keys</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onMouseEnter={this.apiLogsOptionEnter}
                    onMouseLeave={this.apiLogsOptionLeave}
                    style={{backgroundColor: this.state.apiLogsBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.apiLogsClicked ? '/assets/left_pane_api_logs_icon_color.png' : '/assets/left_pane_api_logs_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.apiLogsFontWeight}}>API Logs</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onMouseEnter={this.webhooksOptionEnter}
                    onMouseLeave={this.webhooksOptionLeave}
                    style={{backgroundColor: this.state.webhooksBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.webhooksClicked ? '/assets/left_pane_webhooks_icon_color.png' : '/assets/left_pane_webhooks_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.webhooksFontWeight}}>Webhooks</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onMouseEnter={this.eventsOptionEnter}
                    onMouseLeave={this.eventsOptionLeave}
                    style={{backgroundColor: this.state.eventsBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.eventsClicked ? '/assets/left_pane_events_icon_color.png' : '/assets/left_pane_events_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.eventsFontWeight}}>Events</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onMouseEnter={this.testSSOOptionEnter}
                    onMouseLeave={this.testSSOOptionLeave}
                    style={{backgroundColor: this.state.testSSOBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.testSSOClicked ? '/assets/left_pane_test_sso_icon_color.png' : '/assets/left_pane_test_sso_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.testSSOFontWeight}}>Test SSO</p>
                            </div>
                        </div>
                    </button>
                </div>

            </Styles>
        )
    }
}