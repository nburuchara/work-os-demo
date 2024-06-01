import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from '../d_Documentation_Components/d_Code_Snippet_Structure'
import { CSSTransition } from 'react-transition-group';

const Styles = styled.div  `

`

export default class StandaloneAPIs extends Component {
    constructor() {
        super()
        this.state = {

                //* - STANDALONE APIS SECTIONS - *//
            gettingStarted: false,
            testSSO: false,
            exampleApps: false,
            signInUX: false,
            loginFlows: false,
            redirectURIs: false,
            signingCertificates: false,
            jitProvisioning: false,
            launchChecklist: false,
            faqForItTeams: false,
            samlSecurity: false,
            directorySync: false,
            quickStartDirectorySync: false,
            exampleAppsDirectorySync: false,
            handleInactieUsers: false,
            understandingEvents: false,
            userAttributes: false,
            roleData: false,
            roleArchitecture: false,
            adminPortal: false,
            exampleAppsAdminPortal: false,
            customBranding: false,
            auditLogs: false,
            exportingEvents: false,
            metadataScheme: true,


                //* - CODE SNIPPET - *//
            currentSelectedLanguage: "javascript",
            codeSnippet1CopyHovered: false,
    
                //* - IMAGE - *//
            enlargedImageId: null, // No image is enlarged initially

                //* - - LANGUAGES (for code snippets) - - *//
            curlSelected: false,
            javascriptSelected: false,
            phpSelected: false,
            rubySelected: false,
            laravelSelected: false,
            pythonSelected: false,
            javaSelected: false,
            goSelected: false,
            dotnetSelected: false,
            jsonSelected: false,
            yarnSelected: false,
            bundlerSelected: false,
            gradleSelected: false,

                //* - THREE TAB OPTIONS - *//
            usingOption1: true,
            usingOption2: false,
            usingOption3: false,

                //* - SIGN IN UX COMPONENTS - *// 
            showSignIn1: true,
            showSignIn2: true,
            showSignIn3: true,
            showSignedIn1: false,
            showSignedIn2: false,
            showSignedIn3: false,
            email1Empty: false,
            email2Empty: false,
            email13mpty: false,
            password1Empty: false,
            password2Empty: false,
            password3Empty: false,
            sampleEmail1: "",
            sampleEmail2: "",
            sampleEmail3: "",
            sampleEmail1Err: "",
            sampleEmail2Err: "",
            sampleEmail3Err: "",
            showSampleEmail1Err: false,
            showSampleEmail2Err: false,
            showSampleEmail3Err: false,
            showSamplePassword1Err: false,
            showSamplePassword2Err: false,
            showSamplePassword3Err: false,
            samplePassword1Err: "",
            samplePassword2Err: "",
            samplePassword3Err: "",
            samplePassword1: "",
            samplePassword2: "",
            samplePassword3: "",
            login1Successful: false,
            login2Successful: false,
            login3Successful: false,
            login1Hide: true,
            login2Hide: false,
            showEmail2Input: true,
            showEmail2Confirmed: false,

                //* - LAUNCH CHECKLIST COMPONENTS - *//
            launchCheck1: false,
            launchCheck2: false,
            launchCheck3: false,
            launchCheck4: false,
            launchCheck5: false,
            launchCheck6: false,
            launchCheck7: false,
            launchCheck8: false,

                //* - TWO TAB OPTIONS - //*

            usingLifecycle: true,
            usingLifecycleHovered: false,
            usingPayload: false,
            usingPayloadHovered: false,

            //* - - HIDDEN DROPDOWN TOGGLE(S) VAR(S) - *//
            hiddenDropdownBtn1: false,

        }
    }


