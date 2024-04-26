import React, {Component} from 'react'
import styled from 'styled-components'

const Styles = styled.div `


    // - - - - - - MENU OPTIONS - - - - - - - //

.menu-options {
    margin-top: 3.9%;
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
    font-weight: bold;
}

`

export default class Sidepane extends Component {
    constructor(props) {
        super(props)
        this.state = {

            selectedMenuOption: "overview",

                //* - "GENERAL" - *//

            overviewHovered: true,
            overviewBgColor: "#E8E8EA",
            overviewFontWeight: "bold",

            organizationsHovered: false,
            organizationsBgColor: "transparent",
            organizationsFontWeight: "normal",

            usersHovered: false,
            usersBgColor: "transparent",
            usersFontWeight: "normal",

                //* - CONFIG - *//

            authenticationHovered: false,
            authenticationBgColor: "transparent",
            authenticationFontWeight: "normal",

            directorySyncHovered: false,
            directorySyncBgColor: "transparent",
            directorySyncFontWeight: "normal",

            rolesHovered: false,
            rolesBgColor: "transparent",
            rolesFontWeight: "normal",

            auditLogsHovered: false,
            auditLogsBgColor: "transparent",
            auditLogsFontWeight: "normal",

            brandingHovered: false,
            brandingBgColor: "transparent",
            brandingFontWeight: "normal",

            domainsHovered: false,
            domainsBgColor: "transparent",
            domainsFontWeight: "normal",

                //* - DEVELOPER - *//

            redirectsHovered: false,
            redirectsBgColor: "transparent",
            redirectsFontWeight: "normal",

            apiKeysHovered: false,
            apiKeysBgColor: "transparent",
            apiKeysFontWeight: "normal",

            apiLogsHovered: false,
            apiLogsBgColor: "transparent",
            apiLogsFontWeight: "normal",

            webhooksHovered: false,
            webhooksBgColor: "transparent",
            webhooksFontWeight: "normal",

            eventsHovered: false,
            eventsBgColor: "transparent",
            eventsFontWeight: "normal",

            testSSOHovered: false,
            testSSOBgColor: "transparent",
            testSSOFontWeight: "normal"

        }
    }

            //* - - - - - MENU OPTIONS FUNCTIONS - - - - - *//

        //* - - UPDATES PAGE & MENU OPTIONS UI - - *//

    updatePageUI = (optionSelected) => {
        this.props.receiveMenuOptionClicked(optionSelected, this.state.selectedMenuOption);
    }
    updateMenuOptionUI = (currentlySelected) => {
        if (this.state.selectedMenuOption !== currentlySelected) {
            this.updatePageUI(currentlySelected)
            this.setState({
                [`${this.state.selectedMenuOption}BgColor`]: "transparent",
                [`${this.state.selectedMenuOption}FontWeight`]: "normal",
                [`${this.state.selectedMenuOption}Hovered`]: false,
            }, () => {
                this.setState({
                    selectedMenuOption: currentlySelected,
                    [`${currentlySelected}BgColor`]: "#E8E8EA",
                    [`${currentlySelected}FontWeight`]: "bold",
                    [`${currentlySelected}Hovered`]: true,
                })
            })
        }
    }

        //* - UPDATES "GENERAL" OPTIONS HOVERING UI  - *//

    overviewOptionEnter = () => {this.setState({overviewHovered: true, overviewBgColor: "#E8E8EA"});}
    overviewOptionLeave = () => {if (this.state.selectedMenuOption !== 'overview') {this.setState({overviewHovered: false, overviewBgColor: "transparent"});}}
    

    organizationsOptionEnter = () => {this.setState({organizationsHovered: true, organizationsBgColor: "#E8E8EA"});}
    organizationsOptionLeave = () => {if (this.state.selectedMenuOption !== 'organizations') {this.setState({organizationsHovered: false, organizationsBgColor: "transparent"});}}

    usersOptionEnter = () => {this.setState({usersHovered: true, usersBgColor: "#E8E8EA"});}
    usersOptionLeave = () => {if (this.state.selectedMenuOption !== 'users') {this.setState({usersHovered: false, usersBgColor: "transparent"});}}
   
        //* - UPDATES CONFIGURATION OPTIONS HOVERING UI - *//

    authenticationOptionEnter = () => {this.setState({authenticationHovered: true, authenticationBgColor: "#E8E8EA"});}
    authenticationOptionLeave = () => {if (this.state.selectedMenuOption !== 'authentication') {this.setState({authenticationHovered: false, authenticationBgColor: "transparent"});}}

    directorySyncOptionEnter = () => {this.setState({directorySyncHovered: true, directorySyncBgColor: "#E8E8EA"});}
    directorySyncOptionLeave = () => {if (this.state.selectedMenuOption !== 'directorySync') {this.setState({directorySyncHovered: false, directorySyncBgColor: "transparent"});}}

    rolesOptionEnter = () => {this.setState({rolesHovered: true, rolesBgColor: "#E8E8EA"});}
    rolesOptionLeave = () => {if (this.state.selectedMenuOption !== 'roles') {this.setState({rolesHovered: false, rolesBgColor: "transparent"});}}
    
