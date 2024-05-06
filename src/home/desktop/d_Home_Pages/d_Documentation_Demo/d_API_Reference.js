import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from './d_Documentation_Components/d_Code_Snippet_Structure'
import { hover } from '@testing-library/user-event/dist/hover'

const Styles = styled.div `

        // - - - - - - DEMO DOCS CONTAINER - - - - - - //

.demo-docs-container {
    text-align: left;
    margin-left: 1%;
    margin-right: 1%;
}

    // - - DEMO DOCS HEADER - - //

.demo-docs-section h1 {
    font-family: poppins;
    margin-bottom: 2%;
    font-size: 120%;
}

.demo-docs-section p {
    font-family: poppins;
    font-size: 90%;
}

    // - DEMO DOCS HYPERLINK (EXTERNAL LINK) - //

    // # LINK

.demo-docs-hyperlink {
    color: #6363f1;
    padding-top: 0.5%;
}

.demo-docs-hyperlink:hover {
    text-decoration: underline;
    color: #6363f1;
    cursor: pointer;
}

    // # ICON

.demo-docs-hyperlink-icon img {
    width: 2.75%;
    margin-left: 0.5%;
    vertical-align: middle;
    padding-bottom: 0.5%;
    cursor: pointer;
}

    // - DEMO DOCS CODE CONTAINER - //

.demo-docs-code-container {
    height: 9vh;
    width: 92.5%;
    border: 1px solid #ccc;
    border-radius: 12px;
    margin-top: 4%;
}

    // # HEADER

.demo-docs-code-container-header {
    background-color: #f8f8fb;
    height: 47.5%;
    border-bottom: 1px solid #ccc;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
}

.demo-docs-code-container-header h5 {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 2%;
    margin-left: 2%;
}

    // # HEADER (BUTTON CONTAINER)

.demo-docs-code-container-header button {
    margin-top: 0.8%;
    height: 80%;
    width: 6%;
    margin-right: 2%;
    border-radius: 50%;
    border: 2px solid transparent; 
    cursor: pointer;
}

    // # HEADER (COPY ICON)
    
.demo-docs-code-container-header img {
    margin-top: 20%;
    width: 108.5%;
}

    // # BODY 

.demo-docs-code-container-body p {
    font-family: inconsolata;
    margin-left: 2%;
    margin-top: 2%;
    margin-bottom: 0px;
}

    // - DEMO DOCS SEPARATOR - //

.demo-docs-separator {
    margin-top: 10%;
    margin-bottom: 6.75%;
    width: 100%;
    border-bottom: 2px solid #ccc;
}

    // - DEMO DOCS LANGUAGES - //

.demo-docs-languages {
    margin-bottom: 3%;
    margin-top: 1%;
}

.demo-docs-languages:after {
    content: "";
    display: table;
    clear: both;
}

.demo-docs-language {
    float: left;
    text-align: left;
    width: 25%;
}

    // # BUTTON

.demo-docs-language button {
    width: 90%;
    margin-right: 5%;
    padding: 3%;
    border-radius: 7px;
    background-color: white;
    cursor: pointer;
}

.demo-docs-language-container:after {
    content: "";
    display: table;
    clear: both;
}

.demo-docs-language-icon {
    float: left;
    text-align: center;
    width: 35%;
}

.demo-docs-language-text {
    float: left;
    text-align: left;
    width: 65%;
}
    // # ICON

.demo-docs-language-icon img {
   width: 70%;
   margin-top: 10%;
}

    // # TEXT (LANGUAGE)

.demo-docs-language-text p {
    font-family: poppins;
    padding-bottom: 7.5%;
    font-size: 100%;
    margin-bottom: 0px;
    margin-top: 10%;
}

    // - CONTACT US (Client Library) - //

.client-library-contact-us:hover {
    text-decoration: underline;
    cursor: pointer;
}

    //! - - Testing the API - - !//

.testing-the-api-info-box {
    background-color: #ededf1;
    padding: 1%;
    border-radius: 8px;
}

.testing-the-api-info-box img {
    width: 2.75%;
    margin-left: 0.5%;
    vertical-align: middle;
    padding-bottom: 0.5%;
    cursor: pointer;
}

.testing-the-api-info-box p {
    color: #656971;
    font-size: 67.5%;
}

.testing-the-api-info-box label {
    color: #2c333b;
    text-decoration: underline;
    cursor: pointer;
}

    //! - - API Keys - - !//

.api-keys span {
    background-color: #ededf1;
    color: #2c333b;
    font-family: inconsolata;
    padding: 0.4%;
    border-radius: 5px;
}

`

