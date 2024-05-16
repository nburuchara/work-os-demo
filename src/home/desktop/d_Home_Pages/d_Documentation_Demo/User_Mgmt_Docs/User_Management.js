import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from '../d_Documentation_Components/d_Code_Snippet_Structure'

const Styles = styled.div  `

`

export default class UserManagement extends Component {
    constructor() {
        super()
        this.state = {

                //* - USER MGMT SECTIONS - *//

            gettingStarted: false,
            exampleApps: false,
            authKit: false,
            emailDomains: false,
            branding: false,
            migrations: false,
            singleSignOn: false,
            emailAndPassword: false,
            socialLogin: false,
            multiFactorAuth: false,
            magicAuth: false,
            usersAndOrganizations: false,
            sessions: true,

                //* - CODE SNIPPET - *//
            currentSelectedLanguage: "javascript",
            codeSnippet1CopyHovered: false,

                //* - IMAGE - *//
            enlarged: false,

                //* - TWO TABS - *//
            usingNode: true,
            usingNodeHovered: false,
            usingNextJs: false,
            usingNextJsHovered: false,
        }
    }


    newLangSelected = (currentLang) => {
        if (this.state.currentSelectedLanguage === "") {
            this.setState({ 
                [`${currentLang}Selected`]: true,
                currentSelectedLanguage: currentLang,
            })
        } else {
            console.log(currentLang)
            this.setState({
                [`${this.state.currentSelectedLanguage}Selected`]: false 
            }, () => {
                this.setState({
                    [`${currentLang}Selected`]: true,
                    currentSelectedLanguage: currentLang,
                })
            })
        }
    }

    toggleEnlarged = () => {
        this.setState(prevState => ({
          enlarged: !prevState.enlarged
        }));
    };

    usingNodeEnter = () => { this.setState({usingNodeHovered: true}) }
    usingNodeLeave = () => { this.setState({usingNodeHovered: false}) }

    usingNextJsEnter = () => { this.setState({usingNextJsHovered: true}) }
    usingNextJsLeave = () => { this.setState({usingNextJsHovered: false}) }

    usingNodeClicked = () => { this.setState({ usingNode: true, usingNextJs: false}) }
    usingNextJsClicked = () => { this.setState({usingNextJs: true, usingNode: false}) }


    codeSnippet1CopyEnter = () => {this.setState({codeSnippet1CopyHovered: true})}
    codeSnippet1CopyLeave = () => {this.setState({codeSnippet1CopyHovered: false})}
    