    toggleEnlarged = (imageId) => {
        this.setState(prevState => ({
            enlargedImageId: prevState.enlargedImageId === imageId ? null : imageId
        }));
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

    usingOption1Enter = () => { this.setState({usingOption1Hovered: true}) }
    usingOption1Leave = () => { this.setState({usingOption1Hovered: false}) }
    
    usingOption2Enter = () => { this.setState({usingOption2Hovered: true}) }
    usingOption2Leave = () => { this.setState({usingOption2Hovered: false}) }
    
    usingOption3Enter = () => { this.setState({usingOption3Hovered: true}) }
    usingOption3Leave = () => { this.setState({usingOption3Hovered: false}) }

    usingOption1Clicked = () => { this.setState({usingOption1: true, usingOption2: false, usingOption3: false}) }
    usingOption2Clicked = () => { this.setState({usingOption1: false, usingOption2: true, usingOption3: false}) }
    usingOption3Clicked = () => { this.setState({usingOption1: false, usingOption2: false, usingOption3: true}) }

    handleChange = (event, input) => {

        const capitalizedInput = input.charAt(0).toUpperCase() + input.slice(1);

        this.setState({
            [event.target.id] : event.target.value,
        })
        if (event.target.value !== '') {
            this.setState ({
                [`${input}Empty`]: false,
                [`showSample${capitalizedInput}Err`]: false
            })
        }
    }

    isValidEmail = (email) => {
        // Regular expression for validating email addresses
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    continueBtn1Clicked = () => {

        if (this.state.sampleEmail1 === "") {
            this.setState({
                email1Empty: true,
                showSampleEmail1Err: true,
                sampleEmail1Err: "Email is required"
            })
        } else if (!this.isValidEmail(this.state.sampleEmail1)) {
            this.setState({
                email1Empty: true,
                showSampleEmail1Err: true,
                sampleEmail1Err: "Email should be valid"
            })
        }

        if (this.state.login1Hide === true) {
            if (this.state.samplePassword1 === "") {
                this.setState({
                    password1Empty: true,
                    showSamplePassword1Err: true,
                    samplePassword1Err: "Password is required"
                })
            }

            if (this.state.sampleEmail1 !== "" && this.isValidEmail(this.state.sampleEmail1) && this.state.samplePassword1 !== "") {
                this.setState({
                    login1Successful: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            login1Successful: false,
                            showSignIn1: false,
                            showSignedIn1: true
                        })
                    }, 1000)
                })
            }
        } else {
            if (this.state.sampleEmail1 !== "" && this.isValidEmail(this.state.sampleEmail1)) {
                this.setState({
                    login1Successful: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            login1Successful: false,
                            showSignIn1: true,
                            login1Hide: true
                        })
                    }, 1000)
                })
            }
        }


        
    }

    continueBtn2Clicked = () => {

        if (this.state.sampleEmail2 === "") {
            this.setState({
                email2Empty: true,
                showSampleEmail2Err: true,
                sampleEmail2Err: "Email is required"
            })
        } else if (!this.isValidEmail(this.state.sampleEmail2)) {
            this.setState({
                email2Empty: true,
                showSampleEmail2Err: true,
                sampleEmail2Err: "Email should be valid"
            })
        }

        if (this.state.login2Hide === false) {
            if (this.state.sampleEmail2 !== "" && this.isValidEmail(this.state.sampleEmail2)) {
                this.setState({
                    login2Successful: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            login2Successful: false,
                            showEmail2Input: false,
                            showEmail2Confirmed: true,
                            login2Hide: true,
                        })
                    }, 1000)
                })
            }
        } else {

            if (this.state.samplePassword2 === "") {
                this.setState({
                    password2Empty: true,
                    showSamplePassword2Err: true,
                    samplePassword2Err: "Password is required"
                })
            }

            if (this.state.sampleEmail2 !== "" && this.isValidEmail(this.state.sampleEmail2) && this.state.samplePassword2 !== "") {
                this.setState({
                    login2Successful: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            login2Successful: false,
                            showSignIn2: false,
                            showSignedIn2: true
                        })
                    }, 1000)
                })
            }
        }

        

        
    }

    continueBtn3Clicked = () => {
        if (this.state.sampleEmail3 === "") {
            this.setState({
                email3Empty: true,
                showSampleEmail3Err: true,
                sampleEmail3Err: "Email is required"
            })
        } else if (!this.isValidEmail(this.state.sampleEmail3)) {
            this.setState({
                email3Empty: true,
                showSampleEmail3Err: true,
                sampleEmail3Err: "Email should be valid"
            })
        }

        if (this.state.samplePassword3 === "") {
            this.setState({
                password3Empty: true,
                showSamplePassword3Err: true,
                samplePassword3Err: "Password is required"
            })
        }

        if (this.state.sampleEmail3 !== "" && this.isValidEmail(this.state.sampleEmail3) && this.state.samplePassword3 !== "") {
            this.setState({
                login3Successful: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        login3Successful: false,
                        showSignIn3: false,
                        showSignedIn3: true
                    })
                }, 1000)
            })
        }


    }

    startOver1Clicked = () => {
        this.setState({
            login1Successful: false,
            showSignIn1: true,
            login1Hide: true,
            sampleEmail1: "",
            samplePassword1: "",
            showSignedIn1: false
        })
    }

    startOver2Clicked = () => {
        this.setState({
            login2Successful: false,
            showSignIn2: true,
            showEmail2Input: true,
            showEmail2Confirmed: false,
            sampleEmail2: "",
            samplePassword2: "",
            login2Hide: false,
            showSignedIn2: false
        })
    }

    startOver3Clicked = () => {
        this.setState({
            login3Successful: false,
            showSignIn3: true,
            sampleEmail3: "",
            samplePassword3: "",
            showSignedIn3: false
        })
    }

    useSingleSignOnClicked = () => {
        this.setState({
            login1Hide: false
        })
    }
 
    checklistClicked = (num) => {
        this.setState((prevState) => ({
            [`launchCheck${num}`]: !prevState[`launchCheck${num}`]
        }));
    }

    usingLifecycleEnter = () => { this.setState({usingLifecycleHovered: true}) }
    usingLifecycleLeave = () => { this.setState({usingLifecycleHovered: false}) }
    
    usingPayloadEnter = () => { this.setState({usingPayloadHovered: true}) }
    usingPayloadLeave = () => { this.setState({usingPayloadHovered: false}) }

    usingLifecycleClicked = () => { this.setState({usingLifecycle: true, usingPayload: false}) }
    usingPayloadClicked = () => { this.setState({usingLifecycle: false, usingPayload: true}) }

    hiddenDropdownBtnClicked = (num) => {
        this.setState((prevState) => ({
            [`hiddenDropdownBtn${num}`]: !prevState[`hiddenDropdownBtn${num}`]
        }));
    }
    
    render () {

                //* - STANDALONE APIS SECTIONS VAR(S) - *//
        const { gettingStarted, testSSO, exampleApps, signInUX, loginFlows, redirectURIs, signingCertificates, jitProvisioning, launchChecklist, faqForItTeams,       samlSecurity, directorySync, quickStartDirectorySync, exampleAppsDirectorySync, handleInactieUsers, understandingEvents, userAttributes, roleData, roleArchitecture, adminPortal, exampleAppsAdminPortal, customBranding, auditLogs, exportingEvents, metadataScheme} = this.state;

            //* - DOCS UI SIZE ADJUSTMENT VAR(S) - *//
        const { sidebarMenuClicked } = this.props;

            //* - ENLARGING IMG VAR(S) - *//
        const  { enlarged } = this.state;

                //* - LANGUAGE SELECTION VAR(S) - *//
        const { javascriptSelected, yarnSelected, phpSelected, rubySelected, bundlerSelected, laravelSelected, pythonSelected, javaSelected, gradleSelected, goSelected, dotnetSelected } = this.state;

                //* - THREE TAB SELECTION VAR(S) - *//
        const { usingOption1, usingOption2, usingOption3, usingOption1Hovered, usingOption2Hovered, usingOption3Hovered } = this.state;

                //* - - SIGN IN UX VAR(S) - - *//
        const { showSignIn1, showSignedIn1, email1Empty, password1Empty, showSampleEmail1Err, showSamplePassword1Err, login1Successful, login1Hide,
                showSignIn2, showSignedIn2, email2Empty, password2Empty, showSampleEmail2Err, showSamplePassword2Err, login2Successful, login2Hide, showEmail2Input, showEmail2Confirmed, showSignIn3, showSignedIn3, email3Empty, password3Empty, showSampleEmail3Err, showSamplePassword3Err, login3Successful} = this.state;

                //* - - LAUNCH CHECKLIST VAR(S) - - *//
        const { launchCheck1, launchCheck2, launchCheck3, launchCheck4, launchCheck5, launchCheck6, launchCheck7, launchCheck8 } = this.state;

                //* - - TWO TAB SELECTION VAR(S) - - *//
        const { usingLifecycle, usingLifecycleHovered, usingPayload, usingPayloadHovered } = this.state;

                //* - - HIDDEN DROPDOWN TOGGLE(S) VAR(S) - *//
        const { hiddenDropdownBtn1 } = this.state;

        return(
            <Styles>
                {gettingStarted && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Single Sign-On</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Facilitate greater security, easier account management, and accelerated application onboarding and adoption.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Choose your integration approach</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There are two ways to integrate Single Sign-On (SSO) with WorkOS:</p>
                       
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>A</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>With the standalone SSO API</h3>
                                    </div>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The standalone API (covered in this document), is a standalone API for integrating into an existing auth stack.</p>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>B</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Using WorkOS User Management</h3>
                                    </div>
                                </div>
                            </div>
                       
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>User Management is a complete authentication platform which includes SSO out of the box.</p>
                       
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>How Single Sign-On works</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Single Sign-On is the most frequently asked for requirement by organizations looking to adopt new SaaS applications. SSO enables authentication via an organization’s <label className='demo-docs-hyperlink'>identity provider (IdP)</label>.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This service is compatible with any IdP that supports either the <label className='demo-docs-hyperlink'>SAML</label> or <label className='demo-docs-hyperlink'>OIDC</label> protocols. It’s modeled to meet the <label className='demo-docs-hyperlink'>OAuth 2.0</label> framework specification, abstracting away the underlying </p>

                            <div id='img48' className={`enlargable-image-container ${this.state.enlargedImageId === 'img48' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img48')}>
                                <img  src='/assets/sso_section_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS SSO API acts as authentication middleware and intentionally does not handle user database management for your application. This is by design, to minimize vendor lock-in.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What you’ll build</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In this guide, we’ll take you from learning about Single Sign-On and POC-ing all the way through to authenticating your first user via the WorkOS SSO API.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Before getting started</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To get the most out of this guide, you’ll need:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <label className='demo-docs-hyperlink'>WorkOS Account</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A local app to integrate SSO with.</p></li>
                            </ul>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Reference these <label className='demo-docs-hyperlink'>example apps</label> as you follow this guide.</p>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>API object definitions</h1>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Connection</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>The method by which a group of users (typically in a single organization) sign in to your application.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Profile</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Represents an authenticated user. The Profile object contains information relevant to a user in the form of normalized and raw attributes.</p>
                                </div>
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Add SSO to your app</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Let’s build the SSO authentication workflow into your app.</p>
                        
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Install the WorkOS SDK</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS offers native SDKs in several popular programming languages. Choose a language below to see instructions in your application’s language.</p>
                        
                            <div className='demo-docs-languages'>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("javascript")} 
                                    style={{boxShadow: javascriptSelected || yarnSelected ? "0 0 0 2px #6363f1" : "none", border: javascriptSelected || yarnSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{marginTop: sidebarMenuClicked ? "15%" : "0%"}} src='/assets/docs_api_reference_node_language_icon.png' alt='img not available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6.5%"}}>Node.js</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("ruby")}
                                    style={{boxShadow: rubySelected || bundlerSelected ? "0 0 0 2px #6363f1" : "none", border: rubySelected || bundlerSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "43%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "30%" : "20%"}} src='/assets/docs_api_reference_ruby_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6%", fontSize: sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""}}>Ruby</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("laravel")}
                                    style={{boxShadow: laravelSelected ? "0 0 0 2px #6363f1" : "none", border: laravelSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "50%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "30%" : "20%"}} src='/assets/docs_api_reference_laravel_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6.5%"}}>Laravel</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("python")}
                                    style={{boxShadow: pythonSelected ? "0 0 0 2px #6363f1" : "none", border: pythonSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "52%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "27%" : "17%"}} src='/assets/docs_api_reference_python_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6%"}}>Python</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='demo-docs-languages'>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("php")}
                                    style={{boxShadow: phpSelected ? "0 0 0 2px #6363f1" : "none", border: phpSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "77.5%"}} src='/assets/docs_api_reference_php_language_icon.png' alt='img not available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "0px"}}>PHP</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("go")}
                                    style={{boxShadow: goSelected ? "0 0 0 2px #6363f1" : "none", border: goSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "78%", marginTop: sidebarMenuClicked ? "15%" : "7.5%"}} src='/assets/docs_api_reference_go_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "2%"}}>Go</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("java")}
                                    style={{boxShadow: javaSelected || gradleSelected ? "0 0 0 2px #6363f1" : "none", border: javaSelected || gradleSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "52%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "22%" : "17%"}} src='/assets/docs_api_reference_java_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6%"}}>Java</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("dotnet")}
                                    style={{boxShadow: dotnetSelected ? "0 0 0 2px #6363f1" : "none", border: dotnetSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{marginTop: sidebarMenuClicked ? "18%" : "10%"}} src='/assets/docs_api_reference_net_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6.3%"}}>.NET</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""} style={{color: "#5e626a", fontSize: "80%"}}>Don't see an SDK you need? <label className='client-library-contact-us'>Contact us</label> to request and SDK!</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Install the SDK using the command below.</p>

                            <CodeSnippetStruct
                            id={0}
                            headerTabs={2}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Install the WorkOS SDK"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}
                            />

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Set secrets</h3>
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To make calls to WorkOS, provide the API key and, in some cases, the client ID. Store these values as managed secrets, such as <span>WORKOS_API_KEY</span> and <span>WORKOS_CLIENT_ID</span>, and pass them to the SDKs either as environment variables or directly in your app’s configuration based on your preferences.</p>
                            </div>
                            
                            <CodeSnippetStruct 
                            id={4}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Environment variables" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>The code examples use your staging API keys when <label className='demo-docs-hyperlink'>signed in</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span>.</p>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Add an endpoint to initiate SSO</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The endpoint to initiate SSO via the WorkOS API is responsible for handing off the rest of the authentication workflow to WorkOS. There are a couple configuration options shown below.</p>
                        
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can use the optional <span>state</span> parameter to encode arbitrary information to help restore application state between redirects.</p>
                            </div>

                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingOption1 ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingOption1Clicked}
                                    onMouseEnter={this.usingOption1Enter}
                                    onMouseLeave={this.usingOption1Leave}
                                    style={{fontWeight: usingOption1 ? "bold" : "normal", backgroundColor: usingOption1Hovered ? "#e6e6eb": ""}}
                                    >Using organization ID</button>
                                </div>
                                <div style={{borderBottom: usingOption2 ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingOption2Clicked}
                                    onMouseEnter={this.usingOption2Enter}
                                    onMouseLeave={this.usingOption2Leave}
                                    style={{fontWeight: usingOption2 ? "bold" : "normal", backgroundColor: usingOption2Hovered ? "#e6e6eb" : ""}}
                                    >Using connection ID</button>
                                </div>
                                <div style={{borderBottom: usingOption3 ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingOption3Clicked}
                                    onMouseEnter={this.usingOption3Enter}
                                    onMouseLeave={this.usingOption3Leave}
                                    style={{fontWeight: usingOption3 ? "bold" : "normal", backgroundColor: usingOption3Hovered ? "#e6e6eb" : ""}}
                                    >{sidebarMenuClicked ? <label style={{cursor: "pointer"}}>Using <br/>provider</label> : "Using provider" }</button>
                                </div>
                            </div>

                            {usingOption1 && 
                                <div>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Use the organization parameter when authenticating a user by their specific organization. This is the preferred parameter for SAML and OIDC connections.</p>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The example below uses the Test Organization that is available in your staging environment and uses a mock identity provider. It’s created to help you test your SSO integration without having to go through the process of setting up an account with a real identity provider.</p>
                                
                                    <CodeSnippetStruct 
                                    id={18}
                                    headerTabs={0}
                                    sideBarOpen={sidebarMenuClicked}
                                    snippet="Authentication Endpoint" 
                                    updateSelectedLang={this.newLangSelected}
                                    selectedLang={this.state.currentSelectedLanguage}/>
                        
                                </div>
                            }

                            {usingOption2 && 
                                <div>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can also use the connection parameter for SAML or OIDC connections when authenticating a user by their connection ID.</p>

                                    <CodeSnippetStruct 
                                    id={19}
                                    headerTabs={0}
                                    sideBarOpen={sidebarMenuClicked}
                                    snippet="Authentication Endpoint" 
                                    updateSelectedLang={this.newLangSelected}
                                    selectedLang={this.state.currentSelectedLanguage}/>
                                
                                </div>
                            }

                            {usingOption3 && 
                                <div>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The provider parameter is used for OAuth connections which are configured at the environment level.</p>

                                    <div style={{marginTop: "5%", marginBottom: "5%"}} className='testing-the-api-info-box'>
                                        <div className='api-info-box-img'>
                                            <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                        </div>
                                        <div className='api-info-box-text'>
                                            <div className='api-keys'>
                                                <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>The supported <span style={{backgroundColor: "#dfdfe7"}}>provider</span> values are <span style={{backgroundColor: "#dfdfe7"}}>GoogleOAuth</span>, <span style={{backgroundColor: "#dfdfe7"}}>MicrosoftOAuth</span>, and <span style={{backgroundColor: "#dfdfe7"}}>GitHubOAuth</span>.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <CodeSnippetStruct 
                                    id={20}
                                    headerTabs={0}
                                    sideBarOpen={sidebarMenuClicked}
                                    snippet="Authentication Endpoint" 
                                    updateSelectedLang={this.newLangSelected}
                                    selectedLang={this.state.currentSelectedLanguage}/>
                                </div>
                            }

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If there is an issue generating an authorization URL, WorkOS will return the redirect URI as is. Read the <label className='demo-docs-hyperlink'>API Reference</label> for more details.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Add a callback endpoint</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Next, let’s add the redirect endpoint which will handle the callback from WorkOS after a user has authenticated with their identity provider. This endpoint should exchange the authorization code returned by WorkOS with the authenticated user’s profile. The authorization code is valid for 10 minutes.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The redirect URI must use HTTPS. If you need a custom URI scheme, e.g. for mobile app deep linking, please <label className='demo-docs-hyperlink'>contact support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <CodeSnippetStruct 
                            id={21}
                            headerTabs={0}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Callback Endpoint" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When adding your callback endpoint, it is important to always validate the returned profile’s organization ID. It’s unsafe to validate using email domains as organizations might allow email addresses from outside their corporate domain (e.g. for guest users).</p>  
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Conifigure a redirect URI</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Go to the <label className='demo-docs-hyperlink'>Redirects</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> page in the dashboard to configure allowed redirect URIs. This is your callback endpoint you used in the previous section.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Multi-tenant apps will typically have a single redirect URI specified. You can set multiple redirect URIs for single-tenant apps. You’ll need to be sure to specify which redirect URI to use in the WorkOS client call to fetch the authorization URL.</p>

                            <div style={{marginTop: "5%", marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>WorkOS staging environments allow wildcard characters in redirect URIs. More information about wildcard characters support can be found in the <label className='demo-docs-hyperlink'>Redirect URIs</label> guide. Query parameters are not allowed in any environment.</p>
                                </div>
                            </div>

                            <div id='img49' className={`enlargable-image-container ${this.state.enlargedImageId === 'img49' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img49')}>
                                <img  src='/assets/sso_section_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Identity provider-initiated SSO</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Normally, the default redirect URI you configure in the WorkOS dashboard is going to be used for all identity provider-initiated SSO sessions. This is because the WorkOS client is not used to initiate the authentication flow. </p>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>However, your customer can specify a separate redirect URI to be used for all their IdP-initiated sessions as a <span>RelayState</span> parameter in the SAML settings on their side.</p>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Learn more about configuring IdP-initiated SSO in the <label className='demo-docs-hyperlink'>Login Flows</label> guide.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Test end-to-end</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you followed this guide, you used the Test Organization available in your staging environment to initiate SSO. With that, you can already test your integration end-to-end.</p>

                            <div id='img50' className={`enlargable-image-container ${this.state.enlargedImageId === 'img50' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img50')}>
                                <img  src='/assets/sso_section_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Test SSO</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Learn how to test your Single Sign-On integration end-to-end.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {testSSO && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Test SSO</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn how to test your Single Sign-On integration end-to-end.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Testing with the Test Identity Provider</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To confirm your Single Sign-On integration works correctly you can use the Test Identity Provider to simulate login flows end-to-end. Your staging environment includes a default Test Organization and active SSO connection configured with the Test Identity Provider.</p>
                    
                        
                            <div id='img51' className={`enlargable-image-container ${this.state.enlargedImageId === 'img51' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img51')}>
                                <img  src='/assets/test_sso_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Getting started</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Log into the <label className='demo-docs-hyperlink'>Work OS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> and navigate to the <i>Test SSO</i> page to get started with the Test IdP. This page outlines a number of different SSO scenarios you can follow and provides all the necessary information to complete the tests.</p>

                            <div id='img52' className={`enlargable-image-container ${this.state.enlargedImageId === 'img52' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img52')}>
                                <img  src='/assets/test_sso_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Service provider-initiated SSO</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This case is likely the first <label className='demo-docs-hyeprlink'>login flow</label> you would test when implementing SSO in your app. The test simulates users initiating authentication from your sign-in page. In this scenario, the user enters their email in your app, gets redirected to the identity provider, and then is redirected back to your application.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Identity provider-initiated SSO</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This test simulates users initiating authentication from their identity provider. It is a common <label className='demo-docs-hyperlink'>login flow</label> that developers forget to consider. In the scenario, users log in to the identity provider directly, select your application from their list of SSO-enabled apps, and are redirected to your application upon successful authentication.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Ensure <label className='demo-docs-hyperlink'>Authkit is disabled</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> before testing.</p>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Guest email domain</h3>
                            
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This test simulates users authenticating with an email domain different from the verified domain of the test organization,<span>example.com</span>. A relevant scenario is authenticating freelance users, whose email domain is not owned by the company.</p>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Error response</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This test simulates a generic <label className='demo-docs-hyperlink'>error response</label> from the user’s identity provider. In this scenario, SSO authentication has failed for the user. Below is an example of the error-related parameters passed to the <label className='demo-docs-hyperlink'>redirect URI</label> in your application.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Testing with other identity providers</h1>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Test Identity Provider saves time by providing an out of the box experience compared to the configuration process that someone using a real identity provider would have to go through to enable Single Sign-On for your app.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If your integration works with the Test Identity Provider, you can be sure it will work with other identity providers. However, it may be helpful to also learn about the setup process that your customers will go through on their side, which varies depending on a specific identity provider.</p>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Create an organization</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To get started, you will need to <label className='demo-docs-hyperlink'>create an organization</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> in the WorkOS Dashboard. Organizations in WorkOS represent your customer, so by creating an organization, you can test your SSO connection the way your customers will experience it.</p>

                            <div id='img53' className={`enlargable-image-container ${this.state.enlargedImageId === 'img53' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img53')}>
                                <img  src='/assets/test_sso_img3.avif' alt="Enlargable" className="image" />
                            </div>


                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Create a connection</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Go to the organization you created and click <i>Invite admin</i>. Select Single Sign-On from the list of features. In the next step, enter an email address to send the setup link to, or click <i>Copy setup link</i></p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The setup link goes to Admin Portal, where your customers get the exact instructions for every step they need to take to enable Single Sign-On with your app.</p>

                            <div style={{marginTop: "5%", marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>You can also integrate <label className='demo-docs-hyperlink'>Admin Portal</label> directly into your app to enable self-serve setup of Single Sign-On and other enterprise features for your users.</p>
                                </div>
                            </div>

                            <div id='img54' className={`enlargable-image-container ${this.state.enlargedImageId === 'img54' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img54')}>
                                <img  src='/assets/test_sso_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Follow the Admin Portal instructions</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To complete the integration, you’ll have to also create an account with the identity provider you want to test with. After you have signed up with an identity provider of your choice, follow the corresponding Admin Portal instructions from the setup link. Once done, you can start testing your SSO integration with that identity provider.</p>

                            <div id='img55' className={`enlargable-image-container ${this.state.enlargedImageId === 'img55' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img55')}>
                                <img  src='/assets/test_sso_img5.avif' alt="Enlargable" className="image" />
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

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Example Apps</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>View sample Single Sign-On apps for each SDK.</p>
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
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Example Apps</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>View sample Single Sign-On apps for each SDK.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can view minimal example apps that demonstrate how to use the WorkOS SDKs to authenticate users via SSO:</p>

                            <div className='example-apps-container' style={{marginBottom: "5%"}}>
                                <div className='example-app-container'>
                                    <img style={{width: "20%", marginTop: "5%"}} src='/assets/docs_api_reference_node_language_icon.png' alt='img not available'/>
                                    <p style={{marginTop: "12%"}}>github.com</p>
                                    <h5>Node.js SSO app</h5>
                                </div>
                                <div className='example-app-container'>
                                <img style={{width: "14%"}} src='/assets/docs_example_apps_typescript_icon.png' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>TypeScript SSO app</h5>
                                </div>
                                <div className='example-app-container'>
                                    <img style={{width: "12%", marginTop: "8%"}} src='/assets/docs_api_reference_ruby_language_icon.png' alt='img not available'/>
                                    <p style={{marginTop: "17%"}}>github.com</p>
                                    <h5>Ruby SSO app</h5>
                                </div>
                            </div>

                            <div className='example-apps-container' style={{marginBottom: "5%"}}>
                                <div className='example-app-container'>
                                    <img src='/assets/flask-logo.svg' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>Python Flask SSO app</h5>
                                </div>
                                <div className='example-app-container'>
                                <img src='/assets/docs_example_apps_django_icon.png' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>Python Django SSO app</h5>
                                </div>
                                <div className='example-app-container'>
                                    <img style={{width: "25%", marginTop: "2%"}} src='/assets/docs_api_reference_go_language_icon.png' alt='img not available'/>
                                    <p style={{marginTop: "11%"}}>github.com</p>
                                    <h5>Go SSO app</h5>
                                </div>
                            </div>

                            <div className='example-apps-container' style={{marginBottom: "5%"}}>
                                <div className='example-app-container'>
                                    <img src='/assets/docs_api_reference_java_language_icon.png' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>Java SSO app</h5>
                                </div>
                                <div className='example-app-container'>
                                <img style={{width: "25%", marginTop: "2%"}} src='/assets/docs_api_reference_php_language_icon.png' alt='img not available'/>
                                    <p style={{marginTop: "11%"}}>github.com</p>
                                    <h5>PHP SSO app</h5>
                                </div>
                                <div className='example-app-container'>
                                    <img style={{width: "20%", marginTop: "4%"}} src='/assets/docs_api_reference_net_language_icon.png' alt='img not available'/>
                                    <p >github.com</p>
                                    <h5>.NET SSO app</h5>
                                </div>
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Sign-In UX</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>User experience considerations for Single Sign-On.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {signInUX && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Sign-In UX</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>User experience considerations for Single Sign-On.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Now that we’ve seen how the Single Sign-On (SSO) APIs work, you may want to consider how to best integrate this new flow in the sign-in experience for your users. This guide will walk you through a few different approaches you could take in your application:</p>

                            <ul>
                                {/* <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <label className='demo-docs-hyperlink'>WorkOS Account</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p></li> */}

                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Separate SSO flow</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Separate email and password fields</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Auto-hide the password field</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Throughout this guide, let’s consider the following scenario:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You are building an app called <i>Demo App</i></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>An organization named <i>Foo Corp</i> is using Single Sign-On with Okta as the <label className='demo-docs-hyperlink'>IdP</label></p></li>
                            </ul>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Implementing SSO with WorkOS</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This document offers guidance on UX best practices when integrating SSO with the standalone API. You might instead consider <label className='demo-docs-hyperlink'>WorkOS User Management</label> with AuthKit, a complete authentication platform which handles all of the UX complexity for you.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Separate SSO flow</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A basic approach would be to create a link or button on your login page with a <strong>Sign in with SSO</strong> or <strong>Use Single Sign-On</strong> option. This method differentiates the flows for the user explicitly.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You may still look up the domain if they try to sign in with their corporate email and redirect them to the appropriate flow too – see the demo below as an example.</p>

                            {showSignIn1 && 
                                <div className={sidebarMenuClicked ? 'sign-in-sidebar-ux' : 'sign-in-ux'}>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Sign in to Demo App</h1>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Email</strong></p>
                                    <input
                                    id='sampleEmail1'
                                    value={this.state.sampleEmail1}
                                    className={email1Empty ? 'sign-in-ux-fail' : ''}
                                    placeholder='Enter email address'
                                    onChange={(event) => this.handleChange(event, 'email1')}
                                    />
                                    {showSampleEmail1Err && <p className='sign-in-ux-err' style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>{this.state.sampleEmail1Err}</p>
                                    }
                                    {login1Hide && 
                                        <div>
                                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Password</strong></p>
                                            <input
                                            // style={{marginBottom: "2.5%"}}
                                            id='samplePassword1'
                                            className={password1Empty ? 'sign-in-ux-fail' : ''}
                                            value={this.state.samplePassword1}
                                            type='password'
                                            placeholder='Enter password'
                                            onChange={(event) => this.handleChange(event, 'password1')}
                                            />
                                            {showSamplePassword1Err &&
                                                <p className='sign-in-ux-err' style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>{this.state.samplePassword1Err}</p>
                                            }
                                        </div>
                                    }
                                    <button
                                    style={{marginTop: "7.5%"}}
                                    className={login1Successful ? "sign-in-ux-success-btn" : ""}
                                    onClick={this.continueBtn1Clicked}
                                    >Continue</button>
                                    {login1Hide && 
                                        <div>
                                            <div className="separator-container">
                                                <div className="line"></div>
                                                <p className="or-text">or</p>
                                                <div className="line"></div>
                                            </div>
                                            <button
                                            onClick={this.useSingleSignOnClicked}
                                            className={login1Successful ? "sign-in-ux-success-btn" : "sign-in-ux-btn-2"} 
                                            >Use Single Sign-On</button>
                                        </div>
                                    }
                                </div>
                            }

                            {showSignedIn1 && 
                                <div className={sidebarMenuClicked ? 'sign-in-sidebar-ux' : 'sign-in-ux'}>
                                    <h1 style={{textAlign: "center"}}>You are signed in</h1>
                                    <button
                                    onClick={this.startOver1Clicked}
                                    className='sign-in-ux-btn-2'
                                    >Start over</button>
                                </div>
                            }

                            <p style={{textAlign: "center", fontSize: "80%", marginBottom: "7.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><i>Try signing with credentials, then using Single Sign-On with any <strong>@foo-corp.com</strong> email.</i></p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>As this adds yet another button, one thing to be mindful with this approach is the <label className='demo-docs-hyperlink'>NASCAR problem</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> where a cluster of 3rd party branded buttons creates both visual noise and confusion. Consider only offering a couple of options that are relevant to your user base.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Separate email and password fields</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Instead of asking users for their email and password in one screen, you could first ask them for their email. This method gives you an opportunity to check if a particular domain is SSO-enabled and redirect the user to the appropriate SSO flow. It is a very popular approach employed by many applications (including WorkOS itself, Apple, and Google).</p>

                            {showSignIn2 && 
                                <div className={sidebarMenuClicked ? 'sign-in-sidebar-ux' : 'sign-in-ux'}>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Sign in to Demo App</h1>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Email</strong></p>
                                    {showEmail2Input && 
                                        <input
                                        id='sampleEmail2'
                                        value={this.state.sampleEmail2}
                                        className={email2Empty ? 'sign-in-ux-fail' : ''}
                                        placeholder='Enter email address'
                                        onChange={(event) => this.handleChange(event, 'email2')}
                                        />
                                    }
                                    {showEmail2Confirmed && 
                                        <input
                                        id='sampleEmail2'
                                        value={this.state.sampleEmail2}
                                        className='sign-in-ux-input-confirmed'
                                        placeholder='Enter email address'
                                        />
                                    }
                                    {showSampleEmail2Err && <p className='sign-in-ux-err' style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>{this.state.sampleEmail2Err}</p>
                                    }

                                    
                                    {login2Hide && 
                                        <div>
                                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Password</strong></p>
                                        
                                            <input
                                            // style={{marginBottom: "2.5%"}}
                                            id='samplePassword2'
                                            className={password2Empty ? 'sign-in-ux-fail' : ''}
                                            value={this.state.samplePassword2}
                                            type='password'
                                            placeholder='Enter password'
                                            onChange={(event) => this.handleChange(event, 'password2')}
                                            />
                                        
                                            {showSamplePassword2Err &&
                                                <p className='sign-in-ux-err' style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>{this.state.samplePassword2Err}</p>
                                            }
                                        </div>
                                    }
                                    <button
                                    className={login2Successful ? "sign-in-ux-success-btn" : ""}
                                    onClick={this.continueBtn2Clicked}
                                    >Continue</button>
                                </div>
                            }

                            {showSignedIn2 && 
                                <div className={sidebarMenuClicked ? 'sign-in-sidebar-ux' : 'sign-in-ux'}>
                                    <h1 style={{textAlign: "center"}}>You are signed in</h1>
                                    <button
                                    onClick={this.startOver2Clicked}
                                    className='sign-in-ux-btn-2'
                                    >Start over</button>
                                </div>
                            }

                            <p style={{textAlign: "center", fontSize: "80%", marginBottom: "7.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><i>Try signing in with any <strong>@foo-corp.com</strong> email vs. credentials.</i></p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Auto-hide the password field</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Finally, as an extension to the previous approach, you can automatically hide the password field if the user’s domain is SSO-enabled. This feature is a bit more complicated to implement, but provides a more seamless experience for users.</p>

                            {showSignIn3 && 
                                <div className={sidebarMenuClicked ? 'sign-in-sidebar-ux' : 'sign-in-ux'}>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Sign in to Demo App</h1>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Email</strong></p>
                                    <input
                                    id='sampleEmail3'
                                    value={this.state.sampleEmail3}
                                    className={email3Empty ? 'sign-in-ux-fail' : ''}
                                    placeholder='Enter email address'
                                    onChange={(event) => this.handleChange(event, 'email3')}
                                    />
                                    {showSampleEmail3Err && <p className='sign-in-ux-err' style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>{this.state.sampleEmail3Err}</p>
                                    }

                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Password</strong></p>
                                    
                                    <input
                                    // style={{marginBottom: "2.5%"}}
                                    id='samplePassword3'
                                    className={password3Empty ? 'sign-in-ux-fail' : ''}
                                    value={this.state.samplePassword3}
                                    type='password'
                                    placeholder='Enter password'
                                    onChange={(event) => this.handleChange(event, 'password3')}
                                    />
                                    {showSamplePassword3Err &&
                                        <p className='sign-in-ux-err' style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>{this.state.samplePassword3Err}</p>
                                    }

                                    <button
                                    className={login3Successful ? "sign-in-ux-success-btn" : ""}
                                    onClick={this.continueBtn3Clicked}
                                    >Continue</button>

                                </div>
                            }

                            {showSignedIn3 && 
                                <div className={sidebarMenuClicked ? 'sign-in-sidebar-ux' : 'sign-in-ux'}>
                                    <h1 style={{textAlign: "center"}}>You are signed in</h1>
                                    <button
                                    onClick={this.startOver3Clicked}
                                    className='sign-in-ux-btn-2'
                                    >Start over</button>
                                </div>
                            }

                            <p style={{textAlign: "center", fontSize: "80%", marginBottom: "5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><i>Try signing in with any <strong>@foo-corp.com</strong> email vs. credentials.</i></p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Login Flows</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Learn the differences between SP‑initiated and IdP‑initiated SSO.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {loginFlows && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Login Flows</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn the differences between SP‑initiated and IdP‑initiated SSO.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The instructions in the <label className='demo-docs-hyperlink'>Quick Start guide</label> focus on setting up Service Provider (SP)-initiated SSO. In these scenarios, when a user attempts to login, they navigate to an application (a service provider) and are then redirected to the Identity Provider (IdP) for authentication, via the WorkOS API.</p>
                        
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Alternatively, most users are able to start the process from the Identity Provider itself. Organizations will often provide an IdP dashboard where employees can select any of the eligible applications that they can access via the IdP, similar to the screenshot below. Clicking on a tile results in an IdP-initiated login flow, since the user initiates the login from the Identity Provider, not the application.</p>
                        
                            <div id='img56' className={`enlargable-image-container ${this.state.enlargedImageId === 'img56' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img56')}>
                                <img  src='/assets/login_flows_img1.avif' alt="Enlargable" className="image" />
                            </div>
                        
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                        <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>SP-initiated SSO</h1>
                        
                        <div className='api-keys'>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>With an SP-initiated login flow, the user begins the authentication process from your application. You can control where the user will be redirected after login by specifying the <span>redirectURI</span> parameter when making the <label className='demo-docs-hyperlink'>Get Authorization URL</label> call. Additionally, this call can take an optional state parameter – this parameter will be returned in the callback after authentication, where your application can use it to verify the validity of the response or to pass any state from the originating session. One common practice is to route requests from different Organizations to a single Redirect URI, but instead utilize the <span>state</span> parameter to deep link users into the application after the authentication is completed.</p>
                        </div>

                        <CodeSnippetStruct 
                        id={22}
                        headerTabs={0}
                        sideBarOpen={sidebarMenuClicked}
                        snippet="Get Authorization URL Call" 
                        updateSelectedLang={this.newLangSelected}
                        selectedLang={this.state.currentSelectedLanguage}/>
                        
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>IdP-initiated SSO</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you follow the instructions in the <label className='demo-docs-hyperlink'>Quick Start guide</label>, IdP-initiated login flows will automatically be available, and users will be able to find a tile for your application within their IdP, similar to the screenshot above. Clicking on the tile will send an IdP-initiated SSO response to your application’s callback endpoint.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Configure IdP-initiated SSO</h3>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Additionally, since IdP-initiated flows do not generate a customized authorization URL the way SP-initiated flows do, there is no way to dynamically pass the <span>redirectURI</span> and <span>state</span> parameters to your application’s callback. By default, users will be redirected to the default Redirect URI upon a successful login. However, IdP Administrators can customize the redirect destination by configuring a default <span>RelayState</span> in the IdP, and including a <span>redirect_uri</span> parameter in it. The URI must be specified in the format of a URL parameter: <span>redirect_uri=uri</span>, and the URI must be one of the Redirect URIs specified in your <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>. Any other values in the IdP’s <span>RelayState</span> will be ignored and discarded.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your application will also be able to retrieve the <label className='demo-docs-hyperlink'>Profile object</label> for the user upon successful authentication. If your IdP is unable to provide a <span>redirect_uri</span> in its default <span>RelayState</span>, or if you would like to generate a custom redirect URI for each user after they sign in, you can use the <label className='demo-docs-hyperlink'>Profile object</label> to dynamically generate a redirect URI.</p>
                            </div>

                            <CodeSnippetStruct 
                            id={23}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Example Profile" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The Profile object includes the <label className='demo-docs-hyperlink'>connection_id</label> which identifies the connection that the profile is associated with in WorkOS. We recommend using the connection information for routing requests in an IdP-Initiated flow.</p>

                                <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Disable IdP-initiated SSO (Beta)</h3>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>We have recently added Beta support for fully disabling IdP-initiated SSO logins for a connection. Once disabled, any attempted IdP-initiated requests will fail with an <span>idp_initiated_sso_disabled</span> error.</p>
                            </div>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Disabling IdP-initiated SSO is currently in invite-only beta, please reach out to <label className='demo-docs-hyperlink'>WorkOS support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> if you’d like to use it or learn more about it.</p>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For applications that need to support IdP-initiated workflows, but would like to mitigate the security risks of unsolicited SAML responses, WorkOS recommends the following:</p>

                            <div className='api-keys'>
                                <ul>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Disable IdP-initiated SSO for your connection.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Adjust your callback method to capture the <span>idp_initiated_sso_disabled</span> error.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Start a new SP-initiated request from the callback when the error is detected.</p></li>
                                </ul>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The error callback will include the connection and organization ID’s, which can be used to request a new authorization URL for the SP-initiated request. The new request will generally be transparent to the user, as they are already logged in to the Identity Provider.</p>


                            <CodeSnippetStruct 
                            id={24}
                            headerTabs={0}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Callback Endpoint with IdP-Initiated error support" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Implementing SSO with WorkOS</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This document offers guidance to integrate Single Sign-On with our standalone API into your existing auth stack. You might also want to look at <label className='demo-docs-hyperlink'>User Management</label>, a complete authentication platform that leverages Single Sign-On functionality out of the box, following best practices.</p>
                            
                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Redirect URIs</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Learn what a redirect URI is and how it relates to Service Provider and Identity Provider initiated login flows.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {redirectURIs && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Redirect URIs</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn what a redirect URI is and how it relates to Service Provider and Identity Provider initiated login flows.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>With a <label className='demo-docs-hyperlink'>WorkOS Service Provider (SP) initiated login flow</label>, there are a series of exchanges that take place between a Service Provider (your application), WorkOS, and the IdP that’s being used to authenticate the user as shown in the diagram below. The <label className='demo-docs-hyperlink'>Redirect URI</label> is the location to which the user gets returned to after successfully completing the authentication with their Identity <label className='demo-docs-hyperlink'>Provider (IdP)</label>.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>With an Identity Provider (IdP) initiated login flow, the approach is similar but the user will begin the login flow by clicking on the tile within their IdP platform instead of from your application.</p>


                            <div id='img57' className={`enlargable-image-container ${this.state.enlargedImageId === 'img57' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img57')}>
                                <img  src='/assets/redirect_uri_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In WorkOS Production Environments, the Redirect URI to your application must use HTTPS, however, Redirect URIs that use HTTP and localhost are allowed in Sandbox Environments.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There should be at least one redirect URI configured and selected as a default for a WorkOS There should be at least one redirect URI configured and selected as a default for a WorkOS <label className='demo-docs-hyperlink'>Redirects</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> page in the WorkOS dashboard. If you try to route the authorization flow to a Redirect URI that is not yet defined in the Dashboard it will result in an error and users will be unable to sign in, so it’s important to define them in the dashboard first.</p>

                            <div id='img58' className={`enlargable-image-container ${this.state.enlargedImageId === 'img58' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img58')}>
                                <img  src='/assets/redirect_uri_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The Redirect URI can also be included directly in the Get Authorization URL call as a redirect_uri parameter. When the Redirect URI is set in this fashion, it will override the default Redirect URI that is set in the WorkOS Dashboard.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Wildcard characters</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS supports using wildcard characters in Redirect URIs for staging environments.</p>
                        
                            <div id='img59' className={`enlargable-image-container ${this.state.enlargedImageId === 'img59' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img59')}>
                                <img  src='/assets/redirect_uri_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='api-keys'>
                                
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The <span>*</span> symbol can be used as a wildcard for subdomains; however, it must be used in accordance with the following rules in order to properly function.</p>

                                <ul>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The protocol of the URL <strong>must</strong> be either <span>http:</span> or <span>https:</span>. For example, <span>com.example.app://*.example.com</span> will not work. </p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The wildcard <strong>must</strong> be located in a subdomain within the hostname component. For example, <span>http://*.com</span> will not work.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The wildcard <strong>must</strong> be located in the subdomain which is furthest from the root domain. For example, <span>https://sub.*.example.com</span> will not work.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The URL <strong>must not</strong> contain more than one wildcard. For example, <span>https://*.*.example.com</span> will not work.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A wildcard character <strong>may</strong> be prefixed and/or suffixed with additional valid hostname characters. For example, <span>https://prefix-*-suffix.example.com</span> will work.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A URL with a valid wildcard <strong>will not</strong> match a URL more than one subdomain level in place of the wildcard. For example, <span>https://*.example.com</span> will not work with <span>https://sub1.sub2.example.com</span>.</p></li>
                                </ul>

                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Implementing SSO with WorkOS</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This document offers guidance to integrate Single Sign-On with our standalone API into your existing auth stack. You might also want to look at <label className='demo-docs-hyperlink'>User Management</label>, a complete authentication platform that leverages Single Sign-On functionality out of the box, following best practices.</p>
                        

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Signing Certificates</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Verify the authenticity of SAML responses and requests.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                }
                {signingCertificates && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>SAML Signing Certificates</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Verify the authenticity of SAML responses and requests.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>SAML signing certificates are X.509 certificates used in SAML responses to allow the <label className='demo-docs-hyperlink'>Service Provider (SP)</label> to verify the authenticity of a SAML response. Some <label className='demo-docs-hyperlink'>Identity Providers (IdP’s)</label> may require or provide the option to use a SAML signing certificate for the SAML request as well. In these cases the IdP verifies the authenticity of the SAML request.</p>
                        
                            <div id='img60' className={`enlargable-image-container ${this.state.enlargedImageId === 'img60' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img60')}>
                                <img  src='/assets/sign_certificates_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>SAML response signing certificates are generated by your customer’s IdP and must then be uploaded to WorkOS manually or using a monitored metadata URL. Your customer can either upload the certificate themselves via the Admin Portal, or you can upload it for them via the WorkOS Dashboard if your customer provides it to you.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Unlike SAML response signing, for request signing you will need to provide your customer with a metadata URL called the SP metadata URL. Your customer will then upload the SP metadata URL to their IdP, where it will either be monitored for updates automatically made by WorkOS, or it will be manually updated by your customer in their IdP.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>SAML Response Signing Certificate</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When the IdP sends a SAML response, the SP must verify the authenticity of the response, and that it has not been tampered with by an unauthorized third party. The SAML response signing certificate allows the SP to perform this verification.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Sample scenario</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Consider the fictional SaaS company <i>HireOS</i>, which offers recruiting software to other businesses. <i>HireOS</i> is an online application that allows its customers to track leads, candidates, and interviews. <i>HireOS</i> is referred to as the SP by SAML.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Now let’s consider <i>HireOS‘</i> newest enterprise customer: <i>Enterprise Corp</i>. <i>Enterprise Corp</i> is a large enterprise company that wants to use <i>HireOS</i> to manage their recruiting. <i>Enterprise Corp</i> IT Admins need recruiters and other employees who will use <i>HireOS</i> to log in using <i>Enterprise Corp</i>‘s identity provider, Okta. Okta is one of many companies known as an IdP to SAML.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Verifying the SAML response</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>After identifying the user – whether from the SAML request or from IdP initiated SSO – Okta SAML will generate the SAML response, which includes SAML assertions, the X.509 certificate, and the signature value. Upon receiving the response from Okta SAML, <i>HireOS</i> will verify that the response came from Okta SAML by decrypting the signature, using the public key on the X.509 certificate, and checking if the hash values match.</p>

                            <div id='img61' className={`enlargable-image-container ${this.state.enlargedImageId === 'img61' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img61')}>
                                <img  src='/assets/sign_certificates_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Planning considerations</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When planning your SAML integration, there are a few things to consider related to SAML response signing certificates.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Certificate expiration</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your SAML response signing certificate will eventually expire and must be kept up to date in order to maintain service. Your certificate’s expiration time will vary, but typically, response certificates are valid anywhere from 1-5 years. If your certificate is uploaded in the WorkOS Dashboard, you can see when it expires by going to Organizations, selecting the Organization, and then clicking on the Connection containing the response certificate. If your company has a shared Slack channel with WorkOS, we will help ensure that your SAML response signing certificates stay up to date by automatically sending a notification before a certificate expires.</p>

                            <div id='img63' className={`enlargable-image-container ${this.state.enlargedImageId === 'img63' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img63')}>
                                <img  src='/assets/sign_certificates_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Monitored metadata versus manual upload</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There are two options to upload your response certificate to a Connection, both of which can be done either in the WorkOS Dashboard, or by your customer using the Admin Portal.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Monitored metadata</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To streamline this process, you can instead choose to upload a metadata URL to WorkOS that we will automatically keep updated as metadata changes. If your customer’s IdP refreshes a certificate, WorkOS will automatically pull in the updated metadata. Your customer can upload a metadata URL to the Admin Portal during setup. Alternatively, they can provide it to your to manually upload via the Dashboard.</p>

                            <div id='img64' className={`enlargable-image-container ${this.state.enlargedImageId === 'img64' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img64')}>
                                <img  src='/assets/sign_certificates_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Manual upload</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>SP metadata such as the Entity ID, IdP SSO URL, and SAML response signing certificate can be uploaded manually through the Dashboard or the Admin Portal. This may be done either by uploading an XML metadata file, or by individually inputting metadata values. When metadata becomes out of date, such as an X.509 certificate expiring, new information must manually be uploaded. If you would like to upload the data for your customer, they must first send the relevant metadata to you. You can then upload it via the WorkOS Dashboard by navigating to the Organization and selecting the specific Connection.</p>

                            <div id='img65' className={`enlargable-image-container ${this.state.enlargedImageId === 'img65' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img65')}>
                                <img  src='/assets/sign_certificates_img5.avif' alt="Enlargable" className="image" />
                            </div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>SAML Request Signing Certificate</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When the SP sends a SAML request, the IdP must verify that the request is actually coming from the SP and has not been tampered with by an unauthorized third party. IdP’s choose to handle this verification in different ways, and some use a SAML request signing certificate. Microsoft AD FS SAML uses a relying party trust, which is similar to a SAML request signing certificate, and the concepts covered in this article are applicable. In WorkOS, Connections that take advantage of a request certificate will expose an SP metadata URL that can be sent to the IdP in order to give it access to the signing certificate.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Sample scenario</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once again, let’s consider the fictional SaaS company <i>HireOS</i>, which offers recruiting software to other businesses. <i>HireOS</i> is referred to as the SP by SAML.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><i>HireOS‘</i> newest enterprise customer is called <i>Enterprise Corp</i>. <i>Enterprise Corp</i> IT Admins need recruiters and other employees who will use HireOS to log in using <i>Enterprise Corp</i>‘s identity provider, Okta. Okta is one of many companies known as an IdP to SAML.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Verifying the SAML request</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In SP initiated SSO, <i>HireOS</i> will first send a SAML request to Okta SAML. If a request certificate is being used, then the X.509 certificate along with a signing signature will be attached to the request. Upon receiving the request, Okta SAML will verify that the request came from HireOS by decrypting the signature using the public key on the X.509 certificate and confirming the hash values match.</p>

                            <div id='img66' className={`enlargable-image-container ${this.state.enlargedImageId === 'img66' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img66')}>
                                <img  src='/assets/sign_certificates_img6.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Planning considerations</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When planning your SAML integration, there are a few things to consider related to SAML request signing certificates.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Certificate expiration</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your SAML request signing certificate will eventually expire and must be kept up to date in order to maintain service. WorkOS will automatically update the request signing certificate on the SP metadata URL before it expires. It is up to your customer and their IdP to either monitor the SP metadata URL, or manually keep it up to date. If your company has a shared Slack channel with WorkOS, you will automatically be notified when the X.509 certificate on the SP metadata URL is updated, so that you can check with your customer that they have the latest metadata.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Monitored metadata versus manual upload</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There are potentially two options for your customer to upload SP metadata, and will vary based on their IdP. In both cases, you will need to provide your customer with the SP metadata URL, which can be found in the WorkOS Dashboard by going to Organizations, selecting the Organization, and then selecting the Connection.</p>

                            <div id='img67' className={`enlargable-image-container ${this.state.enlargedImageId === 'img67' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img67')}>
                                <img  src='/assets/sign_certificates_img7.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Monitored metadata</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To streamline this process, your customer instead may choose to monitor our SP metadata URL. Their IdP will regularly check our URL for updates to the metadata. When WorkOS makes an update, such as refreshing an X.509 certificate that is expiring soon, their IdP will automatically make the change.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Manual upload</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your customer can manually download the SP metadata document from the URL, extract the certificate, and upload it to their IdP. When the certificate is getting ready to expire, they can repeat this process to give their IdP the most up to date certificate.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Implementing SSO with WorkOS</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This document offers guidance to integrate Single Sign-On with our standalone API into your existing auth stack. You might also want to look at <label className='demo-docs-hyperlink'>User Management</label>, a complete authentication platform that leverages Single Sign-On functionality out of the box, following best practices.</p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>JIT Provisioning</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Learn how to provision users in your app using Just-In-Time user provisioning.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {jitProvisioning && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Just-In-Time User Provisioning</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn how to provision users in your app using Just-In-Time user provisioning.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>User provisioning is the process of creating a user account and associated identity information. There are various ways for an application to provision users. This guide explores user provisioning strategies and offers a deep dive into SSO-based just-in-time (JIT) user provisioning.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Definitions</h1>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>User provisioning</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Provisioning is the process of creating a user and setting attributes for them inside an app.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>JIT user provisioning</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Just-in-time user provisioning creates a user in an app when the user attempts to sign in for the first time. The account and respective role don’t exist until the app creates them – just-in-time.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>Identity</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>An identity is a collection of attributes associated with a user or entity in an identity provider. For example, an identity includes at least one unique identifier, such as id, and user profile attributes, such as name and email.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>Role</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>A primitive in your app that defines specific permissions for the users. Roles are often defined as an ability or a job title, for example, “Editor” or “Accountant”.</p>
                                </div>
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>User provisioning strategies</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>User provisioning is the process of creating a user account with associated identity data in your app. Your app needs to determine a unique identifier for an identity, create a unique account for that user, and link the identity profile attributes to that user’s account. There are many strategies to provision users in an app, but the main three are:</p>

                            <ol>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Self-registration</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Provisioning users via <label className='demo-docs-hyperlink'>Directory Sync</label></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>JIT provisioning via SSO</p></li>
                            </ol>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The type of provisioning needed will depend on your app’s architecture and level of enterprise feature support:</p>

                            <div className='complex-table-header'>
                                <div className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Strategy</h5>
                                </div>
                                <div className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Description</h5>
                                </div>
                                <div className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Usage</h5>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Self-registration</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Users fill out a registration form to create an account in the app</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>For users that don’t have an SSO service, usually the first authentication mechanism built in an app</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Pre-provisioning users</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Use a service like Directory Sync to create users in the app</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Required by large enterprises to automatically provision users</p>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>JIT provisioning	</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Create a user account when a user signs in via SSO for the first time</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Leverage user identity from an SSO provider to create an account in your app</p>
                                </div>
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What is JIT provisioning?</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>JIT provisioning creates a user account with associated identity information when a user authenticates via SSO for the first time. IT admins often use JIT provisioning to quickly set up accounts in an app. Typically, apps that implement only SSO will have JIT provisioning support as the alternative is self-registration by individual users or manual entry of all users by the IT admin.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Sample scenario</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Consider the fictional SaaS company <i>HireOS</i>, which offers recruiting software to other businesses. <i>HireOS</i> is an online app allowing customers to track leads, candidates, and interviews.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><i>HireOS</i> has integrated SSO using WorkOS and supports JIT provisioning. For example, a <i>HireOS</i> customer would like their users to have accounts automatically provisioned in <i>HireOS</i> when they first log in. The customer’s IT admin will only need to assign the users to the <i>HireOS</i> SAML app in their identity provider. When users log into <i>HireOS</i> via SSO, they will have accounts created in <i>HireOS</i>, just in time.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A usual account setup flow using JIT provisioning follows these steps:</p>

                            <ol>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>An IT admin self-registers via username and password to create a team account in <i>HireOS</i>.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The IT admin configures the <i>HireOS</i> team account to use SSO as the authentication mechanism.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The IT admin enables JIT provisioning for this team account by clicking the “Enable JIT Provisioning” checkbox.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The IT admin adds the users that should get access to <i>HireOS</i> to the app in the identity provider.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a user logs into <i>HireOS</i> with the correct email domain and authenticates via SSO, HireOS creates the user account upon successful first-time login.</p></li>
                            </ol>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>JIT provisioning with WorkOS SSO</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a user authenticates to your app via SSO for the first time, and JIT provisioning is enabled, your app provisions a new user account. You can create the account by saving the identity information (the WorkOS SSO profile) directly on your app’s user account. Or, you can create a separate identity from the WorkOS SSO profile related to this new user account. This logic allows users to have multiple identities if your app supports several login methods per user.</p>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can use the WorkOS SSO profile <span>id</span> attribute as the unique identifier for this identity from WorkOS. WorkOS ensures the profile is unique per SSO connection via the <span>idp_id</span>. In addition, your app can use either the <span>connection_id</span> or <span>organization_id</span> to tie the identity to a team account.</p>
                            </div>

                            <CodeSnippetStruct 
                            id={25}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            showOnlyJSONTab={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="SSO user profile" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You may want to grant new users roles in your application via JIT provisioning. For more information on mapping role data between the IdP and your app, see the <label className='demo-docs-hyperlink'>Mapping Roles</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> guide.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>New account creation</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When your app receives a WorkOS SSO profile, it is standard to perform the following series of checks:</p>


                            <div className='api-keys'>
                                <ol>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Find an identity with the profile <span>id</span> or <span>idp_id</span>. If found, log in the corresponding user. </p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you cannot find an identity, try to find a user with the same <span>email</span> as the profile. If found, create an identity for the user and log them in.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Otherwise, create a new identity using the WorkOS SSO profile, create a new user, and associate this identity with the user account.</p></li>
                                </ol>

                                <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Linking an existing user</h3>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If an admin adds SSO authentication to their team account after they’ve had users register, your app can link these new SSO identities to the current user accounts, just-in-time.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A linking field (e.g. <span>email</span>) should be established to find a current user with the incoming WorkOS SSO Profile. Then, the identity information can be linked with the existing user account via a persistent identifier in case of an email change later.</p>

                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Implementing SSO with WorkOS</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This document offers guidance to integrate Single Sign-On with our standalone API into your existing auth stack. You might also want to look at <label className='demo-docs-hyperlink'>User Management</label>, a complete authentication platform that leverages Single Sign-On functionality out of the box, following best practices.</p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Launch Checklist</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Make sure you’re ready to take your app to production.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {launchChecklist && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Launch Checklist</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Make sure you’re ready to take your app to production.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Implement complementary enterprise features</h1>
                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Integrate the WorkOS <label className='demo-docs-hyperlink'>Admin Portal</label> to enable your users to onboard and set up SSO themselves. </p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>ntegrate the WorkOS Directory Sync API for automatic user updating, provisioning, and deprovisioning.</p></li>
                            </ul>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Before you start</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This document offers guidance to integrate Single Sign-On with our standalone API into your existing auth stack. You might also want to look at User Management, a complete authentication platform that leverages Single Sign-On functionality out of the box, following best practices.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Create an IP Allowlist</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS makes use of Cloudflare to ensure security and reliability of all operations. If you are looking to create a list of allowed IP addresses for redirect requests, you can use the IP Ranges listed in the <label className='demo-docs-hyperlink'>Cloudflare documentation</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Go-live checklist</h1>

                            <div className='checklist'>
                                <div className='checklist-icon'>
                                    <button onClick={() => this.checklistClicked('1')} style={{backgroundColor: launchCheck1 ? "#6363f1" : "white", width: sidebarMenuClicked ? "13px" : "", height: sidebarMenuClicked ? "13px" : ""}}>{launchCheck1 ? <img style={{width: sidebarMenuClicked ? "80%" : "", marginBottom: sidebarMenuClicked ? "11%" : ""}} src='/assets/launch_checklist_checkmark_icon.png' alt='no img available'/> : <p></p>}</button>
                                </div>
                                <div className='checklist-text'>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Implement an SSO UI/UX. See our guide for ideas – <label className='demo-docs-hyperlink'>UI/UXBest Practices for IdP & SP-Initiated SSO</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                            <div className='checklist'>
                                <div className='checklist-icon'>
                                    <button onClick={() => this.checklistClicked('2')} style={{backgroundColor: launchCheck2 ? "#6363f1" : "white", width: sidebarMenuClicked ? "13px" : "", height: sidebarMenuClicked ? "13px" : ""}}>{launchCheck2 ? <img style={{width: sidebarMenuClicked ? "80%" : "", marginBottom: sidebarMenuClicked ? "11%" : ""}} src='/assets/launch_checklist_checkmark_icon.png' alt='no img available'/> : <p></p>}</button>
                                </div>
                                <div className='checklist-text'>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Test the end-to-end SSO experience in your Staging environment.</p>
                                </div>
                            </div>

                            <div className='checklist'>
                                <div className='checklist-icon'>
                                    <button onClick={() => this.checklistClicked('3')} style={{backgroundColor: launchCheck3 ? "#6363f1" : "white", width: sidebarMenuClicked ? "13px" : "", height: sidebarMenuClicked ? "13px" : ""}}>{launchCheck3 ? <img style={{width: sidebarMenuClicked ? "80%" : "", marginBottom: sidebarMenuClicked ? "11%" : ""}} src='/assets/launch_checklist_checkmark_icon.png' alt='no img available'/> : <p></p>}</button>
                                </div>
                                <div className='checklist-text'>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Unlock your Production environment by adding your billing information</p>
                                </div>
                            </div>

                            <div style={{marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Only enterprise connections in your Production environment will be charged. OAuth connections in Production will be free.</p>
                                </div>
                            </div>

                            <div className='checklist'>
                                <div className='checklist-icon'>
                                    <button onClick={() => this.checklistClicked('4')} style={{backgroundColor: launchCheck4 ? "#6363f1" : "white", width: sidebarMenuClicked ? "13px" : "", height: sidebarMenuClicked ? "13px" : ""}}>{launchCheck4 ? <img style={{width: sidebarMenuClicked ? "80%" : "", marginBottom: sidebarMenuClicked ? "11%" : ""}} src='/assets/launch_checklist_checkmark_icon.png' alt='no img available'/> : <p></p>}</button>
                                </div>
                                <div className='checklist-text'>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Set your Production Client’s ID and API Key as environment variables</p>
                                </div>
                            </div>

                            <div className='checklist'>
                                <div className='checklist-icon'>
                                    <button onClick={() => this.checklistClicked('5')} style={{backgroundColor: launchCheck5 ? "#6363f1" : "white", width: sidebarMenuClicked ? "13px" : "", height: sidebarMenuClicked ? "13px" : ""}}>{launchCheck5 ? <img style={{width: sidebarMenuClicked ? "80%" : "", marginBottom: sidebarMenuClicked ? "11%" : ""}} src='/assets/launch_checklist_checkmark_icon.png' alt='no img available'/> : <p></p>}</button>
                                </div>
                                <div className='checklist-text'>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Secure your Production Project’s API key</p>
                                </div>
                            </div>

                            <div className='checklist'>
                                <div className='checklist-icon'>
                                    <button onClick={() => this.checklistClicked('6')} style={{backgroundColor: launchCheck6 ? "#6363f1" : "white", width: sidebarMenuClicked ? "13px" : "", height: sidebarMenuClicked ? "13px" : ""}}>{launchCheck6 ? <img style={{width: sidebarMenuClicked ? "80%" : "", marginBottom: sidebarMenuClicked ? "11%" : ""}} src='/assets/launch_checklist_checkmark_icon.png' alt='no img available'/> : <p></p>}</button>
                                </div>
                                <div className='checklist-text'>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Configure production redirect URI(s) in your Product Project. Verify the default redirect URI is correct</p>
                                </div>
                            </div>

                            <div className='checklist'>
                                <div className='checklist-icon'>
                                    <button onClick={() => this.checklistClicked('7')} style={{backgroundColor: launchCheck7 ? "#6363f1" : "white", width: sidebarMenuClicked ? "13px" : "", height: sidebarMenuClicked ? "13px" : ""}}>{launchCheck7 ? <img style={{width: sidebarMenuClicked ? "80%" : "", marginBottom: sidebarMenuClicked ? "11%" : ""}} src='/assets/launch_checklist_checkmark_icon.png' alt='no img available'/> : <p></p>}</button>
                                </div>
                                <div className='checklist-text'>
                                    <div className='api-keys'>
                                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Ensure that your application can receive redirects from WorkOS Depending on your network architecture, you may need to allowlist incoming redirect traffic from <span>api.workos.com.</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className='checklist'>
                                <div className='checklist-icon'>
                                    <button onClick={() => this.checklistClicked('8')} style={{backgroundColor: launchCheck8 ? "#6363f1" : "white", width: sidebarMenuClicked ? "13px" : "", height: sidebarMenuClicked ? "13px" : ""}}>{launchCheck8 ? <img style={{width: sidebarMenuClicked ? "80%" : "", marginBottom: sidebarMenuClicked ? "11%" : ""}} src='/assets/launch_checklist_checkmark_icon.png' alt='no img available'/> : <p></p>}</button>
                                </div>
                                <div className='checklist-text'>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Add Connections for your customers in the Production Environment</p>
                                </div>
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Frequently asked questions</h1>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>How should an application handle the first time a user authenticates using WorkOS?</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If a user is authenticating to your application for the first time via SSO and doesn’t have an account, you can implement just-in-time provisioning to create a user when authentication is complete.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can also leverage <label className='demo-docs-hyperlink'>Directory Sync</label> to pre-provision users with API endpoints or webhooks. In this case, the user will already be created in your application when they authenticate for the first time.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Can we add SSO authentication for a current user in an application?</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If a user is authenticating to your application via SSO, but already has an account (with username/password for example), you can “upgrade” them to SSO. Usually the emails are the same for both methods of authentication, so you can match on email address. Once SSO via WorkOS is enabled, you can restrict users to sign in with only SSO.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>How does WorkOS manage user attributes from an identity provider?</h3>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS normalizes user attributes so you can expect known values such as <span>id</span>, <span>email</span>,<span>firstName</span>, and <span>lastName</span>. You will still receive all of the attributes sent by your identity provider in the <span>raw_attributes</span> object.</p>
                            
                                <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Is the user attribute mapping configurable in WorkOS?</h3>
                            
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Yes. For example, let’s say the <span>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname</span> attribute contains the user email rather than the <span>surname</span> as the attribute name suggests. In these edge cases, WorkOS will identify any attributes that are misconfigured and recommend correct mapping in the “Attribute Mapper“ section of the “Connection info” page.</p>

                                <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>What does the “Allow Profiles Outside Organization” option do?</h3>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>By default, WorkOS restricts user profiles for SAML Connections to profiles that have email domains that are in the set of <label className='demo-docs-hyperlink'>User Email Domains</label> on the Organization.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Enabling this option removes this restriction and allows user profiles with any email address to sign in through Connections under this Organization.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If this option is enabled, your code can not exclusively trust the returned <span>email</span> attribute on user profiles to be a verified email address. Instead, you must use the <span>organization_id</span> or <span>connection_id</span> in order to verify that the profile belongs to whom it claims.</p>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>What does “There are 0 profiles awaiting reconciliation” refer to?</h3>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This refers to the number of user profiles that have inconsistent attribute mappings, and that need to be updated in order to successfully authenticate.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>How do I integrate WorkOS SSO with my native mobile application?</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When it comes to mobile applications, our typical advice in implementing SSO authentication goes like this:</p>

                            <ol>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Generate the authentication URL and route the user to a browser or browser fragment in order to authenticate.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The end user authenticates via the native UI of their IdP within that browser.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Upon successful authentication, deep-link the user back into your native application.</p></li>
                            </ol>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>FAQ for IT teams</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Answers to common questions from your customer’s IT team.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                }
                {faqForItTeams && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>FAQ for IT teams</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Answers to common questions from your customer’s IT team.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What is WorkOS?</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS is a software company that provides a suite of products to make an app enterprise-ready. These products include Single Sign-On, Directory Sync, and User Management, among others.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Developers integrate WorkOS services into their apps in order to provide a secure authentication and user provisioning experience. It’s trusted by companies like Webflow, Plaid, Vercel, and many others.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What data does WorkOS store?</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For Single Sign-On, WorkOS stores the user profile from the identity provider. This includes the user’s name, email and IP address.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For Directory Sync, WorkOS will store the data that the identity provider sends. The shape and content of that data is at the discretion of the identity provider.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For more information, view our <label className='demo-docs-hyperlink'>Privacy Policy</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>How do developer apps communicate with WorkOS?</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Developers integrate with WorkOS using its Rest API and the related SDKs. You can find a list of all WorkOS API endpoints in the <label className='demo-docs-hyperlink'>API reference.</label></p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What IP addresses does WorkOS use?</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS uses Cloudflare to ensure security and reliability of all operations. If you are looking to create a list of allowed IP addresses for the WorkOS API, you can use the IP ranges listed in the <label className='demo-docs-hyperlink'>Cloudflare documentation</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Is WorkOS certified for SOC 2 Type II, SOC 3 and SIG Lite?</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Yes, WorkOS is compliant with all the above and regularly undergoes penetration testing.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Is WorkOS GDPR compliant?</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Yes, WorkOS is GDPR compliant. Reach out to <label className='demo-docs-hyperlink'>support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> to request deletion of data.</p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>SAML Security</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Learn about additional SAML features that WorkOS supports.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {samlSecurity && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>SAML Security Considerations</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn about additional SAML features that WorkOS supports.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>SAML requests and responses each have their own unique confidentiality and integrity features. To use <label className='demo-docs-hyperlink'>SAML</label> with WorkOS, the only requirement is that the Identity Provider (<label className='demo-docs-hyperlink'>IdP</label>) signs the assertions within the SAML authentication response.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>However, you may have customers that have stricter configuration requirements or you may simply want to raise the security bar by following recommendations. This document details what security features are available, how they can benefit you, your customer and their identity provider.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The parties involved in a SAML authentication request and response flow are:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Identity Provider</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Service Provider (<label className='demo-docs-hyperlink'>SP</label>)</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>User Agent, i.e. a browser</p></li>
                            </ul>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>SP to IdP security features</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The SAML authentication request is a way for the SP to request confirmation that the user they’re presented with is who they’re claiming to be. It is relayed to the IdP via the user agent.</p>

                            <div id='img68' className={`enlargable-image-container ${this.state.enlargedImageId === 'img68' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img68')}>
                                <img  src='/assets/saml_secrity_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>SAML request signing</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To address the opportunity to spoof or tamper with a SAML request to the IdP, the IdP may require that all SP’s sign the request. To accommodate this there needs to be a pre-existing relationship between the SP and IdP where a key-pair is shared. The IdP holds the public key (for verifying the request) and the SP holds the private key (for signing the request).</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS recommends SAML request signing, this is especially important in cases where HTTPS is terminated or interrupted prior to reaching the IdP.</p>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>All of our requests embed the <span>&lt;IssueInstant&gt;</span> timestamp to allow the IdP to reject stale requests, however to mitigate tamper of this value request signing must be used. (See <label className='demo-docs-hyperlink'>SAML 2.0 Security Considerations</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> sections 5.2.1.2, 6.5.1 for more detail).</p>
                            </div>

                            <div className='complex-table-header'>
                                <div className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Supported by WorkOS</h5>
                                </div>
                                <div className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Enabled by default</h5>
                                </div>
                                <div className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Usage recommendation</h5>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Yes</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>No</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Use with any IdP that supports it</p>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS supports SAML request signing for all compatible connection types. Please <label className='demo-docs-hyperlink'>contact WorkOS support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> to enable it.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>IdP to SP security features</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The SAML response is an XML document provided by an IdP containing details about a user so that an SP can authenticate them. It is relayed to the SP via the user agent.</p>

                            <div id='img69' className={`enlargable-image-container ${this.state.enlargedImageId === 'img69' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img69')}>
                                <img  src='/assets/saml_secrity_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For reference in understanding the following features, below is a simplified hierarchy of the XML elements in a SAML Response:</p>

                            <CodeSnippetStruct 
                            id={26}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="SAML response" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Signed response assertions</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This is required by WorkOS for all SAML connections. It is a core requirement for SAML IdPs to implement as of SAML 2.0 (see <label className='demo-docs-hyperlink'>SAML 2.0 Profiles</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> section 4.1.3.5).</p>

                            <div className='complex-table-header'>
                                <div className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Supported by WorkOS</h5>
                                </div>
                                <div className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Enabled by default</h5>
                                </div>
                                <div className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Usage recommendation</h5>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Yes</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Yes</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>All WorkOS SAML connections must use it</p>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Signed response assertions are enabled in the setup steps when you create a <label className='demo-docs-hyperlink'>SAML connection</label>.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Signed response message envelope</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This is the complete signature over the SAML response payload. In combination with an assertion signature it will provide additional integrity protection and is recommended by WorkOS (For details on threats addressed see <label className='demo-docs-hyperlink'>SAML Security Considerations</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> sections 7.1.1.6, 7.1.1.7).</p>

                            <div className='complex-table-header'>
                                <div className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Supported by WorkOS</h5>
                                </div>
                                <div className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Enabled by default</h5>
                                </div>
                                <div className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Usage recommendation</h5>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Yes</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>No</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Use with any IdP that supports it</p>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Please <label className='demo-docs-hyperlink'>SAML Security Considerations</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> to enable encrypted response assertion.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Encrypted response attributes</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The attribute statement is a sub-element of the assertion, some or all of the attributes in the statement can be encrypted as part of the SAML authentication protocol.</p>

                            <div className='complex-table-header'>
                                <div className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Supported by WorkOS</h5>
                                </div>
                                <div className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Enabled by default</h5>
                                </div>
                                <div className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Usage recommendation</h5>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>No</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>No</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Use <strong>encrypted assertions</strong> instead</p>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS does not currently support encrypted response attributes. It is recommended to use assertion encryption to envelope all the attributes if confidentiality is required.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Implementing SSO with WorkOS</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This document offers guidance to integrate Single Sign-On with our standalone API into your existing auth stack. You might also want to look at <label className='demo-docs-hyperlink'>User Management</label>, a complete authentication platform that leverages Single Sign-On functionality out of the box, following best practices.</p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Directory Sync</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Build frictionless onboarding for organizations with real‑time user provisioning and deprovisioning.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {directorySync && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>SAML Security Considerations</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn about additional SAML features that WorkOS supports.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Organizations use company directories and HRIS systems to manage users and enforce their access to organization resources. Directories enable IT admins to activate and deactivate accounts, create groups that inform access rules, accelerate adoption of new tools, and more.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Definitions</h1>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>ULM</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>User Lifecycle Management (or ULM) is the process of managing a user’s access to an app. This occurs from app onboarding until they are removed from an app. ULM is also commonly referred to as identity provisioning.</p>
                                </div>
                            </div>
                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>SCIM</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>System for Cross-domain Identity Management (or SCIM) is an open standard for managing automated user and group provisioning. It’s a standard that many directory providers interface with.</p>
                                </div>
                            </div>
                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>HRIS</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>A Human Resources Information System (or HRIS) is software designed to maintain, manage, and process detailed employee information and human resources-related policies. Examples include: Workday, HiBob, BambooHR, etc.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>User Deprovisioning</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Deprovisioning is the process of removing a user from an app.</p>
                                </div>
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What is Directory Sync?</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Directory Sync is a set of developer-friendly APIs and IT admin tools that allows you to implement enterprise-grade User Lifecycle Management (ULM) into your existing app.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>ULM allows IT admins to centrally provision and deprovision users from their directory provider. A directory provider is the source of truth for your enterprise customer’s user and group lists. Directory Sync sends automatic updates to your app for changes to directories, groups, users, or access rules.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Common directory providers include: <label className='demo-docs-hyperlink'>Microsoft Active Directory</label>, <label className='demo-docs-hyperlink'>Okta</label>, <label className='demo-docs-hyperlink'>Workday</label>, and <label className='demo-docs-hyperlink'>Google Workspace</label>. See the full list of supported directory providers on the <label className='demo-docs-hyperlink'>integrations</label> page.</p>


                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Why use Directory Sync?</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>ULM increases the security of your app and makes it easier for your customers to use your app. ULM is most often implemented using <label className='demo-docs-hyperlink'>SCIM</label>. SCIM requests are sent between directory providers and your app to inform you of changes to a user’s identity. Changes can include:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Provisioning an identity for a user (account creation)</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a user’s attribute has changed (account update)</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Deprovisioning a user from your app (account deletion)</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each directory provider implements SCIM differently. Implementing SCIM is often a challenging process and can introduce security vulnerabilities into your app. Directory Sync hides this complexity, so you can focus on building core product features in your app.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What your customer experiences</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Let’s take a look at two different user provisioning scenarios.</p>

                            <div className='dos-donts'>
                                <div className='dos-donts-icon'>
                                    <button style={{backgroundColor: "#ffdae0", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "17.5%" : "", border: "2px solid #ffdae0"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_donts_icon.png' alt='no img available'/></button>
                                </div>
                                <div className='dos-donts-text'>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Your app doesn’t use Directory Sync</strong></p>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Without ULM, your customers have to manually add, update, and remove users from your app.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Imagine a scenario where your customer has purchased your software and onboards a new employee to your app. Your customer would have to do the following:</p>

                            <ol>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The IT admin provisions the employee in their directory provider (<i>if they use</i> one) and manually in your app.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>All employee information has to be set manually in both the directory provider and manually in your app.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The IT admin has to manually provision a login method for the employee; through either SSO (<i>if they use an identity provider</i>) or a self-registration page.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The IT admin sends the invite link to their employee. Often initiating a back and forth via either email, messaging app, or IT helpdesk ticket.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The employee has to proceed with the registration method and can then use your app.</p></li>
                            </ol>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>All future changes to this employee’s data and access are manually entered by the IT admin. This is error prone and can lead to security vulnerabilities where users get unauthorized access to resources.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>As your customers adopt more cloud software, these manual processes do not scale well. Manual input error can lead to the source of truth (directory) drifting from your app’s state. As a result, ULM has become a table stakes product requirement for enterprises.</p>

                            <div className='dos-donts'>
                                <div className='dos-donts-icon'>
                                    <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "17.5%" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                </div>
                                <div className='dos-donts-text'>
                                    <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Your app uses Directory Sync</strong></p>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If your app supports ULM via Directory Sync, the IT admin can provision this employee from one place:</p>

                            <ol>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Add the employee to their directory provider.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Assign the employee to your app with the appropriate role once; via the directory provider admin page.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Optional.</strong> Have the employee go through a password setup if they are not using an identity provider (SSO).</p></li>
                            </ol>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Directory Sync makes this integration easy by providing APIs your app interfaces with. All updates for this directory will automatically be sent to your app from WorkOS.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>API overview</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Directory</label>, <label className='demo-docs-hyperlink'>directory group</label>, and <label className='demo-docs-hyperlink'>directory user</label> are the main components your app interfaces with.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Directory</h3>

                            <div id='img70' className={`enlargable-image-container ${this.state.enlargedImageId === 'img70' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img70')}>
                                <img  src='/assets/directory_sync_img1.png' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A directory is the source of truth for your customer’s user and group lists.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS supports dozens of integrations including SCIM. Directory updates are delivered to you via webhooks. Your app stores a mapping between your customer and their directory. This allows you to maintain your app in sync with the directory provider used by your customer.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can enable self-service Directory Sync setup for your customers using the <label className='demo-docs-hyperlink'>Admin Portal</label>.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Directory group</h3>

                            <div id='img71' className={`enlargable-image-container ${this.state.enlargedImageId === 'img71' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img71')}>
                                <img  src='/assets/directory_sync_img2.png' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A directory group is a collection of users within an organization who have been provisioned with access to your app.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Directory groups are mapped from directory provider groups. Directory groups are most often used to categorize a collection of users based on shared traits. i.e. Grouping software developers at a company under an “Engineering” group.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Directory user</h3>

                            <div id='img72' className={`enlargable-image-container ${this.state.enlargedImageId === 'img72' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img72')}>
                                <img  src='/assets/directory_sync_img3.png' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A directory user is a person or entity within an organization who has been provisioned with access to your app.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Users can belong to multiple directory groups. Users have <label className='demo-docs-hyperlink'>attributes</label> associated with them. These attributes can be configured for your app’s needs.</p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Quick Start</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Set up a directory, install the SDK, and integrate Directory Sync.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {quickStartDirectorySync && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Quick Start</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Set up a directory, install the SDK, and integrate Directory Sync.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What you’ll build</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In this guide, we’ll take you from learning about Directory Sync and POC-ing all the way through to building production-ready features fully integrated with the WorkOS Directory Sync API.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This guide will show you how to:</p>

                            <ol>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Create a new directory in the WorkOS Dashboard</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Add Directory Sync to your app and fetch directory resources</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Use events to keep your app in sync with the directory changes</p></li>
                            </ol>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Before getting started</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To get the most out of this guide, you’ll need:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <label className='demo-docs-hyperlink'>WorkOS Account</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A directory from a directory provider that WorkOS supports</p></li>
                            </ul>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>API object definitions</h1>

                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Directory</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>JStores info about an organization’s user management system (i.e. directory provider).</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Directory user</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Represents an organization user that is active in an organization’s directory provider.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Directory group	</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>A collection of organization users within a directory, e.g. IT, database admins, HR.</p>
                                </div>
                            </div>

                            <div style={{marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>The WorkOS Directory Sync API exclusively uses read-only operations. We never mutate end-user directories.</p>
                                </div>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Create a new directory connection</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The first step to connecting with a directory is creating an organization in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>. You will then be able to create a new connection to the organization’s directory. Let’s start by creating one for development in your sandbox environment.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Get provider-specific instructions by selecting the directory provider you want to test:</p>

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

                            <div style={{marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <div className='api-keys'>
                                        <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>You can view and copy the unique identifier for the directory connection on the directory page, once it has been set up. The id takes the form <span style={{backgroundColor: "#cccc"}}>directory_*</span>.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Add Directory Sync to your app</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Let’s integrate the Directory Sync API into your app to enable fetching directory resources programmatically.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Install the WorkOS SDK</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS offers native SDKs in several popular programming languages. Choose a language below to see instructions in your application’s language.</p>

                            <div className='demo-docs-languages'>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("javascript")} 
                                    style={{boxShadow: javascriptSelected || yarnSelected ? "0 0 0 2px #6363f1" : "none", border: javascriptSelected || yarnSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{marginTop: sidebarMenuClicked ? "15%" : "0%"}} src='/assets/docs_api_reference_node_language_icon.png' alt='img not available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6.5%"}}>Node.js</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("ruby")}
                                    style={{boxShadow: rubySelected || bundlerSelected ? "0 0 0 2px #6363f1" : "none", border: rubySelected || bundlerSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "43%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "30%" : "20%"}} src='/assets/docs_api_reference_ruby_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6%", fontSize: sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""}}>Ruby</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("laravel")}
                                    style={{boxShadow: laravelSelected ? "0 0 0 2px #6363f1" : "none", border: laravelSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "50%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "30%" : "20%"}} src='/assets/docs_api_reference_laravel_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6.5%"}}>Laravel</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("python")}
                                    style={{boxShadow: pythonSelected ? "0 0 0 2px #6363f1" : "none", border: pythonSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "52%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "27%" : "17%"}} src='/assets/docs_api_reference_python_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6%"}}>Python</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='demo-docs-languages'>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("php")}
                                    style={{boxShadow: phpSelected ? "0 0 0 2px #6363f1" : "none", border: phpSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "77.5%"}} src='/assets/docs_api_reference_php_language_icon.png' alt='img not available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "0px"}}>PHP</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("go")}
                                    style={{boxShadow: goSelected ? "0 0 0 2px #6363f1" : "none", border: goSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "78%", marginTop: sidebarMenuClicked ? "15%" : "7.5%"}} src='/assets/docs_api_reference_go_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "2%"}}>Go</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("java")}
                                    style={{boxShadow: javaSelected || gradleSelected ? "0 0 0 2px #6363f1" : "none", border: javaSelected || gradleSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "52%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "22%" : "17%"}} src='/assets/docs_api_reference_java_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6%"}}>Java</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("dotnet")}
                                    style={{boxShadow: dotnetSelected ? "0 0 0 2px #6363f1" : "none", border: dotnetSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{marginTop: sidebarMenuClicked ? "18%" : "10%"}} src='/assets/docs_api_reference_net_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6.3%"}}>.NET</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""} style={{color: "#5e626a", fontSize: "80%"}}>Don't see an SDK you need? <label className='client-library-contact-us'>Contact us</label> to request and SDK!</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Install the SDK using the command below.</p>

                            <CodeSnippetStruct
                            id={0}
                            headerTabs={2}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Install the WorkOS SDK"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Set secrets</h3>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To make calls to WorkOS, provide the API key and, in some cases, the client ID. Store these values as managed secrets, such as <span>WORKOS_API_KEY</span> and <span>WORKOS_CLIENT_ID</span>, and pass them to the SDKs either as environment variables or directly in your app’s configuration based on your preferences.</p>
                            </div>

                            <CodeSnippetStruct 
                            id={4}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Environment variables" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>The code examples use your staging API keys when <label className='demo-docs-hyperlink'>signed in</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span>.</p>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Fetch directory resources</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Get the details of an existing directory user.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Example use case: pre-populate user attributes for new user accounts.</p>

                            <CodeSnippetStruct 
                            id={27}
                            headerTabs={0}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Get directory user" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>List directory users</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Get directory users for a given directory or directory group.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Example use case: Build an onboarding experience that allows an admin to select who to invite and create accounts for.</p>

                            <CodeSnippetStruct 
                            id={28}
                            headerTabs={0}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="List directory users" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <div className='api-keys'>
                                        <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Use the optional <span style={{backgroundColor: "#cccc"}}>limit</span>, <span style={{backgroundColor: "#cccc"}}>before</span>, and <span style={{backgroundColor: "#cccc"}}>after</span> parameters to paginate through results. See the <label className='demo-docs-hyperlink'>API Reference</label> for details.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Get directory group</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Get the details of an existing directory group.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Example use case: Pre-populate team attributes for new organizations.</p>

                            <CodeSnippetStruct 
                            id={29}
                            headerTabs={0}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Get directory group" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>List directory groups</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Get directory groups for a given directory or directory user.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Example use case: Build an onboarding experience that allows an admin to select which groups of employees to invite and create accounts for.</p>

                            <CodeSnippetStruct 
                            id={30}
                            headerTabs={0}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="List directory groups" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <div className='api-keys'>
                                        <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Use the optional <span style={{backgroundColor: "#cccc"}}>limit</span>, <span style={{backgroundColor: "#cccc"}}>before</span>, and <span style={{backgroundColor: "#cccc"}}>after</span> parameters to paginate through results. See the <label className='demo-docs-hyperlink'>API Reference</label> for details.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Handle directory events</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Actions performed in a WorkOS environment are represented by events. These can occur as a result of user-related actions, manually via the WorkOS dashboard, or via API calls. To keep your app in sync with the latest directory data, follow the corresponding guides:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Learn about the different types of events that you can receive. See <label className='demo-docs-hyperlink'>event types</label>.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Handle the events you need on your side by syncing the data. See the <label className='demo-docs-hyperlink'>data syncing guide</label>.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Understand how directory events work. See the <label className='demo-docs-hyperlink'>understanding events guide</label>.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Optionally, stream events to Datadog. See the <label className='demo-docs-hyperlink'>observability guide</label>.</p></li>
                            </ul>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Example Apps</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>View sample Directory Sync apps for each SDK.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {exampleAppsDirectorySync && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Example Apps</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>View sample Directory Sync apps for each SDK.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can view minimal example apps that demonstrate how to use the WorkOS SDKs to power Directory Sync:</p>

                            <div className='example-apps-container' style={{marginBottom: "5%"}}>
                                <div className='example-app-container'>
                                    <img style={{width: "20%", marginTop: "5%"}} src='/assets/docs_api_reference_node_language_icon.png' alt='img not available'/>
                                    <p style={{marginTop: "12%"}}>github.com</p>
                                    <h5>Node.js Directory Sync app</h5>
                                </div>
                                <div className='example-app-container'>
                                <img style={{width: "14%"}} src='/assets/docs_example_apps_typescript_icon.png' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>TypeScript Directory Sync app</h5>
                                </div>
                                <div className='example-app-container'>
                                    <img style={{width: "12%", marginTop: "8%"}} src='/assets/docs_api_reference_ruby_language_icon.png' alt='img not available'/>
                                    <p style={{marginTop: "17%"}}>github.com</p>
                                    <h5>Ruby Directory Sync app</h5>
                                </div>
                            </div>

                            <div className='example-apps-container' style={{marginBottom: "5%"}}>
                                <div className='example-app-container'>
                                    <img src='/assets/flask-logo.svg' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>Python Flask Directory Sync app</h5>
                                </div>
                                <div className='example-app-container'>
                                <img src='/assets/docs_example_apps_django_icon.png' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>Python Django Directory Sync app</h5>
                                </div>
                                <div className='example-app-container'>
                                    <img style={{width: "25%", marginTop: "2%"}} src='/assets/docs_api_reference_go_language_icon.png' alt='img not available'/>
                                    <p style={{marginTop: "11%"}}>github.com</p>
                                    <h5>Go Directory Sync app</h5>
                                </div>
                            </div>

                            <div className='example-apps-container' style={{marginBottom: "5%"}}>
                                <div className='example-app-container'>
                                    <img src='/assets/docs_api_reference_java_language_icon.png' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>Java Directory Sync app</h5>
                                </div>
                                <div className='example-app-container'>
                                <img style={{width: "25%", marginTop: "2%"}} src='/assets/docs_api_reference_php_language_icon.png' alt='img not available'/>
                                    <p style={{marginTop: "11%"}}>github.com</p>
                                    <h5>PHP Directory Sync app</h5>
                                </div>
                                <div className='example-app-container'>
                                    <img style={{width: "20%", marginTop: "4%"}} src='/assets/docs_api_reference_net_language_icon.png' alt='img not available'/>
                                    <p >github.com</p>
                                    <h5>.NET Directory Sync app</h5>
                                </div>
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Handle Inactive Users</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Learn why inactive users are deleted from directories by default and how to configure this behavior.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {handleInactieUsers && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Handle Inactive Users</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn why inactive users are deleted from directories by default and how to configure this behavior.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Traditionally, user provisioning involves the ingestion of user information from various providers (either through SCIM or non-SCIM integrations). This process typically includes categorizing users into states such as <span>active</span>, or <span>inactive</span> as provided by the IdP data source.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>However, the challenge arises when businesses need to handle these <span>inactive</span> users differently based on their unique operational and security requirements. Some developers may prefer a security-first approach, automatically deleting these users to enhance data security, while others may opt to retain this information for reactivation processes or comprehensive directory management.</p>
                            </div>
                    
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configuration</h1>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To provide improved security and customizability, you can choose how <span>inactive</span> users are handled during the provisioning process. Here is an overview of the two options available:</p>

                                <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Secure flow (default)</h3>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>By selecting this option, customers can opt for a security-focused workflow. Any user marked as <span>inactive</span> will be automatically deleted from the directory, resulting in cleaner and potentially more secure data. This approach reduces the data footprint and minimizes potential security risks associated with unused accounts.</p>

                                <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Custom management flow</h3>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Alternatively, customers can choose to maintain the existing flow, keeping the <span>inactive</span> users in the directory. This approach supports reactivation processes and ensures a comprehensive view of the directory, allowing for easier reintegration of users when needed.</p>

                            </div>

                            <div style={{marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Contact <label className='demo-docs-hyperlink'>customer support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> to enable custom management flow for your environment.</p>
                                </div>
                            </div>

                            <div id='img73' className={`enlargable-image-container ${this.state.enlargedImageId === 'img73' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img73')}>
                                <img  src='/assets/handle_inactive_usr_img1.avif' alt="Enlargable" className="image" />
                            </div>


                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Weighing the tradeoffs</h1>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Both options offer distinct advantages, and the right choice depends on your organization’s unique needs and security posture:</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Security vs. flexibility</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The automatic deletion option prioritizes data security by minimizing the data footprint, while the customized management option provides flexibility for reactivation flows and comprehensive directory oversight.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Compliance and regulations</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Depending on industry regulations and compliance requirements, one option may align better with your organization’s obligations.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Operational efficiency</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Consider how each option impacts operational efficiency using WorkOS to handle a set of the computation for you.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Reactivation</h3>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If a user is temporarily removed, does the same user information need to be retained when they return? A new directory user will be created by default on return, whereas using the <span>inactive</span> user will retain the same information on reactivation.</p>
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Understanding Events</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Understand the lifecycle of the events that occur in Directory Sync.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {understandingEvents &&
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Understanding the Events Lifecycle</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Understand the lifecycle of the events that occur in Directory Sync.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Directory Sync events represent actions performed within directory providers. For example, an action could mean an IT admin assigning a user to your app or modifying a user group assigned to your app. These actions form the basis of user lifecycle management (ULM).</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS provides information about these actions through a set of structured events. This reference guide will cover the events Directory Sync produces and what they mean. To learn about how to handle these events on your side, see the data syncing guide.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Directory events</h1>

                            <h3 style={{fontFamily: "inconsolata"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>dsync.activated</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This event occurs when you or your customer have successfully created a connection between WorkOS and your customer’s directory provider.</p>

                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingLifecycle ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingLifecycleClicked}
                                    onMouseEnter={this.usingLifecycleEnter}
                                    onMouseLeave={this.usingLifecycleLeave}
                                    style={{fontWeight: usingLifecycle ? "bold" : "normal", backgroundColor: usingLifecycleHovered ? "#e6e6eb": "", width: "100%"}}
                                    >Lifecycle</button>
                                </div>
                                <div style={{borderBottom: usingPayload ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingPayloadClicked}
                                    onMouseEnter={this.usingPayloadEnter}
                                    onMouseLeave={this.usingPayloadLeave}
                                    style={{fontWeight: usingPayload ? "bold" : "normal", backgroundColor: usingPayloadHovered ? "#e6e6eb" : "", width: "100%"}}
                                    >Payload</button>
                                </div>
                            </div>

                            {usingLifecycle && 
                           
                                <div id='img74' className={`enlargable-image-container ${this.state.enlargedImageId === 'img74' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img74')}>
                                    <img  src='/assets/undrstanding_events_img1.png' alt="Enlargable" className="image" />
                                </div>
                                
                            }

                            {usingPayload && 
                                
                                <CodeSnippetStruct 
                                id={31}
                                headerTabs={0}
                                dropdownDisabled={true}
                                dropdownDisabledAndHidden={true}
                                showOnlyJSONTab={true}
                                sideBarOpen={sidebarMenuClicked}
                                snippet="Sample event object" 
                                updateSelectedLang={this.newLangSelected}
                                selectedLang={this.state.currentSelectedLanguage}/>
                            
                            }

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>dsync.activated</span> is triggered if you manually create the directory connection in the <label className='demo-docs-hyperlink'>Developer Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>, or your customer sets the connection up using the <label className='demo-docs-hyperlink'>Admin Portal</label>.</p>
                            </div>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The directory ID identifies a connection with the directory of a particular customer. Your app should save it and associate the directory ID with the corresponding organization ID.</p>

                            <h3 style={{fontFamily: "inconsolata"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>dsync.deleted</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This event occurs when a Directory Sync connection is deleted in WorkOS, thus tearing down the link between your customer’s directory provider and your app.</p>

                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingLifecycle ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingLifecycleClicked}
                                    onMouseEnter={this.usingLifecycleEnter}
                                    onMouseLeave={this.usingLifecycleLeave}
                                    style={{fontWeight: usingLifecycle ? "bold" : "normal", backgroundColor: usingLifecycleHovered ? "#e6e6eb": "", width: "100%"}}
                                    >Lifecycle</button>
                                </div>
                                <div style={{borderBottom: usingPayload ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingPayloadClicked}
                                    onMouseEnter={this.usingPayloadEnter}
                                    onMouseLeave={this.usingPayloadLeave}
                                    style={{fontWeight: usingPayload ? "bold" : "normal", backgroundColor: usingPayloadHovered ? "#e6e6eb" : "", width: "100%"}}
                                    >Payload</button>
                                </div>
                            </div>

                            {usingLifecycle && 
                           
                                <div id='img75' className={`enlargable-image-container ${this.state.enlargedImageId === 'img75' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img75')}>
                                    <img  src='/assets/undrstanding_events_img2.png' alt="Enlargable" className="image" />
                                </div>
                                
                            }

                            {usingPayload && 
                                
                                <CodeSnippetStruct 
                                id={32}
                                headerTabs={0}
                                dropdownDisabled={true}
                                dropdownDisabledAndHidden={true}
                                showOnlyJSONTab={true}
                                sideBarOpen={sidebarMenuClicked}
                                snippet="Sample event object" 
                                updateSelectedLang={this.newLangSelected}
                                selectedLang={this.state.currentSelectedLanguage}/>
                            
                            }

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A connection can be deleted through the Admin Portal, <label className='demo-docs-hyperlink'>Developer Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>, or <label className='demo-docs-hyperlink'>WorkOS API</label>. At this point your app should remove the association between the corresponding organization and its directory, as it no longer exists. Directories, users, and groups are typically deleted if your app offboards a customer altogether.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When receiving a <span>dsync.deleted</span> event, you can ignore the connection’s <span>state</span> attribute, since it indicates the state before the deletion occurs. When a directory is deleted in WorkOS, a sole <span>dsync.deleted</span> event is sent.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a <span>dsync.deleted</span> event is received, it indicates that the users and groups in that directory have been deleted in WorkOS. You can process the <span>dsync.deleted</span> event accordingly in your application, removing the organization’s groups and its users from your application or marking them as deleted. <span>dsync.user.deleted</span> and <span>dsync.group.deleted</span> events will not be sent for the deleted directory.</p>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Directory user events</h1>

                            <h3 style={{fontFamily: "inconsolata"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>dsync.user.created</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This event occurs when an IT admin creates a user using their directory provider. It is standard to create and provision the user in your app when you receive this event.</p>

                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingLifecycle ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingLifecycleClicked}
                                    onMouseEnter={this.usingLifecycleEnter}
                                    onMouseLeave={this.usingLifecycleLeave}
                                    style={{fontWeight: usingLifecycle ? "bold" : "normal", backgroundColor: usingLifecycleHovered ? "#e6e6eb": "", width: "100%"}}
                                    >Lifecycle</button>
                                </div>
                                <div style={{borderBottom: usingPayload ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingPayloadClicked}
                                    onMouseEnter={this.usingPayloadEnter}
                                    onMouseLeave={this.usingPayloadLeave}
                                    style={{fontWeight: usingPayload ? "bold" : "normal", backgroundColor: usingPayloadHovered ? "#e6e6eb" : "", width: "100%"}}
                                    >Payload</button>
                                </div>
                            </div>

                            {usingLifecycle && 
                           
                                <div id='img76' className={`enlargable-image-container ${this.state.enlargedImageId === 'img76' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img76')}>
                                    <img  src='/assets/undrstanding_events_img3.png' alt="Enlargable" className="image" />
                                </div>
                                
                            }

                            {usingPayload && 
                                
                                <CodeSnippetStruct 
                                id={33}
                                headerTabs={0}
                                dropdownDisabled={true}
                                dropdownDisabledAndHidden={true}
                                showOnlyJSONTab={true}
                                sideBarOpen={sidebarMenuClicked}
                                snippet="Sample event object" 
                                updateSelectedLang={this.newLangSelected}
                                selectedLang={this.state.currentSelectedLanguage}/>
                            
                            }

                            <div className='api-keys'>
                               
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can add this user to your users table in your app and associate them with the directory ID and organization ID. You can begin to engage with the user at this point, e.g., send the user a “Getting Started” email.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>During the initial sync of any directory, you will receive a <span>dsync.user.created</span> event for each existing user in the directory.</p>

                            </div>

                            
                            <h3 style={{fontFamily: "inconsolata"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>dsync.user.updated</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This event occurs when users’ attributes change. These attributes may be <label className='demo-docs-hyperlink'>standard attributes</label>, <label className='demo-docs-hyperlink'>auto-mapped attributes</label>, or <label className='demo-docs-hyperlink'>custom-mapped attributes</label>.</p>

                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingLifecycle ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingLifecycleClicked}
                                    onMouseEnter={this.usingLifecycleEnter}
                                    onMouseLeave={this.usingLifecycleLeave}
                                    style={{fontWeight: usingLifecycle ? "bold" : "normal", backgroundColor: usingLifecycleHovered ? "#e6e6eb": "", width: "100%"}}
                                    >Lifecycle</button>
                                </div>
                                <div style={{borderBottom: usingPayload ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingPayloadClicked}
                                    onMouseEnter={this.usingPayloadEnter}
                                    onMouseLeave={this.usingPayloadLeave}
                                    style={{fontWeight: usingPayload ? "bold" : "normal", backgroundColor: usingPayloadHovered ? "#e6e6eb" : "", width: "100%"}}
                                    >Payload</button>
                                </div>
                            </div>

                            {usingLifecycle && 
                           
                                <div id='img77' className={`enlargable-image-container ${this.state.enlargedImageId === 'img77' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img77')}>
                                    <img  src='/assets/undrstanding_events_img4.png' alt="Enlargable" className="image" />
                                </div>
                                
                            }

                            {usingPayload && 
                                
                                <CodeSnippetStruct 
                                id={34}
                                headerTabs={0}
                                dropdownDisabled={true}
                                dropdownDisabledAndHidden={true}
                                showOnlyJSONTab={true}
                                sideBarOpen={sidebarMenuClicked}
                                snippet="Sample event object" 
                                updateSelectedLang={this.newLangSelected}
                                selectedLang={this.state.currentSelectedLanguage}/>
                            
                            }

                            <div className='api-keys'>
                               
                               <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The payload <span>for dsync.user.updated</span> event shows changes between directory group snapshots in the <span>previous_attributes</span> property.</p>

                               <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The changes in the object are shallow differences for root properties, <span>raw_attributes</span>, and <span>custom_attributes</span>. If the current snapshot has a new attribute that did not exist previously, then the value for the attribute will be indicated as <span>null</span>.</p>

                            </div>

                            <h3 style={{fontFamily: "inconsolata"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>dsync.user.deleted</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This event occurs when a user is hard-deleted from a directory. Typically, you would remove the user from your app in this case. Note, that after Oct. 19, 2023, all new environments will delete Directory Users that get moved to the “inactive” state. If you would like to retain these users, please reach out to support. You can find <label className='demo-docs-hyperlink'>more details here</label>.</p>


                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingLifecycle ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingLifecycleClicked}
                                    onMouseEnter={this.usingLifecycleEnter}
                                    onMouseLeave={this.usingLifecycleLeave}
                                    style={{fontWeight: usingLifecycle ? "bold" : "normal", backgroundColor: usingLifecycleHovered ? "#e6e6eb": "", width: "100%"}}
                                    >Lifecycle</button>
                                </div>
                                <div style={{borderBottom: usingPayload ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingPayloadClicked}
                                    onMouseEnter={this.usingPayloadEnter}
                                    onMouseLeave={this.usingPayloadLeave}
                                    style={{fontWeight: usingPayload ? "bold" : "normal", backgroundColor: usingPayloadHovered ? "#e6e6eb" : "", width: "100%"}}
                                    >Payload</button>
                                </div>
                            </div>

                            {usingLifecycle && 
                           
                                <div id='img78' className={`enlargable-image-container ${this.state.enlargedImageId === 'img78' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img78')}>
                                    <img  src='/assets/undrstanding_events_img5.png' alt="Enlargable" className="image" />
                                </div>
                                
                            }

                            {usingPayload && 
                                
                                <CodeSnippetStruct 
                                id={35}
                                headerTabs={0}
                                dropdownDisabled={true}
                                dropdownDisabledAndHidden={true}
                                showOnlyJSONTab={true}
                                sideBarOpen={sidebarMenuClicked}
                                snippet="Sample event object" 
                                updateSelectedLang={this.newLangSelected}
                                selectedLang={this.state.currentSelectedLanguage}/>
                            
                            }

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <div className='api-keys'>
                                        <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>When users are removed from a directory, most providers will use a form of soft user deletion. In these cases, rather than receiving a <span style={{backgroundColor: "#cccc"}}>dsync.user.deleted</span> event, you will receive a <span style={{backgroundColor: "#cccc"}}>dsync.user.updated</span> event with the user’s <span style={{backgroundColor: "#cccc"}}>state</span> marked as <span style={{backgroundColor: "#cccc"}}>inactive</span>.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Directory group events</h1>

                            <h3 style={{fontFamily: "inconsolata"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>dsync.group.created</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This event occurs when creating a directory group in the directory provider. WorkOS also sends this event when a directory connection is established.</p>

                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingLifecycle ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingLifecycleClicked}
                                    onMouseEnter={this.usingLifecycleEnter}
                                    onMouseLeave={this.usingLifecycleLeave}
                                    style={{fontWeight: usingLifecycle ? "bold" : "normal", backgroundColor: usingLifecycleHovered ? "#e6e6eb": "", width: "100%"}}
                                    >Lifecycle</button>
                                </div>
                                <div style={{borderBottom: usingPayload ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingPayloadClicked}
                                    onMouseEnter={this.usingPayloadEnter}
                                    onMouseLeave={this.usingPayloadLeave}
                                    style={{fontWeight: usingPayload ? "bold" : "normal", backgroundColor: usingPayloadHovered ? "#e6e6eb" : "", width: "100%"}}
                                    >Payload</button>
                                </div>
                            </div>

                            {usingLifecycle && 
                           
                                <div id='img79' className={`enlargable-image-container ${this.state.enlargedImageId === 'img79' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img79')}>
                                    <img  src='/assets/undrstanding_events_img6.png' alt="Enlargable" className="image" />
                                </div>
                                
                            }

                            {usingPayload && 
                                
                                <CodeSnippetStruct 
                                id={36}
                                headerTabs={0}
                                dropdownDisabled={true}
                                dropdownDisabledAndHidden={true}
                                showOnlyJSONTab={true}
                                sideBarOpen={sidebarMenuClicked}
                                snippet="Sample event object" 
                                updateSelectedLang={this.newLangSelected}
                                selectedLang={this.state.currentSelectedLanguage}/>
                            
                            }

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When WorkOS ingests this event, it first processes the users in the group. So, in most cases, you would receive <span>dsync.user.created</span>, then <span>dsync.group.created</span>, and finally, <span>dsync.group.user_added</span>.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For more information on best practices for out-of-sequence events, see the <label className='demo-docs-hyperlink'>data syncing guide</label>.</p>

                            </div>

                            <h3 style={{fontFamily: "inconsolata"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>dsync.group.updated</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This event is sent when an attribute of a directory group has changed.</p>

                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingLifecycle ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingLifecycleClicked}
                                    onMouseEnter={this.usingLifecycleEnter}
                                    onMouseLeave={this.usingLifecycleLeave}
                                    style={{fontWeight: usingLifecycle ? "bold" : "normal", backgroundColor: usingLifecycleHovered ? "#e6e6eb": "", width: "100%"}}
                                    >Lifecycle</button>
                                </div>
                                <div style={{borderBottom: usingPayload ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingPayloadClicked}
                                    onMouseEnter={this.usingPayloadEnter}
                                    onMouseLeave={this.usingPayloadLeave}
                                    style={{fontWeight: usingPayload ? "bold" : "normal", backgroundColor: usingPayloadHovered ? "#e6e6eb" : "", width: "100%"}}
                                    >Payload</button>
                                </div>
                            </div>

                            {usingLifecycle && 
                           
                                <div id='img80' className={`enlargable-image-container ${this.state.enlargedImageId === 'img80' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img80')}>
                                    <img  src='/assets/undrstanding_events_img7.png' alt="Enlargable" className="image" />
                                </div>
                                
                            }

                            {usingPayload && 
                                
                                <CodeSnippetStruct 
                                id={37}
                                headerTabs={0}
                                dropdownDisabled={true}
                                dropdownDisabledAndHidden={true}
                                showOnlyJSONTab={true}
                                sideBarOpen={sidebarMenuClicked}
                                snippet="Sample event object" 
                                updateSelectedLang={this.newLangSelected}
                                selectedLang={this.state.currentSelectedLanguage}/>
                            
                            }

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The payload for <span>dsync.group.updated</span> events shows changes between directory group snapshots in the <span>previous_attributes property</span>.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The changes in the object are shallow differences for root properties, <span>raw_attributes</span>, and <span>custom_attributes</span>. If the current snapshot has a new attribute that did not exist previously, then the value for the attribute will be indicated as <span>null</span>.</p>


                                <h3 style={{fontFamily: "inconsolata"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>dsync.group.deleted</h3>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This event occurs when deleting a directory group in the directory provider.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a <span>dsync.group.deleted</span> event is received, it indicates that the members in that group have been deleted in WorkOS. You can process the <span>dsync.group.deleted</span> event accordingly in your application, removing the group’s members from your application or marking them as deleted. <span>dsync.group.user_removed</span> events will not be sent for the members in the deleted group.</p>

                            </div>

                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingLifecycle ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingLifecycleClicked}
                                    onMouseEnter={this.usingLifecycleEnter}
                                    onMouseLeave={this.usingLifecycleLeave}
                                    style={{fontWeight: usingLifecycle ? "bold" : "normal", backgroundColor: usingLifecycleHovered ? "#e6e6eb": "", width: "100%"}}
                                    >Lifecycle</button>
                                </div>
                                <div style={{borderBottom: usingPayload ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingPayloadClicked}
                                    onMouseEnter={this.usingPayloadEnter}
                                    onMouseLeave={this.usingPayloadLeave}
                                    style={{fontWeight: usingPayload ? "bold" : "normal", backgroundColor: usingPayloadHovered ? "#e6e6eb" : "", width: "100%"}}
                                    >Payload</button>
                                </div>
                            </div>

                            {usingLifecycle && 
                           
                                <div id='img81' className={`enlargable-image-container ${this.state.enlargedImageId === 'img81' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img81')}>
                                    <img  src='/assets/undrstanding_events_img8.png' alt="Enlargable" className="image" />
                                </div>
                                
                            }

                            {usingPayload && 
                                
                                <CodeSnippetStruct 
                                id={38}
                                headerTabs={0}
                                dropdownDisabled={true}
                                dropdownDisabledAndHidden={true}
                                showOnlyJSONTab={true}
                                sideBarOpen={sidebarMenuClicked}
                                snippet="Sample event object" 
                                updateSelectedLang={this.newLangSelected}
                                selectedLang={this.state.currentSelectedLanguage}/>
                            
                            }

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If your app relies on groups to sync users or map roles, you should remove access for the users who belonged to the deleted group.</p>

                            <h3 style={{fontFamily: "inconsolata"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>dsync.group.user_added</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This event occurs when adding a directory user to a directory group.</p>

                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingLifecycle ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingLifecycleClicked}
                                    onMouseEnter={this.usingLifecycleEnter}
                                    onMouseLeave={this.usingLifecycleLeave}
                                    style={{fontWeight: usingLifecycle ? "bold" : "normal", backgroundColor: usingLifecycleHovered ? "#e6e6eb": "", width: "100%"}}
                                    >Lifecycle</button>
                                </div>
                                <div style={{borderBottom: usingPayload ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingPayloadClicked}
                                    onMouseEnter={this.usingPayloadEnter}
                                    onMouseLeave={this.usingPayloadLeave}
                                    style={{fontWeight: usingPayload ? "bold" : "normal", backgroundColor: usingPayloadHovered ? "#e6e6eb" : "", width: "100%"}}
                                    >Payload</button>
                                </div>
                            </div>

                            {usingLifecycle && 
                           
                                <div id='img82' className={`enlargable-image-container ${this.state.enlargedImageId === 'img82' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img82')}>
                                    <img  src='/assets/undrstanding_events_img9.png' alt="Enlargable" className="image" />
                                </div>
                                
                            }

                            {usingPayload && 
                                
                                <CodeSnippetStruct 
                                id={39}
                                headerTabs={0}
                                dropdownDisabled={true}
                                dropdownDisabledAndHidden={true}
                                showOnlyJSONTab={true}
                                sideBarOpen={sidebarMenuClicked}
                                snippet="Sample event object" 
                                updateSelectedLang={this.newLangSelected}
                                selectedLang={this.state.currentSelectedLanguage}/>
                            
                            }

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you map roles using groups, you should assign the group’s role to the newly added user.</p>

                            <h3 style={{fontFamily: "inconsolata"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>dsync.group.user_removed</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This event occurs when removing a directory user from a directory group.</p>

                            <div className='two-tab-selection'>
                                <div style={{borderBottom: usingLifecycle ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingLifecycleClicked}
                                    onMouseEnter={this.usingLifecycleEnter}
                                    onMouseLeave={this.usingLifecycleLeave}
                                    style={{fontWeight: usingLifecycle ? "bold" : "normal", backgroundColor: usingLifecycleHovered ? "#e6e6eb": "", width: "100%"}}
                                    >Lifecycle</button>
                                </div>
                                <div style={{borderBottom: usingPayload ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                    <button
                                    onClick={this.usingPayloadClicked}
                                    onMouseEnter={this.usingPayloadEnter}
                                    onMouseLeave={this.usingPayloadLeave}
                                    style={{fontWeight: usingPayload ? "bold" : "normal", backgroundColor: usingPayloadHovered ? "#e6e6eb" : "", width: "100%"}}
                                    >Payload</button>
                                </div>
                            </div>

                            {usingLifecycle && 
                           
                                <div id='img83' className={`enlargable-image-container ${this.state.enlargedImageId === 'img83' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img83')}>
                                    <img  src='/assets/undrstanding_events_img10.png' alt="Enlargable" className="image" />
                                </div>
                                
                            }

                            {usingPayload && 
                                
                                <CodeSnippetStruct 
                                id={40}
                                headerTabs={0}
                                dropdownDisabled={true}
                                dropdownDisabledAndHidden={true}
                                showOnlyJSONTab={true}
                                sideBarOpen={sidebarMenuClicked}
                                snippet="Sample event object" 
                                updateSelectedLang={this.newLangSelected}
                                selectedLang={this.state.currentSelectedLanguage}/>
                            
                            }

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you map roles using groups, you should remove the group’s role from the user who belonged to the group.</p>



                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Data reconciliation techniques</h1>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>With the WorkOS state API</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The WorkOS API allows for data reconciliation for your app. You can use the WorkOS API to pull the latest data to reconcile any data discrepancies between WorkOS and your app.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A standard method apps use for data reconciliation is to set up a cron job that pulls from the WorkOS API on a consistent interval, e.g., every 1 to 6 hours, depending on your app’s user provisioning volume.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <div className='api-keys'>
                                        <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}><strong>Known issue:</strong> Keeping track of WorkOS updated timestamps is of limited use right now because group membership changes for users do not alter the WorkOS <span style={{backgroundColor: "#ccc"}}>updated_at</span> timestamp. We’re actively working on this issue.</p>
                                    </div>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The general approach for performing a full sync of Directory Sync objects goes as follows:</p>

                            <ol>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Traverse all directory groups and update all local objects.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Traverse all directory users and update all local objects.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Extract group membership information from each user. Compare with local membership state. Add and remove memberships accordingly.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Compare the list of local users to all users seen in WorkOS traversal. Deactivate any users that exist locally but not on WorkOS.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Compare the list of local groups to all groups seen on WorkOS traversal. Deactivate any groups that exist locally but not on WorkOS.</p></li>
                            </ol>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>With the events API</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can also reconcile directory data using the events API. See our <label className='demo-docs-hyperlink'>data syncing guide</label> to learn more.</p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>User Attributes</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Configure how attributes map from directory providers to Directory Users.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {userAttributes && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>User Attributes</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Configure how attributes map from directory providers to Directory Users.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS can automatically find and normalize most common attributes from directory providers into the Directory User object, which represents an enterprise user. More unique cases can be mapped by your customers; i.e. IT Admins.</p>

                            <div onClick={() => this.hiddenDropdownBtnClicked(1)} className='hidden-dropdown-btn'>
                                <div className='hdb-icon'>
                                    <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : ""}} className={hiddenDropdownBtn1 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                </div>
                                <div className='hdb-text'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Directory User Object</strong></p>
                                </div>
                            </div>

                            <CSSTransition
                            in={hiddenDropdownBtn1}
                            timeout={500}
                            classNames="dialog-slide"
                            unmountOnExit
                            >
                                <div style={{marginTop: "2.5%"}}>
                                    
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Here is an example Directory User. The data stored varies per directory provider and may include attributes such as photo URLs, pay groups, supervisors, etc.</p>

                                    <CodeSnippetStruct 
                                    id={41}
                                    headerTabs={0}
                                    dropdownDisabled={true}
                                    dropdownDisabledAndHidden={true}
                                    showOnlyJSONTab={true}
                                    sideBarOpen={sidebarMenuClicked}
                                    snippet="Directory User" 
                                    updateSelectedLang={this.newLangSelected}
                                    selectedLang={this.state.currentSelectedLanguage}/>
                                </div>
                            </CSSTransition>

                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In this guide, we’ll explain how to map data from directory providers to the Directory Users.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Definitions</h1>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>Standard attributes</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>The most common user information, normalized across providers.</p>
                                </div>
                            </div>
                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>Auto-mapped attributes</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Detailed user attributes for specific use cases, normalized across providers. You can opt-in to each attribute you want to receive.</p>
                                </div>
                            </div>
                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>Custom-mapped attributes</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>For unique cases, you can create your own attributes that your customers can map when setting up a directory.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>Raw attributes</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <div className='api-keys'>
                                        <p>The entire unprocessed attribute payload that we receive from the directory provider and provide in a field called <span>raw_attributes</span>.</p>
                                    </div>
                                </div>
                            </div>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Standard attributes</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Every Directory User comes with the following standard attributes. These are the core set of attributes that are common across all identity providers. These are structured fields with a guaranteed schema in the top-level Directory User payload.</p>

                            <div className='complex-table-header'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "", marginBottom: sidebarMenuClicked ? "5%" : "3.5%"}}>Attribute</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "60%" : "70%"}} className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "", marginBottom: sidebarMenuClicked ? "5%" : "3.5%"}}>Type and description</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "", marginBottom: sidebarMenuClicked ? "5%" : "3.5%"}}>Status</h5>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>idp_id</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "60%" : "70%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The user’s unique identifier, assigned by the directory provider. Different directory providers use different ID formats</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Required</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>first_name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "60%" : "70%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The user’s first name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Optional</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>last_name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "60%" : "70%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The user’s last name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Optional</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>username</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "60%" : "70%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The user’s username</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Required</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>emails</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "60%" : "70%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The user’s list of email objects (type, value, primary)</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Required</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>state</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "60%" : "70%"}} className='c-table-cell2'>
                                    <div className='api-keys'>
                                        <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The user’s state. May be <span>active</span>, or <span>inactive</span></p>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Required</p>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>job_title</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "60%" : "70%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The user’s job title</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Optional</p>
                                </div>
                            </div>
                        
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Custom attributes</h1>
                            
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For more detailed user information, you can opt-in to auto-mapped custom attributes and define your own custom-mapped custom attributes. Custom attributes will appear in the custom_attributes field. These attributes can be configured in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Auto-mapped attributes</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When enabled, the values will be mapped without additional setup. Not every directory provider has data for every field, so they are always optional if enabled. These fields are named and schematized by WorkOS – they cannot be renamed.</p>
                            
                            <div className='complex-table-header'>
                                <div style={{width: sidebarMenuClicked ? "30%" : "30%"}} className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "", marginBottom: sidebarMenuClicked ? "5%" : "3.5%"}}>Attribute</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "55%" : "55%"}} className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "", marginBottom: sidebarMenuClicked ? "5%" : "3.5%"}}>Type and description</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "15%" : "15%"}} className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "", marginBottom: sidebarMenuClicked ? "5%" : "3.5%"}}>Status</h5>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "30%" : "30%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>addresses</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "55%" : "55%"}} className='c-table-cell2'>
                                    <div className='api-keys'>
                                        <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>TThe user’s list of address objects (<span>street_address</span>, <span>locality</span>, <span>region</span>, <span>postal_code</span>, <span>country</span>, <span>primary</span>, <span>raw_address</span>)</p>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "15%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Optional</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "30%" : "30%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>cost_center_name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "55%" : "55%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The user’s cost center name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "15%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Optional</p>
                                </div>
                            </div>

                            <div  className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "30%" : "30%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>department_name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "55%" : "55%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>TThe user’s department name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "15%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Optional</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "30%" : "30%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>division_name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "55%" : "55%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The user’s division name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "15%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Optional</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "30%" : "30%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>employee_type</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "55%" : "55%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The user’s employment type</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "15%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Optional</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "30%" : "30%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "55%" : "80%", fontFamily: "inconsolata",}}>employment_start_date</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "55%" : "55%"}} className='c-table-cell2'>
                                    <div className='api-keys'>
                                        <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The user’s start date</p>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "15%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Optional</p>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "30%" : "30%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>manager_email</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "55%" : "55%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The email address for the user’s manager</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "15%" : "15%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Optional</p>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Enable or disable an auto-mapped attribute</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Auto-mapped attributes can be enabled or disabled in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> under Directory Sync configuration.</p>

                            <div style={{marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                        <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Updates to these settings will typically take 30 minutes to 1 hour to reflect in your Directory User API response.</p>
                                </div>
                            </div>

                            <div id='img84' className={`enlargable-image-container ${this.state.enlargedImageId === 'img84' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img84')}>
                                <img  src='/assets/user_att_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Support per directory provider</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The following support table outlines the attribute availability across directory providers.</p>

                            <div className='complex-sliding-table-container'>
                               <div style={{width: sidebarMenuClicked ? "44%" : ""}} className='complex-sliding-table-left'>
                                   <div className='complex-sliding-table-left-cell'>
                                       <h5 style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>Attributes</h5>
                                   </div>
                                   <div className='complex-sliding-table-left-cell'>
                                       <p style={{fontSize: sidebarMenuClicked ? "72.3%" : ""}}>addresses</p>
                                   </div>
                                   <div className='complex-sliding-table-left-cell'>
                                       <p style={{fontSize: sidebarMenuClicked ? "72.3%" : ""}}>cost_center</p>
                                   </div>
                                   <div className='complex-sliding-table-left-cell'>
                                       <p style={{fontSize: sidebarMenuClicked ? "72.3%" : ""}}>department_name</p>
                                   </div>
                                   <div className='complex-sliding-table-left-cell'>
                                       <p style={{fontSize: sidebarMenuClicked ? "72.3%" : ""}}>division_name</p>
                                   </div>
                                   <div className='complex-sliding-table-left-cell'>
                                       <p style={{fontSize: sidebarMenuClicked ? "72.3%" : ""}}>employment_start_date</p>
                                   </div>
                                   <div className='complex-sliding-table-left-cell'>
                                       <p style={{fontSize: sidebarMenuClicked ? "72.3%" : ""}}>employee_type</p>
                                   </div>
                                   <div style={{borderBottomLeftRadius: "9px", border: "0px solid transparent"}} className='complex-sliding-table-left-cell'>
                                       <p style={{fontSize: sidebarMenuClicked ? "72.3%" : ""}}>manager_email</p>
                                   </div>
                               </div>
                               <div style={{width: sidebarMenuClicked ? "55%" : ""}} className='complex-sliding-table-right'>
                                   <div class="inner-complex-sliding-table">
                                       <div className='icst-column'>
                                           <div className='icst-cell'>
                                               <h5 style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>SCIM</h5>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div style={{borderBottom: "0px solid transparent"}} className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                       </div>
                                       <div className='icst-column'>
                                           <div className='icst-cell'>
                                               <h5 style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>Google</h5>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div style={{borderBottom: "0px solid transparent"}} className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                       </div>
                                       <div className='icst-column'>
                                           <div className='icst-cell'>
                                               <h5 style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>Workday</h5>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div style={{borderBottom: "0px solid transparent"}} className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                       </div>
                                       <div className='icst-column'>
                                           <div className='icst-cell'>
                                               <h5 style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>HiBob</h5>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div style={{borderBottom: "0px solid transparent"}} className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                       </div>
                                       <div className='icst-column'>
                                           <div className='icst-cell'>
                                               <h5 style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>People HR</h5>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div style={{borderBottom: "0px solid transparent"}} className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                       </div>
                                       <div className='icst-column'>
                                           <div className='icst-cell'>
                                               <h5 style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>BambooHR</h5>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div style={{borderBottom: "0px solid transparent"}} className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                       </div>
                                       <div className='icst-column'>
                                           <div className='icst-cell'>
                                               <h5 style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>Breathe HR</h5>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div style={{borderBottom: "0px solid transparent"}} className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                       </div>
                                       <div className='icst-column'>
                                           <div className='icst-cell'>
                                               <h5 style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>Cezanne HR</h5>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div style={{borderBottom: "0px solid transparent"}} className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#d3eee1", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #d3eee1"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/directory_sync_dos_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                       </div>
                                       <div className='icst-column'>
                                           <div className='icst-cell'>
                                               <h5 style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>Fourth</h5>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                           <div style={{borderBottom: "0px solid transparent"}} className='icst-cell'>
                                               <p style={{fontSize: sidebarMenuClicked ? "70%" : ""}}>
                                               <button style={{backgroundColor: "#fff", width: sidebarMenuClicked ? "14px" : "", height: sidebarMenuClicked ? "14px" : "",  marginTop: sidebarMenuClicked ? "0px" : "", border: "2px solid #fff"}}><img style={{marginBottom: sidebarMenuClicked ? "30%" : "", marginTop: sidebarMenuClicked ? "0px": ""}} src='/assets/user_att_table_dash_icon.png' alt='no img available'/></button>
                                               </p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                              
                           </div>

                           <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Custom-mapped attributes</h3>

                           <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If your application may require additional fields, this is where custom-mapped fields are useful. You can create attributes that appear as fields in the <label className='demo-docs-hyperlink'>Admin Portal</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>. Your customers can map these fields to the correct values in their system when setting up Directory Sync with their directory provider.</p>

                           <div style={{marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                        <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Nested attributes are not supported. These admin-defined attributes must be defined as top-level flat keys.</p>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Create a custom-mapped attribute</h3>

                           <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Custom-mapped attributes can be created in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> under Directory Sync configuration. For attributes set as <i>Required</i>, your customers must map the field to a relevant field in their HRIS or SCIM provider. This can be done via the <label className='demo-docs-hyperlink'>Admin Portal</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <div id='img85' className={`enlargable-image-container ${this.state.enlargedImageId === 'img85' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img85')}>
                                <img  src='/assets/user_att_img2.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Raw attributes</h1>
                            
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>These are unfiltered and unstructured attributes that are unique to each directory provider. These attributes are included as fields in the <span>raw_attributes</span> object that is included in the <label className='demo-docs-hyperlink'>Directory User</label>.</p>
                            </div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Frequently asked questions</h1>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Are existing directories required to update the attribute mapping when new required custom attributes are added?</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>No, when you add a new required custom attribute to your settings, this won’t be retroactively required for directories that have already been set up and configured. However, in the WorkOS dashboard, you will be able to navigate directly to the existing directory and fill in details for those attributes manually.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Can our customers add their own custom attributes outside of what is defined in the WorkOS dashboard?</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>We do not currently support this functionality, as you have to define any custom attributes in the dashboard first. Please reach out to <label className='demo-docs-hyperlink'>support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> if you have a specific use case that you would like to discuss.</p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Role Data</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Learn how to map role data from directory providers to roles in your app.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {roleData && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Role Data</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn how to map role data from directory providers to roles in your app.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>User roles designate what actions a user can perform in your app and what resources they can access. Directory providers store information about user roles in the form of groups or attributes.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This guide will explain common strategies for sourcing roles from directory providers and mapping them to roles in your app.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Definitions</h1>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>Role</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>A primitive in your app that defines specific permissions for the users. Roles are often defined as an ability or a job title, for example, “Editor” or “Accountant”.</p>
                                </div>
                            </div>
                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>Group</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>A collection of users based on shared traits. Groups are defined and managed by IT admins in the directory provider.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>JIT user provisioning</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <div className='api-keys'>
                                        <p>Just-in-time (JIT) user provisioning creates a user in an app when the user attempts to sign in for the first time. The account and respective role doesn’t exist until the user creates it – just-in-time.</p>
                                    </div>
                                </div>
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Role Information</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your customers will store role information in different forms, depending on their preferred provisioning workflow. WorkOS allows for flexibility in how you source role data. You can fetch role data via three distinct mechanisms:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Groups from your customer’s directory provider.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A custom-mapped role attribute from the directory user profile.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A groups attribute in the SSO user profile.</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The type of mechanism needed will depend on the level of support for roles in your app, your app’s architecture, and your customer’s workflows:</p>

                            <div className='complex-table-header'>
                                <div className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Approach</h5>
                                </div>
                                <div className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Your app</h5>
                                </div>
                                <div className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Your customer</h5>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Group mapping</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Sets roles based on your customer’s directory groups</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Uses groups in their directory provider to assign roles in your app</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Attribute mapping</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Sets roles based on a per-user custom-mapped attribute</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Assigns roles using attributes on individual users in their directory provider</p>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>SSO attribute mapping</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>You get role data each time a user logs in (JIT user provisioning)</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Uses groups in their directory provider to assign roles in your app</p>
                                </div>
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Group-based role</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Users are assigned to groups via the directory provider. Groups are typically synonymous with roles in your app. Therefore, IT admins will often map a group one-to-one to a role.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Sample scenario</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Consider the fictional SaaS company <i>HireOS</i>, which offers recruiting software to other businesses. HireOS is an online application allowing customers to track leads, candidates, and interviews.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><i>HireOS</i> has integrated Directory Sync and supports group-based role mapping. For example, a <i>HireOS</i> customer would like to assign their recruiting team to it. The customer’s IT admin would take the following steps:</p>

                            <ol>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Create a group “Recruiting – HireOS Viewer” using their directory provider.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Push the group to <i>HireOS</i> via the directory provider. This is configured in the directory provider admin console.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Go to <i>HireOS'</i> “Settings → Role Mapping” page.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Create a role mapping between “Recruiting – HireOS Viewer” and a e.g. default role of “viewer” on <i>HireOS'</i>.</p></li>
                            </ol>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>From this point on, all new users added to “Recruiting – HireOS Viewer” will be given “viewer” permissions on <i>HireOS'</i>.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There are two ways to access group data. You can source group data from <label className='demo-docs-hyperlink'>directory group</label> objects or the SSO-based groups attribute if your app is using WorkOS <label className='demo-docs-hyperlink'>Single Sign-On</label>.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Directory group</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS normalizes group information across directory providers, so the information you receive is consistent. Your app only interfaces with a <label className='demo-docs-hyperlink'>directory group</label>.</p>

                            <CodeSnippetStruct 
                            id={42}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            showOnlyJSONTab={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Directory group" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your app stores the mapping between the directory group ID and the directory user ID. This relationship defines group memberships for any given user. Keeping an additional mapping between the directory group ID and a role in your app allows you to determine which role a user receives.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Directory groups are a powerful tool to provision users with the correct roles inside your app. WorkOS automatically sends changes to a given directory group to your app. As a result, your app is always up-to-date with real-time updates when an IT admin changes a user’s access to resources. This way, you ensure only authorized users get access to resources without delay.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>SSO-based groups attribute</h3>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>This feature is currently in beta, contact <label className='demo-docs-hyperlink'>customer support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> for more information.</p>
                                </div>
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you have integrated WorkOS <label className='demo-docs-hyperlink'>Single Sign-On</label>, you can retrieve groups via the <span>groups</span> attribute in an <label className='demo-docs-hyperlink'>SSO user profile</label>. There are drawbacks to using SSO-based groups compared to the directory group approach, but it can be quick to set up in some cases.</p>
                            </div>

                            <CodeSnippetStruct 
                            id={43}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            showOnlyJSONTab={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="SSO user profile" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can use these group name(s) to map onto user roles in your app using JIT user provisioning.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Strictly</strong> using JIT user provisioning comes with a few caveats:</p>

                            <div className='api-keys'>
                                <ul>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your app won’t know groups ahead-of-time. As a result, you’ll have to explicitly tell your customer what to name the group(s), thus hardcoding the mapping. e.g., the “Engineering” group always maps to the e.g., “viewer” role in your app.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your app will receive updates to this user’s group data only once they sign in with SSO again. This delay can allow unauthorized users to access resources using a stale role.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Apps often assign a user a default introductory role (instead of mapping the correct role) when using JIT user provisioning.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your customer must explicitly map the SAML <span>groups</span> attribute in the SSO setup so that you can retrieve that attribute in the SSO profile.</p></li>
                                </ul>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For more information, see the <label className='demo-docs-hyperlink'>JIT user provisioning guide</label>.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Attribute-based role</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can use <label className='demo-docs-hyperlink'>custom-mapped attributes</label> if your customers do not use groups to establish and manage user roles.</p>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can create a custom-mapped attribute role (e.g., <span>myRole</span>) in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> under Configuration → Directory Sync. You can set the status of a role attribute to “Required” or “Optional”.</p>
                            </div>

                            <CodeSnippetStruct 
                            id={44}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            showOnlyJSONTab={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Directory user with a custom-mapped attribute" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The newly created attribute will appear as a field in the <label className='demo-docs-hyperlink'>Admin Portal</label>. When setting up Directory Sync with their directory provider in Admin Portal, your customers can map this role field to a field in their directory provider. You’ll have to communicate with your customer what value(s) you expect in the custom-mapped attribute.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>An example being that <span>myRole</span> should be one of <span>"admin"</span>, <span>"viewer"</span>, or <span>"editor"</span>. This allows your app to parse the <span>myRole</span> field value correctly.</p>

                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Role Architecture</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Learn about common app architectures and edge cases for mapping roles.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {roleArchitecture &&
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Role Architecture</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Learn about common app architectures and edge cases for mapping roles.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Apps take different approaches to allow customers to map groups and attributes from their directory providers to roles in the app. For example, some apps chose to surface UI to their end users to perform the mappings. Other times, apps perform the mappings opaquely.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This guide will go over common strategies to allow your customers to map roles in your app.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Definitions</h1>


                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>RBAC</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Role-based access control (or RBAC) is a methodology for restricting app resources to only authorized users. RBAC defines primitives such as roles, resources, users, and policies to configure access control within an app. RBAC is an implementation detail. End users are not aware of RBAC.</p>
                                </div>
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>How to implement role mapping</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>We’ll go over a few common role mapping implementations.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>If you have no roles</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If your app does not support roles, you can essentially ignore the group or attribute-based role data provided by WorkOS. You can build an additional role system at a later date. You can always pull directory group information and perform a migration in your app – to backfill any role data.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>If you have fixed roles</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Maintaining a fixed set of roles is the most common approach apps take. B2B apps often surface a concise set of roles to their users, such as an “Admin”, “Editor”, and “Viewer” role.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A common approach to creating the role mappings is to build a surface in your app that shows an admin the groups associated with their directory provider. Then, your customer can map these groups to roles in your app. Your app then stores the mapping between directory group IDs and roles. Group assignment is the preferred app assignment workflow for many IT admins as it saves on manual per-user assignments.</p>

                            <div id='img86' className={`enlargable-image-container ${this.state.enlargedImageId === 'img86' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img86')}>
                                <img  src='/assets/role_architecture_img1.png' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>As an alternative to building UI, some apps choose to store mappings in a configuration file i.e. a JSON or YAML file.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Alternatively, a <label className='demo-docs-hyperlink'>custom-mapped attribute</label> can be used as a direct mapping if you cannot support UI. Your app will receive all custom attribute changes in real-time.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Initial directory setup</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When your customer first activates their directory, your app will not have role mapping configuration set at this point. Despite this, WorkOS will send you events based on changes to the directory. To account for the role mapping not being set, you can grant all incoming users a default role until the role mapping setup is complete.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>After that point, you can backfill existing users with the correct roles. To backfill, you can initiate a sync to pull the latest directory state using one of the <span className='demo-docs-hyperlink'>WorkOS SDKs</span>.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>If you have custom roles</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Often, custom role creation functionality uses RBAC under the hood. For example, you can use RBAC alongside Directory Sync to map custom role information to your customer’s custom roles. This workflow remains the same as the fixed roles architecture, with an additional role creation UI in your app. Creating mappings is performed as usual, with IT admins additionally allowed to create custom roles.</p>

                            <div id='img87' className={`enlargable-image-container ${this.state.enlargedImageId === 'img87' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img87')}>
                                <img  src='/assets/role_architecture_img2.png' alt="Enlargable" className="image" />
                            </div>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can use a custom-mapped attribute as a direct mapping in this scenario. First, you’ll have to let your customers know the new role value allowed in their directory provider. Then, the IT admin must ensure they pass the correct newly created role via their directory provider.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Common edge cases</h1>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>A user is part of multiple groups</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Having a user who belongs to multiple groups is a common scenario. For example, there might be a case where an employee <i>Jane</i> is an <i>Engineering Manager</i> and belongs to an “Engineering”, “Manager”, and “Admin” group. The most common way to map multiple groups to a role is to grant the user the role associated with the most privileged group. In this case, “Admin” has the most permissions, giving <i>Jane</i> the “Admin” role.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Another common approach is to add the permission sets together to grant the user all permissions associated with each role assigned to each group. This role addition means the user receives every permission for each role.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>An IT admin wants the ability to manually override a user’s role</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your customer might want to retain the ability to override a role for a particular user. WorkOS recommends achieving this by using both a group and attribute-based approach. Roles map to groups by default but can be manually modified with attributes if the attribute exists in the directory provider.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can also build override functionality by flagging a specific user’s role as having been set by either Directory Sync or an IT admin. For this case, your app should not sync this particular user’s role from now on, nor have new directory group events overwrite their manually inputted role.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>No role information exists for a particular user</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If no role information exists from any source, granting a user a default role with fewer permissions, such as a “Viewer” role is common.</p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Admin Portal</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>A first-class Single Sign-On and Directory Sync onboarding experience for organization admins.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {adminPortal && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Admin Portal</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>A first-class Single Sign-On and Directory Sync onboarding experience for organization admins.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The Admin Portal provides an out-of-the-box UI for IT admins to configure SSO and Directory Sync Connections. Designed to remove friction, custom walk-through documentation for each Identity Provider means that organization admins can onboard their organizations without high-touch support from your team. Easy to integrate and fully maintained and hosted by WorkOS, the Admin Portal makes the SSO and Directory Sync setup process simple, fast, and secure.</p>

                            <div id='img88' className={`enlargable-image-container ${this.state.enlargedImageId === 'img88' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img88')}>
                                <img  src='/assets/admin_portal_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Workflow Options</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There are two main workflows for initiating an Admin Portal session for IT admins. You can either share a link to the Admin Portal from the WorkOS Dashboard, or you can seamlessly integrate Admin Portal into your application through WorkOS SDKs or APIs.</p>

                            <div id='img89' className={`enlargable-image-container ${this.state.enlargedImageId === 'img89' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img89')}>
                                <img  src='/assets/admin_portal_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you want to provide an IT admin with a link to the Admin Portal, in a email for example, then you would need to create that link in the WorkOS Dashboard.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>However, if you are adding a button to open the Admin Portal from within your application, then you would need to use the API.</p>

                            <div className='complex-table-header'>
                                <div  style={{width: sidebarMenuClicked ? "20%" : "20%"}} className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Workflow</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "25%" : "20%"}}  className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Use cases</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "25%" : "25%"}} className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Security</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "30%" : "35%", float: "left", textAlign: "left"}} className='c-table-header4'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Return URL and Success URLs</h5>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div  style={{width: sidebarMenuClicked ? "20%" : "20%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Share a link from the dashboard</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "25%" : "20%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Setup only</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "25%" : "25%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Can be revoked; Automatically revoked on setup completion; Expires after 30 days</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "30%" : "35%", float: "left", textAlign: "left"}} className='c-table-header4'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Not applicable</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "20%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Generate a link via the API</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "25%" : "20%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Setup and post-configuration</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "25%" : "25%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Can not be revoked; Expires after 5 minutes</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "30%" : "35%", float: "left", textAlign: "left"}} className='c-table-header4'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Can be configured on the <label className='demo-docs-hyperlink'>Redirects</label><span className='demo-docs-hyperlink-icon'><img style={{width: sidebarMenuClicked ? "95%" : "6%"}} className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> page in the dashboard or specified as a parameter for the API</p>
                                </div>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Before getting started</h1>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To get the most out of these guides, you’ll need:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <label className='demo-docs-hyperlink'>WorkOS Account</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p></li>
                            </ul>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>API object definitions</h1>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Connection</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Represents the method by which users of an organization sign in to your application.</p>
                                </div>
                            </div>
                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Organization</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Describes an organization whose users sign in with a SSO Connection, or whose users are synced with a Directory Sync Connection.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Portal Link</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>A temporary link to initiate an Admin Portal session.</p>
                                </div>
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>A</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Setup Link from WorkOS Dashboard</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The Admin Portal Setup Link gives your customer access to a guided configuration experience through our Admin Portal. It instructs them how to configure their Identity or Directory Provider. If successfully configured, no other action is required and you’ll see an Active connection appear under the Organization.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>First decide whether your customer will be configuring an Identity Provider, a Directory Provider OR both. Once you generate a link, the customer will have access for 30 days or until configured.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You’ll need a <label className='demo-docs-hyperlink'>WorkOS Dashboard account</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> to create an organization that will represent the enterprise you are onboarding.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Create Organization</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Sign in to your WorkOS Dashboard account and create a new Organization.</p>

                            <div id='img90' className={`enlargable-image-container ${this.state.enlargedImageId === 'img90' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img90')}>
                                <img  src='/assets/admin_portal_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Generate a Setup Link</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click the “Invite Admin” button, select the features to include and then click “Next.” Enter the email of the IT admin for the organization to automatically send them a setup link, or click “Copy setup link.” Only one link can be active at a time. After creating the initial link, you can click the “Manage” button to revoke the existing link before creating a new one.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Sharing a Setup Link</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you chose to copy the setup link you can share it over email, Slack or direct message. We also recommend including details on what the link does and how long the link is active.</p>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>B</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Integrate with your app</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In this guide, we’ll walk you through the full end-to-end integration of the Admin Portal into your application.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}><label className='demo-docs-hyperlink'>Sign in</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> to your WorkOS Dashboard account to see code examples pre-filled with your test API keys and resource IDs.</p>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Configure Admin Portal redirect links</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In order to integrate, you must configure your app’s default return URI in the production environment. A button in the Admin Portal will use this value to allow users to return to your app unless otherwise specified when generating the Admin Portal link.</p>

                            <div id='img91' className={`enlargable-image-container ${this.state.enlargedImageId === 'img91' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img91')}>
                                <img  src='/assets/admin_portal_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Additionally, you can configure success URIs to redirect users upon successfully setting up Single Sign-On, Directory Sync, or Log Streams.</p>

                            <div id='img92' className={`enlargable-image-container ${this.state.enlargedImageId === 'img92' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img92')}>
                                <img  src='/assets/admin_portal_img5.avif' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>All redirect links must use HTTPS.</p>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can configure these links in the <label className='demo-docs-hyperlink'>Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Install the WorkOS SDK</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS offers native SDKs in several popular programming languages. Choose a language below to see instructions in your application’s language.</p>


                            <div className='demo-docs-languages'>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("javascript")} 
                                    style={{boxShadow: javascriptSelected || yarnSelected ? "0 0 0 2px #6363f1" : "none", border: javascriptSelected || yarnSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{marginTop: sidebarMenuClicked ? "15%" : "0%"}} src='/assets/docs_api_reference_node_language_icon.png' alt='img not available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6.5%"}}>Node.js</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("ruby")}
                                    style={{boxShadow: rubySelected || bundlerSelected ? "0 0 0 2px #6363f1" : "none", border: rubySelected || bundlerSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "43%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "30%" : "20%"}} src='/assets/docs_api_reference_ruby_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6%", fontSize: sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""}}>Ruby</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("laravel")}
                                    style={{boxShadow: laravelSelected ? "0 0 0 2px #6363f1" : "none", border: laravelSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "50%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "30%" : "20%"}} src='/assets/docs_api_reference_laravel_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6.5%"}}>Laravel</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("python")}
                                    style={{boxShadow: pythonSelected ? "0 0 0 2px #6363f1" : "none", border: pythonSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "52%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "27%" : "17%"}} src='/assets/docs_api_reference_python_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6%"}}>Python</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='demo-docs-languages'>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("php")}
                                    style={{boxShadow: phpSelected ? "0 0 0 2px #6363f1" : "none", border: phpSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "77.5%"}} src='/assets/docs_api_reference_php_language_icon.png' alt='img not available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "0px"}}>PHP</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("go")}
                                    style={{boxShadow: goSelected ? "0 0 0 2px #6363f1" : "none", border: goSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "78%", marginTop: sidebarMenuClicked ? "15%" : "7.5%"}} src='/assets/docs_api_reference_go_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "2%"}}>Go</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("java")}
                                    style={{boxShadow: javaSelected || gradleSelected ? "0 0 0 2px #6363f1" : "none", border: javaSelected || gradleSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "52%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "22%" : "17%"}} src='/assets/docs_api_reference_java_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6%"}}>Java</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("dotnet")}
                                    style={{boxShadow: dotnetSelected ? "0 0 0 2px #6363f1" : "none", border: dotnetSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{marginTop: sidebarMenuClicked ? "18%" : "10%"}} src='/assets/docs_api_reference_net_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6.3%"}}>.NET</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""} style={{color: "#5e626a", fontSize: "80%"}}>Don't see an SDK you need? <label className='client-library-contact-us'>Contact us</label> to request and SDK!</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Install the SDK using the command below.</p>

                            <CodeSnippetStruct
                            id={0}
                            headerTabs={2}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Install the WorkOS SDK"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Set secrets</h3>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To make calls to WorkOS, provide the API key and, in some cases, the client ID. Store these values as managed secrets, such as <span>WORKOS_API_KEY</span> and <span>WORKOS_CLIENT_ID</span>, and pass them to the SDKs either as environment variables or directly in your app’s configuration based on your preferences.</p>
                            </div>

                            <CodeSnippetStruct 
                            id={4}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Environment variables" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Create a new Organization</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each Admin Portal session is scoped to a specific Organization resource, meaning a session is only capable of managing a Connection that belongs to its associated Organization. Organizations may only have one Connection.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For every customer in your application that would like access to the Admin Portal, you must create an Organization and maintain a reference to its ID.</p>

                            <div style={{marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Create an Organization when onboarding a new customer.</p>
                                </div>
                            </div>

                            <CodeSnippetStruct
                            id={45}
                            headerTabs={2}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Create an Organization"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Redirect an IT admin to the Admin Portal</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A Portal Link is your enterprise user’s gateway to accessing their Admin Portal. Each Portal Link is generated using an Organization resource ID. Only resources belonging to the specified Organization can be managed during a Portal Session.</p>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In the API call to generate an Admin Portal Link, you will pass an <span>intent</span> with possible values of <span>sso</span> for an Admin Portal session to create an SSO connection, and <span>dsync</span> for an Admin Portal session to create a Directory Sync connection.</p>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For security reasons, Portal Links expire 5 minutes after they’re created, so we recommend redirecting users immediately (i.e. don’t email the user Portal Links).</p>

                            <div style={{marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>The endpoint that redirects a user to the Admin Portal should be guarded by auth in your application and only available to IT admins.</p>
                                </div>
                            </div>

                            <CodeSnippetStruct
                            id={46}
                            headerTabs={2}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Redirect to Admin Portal"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>An optional return_url parameter can be used to describe exactly where a user should be sent when they are finished in the Admin Portal. If one is not provided, the success URL configured on the <label className='demo-docs-hyperlink'>Redirects</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> page of the dashboard will be used.</p>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>C</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Using Admin Portal</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In this guide, we’ll review the features of Admin Portal from an IT manager’s perspective.</p>

                            <div id='img93' className={`enlargable-image-container ${this.state.enlargedImageId === 'img93' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img93')}>
                                <img  src='/assets/admin_portal_img6.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You may also edit your metadata configuration from the Admin Portal.</p>

                            <div id='img94' className={`enlargable-image-container ${this.state.enlargedImageId === 'img94' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img94')}>
                                <img  src='/assets/admin_portal_img7.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The Recent Events section displays a list of recent connection events by timestamp, and can be sorted by <span>state</span>.</p>
                            </div>

                            <div id='img95' className={`enlargable-image-container ${this.state.enlargedImageId === 'img95' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img95')}>
                                <img  src='/assets/admin_portal_img8.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click on an event in the list to see event details, such as the request made to the IdP, and the response.</p>

                            <div id='img96' className={`enlargable-image-container ${this.state.enlargedImageId === 'img96' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img96')}>
                                <img  src='/assets/admin_portal_img9.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you wish to reset your SSO connection and set it up from scratch, select “Reset Connection” and follow the prompts.</p>

                            <div id='img97' className={`enlargable-image-container ${this.state.enlargedImageId === 'img97' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img97')}>
                                <img  src='/assets/admin_portal_img10.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Managing Directories</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>On the Admin Portal Directory Sync screen, you can view the directory provider details and connection status, user and group counts, last sync time, and a full user list. Hover over the groups column for a particular user to see the list of groups they are in.</p>

                            <div id='img98' className={`enlargable-image-container ${this.state.enlargedImageId === 'img98' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img98')}>
                                <img  src='/assets/admin_portal_img11.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Example Apps</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>View sample Admin Portal apps for each SDK.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {exampleAppsAdminPortal && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Example Apps</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>View sample Admin Portal apps for each SDK.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can view minimal example apps that demonstrate how to use the WorkOS SDKs to power the Admin Portal:</p>

                            <div className='example-apps-container' style={{marginBottom: "5%"}}>
                                <div className='example-app-container'>
                                    <img style={{width: "20%", marginTop: "5%"}} src='/assets/docs_api_reference_node_language_icon.png' alt='img not available'/>
                                    <p style={{marginTop: "12%"}}>github.com</p>
                                    <h5>Node.js Admin Portal app</h5>
                                </div>
                                <div className='example-app-container'>
                                <img style={{width: "14%"}} src='/assets/docs_example_apps_typescript_icon.png' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>TypeScript Admin Portal app</h5>
                                </div>
                                <div className='example-app-container'>
                                    <img style={{width: "12%", marginTop: "8%"}} src='/assets/docs_api_reference_ruby_language_icon.png' alt='img not available'/>
                                    <p style={{marginTop: "17%"}}>github.com</p>
                                    <h5>Ruby Admin Portal app</h5>
                                </div>
                            </div>

                            <div className='example-apps-container' style={{marginBottom: "5%"}}>
                                <div className='example-app-container'>
                                    <img src='/assets/flask-logo.svg' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>Python Flask Admin Portal app</h5>
                                </div>
                                <div className='example-app-container'>
                                <img src='/assets/docs_example_apps_django_icon.png' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>Python Django Admin Portal app</h5>
                                </div>
                                <div className='example-app-container'>
                                    <img style={{width: "25%", marginTop: "2%"}} src='/assets/docs_api_reference_go_language_icon.png' alt='img not available'/>
                                    <p style={{marginTop: "11%"}}>github.com</p>
                                    <h5>Go Admin Portal app</h5>
                                </div>
                            </div>

                            <div className='example-apps-container' style={{marginBottom: "5%"}}>
                                <div className='example-app-container'>
                                    <img src='/assets/docs_api_reference_java_language_icon.png' alt='img not available'/>
                                    <p>github.com</p>
                                    <h5>Java Admin Portal app</h5>
                                </div>
                                <div className='example-app-container'>
                                <img style={{width: "25%", marginTop: "2%"}} src='/assets/docs_api_reference_php_language_icon.png' alt='img not available'/>
                                    <p style={{marginTop: "11%"}}>github.com</p>
                                    <h5>PHP Admin Portal app</h5>
                                </div>
                                <div className='example-app-container'>
                                    <img style={{width: "20%", marginTop: "4%"}} src='/assets/docs_api_reference_net_language_icon.png' alt='img not available'/>
                                    <p >github.com</p>
                                    <h5>.NET Admin Portal app</h5>
                                </div>
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Custom Branding</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Use your own logo and colors in the Admin Portal.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {customBranding && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Custom Branding</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Use your own logo and colors in the Admin Portal.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can customize the look and feel of the Admin Portal from the WorkOS Dashboard. Go to <label className='demo-docs-hyperlink'>Branding Settings</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> where you can:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Upload your logos</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Set your brand color</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>View your custom domains</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Custom branding can be tested for free in the staging environment. You need the <label className='demo-docs-hyperlink'>WorkOS Enterprise Plan</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> to enable custom branding in the production environment</p>

                            <div id='img98' className={`enlargable-image-container ${this.state.enlargedImageId === 'img98' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img98')}>
                                <img  src='/assets/custom_branding_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Logos and icons</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can upload custom branding assets which will be used in the Admin Portal as well as emails.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Logo</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Image with your company’s logo and wordmark used in the Admin Portal.</p>

                            <div id='img99' className={`enlargable-image-container ${this.state.enlargedImageId === 'img99' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img99')}>
                                <img  src='/assets/custom_branding_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Logo icon</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Square aspect ratio icon used in emails.</p>

                            <div id='img100' className={`enlargable-image-container ${this.state.enlargedImageId === 'img100' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img100')}>
                                <img  src='/assets/custom_branding_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Favicon</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Used as the favicon in Admin Portal.</p>

                            <div id='img101' className={`enlargable-image-container ${this.state.enlargedImageId === 'img101' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img101')}>
                                <img  src='/assets/custom_branding_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Brand Color</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Hex value used as the background color for buttons in the Admin Portal and emails.</p>

                            <div id='img102' className={`enlargable-image-container ${this.state.enlargedImageId === 'img102' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img102')}>
                                <img  src='/assets/custom_branding_img5.avif' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginTop: "5%"}} id='img103' className={`enlargable-image-container ${this.state.enlargedImageId === 'img103' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img103')}>
                                <img  src='/assets/custom_branding_img6.avif' alt="Enlargable" className="image" />
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Custom domains</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS allows you to customize the domain you send API calls to, the domain used by the Admin Portal, and the from address used in emails sent to your customer’s IT admin.</p>

                            <div id='img104' className={`enlargable-image-container ${this.state.enlargedImageId === 'img104' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img104')}>
                                <img  src='/assets/custom_branding_img7.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Auth link domain</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Controls the domain you send API calls to and the domain used in URL’s that face your customer’s IT admin such as ACS URL and SP Entity ID.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Admin Portal domain</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Controls the domain of Admin Portal setup links and Admin Portal sessions opened by your customer’s IT admin.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Email domain</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Controls the from address for emails sent to your customer’s IT admin.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To configure custom domains, please reach out to <label className='demo-docs-hyperlink'>customer support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> for assistance.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Team name</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your team name is visible in the Admin Portal and in the emails received by your customers’ organization admins. Learn how to change your team name in <label className='demo-docs-hyperlink'>team settings</label>.</p>

                            <div id='img105' className={`enlargable-image-container ${this.state.enlargedImageId === 'img105' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img105')}>
                                <img  src='/assets/custom_branding_img8.avif' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginTop: "5%"}} id='img106' className={`enlargable-image-container ${this.state.enlargedImageId === 'img106' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img106')}>
                                <img  src='/assets/custom_branding_img9.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Audit Logs</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Ingest and export Audit Log Events from your application.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {auditLogs && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Audit Logs</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Ingest and export Audit Log Events from your application.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Audit Logs are a collection of events that contain information relevant to notable actions taken by users in your application. Every event in the collection contains details regarding what kind of action was taken (<span>action</span>), who performed the action (<span>actor</span>), what resources were affected by the action (<span>targets</span>), and additional details of when and where the action took place.</p>
                            </div>

                            
                            <CodeSnippetStruct
                            id={47}
                            headerTabs={2}
                            sideBarOpen={sidebarMenuClicked}
                            showCodeSnippetHeader={true}
                            snippet=""
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>These events are similar to application logs and analytic events, but are fundamentally different in their intent. They aren’t typically used for active monitoring/alerting, rather they exist as a paper trail of potentially sensitive actions taken by members of an organization for compliance and security reasons.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What you’ll build</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This guide will show you how to:</p>

                            <ol>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Configure and emit Audit Log Events</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Export Audit Log Events</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Create custom metadata schemas for Audit Log Events</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Create new versions of Audit Log Event schemas</p></li>
                            </ol>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Before getting started</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To get the most out of this guide, you’ll need:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <label className='demo-docs-hyperlink'>WorkOS account</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p></li>
                            </ul>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>API object definitions</h1>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Connection</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Represents the method by which users of an organization sign in to your application.</p>
                                </div>
                            </div>
                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Organization</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Describes an organization whose users sign in with a SSO Connection, or whose users are synced with a Directory Sync Connection.</p>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5>Portal Link</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>A temporary link to initiate an Admin Portal session.</p>
                                </div>
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Emit an Audit Log Event</h1>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Install the WorkOS SDK</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS offers native SDKs in several popular programming languages. Choose a language below to see instructions in your application’s language.</p>


                            <div className='demo-docs-languages'>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("javascript")} 
                                    style={{boxShadow: javascriptSelected || yarnSelected ? "0 0 0 2px #6363f1" : "none", border: javascriptSelected || yarnSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{marginTop: sidebarMenuClicked ? "15%" : "0%"}} src='/assets/docs_api_reference_node_language_icon.png' alt='img not available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6.5%"}}>Node.js</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("ruby")}
                                    style={{boxShadow: rubySelected || bundlerSelected ? "0 0 0 2px #6363f1" : "none", border: rubySelected || bundlerSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "43%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "30%" : "20%"}} src='/assets/docs_api_reference_ruby_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6%", fontSize: sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""}}>Ruby</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("laravel")}
                                    style={{boxShadow: laravelSelected ? "0 0 0 2px #6363f1" : "none", border: laravelSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "50%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "30%" : "20%"}} src='/assets/docs_api_reference_laravel_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6.5%"}}>Laravel</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("python")}
                                    style={{boxShadow: pythonSelected ? "0 0 0 2px #6363f1" : "none", border: pythonSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "52%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "27%" : "17%"}} src='/assets/docs_api_reference_python_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6%"}}>Python</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='demo-docs-languages'>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("php")}
                                    style={{boxShadow: phpSelected ? "0 0 0 2px #6363f1" : "none", border: phpSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "77.5%"}} src='/assets/docs_api_reference_php_language_icon.png' alt='img not available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "0px"}}>PHP</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("go")}
                                    style={{boxShadow: goSelected ? "0 0 0 2px #6363f1" : "none", border: goSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "78%", marginTop: sidebarMenuClicked ? "15%" : "7.5%"}} src='/assets/docs_api_reference_go_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "2%"}}>Go</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("java")}
                                    style={{boxShadow: javaSelected || gradleSelected ? "0 0 0 2px #6363f1" : "none", border: javaSelected || gradleSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "52%", paddingBottom: "5%", marginTop: sidebarMenuClicked ? "22%" : "17%"}} src='/assets/docs_api_reference_java_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6%"}}>Java</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("dotnet")}
                                    style={{boxShadow: dotnetSelected ? "0 0 0 2px #6363f1" : "none", border: dotnetSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{marginTop: sidebarMenuClicked ? "18%" : "10%"}} src='/assets/docs_api_reference_net_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p className={sidebarMenuClicked ? "demo-docs-langauge-text-sidebar-p" : ""} style={{marginBottom: "6.3%"}}>.NET</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""} style={{color: "#5e626a", fontSize: "80%"}}>Don't see an SDK you need? <label className='client-library-contact-us'>Contact us</label> to request and SDK!</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Install the SDK using the command below.</p>

                            <CodeSnippetStruct
                            id={0}
                            headerTabs={2}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Install the WorkOS SDK"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Set secrets</h3>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To make calls to WorkOS, provide the API key and, in some cases, the client ID. Store these values as managed secrets, such as <span>WORKOS_API_KEY</span> and <span>WORKOS_CLIENT_ID</span>, and pass them to the SDKs either as environment variables or directly in your app’s configuration based on your preferences.</p>
                            </div>

                            <CodeSnippetStruct 
                            id={4}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Environment variables" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Sign in to your WorkOS Dashboard account and configure Audit Log Event schemas</h3>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Before you can emit any Audit Log Events you must configure the allowed event schemas. To start, click “Create an event” and enter <span>user.signed_in</span> for action, <span>team</span> for targets, and click “Save event”.</p>
                            </div>

                            <div style={{marginTop: "5%"}} id='img107' className={`enlargable-image-container ${this.state.enlargedImageId === 'img107' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img107')}>
                                <img  src='/assets/audit_logs_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Get an Organization ID</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>All events are scoped to an Organization, so you will need the ID of an Organization in order to emit events.</p>

                            <div style={{marginTop: "5%"}} id='img108' className={`enlargable-image-container ${this.state.enlargedImageId === 'img108' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img108')}>
                                <img  src='/assets/audit_logs_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Emit Events</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Using the ID from the Organization, emit an Audit Log Event with the action and targets previously configured.</p>

                            <CodeSnippetStruct
                            id={48}
                            headerTabs={2}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Emit event"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>View ingested events in the Dashboard</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once you have successfully emitted events with the WorkOS SDK, you can view them in the Dashboard under the Organization that the events are associated with.</p>

                            <div style={{marginTop: "5%"}} id='img109' className={`enlargable-image-container ${this.state.enlargedImageId === 'img109' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img109')}>
                                <img  src='/assets/audit_logs_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Exporting Events</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Export Audit Log Events through the WorkOS Dashboard and API.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {exportingEvents && 
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Exporting Events</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Export Audit Log Events through the WorkOS Dashboard and API.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Exporting Events</h1>
                            
                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You may need to export Audit Log Events in large chunks. WorkOS supports exporting events as CSV files through both the Dashboard and API.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Exports are scoped to a single organization within a specified date range. Events from the past three months can be included in the export. You may define additional filters such as <span>actions</span>, <span>actors</span>, and <span>targets</span>.</p>

                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Creating an export through the Dashboard</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Exports can be manually created under the Organization page when viewing Audit Log Events by selecting “Export CSV” from the “Actions” dropdown. Set your filters and select “Generate CSV file”.</p>

                            <div style={{marginTop: "5%"}} id='img110' className={`enlargable-image-container ${this.state.enlargedImageId === 'img110' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img110')}>
                                <img  src='/assets/export_events_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Creating an export through the API</h3>

                            <CodeSnippetStruct
                            id={49}
                            headerTabs={2}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Create an Export"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once the export has been created, fetch the export at a later time to access the <span>url</span> of the generated CSV file.</p>

                            </div>

                            <div style={{marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>The URL will expire after 10 minutes. If the export is needed again at a later time, refetching the export will regenerate the URL.</p>
                                </div>
                            </div>

                            <CodeSnippetStruct
                            id={50}
                            headerTabs={2}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Fetch Export"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If the <span>state</span> of the export is still <span>pending</span>, poll the export until it is ready for download.</p>

                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Metadata Schema</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Define strict JSON Schema for validating event metadata.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {metadataScheme && 
                    <div className='demo-docs-container'>
                        
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Metadata Schema</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Define strict JSON Schema for validating event metadata.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Metadata Schema</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Audit Log Events can contain arbitrary metadata for adding additional details to your events. Normally this data can take any shape. However, custom metadata schemas can be defined when configuring the event for additional type safety and data consistency. When an event is emitted that does not match the provided schema, an error will be returned.</p>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When first creating an event schema, check the “Require metadata schema validation” checkbox. You will then be navigated to the schema editor where you can modify the underlying <label className='demo-docs-hyperlink'>JSON Schema</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> or all <span>metadata</span> objects.</p>
                            
                                <div style={{marginTop: "5%"}} id='img111' className={`enlargable-image-container ${this.state.enlargedImageId === 'img111' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img111')}>
                                    <img  src='/assets/metadata_scheme_img1.avif' alt="Enlargable" className="image" />
                                </div>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There are <span>metadata</span> objects located at the root of the event, and within <span>actor</span> and <span>targets</span> objects. Each can contain a unique JSON Schema. To add to a <span>metadata</span> object, click the ”+” sign.</p>

                            </div>

                            <div style={{marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Metadata objects have a limit of 50 keys. Key names can be up to 40 characters long, and values can be up to 500 characters long.</p>
                                </div>
                            </div>

                            <div style={{marginBottom: "5%"}} id='img112' className={`enlargable-image-container ${this.state.enlargedImageId === 'img112' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img112')}>
                                    <img  src='/assets/metadata_scheme_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <CodeSnippetStruct
                            id={51}
                            headerTabs={2}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Event with metadata"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Editing Events</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Modify existing event configuration with backwards compatibility.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>

                    </div>
                }
            </Styles>
        )
    }
}

//* IMAGE 111 (latest)