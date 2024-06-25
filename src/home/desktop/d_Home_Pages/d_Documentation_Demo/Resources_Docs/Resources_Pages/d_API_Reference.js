import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from '../../d_Documentation_Components/d_Code_Snippet_Structure'

const Styles = styled.div `

`

export default class APIReference extends Component {
    constructor(props) {
        super(props)
        this.state = {

            //* - - DOCUMENTATION CONTENT - - *//
            
            codeSnippet1CopyHovered: false,

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

    }

    codeSnippet1CopyEnter = () => {this.setState({codeSnippet1CopyHovered: true})}

    codeSnippet1CopyLeave = () => {this.setState({codeSnippet1CopyHovered: false})}

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

    render () {

        const { codeSnippet1CopyHovered } = this.state;
        const { javascriptSelected, yarnSelected, phpSelected, rubySelected, bundlerSelected, laravelSelected, pythonSelected, javaSelected, gradleSelected, goSelected, dotnetSelected } = this.state;
        const { error_2xx, error_4xx, error_5xx } = this.state;

            //* - UI ADJUSTABLE VARS - *//

        const { sidebarMenuClicked } = this.props;
        
        return(
            <Styles>
                    <div className='demo-docs-container'>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>API Reference</h1>
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The WorkOS API enables adding Enterprise Ready features to your application. This REST API provides programmatic access to User Management, Single Sign-On, Directory Sync, and Audit Log resources.</p>  
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><label className='demo-docs-hyperlink'>Sign in</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> to see code examples customized with your API keys and data.</p>   
                            <div className='demo-docs-code-container'>
                                <div style={{display: "flex", justifyContent: "space-between"}} className='demo-docs-code-container-header'>
                                    <h5 className={sidebarMenuClicked ? "demo-docs-code-container-sidebar-h5" : ""}>API Base URL</h5>
                                    <span 
                                    className={sidebarMenuClicked ? "demo-docs-code-container-sidebar-span" : ""}
                                    onMouseEnter={this.codeSnippet1CopyEnter}
                                    onMouseLeave={this.codeSnippet1CopyLeave}
                                    style={{backgroundColor: codeSnippet1CopyHovered ? "#e9e9f0": "transparent"}}>
                                        <img className={sidebarMenuClicked ? "demo-docs-code-container-header-sidebar-img" : ""} src='/assets/demo_doc_copy_icon.png' alt='no img available'/>
                                    </span>
                                </div>
                                <div className='demo-docs-code-container-body'>
                                    <p className={sidebarMenuClicked ? "demo-docs-code-container-body-sidebar-p" : ""}>https://api.workos.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='demo-docs-separator'></div>
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

                            <CodeSnippetStruct
                            id={0}
                            headerTabs={2}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Install the WorkOS SDK"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}
                            />
                            
                        </div>
                        <div className='demo-docs-separator'></div>
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
                        </div>
                        <div className='demo-docs-separator'></div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                            <div className='api-keys'>
                                <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>API Keys</h1>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS authenticates your API requests using your account’s API keys. API requests made without authentication or using an incorrect key will return a <span>401</span> error. Requests using a valid key but with insufficient permissions will return a <span>403</span> error. All API requests must be made over HTTPS. Any requests made over plain HTTP will fail.</p>
                            </div>

                            <CodeSnippetStruct 
                            id={1}
                            headerTabs={0}
                            sideBarOpen={sidebarMenuClicked}
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
                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once you unlock Production access you will need to generate an API Key for it. Production API keys may only be viewed once and will need to be saved in a secure location upon creation of them.</p>
                        </div>
                        <div className='demo-docs-separator'></div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Errors</h1>
                            <p>WorkOS uses standard HTTP response codes to indicate the success or failure of your API requests.</p>
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
                                    <span className={sidebarMenuClicked ? "errors-cell-sidebar-span" : ""} style={{backgroundColor: error_5xx ? "#feeaed" : "", color: error_2xx ? "#ce3358" : ""}}>5xx</span><label style={{fontSize: sidebarMenuClicked ? "62.5%": "70%", fontFamily: "poppins", color: "#5e626a"}}>Indicates an error with WorkOS servers</label>
                                </div>
                            </div>
                        </div>
                        <div className='demo-docs-separator'></div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Pagination</h1>
                            <div className='api-keys'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Many top-level resources have support for bulk fetches via list API methods. For instance, you can <label className='demo-docs-hyperlink'>list connections</label>, <label className='demo-docs-hyperlink'>list directory users</label>, and <label className='demo-docs-hyperlink'>list directory groups</label>. These list API methods share a common structure, taking at least these four parameters: <span>limit</span>, <span>order</span>, <span>after</span>, and  <span>before</span></p>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS utilizes pagination via the <span>after</span> and <span>before</span> Both parameters take an existing object ID value and return objects in either descending or ascending order by creation time.</p>
                            </div>
                            <CodeSnippetStruct 
                            id={2}
                            headerTabs={0}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Pagination" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>
                        </div>
                        <div  className='demo-docs-separator'></div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "6%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>rest of the docs ...</h1>
                        </div>
                    </div>
            </Styles>
        )
    }
}