    auditLogsOptionEnter = () => {this.setState({auditLogsHovered: true, auditLogsBgColor: "#E8E8EA"});}
    auditLogsOptionLeave = () => {if (this.state.selectedMenuOption !== 'auditLogs') {this.setState({auditLogsHovered: false, auditLogsBgColor: "transparent"});}}
    
    brandingOptionEnter = () => {this.setState({brandingHovered: true, brandingBgColor: "#E8E8EA"});}
    brandingOptionLeave = () => {if (this.state.selectedMenuOption !== 'branding') {this.setState({brandingHovered: false, brandingBgColor: "transparent"});}}
    
    domainsOptionEnter = () => {this.setState({domainsHovered: true, domainsBgColor: "#E8E8EA"});}
    domainsOptionLeave = () => {if (this.state.selectedMenuOption !== 'domains') {this.setState({domainsHovered: false, domainsBgColor: "transparent"});}}

        //* - UPDATES DEVELOPER OPTIONS HOVERING UI - *//

    redirectsOptionEnter = () => {this.setState({redirectsHovered: true, redirectsBgColor: "#E8E8EA"});}
    redirectsOptionLeave = () => {if (this.state.selectedMenuOption !== 'redirects') {this.setState({redirectsHovered: false, redirectsBgColor: "transparent"});}}
    
    apiKeysOptionEnter = () => {this.setState({apiKeysHovered: true, apiKeysBgColor: "#E8E8EA"});}
    apiKeysOptionLeave = () => {if (this.state.selectedMenuOption !== 'apiKeys') {this.setState({apiKeysHovered: false, apiKeysBgColor: "transparent"});}}
    
    apiLogsOptionEnter = () => {this.setState({apiLogsHovered: true, apiLogsBgColor: "#E8E8EA"});}
    apiLogsOptionLeave = () => {if (this.state.selectedMenuOption !== 'apiLogs') {this.setState({apiLogsHovered: false, apiLogsBgColor: "transparent"});}}
   
    webhooksOptionEnter = () => {this.setState({webhooksHovered: true, webhooksBgColor: "#E8E8EA"});}
    webhooksOptionLeave = () => {if (this.state.selectedMenuOption !== 'webhooks') {this.setState({webhooksHovered: false, webhooksBgColor: "transparent"});}}
    
    eventsOptionEnter = () => {this.setState({eventsHovered: true, eventsBgColor: "#E8E8EA"});}
    eventsOptionLeave = () => {if (this.state.selectedMenuOption !== 'events') {this.setState({eventsHovered: false, eventsBgColor: "transparent"});}}
    
    testSSOOptionEnter = () => {this.setState({testSSOHovered: true, testSSOBgColor: "#E8E8EA"});}
    testSSOOptionLeave = () => {if (this.state.selectedMenuOption !== 'testSSO') {this.setState({testSSOHovered: false, testSSOBgColor: "transparent"});}}
    
