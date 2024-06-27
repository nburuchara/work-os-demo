import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from '../../d_Documentation_Components/d_Code_Snippet_Structure'
import { CSSTransition } from 'react-transition-group';
import APIReference from './d_API_Reference';

const Styles = styled.div  `

`

export default class Integrations extends Component {
    constructor (props) {
        super(props)
        this.state = {

                //* - INTEGRATIONS SECTIONS - *//
            saml: false,
            scim: false,
            sftp: false,
            openIDConnect: false,
            accessPeopleHR: false,
            adpOpenIDConnect: false,
            apple: false,
            auth0: false,
            awsCognito: false,
            bambooHR: false,
            breatheHR: false,
            bubblePlugin: false,
            casSaml: false,

            prevSelectedPage: "",

                //* - CODE SNIPPET - *//
            currentSelectedLanguage: "javascript",
            codeSnippet1CopyHovered: false,

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

                //* - IMAGE - *//
            enlargedImageId: null, // No image is enlarged initially

                //* - DROPPDOWN BUTTONS - *//
            hiddenDropdownBtn1: false,
        }
    }

    componentDidMount = () => {
        // console.log('selected page: ', this.props.integrationsPage)
        this.getSelectedPage(this.props.scrollToID)
        console.log('scrollID', this.props.scrollToID)
    }

    getSelectedPage = (selectedPage) => {
        const pageMap = {
            "saml": "saml",
            "scim": "scim",
            "sftp": "sftp",
            "openIDConnect": "openIDConnect",
            "accessPeopleHR": "accessPeopleHR",
            "adpOpenIDConnect": "adpOpenIDConnect",
            "apple": "apple",
            "auth0": "auth0",
            "awsCognito": "awsCognito",
            "bambooHR": "bambooHR",
            "breatheHR": "breatheHR",
            "bubblePlugin": "bubblePlugin",
            "casSaml": "casSaml",
            "cezanneHR": "cezanneHR",
            "classLink": "classLink",
            "cloudflare": "cloudflare",
            
        };
      
        const page = pageMap[selectedPage];
        if (page) {
            this.loadSelectedPage(page);
            this.props.hideIntegrationsPage()
            setTimeout(() => {
                this.closeAllPagesExceptSelectedPage(this.props.scrollToID)
            }, 1000)
        } else {
          console.error("Unknown selected page:", selectedPage);
        }
    }

    loadSelectedPage = (selectedPage) => {
        setTimeout (() => {
            this.scrollToTop('top')
        }, 900)
        setTimeout (() => {
            this.setState({
                currentSelectedLanguage: "javascript",
                [`${selectedPage}`]: true
            })
        }, 750)
    }

