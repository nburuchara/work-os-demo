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

.pageHeader h3 {
    margin-top: 1%;
    font-family: poppins;
}  

.pageHeader p {
    margin-top: 1%;
    font-family: poppins;
}

`

export default class DesktopUsers extends Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }

    render () {
        return (
            <Styles>
                <div className='parent_container'>
                    <div className='pageHeader'>
                        <h1 className=''>Users</h1>
                        <h3>[Empty page]</h3>
                        <p>Click "Docs" to see the quick access documentation demo.</p>
                    </div>
                </div>
            </Styles>
        )
    }
}