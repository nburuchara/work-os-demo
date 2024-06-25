import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from '../d_Documentation_Components/d_Code_Snippet_Structure'
import { CSSTransition } from 'react-transition-group';
import APIReference from './Resources_Pages/d_API_Reference';
import Integrations from './Resources_Pages/Integrations';

const Styles = styled.div  `

`

export default class Resources extends Component {
    constructor (props) {
        super(props)
        this.state = {

                //* - RESOURCES SECTIONS - *//
            apiReference: false,
            integrations: false,
            integrationsPages: false,

                //* - INTEGRATIONS COMPONENTS - *//
            integrationsPage: "",
            prevSelectedPage: "",
            integrationsSearchedObect: null,

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

    componentDidMount = async () => {
        window.addEventListener('scroll', this.handleScroll);
        if (this.props.searchedTerm) {
            this.smoothScrollToId(this.props.searchedTerm.lastCat)
        } else {
            this.getSelectedPage(this.props.scrollToID)
            setTimeout(() => {
                this.closeAllPagesExceptSelectedPage(this.props.scrollToID)
            }, 1000)
        }   
    }

    getSelectedPage = (selectedPage) => {
        const pageMap = {
          "Overview": "apiReference",
          "Integrations" : "integrations",
        };
      
        const page = pageMap[selectedPage];
        if (page) {
            if (this.state.integrationsPages === true) {
                this.setState({integrationsPages: false})
            }
            this.loadSelectedPage(page);
            setTimeout(() => {
                this.closeAllPagesExceptSelectedPage(this.props.scrollToID)
            }, 1000)
        } else {
          console.error("Unknown selected page:", selectedPage);
        }

        const integrationsPageMap = {
            "SAML": "saml",
            "SCIM": "scim",
            "SFTP": "sftp",
        }
        const integrationsPage = integrationsPageMap[selectedPage];
        if (integrationsPage) {
            this.setState({
                integrationsPage: integrationsPage,
                integrationsSearchedObect: selectedPage
            })
          this.loadSelectedPage("integrationsPages");
        } else {
          console.error("Unknown selected integrations page:", selectedPage);
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
            eventTypes: false,
            dataSyncing: false,
            dataSyncingWithApi: false,
            dataSyncingWithWebhooks: false,
            dataReconciliation: false,
            observabilityStreamToDatadog: false,
        })
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
        }
        if (this.props.searchedTerm) {
            this.smoothScrollToId(this.props.searchedTerm.lastCat)
            setTimeout(() => {
                this.closeAllPagesExceptSelectedPage(this.props.scrollToID)
            }, 1000)
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

    navigateToNewPage = (page) => {
        let pageObject = null;
        const pageOptions = [

        ]
        for (let i = 0; i < pageOptions.length; i++) {
            if (page === pageOptions[i].page) {
                pageObject = pageOptions[i]
            }
        }
        if (pageObject !== null) {
            this.props.navigateToNewPage(page, pageObject)
        }
    }

    goToIntegrations = (page) => {
        const integrationsPageMap = [
            {"id": "999995", "name": "SAML", "category": "Resources", "subCat1": "Integrations", "page": "SAML", "lastCat": "top"},
            {"id": "999995", "name": "SCIM", "category": "Resources", "subCat1": "Integrations", "page": "SCIM", "lastCat": "top"},
        ]
        for (let i = 0; i < integrationsPageMap.length; i++) {
            if (integrationsPageMap[i].page === page) {
                this.props.selectInternalPage(integrationsPageMap[i].category, integrationsPageMap[i], integrationsPageMap[i].page)
            }
        }
    }

    hideIntegrationsPage = () => {
        if (this.state.integrations === true) {
            this.setState({
                integrations: false
            })
        }
    }

    render () {

                //* - RESOURCES SECTION VAR(S) - *//
            const { apiReference, integrations, integrationsPages } = this.state;


                //* - DOCS UI SIZE ADJUSTMENT VAR(S) - *//
             const { sidebarMenuClicked } = this.props;

                //* - LANGUAGE SELECTION VAR(S) - *//
            const { javascriptSelected, yarnSelected, phpSelected, rubySelected, bundlerSelected, laravelSelected, pythonSelected, javaSelected, gradleSelected, goSelected, dotnetSelected } = this.state;

        return (
            <Styles>

                {/* TOP OF SECTION 👇 */}

                <CSSTransition in={apiReference}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <APIReference sidebarMenuClicked={sidebarMenuClicked}/>
                </CSSTransition>

                <CSSTransition in={integrations}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='top' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Integrations</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px", color: "#5e626a"}}>Guides on integrating WorkOS with third-party services.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <div style={{marginTop: sidebarMenuClicked ? '2%' : ''}}></div>

                            {/* - HEADER - */}

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} onClick={() => this.goToIntegrations('SAML')} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a new custom SAML connection.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        {/* <img className={sidebarMenuClicked ? "" : ""} src='/assets/access_logo_icon.png'/> */}
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} onClick={() => this.goToIntegrations('SCIM')} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>SCIM</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with a custom SCIM provider.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        {/* <img className={sidebarMenuClicked ? "" : ""} src='/assets/access_logo_icon.png'/> */}
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} onClick={() => this.goToIntegrations('SFTP')} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>SFTP</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list using an SFTP connection.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        {/* <img className={sidebarMenuClicked ? "" : ""} src='/assets/access_logo_icon.png'/> */}
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>OpenID Connect</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a new generic OIDC connection.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>

                                    </div>
                                </div>
                            </div>

                            {/* - A - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>A</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Access People HR</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list using an SFTP connection.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/access_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>ADP OpenID Connect</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to ADP via OIDC.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/adp_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Apple</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to set up Sign in with Apple.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/apple_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Auth0</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to Auth0 via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/auth0_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>AWS Cognito</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to use WorkOS with your existing AWS Cognito applications.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/aws_logo_icon.png'/>
                                    </div>
                                </div>
                               
                            </div>

                            {/* - B - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>B</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>BambooHR</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with BambooHR.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/bamboo_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Breathe HR</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with Breathe HR.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/breathe_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Bubble Plugin</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Add WorkOS features to your Bubble application.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/bubble_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - C - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>C</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>CAS SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to CAS via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/cas_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Cezanne HR</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with Cezanne HR.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/cezanne_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>ClassLink</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to ClassLink via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/classlink_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Cloudflare</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to Cloudflare via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/cloudflare_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>CyberArk SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to CyberArk via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/cyberark_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>CyberArk SCIM</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with CyberArk SCIM.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/cyberark_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - D - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>D</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Duo</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to Duo via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/duo_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - E - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>E</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Entra ID SAML (formerly Azure AD)</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection Entra ID via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/microsoft_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Entra ID SCIM (formerly Azure AD)</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with Entra ID SCIM.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/microsoft_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - F - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>F</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Firebase</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Add Single Sign-On to your Firebase application with WorkOS.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/firebase_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Fourth</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with Fourth.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/fourth_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - G - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>G</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>GitHub OAuth</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to set up OAuth with GitHub.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/github_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Google Directory Sync</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with Google Workspace.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/google_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Google OAuth</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to set up OAuth with Google Workspace.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/google_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Google SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to Google Workspace via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/google_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - H - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>H</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>HiBob</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with HiBob.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/hibob_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - J - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>J</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>JumpCloud SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to JumpCloud via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/jumpcloud_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>JumpCloud SCIM</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with JumpCloud SCIM.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/jumpcloud_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - K - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>K</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Keycloak</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to Keycloak via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/keycloak_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - L - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>L</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>LastPass</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to LastPass via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/lastpass_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Login.gov OpenID Connect</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to Login.gov via OIDC.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/login_gov_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - M - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>M</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Microsoft AD FS SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Configure a connection to Microsoft Active Directory Federation Services.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/microsoft_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Microsoft OAuth</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to set up OAuth with Microsoft.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/microsoft_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>miniOrange</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to miniOrange via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/miniorange_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - N - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>N</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>NetIQ</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to NetIQ via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/netiq_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>NextAuth.js</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Create a Next.js application with WorkOS SSO and NextAuth.js.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/nextauth_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - O - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>O</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Okta SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to Okta via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/okta_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Okta SCIM</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with Okta SCIM.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/okta_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>OneLogin SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to OneLogin via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/onelogin_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>OneLogin SCIM</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with OneLogin SCIM.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/onelogin_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Oracle SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to Oracle via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/oracle_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - P - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>P</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>PingFederate SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to PingFederate via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/pingfed_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>PingFederate SCIM</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with PingFederate SCIM.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/pingfed_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>PingOne SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to PingOne via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/pingfed_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - R - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>R</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>React Native Expo</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to integrate WorkOS SSO into a React Native Expo app.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/react_native_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Rippling SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to Rippling via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/rippling_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Rippling SCIM</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with Rippling SCIM v2.0.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/rippling_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>
                            
                            {/* - S - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>S</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Salesforce</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to Salesforce via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/salesforce_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Shibboleth Generic SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a Shibboleth Generic connection via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/shibboleth_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Shibboleth Unsolicited SAML</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a Shibboleth Unsolicited connection via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/shibboleth_logo_icon.png'/>
                                    </div>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "0px" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>SimpleSAMLphp</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a SimpleSAMLphp connection.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/simple_saml_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Supabase</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to use WorkOS with your existing Supabase applications.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/supabase_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - V - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>V</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>VMware</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn how to configure a connection to VMware via SAML.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/vm_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                            {/* - W - */}

                            <div style={{marginTop: "1%", marginBottom: sidebarMenuClicked ? "5%" : "5%"}} className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>W</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}></h1>
                                </div>
                            </div>

