import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from '../d_Documentation_Components/d_Code_Snippet_Structure'

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
            signInUX: true,

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
            showEmail2Confirmed: false
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
 

    
    render () {

                //* - STANDALONE APIS SECTIONS VAR(S) - *//
        const { gettingStarted, testSSO, exampleApps, signInUX } = this.state;

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

                        </div>
                    </div>
                }
            </Styles>
        )
    }
}

//* IMAGE 56 (latest)