import React, {Component} from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';

const Styles = styled.div  `

        // - - - - - - POPUP CONTAINER - - - - - - //

.popup-container {
    // height: 40vh;
    position: absolute;
    width: 22.4%;
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


    // - - POPUP HEADER - - //

.popup-docs-header:after {
    content: "";
    display: table;
    clear: both;
}

.popup-docs-search {
    float: left;
    text-align: center;
    width: 75%;
}

.popup-docs-see-all-btn {
    float: left;
    text-align: right;
    width: 25%;
}

    // - POPUP SEARCH BAR - //

.popup-docs-search:after {
    content: "";
    display: table;
    clear: both;
}

.popup-docs-search-icon {
    float: left;
    text-align: center;
    width: 8%;
}

.popup-docs-search-text {
    float: left;
    text-align: center;
    width: 92%;
}

    // # BUTTON 
    
.popup-docs-search button {
    width: 100%;
    padding: 0.1em;
}

    // # ICON

.popup-docs-search-icon img {
    margin-top: 25%;
    width: 75%;
    margin-left: 2.5px;
}

    // # INPUT

.popup-docs-search-text input {
    margin-top: 1%;
    width: 94.5%;
    font-size: 1em;
    background-color: transparent;
    border: 1px solid transparent;
}

.popup-docs-search-text input:focus {
    outline: none;
}



    // - POPUP SEE ALL BUTTON - //

.popup-docs-see-all-btn button {
    width: 90%;
    background-color: #6363f1;
    color: white;
    padding: 5%;
    font-family: poppins;
    font-size: 70%;
    font-weight: bold;
}


`

export default class Popup extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render () {
        return (
            <Styles>
                {/* <CSSTransition
                in={this.props.isVisibleProp}
                timeout={500}
                classNames="dialog-slide"
                unmountOnExit
                > */}
                    <div className='popup-container'>
                        <div className='popup-docs-header'>
                            <div className='popup-docs-search'>
                                <button>
                                    <div className='popup-docs-search-icon'>
                                        <img src='/assets/docs_popup_search_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='popup-docs-search-text'>
                                        <input
                                
                                        />
                                    </div>
                                </button>
                            </div>
                            <div className='popup-docs-see-all-btn'>
                                <button
                                >All docs</button>
                            </div>
                        </div>
                    </div>
                {/* </CSSTransition> */}
            </Styles>
        )
    }
}