                            <div className='integrationsContainer'>
                                <div style={{width: sidebarMenuClicked ? "48%": "", marginRight: sidebarMenuClicked ? "2%" : ""}} className='integrationsCol'>
                                    <div style={{width: sidebarMenuClicked ? "80%" : ""}} className='integrationsText'>
                                        <h3 className={sidebarMenuClicked ? "integrationsText-sidebar-h3" : ""}>Workday</h3>
                                        <p style={{fontSize: sidebarMenuClicked ? "" : "60%"}} className={sidebarMenuClicked ? "integrationsText-sidebar-p" : ""}>Learn about syncing your user list with Workday.</p>
                                    </div>
                                    <div style={{width: sidebarMenuClicked ? "20%" : ""}} className='integrationsLogo'>
                                        <img style={{marginTop: sidebarMenuClicked ? "20%" : ""}} className={sidebarMenuClicked ? "" : ""} src='/assets/workday_logo_icon.png'/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={integrationsPages}
                timeout={500}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <Integrations hideIntegrationsPage={this.hideIntegrationsPage} scrollToID={this.state.integrationsPage} searchedTerm={this.state.integrationsSearchedObect} sidebarMenuClicked={sidebarMenuClicked} />
                </CSSTransition>


            </Styles>
        )
    }

}