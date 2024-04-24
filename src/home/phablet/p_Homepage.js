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

export default class PhabletHome extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {

        const finalPhabletMediaQuery = `(min-width: 699px) and (max-width: 791px)`
        const largestPhabletMediaQuery = `(min-width: 604px) and (max-width: 698px)`
        const largePhabletMediaQuery = `(min-width: 509px) and (max-width: 603px)`
        const phabletMediaQuery = `(min-width: 414px) and (max-width: 508px)`

        return (
            <Styles>
            
                {/*  - - PHABLET VIEWS - - */}

                <MediaQuery query={phabletMediaQuery}>
                    {this.renderPhabletView()}
                </MediaQuery>


                <MediaQuery query={largePhabletMediaQuery}>
                    {this.renderLargePhabletView()}
                </MediaQuery>


                <MediaQuery query={largestPhabletMediaQuery}>
                    {this.renderLargestPhabletView()}
                </MediaQuery>


                <MediaQuery query={finalPhabletMediaQuery}>
                    {this.renderFinalPhabletMediaQuery()}
                </MediaQuery>

            </Styles>
        )
    }
}