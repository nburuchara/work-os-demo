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
            openIDConnect: false,
            accessPeopleHR: false,
            adpOpenIDConnect: false,

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
            const { saml, scim, sftp, openIDConnect, accessPeopleHR, adpOpenIDConnect } = this.state;

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

            </Styles>
        )
    }
}

//* IMAGE 165 (latest)