import React, {Component} from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';
import { ColorRing } from 'react-loader-spinner'

const Styles = styled.div  `

        // - - - - - - POPUP CONTAINER - - - - - - //

.popup-container {
    // height: 40vh;
    position: absolute;
    width: 20.4%;
    background-color: white;
    border: 0.5px solid #ccc;
    border-radius: 7px;
    padding: 0.75%;
    z-index: 999; /* Set a negative z-index to position it under other elements */
    margin-top: 0.5%;
    margin-left: 0.5%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.20);
}

    // - - POPUP CONTAINER ANIMATION - - //

/* CSS Transition Definitions */
.dialog-slide-enter {
    transform: translateY(10%);
    opacity: 0;
}

.dialog-slide-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: transform 500ms, opacity 500ms;
}

.dialog-slide-exit {
    transform: translateY(0);
    opacity: 1;
}

.dialog-slide-exit-active {
    transform: translateY(10%);
    opacity: 0;
    transition: transform 500ms, opacity 500ms;
}

    // - - FEEDBACK TEXTAREA - - //

.popup-container textarea {
    margin-top: 1%;
    width: 92.5%;
    resize: none;
    padding: 2%;
    font-family: poppins;
    height: 14.5vh;
    border-radius: 7px;
}

.popup-container textarea:focus {
    outline: none;
    border: 2px solid #9c9ef0 !important;
}

.textarea-err-msg {
    text-align: left;
    margin-left: 2.5%;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: poppins;
    font-size: 80%;
}

.textarea-buttons {
    margin-top: 2%;
    text-align: right;
    margin-right: 1.5%;
}

.textarea-buttons button {
    all: unset !important;
    border: 1px solid #5e626a !important;
    padding: 1% !important;
    width: 20% !important;
    text-align: center !important;
    margin-left: 2.5% !important;
    border-radius: 5px !important;
    font-size: 80% !important;
    border: 1px solid transparent !important;
    cursor: pointer !important;
    font-family: poppins !important;
}

#feedbackCancelBtn {
    background-color: white;
    border: 1px solid #5e626a !important;
}

#feedbackSendBtn {
    padding-bottom: 1%; 
    background-color: #6363f1 !important; 
    font-weight: bold !important;
    color: white !important;
}

#feedbackCancelBtnSent {
    background-color: #ccc !important;
    color: #5e626a !important;
    cursor: not-allowed !important;
}

#feedbackSendBtnSent {
    background-color: #ccc !important;
    color: #5e626a !important;
    cursor: not-allowed !important;
}

`

export default class Popup extends Component {
    constructor() {
        super()
        this.state = {
            showFeedbackTextarea: true,
            showFeedbackLoading: false,

            textareaBorderColor: "#ccc",
            textareaBorderSize: "1px",
            feedbackErrMsg: ""
        }
    }

    render () {
        const {textareaBorderColor, textareaBorderSize} = this.state;
        return (
            <Styles>
                {/* <CSSTransition
                in={this.props.isVisibleProp}
                timeout={500}
                classNames="dialog-slide"
                unmountOnExit
                > */}
                    <div className='popup-container'>
                        {this.state.showFeedbackTextarea && 
                            <div>
                                <textarea 
                                placeholder='Help us improve the dashboard'
                                style={{border: `${textareaBorderSize} solid ${textareaBorderColor}` }}
                                className='popup-textarea'
                                />
                                <p className='textarea-err-msg'>{this.state.feedbackErrMsg}</p>
                                <div className='textarea-buttons'>
                                    <button id='feedbackCancelBtn' style={{paddingBottom: "1%", backgroundColor: "#fff", fontWeight: "bold", color: "#5e626a", border: "0.5px solid #5e626a"}}>Cancel</button>
                                    <button id='feedbackSendBtn'>Send</button>
                                </div>
                            </div>
                           
                        }
                        {this.state.showFeedbackLoading && 
                            <div>
                                <div style={{marginTop: "20%", marginBottom: "20%"}}>
                                    <ColorRing
                                    visible={true}
                                    height="30"
                                    width="30"
                                    ariaLabel="color-ring-loading"
                                    // wrapperStyle={{}}
                                    // wrapperClass="color-ring-wrapper"
                                    colors={['#6363f1', '#6363f1', '#6363f1', '#6363f1', '#6363f1', '#6363f1']}
                                    />
                                </div>
                                <p className='textarea-err-msg'>{this.state.feedbackErrMsg}</p>
                                <div className='textarea-buttons'>
                                    <button id='feedbackCancelBtnSent' style={{paddingBottom: "1%", backgroundColor: "#fff", fontWeight: "bold", color: "#5e626a", border: "0.5px solid #5e626a"}}>Cancel</button>
                                    <button id='feedbackSendBtnSent'>Send</button>
                                </div>
                            </div>
                        } 
                        {this.state.showFeedbackConfirmation && 
                            <div>
                                <h5></h5>
                            </div>
                        }
                    </div>
                {/* </CSSTransition> */}
            </Styles>
        )
    }
}