import React, {Component} from "react";
import styled from 'styled-components'
import CodeSnippetStruct from '../d_Documentation_Components/d_Code_Snippet_Structure'
import { CSSTransition } from 'react-transition-group';

const Styles = styled.div  `

`

export default class EventsWebhooks extends Component {
    constructor (props) {
        super(props)
        this.state = {

                //* - EVENTS & WEBHOOKS SECTIONS - *//
            eventTypes: false,
            dataSyncing: false,
            dataSyncingWithApi: true,

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

    hiddenDropdownBtnClicked = (num) => {
        this.setState((prevState) => ({
            [`hiddenDropdownBtn${num}`]: !prevState[`hiddenDropdownBtn${num}`]
        }));
    }

    render () {

                //* - EVENTS AND WEBHOOKS SECTION VAR(S) - *//
        const { eventTypes, dataSyncing, dataSyncingWithApi } = this.state;

            //* - DOCS UI SIZE ADJUSTMENT VAR(S) - *//
        const { sidebarMenuClicked, } = this.props;

            //* - HIDDEN DROPDOWN VAR(S) - *//
        const { hiddenDropdownBtn1, hiddenDropdownBtn2, hiddenDropdownBtn3, hiddenDropdownBtn4, hiddenDropdownBtn5, hiddenDropdownBtn6, hiddenDropdownBtn7, hiddenDropdownBtn8, hiddenDropdownBtn9, hiddenDropdownBtn10, hiddenDropdownBtn11, hiddenDropdownBtn12, hiddenDropdownBtn13, hiddenDropdownBtn14, hiddenDropdownBtn15, hiddenDropdownBtn16, hiddenDropdownBtn17, hiddenDropdownBtn18, hiddenDropdownBtn19, hiddenDropdownBtn20, hiddenDropdownBtn21, hiddenDropdownBtn22, hiddenDropdownBtn23, hiddenDropdownBtn24, hiddenDropdownBtn25, hiddenDropdownBtn26, hiddenDropdownBtn27, hiddenDropdownBtn29, hiddenDropdownBtn30, hiddenDropdownBtn31, hiddenDropdownBtn32, hiddenDropdownBtn33, hiddenDropdownBtn34, hiddenDropdownBtn35, hiddenDropdownBtn36, hiddenDropdownBtn37, hiddenDropdownBtn38, hiddenDropdownBtn39, hiddenDropdownBtn40, hiddenDropdownBtn41, hiddenDropdownBtn42, hiddenDropdownBtn43, hiddenDropdownBtn44 } = this.state;

            //* - LANGUAGE SELECTION VAR(S) - *//
        const { javascriptSelected, yarnSelected, phpSelected, rubySelected, bundlerSelected, laravelSelected, pythonSelected, javaSelected, gradleSelected, goSelected, dotnetSelected } = this.state;

        return (
            <Styles>
                {eventTypes && 
                    <div className="demo-docs-container">
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Events</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Respond to activity that occurs within WorkOS and third-party providers.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Events represent activity that has occurred within WorkOS or within third-party identity and directory providers. Your app can sync the data via either the events API or webhooks.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Event object</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>All event objects share a similar structure.</p>


                            <div className='complex-table-header'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "20%"}} className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "", marginBottom: sidebarMenuClicked ? "5%" : "3.5%"}}>Attribute</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "80%" : "80%"}} className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : "", marginBottom: sidebarMenuClicked ? "5%" : "3.5%"}}>Description</h5>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "20%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>event</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "80%" : "80%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>A string that distinguishes the event type.</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "20%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>id</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "80%" : "80%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Unique identifier for the event.</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "20%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>data</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "80%" : "80%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Event payload. Payloads match the corresponding API objects.</p>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "20%" : "20%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>created_at</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "80%" : "80%"}} className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Timestamp of when the event occurred.</p>
                                </div>
                            </div>

                                {/* Authentication Events */}

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Authentication events</h1>


                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each step in the authentication flow emits an authentication event. Authentication success events are emitted even when additional steps, such as MFA, are required to complete the process.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The authentication failed events aren’t emitted yet, but will be available soon.</p>

                            <div style={{borderBottom: "1px solid #cccc", borderTop: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(1)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn1 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>authentication.email_verification_failed<span style={{backgroundColor: "#f8f8fb", color: "#5e626a", padding: "0.5%", borderRadius: "20px",
                                paddingLeft: "1%", paddingRight: "1%", border: "1px solid #ccc", marginLeft: "2.5%"}}>Coming soon</span></strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn1}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={60}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Email verification failed event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user fails to verify their email.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(2)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn2 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>authentication.email_verification_succeeded</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn2}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={61}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Email verification succeeded event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user successfully verifies their email.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(3)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn3 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>authentication.magic_auth_failed<span style={{backgroundColor: "#f8f8fb", color: "#5e626a", padding: "0.5%", borderRadius: "20px",
                                paddingLeft: "1%", paddingRight: "1%", border: "1px solid #ccc", marginLeft: "2.5%"}}>Coming soon</span></strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn3}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={62}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Magic Auth failed event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user fails to authenticate via Magic Auth.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(4)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn4 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>authentication.magic_auth_succeeded</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn4}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={63}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Magic Auth succeeded event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user successfully authenticates via Magic Auth.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(5)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn5 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>authentication.mfa_failed<span style={{backgroundColor: "#f8f8fb", color: "#5e626a", padding: "0.5%", borderRadius: "20px",
                                paddingLeft: "1%", paddingRight: "1%", border: "1px solid #ccc", marginLeft: "2.5%"}}>Coming soon</span></strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn5}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={64}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="MFA failed event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user fails to authenticate with a multi-factor authentication code.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(6)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn6 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>authentication.mfa_succeeded</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn6}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={66}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="MFA succeeded event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user successfully authenticates with a multi-factor authentication code.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(7)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn7 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>authentication.oauth_failed<span style={{backgroundColor: "#f8f8fb", color: "#5e626a", padding: "0.5%", borderRadius: "20px",
                                paddingLeft: "1%", paddingRight: "1%", border: "1px solid #ccc", marginLeft: "2.5%"}}>Coming soon</span></strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn7}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={67}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="OAuth failed event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user fails to authenticate with a multi-factor authentication code.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(8)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn8 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>authentication.oauth_succeeded</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn8}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={68}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="OAuth succeeded event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user successfully authenticates via OAuth.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(9)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn9 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>authentication.password_failed<span style={{backgroundColor: "#f8f8fb", color: "#5e626a", padding: "0.5%", borderRadius: "20px",
                                paddingLeft: "1%", paddingRight: "1%", border: "1px solid #ccc", marginLeft: "2.5%"}}>Coming soon</span></strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn9}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={69}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Password authentication failed event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user fails to authenticate with password credentials.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(10)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn10 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>authentication.password_succeeded</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn10}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={70}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Password authentication succeeded event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user successfully authenticates with password credentials.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(11)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn11 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>authentication.sso_failed<span style={{backgroundColor: "#f8f8fb", color: "#5e626a", padding: "0.5%", borderRadius: "20px",
                                paddingLeft: "1%", paddingRight: "1%", border: "1px solid #ccc", marginLeft: "2.5%"}}>Coming soon</span></strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn11}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={71}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="SSO failed event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user fails to authenticate with Single Sign-On.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(12)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn12 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>authentication.sso_succeeded</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn12}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={72}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="SSO succeeded event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user successfully authenticates with Single Sign-On.</p>

                            </div>


                                {/* Connection Events */}


                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""} style={{marginTop: sidebarMenuClicked ? "7.5%" : "5%", marginBottom: sidebarMenuClicked ? "6.5%" : "4%"}}>Connection events</h1>


                            <div style={{borderBottom: "1px solid #cccc", borderTop: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(13)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn13 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>connection.activated</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn13}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={73}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Connection activated event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a connection is activated.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(14)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn14 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>connection.deactivated</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn14}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={74}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Connection deactivated event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a connection is deactivated.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(15)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn15 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>connection.deleted</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn15}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={75}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Connection deleted event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a connection is deleted.</p>

                            </div>


                                {/* Directory Sync Events */}


                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""} style={{marginTop: sidebarMenuClicked ? "7.5%" : "5%"}}>Directory Sync events</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Events emitted when directory-related resources are changed. To learn what exactly each of these events represents, see the <label className="demo-docs-hyperlink">in-depth Directory Sync events guide</label>.</p>

                            <div style={{borderBottom: "1px solid #cccc", borderTop: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(16)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn16 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>dsync.activated</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn16}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={76}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Directory activated event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a directory is activated.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(17)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn17 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>dsync.deleted</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn17}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={77}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Directory deleted event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>
                                <div className="api-keys">

                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a directory is deleted. The <span>state</span> attribute indicates directory state before deletion.</p>

                                </div>

                            </div>
                            
                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(18)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn18 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>dsync.group.created</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn18}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={78}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Directory group created event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a directory group is created.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(19)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn19 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>dsync.group.deleted</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn19}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={79}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Directory group deleted event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a directory group is deleted.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(20)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn20 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>dsync.group.updated</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn20}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={80}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Directory group updated event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a directory group is updated.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(21)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn21 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>dsync.group.user_added</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn21}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={81}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Directory group user added event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a directory group user is added.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(22)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn22 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>dsync.group.user_removed</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn22}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={82}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Directory group user removed event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a directory group user is removed.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(23)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn23 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>dsync.user.created</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn23}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={83}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Directory user created event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a directory user is created.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(24)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn24 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>dsync.user.deleted</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn24}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={84}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Directory user deleted event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a directory user is deleted.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(25)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn25 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>dsync.user.updated</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn25}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={85}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Directory user updated event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a directory user is updated.</p>

                            </div>

                            
                                {/* Email verification Events */}

                            
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""} style={{marginTop: sidebarMenuClicked ? "7.5%" : "5%"}}>Email verification events</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Events emitted when a user is required to verify their email.</p>

                            <div style={{borderBottom: "1px solid #cccc", borderTop: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(26)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn26 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>email_verification.created</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn26}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={86}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Email verification created event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user is required to verify their email and a code is created.</p>

                            </div>


                                {/* Invitation events */}

                            
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""} style={{marginTop: sidebarMenuClicked ? "7.5%" : "5%"}}>Invitation events</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Events emitted when a <label className="demo-docs-hyperlink">User Management user</label> is invited to join an organization.</p>

                            <div style={{borderBottom: "1px solid #cccc", borderTop: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(27)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn27 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>invitation.created</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn27}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={87}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Invitation created event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user is invited to sign up or to join an organization.</p>

                            </div>


                                {/* Magic Auth events */}

                            
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""} style={{marginTop: sidebarMenuClicked ? "7.5%" : "5%"}}>Magic Auth events</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Events emitted when a user requests a Magic Auth code.</p>

                            <div style={{borderBottom: "1px solid #cccc", borderTop: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(29)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn29 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>magic_auth.created</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn29}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={88}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Magic Auth created event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user initiates Magic Auth and an authentication code is created.</p>

                            </div>


                                {/* Organization events */}

                            
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""} style={{marginTop: sidebarMenuClicked ? "7.5%" : "5%"}}>Organization events</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Events emitted when WorkOS organizations are created, updated, or deleted.</p>

                            <div style={{borderBottom: "1px solid #cccc", borderTop: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(30)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn30 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>organization.created</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn30}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={89}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Organization created" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when an organization is created.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(31)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn31 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>organization.updated</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn31}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={90}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Organization updated" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when an organization is updated.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(32)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn32 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>organization.deleted</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn32}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={91}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Organization deleted" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when an organization is deleted.</p>

                            </div>


                                {/* Organization domain events */}

                            
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""} style={{marginTop: sidebarMenuClicked ? "7.5%" : "5%"}}>Organization domain events</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Events emitted when verification status of an organization domain changes.</p>

                            <div style={{borderBottom: "1px solid #cccc", borderTop: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(33)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn33 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>organization.domain.verified</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn33}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={92}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Organization domain verified event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when an organization domain is verified.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(34)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn34 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>organization.domain.verification_failed</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn34}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={93}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Organization domain verified event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when an organization domain verification fails.</p>

                            </div>


                                {/* Organization membership events */}

                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""} style={{marginTop: sidebarMenuClicked ? "7.5%" : "5%"}}>Organization membership events</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Events emitted when a <label className="demo-docs-container">User Management user</label> joins or leaves an organization.</p>

                            <div style={{borderBottom: "1px solid #cccc", borderTop: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(35)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn35 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>organization_membership.created</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn35}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={94}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Organization membership created event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when an organization membership is created.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(36)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn36 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>organization_membership.deleted</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn36}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={95}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Organization membership deleted event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when an organization membership is deleted.</p>

                            </div>
                            
                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(37)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn37 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>organization_membership.updated</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn37}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={96}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Organization membership updated event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when an organization membership is updated.</p>

                            </div>


                                {/* Password reset events events */}

                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""} style={{marginTop: sidebarMenuClicked ? "7.5%" : "5%"}}>Password reset events</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Events emitted when a user requests to reset their password.</p>

                            <div style={{borderBottom: "1px solid #cccc", borderTop: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(38)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn38 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>password_reset.created</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn38}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={97}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Password reset created event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user requests to reset their password.</p>

                            </div>


                                {/* Role events */}

                        
                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""} style={{marginTop: sidebarMenuClicked ? "7.5%" : "5%"}}>Role events</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Events emitted when roles are created or deleted in the WorkOS dashboard.</p>

                            <div style={{borderBottom: "1px solid #cccc", borderTop: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(39)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn39 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>role.created</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn39}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={98}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Role created event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a role is created.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(40)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn40 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>role.deleted</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn40}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={99}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Role deleted event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a role is deleted.</p>

                            </div>


                                {/* Session events*/}


                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""} style={{marginTop: sidebarMenuClicked ? "7.5%" : "5%"}}>Session events</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Events emitted when User Management sessions are created.</p>

                            <div style={{borderBottom: "1px solid #cccc", borderTop: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(41)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn41 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>session.created</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn41}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={100}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="Session created event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <div className="api-keys">

                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a session is created. Sessions started using <label className="demo-docs-hyperlink">impersonation</label> will include an additional impersonator field with data about the <span>impersonator</span>.</p>

                                </div>
                            </div>


                                {/* User events*/}
                            

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""} style={{marginTop: sidebarMenuClicked ? "7.5%" : "5%"}}>User events</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Events emitted when <label className="demo-docs-hyperlink">User Management users</label> are created, updated, or deleted.</p>

                            <div style={{borderBottom: "1px solid #cccc", borderTop: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(42)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn42 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>user.created</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn42}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={101}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="User created event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user is created.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(43)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn43 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>user.deleted</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn43}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={102}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="User deleted event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user is deleted.</p>

                            </div>

                            <div style={{borderBottom: "1px solid #cccc", paddingBottom: "2%", paddingTop: "1%"}}>

                                <div onClick={() => this.hiddenDropdownBtnClicked(44)} className='hidden-dropdown-btn'>
                                    <div className='hdb-icon'>
                                        <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : "11.5%"}} className={hiddenDropdownBtn44 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='hdb-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>user.updated</strong></p>
                                    </div>
                                </div>

                                <CSSTransition
                                in={hiddenDropdownBtn44}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div style={{marginTop: "2.5%", paddingBottom: "1.5%"}}>

                                        <CodeSnippetStruct 
                                        id={103}
                                        headerTabs={0}
                                        showOnlyJSONTab={true}
                                        sideBarOpen={sidebarMenuClicked}
                                        snippet="User updated event" 
                                        updateSelectedLang={this.newLangSelected}
                                        selectedLang={this.state.currentSelectedLanguage}/>

                                    </div>
                                </CSSTransition>

                                <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginLeft: "8%", marginTop: "0%", marginBottom: "0%", marginRight: "2%"}}>Triggered when a user is updated.</p>

                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Data Syncing</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Keep your app in sync with WorkOS.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {dataSyncing && 
                    <div className="demo-docs-container">
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Data syncing</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Keep your app in sync with WorkOS.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Syncing your app data with WorkOS is done using events. Events represent activity that has occurred within WorkOS or within third-party identity and directory providers that interact with WorkOS.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When important activity occurs, we record an event. For example, a new SSO connection being activated is an event. A user being created, assigned membership to an organization, or successfully signing in are all events as well. Events are activity that your application might be interested in for the purposes of syncing data or extending your application’s business logic.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your app can consume events from WorkOS via either the events API or webhooks.</p>

                            <CodeSnippetStruct 
                            id={104}
                            headerTabs={0}
                            showOnlyJSONTab={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="A sample event" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Sync using the events API</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>With the events API, your application retrieves events from WorkOS. The events API offers a more robust data synchronization solution compared to webhooks, ensuring seamless synchronization of your system state with WorkOS. To sync data using the events API, continue to the <label className="demo-docs-hyperlink">events API guide</label>.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Sync using webhooks</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>With webhooks, WorkOS automatically notifies your app when an event occurs by invoking an endpoint hosted within your application. To sync data using webhooks, continue to the webhooks guide.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Sync using webhooks</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>With webhooks, WorkOS automatically notifies your app when an event occurs by invoking an endpoint hosted within your application. To sync data using webhooks, continue to the webhooks guide.</p>
                        
                            <div className='complex-table-header'>
                                <div className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Aspect</h5>
                                </div>
                                <div className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Events API</h5>
                                </div>
                                <div className='c-table-header3'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Webhooks</h5>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Timing</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Controlled by your app. Your server can process events at its own pace.</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Real-time. Webhooks trigger as soon as an event occurs.</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Order</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>A consistent order is guaranteed.</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>No guarantee of order on receipt. Events contain timestamps to determine order.</p>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Reconciliation</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Replayable. Can go back to a specific point in time and reprocess events.</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Failed requests are retried with exponential back-off for up to 3 days.</p>
                                </div>
                            </div>

                            <div style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} className='complex-table'>
                                <div className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Security</p>
                                </div>
                                <div className='c-table-cell2'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>Authentication, confidentiality, and integrity protection by default.</p>
                                </div>
                                <div className='c-table-cell3'>
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : ""}}>You must expose a public endpoint and validate webhook signatures.</p>
                                </div>
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Syncing with events API</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>A step-by-step guide on how to start syncing data using the API.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                }
                {dataSyncingWithApi &&
                    <div className="demo-docs-container">
                            <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Sync data using the events API</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>A step-by-step guide on how to start syncing data using the API.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What you’ll build</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In this guide, we will walk you through what you will need to integrate with the <label className="demo-docs-hyperlink">events API</label>:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Create a <i>cursor</i> for use with the events API</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Update your cursor</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Choose a cursor if you lose yours</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Handle event replay in your app</p></li>
                            </ul>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Before getting started</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To get the most out of this guide, you’ll need:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <label className='demo-docs-hyperlink'>WorkOS account</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>An <label className="demo-docs-hyperlink">SSO</label> or <label className="demo-docs-hyperlink">directory</label> connection configured in order to generate events</p></li>
                            </ul>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Integrate the events API SDK</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS offers native SDKs in several popular programming languages. Choose a language below to see instructions in your app’s language.</p>

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

                        </div>

                    </div>
                }
            </Styles>
        )

    }
}