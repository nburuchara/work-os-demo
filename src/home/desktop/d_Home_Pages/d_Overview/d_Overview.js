import React, {Component} from 'react'
import styled from 'styled-components'

const Styles = styled.div `

    // - - - - - - - PARENT CONTAINER - - - - - - - //

    // - - PAGE HEADER - - //

.pageHeader {
    text-align: left;
    margin-left: 5%;
    // margin-top: 7.25%;
}

.pageHeader h1 {
    margin-top: 1%;
    font-family: poppins;
}

`

export default class DesktopOverview extends Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }

    componentDidMount = () => {
        
    }

    render () {
        return (
            <Styles>
                <div className='parent_container'>
                    <div className='pageHeader'>
                        <h1 className=''>Getting Started</h1>
                    </div>
                </div>
            </Styles>
        )
    }
}