    render () {

            //* - USR MGMG SECTIONS VAR(S) - *//
        const { gettingStarted, exampleApps, authKit, emailDomains, branding, migrations, singleSignOn, emailAndPassword, socialLogin, multiFactorAuth, magicAuth, usersAndOrganizations, sessions } = this.state;

            //* - DOCS UI SIZE ADJUSTMENT VAR(S) - *//
        const { sidebarMenuClicked } = this.props;

            //* - ENLARGING IMG VAR(S) - *//
        const  { enlarged } = this.state;

            //* - TWO TABS VAR(S) - *//
        const { usingNode, usingNodeHovered, usingNextJs, usingNextJsHovered } = this.state

            //* - CODE SNIPPET VAR(S) - *//
        const  { codeSnippet1CopyHovered } = this.state;
        
        return (
            <Styles>
                {gettingStarted && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>User Management</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Easy to authenticate APIs designed to provide a flexible, secure, and fast integration.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Integrating User Management features into your app is quick and easy. In this guide, we’ll take you through adding a hosted authentication flow to your application using <label className='demo-docs-hyperlink'>AuthKit</label>.</p>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Before getting started</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To get the most out of this guide, you’ll need:</p>
                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <label className='demo-docs-hyperlink'>WorkOS account</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your WorkOS <label className='demo-docs-hyperlink'>API Key</label> and <label className='demo-docs-hyperlink'>Client ID</label>.</p></li>
                            </ul>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configure your project</h1>
                                </div>
                            </div>
                            <p>Let's add the necessary dependencies and configuration in your WorkOS Dashboard.</p>
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Install dependencies</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you're using Next.js, you can use the <label className='demo-docs-hyperlink'>authkit-nextjs</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> library. The Next.js library is the fastest way to get AuthKit and <label className='demo-docs-hyperlink'>Impersonation</label> working in your Next.js application with full session management.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Alternatively you can use one of the several native SDKs that WorkOS provides. This guide will use the popular Node.js SDK.</p>
                        
                            <CodeSnippetStruct 
                            id={3}
                            headerTabs={0}
                            dropdownDisabled={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Install dependencies" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>
                            
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Configure a redirect URI</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A redirect URI is a callback endpoint that WorkOS will redirect to after a user has authenticated. This endpoint will exchange the authorization code returned by WorkOS for an authenticated <label className='demo-docs-hyperlink'>User object</label>. We’ll be creating this endpoint in the next step.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can set a redirect URI in the <i>Redirects</i> section of the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> – be sure not to include wildcard subdomains or query parameters.</p>

            
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/usr_mgmt_docs_redirects_img.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Set secrets</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To make calls to WorkOS, provide the API key and the client ID. Store these values as managed secrets and pass them to the SDKs either as environment variables or directly in your app's configuration depending on your preferences.</p>
                    
                        
                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingNode ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingNodeClicked}
                                    onMouseEnter={this.usingNodeEnter}
                                    onMouseLeave={this.usingNodeLeave}
                                    style={{fontWeight: usingNode ? "bold" : "normal", backgroundColor: usingNodeHovered ? "#e6e6eb": ""}}
                                    >Using Node</button>
                                </div>
                                <div style={{borderBottom: usingNextJs ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingNextJsClicked}
                                    onMouseEnter={this.usingNextJsEnter}
                                    onMouseLeave={this.usingNextJsLeave}
                                    style={{fontWeight: usingNextJs ? "bold" : "normal", backgroundColor: usingNextJsHovered ? "#e6e6eb" : ""}}
                                    >Using Next.js</button>
                                </div>
                            </div>
                            
                            {usingNode && 
                                <div>
                                    <CodeSnippetStruct 
                                    id={4}
                                    headerTabs={0}
                                    dropdownDisabled={true}
                                    dropdownDisabledAndHidden={true}
                                    sideBarOpen={sidebarMenuClicked}
                                    snippet="Environment variables" 
                                    updateSelectedLang={this.newLangSelected}
                                    selectedLang={this.state.currentSelectedLanguage}/>
                                
                                    
                                </div>
                            }
                            {usingNextJs && 
                                <div>
                                    <CodeSnippetStruct 
                                    id={5}
                                    headerTabs={0}
                                    dropdownDisabled={true}
                                    dropdownDisabledAndHidden={true}
                                    sideBarOpen={sidebarMenuClicked}
                                    snippet="Environment variables" 
                                    updateSelectedLang={this.newLangSelected}
                                    selectedLang={this.state.currentSelectedLanguage}/>
                                
                                    <div className='api-keys'>
                                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The Next.js library requires you set a strong password to encrypt cookies. This password must be at least 32 characters long. You can generate a secure password by using the <label className='demo-docs-hyperlink'>1Password generator</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> or the <span>openssl</span> library via the command line:</p>
                                    </div>

                                    <CodeSnippetStruct 
                                    id={6}
                                    headerTabs={0}
                                    dropdownDisabled={true}
                                    dropdownDisabledAndHidden={true}
                                    sideBarOpen={sidebarMenuClicked}
                                    snippet="Generate a strong password" 
                                    updateSelectedLang={this.newLangSelected}
                                    selectedLang={this.state.currentSelectedLanguage}/>

                                </div>
                            }

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.65%"}}>The code examples use your staging API keys when <label className='demo-docs-hyperlink'>signed in</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Add AuthKit to your app</h1>
                                </div>
                            </div>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Let's integrate the hosted authentication flow into your app.</p>
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Redirect users to AuthKit</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>First, we'll need to direct users to sign in (or sign up) using AuthKit before redirecting them back to your application. We'll do this by generating an AuthKit authorization URL server side and redirecting the user to it.</p>
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can use the optional state parameter to encode arbitrary information to help restore application <span>state</span> between redirects.</p>
                            </div>

                            <CodeSnippetStruct 
                            id={7}
                            headerTabs={0}
                            dropdownDisabled={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Redirect users to AuthKit" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.65%"}}>WorkOS will redirect to your <label className='demo-docs-hyperlink'>Redirect URI</label> if there is an issue generating an authorization URL. Read our <label className='demo-docs-hyperlink'>API Reference</label> for more details.</p>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Add a callback endpoint</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Next, let’s add the callback endpoint (referenced in <label className='demo-docs-hyperlink'>Configure a redirect URI</label>) which will exchange the authorization code (valid for 10 minutes) for an authenticated User object.</p>
                    
                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingNode ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingNodeClicked}
                                    onMouseEnter={this.usingNodeEnter}
                                    onMouseLeave={this.usingNodeLeave}
                                    style={{fontWeight: usingNode ? "bold" : "normal", backgroundColor: usingNodeHovered ? "#e6e6eb": ""}}
                                    >Using Node</button>
                                </div>
                                <div style={{borderBottom: usingNextJs ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingNextJsClicked}
                                    onMouseEnter={this.usingNextJsEnter}
                                    onMouseLeave={this.usingNextJsLeave}
                                    style={{fontWeight: usingNextJs ? "bold" : "normal", backgroundColor: usingNextJsHovered ? "#e6e6eb" : ""}}
                                    >Using Next.js</button>
                                </div>
                            </div>

                            {usingNode && 
                                <div>
                                    <CodeSnippetStruct 
                                    id={8}
                                    headerTabs={0}
                                    dropdownDisabled={true}
                                    sideBarOpen={sidebarMenuClicked}
                                    snippet="Callback endpoint" 
                                    updateSelectedLang={this.newLangSelected}
                                    selectedLang={this.state.currentSelectedLanguage}/>
                                </div>
                            }
                            {usingNextJs && 
                                <div>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Next.js middleware</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> is required to determine which routes require authentication.</p>
                                    <CodeSnippetStruct 
                                    id={9}
                                    headerTabs={0}
                                    dropdownDisabled={true}
                                    sideBarOpen={sidebarMenuClicked}
                                    snippet="middleware.ts" 
                                    updateSelectedLang={this.newLangSelected}
                                    selectedLang={this.state.currentSelectedLanguage}/>

                                    <div className='api-keys'>
                                        <p>Make sure this route matches the <span>WORKOS_REDIRECT_URI</span> environment variable and the configured redirect URI in your WorkOS Dashboard.</p>
                                    </div>

                                    <CodeSnippetStruct 
                                    id={10}
                                    headerTabs={0}
                                    dropdownDisabled={true}
                                    sideBarOpen={sidebarMenuClicked}
                                    snippet="/app/callback/route.ts" 
                                    updateSelectedLang={this.newLangSelected}
                                    selectedLang={this.state.currentSelectedLanguage}/>
                                </div>
                            }

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Validate the authentication flow</h3>
                            <p>Navigate to the <label className='demo-docs-hyperlink'>authentication endpoint</label> we created and sign up for an account. You can then sign in with the newly created credentials and see the user listed in the <i>Users</i> section of the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>
                    
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/usr_mgmt_docs_validate_auth_flow_img.avif' alt="Enlargable" className="image" />
                            </div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Handle the user session</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There are two ways to integrate session management with WorkOS:</p>
                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>A</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Using <span>authkit-nextjs</span></h3>
                                    </div>
                                </div>
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If using the <span>authkit-nextjs</span> library, session management is handled for you. No further integration is required.</p>
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>B</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Manually</h3>
                                    </div>
                                </div>
                            </div>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In order to persist the authenticated state of the user in the application, we need to store and access a session.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For illustration purposes we’ll be using a <label className='demo-docs-hyperlink'>JSON Web Token (JWT)</label> to store the authenticated user in a short lived cookie, though your approach may differ depending on the application's specific requirements.</p>
                        
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Create a session password</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>First, generate a unique password to seal the session with.</p>

                            <CodeSnippetStruct 
                            id={11}
                            headerTabs={0}
                            dropdownDisabled={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Create a session password" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Then add it to the environment variables file.</p>

                            <CodeSnippetStruct 
                            id={12}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Environment variables" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Save the encrypted session</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Next, update the callback to seal the access and refresh token. The access token is a JWT which is used to check if the session is still valid. If it isn't, the refresh token is used to attempt to retrieve a new access token.</p>

                            <CodeSnippetStruct 
                            id={13}
                            headerTabs={0}
                            dropdownDisabled={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Encrypt session" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Then, use middleware to specify which routes should be protected. If the session has expired, use the refresh token to attempt to generate a new one.</p>
                        
                            <CodeSnippetStruct 
                            id={14}
                            headerTabs={0}
                            dropdownDisabled={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Secure route with middleware" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Finally, add the middleware to the route that should only be accessible to logged in users.</p>

                            <CodeSnippetStruct 
                            id={15}
                            headerTabs={0}
                            dropdownDisabled={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Add middleware to route" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Example Apps</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>View sample User Management Apps</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        </div>    
                    </div>
                }
                {exampleApps && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Example Apps</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>View sample User Management apps.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can view minimal example apps that demonstrate how to use WorkOS User Management and AuthKit to authenticate users:</p>
                        
                            <div className='example-apps-container'>
                                <div className='example-app-container'>
                                    <img src='/assets/docs_example_apps_typescript_icon.png' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>AuthKit</h5>
                                </div>
                                <div className='example-app-container'>
                                <img src='/assets/docs_example_apps_typescript_icon.png' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>Next.js AuthKit app</h5>
                                </div>
                                <div className='example-app-container'>
                                    <img src='/assets/docs_api_reference_java_language_icon.png' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>Java User Management app</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {authKit && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>AuthKit</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Customizable sign-in UI that abstracts away all of the complexity associated with building secure authentication flows.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Implementing authentication flows that handle every possible error state and edge case across multiple identity providers can be a daunting task. AuthKit makes this easy by providing a hosted, pre-built, customizable authentication UI with automatic handling of:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Sign up, sign in, password reset, and <label className='demo-docs-hyperlink'>email verification</label> flows.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Enterprise <label className='demo-docs-hyperlink'>SSO</label> routing and <label className='demo-docs-hyperlink'>MFA</label> enrollment.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Automatic bot detection and blocking, to protect against brute force attacks.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Customizable <label className='demo-docs-hyperlink'>domains</label> and <label className='demo-docs-hyperlink'>branding</label>.</p></li>
                            </ul>
                        
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/auth_kit_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Authentication Flow</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit is conceptually similar to a <label className='demo-docs-hyperlink'>Social Login (OAuth)</label> experience, but with the added benefit of being able to authenticate users with any identity provider.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit sits outside of your application code. When a user initiates a sign-in request, your application redirects them to the AuthKit URL. The user then completes the authentication process with WorkOS before being returned to the application.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your application will exchange the resulting authorization code to retrieve an authenticated <label className='demo-docs-hyperlink'>User object</label> and handle the session.</p>
                        
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/authkit_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>The AuthKit flow abstracts away many of the UX and WorkOS API calling concerns automatically, for more guidance on integrating with AuthKit, see the <label className='demo-docs-hyperlink'>Quick Start</label> guide.</p>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit also provides a sign-up flow for creating users. Available options are determined by the configured <label className='demo-docs-hyperlink'>authentication methods</label>. If a user’s email address is associated with an SSO connection, they will automatically be redirected to sign up via their IdP.</p>
                           
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Authentication Methods</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit supports all of the authentication methods available in WorkOS User Management and will automatically adjust the available options depending on the configured methods in the <i>Authentication</i> section of the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>
                            
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/authkit_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Email + Password authentication is enabled by default, though set up may be required to enable additional methods. See the relevant feature section for more information:</p>
                        
                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Single Sign-On</label></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Email + Password</label></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Social Login</label></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Multi-Factor Auth</label></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Magic Auth</label></p></li>
                            </ul>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Integrating</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Integration into your app is quick and easy, though the route you choose varies depending on your specific requirements:</p>
                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>A</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Integrate with AuthKit</h3>
                                    </div>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In just a few lines of code, you can add AuthKit to your app and start authenticating users. See the <label className='demo-docs-hyperlink'>quick start</label> guide for more information.</p>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>B</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Build your own authentication flows</h3>
                                    </div>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>While the hosted solution is the fastest way to get started, if you’d prefer to build and manage your own authentication UI, you can do so via the <label className='demo-docs-hyperlink'>User Management API.</label></p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Examples of building custom UI are available on <label className='demo-docs-hyperlink'>GitHub</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p>
                        
                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Email domains</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Guidance on configuring domains for emails</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                }
                {emailDomains && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Email Domains</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Guidance on configuring domains for emails.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configuring a domain</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Several User Management features require sending emails:</p>
                        
                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Magic Auth.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Email verification</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Password resets</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Invitations</p></li>
                            </ul>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In Production environments, emails are sent from a custom domain when configured or from <span>workos.com</span> by default.</p>
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Navigate to domain configuration</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>With the Production environment selected, navigate to the <i>Domains</i> section of the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p>
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/email_domains_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Add an email domain</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click the <i>Add Domain</i> button and enter the domain you would like to use for sending emails.</p>
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/email_domains_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Create CNAME records</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You will be prompted to create 3 CNAME records with your DNS provider. After creating these DNS records, click <i>Verify</i> now.</p>
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/email_domains_img3.avif' alt="Enlargable" className="image" />
                            </div>


                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>It can take some time for DNS changes to take effect. If the initial verification attempt is not successful, WorkOS will continue trying to verify your domain for 72 hours.</p>
                                </div>
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once your domain is successfully verified, authentication emails and Admin Portal invites will be sent from <span>no-reply@your-domain.com</span>. It’s important to keep the CNAME records in place to ensure that WorkOS can deliver mail on your behalf.</p>
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Branding</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Customize AuthKit to fit natively with your app's unique design</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {branding && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Branding</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Customize AuthKit to fit natively with your app’s unique design.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can customize the look and feel of AuthKit via the Branding section of the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The brand editor allows you to:</p>
                        
                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Upload logos and favicons</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Set brand colors for buttons, links, and backgrounds</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Manage visual properties such as corner radius and dark mode appearance</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The AuthKit preview will update in real-time as you make changes and accurately reflect the available authentication methods, giving you a clear picture of the authentication experience with AuthKit.</p>
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/branding_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Appearance</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit supports both light and dark mode; each brand configuration option is split across both so that they can be configured independently. You can enforce a specific appearance, or allow the user's OS system settings to determine which to use.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The corner radius applied to UI elements can also be configured; a lower value will result in a more formal aesthetic while a higher value has a more rounded, playful feel.</p>
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/branding_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Assets</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can upload custom brand assets to display in AuthKit, transactional emails, and the <label className='demo-docs-hyperlink'>Admin Portal</label></p>
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/branding_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There are three types of uploadable assets:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Logo:</strong> Your full size brand logo, styles vary but this would typically include the wordmark.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Logo icon:</strong> A smaller, iconized version of the logo, this is often simply the logomark.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Favicon:</strong> The favicon is displayed in the browser tab alongside the address bar.</p></li>
                            </ul>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Logo style</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Either the logo or the logo icon can be displayed in AuthKit. To select which to use, click the logo in the AuthKit preview after uploading both assets.</p>
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/branding_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Color</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can control four colors across light and dark mode:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Page background color</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Button background colors</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Button text color</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Link color</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Other colors used in the UI, like the focus outline, hover styles, or borders, are created automatically based on the four colors you provide, ensuring a consistent look and feel.</p>
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/branding_img5.avif' alt="Enlargable" className="image" />
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Copy</h1>
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/branding_img6.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Migrating to User Management</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Guidance on moving your existing users to WorkOS</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {migrations && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Migrations</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Guidance on moving your existing users to WorkOS.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS provides a <label className='demo-docs-hyperlink'>range of guides</label> to help you migrate your existing integration to WorkOS User Management.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Migrate from another service</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>These guides will walk you through the process of moving your users and organizations to WorkOS from another service.</p>

                            <div className='migrations-container'>
                                <div className={sidebarMenuClicked ? "migration-sidebar-container" : "migration-container"}>
                                    <img src='/assets/migrations_authO.avif' alt='no img available'/>
                                    <h5>AuthO</h5>
                                    <p>Learn how to migrate users and organizations from AuthO.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "migration-sidebar-container" : "migration-container"}>
                                    <img src='/assets/migrations_aws_cognito.avif' alt='no img available'/>
                                    <h5>AWS Cognito</h5>
                                    <p>Learn how to migrate users to WorkOS from AWS Cognito.</p>
                                </div>
                            </div>
                            <div className='migrations-container'>
                                <div className={sidebarMenuClicked ? "migration-sidebar-container" : "migration-container"}>
                                    <img src='/assets/migrations_firebase.avif' alt='no img available'/>
                                    <h5>Firebase</h5>
                                    <p>Learn how to migrate users to WorkOS from Firebase.</p>
                               </div>
                                <div className={sidebarMenuClicked ? "migration-sidebar-container" : "migration-container"}>
                                    <button
                                    className={sidebarMenuClicked ? "migration-container-sidebar-button" : ""} 
                                    >
                                        <img className="migration-container-see-all-img" src='/assets/migrations_see_all_icon.png' alt='no img available'/>
                                    </button>
                                    <h5 className='migration-container-see-all-h5'>View all migrations</h5>
                                    <p className='migration-container-see-all-p'>Migrate from a range of other services</p>
                                </div>
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Migrate an existing WorkOS integration</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you already have an integration with WorkOS (for example, using the <label className='demo-docs-hyperlink'>standalone API</label> to provide SSO to your customers), you can migrate to User Management and take advantage of all of the features it provides by following <label className='demo-docs-hyperlink'>this guide</label>.</p>
                        
                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Single Sign-On</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Facilitate greater security, easier account management, and accelerated application onboarding and adoption.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {singleSignOn && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Single Sign-On</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Facilitate greater security, easier account management, and accelerated application onboarding and adoption.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Single Sign-On is the most frequently asked for requirement by organizations looking to adopt new SaaS applications. SSO enables authentication via an organization’s <label className='demo-docs-hyperlink'>identity provider (IdP)</label>.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This service is compatible with any IdP and supports both the <label className='demo-docs-hyperlink'>SAML</label> and <label className='demo-docs-hyperlink'>OIDC</label> protocols. It’s modeled to meet the <label className='demo-docs-hyperlink'>OAuth 2.0</label> framework specification, abstracting away the underlying authentication handshakes between different IdPs.</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Getting Started</h1>
                            <p>AuthKit greatly simplifies the process of integrating SSO into your application. AuthKit will make the necessary API calls automatically and handle the routing of SSO users when their account is associated with an existing SSO connection.</p>
                        
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Enable SSO</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Navigate to the <i>Authentication</i> settings section in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> and enable Single Sign-On.</p>
                        
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/sso_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit will now automatically detect when a user is attempting to sign in via SSO and redirect them to the appropriate IdP.</p>
                        
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Test with the Test Identity Provider</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To confirm your Single Sign-On integration works correctly you can use the Test Identity Provider to simulate login flows end-to-end. Your staging environment includes a default Test Organization and active SSO connection configured with the Test Identity Provider.</p>

                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/sso_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Getting Started</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Log into the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> and navigate to the Test SSO page to get started with the Test IdP. This page outlines a number of different SSO scenarios you can follow and provides all the necessary information to complete the tests.</p>

                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/sso_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Service provider-initiated SSO</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This case is likely the first <label className='demo-docs-hyperlink'>login flow</label> you would test when implementing SSO in your app. The test simulates users initiating authentication from your sign-in page. In this scenario, the user enters their email in your app, gets redirected to the identity provider, and then is redirected back to your application.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Identity provider-initiated SSO</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This test simulates users initiating authentication from their identity provider. It is a common <label className='demo-docs-hyperlink'>login flow</label> that developers forget to consider. In the scenario, users log in to the identity provider directly, select your application from their list of SSO-enabled apps, and are redirected to your application upon successful authentication.</p>


                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Guest email domain</h3>
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This test simulates users authenticating with an email domain different from the verified domain of the test organization, <span>example.com</span>. A relevant scenario is authenticating freelance users, whose email domain is not owned by the company.</p>
                            </div>
                            
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Error response</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This test simulates a generic <label className='demo-docs-hyperlink'>error response</label> from the user’s identity provider. In this scenario, SSO authentication has failed for the user. Below is an example of the error-related params passed to the <label className='demo-docs-hyperlink'>redirect URI</label> in your application.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            
                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Test with other identity providers</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Test Identity Provider saves time by providing an out of the box experience compared to the configuration process that someone using a real identity provider would have to go through to enable Single Sign-On for your app.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If your integration works with the Test Identity Provider, you can be sure it will work with other identity providers. However, it may be helpful to also learn about the setup process that your customers will go through on their side, which varies depending on a specific identity provider.</p>


                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Create an organization</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To get started, you will need to <label className='demo-docs-hyperlink'>create an organization</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> in the WorkOS Dashboard. Organizations in WorkOS represent your customer, so by creating an organization, you can test your SSO connection the way your customers will experience it.</p>


                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/sso_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Create a connection</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Go to the organization you created and click <i>Invite admin</i>. Select <i>Single Sign-On</i> from the list of features. In the next step, enter an email address to send the setup link to, or click <i>Copy setup link</i>.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The setup link goes to Admin Portal, where your customers get the exact instructions for every step they need to take to enable Single Sign-On with your app.</p>

                            <div style={{marginTop: "5%", marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>You can also integrate <label className='demo-docs-hyperlink'>Admin Portal</label> directly into your app to enable self-serve setup of Single Sign-On and other enterprise features for your users.</p>
                                </div>
                            </div>

                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/sso_img5.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Follow the Admin Portal instructions</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To complete the integration, you’ll have to also create an account with the identity provider you want to test with. After you have signed up with an identity provider of your choice, follow the corresponding Admin Portal instructions from the setup link. Once done, you can start testing your SSO integration with that identity provider.</p>


                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/sso_img6.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The setup instructions you’ve seen in the Admin Portal are also available directly in the docs if you want to create a connection manually:</p>



                            <div className='sso-manual-btns-container'>
                                <div className={sidebarMenuClicked ? "sso-manual-sidebar-btn-container" : "sso-manual-btn-container"}>
                                    <div className={sidebarMenuClicked ? "sso-manual-btn-sidebar-text" : "sso-manual-btn-text"}>
                                        <h4>Okta</h4>
                                        <p>Configure a connection to Okta.</p>
                                    </div>
                                    <div className={sidebarMenuClicked ? "sso-manual-btn-sidebar-logo" : "sso-manual-btn-logo"}>
                                        <button>
                                            <img src='/assets/sso_okta_logo_icon.png' alt='no img available'/>
                                        </button>
                                    </div>
                               </div>
                                <div className={sidebarMenuClicked ? "sso-manual-sidebar-btn-container" : "sso-manual-btn-container "}>
                                    <div className={sidebarMenuClicked ? "sso-manual-btn-sidebar-text" : "sso-manual-btn-text"}>
                                        <h4>Entra ID (Azure ID)</h4>
                                        <p>Configure a Entra ID SAML connection.</p>
                                    </div>
                                    <div className={sidebarMenuClicked ? "sso-manual-btn-sidebar-logo" : "sso-manual-btn-logo"}>
                                        <button>
                                            <img src='/assets/sso_microsoft_logo_icon.png' alt='no img available'/>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='sso-manual-btns-container'>
                                <div className={sidebarMenuClicked ? "sso-manual-sidebar-btn-container" : "sso-manual-btn-container"}>
                                   <div className={sidebarMenuClicked ? "sso-manual-btn-sidebar-text" : "sso-manual-btn-text"}>
                                        <h4>Google Workplace</h4>
                                        <p>Configure a Google Workplace SAML connection.</p>
                                   </div>
                                   <div className={sidebarMenuClicked ? "sso-manual-btn-sidebar-logo" : "sso-manual-btn-logo"}>
                                        <button>
                                            <img src='/assets/sso_google_logo_icon.png' alt='no img available'/>
                                        </button>
                                   </div>
                               </div>
                                <div className={sidebarMenuClicked ? "sso-manual-sidebar-btn-container" : "sso-manual-btn-container"}>
                                    <div className={sidebarMenuClicked ? "sso-manual-btn-sidebar-text" : "sso-manual-btn-text"}>
                                        <h4>All other connections</h4>
                                        <p>Choose from dozens of other identity providers.</p>
                                    </div>
                                    <div className={sidebarMenuClicked ? "sso-manual-btn-sidebar-logo" : "sso-manual-btn-logo"}>
                                        <button>
                                            <img src='/assets/sso_other_providers_icon.png' alt='no img available'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "3.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Integrating via the API</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you’d prefer to build and manage your own authentication UI, you can do so via the User Management <label className='demo-docs-hyperlink'>Authentication API</label>.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Examples of building custom UI are also <label className='demo-docs-hyperlink'>available on GitHub</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p>
                        
                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Email + Password</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Configuring email and password authentication and requirements</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        
                        </div>
                        
                    </div>
                }
                {emailAndPassword &&
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Email + Password</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Configuring email and password authentication and requirements</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Email + Password authentication allows users to sign up and sign in to your application using an email address and password combination. This is one of the most common forms of authentication and is enabled by default.</p>
                        
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Password configuration</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In the majority of cases, no additional configuration is required. However, depending on your application's security requirements you may wish to modify the password strength policy.</p>


                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Modifying the password strength policy</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A strong set of password rules are applied to all users by default. This ensures that:</p>
                        
                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>All passwords meet a minimum required length</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Low complexity passwords are rejected</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Breached passwords (flagged by <label className='demo-docs-hyperlink'>haveibeenpwned</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>) are rejected</p></li>
                            </ul>
                        
                            <p className={sidebarMenuClicked? "demo-docs-section-sidebar-p" : ""}>These defaults are recommended in the majority of cases, however, if you wish to modify the password policy you can do so in the Authentication section of the <label className='demo-docs-hyperlink'>WorkOS Dashbaord</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>
                        
                            <p className={sidebarMenuClicked? "demo-docs-section-sidebar-p" : ""}>AuthKit will enforce these within the sign up and password reset flows.</p>
                        
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/email_pwd_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Disabling Email + Password</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Disabling this method entirely will prevent users from signing up or signing in using a password. This is useful when you want to restrict access to your application to only those users who have been provisioned via SSO.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "3.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Integrating via the API</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you’d prefer to build and manage your own authentication UI, you can do so via the User Management <label className='demo-docs-hyperlink'>Authentication API</label>.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Examples of building custom UI are also <label className='demo-docs-hyperlink'>available on GitHub</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p>
                        
                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Social Login</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Quickly and easily integrate with social OAuth providers.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {socialLogin && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Social Login</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Quickly and easily integrate with social OAuth providers.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Social Login allows users to sign in or sign up using their existing credentials with OAuth providers such as Google, Microsoft or GitHub.</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Getting Started</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit will make the necessary API calls and route users through OAuth providers automatically during the authentication flow, though the relevant providers must first be configured and enabled.</p>
                        
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configure OAuth providers</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Configuration can be supplied via the <i>Authentication</i> section of the<label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>. WorkOS provides integration guides for common providers such as <label className='demo-docs-hyperlink'>Google</label>, <label className='demo-docs-hyperlink'>Microsoft</label>, and <label className='demo-docs-hyperlink'>GitHub</label>.</p>
                        
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/social_login_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Enable OAuth providers</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>After a provider has been configured and enabled, it will appear as a sign in option on the AuthKit authentication page.</p>

                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/social_login_img2.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "3.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Integrating via the API</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you’d prefer to build and manage your own authentication UI, you can do so via the User Management <label className='demo-docs-hyperlink'>Authentication API</label>.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Examples of building custom UI are also <label className='demo-docs-hyperlink'>available on GitHub</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p>
                        
                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Multi-Factor Authentication</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Add an additional layer of security to your application.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                }
                {multiFactorAuth && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Multi-Factor Authentication</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Add an additional layer of security to your application.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Multi-Factor Authentication (MFA) is an additional method of securing your application. MFA adds a layer of security during sign in that requires a user to provide an additional time-based one-time password (TOTP).</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Getting Started</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit will make the necessary API calls to handle first-time configuration of users’ MFA factors automatically, and validate one-time codes as part of the authentication flow.</p>
                        
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Enabling MFA</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>MFA can be enabled in the Authentication section of the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>. New and existing users will be required to set up multi-factor authentication with an authenticator app that supports one-time passcodes before they can sign in.</p>
                        
                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>The MFA requirement <strong>does not</strong> apply to SSO users.</p>
                                </div>
                            </div>


                            <div style={{marginTop: "5%"}} className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/mfa_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginTop: "5%"}} className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/mfa_img2.avif' alt="Enlargable" className="image" />
                            </div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "3.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Integrating via the API</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you’d prefer to build and manage your own authentication UI, you can do so via the User Management <label className='demo-docs-hyperlink'>Authentication API</label>.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Examples of building custom UI are also <label className='demo-docs-hyperlink'>available on GitHub</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p>
                        
                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Magic Auth</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Maximize user experience and security with passwordless authentication.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {magicAuth && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Magic Auth</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Maximize user experience and security with passwordless authentication.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Magic Auth is a passwordless authentication method that allows users to sign in or sign up via a unique, six digit one-time-use code sent to their email inbox.</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Getting Started</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit will make the necessary API calls to issue one-time-use codes via email and provide input verification and authentication automatically.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}><strong>Important:</strong> Emails will not be sent from the <strong>production</strong> environment until you have configured a domain. See the <label className='demo-docs-hyperlink'>Custom Domains</label> guide for more information on how to configure this.</p>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Enabling Magic Auth</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Magic Auth can be enabled in the <i>Authentication</i> section of the  <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>. Users will then be able to sign in or sign up via Magic Auth on the AuthKit authentication page.</p>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>One-time-use codes expire after <strong>10 minutes</strong>.</p>


                            <div style={{marginTop: "5%"}} className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/magic_auth_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginTop: "5%"}} className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/magic_auth_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginTop: "5%"}} className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/magic_auth_img3.avif' alt="Enlargable" className="image" />
                            </div>
                            
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "3.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Integrating via the API</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you’d prefer to build and manage your own authentication UI, you can do so via the User Management <label className='demo-docs-hyperlink'>Authentication API</label>.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Examples of building custom UI are also <label className='demo-docs-hyperlink'>available on GitHub</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p>
                        
                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Users and Organizations</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Flexible application modeling with user and membership features.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                }
                {usersAndOrganizations && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Users and Organizations</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Flexible application modeling with user and membership features.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Users</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The <label className='demo-docs-hyperlink'>User object</label> represents an identity that has access or owns artifacts in your application. A User object may not uniquely identify an individual person, since a person may present themselves as having multiple identities in the same system.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>What uniquely identifies a user is their <strong>email address</strong>, since having access to that email inbox ultimately gives access to all accounts based on that address.</p>
                    

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Authentication methods</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There may be multiple authentication methods on a single user object, such as <label className='demo-docs-hyperlink'>Email + Password</label> or <label className='demo-docs-hyperlink'>OAuth</label>. A user can sign in with any of the authentication methods associated with them, as long as you have enabled those authentication methods in the WorkOS Dashboard.</p>

                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/users_org_img1.png' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Identity linking</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Because a user is uniquely identified by their email address, you won’t have users with duplicate email addresses. WorkOS handles <label className='demo-docs-hyperlink'>identity linking</label> automatically.</p>
                            
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Email verification</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>All users will go through an initial <label className='demo-docs-hyperlink'>email verification process</label> by default. While this can be disabled in the WorkOS Dashboard, we recommend keeping it enabled so that any user object you get back from an authentication request is guaranteed to have a verified email address.</p>
                        
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This applies to all authentication methods, including OAuth and SSO. This unifying interface simplifies how your application considers the authenticity of your users.</p>
                        

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Domain-captured users</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If a user’s email domain matches an organization domain, they will <label className='demo-docs-hyperlink'>automatically be considered verified</label> and will not need to go through the email verification flow.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "3.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Organizations</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Organizations represent both a collection of users that your customer’s IT admin has control over and a workspace within which members collaborate. Organizations are a first-class concept in WorkOS and support a suite of features around organizational management.</p>
                       
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Organization memberships</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>An organization contains users as members. Organization membership allows you to model organizations as "workspaces" and user’s access to them with memberships.</p>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS organization memberships are designed to be flexible, and support any B2B app model. For example:</p>
                       
                            <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                                <img src='/assets/users_org_img2.png' alt="Enlargable" className="image" />
                            </div>


                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Multiple Workspaces:</strong> A self-serve productivity app, like Figma, where each user can be in any number of organizations, can create their own workspace and join any number of other workspaces.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Single Workspace:</strong> An app that has no collaboration outside a customer’s company, like an employee survey tool, where each user is in exactly one organization.</p></li>
                               
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>While these are two distinct models, your choice may depend on your go-to-market strategy, which may change over time. <strong>WorkOS User Management supports both</strong>.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Organization access</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>It’s common for users to create resources in B2B applications. You can use the organization as a container for these resources, so that access is dependent on a user’s access to the organization.</p>


                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This means when a user leaves an organization and is no longer a member, the data remains with the organization and not the user. Organizations provide the level of data ownership that B2B applications structure around.</p>


                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>While organization membership conveys the most basic form of access, you can attach more granular role information per member within your own application’s database.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Membership management</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Beyond manually adding or removing users to and from organizations as members, users can be automatically <label className='demo-docs-hyperlink'>Just-in-Time (JIT) provisioned</label> into a <label className='demo-docs-hyperlink'>domain-verified</label> organization if their email address matches the verified domain. This allows customers to quickly onboard teammates.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Users can also invite <label className='demo-docs-hyperlink'>individuals to organizations</label>, regardless of their email domain. This is handy for contractors within a company, or a collection of people without a shared domain.</p>


                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Sessions</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Learn more about integrating sessions.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {sessions && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Sessions</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn more about integrating sessions.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a user signs in to your app, a user session is created. Along with the <label className='demo-docs-hyperlink'>User object</label>, a successful authentication response will include an access token and refresh token. Your application can use these tokens to ensure that the user’s session is still active. </p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each user session can be viewed from within the WorkOS dashboard:</p>
                        </div>
                    </div>
                }
            </Styles>
        )
    }
}