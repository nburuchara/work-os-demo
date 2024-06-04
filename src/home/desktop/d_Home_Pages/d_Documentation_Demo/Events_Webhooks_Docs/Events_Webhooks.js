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
            dataSyncingWithApi: false,
            dataSyncingWithWebhooks: false,
            dataReconciliation: false,
            observabilityStreamToDatadog: true,

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
        const { eventTypes, dataSyncing, dataSyncingWithApi, dataSyncingWithWebhooks, dataReconciliation, observabilityStreamToDatadog } = this.state;

            //* - DOCS UI SIZE ADJUSTMENT VAR(S) - *//
        const { sidebarMenuClicked} = this.props;

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
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Start consuming events</h1>
                                </div>
                            </div>


                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your app can start consuming events once it integrates the WorkOS SDK. The first thing to do is to pick a starting place in the data set.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Keep a cursor</h3>

                            <div className="api-keys">                           
                                 
                                 <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A <i>cursor</i> is a bookmark to track your app’s position in the events list. The very first call to the events API won’t have a cursor. Subsequent requests to WorkOS should include the updated cursor using the <span>after</span> parameter. You will need to update and store your cursor after processing an event.</p>

                                <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Avoid overwriting newer data</h3>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To avoid repeating an update, store the <span>updated_at</span> timestamp provided by WorkOS for each object. Extract this tag from the data object in the event. If the <span>updated_at</span> timestamp in the event is newer, update the local state with the latest event data. Otherwise, you can skip processing that event.</p>

                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Select event types</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Determine the <label className="demo-docs-hyperlink">event types</label> you want to consume. Choose the relevant event types that align with your app’s functionality and integration with WorkOS.</p>

                            <CodeSnippetStruct 
                            id={105}
                            headerTabs={0}
                            languagesToRemove={['cURL', 'PHP', 'Laravel', 'Java', '.NET']}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="List events" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div className="api-keys">

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Retrieve events from the API using cursor pagination. To fetch the next set of events, provide the ID of the latest processed event in the <span>after</span> parameter.</p>

                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Handle event replay</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In some cases, it may be necessary to go back in time and “replay” the events. When designing your app logic to handle events replay it is important to design your event handling logic in a way that can safely accommodate it without undesired effects.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To achieve this, focus on separating your app’s data handlers from transactional business logic like sending emails, communicating to 3rd party APIs, etc. By implementing separate data handling, you can replay events without side effects.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS recommends processing events synchronously, handling them in the order they occurred.</p>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>The events API returns events up to 30 days old.</p>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>If your app stops processing events</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>When resuming event processing, you have two options to pick up where you left off:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Using the latest known cursor</strong>: Retrieve the most recent cursor that was successfully processed and use it as the starting point for event resumption.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Using a timestamp</strong>: Alternatively, you can make an API call with the range_start parameter and then use the cursor. Utilize the updated_at timestamp to prevent overwrites.</p></li>
                            </ul>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Scaling recommendations</h1>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Single consumer</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS recommends that your app starts with a single worker. Process events in a separate thread or process from your app’s main execution thread. Deploying a single worker responsible for handling events simplifies and streamlines event consumption.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>This approach ensures serial event processing. After completing the processing of events on the current page, request the next page of events to maintain progress.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Parallel processing</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For onboarding large organizations, divide events into independent queues for parallel processing when calling the events API from a single worker.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Concurrently processing events from different organizations is safe, but for consistency and integrity, it is recommended to sequentially process events within a single organization.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Migrating from webhooks</h1>

                            <div className="api-keys">

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>You can migrate to the events API if you already use webhooks. To migrate, start querying the events API using the <span>range_start</span> parameter that corresponds to the time you’d want to start syncing from. The event IDs passed in webhook bodies are the same as those returned by the events API.</p>


                            </div>
                            
                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Syncing with webhooks</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>A step-by-step guide on how to start syncing data using webhooks.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>

                    </div>
                }
                {dataSyncingWithWebhooks && 
                    <div className="demo-docs-container">
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Sync data with webhooks</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>A step-by-step guide on how to start syncing data using webhooks.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>What you’ll build</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In this guide, we will walk you through what you will need to set up webhooks:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Create your endpoint to receive webhook events</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Register your endpoint with WorkOS</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Process the events received from WorkOS</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Test your endpoint</p></li>
                            </ul>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Set up your webhook endpoint</h1>
                                </div>
                            </div>


                            <div className="api-keys">

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Create a public endpoint that WorkOS can send events to. This endpoint should use HTTPS and should accept POST requests with the <span>workos-signature</span> header.</p>

                            </div>

                            <CodeSnippetStruct 
                            id={106}
                            headerTabs={0}
                            languagesToRemove={['cURL']}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Set up your webhook endpoint" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <div className="api-keys">
                                        <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>WorkOS sends the header as <span style={{backgroundColor: "#ccc"}}>WorkOS-Signature</span>, but many web servers normalize HTTP request headers to their lowercase variants..</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Register your endpoint</h1>
                                </div>
                            </div>

                            <label className='demo-docs-hyperlink'>WorkOS account</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Set and save the webhook URL in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>, so WorkOS knows where to deliver the events. Your webhook endpoints should only be configured to receive the ones required by your integration. Receiving all event types can put undue strain on your servers and is not recommended.</p>

                            <div id='img123' className={`enlargable-image-container ${this.state.enlargedImageId === 'img123' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img123')}>
                                    <img  src='/assets/syncing_webhooks_img1.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Process the events</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In order to avoid unnecessary retry requests hitting your webhook handler, we recommend using two concurrent processes for handling events: one for receiving the event, and the other for processing it.</p>
                        
                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Respond with HTTP 200 OK</h3>

                            <div className="api-keys">
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>On receiving an event, you should respond with an HTTP 200 OK to signal to WorkOS that the event was successfully delivered. Otherwise, WorkOS will consider the event delivery a failure and retry up to 12 times, with exponential backoff over 3 days. You do not need to signal to WorkOS whether or not the event was processed successfully.</p>
                            </div>

                            
                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>A</span>
                                </div>
                                <div className='label-desc'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Validate the requests using the SDK</h3>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Before processing the request payload, verify the request was sent by WorkOS and not an unknown party.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS includes a unique signature in each webhook request that it sends, allowing you to verify the authenticity of the request. In order to verify this signature, you must obtain the secret that is generated for you when you set up your webhook endpoint in the WorkOS dashboard. Ensure that this secret is stored securely on your webhook endpoint server as an environment variable.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The SDKs provide a method to validate the timestamp and signature of a webhook. Examples using these methods are included below. The parameters are the payload (raw request body), the request header, and the webhook secret.</p>

                            <CodeSnippetStruct 
                            id={107}
                            headerTabs={0}
                            languagesToRemove={['cURL']}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="Webhook validation" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>There is an optional parameter, tolerance, that sets the time validation for the webhook in seconds. The SDK methods have default values for tolerance, usually 3 – 5 minutes.</p>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span style={{padding: sidebarMenuClicked ? "15%" : "8%", paddingLeft: sidebarMenuClicked ? "5%" : "19%", paddingRight: sidebarMenuClicked ? "5%" : "19%", fontSize: sidebarMenuClicked ? "70%" : "90%", marginLeft: sidebarMenuClicked ? "5%" : "0%"}} className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>B</span>
                                </div>
                                <div className='label-desc'>
                                        <h3 style={{marginTop: "0.75%", marginLeft: "2.5%"}} className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Validate the requests manually</h3>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If implementing webhook validation yourself, you’ll need to use the following steps:</p>

                            <div className="api-keys">
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>First, extract the timestamp and signature from the header. There are two values to parse from the <span>WorkOS-Signature</span> header, delimited by a <span>,</span> character.</p>
                            </div>

                            <div className='complex-table-header'>
                                <div style={{width: sidebarMenuClicked ? "35%" : "20%"}} className='c-table-header1'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "90%" : "", marginBottom: sidebarMenuClicked ? "5%" : "3.5%"}}>Key</h5>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "65%" : "80%"}} className='c-table-header2'>
                                    <h5 style={{fontSize: sidebarMenuClicked ? "90%" : "", marginBottom: sidebarMenuClicked ? "5%" : "3.5%"}}>Value</h5>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "35%" : "20%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>issued_timestamp</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "65%" : "80%"}} className='c-table-cell2'>
                                    <div className="api-keys">
                                        <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>The number of milliseconds since the epoch time at which the event was issued, prefixed by <span>t=</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className='complex-table'>
                                <div style={{width: sidebarMenuClicked ? "35%" : "20%"}} className='c-table-cell1'>
                                    <p style={{fontSize: sidebarMenuClicked ? "70%" : "80%", fontFamily: "inconsolata",}}>signature_hash</p>
                                </div>
                                <div style={{width: sidebarMenuClicked ? "65%" : "80%"}} className='c-table-cell2'>
                                    <div className="api-keys">
                                        <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>The HMAC SHA256 hashed signature for the request, prefixed by <span>v1=</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="api-keys">
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To avoid replay attacks, we suggest validating that the <span>issued_timestamp</span> does not differ too much from the current time.</p>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Next, construct the expected signature. The expected signature is computed from the concatenation of:</p>

                            <ol>
                                <li>
                                    <div className="api-keys">
                                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>issued_timestamp</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="api-keys">
                                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The <span>.</span> character</p>
                                    </div>
                                </li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The request’s body as a utf-8 decoded string</p></li>
                            </ol>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Hash the string using HMAC SHA256, using the webhook secret as the key. The expected signature will be the hex digest of the hash. Finally, compare signatures to make sure the webhook request is valid.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Once you’ve determined the event request is validly signed, it’s safe to use the event payload in your application’s business logic.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Create an IP allowlist</h3>


                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS sends webhooks from a fixed set of IP addresses. It’s recommended to restrict access to your webhook endpoint to only these IP addresses:</p>

                            <CodeSnippetStruct 
                            id={108}
                            headerTabs={0}
                            dropdownDisabled={true}
                            dropdownDisabledAndHidden={true}
                            sideBarOpen={sidebarMenuClicked}
                            snippet="WorkOS IP addresses" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>


                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>4</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Test your endpoint</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>From the dashboard, you can send test webhook events after configuring an endpoint. Go to the webhook endpoint detail page, click the <strong>Actions</strong> button and select <strong>Send test event</strong>. The types of events that you have configured for your endpoint are available for you to send sample payloads.</p>


                            <div id='img124' className={`enlargable-image-container ${this.state.enlargedImageId === 'img124' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img124')}>
                                    <img  src='/assets/syncing_webhooks_img2.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you would like to test against your local development environment, we recommend using a tool like <label className='demo-docs-hyperlink'>ngrok</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> to create a secure tunnel to your local machine, and sending test webhooks to the public endpoint generated with ngrok. See our <label className='demo-docs-hyperlink'>blog post</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> to get more details on how you may want to test webhooks locally with ngrok.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Best practices</h1>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Respond to events immediately</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>To avoid webhook requests potentially stressing your system, WorkOS strongly recommends that you respond to a webhook request with a 200 OK response as quickly as possible once received.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you process the event before responding, your system may not be able to handle a spike of requests. This may cause requests to timeout and result in missing important updates.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A common pattern is to store the request payload on a message queue, respond with a 200 OK response, and use a background worker to process the messages in the queue.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Recover from failed events</h3>

                            <div className="api-keys">
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If your endpoint fails to respond to a webhook request with a <span>2xx</span> response, WorkOS will automatically retry the event with exponential back-off for up to 3 days in production environments. If for some reason your endpoint is still unable to respond successfully to events during that period, the event will be considered failed, and we will no longer retry sending it. You can reconcile your data using our <label className="demo-docs-hyperlink">Directory Sync endpoints</label> to update your data.</p>
                            </div>

                            <div style={{marginTop: "5%"}} className='testing-the-api-info-box'>
                                <div className='api-info-box-img'>
                                    <img style={{width: sidebarMenuClicked ? "55.5%" : "35%", marginTop: sidebarMenuClicked ? "7.5%" : "12.5%"}} src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/>
                                </div>
                                <div className='api-info-box-text'>
                                    <div className="api-keys">
                                        <p style={{fontSize: sidebarMenuClicked ? "64.5%" : "65%", marginTop: sidebarMenuClicked ? "1%" : "1.3%", marginRight: "2%"}}>In staging environments, WorkOS only retries failed webhooks for several minutes before giving up. You can, however, manually retry webhooks using the WorkOS Dashboard for these environments.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Handle out-of-sequence events</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS does not guarantee that events are delivered in the same sequence that they are generated. For example, when syncing a directory you may receive:</p>

                            <ul>
                                <li>
                                    <div className="api-keys">
                                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>dsync.group.created</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="api-keys">
                                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>dsync.user.created</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="api-keys">
                                        <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><span>dsync.group.user_added</span></p>
                                    </div>
                                </li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your endpoint should handle cases when these events are delivered out of order. Each event includes the full payload of the objects involved, so you can perform an upsert using the payload data.</p>

                            <div className="api-keys">
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>It is also possible that event data can be stale due to a retry of an older event being delivered after a newer event for the same object. Therefore, we recommend checking the timestamp of the incoming webhook data against the timestamp of the data in your system to ensure you do not overwrite your data with stale data. Each object in the payload includes a <span>created_at</span> field and an <span>updated_at</span> field.</p>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Ignore duplicate events</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>It is possible to receive the same event more than once. WorkOS recommends that you handle webhook events using idempotent operations. One way of doing this is logging the ID of webhook events that you have processed and ignoring subsequent requests with the same ID.</p>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Obfuscate your endpoint URL</h3>

                            <div className="api-keys">
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>A small security measure you can incorporate is to make your webhook endpoint difficult to guess. Including a token comprised of series of random numbers and letters to your endpoint URL can prevent malicious actors from easily guessing your endpoint. For example: <span>https://api.example.com/webhooks/n0dbga5x…</span> is much more difficult to guess than <span>https://api.example.com/webhooks</span></p>
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Data Reconciliation</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Keep your app in sync with WorkOS.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>

                    </div>
                }
                {dataReconciliation && 
                    <div className="demo-docs-container">
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Data reconciliation</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Keep your app in sync with WorkOS.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>While the events API makes it easier to keep your app in sync with WorkOS, there may still be cases where your app gets out of sync. For example, your app may have a bug in its event processing logic or in rarer cases, may experience some data loss.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Data reconciliation refers to the process of comparing and aligning the state of objects between WorkOS and your app to ensure consistency. Depending on the scope of the issue, you can reconcile your app state by either replaying events from the <label className="demo-docs-hyperlink">events API</label> or by using the WorkOS <label className="demo-docs-hyperlink">state API</label>.</p>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Definitions</h1>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>Data reconciliation</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Refers to the process of comparing and aligning data from different sources or systems to ensure consistency and accuracy. The goal of data reconciliation is to ensure that all relevant data sources are synchronized and reflect the same information.</p>
                                </div>
                            </div>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>Event replay</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Is the act of reprocessing recorded events in an app. It is used to recreate past event sequences for debugging, testing, auditing, or ensuring data consistency.</p>
                                </div>
                            </div>

                            <div className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>Side effects</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>These are secondary consequences that arise from data modifications in an app. They can alter related data, trigger additional processes, update external systems, or affect the app’s overall state. e.g., Sending an email on a user’s profile change.</p>
                                </div>
                            </div>

                            <div style={{borderBottom: "1px solid #ccc"}} className={sidebarMenuClicked ? "simple-sidebar-table" : "simple-table"}>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-left" : "simple-table-left"}>
                                    <h5 style={{color: "black", cursor: "default"}}>Periodic reconciliation</h5>
                                </div>
                                <div className={sidebarMenuClicked ? "simple-table-sidebar-right" : "simple-table-right"}>
                                    <p>Is the regular process of comparing and synchronizing data between systems to ensure accuracy and consistency. It involves scheduled checks to identify and resolve discrepancies in data integrity.</p>
                                </div>
                            </div>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Reconciling via the events API</h1>

                            <div className="api-keys">
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In general, reconciling state changes between WorkOS and your app using the events API is simplest. Pick your cursor, which is usually the last known cursor you have processed, and paginate through events using the <span>after</span> parameter.</p>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>For special cases such as webhook migration or event replay, you can specify a starting time for event consumption using the <span>range_start</span> parameter.</p>
                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Handling side effects in the case of event replay</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Side effects, such as sending emails, updating 3rd party APIs, or performing other actions specific to your app, present challenges during event replay.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Separating data handling from business logic allows you to exercise control over what actions you want your app to make. This allows your app to replay events to sync data but bypass transactional logic e.g., not sending out the same email twice.</p>


                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Reconciling via the WorkOS state API</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Your app may perform data reconciliation by syncing state via the WorkOS <label className="demo-docs-hyperlink">state APIs</label> e.g., in disaster recovery scenarios.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Data reconciliation using state APIs requires performing diffs to identify deletions to ensure the correct state is maintained. This introduces additional complexity, making it essential to carefully design and test the reconciliation process.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The general approach for reconciling data via the state API is as follows:</p>

                            <div className="api-keys">
                                <ol>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Pull state from WorkOS API for the objects your app is interested in.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Update based on <span>updated_at</span>. If the timestamp is out of date, update the object.</p></li>
                                    <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Identify deactivated objects or deletions and sync that state.</p></li>
                                </ol>

                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>If you need to force all objects to update state, perform a complete resynchronization of the affected data instead of relying solely on the <span>updated_at</span> timestamp. Update all objects regardless of the individual <span>updated_at</span> timestamp.</p>

                            </div>

                            <h3 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h3" : ""}>Considerations for periodic reconciliation</h3>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In some cases, you may want to run periodic reconciliation jobs to proactively check and reconcile the state between WorkOS and your app. When implementing such jobs, it is important to account for potential race conditions for concurrent updates. Additionally, consider the specific characteristics of your app to determine the frequency and scope of periodic reconciliation.</p>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>Stream events to Datadog</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Stream and analyze WorkOS activity in Datadog.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {observabilityStreamToDatadog && 
                    <div className="demo-docs-container">
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Stream events to Datadog</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Stream and analyze WorkOS activity in Datadog.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <div id='img125' className={`enlargable-image-container ${this.state.enlargedImageId === 'img125' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img125')}>
                                    <img  src='/assets/stream_datadogs_img1.avif' alt="Enlargable" className="image" />
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>WorkOS supports real-time streaming of events to Datadog. By analyzing WorkOS activity directly in Datadog, you are able to:</p>

                            <ul>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>View trends in user sign-ins, user growth, new SSO connections and more.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Debug customer issues related to sign-in, email verification, password resets and more</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Generate reports of user activity per customer organization.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Set alerts for unexpected activity, such as sudden spike in failed password attempts.</p></li>
                            </ul>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>See all of the WorkOS events that stream to Datadog in the <label className="demo-docs-hyperlink">event types</label> documentation.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Introduction</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Setting up real-time streaming of WorkOS events to Datadog only takes a few minutes and can be done in three simple steps.</p>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>1</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Create a Datadog API key</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>First, create a new Datadog API key to give WorkOS permission to send event activity as logs to your Datadog account. While you can use an existing API key, WorkOS recommends creating a new key that will only be used for WorkOS event streaming.</p>

                            <ol>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Sign in to your <label className='demo-docs-hyperlink'>Datadog account</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Navigate to the Organization Settings → <label className='demo-docs-hyperlink'>API Keys</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span></p> page.</li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Choose the <strong>New Key</strong> button</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Enter a name for your new API key.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Choose the <strong>Create Key</strong> button.</p></li>
                            </ol>


                            <div id='img126' className={`enlargable-image-container ${this.state.enlargedImageId === 'img126' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img126')}>
                                    <img  src='/assets/stream_datadogs_img2.avif' alt="Enlargable" className="image" />
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>2</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Configure event streaming in WorkOS</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The next step is to configure event streaming in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> using the Datadog API key that was created in the previous step.</p>

                            <ol>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Sign in to the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Navigate to the <strong>Events</strong> page.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Choose the <strong>Stream to Datadog</strong> button.</p></li>
                            </ol>

                            <div id='img127' className={`enlargable-image-container ${this.state.enlargedImageId === 'img127' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img127')}>
                                        <img  src='/assets/stream_datadogs_img3.avif' alt="Enlargable" className="image" />
                            </div>

                            <ol start={4}>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Enter the Datadog API key.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Select your Datadog region.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Choose the <strong>Save Log Stream Details</strong> button.</p></li>
                            </ol>

                            <div id='img128' className={`enlargable-image-container ${this.state.enlargedImageId === 'img128' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img128')}>
                                        <img  src='/assets/stream_datadogs_img4.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className="api-keys">
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>With event streaming configured, when new events occur, WorkOS will send the events to Datadog with the source <span>workos</span>.</p>
                            </div>

                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section'>

                            <div className='labeled-header'>
                                <div className='label-tag'>
                                    <span className={sidebarMenuClicked ? "label-tag-sidebar-span": ""}>3</span>
                                </div>
                                <div className='label-desc'>
                                    <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Add the WorkOS Datadog dashboard</h1>
                                </div>
                            </div>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The final step is to add the WorkOS Datadog dashboard to your Datadog account.</p>

                            <ol>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Sign in to your <label className='demo-docs-hyperlink'>Datadog account</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span>.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Navigate to the <label className='demo-docs-hyperlink'>Dashboard List</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_color.png' alt='no img available'/></span> page.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Choose the + <strong>New Dashboard</strong> button.</p></li>
                            </ol>

                            <div id='img129' className={`enlargable-image-container ${this.state.enlargedImageId === 'img129' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img129')}>
                                        <img  src='/assets/stream_datadogs_img5.avif' alt="Enlargable" className="image" />
                            </div>

                            <ol start={4}>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Enter a dashboard name.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Choose the <strong>New Dashboard</strong> button.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>In the new dashboard, choose the <strong>Configure</strong> button.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Download the <label className='demo-docs-hyperlink'>WorkOS Datadog dashboard JSON file</label><span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-docs-hyperlink-icon-sidebar-img" : ""} src='/assets/external_link_download_color.png' alt='no img available'/></span></p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Scroll down in the context menu and choose <strong>Import dashboard JSON</strong>.</p></li>
                                <li><p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Upload the WorkOS Datadog dashboard JSON file downloaded in the previous step.</p></li>
                            </ol>

                            <div id='img130' className={`enlargable-image-container ${this.state.enlargedImageId === 'img130' ? 'enlarged' : ''}`} onClick={() => this.toggleEnlarged('img130')}>
                                        <img  src='/assets/stream_datadogs_img6.avif' alt="Enlargable" className="image" />
                            </div>

                            <div className='demo-next-section-container'>
                                <div className='demo-next-section-container-left'>
                                    <h4 className={sidebarMenuClicked ? "demo-next-section-container-left-sidebar-h4" : ""}>API Reference</h4>
                                    <p style={{fontSize: sidebarMenuClicked ? "60%" : ""}}>Every SDK method and API endpoint documented.</p>
                                </div>
                                <div className={sidebarMenuClicked ? "demo-next-section-container-sidebar-right" : "demo-next-section-container-right"}>
                                    <p className={sidebarMenuClicked ? "demo-next-section-container-right-sidebar-p" : ""}>Up next <span className='demo-docs-hyperlink-icon'><img className={ sidebarMenuClicked ? "demo-next-section-container-right-sidebar-img" : ""} style={{ width: sidebarMenuClicked ? "20%" : "15%", marginLeft: sidebarMenuClicked ? "0px" : "4%"}} src='/assets/docs_next_section_icon.png' alt='no img available'/></span></p>
                                </div>
                            </div>


                        </div>

                    </div>
                }
            </Styles>
        )

    }
}

//* IMAGE 127 (latest)