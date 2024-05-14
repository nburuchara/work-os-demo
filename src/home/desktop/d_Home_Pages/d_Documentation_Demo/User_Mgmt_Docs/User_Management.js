import React, {Component} from 'react'
import styled from 'styled-components'

const Styles = styled.div  `

`

export default class UserManagement extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render () {
                //* - UI ADJUSTABLE VARS - *//
            const { sidebarMenuClicked } = this.props;

        return (
            <Styles>
                <div className='demo-docs-container'>
                    <div style={{width: sidebarMenuClicked ? "63%" : "auto", float: sidebarMenuClicked ? "right" : "none", marginBottom: sidebarMenuClicked ? "1%" : "4%", paddingBottom: sidebarMenuClicked ? "5%" : "7.5%"}} className='demo-docs-section' >
                        <h1 style={{paddingTop: sidebarMenuClicked ? "0%" : "7%", fontSize: sidebarMenuClicked? "120%" : "150%"}}>User Management</h1>
                    </div>
                </div>
            </Styles>
        )
    }
}