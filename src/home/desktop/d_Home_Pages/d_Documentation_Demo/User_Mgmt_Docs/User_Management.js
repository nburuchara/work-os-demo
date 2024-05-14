import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from '../d_Documentation_Components/d_Code_Snippet_Structure'

const Styles = styled.div  `

`

export default class UserManagement extends Component {
    constructor() {
        super()
        this.state = {

                //* - CODE SNIPPET - *//
            currentSelectedLanguage: "javascript",
            codeSnippet1CopyHovered: false,

                //* - IMAGE - *//
            enlarged: false,

                //* - TWO TABS - *//
            usingNode: true,
            usingNodeHovered: false,
            usingNextJs: false,
            usingNextJsHovered: false,
        }
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

    toggleEnlarged = () => {
        this.setState(prevState => ({
          enlarged: !prevState.enlarged
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
                <div className='demo-docs-container'>
                    <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section' >
                        <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>User Management</h1>
                        <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Easy to authenticate APIs designed to provide a flexible, secure, and fast integration.</p>
                    </div>
                    <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                        <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>
                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Integrating User Management features into your app is quick and easy. In this guide, we’ll take you through adding a hosted authentication flow to your application using <label className='demo-docs-hyperlink'>AuthKit</label>.</p>
                        <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Before getting started</h1>
                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To get the most out of this guide, you’ll need:</p>
                        <ul>
                            <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <label className='demo-docs-hyperlink'>WorkOS account</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p></li>
                            <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your WorkOS <label className='demo-docs-hyperlink'>API Key</label> and <label className='demo-docs-hyperlink'>Client ID</label>.</p></li>
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

        
                        <div className={`enlargable-image-container ${enlarged ? 'enlarged' : ''}`} onClick={this.toggleEnlarged}>
                            <img src='/assets/usr_mgmt_docs_redirects_img.avif' alt="Enlargable" className="image" />
                        </div>

                        <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Set secrets</h3>
                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To make calls to WorkOS, provide the API key and the client ID. Store these values as managed secrets and pass them to the SDKs either as environment variables or directly in your app's configuration depending on your preferences.</p>
                   
                    
                        <div className='two-tab-selection'>
                            <div style={{borderBottom: usingNode ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                <button
                                onClick={this.usingNodeClicked}
                                onMouseEnter={this.usingNodeEnter}
                                onMouseLeave={this.usingNodeLeave}
                                style={{fontWeight: usingNode ? "bold" : "normal", backgroundColor: usingNodeHovered ? "#e6e6eb": ""}}
                                >Using Node</button>
                            </div>
                            <div style={{borderBottom: usingNextJs ? "2.5px solid #6363f1" : ""}} className={sidebarMenuClicked ? "two-tab-selection-sidebar-tab" : "two-tab-selection-tab"}>
                                <button
                                onClick={this.usingNextJsClicked}
                                onMouseEnter={this.usingNextJsEnter}
                                onMouseLeave={this.usingNextJsLeave}
                                style={{fontWeight: usingNextJs ? "bold" : "normal", backgroundColor: usingNextJsHovered ? "#e6e6eb" : ""}}
                                >Using Next.js</button>
                            </div>
                        </div>
                        
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
                                <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.65%"}}>The code examples use your staging API keys when <label className='demo-docs-hyperlink'>signed in</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} style={{ width: "2%", marginLeft: "1%"}} src='/assets/docs_api_text_box_external_link_icon.png' alt='no img available'/></span></p>
                            </div>
                        </div>
                   </div>
                   <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section'>
                        <div className='labeled-header'>
                            <div className='label-tag'>
                                <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                            </div>
                            <div className='label-desc'>
                                <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Add AuthKit to your app</h1>
                            </div>
                        </div>
                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Let's integrate the hosted authentication flow into your app.</p>
                        <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Redirect users to AuthKit</h3>
                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>First, we'll need to direct users to sign in (or sign up) using AuthKit before redirecting them back to your application. We'll do this by generating an AuthKit authorization URL server side and redirecting the user to it.</p>
                        <div className='api-keys'>
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
                   </div>
                </div>
            </Styles>
        )
    }
}