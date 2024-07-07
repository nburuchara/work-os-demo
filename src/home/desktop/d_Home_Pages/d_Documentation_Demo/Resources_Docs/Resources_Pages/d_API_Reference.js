import React, {Component, createRef} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from '../../d_Documentation_Components/d_Code_Snippet_Structure'
import { CSSTransition } from 'react-transition-group';

const Styles = styled.div `

`

export default class APIReference extends Component {
    constructor(props) {
        super(props)
        this.state = {

                //* - - DOCUMENTATION CONTENT - - *//
                
            overview: true,
            clientLibraries: true,
            testing: true,
            apiKeys: true,
            errors: true,
            pagination: true,
            idempotency: true,
            rateLimits: true,
            

                //* - TRACKING SCROLLING  - *//
            cancelAutoScroll: false,

                //* - - LANGUAGES (for code snippets) - - *//
            currentSelectedLanguage: "javascript",
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

                //* - - ERRORS - - *//
            error_2xx: true,
            error_4xx: true,
            error_5xx: true,

                //* - - ADJUSTABLE DIMENSIONS - - *//
            sidebarMenuClicked: false,

        }

        this.sectionIds = ['Overview', 'Client libraries', 'Testing', 'API Keys', 'Errors', 'Pagination', 'Idempotency', 'Rate limits'];

        // Initialize scroll debounce variables
        this.scrollTimeout = null;
        this.scrollDelay = 200; // Adjust as needed
        this.initializeDebouncedNextSectionScrolled();

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

    currentSectionInView = null;
    observer = null;

    // Separate method to initialize debounced function
    initializeDebouncedNextSectionScrolled() {
        this.debouncedNextSectionScrolled = debounce((sectionId) => {
            this.props.nextSectionScrolled(sectionId);
        }, 2000);
    }

    componentDidMount = async () => {
        // window.addEventListener('scroll', this.handleScroll);
        if (this.props.searchedTerm) {
            // this.smoothScrollToId(this.props.searchedTerm.lastCat)
            // console.log("componentDidUpdate props.searchedTerm: PRESENT - ", this.props.scrollToID)
        } else {
            
        }   

        this.scrollToTop("top")

        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);

        this.originalHeights = {};

        // Initialize the Intersection Observer
        this.observer = new IntersectionObserver(this.handleIntersection, {
            root: null, // Use the viewport as the container
            rootMargin: '5%',
            threshold: 0.6,  // Adjust as needed
        });

        // Observe each section
        this.sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                this.originalHeights[id] = element.scrollHeight;
                element.style.height = element.scrollHeight + 'px';
                this.observer.observe(element);
            }
        });

    }

    getSelectedPage = (selectedPage) => {
        
        const pageMap = {
          "Overview": "overview",
          "Client libraries" : "clientLibraries",
          "Testing" : "testing",
          "API Keys" : "apiKeys",
          "Errors" : "errors",
          "Pagination" : "pagination",
          "Idempotency" : "idempotency",
          "Rate limits" : "rateLimits",
        };
      
        const page = pageMap[selectedPage];
        if (page) {
            
            this.loadSelectedPage(page);

            setTimeout(() => {
                // this.closeAllPagesExceptSelectedPage(this.props.scrollToID)
            }, 500)
        } else {
        //   console.error("Unknown selected page:", selectedPage);
        }

    }

    scrollToId = (id) => {
        let element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (id === "Client libraries") {
            setTimeout(() => {
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 1000)
        }
    }

    scrollToTop = (id) => {
        let element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'auto' });
        }
    }

    loadSelectedPage = (selectedPage) => {
        // this.hideAllPages()
        // setTimeout (() => {
        //     this.setState({
        //         loadingScreen: true,
        //     })
        // }, 600)
        setTimeout (() => {
            // this.scrollToTop(selectedPage)
        }, 750)
        // setTimeout (() => {
        //     this.setState({
        //         loadingScreen: false,
        //     })
        // }, 1300)
        setTimeout (() => {
            // this.scrollToTop("Overview")
            this.setState({
                currentSelectedLanguage: "javascript",
                // [`${selectedPage}`]: true
            })
        }, 500)
    }

    hideAllPages = () => {
        this.setState({
            overview: false,
            clientLibraries: false,
            testing: false,
            apiKeys: false,
            errors: false,
            pagination: false,
            idempotency: false,
            rateLimits: false,
        })
    }

    closeAllPagesExceptSelectedPage = (searchedTerm) => {
        const pageMap = {
            "Overview": "overview",
            "Client libraries" : "clientLibraries",
            "Testing" : "testing",
            "API Keys" : "apiKeys",
            "Errors" : "errors",
            "Pagination" : "pagination",
            "Idempotency" : "idempotency",
            "Rate limits" : "rateLimits",
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
            // this.getSelectedPage(this.props.scrollToID)
            // this.scrollToTop(this.props.scrollToID)
            console.log("componentDidUpdate props.scrollToID: PRESENT - ", this.props.scrollToID)
            
            this.smoothScrollToId(this.props.scrollToID.toLowerCase())
            
        }
        if (this.props.searchedTerm) {
            console.log("componentDidUpdate props.searchedTerm: PRESENT - ", this.props.searchedTerm)
            this.smoothScrollToId(this.props.searchedTerm.lastCat)
            setTimeout(() => {
                // this.closeAllPagesExceptSelectedPage(this.props.scrollToID)
            }, 2000)
        }
        if (this.props.sidebarMenuClicked !== prevProps.sidebarMenuClicked) {
            if (this.props.sidebarMenuClicked === true) {
                this.sectionIds.forEach(id => {
                    const element = document.getElementById(id);
                    if (element) {
                        this.originalHeights[id] = element.scrollHeight;
                        element.style.height = element.scrollHeight + 'px';
                        this.observer.observe(element);
                    }
                });
            } else {
                this.sectionIds.forEach(id => {
                const element = document.getElementById(id);
                if (element && this.originalHeights[id] !== undefined) {
                    element.style.height = 'auto';
                }
            });
            }
        }
    }

    smoothScrollToId = (id) => {
        const checkElementAndScroll = () => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    // this.props.clearLatestSearch();
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

    toggleEnlarged = (imageId) => {
        this.setState(prevState => ({
            enlargedImageId: prevState.enlargedImageId === imageId ? null : imageId
        }));
    };

    navigateToNewPage = (page) => {
        
        let pageObject = null;
        const pageOptions = [
            {"id": "999995", "name": "Overview", "category": "Resources", "subCat1": "API Reference", "page": "Overview", "lastCat": "top"},
            {"id": "999995", "name": "Client libraries", "category": "Resources", "subCat1": "API Reference", "page": "Client libraries", "lastCat": "top"},
            {"id": "999995", "name": "Testing", "category": "Resources", "subCat1": "API Reference", "page": "Testing", "lastCat": "top"},
            {"id": "999995", "name": "API Keys", "category": "Resources", "subCat1": "API Reference", "page": "API Keys", "lastCat": "top"},
            {"id": "999995", "name": "Errors", "category": "Resources", "subCat1": "API Reference", "page": "Errors", "lastCat": "top"},
            {"id": "999995", "name": "Pagination", "category": "Resources", "subCat1": "API Reference", "page": "Pagination", "lastCat": "top"},
            {"id": "999995", "name": "Idempotency", "category": "Resources", "subCat1": "API Reference", "page": "Idempotency", "lastCat": "top"},
            {"id": "999995", "name": "Rate limits", "category": "Resources", "subCat1": "API Reference", "page": "Rate limits", "lastCat": "top"},
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

    componentWillUnmount = () => {
        // window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
        // Unobserve all sections
        if (this.observer) {
            this.sectionIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    this.observer.unobserve(element);
                }
            });
        }
    }

    handleIntersection = (entries) => {
        entries.forEach(entry => {
            const targetId = entry.target.id;
            if (entry.isIntersecting) {
                if (this.currentSectionInView !== targetId) {
                    this.currentSectionInView = targetId;
                    // this.setState({cancelAutoScroll: true})
                    this.debouncedNextSectionScrolled(targetId);
                }
            } else {
                if (this.currentSectionInView === targetId) {
                    this.currentSectionInView = null;
                    
                }
            }
        });
    }

    // Debounce function for nextSectionScrolled
    debouncedNextSectionScrolled = debounce((sectionId) => {
        this.props.nextSectionScrolled(sectionId);
    }, 2000); // Adjust debounce delay as needed

    handleResize = () => {
        if (window.innerWidth >= 768) {
            // Reset heights to original values
            this.sectionIds.forEach(id => {
                const element = document.getElementById(id);
                if (element && this.originalHeights[id] !== undefined) {
                    element.style.height = 'auto';
                }
            });
        } else {
            // Adjust heights for small screens
            this.sectionIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.style.height = element.scrollHeight + 'px';
                }
            });
        }
    };

    handleScroll = () => {
        // Clear any existing timeout to debounce scroll events
        if (this.scrollTimeout) {
            clearTimeout(this.scrollTimeout);
        }

        // Set a timeout to check if scrolling has stopped
        this.scrollTimeout = setTimeout(() => {
            // Perform actions when scrolling has stopped
            console.log('Scrolling has stopped');
            // Trigger the function after scroll has stopped
            if (this.currentSectionInView) {
                this.props.nextSectionScrolled(this.currentSectionInView);
            }
        }, this.scrollDelay);
    }

    showAllPages = () => {
        this.setState({
            overview: true,
            clientLibraries: true,
            testing: true,
            apiKeys: true,
            errors: true,
            pagination: true,
            idempotency: true,
            rateLimits: true,
        })
    }

    render () {

            //* - API REFERENCE PAGES VAR(S - *//
        const { overview, clientLibraries, testing, apiKeys, errors, pagination, idempotency, rateLimits } = this.state;

            //* - LANGUAGE SELECTION VAR(S) - *//
        const { javascriptSelected, yarnSelected, phpSelected, rubySelected, bundlerSelected, laravelSelected, pythonSelected, javaSelected, gradleSelected, goSelected, dotnetSelected } = this.state;
        const { error_2xx, error_4xx, error_5xx } = this.state;

            //* - UI ADJUSTABLE VARS - *//
        const { sidebarMenuClicked } = this.props;

        return(
            <Styles>
                <div id='top'></div>
                <CSSTransition in={overview}
                timeout={0}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='Overview' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                            <h1 style={{paddingTop: sidebarMenuClicked ? "1.5%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>API Reference</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The WorkOS API enables adding Enterprise Ready features to your application. This REST API provides programmatic access to User Management, Single Sign-On, Directory Sync, and Audit Log resources.</p>  
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Sign in</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> to see code examples customized with your API keys and data.</p>   
                            
                            <i id='client libraries'></i>
                            <CodeSnippetStruct
                            id={0.5}
                            headerTabs={2}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="API Base URL"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}
                            />
                        
                        </div>
                    </div>
                </CSSTransition>
                <CSSTransition in={clientLibraries}
                timeout={0}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='Client libraries' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}}className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Client libraries</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS offers native SDKs in several popular programming languages. Choose one language below to see our API Reference in your application’s language.</p>
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

                            <i id='testing'></i>
                            <CodeSnippetStruct
                            id={0}
                            headerTabs={2}l
                            languagesToRemove={['cURL']}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Install the WorkOS SDK"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}
                            />

                            {/* <div style={{marginBottom: sidebarMenuClicked ? "5%" : ""}}></div> */}
                            
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={testing}
                timeout={0}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='Testing' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Testing the API</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can test the API directly with cURL, or use the <label className='demo-docs-hyperlink'>Postman collection</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> for convenience.</p>
                            <div className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.65%"}}>Check out the <label>guide</label> about the WorkOS API Postman collection to learn more about it.</p>
                                </div>
                            </div>
                            <i id='api keys'></i>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={apiKeys}
                timeout={0}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='API Keys' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                        <div className='api-keys'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>API Keys</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS authenticates your API requests using your account’s API keys. API requests made without authentication or using an incorrect key will return a <span>401</span> error. Requests using a valid key but with insufficient permissions will return a <span>403</span> error. All API requests must be made over HTTPS. Any requests made over plain HTTP will fail.</p>
                        </div>

                        <CodeSnippetStruct 
                        id={1}
                        headerTabs={0}
                        sideBarOpen={sidebarMenuClicked}
                        languagesToRemove={['cURL']}
                        snippet="Set API Key" 
                        updateSelectedLang={this.newLangSelected}
                        selectedLang={this.state.currentSelectedLanguage}/>
                        
                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can view and manage your API keys in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p>
                        <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Secure your API Keys</h3>
                        <div className='api-keys'>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>API keys can perform any API request to WorkOS. They should be kept secure and private! Be sure to prevent API keys from being made publicly accessible, such as in client-side code, GitHub, unsecured S3 buckets, and so forth. API keys are prefixed with <span>sk_</span>.</p>
                        </div>
                        <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>In Staging</h3>
                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your Staging Environment comes with an API key already generated for you. Staging API keys may be viewed as often as they are needed and will appear inline throughout our documentation in code examples if you are logged in to your WorkOS account. API requests will be scoped to the provided key’s Environment.</p>
                        <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>In Production</h3>
                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once you unlock Production access you will need to generate an API Key for it. Production API keys may only be viewed once and will need to be saved in a secure location upon<i id='errors'></i> creation of them.</p>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={errors}
                timeout={0}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='Errors' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Errors</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS uses standard HTTP response codes to indicate the success or failure of your API requests.</p>
                            <div style={{paddingBottom: sidebarMenuClicked ? "2%" : "0%"}} className='errors'>
                                <div className={sidebarMenuClicked ? "errors-cell-sidebar" : "errors-cell"}>
                                    <span className={sidebarMenuClicked ? "errors-cell-sidebar-span" : ""} style={{backgroundColor: error_2xx ? "#d8eaed" : "", color: error_2xx ? "#00815c" : ""}}>200</span><label style={{fontSize: sidebarMenuClicked ? "62.5%": "70%", fontFamily: "poppins", color: "#5e626a"}}>Successful request.</label>
                                </div>
                                <div className={sidebarMenuClicked ? "errors-cell-sidebar" : "errors-cell"} style={{display: "flex", alignItems: "flex-start"}}>
                                    <span className={sidebarMenuClicked ? "errors-cell-sidebar-span" : ""} style={{backgroundColor: error_4xx ? "#fcf5c0" : "", color: error_2xx ? "#a06e00" : ""}}>400</span><label style={{marginTop: sidebarMenuClicked ? "0px" : "1%", fontSize: sidebarMenuClicked ? "62.5%": "70%", fontFamily: "poppins", color: "#5e626a"}}>The request was not acceptable. Check that the parameters were correct.</label>
                                </div>
                                <div className={sidebarMenuClicked ? "errors-cell-sidebar" : "errors-cell"}>
                                    <span className={sidebarMenuClicked ? "errors-cell-sidebar-span" : ""} style={{backgroundColor: error_4xx ? "#fcf5c0" : "", color: error_2xx ? "#a06e00" : ""}}>401</span><label style={{fontSize: sidebarMenuClicked ? "62.5%": "70%", fontFamily: "poppins", color: "#5e626a"}}>The API key used was invalid.</label>
                                </div>
                                <div className={sidebarMenuClicked ? "errors-cell-sidebar" : "errors-cell"} style={{display: "flex", alignItems: "flex-start"}}>
                                    <span className={sidebarMenuClicked ? "errors-cell-sidebar-span" : ""} style={{backgroundColor: error_4xx ? "#fcf5c0" : "", color: error_2xx ? "#a06e00" : ""}}>403</span><label style={{marginTop: sidebarMenuClicked ? "0px" : "1%", fontSize: sidebarMenuClicked ? "62.5%": "70%", fontFamily: "poppins", color: "#5e626a"}}>The API key used did not have the correct permissions.</label>
                                </div>
                                <div className={sidebarMenuClicked ? "errors-cell-sidebar" : "errors-cell"}>
                                    <span className={sidebarMenuClicked ? "errors-cell-sidebar-span" : ""} style={{backgroundColor: error_4xx ? "#fcf5c0" : "", color: error_2xx ? "#a06e00" : ""}}>404</span><label style={{fontSize: sidebarMenuClicked ? "62.5%": "70%", fontFamily: "poppins", color: "#5e626a"}}>The resource was not found.</label>
                                </div>
                                <div className={sidebarMenuClicked ? "errors-cell-sidebar" : "errors-cell"}  style={{display: "flex", alignItems: "flex-start"}}>
                                    <span className={sidebarMenuClicked ? "errors-cell-sidebar-span" : ""} style={{backgroundColor: error_4xx ? "#fcf5c0" : "", color: error_2xx ? "#a06e00" : ""}}>422</span><label style={{marginTop: sidebarMenuClicked ? "0px" : "1%", fontSize: sidebarMenuClicked ? "62.5%": "70%", fontFamily: "poppins", color: "#5e626a"}}>Validation failed for the request. Check that the parameters were correct.</label>
                                </div>
                                <div className={sidebarMenuClicked ? "errors-cell-sidebar" : "errors-cell"}>
                                    <span className={sidebarMenuClicked ? "errors-cell-sidebar-span" : ""} style={{backgroundColor: error_4xx ? "#fcf5c0" : "", color: error_2xx ? "#a06e00" : ""}}>422</span><label style={{fontSize: sidebarMenuClicked ? "62.5%": "70%", fontFamily: "poppins", color: "#5e626a"}}>Too many requests. Refer to the <span className='inline-errors-cell-span'>Rate Limits</span> section.</label>
                                </div>
                                <div className={sidebarMenuClicked ? "errors-cell-sidebar" : "errors-cell"}>
                                    <span className={sidebarMenuClicked ? "errors-cell-sidebar-span" : ""} style={{backgroundColor: error_5xx ? "#feeaed" : "", color: error_2xx ? "#ce3358" : ""}}>5xx<i id='pagination'></i></span><label style={{fontSize: sidebarMenuClicked ? "62.5%": "70%", fontFamily: "poppins", color: "#5e626a"}}>Indicates an error with WorkOS servers</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={pagination}
                timeout={0}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='Pagination' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Pagination</h1>
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Many top-level resources have support for bulk fetches via list API methods. For instance, you can <label className='demo-docs-hyperlink'>list connections</label>, <label className='demo-docs-hyperlink'>list directory users</label>, and <label className='demo-docs-hyperlink'>list directory groups</label>. These list API methods share a common structure, taking at least these four parameters: <span>limit</span>, <span>order</span>, <span>after</span>, and  <span>before</span></p>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS utilizes pagination via the <span>after</span> and <span>before</span> Both parameters take an existing object ID value and return objects in either descending or ascending order by creation time.</p>
                            </div>

    
                            <CodeSnippetStruct 
                            id={2}
                            headerTabs={0}
                            languagesToRemove={['cURL']}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Pagination" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <i id='idempotency'></i>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={idempotency}
                timeout={0}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='Idempotency' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Idempotency</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The WorkOS API supports idempotency which guarantees that performing the same operation multiple times will have the same result as if the operation were performed only once. This is handy in situations where you may need to retry a request due to a failure or prevent accidental duplicate requests from creating more than one resource.</p>

                            <div className='api-keys'>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To achieve idempotency, you can add <span>Idempotency-Key</span> request header to any WorkOS API request with a unique string as the value. Each subsequent request matching this unique string will return the same response. We suggest using <label className='demo-docs-hyperlink'>v4 UUIDs</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> for idempotency keys to avoid collisions.</p>

                            </div>

                            <CodeSnippetStruct 
                            id={129}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            showOnlyJSONTab={true}
                            showOnlyCustomTab={'cURL'}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Idempotency Key Example" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><i id='rate limits'></i>Idempotency keys expire after 24 hours. The WorkOS API will generate a new response if you submit a request with an expired key.</p>

                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={rateLimits}
                timeout={0}
                classNames="docs-side-panel"
                unmountOnExit    
                >
                    <div id='Rate limits' className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "6%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Rate limits</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS APIs are rate limited to ensure that they are fast for everyone. If you find yourself getting 429 errors, double check your integration to make sure you aren’t making unnecessary requests.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>General</h3>

                            <div className='complex-table-header'>
                                <div className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "85%"}}>Name</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "" : "20%"}} className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "85%"}}>Path</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "" : "60%"}} className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "85%"}}>Limit</h5>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>All requests</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "" : "20%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>*</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "" : "60%"}} className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>6,000 requests per 60 seconds per IP address</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </CSSTransition>
                    
            </Styles>
        )
    }
}

// Debounce utility function
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}