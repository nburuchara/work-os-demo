import React, {Component} from 'react'
import styled from 'styled-components'

const Styles = styled.div `


        // - - - - - - RIGHT PANE HEADER - - - - - - //

.rightPaneHeader {
    margin-top: 1.5%;
}

.rightPaneHeader:after {
    display: table;
    content: "";
    clear: both;
}

.rightPaneLeftSide {
    float: left;
    text-align: left;
    width: 70%;
}

.rightPaneRightSide {
    float: left;
    text-align: right;
    width: 30%;
}

    // - - RIGHT PANE HEADER (TOP RIGHT SIDE) - - //

.rightPaneRightSide {
    
}

.rightPaneRightSide:after {
    display: table;
    clear: both;
    content: "";
}

.rightSideCol1 {
    float: left;
    text-align: center;
    width: 22.5%;
}

.rightSideCol2 {
    float: left;
    text-align: center;
    width: 35%;
}

.rightSideCol3 {
    float: left;
    text-align: center;
    width: 22.5%;
}

.rightSideCol4 {
    float: left;
    text-align: center;
    width: 10%;
    height: 3vh;
    background-color: black;
}

.rightSideCol5 {
    float: left;
    text-align: center;
    width: 10%;
    height: 3vh;
    background-color: red;
}

    // - HELP BUTTON - //


.rightSideCol1:after {
    content: "";
    display: table;
    clear: both;
}

.rightSideCol1Icon {
    float: left;
    text-align: center;
    width: 40%;
}

.rightSideCol1Text {
    float: left;
    text-align: left;
    width: 60%;
}

    // # BUTTON CONTAINER

.rightSideCol1 button {
    width: 90%;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 4%;
}

    // # ICON

.rightSideCol1Icon img {
    margin-top: 15%;
    width: 16px;
    height: 16px;
}

    // # TEXT

.rightSideCol1Text p {
    margin-top: 5%;
    font-family: poppins;
    font-size: 102%;
    margin-left: 2%;
    margin-bottom: 0px;
}


    // - FEEDBACK BUTTON - //


.rightSideCol2:after {
    content: "";
    display: table;
    clear: both;
}

.rightSideCol2Icon {
    float: left;
    text-align: center;
    width: 30%;
}

.rightSideCol2Text {
    float: left;
    text-align: left;
    width: 70%;
}

// # BUTTON CONTAINER

.rightSideCol2 button {
    width: 90%;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 1.25%;
}

    // # ICON

.rightSideCol2Icon img {
    margin-top: 12.5%;
    width: 19px;
    height: 19px;
}

    // # TEXT

.rightSideCol2Text p {
    margin-top: 5.5%;
    font-family: poppins;
    font-size: 104%;
    // margin-left: 2%;
    margin-bottom: 0px;
}

    // - DOCS BUTTON - //


.rightSideCol3:after {
    content: "";
    display: table;
    clear: both;
}

.rightSideCol3Icon {
    float: left;
    text-align: center;
    width: 32%;
}

.rightSideCol3Text {
    float: left;
    text-align: left;
    width: 68%;
    height: 3vh;
}

// # BUTTON CONTAINER

.rightSideCol3 button {
    width: 90%;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 3%;
}

    // # ICON

.rightSideCol3Icon img {
    margin-top: 17%;
    width: 17px;
    height: 17px;
}

    // # TEXT

.rightSideCol3Text p {
    margin-top: 5%;
    font-family: poppins;
    font-size: 105%;
    margin-left: 2%;
    margin-bottom: 0px;
}

`

export default class Header extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render () {
        return(
            <Styles>
                <div className='rightPaneHeader'>
                    <div className='rightPaneLeftSide'>
                        <p></p>
                    </div>
                    <div className='rightPaneRightSide'>
                        <div className='rightSideCol1'>
                            <button>
                                <div className='rightSideCol1Icon'>
                                    <img src='/assets/right_pane_header_help_icon.png' alt='img not available'/>
                                </div>
                                <div className='rightSideCol1Text'>
                                    <p>Help</p>
                                </div>
                            </button>
                        </div>
                        <div className='rightSideCol2'>
                            <button>
                                <div className='rightSideCol2Icon'>
                                    <img src='/assets/right_pane_header_feedback_icon.png' alt='img not available'/>
                                </div>
                                <div className='rightSideCol2Text'>
                                    <p>Feedback</p>
                                </div>
                            </button>
                        </div>
                        <div className='rightSideCol3'>
                            <button>
                                <div className='rightSideCol3Icon'>
                                    <img src='/assets/right_pane_header_docs_icon.png' alt='img not available'/>
                                </div>
                                <div className='rightSideCol3Text'>
                                    <p>Docs</p>
                                </div>
                            </button>
                        </div>
                        <div className='rightSideCol4'>
                            <img src='/assets/right_pane_header_theme_icon.png' alt='img not available'/>
                        </div> 
                        <div className='rightSideCol5'>

                        </div>
                    </div>
                </div>
            </Styles>
        )
    }
}