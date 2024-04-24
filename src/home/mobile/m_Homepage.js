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

export default class MobileHome extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {

        const smallPhoneQuery = `(min-width: 320px) and (max-width: 413px)`
        
        return (
            <Styles>

                 {/*  - - RENDER SMALL PHONE VIEW - - */}

                 <MediaQuery query={smallPhoneQuery}>
                    {this.renderSmallPhoneView()}
                </MediaQuery>

            </Styles>
        )
    }
}