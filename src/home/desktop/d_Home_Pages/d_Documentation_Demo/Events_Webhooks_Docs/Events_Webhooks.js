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

            const { hiddenDropdownBtn1 } = this.state;

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

                            <h1 className={sidebarMenuClicked ? "demo-docs-section-sidebar-h1" : ""}>Authentication events</h1>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Each step in the authentication flow emits an authentication event. Authentication success events are emitted even when additional steps, such as MFA, are required to complete the process.</p>

                            <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>The authentication failed events aren’t emitted yet, but will be available soon.</p>

                            <div onClick={() => this.hiddenDropdownBtnClicked(1)} className='hidden-dropdown-btn'>
                                <div className='hdb-icon'>
                                    <img style={{width: sidebarMenuClicked ? "55%" : "", marginTop: sidebarMenuClicked ? "21%" : ""}} className={hiddenDropdownBtn1 ? "hdb-icon-img hdb-icon-img-rotated" : ""} src='/assets/hidden_dropdown_btn_icon.png' alt='no img available'/>
                                </div>
                                <div className='hdb-text'>
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}><strong>Directory User Object</strong></p>
                                </div>
                            </div>

                            <CSSTransition
                            in={hiddenDropdownBtn1}
                            timeout={500}
                            classNames="dialog-slide"
                            unmountOnExit
                            >
                                <div style={{marginTop: "2.5%"}}>
                                    
                                <p className={sidebarMenuClicked ? "demo-docs-section-sidebar-p" : ""}>Here is an example Directory User. The data stored varies per directory provider and may include attributes such as photo URLs, pay groups, supervisors, etc.</p>

                                    <CodeSnippetStruct 
                                    id={41}
                                    headerTabs={0}
                                    dropdownDisabled={true}
                                    dropdownDisabledAndHidden={true}
                                    showOnlyJSONTab={true}
                                    sideBarOpen={sidebarMenuClicked}
                                    snippet="Directory User" 
                                    updateSelectedLang={this.newLangSelected}
                                    selectedLang={this.state.currentSelectedLanguage}/>
                                </div>
                            </CSSTransition>

                        </div>
                    </div>
                }
            </Styles>
        )

    }
}