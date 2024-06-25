import React, {Component} from 'react'
import styled from 'styled-components'
import DocsNavigationMenu from '../../d_Home_Pages/d_Documentation_Demo/d_Docs_Navigation'

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
    constructor(props) {
        super(props) 
        this.state = {
           scrollEnabled: true
        }

        this.popupContainerRef = React.createRef();
        this.sidebarPanelRef = React.createRef();
    }


    componentDidMount() {
        const popupContainer = this.popupContainerRef.current;
        if (popupContainer) {
            popupContainer.addEventListener('scroll', this.handleScroll);
        }
    }

    componentWillUnmount() {
        const popupContainer = this.popupContainerRef.current;
        if (popupContainer) {
            popupContainer.removeEventListener('scroll', this.handleScroll);
        }
    }

    handleScroll = () => {
        const popupContainer = this.popupContainerRef.current;
        const scrollTop = popupContainer.scrollTop;
        const sidebarPanel = this.sidebarPanelRef.current;
        if (sidebarPanel) {
            sidebarPanel.style.top = `${scrollTop}px`;
        }
    };


    handleSidePanelOpened = () => {
        const container = this.popupContainerRef.current;
        if (container) {
            // Check if we're not already at the top of the container
            if (container.scrollTop > 0) {
                // If not, decrement the scrollTop value by 10 pixels
                container.scrollTop -= 1;
            }
        }
    
        this.setState((prevState) => ({
            // scrollEnabled: !prevState.scrollEnabled
        }))
    };
    
    scrollToTopOfPopup = () => {
        const element = document.getElementById('popup-container-header');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    
        
    

    render () {
        const { scrollEnabled } = this.state;
        return (
            <Styles>
                <div ref={this.popupContainerRef} className='popup-container' style={{overflow: scrollEnabled ? "auto" : "hidden"}}>
                    {/* <span id='popup-container-header'></span> */}
                    <DocsNavigationMenu sidebarPanelRef={this.sidebarPanelRef} sidePanelOpened={this.handleSidePanelOpened}/>
                </div>
            </Styles>
        )
    }
}