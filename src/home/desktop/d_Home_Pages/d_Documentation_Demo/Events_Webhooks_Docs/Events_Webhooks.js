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
            eventTypes: true,

            //* - CODE SNIPPET - *//
            currentSelectedLanguage: "javascript",
            codeSnippet1CopyHovered: false,

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

            const { eventTypes } = this.state;


            //* - DOCS UI SIZE ADJUSTMENT VAR(S) - *//
            const { sidebarMenuClicked, } = this.props;

            const { hiddenDropdownBtn1, hiddenDropdownBtn2, hiddenDropdownBtn3, hiddenDropdownBtn4, hiddenDropdownBtn5, hiddenDropdownBtn6, hiddenDropdownBtn7, hiddenDropdownBtn8, hiddenDropdownBtn9, hiddenDropdownBtn10, hiddenDropdownBtn11, hiddenDropdownBtn12, hiddenDropdownBtn13, hiddenDropdownBtn14, hiddenDropdownBtn15, hiddenDropdownBtn16, hiddenDropdownBtn17, hiddenDropdownBtn18, hiddenDropdownBtn19, hiddenDropdownBtn20, hiddenDropdownBtn21, hiddenDropdownBtn22, hiddenDropdownBtn23, hiddenDropdownBtn24 } = this.state;

        return (
            <Styles>
                {eventTypes && 
                    <div className="demo-docs-container">
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "5%", borderBottom: "2px solid #6363f1"}} className='demo-docs-section' >
                            <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>Events</h1>
                            <p style={{fontSize: sidebarMenuClicked ? "90%" : "100%", marginBottom: "0px"}}>Respond to activity that occurs within WorkOS and third-party providers.</p>
                        </div>
                        <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "2.5%" : "5%"}} className='demo-docs-section'>

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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.authentication.email_verification_failed<span style={{backgroundColor: "#f8f8fb", color: "#5e626a", padding: "0.5%", borderRadius: "20px",
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.authentication.email_verification_succeeded</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.authentication.magic_auth_failed<span style={{backgroundColor: "#f8f8fb", color: "#5e626a", padding: "0.5%", borderRadius: "20px",
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.authentication.magic_auth_succeeded</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.authentication.mfa_failed<span style={{backgroundColor: "#f8f8fb", color: "#5e626a", padding: "0.5%", borderRadius: "20px",
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
                                        id={65}
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.authentication.mfa_succeeded</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.authentication.oauth_failed<span style={{backgroundColor: "#f8f8fb", color: "#5e626a", padding: "0.5%", borderRadius: "20px",
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.authentication.oauth_succeeded</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.authentication.password_failed<span style={{backgroundColor: "#f8f8fb", color: "#5e626a", padding: "0.5%", borderRadius: "20px",
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.authentication.password_succeeded</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.authentication.sso_failed<span style={{backgroundColor: "#f8f8fb", color: "#5e626a", padding: "0.5%", borderRadius: "20px",
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.authentication.sso_succeeded</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.connection.activated</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.connection.deactivated</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.connection.deleted</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.dsync.activated</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.dsync.deleted</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.dsync.group.created</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.dsync.group.deleted</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.dsync.group.updated</strong></p>
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
                                    <p style={{fontSize: sidebarMenuClicked ? "50%" : "70%", marginTop: sidebarMenuClicked ? "1.75%" : ""}}><strong>.dsync.group.user_added</strong></p>
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

                        </div>
                    </div>
                }
            </Styles>
        )

    }
}