    scrollToTop = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' }); // Use 'auto' for instant scroll, or 'smooth' for smooth scroll
        }
    }

    closeAllPagesExceptSelectedPage = (searchedTerm) => {
        const pageMap = {
            "saml": "saml",
            "scim": "scim",
            "sftp": "sftp",
            "openIDConnect": "openIDConnect",
            "accessPeopleHR": "accessPeopleHR",
            "adpOpenIDConnect": "adpOpenIDConnect",
            "apple": "apple",
            "auth0": "auth0",
            "awsCognito": "awsCognito",
            "bambooHR": "bambooHR",
            "breatheHR": "breatheHR",
            "bubblePlugin": "bubblePlugin",
            "casSaml": "casSaml",
            "cezanneHR": "cezanneHR",
            "classLink": "classLink",
            "cloudflare": "cloudflare",

        };
        const keys = Object.keys(pageMap);
        for (let i = 0; i < keys.length; i++) {
            if (searchedTerm !== keys[i]) {
                this.setState({
                    [`${pageMap[keys[i]]}`]: false
                })
            }
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.scrollToID !== prevProps.scrollToID) {
            this.getSelectedPage(this.props.scrollToID)
            setTimeout(() => {
                this.closeAllPagesExceptSelectedPage(this.props.scrollToID)
            }, 1000)
        }
        // if (this.props.searchedTerm) {
        //     this.smoothScrollToId(this.props.searchedTerm.lastCat)
        //     setTimeout(() => {
        //         this.closeAllPagesExceptSelectedPage(this.props.scrollToID)
        //     }, 1000)
        // }
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

    toggleEnlarged = (imageId) => {
        this.setState(prevState => ({
            enlargedImageId: prevState.enlargedImageId === imageId ? null : imageId
        }));
    };
    
    render () {
                //* - INTEGRATIONS PAGES - *//
            const { saml, scim, sftp, openIDConnect, accessPeopleHR, adpOpenIDConnect, apple, auth0, awsCognito, bambooHR, breatheHR, bubblePlugin, casSaml, cezanneHR, classLink, cloudflare } = this.state;

                //* - DOCS UI SIZE ADJUSTMENT VAR(S) - *//
            const { sidebarMenuClicked } = this.props;

                //* - LANGUAGE SELECTION VAR(S) - *//
            const { javascriptSelected, yarnSelected, phpSelected, rubySelected, bundlerSelected, laravelSelected, pythonSelected, javaSelected, gradleSelected, goSelected, dotnetSelected } = this.state;

        return (
            <Styles>

                <CSSTransition in={saml}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>SAML</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn how to configure a new custom SAML connection.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each SSO Identity Provider requires specific information to create and configure a new <label className='demo-docs-hyperlink'>Connection</label>. Often, the information required to create a Connection will differ by Identity Provider.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To create a custom SAML Connection, you’ll need the Identity Provider Metadata URL that is available from the organization’s SAML instance.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What WorkOS provides</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS provides the <label className='demo-docs-hyperlink'>ACS URL</label>, the <label className='demo-docs-hyperlink'>SP Entity ID</label>, and the <label className='demo-docs-hyperlink'>SP Metadata</label> link. They are readily available in your Connection Settings in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <div id='img131' className={`enlargable-image-container ${this.state.enlargedImageId === 'img131' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img131')}>
                                <img  src='/assets/saml_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The ACS URL is the location an Identity Provider redirects its authentication response to. The SP Entity ID is a URI used to identify the issuer of a SAML request and the audience of a SAML response. The SP Metadata link contains a metadata file that the organization can use to set up the SAML integration.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What you’ll need</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In order to integrate you’ll need the IdP Metadata URL.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Normally, this information will come from the organization’s IT Management team when they set up your application’s SAML 2.0 configuration in their Identity Provider admin dashboard. But, should that not be the case during your setup, here’s how to obtain them.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >
                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Enter Service Provider Details</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Copy and Paste the “ACS URL” and “SP Entity ID” into the corresponding fields for Service Provider details and configuration. For some SAML setups, you can use the metadata found at the SP Metadata link to configure the SAML connection.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >
                            
                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Obtain Identity Provider Metadata</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Copy the IdP Metadata URL from your SAML settings and upload it to your WorkOS Connection settings. Your Connection will then be linked and good to go!</p>

                            <div id='img132' className={`enlargable-image-container ${this.state.enlargedImageId === 'img132' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img132')}>
                                <img  src='/assets/saml_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Some SAML providers might not be able to provide the IdP Metadata URL. In these cases, you’ll want to manually configure the connection.</p>

                            <div style={{marginBottom: "5%"}} id='img133' className={`enlargable-image-container ${this.state.enlargedImageId === 'img133' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img133')}>
                                <img  src='/assets/saml_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginBottom: "5%"}} id='img134' className={`enlargable-image-container ${this.state.enlargedImageId === 'img134' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img134')}>
                                <img  src='/assets/saml_img4.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configure Attribute Mapping</h1>
                                </div>
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>At a minimum, the Attribute Statement in the SAML Response should include <span>id</span>, <span>email</span>, <span>firstName</span>, and <span>lastName</span> attributes.</p>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Users can <label className='demo-docs-hyperlink'>automatically be assigned roles within your application</label> by sending their group memberships. To enable this, set up a group attribute statement following the guidance below.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>This feature is currently in beta, contact <label id='Add an endpoint to initiate SSO' className='demo-docs-hyperlink'>customer support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> for more information.</p>
                                </div>
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To return this information in the attribute statement, map the groups in your identity provider to a SAML attribute named <span>groups</span>.</p>
                            </div>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={scim}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>SCIM</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn about syncing your user list with a custom SCIM provider.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This guide outlines how to synchronize your application’s user and group directories using SCIM v2.0.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To synchronize an organization’s users and groups provisioned for your application, you’ll need to provide the organization with two pieces of information:</p>
                            
                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>An <label className='demo-docs-hyperlink'>Endpoint</label> that the SCIM server will make requests to.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <label className='demo-docs-hyperlink'>Bearer Token</label> to authenticate its endpoint requests.</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Both of these are available in your Endpoint’s Settings in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Set up your directory sync endpoint</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Login to your WorkOS dashboard and select “Organizations” from the left hand Navigation bar.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select the Organization you’d like to enable a SCIM Directory Sync connection for.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>On the Organization’s page go to “Actions” and then click “Add Directory”.</p>

                            <div id='img135' className={`enlargable-image-container ${this.state.enlargedImageId === 'img135' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img135')}>
                                <img  src='/assets/scim_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select “Custom SCIM v2.0” as the directory type, and then input the Company Name.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click the “Create Directory” button.</p>

                            <div id='img136' className={`enlargable-image-container ${this.state.enlargedImageId === 'img136' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img136')}>
                                <img  src='/assets/scim_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The Directory Sync Connection will now display the Endpoint for the SCIM server to send requests to, and the Bearer Token.</p>
                            
                            <div style={{marginBottom: "5%"}} id='img137' className={`enlargable-image-container ${this.state.enlargedImageId === 'img137' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img137')}>
                                <img  src='/assets/scim_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>We have support for custom labeled URLs for Directory Sync endpoints. <label id='Add an endpoint to initiate SSO' className='demo-docs-hyperlink'>Contact us</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> for more info!</p>
                                </div>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configure the SCIM server integration</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS provides you with all of the relevant information for an organization to plug and play SCIM functionality for your application.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Provide the organization with:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The Endpoint from your <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>, and</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>he Bearer Token from your <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once the organization has used these values to configure your application within their SCIM server, then your application is ready to synchronize users and groups.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Assign users and groups to your application</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Now, whenever the organization assigns users or groups to your application, you’ll receive realtime Dashboard updates based on changes in their directory.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A detailed guide to integrate the WorkOS API with your application can be found <label className='demo-docs-hyperlink'>here</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={sftp}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>SFTP</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn about syncing your user list using an SFTP connection.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>An SFTP integration allows an organization to synchronize user and group information by uploading CSV files using SFTP. WorkOS maintains a receiving SFTP server that can be connected to from the organization’s HRIS provider/SFTP client.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If the organization’s HRIS has a built-in SFTP client, SFTP will allow them to automatically sync their data and ensure your data is always up to date. An SFTP integration allows for provider-agnostic ingestion of employee data into your product ecosystem.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once the integration is set up, WorkOS automatically creates and hosts an SFTP folder for the organization’s HRIS provider to upload files at a regular cadence.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>An SFTP integration has the following advantages:</p>
                            
                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Works with any system that has the ability to export CSVs</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Has an easy integration path for an organization comfortable working with CSVs and SFTP</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Allows a custom cadence of updates for your customer</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your app interfaces with an SFTP directory the same as with other directories; receiving events when the directory is created or updated:</p>

                            <div style={{marginBottom: "5%"}} id='img138' className={`enlargable-image-container ${this.state.enlargedImageId === 'img138' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img138')}>
                                <img  src='/assets/sftp_img1.png' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Note: The SFTP integration isn’t enabled by default in the WorkOS Dashboard or Admin Portal. Please reach out to <label id='Add an endpoint to initiate SSO' className='demo-docs-hyperlink'>support@workos.com</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> or via your team’s WorkOS Slack channel if you would like SFTP enabled.</p>
                                </div>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What WorkOS provides</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS provides an SFTP server URL and username specific to the directory. Once set up, the URL and username will be available under directory settings in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The SFTP URL is the location of the SFTP server to upload user and group information. Authentication uses a username and a key pair.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What you’ll need</h1>
                            
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You’ll need to provide a public key for authentication. Normally this will come from a key pair provided your customer’s IT team and may be created by their HRIS. Maximum key length is 2048 bytes and supported keys are: <span>ED25519</span>, <span>RSA</span>, and <span>ECDSA</span>.</p>
                            </div>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your customer will need to export the users and groups as CSV files with the structure below.</p>

                            <h3 style={{fontFamily: "inconsolata", fontSize: sidebarMenuClicked ? "" : "110%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>users.csv</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This file is required.</p>

                            <div className='complex-table-header'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>CSV Header</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "", paddingLeft: sidebarMenuClicked ? "5%" : ""}}>Status</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}}  className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Description</h5>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>user_id</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#e5f3fe", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#0072dd"}}>Required</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>A unique ID representing the user</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>first_name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#e5f3fe", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#0072dd"}}>Required</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The first name of the user</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>last_name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#e5f3fe", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#0072dd"}}>Required</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The last name of the user</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>email</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#e5f3fe", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#0072dd"}}>Required</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The primary work email for the user</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>username</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#e5f3fe", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#0072dd"}}>Required</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>A unique human readable user name</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>job_title</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#e5f3fe", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#0072dd"}}>Required</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The job title of the user</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>employee_type</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#fff", border: "1px solid #ccc", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#000"}}>Optional</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The type of employee</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>employment_start_date</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#fff", border: "1px solid #ccc", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#000"}}>Optional</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The date the user started working</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>department_name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#fff", border: "1px solid #ccc", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#000"}}>Optional</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The name of the department the user belongs to</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>manager_email</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#fff", border: "1px solid #ccc", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#000"}}>Optional</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The email of the user’s manager</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>division_name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#fff", border: "1px solid #ccc", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#000"}}>Optional</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The name of the division the user belongs to</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>cost_center_name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#fff", border: "1px solid #ccc", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#000"}}>Optional</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The name of the cost center the user belongs to</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>work_address_street</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#fff", border: "1px solid #ccc", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#000"}}>Optional</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Work street address</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>work_address_locality</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#fff", border: "1px solid #ccc", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#000"}}>Optional</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Work city</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>work_address_region</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#fff", border: "1px solid #ccc", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#000"}}>Optional</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Work state</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>work_address_postal_code</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#fff", border: "1px solid #ccc", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#000"}}>Optional</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Work postal/zip code</p>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>work_address_country</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#fff", border: "1px solid #ccc", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#000"}}>Optional</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Work country</p>
                                </div>
                            </div>

                            <h3 style={{fontFamily: "inconsolata", fontSize: sidebarMenuClicked ? "" : "110%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>user_groups.csv</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This file is required.</p>

                            <div className='complex-table-header'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>CSV Header</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "", paddingLeft: sidebarMenuClicked ? "5%" : ""}}>Status</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}}  className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Description</h5>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>group_name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#e5f3fe", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#0072dd"}}>Required</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The name of the group</p>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>user_id</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#e5f3fe", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#0072dd"}}>Required</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The ID of the user. Must match the user_id on the users.csv file</p>
                                </div>
                            </div>

                            <h3 style={{fontFamily: "inconsolata", fontSize: sidebarMenuClicked ? "" : "110%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>groups.csv</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This file is not required. Additional metadata may be also included in this file.</p>

                            <div className='complex-table-header'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>CSV Header</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "", paddingLeft: sidebarMenuClicked ? "5%" : ""}}>Status</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}}  className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Description</h5>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "40%" : "35%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "78.5%", fontFamily: "inconsolata"}}>group_name</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "20%" : "15%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}><span style={{backgroundColor: "#e5f3fe", padding: "8.5%", paddingTop: "2.5%", paddingBottom: "2.5%", borderRadius: "30px"}}><strong style={{color: "#0072dd"}}>Required</strong></span></p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "40%" : "50%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>The name of the group. Must match the group_name on the user_groups.csv file</p>
                                </div>
                            </div>
                            
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Set up your directory sync endpoint</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Login to your WorkOS Dashboard and select “Organizations” from the left hand navigation bar. Select the organization you’ll be configuring a new Directory Sync connection with.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click “Add Directory”. Select “SFTP” as the directory type, and then enter a name for this directory.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click “Create Directory”.</p>

                            <div id='img139' className={`enlargable-image-container ${this.state.enlargedImageId === 'img139' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img139')}>
                                <img  src='/assets/sftp_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Enter the customer’s public key</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Retrieve the public key that will be used for SFTP from the organization’s admin.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click “Update Directory” in the WorkOS Dashboard.</p>

                            <div id='img140' className={`enlargable-image-container ${this.state.enlargedImageId === 'img140' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img140')}>
                                <img  src='/assets/sftp_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Enter the customer’s public key in the input field.</p>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The SSH public key format should include the key type (e.g. <span>ssh-rsa</span>, <span>ssh-ed25519</span>), base64 encoded body, and an optional comment, with spaces between each element. For example, <span>ssh-rsa AAAABB1 keycomment</span>.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>RSA, ECDSA, and ED25519 keys are accepted.</p>

                                <ul>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For RSA keys, the key type is <span>ssh-rsa</span>.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For ED25519 keys, the key type is <span>ssh-ed25519</span>.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For ECDSA keys, the key type is either<span>ecdsa-sha2-nistp256</span>, <span>ecdsa-sha2-nistp384</span>, or <span>ecdsa-sha2-nistp521</span>, depending on the size of the key generated.</p></li>
                                </ul>

                            </div>

                            <div id='img141' className={`enlargable-image-container ${this.state.enlargedImageId === 'img141' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img141')}>
                                    <img  src='/assets/sftp_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Share SFTP details with your customer</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>After adding the public key, WorkOS generates a username. You will see the green “Linked” icon appear.</p>

                            <div id='img142' className={`enlargable-image-container ${this.state.enlargedImageId === 'img142' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img142')}>
                                    <img  src='/assets/sftp_img5.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Share the username with the organization admin and ask them to upload the CSV files using their private key to <span>sftp.workos.com</span>.</p>

                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>4</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Confirm users and groups are synced</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Now, whenever your customer assigns users or groups to your application, you’ll receive updates based on the changes in their directory.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click on the “Users” tab in the dashboard to view synced users.</p>

                            <div style={{marginBottom: "5%"}} id='img143' className={`enlargable-image-container ${this.state.enlargedImageId === 'img143' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img143')}>
                                    <img  src='/assets/sftp_img6.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A detailed guide to integrate the WorkOS API with your application can be found <label className='demo-docs-hyperlink'>here</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>SFTP Security</h1>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>How is my organization’s data protected in transit?</h3>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>SFTP (Secure File Transfer Protocol) uses SSH (Secure Shell protocol) to symmetrically encrypt traffic after an asymmetric key negotiation for authentication.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Our solution leverages The <label className='demo-docs-hyperlink'>AWS Transfer Family</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> so that we can support a common, secure protocol (SSH) with modern, isolated data storage (AWS S3).</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>We leverage the default security policy (<label className='demo-docs-hyperlink'>security-policy-transfer-2020-06</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>) for the choice of SSH cipher-suites, which determines the strength of cryptographic protection for data in transit.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>How is my organization’s data protected at rest?</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>As the data is stored in an AWS S3 bucket the default (since January 2023) is that it is encrypted at rest (<label className='demo-docs-hyperlink'>SSE-S3</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>). The symmetric encryption used is AES-256, more information is available in <label className='demo-docs-hyperlink'>the FAQ</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>How does WorkOS isolate one of my organization’s data from the other?</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each of the organizations you’re onboarding will <label className='demo-docs-hyperlink'>create an SSH key pair</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>, this consists of a public key, and a private key. They will retain the private key, ensuring that only they can authenticate. The public key uploaded to WorkOS will be used to authenticate the organization’s connection via SFTP.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each of your organizations is mapped to a distinct S3 bucket based on an internal (cryptographically random) identifier for the SSH key pair.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>When does WorkOS dispose of the data and how is this done?</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In either of the following events your organization’s data, and the S3 bucket will be deleted:</p>

                            <ol>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You off-board the organization from your product/service.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You no longer use the WorkOS Directory Sync service.</p></li>
                            </ol>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Frequently asked questions</h1>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>How often do SFTP directories perform a sync?</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>SFTP directories poll every 30 minutes starting from the time of the initial sync, but ultimately depend on how often your customer wants to upload the new files.</p>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={openIDConnect}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>OpenID Connect</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn how to configure a new generic OIDC connection.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each SSO Identity Provider requires specific information to create and configure a new <label className='demo-docs-hyperlink'>connection</label>. Often, the information required to create a connection will differ by Identity Provider.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To create an OpenID Connect (OIDC) connection, you’ll need four pieces of information: a <label className='demo-docs-hyperlink'>Redirect URI</label>, a <label className='demo-docs-hyperlink'>Client ID</label>, a <label className='demo-docs-hyperlink'>Client Secret</label>, and a <label className='demo-docs-hyperlink'>Discovery Endpoint</label>.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What WorkOS provides</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS provides the Redirect URI. It’s readily available in your connection Settings in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>. The Redirect URI is the location an Identity Provider redirects its authentication response to.</p>  

                            <div id='img144' className={`enlargable-image-container ${this.state.enlargedImageId === 'img144' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img144')}>
                                    <img  src='/assets/openid_connect_img1.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What you’ll need</h1>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In order to integrate you’ll need the Client ID, Client Secret, as well as the Discovery Endpoint.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Normally, this information will come from the organization’s IT Management team when they set up your application’s OpenID Connect configuration in their Identity Provider admin dashboard. But, should that not be the case during your setup, here’s how to obtain them.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Create an Application with your IdP</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For SSO to properly function with your Identity Provider, you’ll need to create and configure your OpenID Connect application to support the authorization code grant type and have the redirect URI from WorkOS listed as your login redirect URI.</p>
                            
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Add claims to the ID token</h1>
                                </div>
                            </div>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Add the <span>sub</span>, <span>email</span>, <span>given_name</span>, and <span>family_name</span> claims to the user ID token in your OIDC provider settings. These claims map to the <span>idp_id</span>, <span>email</span>, <span>first_name</span>, and <span>last_name</span> attributes in the user profile returned by WorkOS. If the <span>given_name</span> claim is not available, the <span>name</span> claim will be mapped to the <span>first_name</span> attribute instead. For many providers, these claims are included by default, but for other providers you will need to add these claims.</p>

                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Users can <label className='demo-docs-hyperlink'>automatically be assigned roles within your application</label> by sending their group memberships. To enable this, set up a group attribute statement following the guidance below.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>This feature is currently in beta, contact <label id='Add an endpoint to initiate SSO' className='demo-docs-hyperlink'>customer support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> for more information.</p>
                                </div>
                            </div>

                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Add the <span>groups</span> claim to the user ID token in your OIDC provider settings. This claim should map to a user’s group membership.</p>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Provide your Client Credentials</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>After creating an OpenID Connect application, a Client ID and Client Secret will be provisioned for you by your Identity Provider. Enter these in your Connection Settings in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>4</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Add Discovery Endpoint</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your Identity Provider’s Discovery Endpoint contains important configuration information. Enter this in your connection Settings in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>. Your Connection will then be verified and good to go!</p>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The OIDC discovery endpoint will always end with <span>/.well-known/openid-configuration</span> as described in the <label className='demo-docs-hyperlink'>OpenID Provider Configuration Request documentation</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p>

                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can confirm that the discovery endpoint is correct by entering it in a browser window. If there is a JSON object with metadata about the connection returned, the endpoint is correct.</p>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={accessPeopleHR}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                                <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Access People HR</h1>
                                <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn about syncing your user list with Access People HR.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This guide outlines how to synchronize your application’s Access People HR directories.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To synchronize an organization’s users and groups provisioned for your application, you’ll need the following information from the organization:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Access People HR API key</p></li>
                            </ul>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Note: The Access People HR integration isn’t enabled by default in the WorkOS Dashboard or Admin Portal. Please reach out to <label id='Add an endpoint to initiate SSO' className='demo-docs-hyperlink'>support@workos.com</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> or via your team’s WorkOS Slack channel if you would like Access People HR enabled.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Create an API Key</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The organization will need to create an API key for you. First, they’ll need to log in to their Access People HR admin dashboard and select to the “Settings” page from the side bar menu. Then, select “API” from the Settings side bar menu. On the API Key Management page, select the plus sign to add a new API Key.</p>

                            <div id='img145' className={`enlargable-image-container ${this.state.enlargedImageId === 'img145' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img145')}>
                                    <img  src='/assets/aphr_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In the API Key Generator, give the API Key a descriptive name. Under “Application”, select “Employee”.</p>

                            <div id='img146' className={`enlargable-image-container ${this.state.enlargedImageId === 'img146' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img146')}>
                                    <img  src='/assets/aphr_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>On the Select Permissions page, check only “Get All Employee Detail” and then select “Save”.</p>

                            <div id='img147' className={`enlargable-image-container ${this.state.enlargedImageId === 'img147' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img147')}>
                                    <img  src='/assets/aphr_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>On the API Key Generator page, select “Save”.</p>

                            <div id='img148' className={`enlargable-image-container ${this.state.enlargedImageId === 'img148' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img148')}>
                                    <img  src='/assets/aphr_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Copy and save the API key – this will be used in Step 3.</p>

                            <div id='img149' className={`enlargable-image-container ${this.state.enlargedImageId === 'img149' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img149')}>
                                    <img  src='/assets/aphr_img5.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Create your Directory Sync Connection</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Login to your WorkOS dashboard and select “Organizations” from the left hand Navigation bar.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select the Organization you’d like to enable an Access People HR Directory Sync connection for.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>On the Organization’s page click “Manually Configure Directory”.</p>

                            <div id='img150' className={`enlargable-image-container ${this.state.enlargedImageId === 'img150' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img150')}>
                                    <img  src='/assets/aphr_img6.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select “Access People HR” as the Directory Provider, and then provide a descriptive name for the connection. Select “Create Directory”.</p>

                            <div id='img151' className={`enlargable-image-container ${this.state.enlargedImageId === 'img151' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img151')}>
                                    <img  src='/assets/aphr_img7.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Setup your Directory Sync Connection</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In the directory details section, select “Update Directory”.</p>

                            <div id='img152' className={`enlargable-image-container ${this.state.enlargedImageId === 'img152' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img152')}>
                                    <img  src='/assets/aphr_img8.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Enter your API Key from Step 1, and select “Save Directory Details”.</p>

                            <div id='img153' className={`enlargable-image-container ${this.state.enlargedImageId === 'img153' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img153')}>
                                    <img  src='/assets/aphr_img9.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section' >

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>4</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Sync Users and Groups to Your Application</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Now, you should see users and groups synced over from Access People HR.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Departments from Access People HR are synced as groups in WorkOS. All users are synced, but only those marked as “ACTIVE” or “LEAVER_MARKED” have a state of active.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Frequently asked questions</h1>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>How often do Access People HR directories perform a sync?</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Access People HR directories poll every 30 minutes starting from the time of the initial sync.</p>

                        </div>

                    </div>
                </CSSTransition>

                <CSSTransition in={adpOpenIDConnect}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                                <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>ADP OpenID Connect</h1>
                                <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn how to configure a connection to ADP via OIDC.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each SSO Identity Provider requires specific information to create and configure a new <label className='demo-docs-hyperlink'>Connection</label>. Often, the information required to create a connection will differ by Identity Provider.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>ADP is unique in that it authenticates using the Open ID Connect (OIDC) protocol instead of <label className='demo-docs-hyperlink'>SAML</label>. This means that instead of providing an <label className='demo-docs-hyperlink'>ACS URL</label> and <label className='demo-docs-hyperlink'>SP Entity ID</label> into the IdP, The IdP will provide a client ID and secret. ADP also provides an SSL Certificate and Private RSA Key file to authenticate. These four pieces of information will all need to be uploaded into the WorkOS dashboard in the steps below.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Create a New ADP OIDC Connection in WorkOS</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Navigate to the Organization in your WorkOS Dashboard under which you would like to set up this new SSO connection. Click on the “Manually Configure Connection” button.</p>

                            <div id='img154' className={`enlargable-image-container ${this.state.enlargedImageId === 'img154' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img154')}>
                                    <img  src='/assets/adpoic_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select ADP OIDC as the Identity Provider and select “Create Connection”.</p>

                            <div id='img155' className={`enlargable-image-container ${this.state.enlargedImageId === 'img155' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img155')}>
                                    <img  src='/assets/adpoic_img2.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Select or Create a Project in ADP</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Login to the <label className='demo-docs-hyperlink'>ADP Partner Self Service Portal</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>From this page there are two environments to select from, Development and Production. Please use the environment that best suits your use-case for this SSO connection.</p>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In the selected environment select “Create New Project”.</p>

                            <div id='img156' className={`enlargable-image-container ${this.state.enlargedImageId === 'img156' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img156')}>
                                    <img  src='/assets/adpoic_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Give the project a meaningful name to designate the SSO connection, there is no need to add a description.</p>

                            <div id='img157' className={`enlargable-image-container ${this.state.enlargedImageId === 'img157' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img157')}>
                                    <img  src='/assets/adpoic_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Make the selections “US Marketplace” and “ADP Workforce Now” respectively for the next selections and then click “Next”.</p>

                            <div id='img158' className={`enlargable-image-container ${this.state.enlargedImageId === 'img158' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img158')}>
                                    <img  src='/assets/adpoic_img5.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Finally, select “Other” for the use case that best describes your application and click “Submit”.</p>

                            <div id='img159' className={`enlargable-image-container ${this.state.enlargedImageId === 'img159' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img159')}>
                                    <img  src='/assets/adpoic_img6.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Upload the WorkOS Redirect URI in ADP</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>After configuring the ADP project, the next step is to provide ADP with the redirect URI generated by WorkOS.</p>

                            <div id='img160' className={`enlargable-image-container ${this.state.enlargedImageId === 'img160' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img160')}>
                                    <img  src='/assets/adpoic_img7.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Now that a new project has been created browse to the “Development API Credentials” Tab within the project.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click on the “End-User/SSO sub-tab” from this view.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Paste the <label className='demo-docs-hyperlink'>Redirect URI</label> into the App redirect URI field and click “Update Redirect”.</p>

                            <div id='img161' className={`enlargable-image-container ${this.state.enlargedImageId === 'img161' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img161')}>
                                    <img  src='/assets/adpoic_img8.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>4</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Enter ADP OIDC Client Settings in your WorkOS Dashboard</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Now that the redirect URI has been provided, the next step is to gather the <label className='demo-docs-hyperlink'>Client ID</label> and <label className='demo-docs-hyperlink'>Client Secret</label> from ADP and add it into the WorkOS Dashboard.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Under the same tab used in the previous step, you’ll provide the Client ID and Client Secret from ADP. Click to reveal the secret and copy and paste both the client ID and client secret into the WorkOS dashboard.</p>

                            <div style={{marginBottom: "5%"}} id='img162' className={`enlargable-image-container ${this.state.enlargedImageId === 'img162' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img162')}>
                                    <img  src='/assets/adpoic_img9.avif' alt="Enlargable" className="image" />
                            </div>

                            <div id='img163' className={`enlargable-image-container ${this.state.enlargedImageId === 'img163' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img163')}>
                                    <img  src='/assets/adpoic_img10.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>5</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Upload the ADP SSL Cert and Private Key in your WorkOS Dashboard</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Now that the Client ID and Secret have been provided, the next step is to gather the SSL Certificate and Private Key from ADP and add it into the WorkOS Dashboard.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>ADP uses a two fold certificate method with an SSL certificate and an SSL Private Key. The SSL Private Key is only displayed one time when the certificate is generated. If the certificate has already been generated, the IT Administrator who generated it should have also received the Private Key otherwise a new certificate and key can be generated by browsing to the certificates tab on the left hand navigation.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The SSL Certificate can be found in ADP by browsing to “Certificate” on the left hand nav bar. You can also create a new SSL Certificate and Private Key pair if necessary.</p>

                            <div id='img164' className={`enlargable-image-container ${this.state.enlargedImageId === 'img164' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img164')}>
                                    <img  src='/assets/adpoic_img11.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Upload the two files into your WorkOS dashboard in their respective portals on the connection page and click “Update Connection”.</p>

                            <div id='img165' className={`enlargable-image-container ${this.state.enlargedImageId === 'img165' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img165')}>
                                    <img  src='/assets/adpoic_img12.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>6</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Verify Connection Status in WorkOS</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Navigate back to the connection in your WorkOS dashboard. After a minute or two you should see the connection become Active as indicated by the green badge next to the connection name.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>All that’s left to do now is test out the connection. You can use your own application if it’s connected to WorkOS already, or feel free to use one of our example applications like this <label className='demo-docs-hyperlink'>Python Flask SSO app</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> to get up and running with a PoC quickly.</p>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={apple}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                                <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Apple</h1>
                                <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn how to set up Sign in with Apple.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To configure your global Apple integration you’ll need two pieces of information from WorkOS: a <label className='demo-docs-hyperlink'>Redirect URI</label> and an outbound email domain for Apple’s Private Relay email service.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You’ll also need four pieces of information from an active Apple Developer Account: an Apple Team ID, Apple Service ID, Apple Private Key and Private Key ID.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Testing with default credentials in the staging environment</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS provides a default set of Apple credentials, which allow you to quickly enable and test Sign in with Apple. WorkOS will automatically use the default credentials until you add your own Apple Team ID, Apple Service ID, and Apple Private Key to the configuration in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>The default credentials are only intended for testing and therefore only available in the Staging environment. For your production environment, please follow the steps below to create and specify your own Apple Team ID, Apple Service ID, and Apple Private Key.</p>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Please note that when you are using WorkOS default credentials, Apple’s authentication flow will display the WorkOS name, logo, and other information to users. Once you register your own application and use its credentials for the authentication flow, you will have the opportunity to customize the app.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What WorkOS provides</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Navigate to the Authentication section of the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>. Scroll down to the Apple OAuth section and find the following values in the configuration:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Redirect URI</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>outbound email domains</p></li>
                            </ul>

                            <div id='img166' className={`enlargable-image-container ${this.state.enlargedImageId === 'img166' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img166')}>
                                    <img  src='/assets/apple_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>After the authentication process has completed and a authorization code is granted, the user will be sent to the Redirect URI.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Outbound email domains are registered with Apple’s Private Relay email service. Apple requires outbound email domains and/or email addresses to be registered with Private Relay to deliver email to those users. For more information, see Apple’s documentation on <label className='demo-docs-hyperlink'>Private Relay</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>These values will be used later in the guide.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What you’ll need</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In order to integrate you’ll need an active Apple Developer account. From that Apple Developer account you’ll need:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A Team ID</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A Service ID</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A private key ID</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The private key contents</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Follow these steps to retrieve these values and configure your integration with Apple.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Retrieve the Apple Team ID</h3>
                                    </div>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Sign in to the <label className='demo-docs-hyperlink'>certificates, identifiers, and profiles</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> section of your Apple Developer account. The landing page will have your name, company name, and your Team ID. Note the Team ID value for later.</p>

                            <div id='img167' className={`enlargable-image-container ${this.state.enlargedImageId === 'img167' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img167')}>
                                    <img  src='/assets/apple_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>The Team ID is sensitive and will only be used by the server to communicate with Apple. It should not be shared with the client.</p>
                                </div>
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Register an App ID</h3>
                                    </div>
                                </div>
                            </div>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Skip this step if you already have an App ID.</p>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click on <i>Identifiers</i> on the sidebar, then click on the + button to create a new identifier.</p>

                            <div id='img168' className={`enlargable-image-container ${this.state.enlargedImageId === 'img168' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img168')}>
                                    <img  src='/assets/apple_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>On the next page, select <i>App IDs</i> and click <i>Continue</i>.</p>

                            <div id='img169' className={`enlargable-image-container ${this.state.enlargedImageId === 'img169' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img169')}>
                                    <img  src='/assets/apple_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Next, select <i>App</i> and click <i>Continue</i>.</p>

                            <div id='img170' className={`enlargable-image-container ${this.state.enlargedImageId === 'img170' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img170')}>
                                    <img  src='/assets/apple_img5.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>On the next page, fill in a description and a bundle ID. The bundle ID should be unique and in reverse domain notation, e.g., <span>com.example.myapp</span>.</p>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Also, check the <i>Sign in</i> with <i>Apple</i> box in the Capabilities section. There is no need to update anything in the <i>Edit</i> modal.</p>

                            </div>

                            <div style={{marginBottom: "5%"}} id='img171' className={`enlargable-image-container ${this.state.enlargedImageId === 'img171' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img171')}>
                                    <img  src='/assets/apple_img6.avif' alt="Enlargable" className="image" />
                            </div>

                            <div id='img172' className={`enlargable-image-container ${this.state.enlargedImageId === 'img172' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img172')}>
                                    <img  src='/assets/apple_img7.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Then click <i>Continue</i>. Review your selections and click <i>Register</i>.</p>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Register a Service ID</h3>
                                    </div>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Next we need to create a linked Service ID. Click on <i>Identifiers</i> on the sidebar, then click on the + button.</p>

                            <div id='img173' className={`enlargable-image-container ${this.state.enlargedImageId === 'img173' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img173')}>
                                    <img  src='/assets/apple_img8.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>On the next page, select <i>Services IDs</i> and click <i>Continue</i>.</p>

                            <div id='img174' className={`enlargable-image-container ${this.state.enlargedImageId === 'img174' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img174')}>
                                    <img  src='/assets/apple_img9.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Enter a description and a Service ID. The Service ID should be unique and in reverse domain notation, e.g. <span>com.example.myapp</span>.</p>

                            </div>

                            <div id='img175' className={`enlargable-image-container ${this.state.enlargedImageId === 'img175' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img175')}>
                                    <img  src='/assets/apple_img10.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click <i>Continue</i>. Note the Service ID for later and click <i>Register</i> to create the service.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Now we will configure our new service for Sign in with Apple. First select the new service from the list of Service IDs.</p>

                            <div id='img176' className={`enlargable-image-container ${this.state.enlargedImageId === 'img176' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img176')}>
                                    <img  src='/assets/apple_img11.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Check the <i>Sign in</i> with <i>Apple</i> box and click <i>Configure</i>.</p>

                            <div id='img177' className={`enlargable-image-container ${this.state.enlargedImageId === 'img177' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img177')}>
                                    <img  src='/assets/apple_img12.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Ensure the App ID we created earlier is selected in the dropdown. Then enter <span>api.workos.com</span> in the <i>Domains and Subdomains</i> field and paste the Return URI from the WorkOS dashboard in the <i>Return URLs</i> field.</p>

                            </div>

                            <div id='img178' className={`enlargable-image-container ${this.state.enlargedImageId === 'img178' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img178')}>
                                    <img  src='/assets/apple_img13.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click <i>Done</i> and then <i>Continue</i>. Review your changes and click <i>Save</i>.</p>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>4</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Register a private key</h3>
                                    </div>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click on <i>Keys</i> on the sidebar, then click on the + button to create a new key.</p>

                            <div id='img179' className={`enlargable-image-container ${this.state.enlargedImageId === 'img179' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img179')}>
                                    <img  src='/assets/apple_img14.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>On the next page, enter a human-readable <i>Key Name</i>. Then check the <i>Sign in</i> with <i>Apple</i> box and click <i>Configure</i>.</p>

                            <div id='img180' className={`enlargable-image-container ${this.state.enlargedImageId === 'img180' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img180')}>
                                    <img  src='/assets/apple_img15.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In the <i>Configure</i> dialog, select the App ID we created earlier and click <i>Save</i>.</p>

                            <div id='img181' className={`enlargable-image-container ${this.state.enlargedImageId === 'img181' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img181')}>
                                    <img  src='/assets/apple_img16.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click <i>Continue</i>. Review your changes and click <i>Register</i> to create your key.</p>

                            <div id='img182' className={`enlargable-image-container ${this.state.enlargedImageId === 'img182' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img182')}>
                                    <img  src='/assets/apple_img17.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Make sure to download your new private key. Also note the Key ID for later.</p>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>5</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Provide credentials to WorkOS</h3>
                                    </div>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Navigate back to the <i>Authentication</i> section in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>, and click on <i>Edit</i> under <i>Sign in</i> with <i>Apple</i>.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Toggle <i>Enabled</i> on and provide the credentials from Apple that you generated in the previous steps.</p>

                            <div id='img183' className={`enlargable-image-container ${this.state.enlargedImageId === 'img183' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img183')}>
                                    <img  src='/assets/apple_img18.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>6</span>
                                </div>
                                <div className='label-desc'>
                                    <div className='api-keys'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Set up Private Email Relay</h3>
                                    </div>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Sign in with Apple users can opt to hide their email address when signing in. In order for emails to be sent to those users, we need to configure Private Email Relay.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>On the <i>Sign in</i> with <i>Apple</i> modal, copy the list of outbound email domains.</p>

                            <div id='img184' className={`enlargable-image-container ${this.state.enlargedImageId === 'img184' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img184')}>
                                    <img  src='/assets/apple_img19.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Then open your Apple Developer account and click on <i>Services</i> on the sidebar. Then click on <i>Configure</i> under <i>Sign in</i> with Apple for <i>Email Communication</i>.</p>

                            <div id='img185' className={`enlargable-image-container ${this.state.enlargedImageId === 'img185' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img185')}>
                                    <img  src='/assets/apple_img20.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click the + button next to <i>Email Sources</i> and enter the outbound email domains from the WorkOS dashboard in the <i>Domains and Subdomains</i> text box. Then click <i>Next</i> and <i>Register</i>.</p>

                            <div style={{marginBottom: "5%"}} id='img186' className={`enlargable-image-container ${this.state.enlargedImageId === 'img186' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img186')}>
                                    <img  src='/assets/apple_img21.avif' alt="Enlargable" className="image" />
                            </div>

                            <div id='img187' className={`enlargable-image-container ${this.state.enlargedImageId === 'img187' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img187')}>
                                    <img  src='/assets/apple_img22.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You are now ready to start authenticating with Sign in with Apple. Your users will see the option to Sign in with Apple when visiting your <label className='demo-docs-hyperlink'>AuthKit</label> domain. Alternatively if you’re using the <label className='demo-docs-hyperlink'>standalone SSO API</label>, you can initiate Sign in with Apple by passing <span>AppleOAuth</span> as the <span>provider</span>.</p>

                            </div>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={auth0}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                                <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Auth0</h1>
                                <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn how to configure a connection to Auth0 via SAML.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each SSO Identity Provider requires specific information to create and configure a new <label className='demo-docs-hyperlink'>Connection</label>. Often, the information required to create a Connection will differ by Identity Provider.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To create a Auth0 SAML Connection, you’ll need the Identity Provider metadata that is available from the organization’s Auth0 instance.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Start by logging in to your WorkOS dashboard and browse to the “Organizations” tab on the left hand navigation bar.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select the organization you’d like to configure an Auth0 SAML Connection for, and select “Manually Configure Connection” under “Identity Provider”.</p>

                            <div id='img188' className={`enlargable-image-container ${this.state.enlargedImageId === 'img188' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img188')}>
                                    <img  src='/assets/auth0_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select “Auth0 SAML” from the Identity Provider dropdown, enter a descriptive name for the connection, and then select the “Create Connection” button.</p>

                            <div id='img189' className={`enlargable-image-container ${this.state.enlargedImageId === 'img189' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img189')}>
                                    <img  src='/assets/auth0_img2.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What WorkOS Provides</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS provides the ACS URL and SP Entity ID, which are readily available in your Connection Settings in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <div id='img190' className={`enlargable-image-container ${this.state.enlargedImageId === 'img190' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img190')}>
                                    <img  src='/assets/auth0_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The ACS URL is the location an Identity Provider redirects its authentication response to. In Auth0’s case, the ACS URL needs to be set by the organization when configuring your application in their Auth0 instance.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The SP Entity ID is a URI used to identify the issuer of a SAML request and the audience of a SAML response. In this case, the SP Entity ID is used to communicate that WorkOS will be the party performing SAML requests to the organization’s Auth0 instance, and that WorkOS is the intended audience of the SAML responses from the Auth0 instance.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Specifically, the ACS URL will need to be set as the “Application Callback URL” on the SAML2 Web App Settings page found under the “Addons” tab in an Auth0 application. You will need to toggle on the SAML2 Web App for the settings modal to appear where you can add the ACS URL under the Application Callback URL input.</p>

                            <div style={{marginBottom: "5%"}} id='img191' className={`enlargable-image-container ${this.state.enlargedImageId === 'img191' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img191')}>
                                    <img  src='/assets/auth0_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <div id='img192' className={`enlargable-image-container ${this.state.enlargedImageId === 'img192' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img192')}>
                                    <img  src='/assets/auth0_img5.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The SP Entity ID will need to be set as the “audience” value in the Settings JSON object on the SAML2 Web App Settings page.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>After the Application Callback URL and Audience have been added, scroll to the bottom and click “Enable”.</p>

                            <div id='img193' className={`enlargable-image-container ${this.state.enlargedImageId === 'img193' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img193')}>
                                    <img  src='/assets/auth0_img6.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What you’ll need</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In order to integrate you’ll need the Auth0 IdP Metadata URL.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Normally, this information will come from the organization’s IT Management team when they set up your application’s SAML 2.0 configuration in their Auth0 admin dashboard. Here’s how to obtain them:</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Log In and Select Your Application</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Log in to <label className='demo-docs-hyperlink'>Auth0</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>, go to the admin dashboard, select “Applications” in the sidebar, and then select the “Applications” menu option. Next, select your application from the list of applications.</p>

                            <div id='img194' className={`enlargable-image-container ${this.state.enlargedImageId === 'img194' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img194')}>
                                    <img  src='/assets/auth0_img7.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Obtain Identity Provider Metadata</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>On the application’s Settings page, scroll down to the bottom and expand the “Advanced Settings” section. Select the “Endpoints” tab and copy the SAML Metadata URL. You’ll need this in the next step.</p>

                            <div id='img195' className={`enlargable-image-container ${this.state.enlargedImageId === 'img195' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img195')}>
                                    <img  src='/assets/auth0_img8.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Upload Metadata URL</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Finally, upload the SAML Metadata URL you saved earlier in your WorkOS Connection settings. Your Connection will then be linked and good to go!</p>

                            <div id='img196' className={`enlargable-image-container ${this.state.enlargedImageId === 'img196' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img196')}>
                                    <img  src='/assets/auth0_img9.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={awsCognito}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                                <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>AWS Cognito</h1>
                                <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn how to use WorkOS with your existing AWS Cognito applications.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This guide outlines the steps to make WorkOS SSO Connections available to AWS Cognito applications without requiring changes to your existing application code.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The integration works by configuring WorkOS connections as third-party <label className='demo-docs-hyperlink'>Identity Providers</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> inside a Cognito User Pool which enables users to sign in to a Cognito application leveraging all SSO integrations supported by WorkOS.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>The AWS Cognito integration is in feature preview. Reach out to <label id='Add an endpoint to initiate SSO' className='demo-docs-hyperlink'>WorkOS support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> if you want early access.</p>
                                </div>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configure AWS IAM role</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS manages the configuration of the Cognito Identity Providers by leveraging AWS role delegation. You will need to create an IAM role in your AWS account that grants permissions to the WorkOS AWS account. This is can be easily accomplished through the AWS Console.</p>

                            <div id='img197' className={`enlargable-image-container ${this.state.enlargedImageId === 'img197' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img197')}>
                                    <img  src='/assets/aws_cognito_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The external ID will be provided by the WorkOS support team upon request. The AWS account ID should be <span>611361754156</span> which is the ID of a dedicated WorkOS AWS account used for Cognito integrations.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You will need to attach the following policy to the role so that the Identity Providers can be managed when the role is assumed by WorkOS.</p>

                            </div>

                            <CodeSnippetStruct 
                            id={109}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            showOnlyJSONTab={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="IAM Policy" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Complete the creation of the role and take note of the name you provide as it will be used in the following step.</p>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Provide AWS details to WorkOS</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once the role has been configured you will need to provide the following details from your AWS account to the WorkOS support team.</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Account ID</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Role name</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>User pool ID</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once the WorkOS support team has configured your AWS details, you should see Identity Providers configured in the specified User Pool for every connection configured in WorkOS. Newly added WorkOS connections will automatically be created in the specified User Pool.</p>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Enable Identity Providers for App Client</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Now that the Identity Providers have been configured, they will need to be enabled for the App Client you wish to use the WorkOS Connections with.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>From the user pool navigate to <strong>App integration → <i>Your App Client</i> → Edit hosted UI settings</strong> and select the newly created Identity Providers.</p>

                            <div id='img198' className={`enlargable-image-container ${this.state.enlargedImageId === 'img198' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img198')}>
                                    <img  src='/assets/aws_cognito_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>If you do not complete this step you will receive a <strong>Login option is not available</strong> error from Cognito upon sign in.</p>
                                </div>
                            </div>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>4</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configure redirect URI</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Locate the domain of the Cognito User Pool and configure the following redirect URI in the WorkOS Dashboard under <strong>Configuration → Settings → Redirect URIs</strong>.</p>

                            <CodeSnippetStruct 
                            id={110}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Cognito callback URI" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>5</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Sign in with WorkOS connection</h1>
                                </div>
                            </div>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once an Identity Provider has been created in the Cognito User Pool, you may initiate authentication by passing the <span>idp_identifier</span> query parameter to the <label className='demo-docs-hyperlink'>OAuth2 Authorize endpoint</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> provided by Cognito using the details from the App Client that was previously configured with the Identity Providers.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You may pass either a WorkOS <label className='demo-docs-hyperlink'>Organization</label> or <label className='demo-docs-hyperlink'>Connection</label> ID as the <span>idp_identifier</span>. Passing this query parameter will result in Cognito bypassing it’s standard sign-in page and immediately redirecting the user to the appropriate sign-in page of the upstream identity provider configured in the WorkOS Connection.</p>
                            
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once the user is authenticated they will be redirected to your Cognito App Client redirect URL with the Cognito <span>code</span> query parameter.</p>

                            </div>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={bambooHR}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                                <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>BambooHR</h1>
                                <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn about syncing your user list with BambooHR.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This guide outlines how to synchronize your application’s BambooHR directories.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To synchronize an organization’s users and groups provisioned for your application, you’ll need the following information from the organization:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The BambooHR subdomain.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A BambooHR API key to authenticate requests.</p></li>
                            </ul>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Note: The BambooHR integration isn’t enabled by default in the WorkOS Dashboard or Admin Portal. Please reach out to <label id='Add an endpoint to initiate SSO' className='demo-docs-hyperlink'>support@workos.com</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> or via your team’s WorkOS Slack channel if you would like BambooHR enabled.</p>
                                </div>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Create your Directory Sync Connection</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Login to your WorkOS Dashboard and select “Organizations” from the left hand navigation bar.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select the organization you’ll be configuring a new Directory Sync Connection with.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click “Manually Configure Connection”.</p>

                            <div id='img199' className={`enlargable-image-container ${this.state.enlargedImageId === 'img199' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img199')}>
                                    <img  src='/assets/bamboo_hr_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Input the Name, and select “BambooHR” as the directory type.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click the “Create Directory” button.</p>

                            <div id='img200' className={`enlargable-image-container ${this.state.enlargedImageId === 'img200' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img200')}>
                                    <img  src='/assets/bamboo_hr_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You will now see your BambooHR directory sync has created successfully with an <label className='demo-docs-hyperlink'>Endpoint</label>, as well as fields to input your subdomain and API Key from BambooHR.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Retrieve the details from an organization IT Admin</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To generate an API key, an IT Admin should log into BambooHR and click their name in the upper right-hand corner of the BambooHR console. Select “API Keys” from the list.</p>

                            <div id='img201' className={`enlargable-image-container ${this.state.enlargedImageId === 'img201' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img201')}>
                                    <img  src='/assets/bamboo_hr_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Next, the IT Admin should click “Add New Key”.</p>

                            <div id='img202' className={`enlargable-image-container ${this.state.enlargedImageId === 'img202' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img202')}>
                                    <img  src='/assets/bamboo_hr_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Give your key a descriptive name and select “Generate Key.”</p>

                            <div id='img203' className={`enlargable-image-container ${this.state.enlargedImageId === 'img203' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img203')}>
                                    <img  src='/assets/bamboo_hr_img5.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select “Copy Key” and save this API key, which you’ll upload in the next step.</p>

                            <div id='img204' className={`enlargable-image-container ${this.state.enlargedImageId === 'img204' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img204')}>
                                    <img  src='/assets/bamboo_hr_img6.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Set up your Directory Sync Connection</h1>
                                </div>
                            </div>
                            
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click “Update Directory”.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There are two fields to enter, one is the API key you created in step 2.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The other is “Subdomain” which is the subdomain name of the Company’s BambooHR instance.</p>

                            <div id='img205' className={`enlargable-image-container ${this.state.enlargedImageId === 'img205' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img205')}>
                                    <img  src='/assets/bamboo_hr_img7.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>4</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Sync Users and Groups to Your Application</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When the connection is successfully made, you will see the green “Linked” icon appear. Now, whenever your customer assigns users or groups to your application, you’ll receive Dashboard updates based on changes in their directory.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A detailed guide to integrate the WorkOS API with your application can be found <label className='demo-docs-hyperlink'>here</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Frequently Asked Questions</h1>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>How do I add BambooHR’s custom fields?</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For BambooHR’s custom fields, please contact <label className='demo-docs-hyperlink'>support@workos.com</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> with your directory ID and a list of the custom fields you would like to be added.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>How often do BambooHR directories perform a sync?</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>BambooHR directories poll every 30 minutes starting from the time of the initial sync.</p>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={breatheHR}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                                <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Breathe HR</h1>
                                <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn about syncing your user list with Breathe HR.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This guide outlines how to synchronize your application’s Breathe HR directories.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To synchronize an organization’s users and groups provisioned for your application, you’ll need the following information from the organization:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Breathe HR API key</p></li>
                            </ul>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Note: The Breathe HR integration isn’t enabled by default in the WorkOS Dashboard or Admin Portal. Please reach out to <label id='Add an endpoint to initiate SSO' className='demo-docs-hyperlink'>support@workos.com</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> or via your team’s WorkOS Slack channel if you would like Breathe HR enabled.</p>
                                </div>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Create an API Key</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The organization will need to create an API key for you. An API key can be generated from the Admin Settings menu.</p>

                            <div id='img206' className={`enlargable-image-container ${this.state.enlargedImageId === 'img206' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img206')}>
                                    <img  src='/assets/breathe_hr_img1.png' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Under “Integrations”, select “API Setup”.</p>

                            <div id='img207' className={`enlargable-image-container ${this.state.enlargedImageId === 'img207' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img207')}>
                                    <img  src='/assets/breathe_hr_img2.png' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Next, select “Enable API”.</p>

                            <div id='img208' className={`enlargable-image-container ${this.state.enlargedImageId === 'img208' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img208')}>
                                    <img  src='/assets/breathe_hr_img3.png' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Verify that you’d like to enable the API to access user information.</p>

                            <div id='img209' className={`enlargable-image-container ${this.state.enlargedImageId === 'img209' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img209')}>
                                    <img  src='/assets/breathe_hr_img4.png' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Save the production API key – this will be used in the next step.</p>

                            <div id='img210' className={`enlargable-image-container ${this.state.enlargedImageId === 'img210' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img210')}>
                                    <img  src='/assets/breathe_hr_img5.png' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Create your Directory Sync Connection</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Login to your WorkOS dashboard and select “Organizations” from the left hand Navigation bar.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select the Organization you’d like to enable a Breathe HR Directory Sync connection for.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>On the Organization’s page click “Add Directory”.</p>

                            <div id='img211' className={`enlargable-image-container ${this.state.enlargedImageId === 'img211' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img211')}>
                                    <img  src='/assets/breathe_hr_img6.png' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select “Breathe HR” as the Directory Provider, and then provide a descriptive name for the connection. Select “Create Directory”.</p>

                            <div id='img212' className={`enlargable-image-container ${this.state.enlargedImageId === 'img212' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img212')}>
                                    <img  src='/assets/breathe_hr_img7.png' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Set up your Directory Sync Connection</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click “Update Directory” on the Directory details page.</p>
                            
                            <div id='img213' className={`enlargable-image-container ${this.state.enlargedImageId === 'img213' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img213')}>
                                    <img  src='/assets/breathe_hr_img8.png' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Input the Breathe HR API key and click “Save Directory Details”.</p>

                            <div id='img214' className={`enlargable-image-container ${this.state.enlargedImageId === 'img214' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img214')}>
                                    <img  src='/assets/breathe_hr_img9.png' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>4</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Sync Users and Groups to Your Application</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Now, you should see users and groups synced over from Breathe HR.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Departments from Breathe HR are synced as groups in WorkOS. All users are synced, but only those marked as “Current employee” or “Pending leaver” are active.</p>

                            <div id='img215' className={`enlargable-image-container ${this.state.enlargedImageId === 'img215' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img215')}>
                                    <img  src='/assets/breathe_hr_img10.png' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A detailed guide to integrate the WorkOS API with your application can be found <label className='demo-docs-hyperlink'>here</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Frequently asked questions</h1>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>How often do Breathe HR directories perform a sync?</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Breathe HR directories poll every 30 minutes starting from the time of the initial sync.</p>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={bubblePlugin}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                                <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Bubble Plugin</h1>
                                <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Add WorkOS features to your Bubble application.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The <label className='demo-docs-hyperlink'>Bubble plugin for WorkOS</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> allows you to easily integrate <label className='demo-docs-hyperlink'>WorkOS API</label> endpoints in your application’s workflows. This plugin includes actions for SSO, Directory Sync, Admin Portal, and webhook validation.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Install the WorkOS SSO and API Plugins</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In the <strong>Plugins</strong> tab of your app editor in Bubble, click <strong>Add Plugins</strong>, then search for WorkOS. Install the plugins for both WorkOS SSO and WorkOS API and then click <strong>Done</strong>.</p>

                            <div style={{marginBottom: "5%"}} id='img216' className={`enlargable-image-container ${this.state.enlargedImageId === 'img216' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img216')}>
                                    <img  src='/assets/bubble_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <div id='img217' className={`enlargable-image-container ${this.state.enlargedImageId === 'img217' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img217')}>
                                    <img  src='/assets/bubble_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The next step is to enter your secret keys/parameters on the <strong>Plugins</strong> settings page as seen below. The API key can be found in your WorkOS dashboard under <strong>API Keys</strong>.</p>

                            <div style={{marginBottom: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>In the WorkOS SSO plugin the API Key value can be entered directly.</p>
                                </div>
                            </div>

                            <div id='img218' className={`enlargable-image-container ${this.state.enlargedImageId === 'img218' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img218')}>
                                    <img  src='/assets/bubble_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>In the WorkOS API plugin the API Key value needs to be preceded by <strong>Bearer</strong>.</p>
                                </div>
                            </div>

                            <div id='img219' className={`enlargable-image-container ${this.state.enlargedImageId === 'img219' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img219')}>
                                    <img  src='/assets/bubble_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Now you’re set up to use the plugin directly in your workflows.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Single Sign-On</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Whether you are implementing a Single Sign-On authorization flow for your application using a no-code platform or building your app from the ground up, the steps that you need to take on a high level are the same. You can find more information in our SSO Quickstart Guide.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Use SSO in a Workflow</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To configure SSO, you will need:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>An active SSO connection, which can be configured manually or by using the <label className='demo-docs-hyperlink'>Admin Portal</label>.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <label className='demo-docs-hyperlink'>connection</label> ID or <label className='demo-docs-hyperlink'>organization</label> ID associated with the user logging in. If WorkOS does not handle user management on your application’s behalf, it is necessary to keep track of the association between your users and their WorkOS connection or organization IDs in your database.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Redirect URI</label>, which is the URL to redirect the user to when they are authorized. This is provided by Bubble in the <strong>Plugins</strong> tab.</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Navigate to the <strong>Workflow</strong> page in your application and add a new event. Select the action that will trigger the workflow to start. In this case, the workflow is triggered when the submit button is clicked.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Under the <strong>Account</strong> menu option, select <strong>Signup/login with a social network</strong>, then select <strong>WorkOS SSO</strong> from the <strong>OAuth provider</strong> dropdown menu. Enter either the connection ID, organization ID, or provider.</p>

                            <div className='api-keys'>

                                <div style={{marginBottom: "5%"}} className='testing-the-api-info-box'>
                                    <div className='api-info-box-img'>
                                        <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='api-info-box-text'>
                                        <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Select whether you will use connection, organization, or provider (OAuth connections only), and delete the other defaults. The value should be entered in the <span style={{backgroundColor: "#ccc"}}>organization=&lt;organization_id&gt;</span> format.</p>
                                    </div>
                                </div>

                            </div>

                            <div id='img220' className={`enlargable-image-container ${this.state.enlargedImageId === 'img220' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img220')}>
                                    <img  src='/assets/bubble_img5.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When a user launches this workflow, they will be prompted to log in through the associated WorkOS SSO connection.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Upon a successful login, if the user does not exist in the application database, a new user will be created and logged in as the current user. If the user already exists, that user will be logged in as the current user.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Directory Sync</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To start using <label className='demo-docs-hyperlink'>Directory Sync</label>, you will need to configure a new directory connection between your customer’s directory provider and WorkOS. This can be completed manually or by using the <label className='demo-docs-hyperlink'>Admin Portal</label>.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once a directory connection is activated in WorkOS, you can configure webhooks to send events to your Bubble application using the WorkOS plugin through a backend workflow.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Enable backend workflows</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To enable backend workflows, navigate to the <strong>Settings</strong> page of your Bubble app under the <strong>API</strong> tab, and select <strong>Enable Workflow API and backend workflows</strong>. You are now able to configure backend workflows in the <strong>Workflow</strong> section.</p>

                            <div id='img221' className={`enlargable-image-container ${this.state.enlargedImageId === 'img221' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img221')}>
                                    <img  src='/assets/bubble_img6.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Create a new workflow to receive webhooks</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To create a new workflow that subscribes to WorkOS webhooks, navigate to the <strong>Workflows</strong> section of your app in Bubble and select <strong>backend workflows</strong> from the page selection dropdown.</p>

                            <div id='img222' className={`enlargable-image-container ${this.state.enlargedImageId === 'img222' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img222')}>
                                    <img  src='/assets/bubble_img7.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Create a new API Workflow. In the <strong>detected data option</strong> ensure that <strong>include headers</strong> is selected before clicking <strong>Detect data</strong>.</p>

                            <div id='img223' className={`enlargable-image-container ${this.state.enlargedImageId === 'img223' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img223')}>
                                    <img  src='/assets/bubble_img8.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A pop-up window will show a test URL to validate the webhook body.</p>

                            <div id='img224' className={`enlargable-image-container ${this.state.enlargedImageId === 'img224' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img224')}>
                                    <img  src='/assets/bubble_img9.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Navigate to the <strong>Webhooks</strong> tab in your WorkOS dashboard and enter this test URL as your webhook endpoint.</p>

                            <div id='img225' className={`enlargable-image-container ${this.state.enlargedImageId === 'img225' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img225')}>
                                    <img  src='/assets/bubble_img10.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Then, click the <strong>Send Test Event</strong> button to send a test event.</p>

                            <div id='img226' className={`enlargable-image-container ${this.state.enlargedImageId === 'img226' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img226')}>
                                    <img  src='/assets/bubble_img11.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Bubble will recognize the event and validate the endpoint. Click save to complete the subscription to WorkOS webhook events for this workflow.</p>

                            <div id='img227' className={`enlargable-image-container ${this.state.enlargedImageId === 'img227' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img227')}>
                                    <img  src='/assets/bubble_img12.avif' alt="Enlargable" className="image" />
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Implement the webhook validation action</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>After the new workflow is set up to listen for new events, it is recommended that you use the webhook validation action to verify that the webhooks being received are from WorkOS.</p>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This action verifies the request is valid by using the webhook body, signature, and secret that you provide from your WorkOS dashboard. To properly define the webhook parameter, you should use the raw body text of the request data. Similarly, the <span>webhook_signature</span> should be defined using the <span>workos-signature</span> in the request data headers.</p>

                            </div>

                            <div id='img228' className={`enlargable-image-container ${this.state.enlargedImageId === 'img228' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img228')}>
                                    <img  src='/assets/bubble_img13.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>After the event is validated, you can use the data from the body to log the webhook and make changes to users.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Reconcile the users</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The plugin also includes endpoints, documented under the directory sync section of the <label className='demo-docs-hyperlink'>API Reference</label>, that can be used to reconcile users.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Periodically calling the <label className='demo-docs-hyperlink'>List Directory Users</label> endpoint and verifying that the returned date matches what you have stored in your user table helps ensure your application has up-to-date information about your users, so you can use it with confidence.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Admin Portal</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The <label className='demo-docs-hyperlink'>Admin Portal</label> provides an out-of-the-box UI for organization admins to configure SSO and Directory Sync connections.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The WorkOS API plugin provides an API call that launches the Admin Portal if you would like to display it on the settings page of your application. You can also copy and paste these links directly from the WorkOS dashboard in the connection settings.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Upon completing the setup flow with the Admin Portal, the organization admin will be able to test the new connection and validate that it has been configured correctly.</p>

                            <div id='img229' className={`enlargable-image-container ${this.state.enlargedImageId === 'img229' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img229')}>
                                    <img  src='/assets/bubble_img14.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>

                    </div>
                </CSSTransition>

                <CSSTransition in={casSaml}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                                <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>CAS SAML</h1>
                                <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn how to configure a connection to CAS via SAML.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each SSO Identity Provider requires specific information to create and configure a new <label className='demo-docs-hyperlink'>Connection</label>. Often, the information required to create a Connection will differ by Identity Provider.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To create a CAS SAML Connection, you’ll need the Identity Provider Metadata URL that is available from your customer’s CAS SAML instance.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What WorkOS provides</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS provides the ACS URL, the SP Metadata link and the SP Entity ID. They are readily available in your Connection Settings in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <div id='img230' className={`enlargable-image-container ${this.state.enlargedImageId === 'img230' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img230')}>
                                    <img  src='/assets/cas_saml_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The ACS URL is the location an Identity Provider redirects its authentication response to. The SP Metadata link contains a metadata file that the organization can use to set up the SAML integration. The SP Entity ID is a URI used to identify the issuer of a SAML request, response, or assertion.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What you’ll need</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In order to integrate you’ll need the IdP Metadata URL.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Normally, this will come from the organization’s IT Management team when they set up your application’s SAML 2.0 configuration in their CAS instance. But, should that not be the case during your setup, here’s how to obtain it.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Enter Service Provider Details</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Copy and paste the “ACS URL” and “SP Entity ID” into the corresponding fields for Service Provider details and configuration. For some setups, you can use the metadata found at the SP Metadata link to configure the SAML connection.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Obtain Identity Provider Metadata</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Copy the IdP Metadata URL from your CAS SAML settings and upload it to your WorkOS Connection settings. Your Connection will then be linked and good to go!</p>

                            <div id='img231' className={`enlargable-image-container ${this.state.enlargedImageId === 'img231' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img231')}>
                                    <img  src='/assets/cas_saml_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Alternatively, you can manually configure the connection by providing the IdP URI (Entity ID), <label className='demo-docs-hyperlink'>IdP SSO URL</label> and X.509 Certificate.</p>

                            <div style={{marginBottom: "5%"}} id='img232' className={`enlargable-image-container ${this.state.enlargedImageId === 'img232' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img232')}>
                                    <img  src='/assets/cas_saml_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <div id='img233' className={`enlargable-image-container ${this.state.enlargedImageId === 'img233' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img233')}>
                                    <img  src='/assets/cas_saml_img4.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configure Attribute Mapping</h1>
                                </div>
                            </div>

                            <div className="api-keys">

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>At minimum, the Attribute Statement in the SAML Response should include <span>id</span>, <span>email</span>, <span>firstName</span>, and <span>lastName</span> attributes.</p>

                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Users can <label className="demo-docs-hyperlink">automatically be assigned roles within your application</label> by sending their group memberships. To enable this, set up a group attribute statement following the guidance below.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>This feature is currently in beta, contact <label id='Add an endpoint to initiate SSO' className='demo-docs-hyperlink'>customer support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> for more information.</p>
                                </div>
                            </div>

                            <div className="api-keys">

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To return this information in the attribute statement, map the groups in your identity provider to a SAML attribute named <span>groups</span>.</p>

                            </div>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={cezanneHR}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >   
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Cezanne HR</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn about syncing your user list with Cezanne HR.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This guide outlines how to synchronize your application’s Cezanne HR directories.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To synchronize an organization’s users and groups provisioned for your application, you’ll need the following information from the organization:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Cezanne HR Client ID</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Cezanne HR Client Secret</p></li>
                            </ul>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>Note: The Cezanne HR integration isn’t enabled by default in the WorkOS Dashboard or Admin Portal. Please reach out to  <label id='Add an endpoint to initiate SSO' className='demo-docs-hyperlink'>support@workos.com</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span>  or via your team’s WorkOS Slack channel if you would like Cezanne HR enabled.</p>
                                </div>
                            </div>

                        </div>  
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Set up your Directory Sync Connection</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Login to your WorkOS Dashboard and select “Organizations” from the left hand navigation bar.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select the organization you’ll be configuring a new Directory Sync Connection with.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click “Manually Configure Connection”.</p>
                            
                            <div id='img234' className={`enlargable-image-container ${this.state.enlargedImageId === 'img234' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img234')}>
                                    <img  src='/assets/cezanne_hr_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Input the Name, and select “Cezanne HR” as the directory type.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click the “Create Directory” button.</p>

                            <div id='img235' className={`enlargable-image-container ${this.state.enlargedImageId === 'img235' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img235')}>
                                    <img  src='/assets/cezanne_hr_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You will now see your Cezanne HR directory sync has created successfully with an input for the Client ID and Client Secret.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Obtain a Cezanne HR Client ID and Client Secret</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To obtain these credentials, you will need to request a new API Application from the Cezanne HR Support Team.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Enter the details in the Directory’s detail page</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click “Update Directory”.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There are two fields to enter, the Client ID and Client Secret that Cezanne support provided for you.</p>

                            <div id='img236' className={`enlargable-image-container ${this.state.enlargedImageId === 'img236' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img236')}>
                                    <img  src='/assets/cezanne_hr_img3.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>4</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Sync Users and Groups to Your Application</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When the connection is successfully made, you will see the green “Linked” icon appear. Now, whenever the organization assigns users or groups to your application, you’ll receive Dashboard updates based on changes in their directory.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click on the “Users” tab in the Dashboard to view synced users.</p>

                            <div id='img237' className={`enlargable-image-container ${this.state.enlargedImageId === 'img237' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img237')}>
                                    <img  src='/assets/cezanne_hr_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A detailed guide to integrate the WorkOS API with your application can be found <label className='demo-docs-hyperlink'>here</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Frequently asked questions</h1>
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>How often do Cezanne HR directories perform a sync?</h3>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Cezanne HR directories poll every 30 minutes starting from the time of the initial sync.</p>


                        </div>

                    </div>
                </CSSTransition>

                <CSSTransition in={classLink}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                            <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>ClassLink</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn how to configure a connection to ClassLink via SAML.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each SSO Identity Provider requires specific information to create and configure a new <label className='demo-docs-hyperlink'>Connection</label>. Often, the information required to create a Connection will differ by Identity Provider.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To create a ClassLink SAML Connection, you’ll need the Identity Provider Metadata URL that is available from the organization’s ClassLink SAML instance.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Start by logging in to your WorkOS dashboard and browse to the “Organizations” tab on the left hand navigation bar.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select the organization you’d like to configure a ClassLink SAML Connection for, and select “Manually Configure Connection” under “Identity Provider”.</p>

                            <div id='img238' className={`enlargable-image-container ${this.state.enlargedImageId === 'img238' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img238')}>
                                    <img  src='/assets/classlink_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select “ClassLink SAML” from the Identity Provider dropdown, enter a descriptive name for the connection, and then select the “Create Connection” button.</p>

                            <div id='img239' className={`enlargable-image-container ${this.state.enlargedImageId === 'img239' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img239')}>
                                    <img  src='/assets/classlink_img2.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What WorkOS provides</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS provides the <label className='demo-docs-hyperlink'>ACS URL</label>, the <label className='demo-docs-hyperlink'>SP Metadata</label> link and the <label className='demo-docs-hyperlink'>SP Entity ID</label>. They are readily available in your Connection Settings in the <label className='demo-docs-hyperlink'>Developer Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The SP Metadata link contains a metadata file that the organization can use to set up the SAML integration.</p>

                            <div id='img240' className={`enlargable-image-container ${this.state.enlargedImageId === 'img240' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img240')}>
                                    <img  src='/assets/classlink_img3.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What you’ll need</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In order to integrate you’ll need the <label className='demo-docs-hyperlink'>IdP Metadata URL</label>.</p>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Normally, this will come from the organization’s IT Management team when they set up your application’s SAML 2.0 configuration in their ClassLink instance. Here’s how to obtain them:</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Select or create your application</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Login to the ClassLink Management Console (CMC), click Single Sign-On and select SAML Console.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click ADD NEW or COPY EXISTING. Copy Existing contains pre-configured SAML apps which need to be updated to fit your unique settings.</p>

                            <div id='img241' className={`enlargable-image-container ${this.state.enlargedImageId === 'img241' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img241')}>
                                    <img  src='/assets/classlink_img4.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Initial SAML Application Setup</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Edit the new application by click the three dots menu icon, and then selecting Edit.</p>

                            <div id='img242' className={`enlargable-image-container ${this.state.enlargedImageId === 'img242' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img242')}>
                                    <img  src='/assets/classlink_img5.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Update the Metadata URL in the ClassLink application settings with the SP Metadata URL provided to you by WorkOS.</p>

                            <div id='img243' className={`enlargable-image-container ${this.state.enlargedImageId === 'img243' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img243')}>
                                    <img  src='/assets/classlink_img6.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configure SAML Application</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Under the “Attribute Mapping” section of the SAML app, map the following four attributes as shown below, and the select “Update”.</p>

                            <div className='api-keys'>

                                <ul>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>id</span> → <span>Login id</span></p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>email</span> → <span>Email</span></p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>firstName</span> → <span>Given Name</span></p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>lastName</span> → <span>Family Name</span></p></li>
                                </ul>

                            </div>

                            <div id='img244' className={`enlargable-image-container ${this.state.enlargedImageId === 'img244' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img244')}>
                                    <img  src='/assets/classlink_img7.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Users can <label className='demo-docs-hyperlink'>automatically be assigned roles within your application</label> by sending their group memberships. To enable this, set up a group attribute statement following the guidance below.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>This feature is currently in beta, contact <label id='Add an endpoint to initiate SSO' className='demo-docs-hyperlink'>customer support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> for more information.</p>
                                </div>
                            </div>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To return this information in the attribute statement, map the groups in your identity provider to a SAML attribute named <span>groups</span>.</p>

                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>4</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Upload Metadata URL</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Copy the IdP Metadata URL from your ClassLink SAML settings and upload it to your WorkOS Connection settings.</p>

                            <div id='img245' className={`enlargable-image-container ${this.state.enlargedImageId === 'img245' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img245')}>
                                    <img  src='/assets/classlink_img8.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In the Connection settings in the WorkOS Dashboard, click “Edit Metadata Configuration”.</p>

                            <div id='img246' className={`enlargable-image-container ${this.state.enlargedImageId === 'img246' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img246')}>
                                    <img  src='/assets/classlink_img9.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Paste the Metadata URL from ClassLink into the “Metadata URL” field and select “Save Metadata Configuration”.</p>

                            <div id='img247' className={`enlargable-image-container ${this.state.enlargedImageId === 'img247' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img247')}>
                                    <img  src='/assets/classlink_img10.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your Connection will then be linked and good to go!</p>

                        </div>

                    </div>
                </CSSTransition>

                <CSSTransition in={cloudflare}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>
                                <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>ClassLink</h1>
                                <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Learn how to configure a connection to ClassLink via SAML.</p>
                            </div>
                            <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                                <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each SSO Identity Provider requires specific information to create and configure a new <label className='demo-docs-hyperlink'>Connection</label>. Often, the information required to create a Connection will differ by Identity Provider.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To create a Cloudflare SAML Connection, you’ll need to manually enter the SSO URL, <label className='demo-docs-hyperlink'>IdP Entity ID</label>, and X.509 Certificate obtained from your Cloudflare instance. Instructions on where to obtain these will be covered in this guide.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What WorkOS provides</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The first thing you’ll need to do is create a new Cloudflare SAML connection in your <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>. Start by logging in to your WorkOS dashboard and browse to the “Organizations” tab on the left hand navigation bar.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select the organization you’d like to configure a Cloudflare SAML Connection for, and from the dropdown menu select “Add Connection”.</p>

                            


                        </div>
                    </div>
                </CSSTransition>



            </Styles>
        )
    }
}

//* IMAGE 237 (latest)