export default class APIReference extends Component {
    constructor() {
        super()
        this.state = {
            codeSnippet1CopyHovered: false,

            //* - - LANGUAGES - - *//

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

    toggleDropdown = (id) => {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen,
        }));
    }

    render () {
        const { codeSnippet1CopyHovered } = this.state;
        const { javascriptSelected, yarnSelected, phpSelected, rubySelected, bundlerSelected, laravelSelected, pythonSelected, javaSelected, gradleSelected, goSelected, dotnetSelected } = this.state;
        return(
            <Styles>
                <div className='demo-docs-container'>
                    <div className='demo-docs-section'>
                        <h1 style={{fontSize: "150%"}}>API Reference</h1>
                        <p>The WorkOS API enables adding Enterprise Ready features to your application. This REST API provides programmatic access to User Management, Single Sign-On, Directory Sync, and Audit Log resources.</p>  
                        <p><label className='demo-docs-hyperlink'>Sign in</label><span className='demo-docs-hyperlink-icon'><img src='/assets/external_link_color.png' alt='no img available'/></span> to see code examples customized with your API keys and data.</p>   
                        <div className='demo-docs-code-container'>
                            <div style={{display: "flex", justifyContent: "space-between"}} className='demo-docs-code-container-header'>
                                <h5>API Base URL</h5>
                                <button 
                                onMouseEnter={this.codeSnippet1CopyEnter}
                                onMouseLeave={this.codeSnippet1CopyLeave}
                                style={{backgroundColor: codeSnippet1CopyHovered ? "#e9e9f0": "transparent"}}>
                                    <img src='/assets/demo_doc_copy_icon.png' alt='no img available'/>
                                </button>
                            </div>
                            <div className='demo-docs-code-container-body'>
                                <p>https://api.workos.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='demo-docs-separator'></div>
                    <div className='demo-docs-section'>
                        <h1>Client libraries</h1>
                        <p>WorkOS offers native SDKs in several popular programming languages. Choose one language below to see our API Reference in your application’s language.</p>
                        <div className='demo-docs-languages'>
                            <div className='demo-docs-language'>
                                <button 
                                onClick={() => this.newLangSelected("javascript")} 
                                style={{boxShadow: javascriptSelected || yarnSelected ? "0 0 0 2px #6363f1" : "none", border: javascriptSelected || yarnSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                    <div className='demo-docs-language-container'>
                                        <div className='demo-docs-language-icon'>
                                            <img src='/assets/docs_api_reference_node_language_icon.png' alt='img not available'/>
                                        </div>
                                        <div className='demo-docs-language-text'>
                                            <p style={{marginBottom: "6.5%"}}>Node.js</p>
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
                                            <img style={{width: "43%", paddingBottom: "5%", marginTop: "20%"}} src='/assets/docs_api_reference_ruby_language_icon.png' alt='no img available'/>
                                        </div>
                                        <div className='demo-docs-language-text'>
                                            <p style={{marginBottom: "6%"}}>Ruby</p>
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
                                            <img style={{width: "50%", paddingBottom: "5%", marginTop: "20%"}} src='/assets/docs_api_reference_laravel_language_icon.png' alt='no img available'/>
                                        </div>
                                        <div className='demo-docs-language-text'>
                                            <p style={{marginBottom: "6.5%"}}>Laravel</p>
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
                                            <img style={{width: "52%", paddingBottom: "5%", marginTop: "17%"}} src='/assets/docs_api_reference_python_language_icon.png' alt='no img available'/>
                                        </div>
                                        <div className='demo-docs-language-text'>
                                            <p style={{marginBottom: "6%"}}>Python</p>
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
                                            <p style={{marginBottom: "0px"}}>PHP</p>
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
                                            <img style={{width: "78%"}} src='/assets/docs_api_reference_go_language_icon.png' alt='no img available'/>
                                        </div>
                                        <div className='demo-docs-language-text'>
                                            <p style={{marginBottom: "2%"}}>Go</p>
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
                                            <img style={{width: "52%", paddingBottom: "5%", marginTop: "17%"}} src='/assets/docs_api_reference_java_language_icon.png' alt='no img available'/>
                                        </div>
                                        <div className='demo-docs-language-text'>
                                            <p style={{marginBottom: "6%"}}>Java</p>
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
                                            <img src='/assets/docs_api_reference_net_language_icon.png' alt='no img available'/>
                                        </div>
                                        <div className='demo-docs-language-text'>
                                            <p style={{marginBottom: "6.3%"}}>.NET</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <p style={{color: "#5e626a", fontSize: "80%"}}>Don't see an SDK you need? <label className='client-library-contact-us'>Contact us</label> to request and SDK!</p>
                        <p>Install the SDK using the command below.</p>
                        <CodeSnippetStruct
                        id={0}
                        headerTabs={2}
                        snippet="Install the WorkOS SDK"
                        updateSelectedLang={this.newLangSelected}
                        selectedLang={this.state.currentSelectedLanguage}
                        />
                        
                    </div>
                    <div className='demo-docs-separator'></div>
                    <div className='demo-docs-section'>
                        <h1>Testing the API</h1>
                        <p>You can test the API directly with cURL, or use the <label className='demo-docs-hyperlink'>Postman collection</label><span className='demo-docs-hyperlink-icon'><img src='/assets/external_link_color.png' alt='no img available'/></span> for convenience.</p>
                        <div className='testing-the-api-info-box'>
                            <p><span style={{marginRight: "2%"}}><img src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/></span>Check out the <label>guide</label> about the WorkOS API Postman collection to learn more about it.</p>
                        </div>
                    </div>
                    <div className='demo-docs-separator'></div>
                    <div className='demo-docs-section'>
                        <div className='api-keys'>
                            <h1>API Keys</h1>
                            <p>WorkOS authenticates your API requests using your account’s API keys. API requests made without authentication or using an incorrect key will return a <span>401</span> error. Requests using a valid key but with insufficient permissions will return a <span>403</span> error. All API requests must be made over HTTPS. Any requests made over plain HTTP will fail.</p>
                        </div>
                        <CodeSnippetStruct 
                        id={1}
                        headerTabs={0}
                        snippet="Set API Key" 
                        updateSelectedLang={this.newLangSelected}
                        selectedLang={this.state.currentSelectedLanguage}/>
                    </div>
                </div>
            </Styles>
        )
    }
}