    render () {
        
        return (
            <Styles>
                        {/* - - - - - MENU OPTIONS - - - - - */}

                    {/* - - "GENERAL" MENU OPTIONS */}

                <div className='menu-options'>
                    <button 
                    onClick={() => this.updateMenuOptionUI("overview")}
                    onMouseEnter={this.overviewOptionEnter}
                    onMouseLeave={this.overviewOptionLeave}
                    style={{backgroundColor: this.state.overviewBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.overviewHovered ? '/assets/left_pane_overview_icon_color.png' : '/assets/left_pane_overview_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.overviewFontWeight}}>Overview</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onClick={() => this.updateMenuOptionUI("organizations")}
                    onMouseEnter={this.organizationsOptionEnter}
                    onMouseLeave={this.organizationsOptionLeave}
                    style={{backgroundColor: this.state.organizationsBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.organizationsHovered ? '/assets/left_pane_organizations_icon_color.png' : '/assets/left_pane_organizations_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.organizationsFontWeight}}>Organizations</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onClick={() => this.updateMenuOptionUI("users")}
                    onMouseEnter={this.usersOptionEnter}
                    onMouseLeave={this.usersOptionLeave}
                    style={{backgroundColor: this.state.usersBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.usersHovered ? '/assets/left_pane_users_icon_color.png' : '/assets/left_pane_users_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.usersFontWeight}}>Users</p>
                            </div>
                        </div>
                    </button>
                </div>

                    {/* - - CONFIGURATION MENU OPTIONS - - */}

                <p style={{marginBottom: "0px"}} className='configurationHeader'>CONFIGURATION</p>

                <div style={{marginTop: '1%'}} className='menu-options'>
                    <button 
                    onClick={() => this.updateMenuOptionUI("authentication")}
                    onMouseEnter={this.authenticationOptionEnter}
                    onMouseLeave={this.authenticationOptionLeave}
                    style={{backgroundColor: this.state.authenticationBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.authenticationHovered ? '/assets/left_pane_authentication_icon_color.png' : '/assets/left_pane_authentication_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.authenticationFontWeight}}>Authentication</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onClick={() => this.updateMenuOptionUI("directorySync")}
                    onMouseEnter={this.directorySyncOptionEnter}
                    onMouseLeave={this.directorySyncOptionLeave}
                    style={{backgroundColor: this.state.directorySyncBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.directorySyncHovered ? '/assets/left_pane_directory_sync_icon_color.png' : '/assets/left_pane_directory_sync_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.directorySyncFontWeight}}>Directory Sync</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onClick={() => this.updateMenuOptionUI("roles")}
                    onMouseEnter={this.rolesOptionEnter}
                    onMouseLeave={this.rolesOptionLeave}
                    style={{backgroundColor: this.state.rolesBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.rolesHovered ? '/assets/left_pane_roles_icon_color.png' : '/assets/left_pane_roles_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.rolesFontWeight}}>Roles</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onClick={() => this.updateMenuOptionUI("auditLogs")}
                    onMouseEnter={this.auditLogsOptionEnter}
                    onMouseLeave={this.auditLogsOptionLeave}
                    style={{backgroundColor: this.state.auditLogsBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.auditLogsHovered ? '/assets/left_pane_audit_logs_icon_color.png' : '/assets/left_pane_audit_logs_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.auditLogsFontWeight}}>Audit Logs</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onClick={() => this.updateMenuOptionUI("branding")}
                    onMouseEnter={this.brandingOptionEnter}
                    onMouseLeave={this.brandingOptionLeave}
                    style={{backgroundColor: this.state.brandingBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.brandingHovered ? '/assets/left_pane_branding_icon_color.png' : '/assets/left_pane_branding_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.brandingFontWeight}}>Branding</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onClick={() => this.updateMenuOptionUI("domains")}
                    onMouseEnter={this.domainsOptionEnter}
                    onMouseLeave={this.domainsOptionLeave}
                    style={{backgroundColor: this.state.domainsBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.domainsHovered ? '/assets/left_pane_domains_icon_color.png' : '/assets/left_pane_domains_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.domainsFontWeight}}>Domains</p>
                            </div>
                        </div>
                    </button>
                </div>

                {/* - - DEVELOPER MENU OPTIONS - - */}

                <p className='configurationHeader'>DEVELOPER</p>

                <div style={{marginTop: '1%'}} className='menu-options'>
                    <button 
                    onClick={() => this.updateMenuOptionUI("redirects")}
                    onMouseEnter={this.redirectsOptionEnter}
                    onMouseLeave={this.redirectsOptionLeave}
                    style={{backgroundColor: this.state.redirectsBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.redirectsHovered ? '/assets/left_pane_redirects_icon_color.png' : '/assets/left_pane_redirects_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.redirectsFontWeight}}>Redirects</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onClick={() => this.updateMenuOptionUI("apiKeys")}
                    onMouseEnter={this.apiKeysOptionEnter}
                    onMouseLeave={this.apiKeysOptionLeave}
                    style={{backgroundColor: this.state.apiKeysBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.apiKeysHovered ? '/assets/left_pane_api_keys_icon_color.png' : '/assets/left_pane_api_keys_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.apiKeysFontWeight}}>API Keys</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onClick={() => this.updateMenuOptionUI("apiLogs")}
                    onMouseEnter={this.apiLogsOptionEnter}
                    onMouseLeave={this.apiLogsOptionLeave}
                    style={{backgroundColor: this.state.apiLogsBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.apiLogsHovered ? '/assets/left_pane_api_logs_icon_color.png' : '/assets/left_pane_api_logs_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.apiLogsFontWeight}}>API Logs</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onClick={() => this.updateMenuOptionUI("webhooks")}
                    onMouseEnter={this.webhooksOptionEnter}
                    onMouseLeave={this.webhooksOptionLeave}
                    style={{backgroundColor: this.state.webhooksBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.webhooksHovered ? '/assets/left_pane_webhooks_icon_color.png' : '/assets/left_pane_webhooks_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.webhooksFontWeight}}>Webhooks</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onClick={() => this.updateMenuOptionUI("events")}
                    onMouseEnter={this.eventsOptionEnter}
                    onMouseLeave={this.eventsOptionLeave}
                    style={{backgroundColor: this.state.eventsBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.eventsHovered ? '/assets/left_pane_events_icon_color.png' : '/assets/left_pane_events_icon.png'} alt='img not available'/>
                            </div>
                            <div className='menu-option-title'>
                                <p style={{fontWeight: this.state.eventsFontWeight}}>Events</p>
                            </div>
                        </div>
                    </button>
                    <button 
                    onClick={() => this.updateMenuOptionUI("testSSO")}
                    onMouseEnter={this.testSSOOptionEnter}
                    onMouseLeave={this.testSSOOptionLeave}
                    style={{backgroundColor: this.state.testSSOBgColor}} className='menu-option-cell'>
                        <div className='menu-option'>
                            <div className='menu-option-icon'>
                                <img src={this.state.testSSOHovered ? '/assets/left_pane_test_sso_icon_color.png' : '/assets/left_pane_test_sso_icon.png'} alt='img not available'/>
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