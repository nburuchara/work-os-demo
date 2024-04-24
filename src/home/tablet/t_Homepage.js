import React,{Component} from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

const Styles = styled.div `
    
    // - - FULL PAGE - - //

.fullPage {
    width: 100%;
    height: 100vh;
}

`

export default class TabletHome extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {

        const largestTabletMediaQuery = `(min-width: 981px) and (max-width: 1075px)`; 
        const largeTabletMediaQuery = `(min-width: 886px) and (max-width: 980px)`; 
        const tabletMediaQuery = `(min-width: 792px) and (max-width: 885px)`; 

        return (
            <Styles>

                {/*  - - RENDER TABLET VIEWS - - */}
                
                <MediaQuery query={tabletMediaQuery}>
                    {this.renderTabletView()}
                </MediaQuery>

                
                <MediaQuery query={largeTabletMediaQuery}>
                    {this.renderLargeTabletView()}
                </MediaQuery>

                
                <MediaQuery query={largestTabletMediaQuery}>
                    {this.renderLargestTabletView()}
                </MediaQuery>

            </Styles>
        )
    }
}