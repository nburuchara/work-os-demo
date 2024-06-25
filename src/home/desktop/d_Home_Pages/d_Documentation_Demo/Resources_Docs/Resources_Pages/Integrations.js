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
        };
      
        const page = pageMap[selectedPage];
        if (page) {
          this.loadSelectedPage(page);
          this.props.hideIntegrationsPage()
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
            "Overview": "apiReference",
            "Integrations" : "integrations",
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
            const { saml, scim, sftp } = this.state;

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
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>This feature is currently in beta, contact <label id='Add an endpoint to initiate SSO' className='demo-docs-hyperlink'>contact support</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span> for more information.</p>
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

                            <div style={{marginBottom: "5%"}} id='img135' className={`enlargable-image-container ${this.state.enlargedImageId === 'img135' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img135')}>
                                <img  src='/assets/scim_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select “Custom SCIM v2.0” as the directory type, and then input the Company Name.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Click the “Create Directory” button.</p>

                            <div style={{marginBottom: "5%"}} id='img136' className={`enlargable-image-container ${this.state.enlargedImageId === 'img136' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img136')}>
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

                            <div style={{marginBottom: "5%"}} id='img139' className={`enlargable-image-container ${this.state.enlargedImageId === 'img139' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img139')}>
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

                            <div style={{marginBottom: "5%"}} id='img140' className={`enlargable-image-container ${this.state.enlargedImageId === 'img140' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img140')}>
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

                            <div style={{marginBottom: "5%"}} id='img141' className={`enlargable-image-container ${this.state.enlargedImageId === 'img141' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img141')}>
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

                            <div style={{marginBottom: "5%"}} id='img142' className={`enlargable-image-container ${this.state.enlargedImageId === 'img142' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img142')}>
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

            </Styles>
        )
    }
}

//* IMAGE 141 (latest)