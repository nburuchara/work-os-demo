import React, {Component} from 'react'
import styled from 'styled-components'
import APIReference from '../../d_Home_Pages/d_Documentation_Demo/d_API_Reference'

const Styles = styled.div  `

        // - - - - - - POPUP CONTAINER - - - - - - //

.popup-container {
    margin-left: 44.8%;
    // margin-top: 2%;
    height: 70vh !important;
    position: absolute;
    width: 35.5% !important;
    background-color: white;
    border: 0.5px solid #cccd43 !important; 
    border-radius: 9px;
    padding: 0.75%;
    z-index: 999; /* Set a negative z-index to position it under other elements */
    margin-top: 0.45%;
    margin-right: 0.5% !important;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07), 0 6px 20px 0 rgba(0, 0, 0, 0.07) !important;
    display: flex;
    flex-direction: column;
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
           scrollEnabled: true
        }
    }

    handleSidePanelOpened = () => {
        this.setState((prevState) => ({
            scrollEnabled: !prevState.scrollEnabled,
        }))
    }
        
    

    render () {
        const { scrollEnabled } = this.state;

        return (
            <Styles>
                <div style={{overflow: scrollEnabled ? "scroll" : "hidden"}} className='popup-container'>
                    <APIReference sidePanelOpened={this.handleSidePanelOpened}/>
                </div>
            </Styles>
        )
    }
}