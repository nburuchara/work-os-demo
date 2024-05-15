import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from '../d_Documentation_Components/d_Code_Snippet_Structure'

const Styles = styled.div  `

`

export default class UserManagement extends Component {
    constructor() {
        super()
        this.state = {

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
                <div className='demo-docs-container'>
                    <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section' >
                        <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>User Management</h1>
                        <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Easy to authenticate APIs designed to provide a flexible, secure, and fast integration.</p>
                    </div>
                    <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
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
                    <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                        
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


                    </div>    
                        
                </div>
            </Styles>
        )
    }
}