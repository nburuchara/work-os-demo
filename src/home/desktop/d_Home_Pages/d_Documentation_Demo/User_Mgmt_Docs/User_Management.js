import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from '../d_Documentation_Components/d_Code_Snippet_Structure'
import { ColorRing } from 'react-loader-spinner'
import { Grid } from 'react-loader-spinner'
import { CSSTransition } from 'react-transition-group';

const Styles = styled.div  `

`

export default class UserManagement extends Component {
    constructor() {
        super()
        this.state = {

                //* - LOADING SCREEN - *//
            loadingScreen: false,

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
            sessions: false,
            invitations: false,
            emailVerification: false,
            domainCapture: false,
            identityLinking: false,
            jitProvisioning: false,
            roles: false,
            directoryProvisioning: false,
            organizationPolicies: false,
            impersonation: false,
            customEmails: false,
            scrollDistance: 0,

                //* - CODE SNIPPET - *//
            currentSelectedLanguage: "javascript",
            codeSnippet1CopyHovered: false,

                //* - IMAGE - *//
            enlargedImageId: null, // No image is enlarged initially

                //* - TWO TABS - *//
            usingNode: true,
            usingNodeHovered: false,
            usingNextJs: false,
            usingNextJsHovered: false,
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
        setTimeout (() => {
            this.setState({
                gettingStarted: true
            })
        }, 300)
        setTimeout (() => {
            this.scrollToTop('top')
        }, 450)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
          scrollDistance: window.scrollY,
        });
    };

    openFirstDoc = () => {
        setTimeout (() => {
            this.setState({
                gettingStarted: true
            })
        }, 300)
        setTimeout (() => {
            this.scrollToTop('top')
        }, 450)
    }

    getSelectedPage = (selectedPage) => {
        const pageMap = {
          "User Management": "gettingStarted",
          "Quick Start": "gettingStarted",
          "Example Apps": "exampleApps",
          "AuthKit": "authKit",
          "Email Domains": "emailDomains",
          "Branding": "branding",
          "Migrations": "migrations",
          "Single Sign-On": "singleSignOn",
          "Email + Password": "emailAndPassword",
          "Social Login": "socialLogin",
          "Multi-Factor Auth": "multiFactorAuth",
          "Magic Auth": "magicAuth",
          "Users and Organizations": "usersAndOrganizations",
          "Sessions": "sessions",
          "Invitations": "invitations",
          "Email Verification": "emailVerification",
          "Domain Capture": "domainCapture",
          "Identity Linking": "identityLinking",
          "JIT Provisioning": "jitProvisioning",
          "Roles": "roles",
          "Directory Provisioning": "directoryProvisioning",
          "Organization Policies": "organizationPolicies",
          "Impersonation": "impersonation",
          "Custom Emails": "customEmails",
        };
      
        const page = pageMap[selectedPage];
        if (page) {
          this.loadSelectedPage(page);
        } else {
          console.error("Unknown selected page:", selectedPage);
        }
    };

    scrollToTop = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' }); // Use 'auto' for instant scroll, or 'smooth' for smooth scroll
        }
    }

    loadSelectedPage = (selectedPage) => {
        this.hideAllPages()
        // setTimeout (() => {
        //     this.setState({
        //         loadingScreen: true,
        //     })
        // }, 600)
        setTimeout (() => {
            this.scrollToTop('top')
        }, 900)
        // setTimeout (() => {
        //     this.setState({
        //         loadingScreen: false,
        //     })
        // }, 1300)
        setTimeout (() => {
            this.setState({
                currentSelectedLanguage: "javascript",
                [`${selectedPage}`]: true
            })
        }, 750)
    }

    hideAllPages = () => {
        this.setState({
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
            sessions: false,
            invitations: false,
            emailVerification: false,
            domainCapture: false,
            identityLinking: false,
            jitProvisioning: false,
            roles: false,
            directoryProvisioning: false,
            organizationPolicies: false,
            impersonation: false,
            customEmails: false
        })
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.scrollToID !== prevProps.scrollToID) {
            this.getSelectedPage(this.props.scrollToID)
        }
        if (this.props.searchedTerm) {
            this.smoothScrollToId(this.props.searchedTerm.lastCat)
        }
    }

    smoothScrollToId = (id) => {
        const checkElementAndScroll = () => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
    
                setTimeout(() => {
                    this.props.clearLatestSearch();
                }, 1000);
            } else {
                // If the element is not yet in the DOM, keep checking
                requestAnimationFrame(checkElementAndScroll);
            }
        };
    
        // Add a small delay before starting the checking loop
        setTimeout(() => {
            requestAnimationFrame(checkElementAndScroll);
        }, 500); // You can adjust the delay as needed
    };

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

    toggleEnlarged = (imageId) => {
        this.setState(prevState => ({
            enlargedImageId: prevState.enlargedImageId === imageId ? null : imageId
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
        const { loadingScreen, gettingStarted, exampleApps, authKit, emailDomains, branding, migrations, singleSignOn, 
            emailAndPassword, socialLogin, multiFactorAuth, magicAuth, usersAndOrganizations, sessions, 
            invitations, emailVerification, domainCapture, identityLinking, jitProvisioning, roles, directoryProvisioning, organizationPolicies, impersonation, customEmails } = this.state;

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

                <CSSTransition in={loadingScreen}
                    timeout={300}
                    classNames="mini-search-bar"
                    unmountOnExit
                    >
                        <div id='loading' className={sidebarMenuClicked ? "loading-sidebar-container" : "loading-container"}>
                            <Grid
                            visible={true}
                            height="20"
                            width="20"
                            color='#6363f1'
                            />
                        </div>
                </CSSTransition>
            
                <CSSTransition in={gettingStarted}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>    
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>User Management</h1>
                            
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Easy to authenticate APIs designed to provide a flexible, secure, and fast integration.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction' ></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Integrating User Management features into your app is quick and easy. In this guide, we’ll take you through adding a hosted <i id='Before getting started'></i>authentication flow to your application using <label className='demo-docs-hyperlink'>AuthKit</label>.</p>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Before getting started</h1>
                            <div id='Install dependencies'></div>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To get the most out of this guide, you’ll need:</p>
                            <div></div>
                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <label className='demo-docs-hyperlink'>WorkOS account</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your WorkOS <label className='demo-docs-hyperlink'>API Key</label> and <label className='demo-docs-hyperlink'>Client ID</label><i id='Configure your project' ></i>.</p></li>
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
                            <div id='Configure a redirect URI'></div>
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

                            <div></div>

                            <div id='img1' className={`enlargable-image-container ${this.state.enlargedImageId === 'img1' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img1')}>
                                <img src='/assets/usr_mgmt_docs_redirects_img.avif' alt="Enlargable" className="image" />
                                <i id='Set secrets'></i>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Set secrets</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To make calls to WorkOS, provide the API key and the client ID. Store these values as managed secrets and pass them to the SDKs either as environment variables or directly in your app's configuration depending on your preferences.</p>
                    
                        
                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingNode ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingNodeClicked}
                                    onMouseEnter={this.usingNodeEnter}
                                    onMouseLeave={this.usingNodeLeave}
                                    style={{fontWeight: usingNode ? "bold" : "normal", backgroundColor: usingNodeHovered ? "#e6e6eb": "", width: "90%"}}
                                    >Using Node</button>
                                </div>
                                <div style={{borderBottom: usingNextJs ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingNextJsClicked}
                                    onMouseEnter={this.usingNextJsEnter}
                                    onMouseLeave={this.usingNextJsLeave}
                                    style={{fontWeight: usingNextJs ? "bold" : "normal", backgroundColor: usingNextJsHovered ? "#e6e6eb" : "", width: "90%"}}
                                    >Using Next.js</button>
                                </div>
                            </div>

                            <div ></div>
                            
                            
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
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.65%"}}>The code examples use your staging API keys when <label className='demo-docs-hyperlink'>signed in</label><span className='demo-docs-hyperlink-icon'><img id='Add AuthKit to your app' className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                            
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1  className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Add AuthKit to your app</h1>
                                </div>
                            </div>
                            <i id='Redirect users to AuthKit'></i>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Let's integrate the hosted authentication flow into your app.</p>
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Redirect users to AuthKit</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>First, we'll need to direct users to sign in (or sign up) using AuthKit before redirecting them back to your application. We'll do this by generating an AuthKit authorization URL server side and redirecting the user to it.</p>
                            <div id='You can use the optional state' className='api-keys'>
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
                            <div style={{paddingBottom:"3%"}} id='WorkOS will redirect'></div>
                            
                            <div></div>


                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p  style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.65%"}}>WorkOS will redirect to your <label className='demo-docs-hyperlink'>Redirect URI</label> if there is an issue generating an authorization URL. Read our <label id='Add a callback endpoint' className='demo-docs-hyperlink'>API Reference</label> for more details.</p>
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
                                    style={{fontWeight: usingNode ? "bold" : "normal", backgroundColor: usingNodeHovered ? "#e6e6eb": "", width: "90%"}}
                                    >Using Node</button>
                                </div>
                                <div style={{borderBottom: usingNextJs ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingNextJsClicked}
                                    onMouseEnter={this.usingNextJsEnter}
                                    onMouseLeave={this.usingNextJsLeave}
                                    style={{fontWeight: usingNextJs ? "bold" : "normal", backgroundColor: usingNextJsHovered ? "#e6e6eb" : "", width: "90%"}}
                                    >Using Next.js</button>
                                </div>
                            </div>

                            {/* <div id='Validate the authentication flow'></div> */}

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

                            <label style={{paddingBottom: sidebarMenuClicked ? "12%" : "", color: "transparent"}} id='Validate the authentication flow'> . </label>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Validate the authentication flow</h3>
                            <p>Navigate to the <label className='demo-docs-hyperlink'>authentication endpoint</label> we created and sign up for an account. You can then sign in with the newly created credentials and see the user listed in the <i>Users</i> section of the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>
                    
                            <div id='Handle the user session'></div>
                            <div id='img2' className={`enlargable-image-container ${this.state.enlargedImageId === 'img2' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img2')}>
                                <img src='/assets/usr_mgmt_docs_validate_auth_flow_img.avif' alt="Enlargable" className="image" />
                            </div>
                            <div id='For illustration purposes'></div>
                            
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
                            <div id='Create a session password'></div>
                            
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
                            <div id='Save the encrypted session'></div>
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
                </CSSTransition>

                <CSSTransition in={exampleApps}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div id='Example apps' style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Example Apps</h1>
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
                </CSSTransition>

                <CSSTransition in={authKit}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>AuthKit</h1>
                            
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}} id=''>Customizable sign-in UI that abstracts away all of the complexity associated with building secure authentication flows.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
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
                            <div></div>
                            <div style={{paddingBottom: sidebarMenuClicked ? "8%" : ""}} id='img3' className={`enlargable-image-container ${this.state.enlargedImageId === 'img3' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img3')}>
                                <img src='/assets/auth_kit_img1.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Authentication Flow'></i>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Authentication Flow</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit is conceptually similar to a <label className='demo-docs-hyperlink'>Social Login (OAuth)</label> experience, but with the added benefit of being able to authenticate users with any identity provider.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit sits outside of your application code. When a user initiates a sign-in request, your application redirects them to the AuthKit URL. The user then completes the authentication process with WorkOS before being returned to the application.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your application will exchange the resulting authorization code to retrieve an authenticated <label className='demo-docs-hyperlink'>User object</label> and handle the session.</p>
                        
                            <div id='img4' className={`enlargable-image-container ${this.state.enlargedImageId === 'img4' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img4')}>
                                <img src='/assets/authkit_img2.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='The AuthKit flow'>.</i>
                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>The AuthKit flow abstracts away many of the UX and WorkOS API calling concerns automatically, for more guidance on integrating with AuthKit, see the <label className='demo-docs-hyperlink'>Quick Start</label> guide.</p>
                                </div>
                            </div>
                            <div ></div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit also provides a sign-up flow for creating users. Available options are determined by the configured <label  className='demo-docs-hyperlink'>authentication methods</label>. If a user’s email address is associated with an SSO connection, they will <i id='Authentication Methods'></i>automatically be redirected to sign up via their IdP.</p>
                           
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Authentication Methods</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit supports all of the authentication methods available in WorkOS User Management and will automatically adjust the available options depending on the configured methods in the <i>Authentication</i> section of the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>
                            
                            <div id='img5' className={`enlargable-image-container ${this.state.enlargedImageId === 'img5' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img5')}>
                                <img src='/assets/authkit_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Email + Password authentication is enabled by default, though set up may be required to enable additional methods. See the relevant feature section for more information:</p>
                        
                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Single Sign-On</label></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Email + Password</label></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label  className='demo-docs-hyperlink'>Social Login</label></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Multi-Factor Auth</label></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label id = 'Integrating'className='demo-docs-hyperlink'>Magic Auth</label></p></li>
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
                </CSSTransition>

                <CSSTransition in={emailDomains}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Email Domains</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Guidance on configuring domains for emails.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Configuring a domain'></div>
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
                                <p id='Navigate to domain configuration' className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In Production environments, emails are sent from a custom domain when configured or from <span>workos.com</span> by default.</p>
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
                            <div id='img6' className={`enlargable-image-container ${this.state.enlargedImageId === 'img6' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img6')}>
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
                            <div id='img7' className={`enlargable-image-container ${this.state.enlargedImageId === 'img7' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img7')}>
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
                            <div id='img8' className={`enlargable-image-container ${this.state.enlargedImageId === 'img8' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img8')}>
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
                </CSSTransition>

                <CSSTransition in={branding}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Branding</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Customize AuthKit to fit natively with your app’s unique design.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
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
                            <div id='img9' className={`enlargable-image-container ${this.state.enlargedImageId === 'img9' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img9')}>
                                <img src='/assets/branding_img1.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Appearance'>.</i>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Appearance</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit supports both light and dark mode; each brand configuration option is split across both so that they can be configured independently. You can enforce a specific appearance, or allow the user's OS system settings to determine which to use.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The corner radius applied to UI elements can also be configured; a lower value will result in a more formal aesthetic while a higher value has a more rounded, playful feel.</p>
                            <div id='img10' className={`enlargable-image-container ${this.state.enlargedImageId === 'img10' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img10')}>
                                <img src='/assets/branding_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <i id='Assets'></i>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Assets</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can upload custom brand assets to display in AuthKit, transactional emails, and the <label className='demo-docs-hyperlink'>Admin Portal</label></p>
                            <div id='img11' className={`enlargable-image-container ${this.state.enlargedImageId === 'img11' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img11')}>
                                <img src='/assets/branding_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There are three types of uploadable assets:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Logo:</strong> Your full size brand logo, styles vary but this would typically include the wordmark.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Logo icon:</strong> A smaller, iconized version of the logo, this is often simply the logomark.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong  id='Logo style'>Favicon:</strong> The favicon is displayed in the browser tab alongside the address bar.</p></li>
                            </ul>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Logo style</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Either the logo or the logo icon can be displayed in AuthKit. To select which to use, click the logo in the AuthKit preview after uploading both assets.</p>
                            <div id='img12' className={`enlargable-image-container ${this.state.enlargedImageId === 'img12' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img12')}>
                                <img src='/assets/branding_img4.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Color'></i>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Color</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can control four colors across light and dark mode:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Page background color</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Button background colors</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Button text color</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Link color</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Other colors used in the UI, like the focus outline, hover styles, or borders, are created automatically based on the four colors you provide, ensuring a consistent look and feel.</p>
                            <div id='img13' className={`enlargable-image-container ${this.state.enlargedImageId === 'img13' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img13')}>
                                <img src='/assets/branding_img5.avif' alt="Enlargable" className="image" />
                            </div>

                            <i id='Copy'></i>
                            
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Copy</h1>
                            <div id='img14' className={`enlargable-image-container ${this.state.enlargedImageId === 'img14' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img14')}>
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
                </CSSTransition>

                <CSSTransition in={migrations}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Migrations</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Guidance on moving your existing users to WorkOS.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS provides a <label className='demo-docs-hyperlink'>range of guides</label> to help you migrate your existing integration <i id='Migrate from another service'></i>to WorkOS User Management.</p>

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
                                    <p id='Migrate an existing WorkOS integration' className='migration-container-see-all-p'>Migrate from a range of other services</p>
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
                </CSSTransition>

                <CSSTransition in={singleSignOn}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Single Sign-On</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Facilitate greater security, easier account management, and accelerated application onboarding and adoption.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Single Sign-On is the most frequently asked for requirement by organizations looking to adopt new SaaS applications. SSO enables authentication via an organization’s <label className='demo-docs-hyperlink'>identity provider (IdP)</label>.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This service is compatible with any IdP and supports both the <label className='demo-docs-hyperlink'>SAML</label> and <label className='demo-docs-hyperlink'>OIDC</label> protocols. It’s modeled to meet the <label className='demo-docs-hyperlink'>OAuth 2.0</label> framework specification, abstracting away the underlying authentication handshakes<i id='Getting Started'></i> between different IdPs.</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Getting Started</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit greatly simplifies the process of integrating SSO into your application. AuthKit will make the necessary API calls automatically and handle the routing of SSO users when their account<i id='Enable SSO'></i> is associated with an existing SSO connection.</p>
                        
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Enable SSO</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Navigate to the <i>Authentication</i> settings section in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> and enable Single Sign-On.</p>
                        
                            <div id='img15' className={`enlargable-image-container ${this.state.enlargedImageId === 'img15' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img15')}>
                                <img src='/assets/sso_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit will now automatically detect when a user is attempting to sign in via SSO and redirect them<i id='Test with the Test Identity Provider'></i> to the appropriate IdP.</p>
                        
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Test with the Test Identity Provider</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To confirm your Single Sign-On integration works correctly you can use the Test Identity Provider to simulate login flows end-to-end. Your staging environment includes a default Test Organization and active SSO connection configured with the Test Identity Provider.</p>

                            <div id='img16' className={`enlargable-image-container ${this.state.enlargedImageId === 'img16' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img16')}>
                                <img src='/assets/sso_img2.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Getting Started H3'></i>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Getting Started</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Log into the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> and navigate to the Test SSO page to get started with the Test IdP. This page outlines a number of different SSO scenarios you can follow and provides all the necessary information to complete the tests.</p>

                            <div id='img17' className={`enlargable-image-container ${this.state.enlargedImageId === 'img17' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img17')}>
                                <img src='/assets/sso_img3.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Service provider-initiated SSO'></i>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Service provider-initiated SSO</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This case is likely the first <label className='demo-docs-hyperlink'>login flow</label> you would test when implementing SSO in your app. The test simulates users initiating authentication from your sign-in page. In this scenario, the user enters their email in your app, gets redirected to the identity provider, and then<i id='Identity provider-initiated SSO'></i> is redirected back to your application.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Identity provider-initiated SSO</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This test simulates users initiating authentication from their identity provider. It is a common <label className='demo-docs-hyperlink'>login flow</label> that developers forget to consider. In the scenario, users log in to the identity provider directly, select your application from their list of SSO-enabled apps,<i id='Guest email domain'></i> and are redirected to your application upon successful authentication.</p>


                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Guest email domain</h3>
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This test simulates users authenticating with an email domain different from the verified domain of the test organization, <span>example.com</span>. A relevant scenario is authenticating freelance users,<i id='Error response'></i> whose email domain is not owned by the company.</p>
                            </div>
                            
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Error response</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This test simulates a generic <label className='demo-docs-hyperlink'>error response</label> from the user’s identity provider. In this scenario, SSO authentication has failed for the user. Below is an example of the error-related params passed to the <label className='demo-docs-hyperlink'>redirect URI</label> in your application.<i id='Test with other identity providers'></i></p>
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
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If your integration works with the Test Identity Provider, you can be sure it will work with other identity providers. However, it may be helpful to also learn about the setup process that your customers will go through<i id='Create an organization'></i> on their side, which varies depending on a specific identity provider.</p>


                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Create an organization</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To get started, you will need to <label className='demo-docs-hyperlink'>create an organization</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> in the WorkOS Dashboard. Organizations in WorkOS represent your customer, so by creating an organization, you can test your SSO connection the way your customers will experience it.</p>


                            <div id='img18' className={`enlargable-image-container ${this.state.enlargedImageId === 'img18' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img18')}>
                                <img src='/assets/sso_img4.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Create a connection'></i>

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

                            <div id='img19' className={`enlargable-image-container ${this.state.enlargedImageId === 'img19' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img19')}>
                                <img src='/assets/sso_img5.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Follow the Admin Portal instructions'></i>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Follow the Admin Portal instructions</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To complete the integration, you’ll have to also create an account with the identity provider you want to test with. After you have signed up with an identity provider of your choice, follow the corresponding Admin Portal instructions from the setup link. Once done, you can start testing your SSO integration with that identity provider.</p>


                            <div id='img20' className={`enlargable-image-container ${this.state.enlargedImageId === 'img20' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img20')}>
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
                                            <img id='Integrating via the API' src='/assets/sso_other_providers_icon.png' alt='no img available'/>
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
                </CSSTransition>

                <CSSTransition in={emailAndPassword}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Email + Password</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Configuring email and password authentication and requirements</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Email + Password authentication allows users to sign up and sign in to your application using an email address and password combination. This is one of the most common<i id='Password configuration'></i> forms of authentication and is enabled  by default.</p>
                            
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Password configuration</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In the majority of cases, no additional configuration is required. However, depending on your application's security requirements you<i id='Modifying the password strength policy'></i> may wish to modify the password strength policy.</p>


                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Modifying the password strength policy</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A strong set of password rules are applied to all users by default. This ensures that:</p>
                        
                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>All passwords meet a minimum required length</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Low complexity passwords are rejected</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Breached passwords (flagged by <label className='demo-docs-hyperlink'>haveibeenpwned</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>) are rejected</p></li>
                            </ul>
                        
                            <p className={sidebarMenuClicked? "demo-docs-section-sidebar-p" : ""}>These defaults are recommended in the majority of cases, however, if you wish to modify the password policy you can do so in the Authentication section of the <label className='demo-docs-hyperlink'>WorkOS Dashbaord</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>
                        
                            <p className={sidebarMenuClicked? "demo-docs-section-sidebar-p" : ""}>AuthKit will enforce these within the sign up and password reset flows.</p>
                        
                            <div id='img21' className={`enlargable-image-container ${this.state.enlargedImageId === 'img21' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img21')}>
                                <img src='/assets/email_pwd_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Disabling Email + Password</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Disabling this method entirely will prevent users from signing up or signing in using a password. This is useful when you want to restrict access to your application to only those users who have been provisioned via SSO.</p><i id='Integrating via the API'></i>
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
                </CSSTransition>

                <CSSTransition in={socialLogin}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Social Login</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Quickly and easily integrate with social OAuth providers.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Social Login allows users to sign in or sign up using their<i id='Getting Started'></i> existing credentials with OAuth providers such as Google, Microsoft or GitHub.</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Getting Started</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit will make the necessary API calls and route users through OAuth providers automatically during the authentication flow, though the<i id='Configure OAuth providers'></i> relevant providers must first be configured and enabled.</p>
                        
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configure OAuth providers</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Configuration can be supplied via the <i>Authentication</i> section of the<label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>. WorkOS provides integration guides for common providers such as <label className='demo-docs-hyperlink'>Google</label>, <label className='demo-docs-hyperlink'>Microsoft</label>, and <label className='demo-docs-hyperlink'>GitHub</label>.</p>
                        
                            <div id='img22' className={`enlargable-image-container ${this.state.enlargedImageId === 'img22' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img22')}>
                                <img src='/assets/social_login_img1.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Enable OAuth providers'></i>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Enable OAuth providers</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>After a provider has been configured and enabled, it will appear as a sign in option on the AuthKit authentication page.</p>

                            <div id='img23' className={`enlargable-image-container ${this.state.enlargedImageId === 'img23' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img23')}>
                                <img src='/assets/social_login_img2.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Integrating via the API'></i>

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
                </CSSTransition>

                <CSSTransition in={multiFactorAuth}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Multi-Factor Authentication</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Add an additional layer of security to your application.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Multi-Factor Authentication (MFA) is an additional method of securing your application. MFA adds a layer of security during sign in that requires a user to provide an additional<i id='Getting Started'></i> time-based one-time password (TOTP).</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Getting Started</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit will make the necessary API calls to handle first-time configuration of users’ MFA factors automatically, and validate one-time <i id='Enabling MFA'></i>codes as part of the authentication flow.</p>
                        
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


                            <div id='img24' style={{marginTop: "5%"}} className={`enlargable-image-container ${this.state.enlargedImageId === 'img24' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img24')}>
                                <img src='/assets/mfa_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <div id='img25' style={{marginTop: "5%"}} className={`enlargable-image-container ${this.state.enlargedImageId === 'img25' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img25')}>
                                <img src='/assets/mfa_img2.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Integrating via the API'></i>
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
                </CSSTransition>

                <CSSTransition in={magicAuth}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Magic Auth</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Maximize user experience and security with passwordless authentication.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Magic Auth is a passwordless authentication method that allows users to sign in or sign up via a unique, six digit one-time-use code <i id='Getting Started'></i>sent to their email inbox.</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Getting Started</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>AuthKit will make the necessary API calls to issue one-time-use codes via email and provide input verification and authentication automatically.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}><strong>Important:</strong> Emails will not be sent from the <strong>production</strong> environment until you have configured a domain. See the <label className='demo-docs-hyperlink'>Custom Domains</label> guide<i id='Enabling Magic Auth'></i> for more information on how to configure this.</p>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Enabling Magic Auth</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Magic Auth can be enabled in the <i>Authentication</i> section of the  <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>. Users will then be able to sign in or sign up via Magic Auth on the AuthKit authentication page.</p>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>One-time-use codes expire after <strong>10 minutes</strong>.</p>


                            <div id='img26' style={{marginTop: "5%"}} className={`enlargable-image-container ${this.state.enlargedImageId === 'img26' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img26')}>
                                <img src='/assets/magic_auth_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <div id='img27' style={{marginTop: "5%"}} className={`enlargable-image-container ${this.state.enlargedImageId === 'img27' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img27')}>
                                <img src='/assets/magic_auth_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <div id='img28' style={{marginTop: "5%"}} className={`enlargable-image-container ${this.state.enlargedImageId === 'img28' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img28')}>
                                <img src='/assets/magic_auth_img3.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Integrating via the API'></i>
                            
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
                </CSSTransition>

                <CSSTransition in={usersAndOrganizations}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Users and Organizations</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Flexible application modeling with user and membership features.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Users'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Users</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The <label className='demo-docs-hyperlink'>User object</label> represents an identity that has access or owns artifacts in your application. A User object may not uniquely identify an individual person, since a person may present themselves as having multiple identities in the same system.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>What uniquely identifies a user is their <strong>email address</strong>, since having access to that email inbox ultimately gives <i id='Authentication methods'></i> access to all accounts based on that address.</p>
                    

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Authentication methods</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There may be multiple authentication methods on a single user object, such as <label className='demo-docs-hyperlink'>Email + Password</label> or <label className='demo-docs-hyperlink'>OAuth</label>. A user can sign in with any of the authentication methods associated with them, as long as you have enabled those authentication methods in the WorkOS Dashboard.</p>

                            <div id='img29' className={`enlargable-image-container ${this.state.enlargedImageId === 'img29' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img29')}>
                                <img src='/assets/users_org_img1.png' alt="Enlargable" className="image" />
                            </div>
                            <i id='Identity Linking'></i>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Identity linking</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Because a user is uniquely identified by their email address, you won’t have users with duplicate email addresses.<i id='Email verification'></i> WorkOS handles <label className='demo-docs-hyperlink'>identity linking</label> automatically.</p>
                            
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Email verification</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>All users will go through an initial <label className='demo-docs-hyperlink'>email verification process</label> by default. While this can be disabled in the WorkOS Dashboard, we recommend keeping it enabled so that any user object you get back from an authentication request is guaranteed to have a verified email address.</p>
                        
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This applies to all authentication methods, including OAuth and SSO. This unifying interface simplifies how your<i id='Domain-captured users'></i> application considers the authenticity of your users.</p>
                        

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Domain-captured users</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If a user’s email domain matches an organization domain, they will <label className='demo-docs-hyperlink'>automatically be considered verified</label> and will not need to go through the email verification flow.</p><i id='Organizations'></i>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "3.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Organizations</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Organizations represent both a collection of users that your customer’s IT admin has control over and a workspace within which members collaborate. Organizations are a first-class concept in WorkOS and support a suite of features<i id='Organization memberships'></i> around organizational management.</p>
                       
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Organization memberships</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>An organization contains users as members. Organization membership allows you to model organizations as "workspaces" and user’s access to them with memberships.</p>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS organization memberships are designed to be flexible, and support any B2B app model. For example:</p>
                       
                            <div id='img29.5' className={`enlargable-image-container ${this.state.enlargedImageId === 'img29.5' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img29.5')}>
                                <img src='/assets/users_org_img2.png' alt="Enlargable" className="image" />
                            </div>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Multiple Workspaces:</strong> A self-serve productivity app, like Figma, where each user can be in any number of organizations, can create their own workspace and join any number of other workspaces.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Single Workspace:</strong> An app that has no collaboration outside a customer’s company, like an employee survey tool, where each user is in exactly<i id='While these are two distinct models'></i> one organization.</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>While these are two distinct models, your choice may depend on your go-to-market strategy, which may change over time. <strong>WorkOS User<i id='Organization access'></i> Management supports both</strong>.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Organization access</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>It’s common for users to create resources in B2B applications. You can use the organization as a container for these resources, so that access is dependent on a user’s access to the organization.</p>


                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This means when a user leaves an organization and is no longer a member, the data remains with the organization and not the user. Organizations provide the level of data ownership that B2B applications structure around.</p>


                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>While organization membership conveys the most basic form of access, you can attach more granular role information per member within<i id='Membership management'></i> your own application’s database.</p>

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
                </CSSTransition>

                <CSSTransition in={sessions}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Sessions</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn more about integrating sessions.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Inroduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a user signs in to your app, a user session is created. Along with the <label className='demo-docs-hyperlink'>User object</label>, a successful authentication response will include an access token and refresh token. Your application can use these tokens to ensure that the user’s session is still active. </p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each user session can be viewed from within the WorkOS dashboard:</p>
                        
                            <div id='img30' className={`enlargable-image-container ${this.state.enlargedImageId === 'img30' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img30')}>
                                <img src='/assets/sessions_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Navigate to <i>Users</i> and select a user. Then, switch to <i>Sessions</i> tab and click on a user<i id='Integrating Sessions'></i> session to get more information.</p>
                            
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Integrating Sessions</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Successful authentication responses will include both an access token and a refresh token. The access token should be stored as a secure cookie in the user’s browser and should be validated by the backend on each request. The refresh token should be persisted on your backend. Once the access token has expired, a new one can be obtained using the refresh token.</p>
                        
                            <div id='img31' className={`enlargable-image-container ${this.state.enlargedImageId === 'img31' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img31')}>
                                <img src='/assets/sessions_img2.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Access Token'></i> 

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Access Token</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you're using <label className='demo-docs-hyperlink'>Next SDK</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>, all the work of validating access tokens and refreshing expired tokens is handled for you (more framework support coming soon). Read on for details about how token handling works.</p>
                        
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The access token is a JSON Web Token (JWT), which should be validated on each request using a library like jose. The signing <label className='demo-docs-hyperlink'>JWKS</label> can be found at <span>http://api.workos.com/sso/jwks/&lt;clientId&gt;</span>. The JWT includes the following claims:</p>
                            
                                <ul>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>sub</span>: the WorkOS user id</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>sid</span>: the session ID (used for signing out)</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>iss</span>: <span>https://api.workos.com/</span>the session ID (used for signing out)</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>org_id</span>: The organization that was selected at sign-in time (if applicable)</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>exp</span>: the standard <span>expires_at</span> claim (the token should not be trusted after this time<i id='Refresh Token'></i>)</p></li> 
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>iat</span>: the standard <span>issued_at</span> claim</p></li>
                                </ul>
                            

                                <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Refresh Token</h3>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Refresh tokens should be persisted on the backend in, for instance, a database, cache, or secure http-only cookie. A new access token can be obtained by using the <label className='demo-docs-hyperlink'>authenticate with refresh token</label> endpoint. If the session is still active, a new access token and refresh token will be returned. Refresh tokens are single use, so be sure to replace the old<i id='Signing Out'></i> refresh token with the newly generated one.</p>

                                <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Signing Out</h3>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a user signs out of your app, the following steps should occur:</p>
                            

                                <ul>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Get the session id (<span>sid</span> claim) out of the access token.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Delete the user’s app session.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Redirect the user’s browser to logout endpoint endpoint (this will ensure the user’s</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The user will be redirected back to the URL<i id='Example'></i> configured as your <i>App homepage URL</i></p></li>
                                </ul>

                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Example</h3>

                            <CodeSnippetStruct 
                            id={16}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>
                            <i id='Configuring Sessions'></i>
                            
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configuring Sessions</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Using the WorkOS dashboard you can configure how Sessions work in your integration. You’ll find the settings in the <i>Authentication</i> section.</p>

                            <div id='img32' className={`enlargable-image-container ${this.state.enlargedImageId === 'img32' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img32')}>
                                <img src='/assets/sessions_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Maximum session length:</strong> the user will need to sign in again.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Access token duration:</strong> Your backend can verify the access token on each request (see the <label className='demo-docs-hyperlink'>Integrating Sessions</label> section above). It’s recommended to keep the access token duration short so that changes in the session are quickly reflected in your app.</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Additionally, make sure to review your settings in the <i>Redirect</i> section:</p>

                            <div id='img33' className={`enlargable-image-container ${this.state.enlargedImageId === 'img33' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img33')}>
                                <img src='/assets/sessions_img4.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='App homepage URL'></i>
                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>App homepage URL:</strong> Specifies where users are redirected after logging out. If not set, the user will be redirected to an error page.</p></li>
                            </ul>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Invitations</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Easily add users as members to an organization.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={invitations}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Invitations</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Easily add users as members to an organization.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Invitations are a way of adding a specific user as a member to an organization. They provide a flow for end-users to engage in <i id='The invitation flow'></i> collaboration that takes into consideration security and user choice.</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>The invitation flow</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each invitation is for a specific email address to a specific organization. Invitations are for both new users and existing users.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each invitation is a two step process:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The inviter expresses intent for someone to join an organization.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The invitee chooses to <i id='Inviting new users'></i>join that organization.</p></li>
                            </ul>


                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Inviting new users</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If an invitation is created for an email address that does not yet exist, an email is sent to that user with a link to sign up for your application and join the organization. </p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>As part of signing up, they automatically join the organization. If a user is invited to multiple organizations, they only join the organization for which they clicked<i id='Inviting existing users'></i> the invitation email for, indicating intent to join that specific organization.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Inviting existing users</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If an invitation is for an existing user, clicking the link in the email and signing in adds the user as a member to the organization. If the user is already signed-in, you can use the invitation code to validate that the signed-in user is eligible to use the invitation, by querying the <label className='demo-docs-hyperlink'>Invitation API</label>.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This offers choice for the end-user so that they aren’t<i id='Application-wide invitations'></i> automatically added to organizations that may be attempting phishing attacks.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Application-wide invitations</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Invitations do not have to be specific to an organization. An invitation sent without specifying an organization is an invitation to join the application. This allows your existing users help grow your application by inviting peers organically.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When sign-up is disabled, users cannot register for a new account through <label className='demo-docs-hyperlink'>AuthKit</label> or the <label className='demo-docs-hyperlink'>API</label>. When a valid invitation code is present in the sign-in flow, registration is opened up both in AuthKit and the API so that a new user may sign up.<i id='Sending invitations'></i> This lets you model your application as a closed-registration invitation-only system.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Sending invitations</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Invitations can be sent programmatically by your application with the <label className='demo-docs-hyperlink'>Invitation API</label>, or viewed and manually created in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p>

                            <div id='img34' className={`enlargable-image-container ${this.state.enlargedImageId === 'img34' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img34')}>
                                <img src='/assets/invitations_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Email Verification</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Learn more about the email verification process.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={emailVerification}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Email Verification</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn more about the email verification process.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Email verification is a process in which a new user must validate ownership of their email inbox before they can access<i id='The email verification flow'></i> the application, ensuring authenticity of inbox ownership.</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>The email verification flow</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Verification is a two-step process:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A user signs up to your application and an email is sent with a verification code.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The user inputs the verification code to complete the sign-up process.</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This applies to all authentication methods including <label className='demo-docs-hyperlink'>OAuth</label> and <label className='demo-docs-hyperlink'>SSO</label>. This unifying interface simplifies how your application considers the authenticity of your users.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Email verification<i id='Domain-captured users'></i> is always on</strong> to ensure that verified users are always returned to your application.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Domain-captured users</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If a user's email domain matches a <label className='demo-docs-hyperlink'>verified domain</label> attached to the organization they are attempting to join, they will automatically be considered verified and will not need to complete the email verification process.</p>
                            <i id='Sending verification requests'></i>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Sending verification requests</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>AuthKit</label> automatically handles email verification out of the box. When a user signs up via the hosted sign-up form, AuthKit will automatically send the verification email, prompt the user to input the code and route them through the authentication process before they gain access to the application.</p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Domain Capture</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Understanding domain verification and domain-captured users.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={domainCapture}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Domain Capture</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Understanding domain verification and domain-captured users.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Domain capture is a set of controls the IT admin of an organization can apply to everything related to its organizational resources on WorkOS. This currently enables <label className='demo-docs-hyperlink'>provisioning of new users</label> into an organization, but will soon support organization-level control of authentication and user membership policies.</p>
                        
                            <div id='img35' className={`enlargable-image-container ${this.state.enlargedImageId === 'img35' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img35')}>
                                <img src='/assets/domain_capture_img1.png' alt="Enlargable" className="image" />
                            </div>
                            <i id='Domain Verification'></i>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Domain Verification</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Everything starts by verifying a domain. Domain verification requires an IT admin to perform tasks that prove access to a domain’s configuration that only owners of the domain can have. This might include adding a TXT DNS record, verifying access to an administrator email inbox, or modifying a webpage on the domain’s website.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS provides a set of <label className='demo-docs-hyperlink'>APIs and Admin Portal flows</label> for the whole verification process. The result of a domain verification is that a domain is marked as verified for the specific organization that<i id='Proof of ownership'></i> initiated the verification, and the organization becomes <i>domain-verified</i>.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Proof of ownership</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Proof of ownership of the domain is a shortcut to proving that the IT admin has access to do everything else on the domain, including creation of email inboxes, accessing password-reset emails, and deletion of email accounts. When an organization has verified a domain, that organization has<i id='Manually adding a verified domain'></i> proven they have access to control every resource on that domain.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Manually adding a verified domain</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Verified domains may also be added via the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> without the need to have an IT admin complete the formal verification process.</p>

                            <div id='img36' className={`enlargable-image-container ${this.state.enlargedImageId === 'img36' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img36')}>
                                <img src='/assets/domain_capture_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>This is a useful shortcut if the IT admin has already proven ownership of the domain in another context and<i id='Domain uniqueness'></i> you do not want to enforce explicit domain verification.</p>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Domain uniqueness</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Only one organization can successfully verify a given domain. The alternative would create ambiguity as to which organization has ultimate control over resources on that domain.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you find that a customer is trying to verify a domain that has already been verified, you should intermediate between the two organizations and identify which should assume ultimate control over the domain.</p>
                            <i id='Domain-captured users'></i>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Domain-captured users</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once a domain is verified, all existing and future users with email addresses of that domain are considered <i>domain-captured users</i>. The organization that verified that domain now controls all of those users and can <label className='demo-docs-hyperlink'>automatically provision</label> users signing in with that organizations email domain.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Domain-captured users will automatically be considered verified and will not need to go through the <label className='demo-docs-hyperlink'>email verification</label> process.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The organization can also <label className='demo-docs-hyperlink'>enforce specific authentication methods</label> on its domain-captured users.</p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Identity Linking</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Automatic deduplication of user credentials across identity providers.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={identityLinking}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Identity Linking</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Automatic deduplication of user credentials across identity providers.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Users have unique email addresses, because each user’s access to their inbox represents ultimate access to all of their credentials and thus services they control. The <label className='demo-docs-hyperlink'>User object</label> unifies all of the identities they use so that your application does not have to consider different identity systems.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Identity linking is the process in which WorkOS safely deduplicates various credentials across identity providers to offer a single, unified user interface. It does this by using the <strong>email address</strong> as the unique identifier and access to the email inbox as the source of truth.</p>
                        
                            <div id='img37' className={`enlargable-image-container ${this.state.enlargedImageId === 'img37' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img37')}>
                                <img src='/assets/identity_linking_img1.png' alt="Enlargable" className="image" />
                            </div>
                            <i id='Credentials'></i>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Credentials</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A credential is an authentication method in a specific identity provider. For example, WorkOS offers a <label className='demo-docs-hyperlink'>password credential</label> for users to authenticate with. In this case, WorkOS is the identity provider and password is the authentication method.</p>


                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Google OAuth</label> is another credential, where Google is the identity provider and OAuth is the authentication method. </p>


                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Users may use multiple types of authentication methods based on preference, perhaps because one is more convenient to use on one of their devices<i id='Email verification'></i>, or they simply didn’t remember which method they used in the past.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Email verification</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS ensures all user emails are unique via an <label className='demo-docs-hyperlink'>email verification process</label>. By default, email verification is required by all users for authentication to succeed. This ensures that verified users are always returned to your application.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a user signs in with a new credential for the first time, e.g. they sign in through Google OAuth despite already having a password account, WorkOS will safely attach the new credential to the existing user. This is only performed if WorkOS can verify that the user has access to the email inbox referenced by that credential.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS considers it a <strong>security risk if the user cannot verify their email access</strong>. For some identity providers, a credential with an email address does not guarantee access to that inbox.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>WorkOS does not complete the authentication flow when a new identity cannot be safely linked to an existing user to ensure<i id='Domain-captured users'></i> account takeover risks are minimized.</p>
                                </div>
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Domain-captured users</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When an IT admin <label className='demo-docs-hyperlink'>verifies a domain for their organization</label>, it means they have access to create email inboxes. Thus, a verified domain implies the ability to verify all users with that email domain.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In practice, when a domain is verified and an SSO connection is configured, users who sign in through an organization’s IdP are automatically considered email verified if the domain matches. This shortcut reduces friction for your end users.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Users who sign-in through SSO with an email address that is not a verified domain, are not considered verified and will<i id='SSO identity linking'></i> have go through the <label className='demo-docs-hyperlink'>email verification</label> process.</p>
                                </div>
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>SSO identity linking</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Not only can a user have multiple credentials, they may also have multiple SSO credentials. This might happen when a user works with multiple organizations that require SSO authentication for all members. In this case, there is still only one <label className='demo-docs-hyperlink'>User object</label>, but they would choose which organization’s SSO IdP to use when authenticating.</p>

                            <div id='img38' className={`enlargable-image-container ${this.state.enlargedImageId === 'img38' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img38')}>
                                <img src='/assets/identity_linking_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The email verification safety still applies. When the user signs-in for the first time through an SSO IdP where the user’s email address is not captured by the organizations verified domain, the user is asked to verify their email before the SSO credential is linked to their account.</p>
                            <i id='Users not captured by an'></i>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Users not captured by an organization’s verified domain <strong>must be invited to the organization</strong> before they have access via SSO for the first time. This applies to non-domain-captured and <label className='demo-docs-hyperlink'>domain-captured</label> users on domains of other organizations.</p>
                        
                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>An <label className='demo-docs-hyperlink'>invitation</label> ensures that the authentication flow gives the user an opportunity to go to the SSO’s identity provider.</p>
                                </div>
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>JIT Provisioning</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Provision organization membership using Just-In-Time user provisioning.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={jitProvisioning}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>JIT Provisioning</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Provision organization membership using Just-In-Time user provisioning.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>JIT provisioning automatically assigns user membership to an organization when a user authenticates for the first time. It is helpful to provide access to an organization’s resources<i id='Domain-captured user provisioning'></i> without manual entry of all users by the IT admin.</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Domain-captured user provisioning</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Domain-captured</label> users can be automatically added as members to an organization using JIT provisioning. This is useful when your application or a specific organization wants to automatically gather a set of individuals to the same workspace based on email domain.</p>
                        
                            <div id='img39' className={`enlargable-image-container ${this.state.enlargedImageId === 'img39' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img39')}>
                                <img src='/assets/jit_prov_img1.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='SSO provisioning'></i>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>SSO provisioning</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a user who hasn’t signed in previously through their SSO IdP enters their email into the sign-in form, WorkOS APIs detects that their email domain matches the domain of the organization and offers authentication through SSO. This user is then JIT provisioned, and future sign in attempts detect that this user belongs to the organization.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This will not work for guests, who are members of an organization but are not<i id='Guest provisioning'></i> <label className='demo-docs-hyperlink'>domain-captured</label> by the organization.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Guest provisioning</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When an IT admin adds a guest email address that does not match the organization’s domain to their SSO IdP, the guest cannot sign in for the very first time through the IdP because WorkOS doesn’t have an association of this email address to the organization.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>An example scenario is an IT admin who wants to gate all contractor access through their IdP (to provide access revocation across applications) but the contractor wishes to use their own email address.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Invitations</label> can be used to enable this scenario. By inviting the contractor to the organization, the authentication flow will detect a possible SSO connection and offer authentication through the SSO IdP when signing in.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <label className='demo-docs-hyperlink'>domain-captured</label> user of one domain-verified organization that requires SSO may be a guest of another domain-verified organization that also requires SSO. If the user is a member of both organizations, that user has two SSO credentials, and will need to choose which organization to access at sign-in time before being redirected to the corresponding IdP.</p>

                            <div id='img40' className={`enlargable-image-container ${this.state.enlargedImageId === 'img40' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img40')}>
                                <img src='/assets/jit_prov_img2.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Disabling JIT provisioning'></i>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Disabling JIT provisioning</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>JIT membership provisioning can be disabled, if for example the IT admin wants only select individuals to have access to the organization.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When JIT provisioning is off for a domain-verified organization, new users with matching email addresses cannot be created in a self-serve manner.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Turning off JIT provisioning disables user provisioning for new users. This may be useful when an organization wants to limit access to its workspace. <label className='demo-docs-hyperlink'>Invitations</label> can be used to allow specific email addresses to sign up and be provisioned.</p>
                        
                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Roles</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Manage and assign roles to users.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={roles}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Roles</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Manage and assign roles to users.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A role represents a logical grouping of permissions, defining access control levels for users within your application. Roles are identified by a unique, immutable slug and are assigned to usersthrough  <label className='demo-docs-hyperlink'>organization memberships</label>.</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configure Roles</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Roles can be created and managed in the Roles section of the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <div id='img41' className={`enlargable-image-container ${this.state.enlargedImageId === 'img41' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img41')}>
                                <img  src='/assets/roles_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='api-keys'>
                                <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Default role</h3>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Role configuration occurs at the environment level. Each environment is seeded with a default <span>member</span> role, which is automatically assigned to every organization member. This default role cannot be deleted, but any role can be set as the default.</p>
                            
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you need to set default roles or other role configurations at the organization level, please <label className='demo-docs-hyperlink'>contact us</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>
                            
                                <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Assign roles</h3>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Organization memberships require a role. Every user with an organization membership is automatically assigned the default role when added to an organization. This role can be edited.</p>
                            </div>

                            <div id='img42' className={`enlargable-image-container ${this.state.enlargedImageId === 'img42' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img42')}>
                                <img  src='/assets/roles_img2.png' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can retrieve the role slug from the user's <label className='demo-docs-hyperlink'>organization membership object</label> to determine their access level and capabilities within your application.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Delete roles</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When roles are deleted, all organization memberships are reassigned to the default role. Role deletion happens asynchronously, so there may be a slight delay between deleting a role and updating all organization memberships.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>To migrate from one default role to another, set the new default role and delete the old one. All users will then be reassigned to the new default role.</p>
                                </div>
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Role-aware sessions</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a user signs into your app, a <label className='demo-docs-hyperlink'>user session</label> is initiated. The authentication response includes an access token, a JSON Web Token (JWT), with the "role" claim indicating the organization membership's role for that session.</p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Directory Provisioning</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Manage users and organization memberships via directory sync providers.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={directoryProvisioning}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Directory Provisioning</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Manage users and organization memberships via directory sync providers.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='This feature is currently in preview'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            
                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>This feature is currently in preview. Please reach out to <label className='demo-docs-hyperlink'>support@workos.com</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> or via your team's WorkOS Slack channel if you would like Directory Provisioning<i id='Introduction'></i> enabled.</p>
                                </div>
                            </div>
                           
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Directory provisioning gives an IT admin full control over access to an organization’s resources, without relying on manual entry. Users from a directory<i id='Initial Configuration'></i> are pre-provisioned and managed by their <label className='demo-docs-hyperlink'>Identity Provider</label>.</p>


                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Initial Configuration</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <label className='demo-docs-hyperlink'>Directory Sync</label> integration will need to be configured for every domain, i.e. organization, that wants to source users and organization memberships via directory provisioning. Directories can be set up via the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> with <label className='demo-docs-hyperlink'>Setup Links</label>. You can also <label className='demo-docs-hyperlink'>integrate the Admin<i id='Supported directory providers'></i> Portal with your app</label> to generate links to configure directories.</p>
                        
                        
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Supported directory providers</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The following directory sync providers are supported with directory provisioning:</p>
                        

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Okta SCIM</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Entra ID (Azure AD) SCIM</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Google Workspace</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>OneLogin SCIM</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>CyberArk SCIM</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>PingFederate SCIM</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>JumpCloud SCIM</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Rippling SCIM</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Generic SCIM</p></li>
                            </ul>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>If you are interested in directory provisioning support from a directory sync provider not listed above, please reach out to <label className='demo-docs-hyperlink'>support@workos.com</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span><i id='Provision users from a directory'></i> or via your team's WorkOS Slack channel.</p>
                                </div>
                            </div>


                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Provision users from a directory</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When directory provisioning is enabled and a directory sync provider integration is set up, <label className='demo-docs-hyperlink'>domain-captured</label> users from the directory sync provider will be provisioned and added as members to the organization.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Users with email addresses that do not match the organization’s domain will be sent an <label className='demo-docs-hyperlink'>invitation</label> to join the organization. On successful authentication,<i id='Manage users from a directory'></i> an organization membership will be added for these users.</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Manage users from a directory</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once directory provisioning is set up for an organization, any additional users, updates to current users, and de-provisioning events will flow through to user management.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Domain-captured</label> users will be fully managed by the directory, and updates to attributes will supersede updates from SSO, the API or manually in the dashboard.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Users with email addresses that do not match the organization’s domain will not be fully managed by the directory, and SSO, API or manual updates in the dashboard will persist.</p>
                        
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a user is de-provisioned in the directory, the corresponding organization membership will become inactive and the <label className='demo-docs-hyperlink'>status for the membership</label> will be <span>inactive</span>. De-provisioning will not automatically delete users or organization memberships.</p>
                            
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If a user is re-provisioned in the directory, the corresponding organization membership will be reactivated and the <label className='demo-docs-hyperlink'>status for the membership</label> will be <span>active</span>. The organization membership's pre-existing role will be retained.</p>
                            </div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                        <i id='Frequently asked questions'></i>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Frequently asked questions</h1>
                            <strong><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>I am using directory provisioning, but some directory users aren't being provisioned in user management. Why would a directory user not be provisioned in user management?</p></strong>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Directory users need to have a primary email address to be provisioned in user management. So if the directory user is missing a primary email, they won't be provisioned. Additionally, if the primary email of a directory user is shared by another directory user, only one will be provisioned in user management, as emails are unique to user management users.</p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Organization Authentication Policies</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Customize available authentication methods per organization.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={organizationPolicies}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Organization Policies</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Customize available authentication methods per organization.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>While your application provides a set of authentication methods, certain organizations may want to restrict their users to a subset of those methods for customized security constraints. These organization-level customizations can be <i id='Controls for domain-captured users'></i>configured on the organization page in the Dashboard.</p>
                        

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Controls for domain-captured users</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When an organization has a verified domain, the organization has full control over the authentication methods for its <label className='demo-docs-hyperlink'>domain-captured users.</label> The organization can enable any subset of the authentication methods that your application enables at the environment level.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Additionally, if the <label className='demo-docs-hyperlink'>MFA setting</label> for the environment is set to Optional, meaning that users who choose to enroll in MFA would get challenged at authentication time, an organization can require its domain-captured users to enroll in MFA.</p>
                        
                            <div id='img43' className={`enlargable-image-container ${this.state.enlargedImageId === 'img43' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img43')}>
                                <img  src='/assets/org_policies_img1.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Requiring SSO by default'></i>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Requiring SSO by default</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When an SSO connection is first setup on an organization, all non-SSO authentication methods for the organization are automatically disabled. It’s usually the case that an IT admin that sets up SSO wants that to be the only method of authentication. If an organization wants additional<i id='Controls for non-domain-captured users'></i>
 methods enabled, they can be manually turned on.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Controls for non-domain-captured users</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a user is domain-captured, their own organization can enforce specific authentication controls on them. The organizations the user may be a <label className='demo-docs-hyperlink'>guest member</label> of does not have the same set of controls for guests, as it may conflict with the controls of the domain-capturing organization.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>An organization may only require that its guest members authenticate through its own SSO connection. When this is enabled, guest members would login as they normally do, and upon <label className='demo-docs-hyperlink'>selecting this organization</label> to log into, the user would be prompted to sign-in at the organization’s SSO IdP. This acts as a secondary authentication method that this organization controls.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Organizations may also require that its guests enroll in MFA.</p>
                        
                            <div id='img44' className={`enlargable-image-container ${this.state.enlargedImageId === 'img44' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img44')}>
                                <img  src='/assets/org_policies_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Impersonation</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Learn how to sign into your application as one of your users.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={impersonation}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Impersonation</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn how to sign into your application as one of your users.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Impersonation allows administrators and support team members to assume the identity of any of your users, allowing them to reproduce or debug issues the user may be having in your application. The ability to see the application in an identical state as the user<i id='Enabling impersonation'></i> helps to greatly speed up the support process.</p>
                        
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Enabling impersonation</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Since impersonation allows any member of your WorkOS team to bypass the normal authentication flow for a user, it is not enabled by default in any of your environments. You must have the <strong>Admin</strong> role in order to enable impersonation for an environment.</p>
                        
                            <div id='img45' className={`enlargable-image-container ${this.state.enlargedImageId === 'img45' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img45')}>
                                <img  src='/assets/impersonation_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Navigate to <i>Authentication → User Impersonation</i> and select <i id='Using impersonation'>Configure</i> to enable impersonation for your current environment.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Using impersonation</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To impersonate one of your users, navigate to <i>Users</i>, select the user you'd like to impersonate, and under <i>Danger Zone</i> select <i>Impersonate User</i>.</p>
                        
                            <div id='img46' className={`enlargable-image-container ${this.state.enlargedImageId === 'img46' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img46')}>
                                <img  src='/assets/impersonation_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You will be prompted for the reason your are impersonating the user. It is optional to provide a reason in staging environments, and required in production. The reason will be recorded internally on the <span>session.created</span> event that is emitted whenever impersonation is used.</p>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If the user is a member of more than one organization, you will also need to choose which of these organizations you will be signing-into as the user. You can read more about users and organizations in our <label className='demo-docs-hyperlink'>dedicated guide</label>.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Finally, click <i>Impersonate</i> user to start an impersonation session, redirecting your browser to your application's callback endpoint with an authorization code for the impersonated user. You can read more about how to implement a callback endpoint in our <label className='demo-docs-hyperlink'>Quick Start guide</label>.</p>
                        
                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Impersonation sessions automatically expire after 60 minutes.</p>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Be aware that impersonating a user usually generally gives the same level of access as that user, allowing the impersonator to see the user's information. If your application contains sensitive user data, see the <label className='demo-docs-hyperlink'>Integrating impersonation</label> section about how to customize<i id='Auditing impersonation usage'></i> your application when using impersonation.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Auditing impersonation usage</h1>
                                
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>User sessions that were initiated via impersonation will be clearly marked as such when viewing their details in the WorkOS Dashboard. Additionally, WorkOS emits a <span>session.created</span> event which you can view under the events for the user, or listen for in your application via the <label className='demo-docs-hyperlink'>events API</label>.</p>
                            </div>

                            <div id='img47' className={`enlargable-image-container ${this.state.enlargedImageId === 'img47' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img47')}>
                                <img  src='/assets/impersonation_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The <span>session.created</span> event has an <span>impersonator</span> field that contains information about the mpersonation session, like the <span>email</span> of your team member who performed the impersonation,<i id='Integrating impersonation'></i> along with their <span>reason</span> for doing so.</p>
                            </div>


                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Integrating impersonation</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>No additional code is required to start using impersonation once you have integrated with WorkOS. However, many developers may want to augment their application's behavior when your team members are impersonating one of your users.</p>


                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The response from the <label className='demo-docs-hyperlink'>Authenticate with Code API</label> will include an additional <span>impersonator</span> field when the resulting session was created via impersonation, containg the impersonator's <span>email</span> and <span>reason</span> for using impersonation. Similarly, the <span>access_token</span> will include an <span>act</span> claim with the impersonator's <span>email</span>. Your application can use either in order to trigger impersonation-specific behavior.</p>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A common enhancement is to change the appearance of the application in order to make it obvious to the viewer they are currently impersonating one of your users, such as a "Staff Bar" displayed at the top of the viewport. You may also want to restrict access to sensitive views or<i id='Impersonation with authkit-nextjs'></i> redact certain fields in your application.</p>


                            <div className='api-keys'>
                                <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Impersonation with <span>authkit-nextjs</span></h3>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If using the <span>authkit-nextjs</span> <label className='demo-docs-hyperlink'>library</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>, impersonation can be easily added by using the provided helper component.</p>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>After completing the setup instructions in the <label className='demo-docs-hyperlink'>quick start</label> guide, add the Impersonation component to your app code.</p>

                            <CodeSnippetStruct 
                            id={17}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Impersonation component" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The above will automatically render a visually distinct frame on your page with an option to hide it or stop the impersonation session.</p>

                            <div id='img48' className={`enlargable-image-container ${this.state.enlargedImageId === 'img48' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img48')}>
                                <img  src='/assets/impersonation_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Custom Emails</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Learn how to send your own emails for user lifecycle events.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={customEmails}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "3%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Custom Emails</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn how to send your own emails for user lifecycle events.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "4.5%" : ""}} id='Introduction'></div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>By default, WorkOS will send emails related to User Management for you, such as password reset and Magic Auth. If you’d like to customize email content or have more control over deliverability, you can turn off the default emails and deliver your<i id='Disabling default emails'></i> own.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Disabling default emails</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To change email settings for an environment, navigate to <i>Authentication → Emails</i> and select <i>Configure emails</i>. You should have an <strong>Admin</strong> role for to update this setting.</p>

                            <div style={{marginBottom: "5%"}} id='img47.1' className={`enlargable-image-container ${this.state.enlargedImageId === 'img47.1' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img47.1')}>
                                <img  src='/assets/custom_email_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <div id='img47.2' className={`enlargable-image-container ${this.state.enlargedImageId === 'img47.2' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img47.2')}>
                                <img  src='/assets/custom_email_img2.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Invitations'></i>
                            

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Invitations</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once you’ve turned off the default user invitation emails, use the information below to send custom invitation emails.</p>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div style={{width: sidebarMenuClicked ? "35%" : ""}} className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>invitation.created</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "65%" : ""}} className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Event emitted when an invitation is created, which can be consumed using the events API or webhooks.</p>
                                </div>
                            </div>
                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div style={{width: sidebarMenuClicked ? "35%" : ""}} className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Get Invitation API</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "65%" : ""}} className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Used to retrieve the invitation object from the ID in the invitation created event.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div style={{width: sidebarMenuClicked ? "35%" : ""}} className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Send Invitation API</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "65%" : ""}} className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Used to create an invitation via the API without handling the<i id='Set up your user invitation URL'></i> invitation created event.</p>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Set up your user invitation URL</h3>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Make sure you have the correct user invitation URL set on your <i>Redirects</i> page. The default setting is the hosted AuthKit URL for accepting invitations. If you are using your own authentication UI, make sure the URL path is configured on your end to capture the <span>invitation_token</span> query parameter, and <label className='demo-docs-hyperlink'>pass it into one of the authenticate methods</label>.</p>
                            </div>

                            <div id='img47.3' className={`enlargable-image-container ${this.state.enlargedImageId === 'img47.3' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img47.3')}>
                                <img  src='/assets/custom_email_img3.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Handle manually creating invitations'></i>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>A</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Handle manually creating invitations</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you’re creating invitations using the WorkOS dashboard, you’ll need to handle <span>invitation.created</span> events using the events API or webhooks.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Due to security concerns, the events do not contain the sensitive information you’ll need to send the email. To retrieve the full invitation object with this information, use the invitation ID from the event to call the Get Invitation API.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You<i id='Handle invitations created via the API'></i> can skip this step if you don’t plan to create the invitations manually in the dashboard.</p>
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>B</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Handle invitations created via the API</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you’re creating invites via the Send Invitation API, you can send your own email using the information returned in the invitation object.</p>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you also plan to create invitations manually in the dashboard<i id='Send your email invitations'></i>, you can just handle <span>invitation.created</span> events as described above.</p>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Send your email</h3>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The recipient of the <span>email</span> should match the email attribute in the invitation object retrieved via the API. The body of the email should include a link where the user can accept the invitation. For most use cases, you can use the <span>accept_invitation_url</span> as this link.</p>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you aren’t using hosted AuthKit, and your invitation acceptance path diverges from this pattern, you may want to construct your own URL with the <span>token</span>, rather than using the <span>accept_invitation_url</span>.</p>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Additionally, if the invitation object contains an organization ID and/or an inviter user ID, you may want to include that information in the body of the email.</p><i id='Magic Auth'></i>
                                
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Magic Auth</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once you’ve turned off the default Magic Auth emails, use the information below to send custom Magic Auth emails.</p>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div style={{width: sidebarMenuClicked ? "40%" : "30%"}} className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>magic_auth.created</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "60%" : "70%"}} className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Event emitted when a user initiates a Magic Auth authentication, which can be consumed using the events API or webhooks.</p>
                                </div>
                            </div>
                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div style={{width: sidebarMenuClicked ? "40%" : "30%"}} className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Get Magic Auth API</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "60%" : "70%"}} className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Used to retrieve the Magic Auth object from the ID in the Magic Auth created event.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div style={{width: sidebarMenuClicked ? "40%" : "30%"}} className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Create Magic Auth API</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "60%" : "70%"}} className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Used to create a Magic Auth code via the<i id='Handle Magic Auth codes created via AuthKit'></i> API without handling the Magic Auth created event.</p>
                                </div>
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>A</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Handle Magic Auth codes created via AuthKit</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you are using hosted AuthKit, you’ll need to handle <span>magic_auth.created</span> events, using the events API or webhooks.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Due to security concerns, the events do not contain the sensitive information you’ll need to send the email. To retrieve the full Magic Auth object with this information, use the Magic Auth ID from the event to call the Get Magic Auth API.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You<i id='Handle Magic Auth codes created via the API'></i> can skip this step if you’re not using hosted AuthKit.</p>
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>B</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Handle Magic Auth codes created via the API</h3>
                                    </div>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you’re initiating Magic Auth authentication via the Create Magic Auth API, you can send your own email using the<i id='Send your email magic auth'></i> information returned in the Magic Auth object.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Send your email</h3>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The recipient of the <span>email</span> should match the email attribute for the Magic Auth object retrieved via the API, and the email should include the <span>code</span>. Recipients will input that code into AuthKit, or your own authentication UI, to authenticate into your application via Magic Auth.</p>
                            </div><i id='Email verification'></i>
                            
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Email verification</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once you’ve turned off the default email verification emails, use the information below to send custom email verification emails.</p>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div style={{width: sidebarMenuClicked ? "50%" : "30%"}} className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>email_verification.created</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "50%" : "70%"}} className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Event emitted when a user requires email verification, which can be consumed using the events API or webhooks.</p>
                                </div>
                            </div>
                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div style={{width: sidebarMenuClicked ? "50%" : "30%"}} className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Get Email Verification API</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "50%" : "70%"}} className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Used to retrieve the email verification object from the ID in the email verification created event.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div style={{width: sidebarMenuClicked ? "50%" : "30%"}} className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Email Verification Required error</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "50%" : "70%"}} className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Returned in the API when attempting to authenticate a<i id='Handle email verification codes created via AuthKit'></i> user that requires email verification.</p>
                                </div>
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>A</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Handle email verification codes created via AuthKit</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you are using hosted AuthKit, you’ll need to handle <span>email_verification.created</span> events, using the events API or webhooks.</p>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Due to security concerns, the events do not contain the sensitive information you’ll need to send the email. To retrieve the full email verification object with this information, use the email verification ID from the event to call the Get Email Verification API.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can<i id='Handle email verification codes created via the API'></i> skip this step if you’re not using hosted AuthKit.</p>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>B</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Handle email verification codes created via the API</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you are using the <label className='demo-docs-hyperlink'>authentication API</label>, an <span>email_verification_required</span> error will be returned if the user you’re authenticating needs to verify their email. This error contains an <span>email_verification_id</span> that can be used to call the Get Email Verification API endpoint which returns the email verification<i id='Send your email email verification'></i> object that contains the information needed to send the email.</p>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Send your email</h3>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The recipient of the <span>email</span> should match the email attribute for the email verification object retrieved via the API, and the email should include the <span>code</span>. Recipients will input that code into AuthKit, or your own authentication UI, to verify their email.</p>
                            </div><i id='Password reset'></i>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Password reset</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once you’ve turned off the default password reset emails, use the information below to send custom password reset emails.</p>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div style={{width: sidebarMenuClicked ? "50%" : "30%"}} className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>password_reset.created</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "50%" : "70%"}} className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Event emitted when a user requests to reset their password, which can be consumed using the events API or webhooks.</p>
                                </div>
                            </div>
                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div style={{width: sidebarMenuClicked ? "50%" : "30%"}} className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Get Password Reset API</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "50%" : "70%"}} className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Used to retrieve the password reset object from the ID in the password reset created event.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div style={{width: sidebarMenuClicked ? "50%" : "30%"}} className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Create Password Reset API</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "50%" : "70%"}} className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Used to create a password reset object via the API without handling the<i id='Set up your password reset URL'></i> password reset created event.</p>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Set up your password reset URL</h3>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Make sure you have the correct password reset URL set on your <i>Redirects</i> page. The default setting is the hosted AuthKit URL for resetting passwords. If you are using your own authentication UI, make sure the URL path is configured on your end to capture the <span>token</span> query parameter, and <label className='demo-docs-hyperlink'>use it to reset the password.</label></p>
                            </div>

                            <div id='img47.4' className={`enlargable-image-container ${this.state.enlargedImageId === 'img47.4' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img47.4')}>
                                <img  src='/assets/custom_email_img4.avif' alt="Enlargable" className="image" />
                            </div>
                            <i id='Handle password resets created via AuthKit'></i>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>A</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Handle password resets created via AuthKit</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you are using hosted AuthKit, you’ll need to handle <span>password_reset.created</span> events, using the events API or webhooks.</p>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Due to security concerns, the events do not contain the sensitive information you’ll need to send the email. To retrieve the full password reset object with this information, use the password reset ID from the event to call the Get Password Reset API.</p>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can skip this step if you’re not using hosted<i id='Handle password resets created via the API'></i> AuthKit.</p>
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>B</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Handle password resets created via the API</h3>
                                    </div>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you’re creating password resets via the Create Password Reset API, you can send your own email using the information returned in the password reset object.</p>
                            <i id='Send your email password reset'></i>
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Send your email</h3>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The recipient of the <span>email</span> should be the email attribute in the password reset object retrieved via the API. The body of the email should include a link where the user can reset their password. For most use cases, you can use the <span>password_reset_url</span> as this link.</p>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you aren’t using hosted AuthKit, and your password reset path diverges from this pattern, you may want to construct your own URL with the <span>password_reset_token</span>, rather than using the <span>password_reset_url</span>.</p>
                            </div>
                        </div>

                    </div>
                </CSSTransition>

            </Styles>
        )
    }
}

//* IMAGE 47 (latest)