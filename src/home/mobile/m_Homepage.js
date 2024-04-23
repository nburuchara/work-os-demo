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
        return (
            <Styles>
                <div className='fullPage'>

                </div>
            </Styles>
        )
    }
}