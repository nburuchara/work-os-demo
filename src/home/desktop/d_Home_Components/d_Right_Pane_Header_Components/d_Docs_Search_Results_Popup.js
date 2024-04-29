import React, {Component} from 'react'
import styled from 'styled-components'

const Styles = styled.div  `

        // - - - - - - POPUP CONTAINER - - - - - - //

.popup-container {
    // margin-top: 2%;
    height: 20vh !important;
    position: absolute;
    width: 68% !important;
    background-color: white;
    border: 0.5px solid #cccd43 !important; 
    border-radius: 7px;
    padding: 0.75%;
    z-index: 999; /* Set a negative z-index to position it under other elements */
    margin-top: 2%;
    margin-left: 0.5% !important;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.0), 0 6px 20px 0 rgba(0, 0, 0, 0.0) !important;
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
                <div className='popup-container'>

                </div>
            </Styles>
        )
    }
}