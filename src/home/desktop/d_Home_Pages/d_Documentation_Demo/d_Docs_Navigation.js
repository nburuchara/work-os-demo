import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from './d_Documentation_Components/d_Code_Snippet_Structure'
import { hover } from '@testing-library/user-event/dist/hover'
import { CSSTransition } from 'react-transition-group';
import NestedDropdown from './d_Documentation_Components/NestedDropdown'

import UserManagementOptions from './User_Mgmt_Docs/User_Mgmt_Options';
import StandaloneAPIsOptions from './Standalone_APIs_Docs/Standalone_APIs_Options'
import EventsWebhooksOptions from './Events_Webhooks_Docs/Events_Webhooks_Options';
import ResourcesOptions from './Resources_Docs/Resources_Docs_Options'

import AllDocsFullSearch from './d_Documentation_Search_Terms/All_Docs_Search_Terms'
import UserManagementFullSearch from './d_Documentation_Search_Terms/User_Management_Search_Terms'
import StandaloneAPIsFullSearch from './d_Documentation_Search_Terms/Standalone_APIs_Search_Terms'
import EventsWebhooksFullSearch from './d_Documentation_Search_Terms/Events_Webhooks_Search_Terms'
import ResourcesFullSearch from './d_Documentation_Search_Terms/Resources_Search_Terms'


import APIReference from './Resources_Docs/Resources_Pages/d_API_Reference';
import UserManagement from './User_Mgmt_Docs/User_Management';
import StandaloneAPIs from './Standalone_APIs_Docs/Standalone_APIs';
import EventsWebhooks from './Events_Webhooks_Docs/Events_Webhooks';
import Resources from './Resources_Docs/Resources'


const Styles = styled.div `

        //! - - - - - - DEMO DOCS SIDEBAR - - - - - !//

.demo-docs-sidebar {
    filter: none;
    position: absolute; 
    bottom: 0; 
    height: 100%;
    float: left;
    top: 0; /* Align to the top of the viewport */
    left: 0; /* Align to the left of the viewport */
    width: 35%; /* Set the width as desired */
    background-color: #f9f9fb;
    z-index: 1;
    border-right: 1px solid #ccc; 
}

.demo-docs-sidebar-logo {
    position: sticky;
    text-align: left;
    margin-left: 8%;
}

.demo-docs-sidebar-logo img {
    position: sticky;
    margin-top: 8%;
    width: 60%;
}

.demo-docs-sidebar-logo h5 {
    margin-top: 0px;
    margin-bottom: 6%;
    color: #2e2eff;
    margin-left: 3%;
}

    // - - SIDEBAR SUBSECTIONS - - //

.demo-docs-sidebar-subsections {
    margin-left: 5%;
    margin-right: 5%;
    text-align: left;
    position: relative;
}

.demo-docs-sidebar-subsections p {
    font-size: 75%;
    // font-family: poppins;
    font-weight: bold;
    margin-bottom: 5%;
    margin-top: 4%;
    padding-left: 2%;
}

.demo-docs-sidebar-subsections label:hover {
    text-decoration: underline;
    text-decoration-color: #6363f1;
    cursor: pointer;
}   

.demo-docs-sidebar-subsections div {
    background-color: ;
    padding: 0.95%;
    border-radius: 8px;
    width: 88.5%;
    margin-top: 3.5%;
    transition: top 5s ease;
}

.demo-docs-sidebar-subsections div:hover {
    background-color: #ECEDFE;
}

/* CSS Transition Definitions */
.dialog-slide-enter {
    transform: translateY(40%) !important;
    opacity: 0 !important;
}

.dialog-slide-enter-active {
    transform: translateY(0) !important;
    opacity: 1 !important;
    transition: transform 500ms, opacity 500ms !important;
}

.dialog-slide-exit {
    transform: translateY(0) !important;
    opacity: 1 !important;
}

.dialog-slide-exit-active {
    transform: translateY(20%) !important;
    opacity: 0 !important;
    transition: transform 500ms, opacity 500ms !important;
}


/* CSS Transition Definitions */
.docs-side-panel-enter {
    transform: translateX(-100%) !important;
    opacity: 0 !important;
}

.docs-side-panel-enter-active {
    transform: translate(0) !important;
    opacity: 1 !important;
    transition: transform 500ms, opacity 500ms !important;
}

.docs-side-panel-exit {
    transform: translateY(0);
    opacity: 1;
}

.docs-side-panel-exit-active {
    transform: translateX(-10%) !important;
    opacity: 0 !important;
    transition: transform 500ms, opacity 500ms !important;
}

.menuOption1 {
    position: absolute;
    top: 0px;
    transition: top 0.75s ease !important; /* Add transition for smooth movement */
}

.menuOption2 {
    position: absolute;
    top: 40px;
    transition: top 0.75s ease !important; /* Add transition for smooth movement */
}

.menuOption3 {
    position: absolute;
    top: 80px;
    transition: top 0.75s ease !important; /* Add transition for smooth movement */
}

.menuOption4 {
    position: absolute;
    top: 120px;
    transition: top 0.75s ease !important; /* Add transition for smooth movement */
}

    //! - - CLOSE SELECTED MENU BUTTON - - !//

.closeSelectedMenuOption {
    float: right;
    margin-top: 6.5%;
    margin-right: 6.25%;
}

.closeSelectedMenuOption span {
    border-radius: 50%;
    padding-left: 40%;
    padding-right: 40%;
    padding-top: 0px;
    padding-bottom: 0px;
}


.closeSelectedMenuOption span:hover {
    background-color: #eaeaea;
    cursor: pointer;
}

.closeSelectedMenuOption img {
    height: 10px;
    width: 10px;
    margin-bottom: 10%;
}

        //? - - - - - END OF SIDEBAR CSS - - - - - //?


        
        //! - - - - - - DEMO DOCS CONTAINER - - - - - - !//

.demo-docs-container {
    text-align: left;
    margin-left: 1%;
    margin-right: 1%;
}

    // - - DEMO DOCS HEADER - - //

.demo-docs-section {
    width: 63%;
    float: right;
    border-bottom: 1.5px solid #ccc;
    padding-bottom: 5%;
    margin-bottom: 1%;
}

.demo-docs-section h1 {
    font-family: poppins;
    margin-bottom: 2%;
    font-size: 120%;

}

.demo-docs-section-sidebar-h1 {
    font-size: 104% !important;
}

.demo-docs-section h3 {
    font-size: 95%;
    font-family: poppins;
}

.demo-docs-section-sidebar-h3 {
    font-size: 90% !important;
}

.demo-docs-section p {
    font-family: poppins;
    font-size: 90%;
}

.demo-docs-section-sidebar-p {
    font-size: 80% !important;
}

.demo-docs-section li {
    font-family: poppins;
    font-size: 90%;
}

.demo-docs-section-sidebar-p {
    font-size: 80% !important;
}



    // - DEMO DOCS HYPERLINK (EXTERNAL LINK) - //

    // # LINK

.demo-docs-hyperlink {
    color: #6363f1;
    padding-top: 0.5%;
}

.demo-docs-hyperlink:hover {
    text-decoration: underline;
    // color: #6363f1;
    cursor: pointer;
}

    // # ICON

.demo-docs-hyperlink-icon {
    all: unset !important;
}

.demo-docs-hyperlink-icon img {
    width: 2.75%;
    margin-left: 0.5%;
    vertical-align: middle !important;
    padding-bottom: 0.5% !important;
    cursor: pointer !important;
    margin-top: 0px !important;
}

.demo-docs-hyperlink-icon-sidebar-img {
    width: 4% !important;
    margin-left: 1.5% !important;
}


    // - DEMO DOCS CODE CONTAINER - //

.demo-docs-code-container {
    height: auto;
    width: 92.5%;
    border: 1px solid #ccc;
    border-radius: 12px;
    margin-top: 4%;
}

    // # HEADER

.demo-docs-code-container-header {
    background-color: #f8f8fb;
    height: 47.5%;
    border-bottom: 1px solid #ccc;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    margin-bottom: 0%;
}

.demo-docs-code-container-header h5 {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-left: 2%;
    font-size: 100%;
}

.demo-docs-code-container-sidebar-h5 {
    padding-top: 3% !important;
    padding-bottom: 3% !important;
    font-size: 75% !important;
}

    // # HEADER (BUTTON CONTAINER)

.demo-docs-code-container-header span {
    margin-top: 0.75%;
    height: 60%;
    width: 5%;
    margin-right: 1.5%;
    border-radius: 50%;
    border: 2px solid transparent; 
    cursor: pointer;
    padding-left: 0.25%;
    padding-right: 0.25%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}

.demo-docs-code-container-sidebar-span {
    width: 5% !important;
    margin-top: 1.5% !important;
    padding-left: 0.75% !important;
    padding-right: 0.75% !important;
    padding-top: 0.25% !important;
    padding-bottom: 0.25% !important;
    margin-right: 2.5% !important;
}

    // # HEADER (COPY ICON)
    
.demo-docs-code-container-header img {
    margin-top: 10%;
    margin-left: 17.5%;
    width: 65.5%;
}

.demo-docs-code-container-header-sidebar-img {
    margin-top: 5% !important;
    margin-left: 10% !important;
    width: 85.5% !important;
}

    // # BODY 

.demo-docs-code-container-body p {
    font-family: inconsolata;
    margin-left: 2%;
    margin-top: 2%;
    padding-top: 1%;
    padding-bottom: 2.5%;
    margin-bottom: 0px;
}

.demo-docs-code-container-body-sidebar-p {
    padding-top: 1.5% !important;
    padding-bottom: 3.5% !important;
}

    // - DEMO DOCS SEPARATOR - //

.demo-docs-separator {
    // margin-top: 10%;
    // margin-bottom: 6.75%;
    // width: 80%;
    // border-bottom: 2px solid #ccc;
}

.demo-docs-separator-sidebar {

}

    // - DEMO DOCS LANGUAGES - //

.demo-docs-languages {
    margin-bottom: 3%;
    margin-top: 1%;
}

.demo-docs-languages:after {
    content: "";
    display: table;
    clear: both;
}

.demo-docs-language {
    float: left;
    text-align: left;
    width: 25%;
}

    // # BUTTON

.demo-docs-language button {
    width: 90%;
    margin-right: 5%;
    padding: 3%;
    border-radius: 7px;
    background-color: white;
    cursor: pointer;
}

.demo-docs-language-container:after {
    content: "";
    display: table;
    clear: both;
}

.demo-docs-language-icon {
    float: left;
    text-align: center;
    width: 35%;
}

.demo-docs-language-text {
    float: left;
    text-align: left;
    width: 65%;
}
    // # ICON

.demo-docs-language-icon img {
   width: 70%;
   margin-top: 10%;
}

    // # TEXT (LANGUAGE)

.demo-docs-language-text p {
    font-family: poppins;
    padding-bottom: 7.5%;
    font-size: 100%;
    margin-bottom: 0px;
    margin-top: 10%;
}

.demo-docs-langauge-text-sidebar-p {
    font-size: 75% !important;
}

    // - CONTACT US (Client Library) - //

.client-library-contact-us:hover {
    text-decoration: underline;
    cursor: pointer;
}

    //! - - BULLET POINTS - - !//



    //! - - Loading Screen - - !//

.loading-container {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 47.5%; /* Reset default margin */
}

.loading-sidebar-container {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50%; /* Reset default margin */
    margin-left: 40%;
}

    //! - - Testing the API - - !//
    

.testing-the-api-info-box {
    background-color: #ededf1;
    padding: 1%;
    border-radius: 8px;
}

.testing-the-api-info-box:after {
    content: "";
    display: table;
    clear: both;
}

.api-info-box-img {
    float: left;
    text-align: center;
    width: 10%;
}

.api-info-box-text {
    float: left;
    text-align: left;
    width: 90%;
}

.testing-the-api-info-box img {
    width: 55.5%;
    margin-left: 0.5%;
    vertical-align: middle;
    padding-bottom: 0.5%;
    margin-top: 7.5%;
    cursor: pointer;
}

.testing-the-api-info-box p {
    color: #656971;
    font-size: 64.5%;
    margin-top: 1.4% !important;
}

.testing-the-api-info-box label {
    color: #2c333b;
    text-decoration: underline;
    cursor: pointer;
}

    //! - - API Keys - - !//

.api-keys span {
    background-color: #ededf1;
    color: #2c333b;
    font-family: inconsolata;
    padding: 0.4%;
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 5px;
    font-weight: normal;
}

    //! - - Errors - - !//

.errors {
    border-bottom: 1px solid #ccc;
    padding-bottom: 2%;
}

.errors-cell {
    border-top: 1px solid #ccc;
    padding: 2%;
    margin-bottom: 0.5%;
}

.errors-cell-sidebar {
    border-top: 1px solid #ccc;
    padding: 3% !important;
    margin-top: 2% !important;
}

.errors-cell span {
    padding: 1%;
    font-size: 70%;
    font-weight: bold;
    border-radius: 30px;
    font-family: rubik;
    margin-right: 5%;
}

.errors-cell-sidebar-span {
    font-weight: bold;
    font-family: rubik;
    margin-right: 5%;
    border-radius: 30px;
    padding: 1.5% !important;
    font-size: 75% !important;
}


.errors-cell label {
    font-family: poppins;
    font-size: 60%;
    margin-top: 5%;
    color: #5e626a;
}

.inline-errors-cell-span {
    padding: 0px !important;
    font-size: 100%  !important;
    font-weight: normal  !important;
    border-radius: 0px  !important;
    font-family: poppins  !important;
    margin-right: 0px  !important;
    color: #6363f1;
}

.inline-errors-cell-span:hover {
    text-decoration: underline;
    cursor: pointer;
}   


    //! - - Labeled Header && Subheader - - !//

.labeled-header {
    margin-top: 6.5%;
}

.labeled-header:after {
    content: "";
    display: table;
    clear: both;
}

.label-tag {
    float: left;
    text-align: center;
    width: 7.5%;
    padding-top: 0.75%;
}

.label-desc {
    float: left;
    text-align: left;
    width: 92.5%;
}

    // # LABELED TAG

.label-tag span {
    background-color: #e6e6eb;
    padding: 13%;
    padding-right: 27%;
    padding-left: 27%;
    border-radius: 45%;
    font-weight: bold;
}


.label-tag-sidebar-span {
    padding-right: 37% !important; 
    padding-left: 37% !important;
}

    // # LABELED DESC

.label-desc h1 {
    margin-top: 0px !important;
    margin-left: 3.5%;
}

    //! - - Image in docs - - !//

.enlargable-image-container {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    border-radius: 8px;
    border: 15px solid #e6e6eb;
}
    
.enlargable-image-container.enlarged {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50vw; /* Set width to 75% of viewport width */
    height: auto; /* Maintain aspect ratio */
    transform: translate(-50%, -50%) scale(1.07);
    z-index: 5;
    border-radius: 8px;
    border: 30px solid #e6e6eb;
}
    
.image {
    max-width: 100%;
    max-height: 100%;
}

    //! - - Two tab selection - - !//

.two-tab-selection {
    border-bottom: 1px solid #ccc;
    margin-bottom: 3%;
}

.two-tab-selection:after { 
    content: "";
    display: table;
    clear: both;
}

.two-tab-selection-tab {
    float: left;
    text-align: center;
    width: 30%;
}

.two-tab-selection-sidebar-tab {
    float: left;
    text-align: center;
    width: 30%;
}

    // # BUTTONS

.two-tab-selection-tab button {
    background-color: transparent;
    margin-bottom: 5%;
    border-radius: 7px;
    border: 1px solid transparent;
    padding: 3%;
    font-size: 70%;
    font-family: poppins;
    padding-left: 10%;
    padding-right: 10%;
    cursor: pointer;
    color: #5e626a;
}

.two-tab-selection-sidebar-tab button {
    background-color: transparent;
    margin-bottom: 5%;
    border-radius: 7px;
    border: 1px solid transparent;
    padding: 3%;
    font-size: 55%;
    font-family: poppins;
    padding-left: 10%;
    padding-right: 10%;
    cursor: pointer;
    color: #5e626a;
}

    //! - - Next Section of Docs Container - - !//

.demo-next-section-container {
    margin-top: 5%;
    margin-bottom: 1%;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.03), 0 6px 20px 0 rgba(0, 0, 0, 0.03);
    border: 1px solid #ccc;
    cursor: pointer;
}

.demo-next-section-container:hover {
    border: 1px solid #999999;
}

.demo-next-section-container:after {
    content: "";
    clear: both;
    display: table;
}

.demo-next-section-container-left {
    float: left;
    text-align: left;
    width: 75%;
}

.demo-next-section-container-right {
    float: left;
    text-align: center;
    width: 20%;
    border-left: 1px solid black;
    margin-top: 4%;
    margin-bottom: 4%;
}

.demo-next-section-container-sidebar-right {
    float: left;
    text-align: center;
    width: 20%;
    border-left: 1px solid black;
    margin-top: 4%;
    margin-bottom: 4%;
}

    // # LEFT CONTAINER HEADER & TEXT

.demo-next-section-container-left h4 {
    margin-bottom: 0px;
    margin-left: 2.5%;
}

.demo-next-section-container-left-sidebar-h4 {
    font-size: 75% !important;
}

.demo-next-section-container-left-sidebar-p {
    font-size: 30% !important;
}

.demo-next-section-container-left p { 
    margin-top: 1%;
    margin-left: 2.5%;
    font-size: 73%;
    margin-right: 2.5%;
}


    // # RIGHT CONTAINER TEXT


.demo-next-section-container-right p {
    padding-bottom: 3%;
    margin-left: 8%;
}

.demo-next-section-container-right-sidebar-p {
    font-size: 70% !important;
    margin-left: 6% !important;
}

.demo-next-section-container-right-sidebar-img {
    // width: 200% !important !important;
}

    //! - - Example Apps Container - - !//

.example-apps-container:after {
    content: "";
    clear: both;
    display: table;
}

.example-app-container {
    float: left;
    text-align: left;
    width: 30%;
    height: 14vh;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-right: 2%;
    border-bottom: 4px solid #6363f1;
}

.example-app-container:hover {
    cursor: pointer;
    border: 1px solid #999999;
    border-bottom: 4px solid #999999;
}

    // # IMG

.example-app-container img {
    width: 15%;
    margin-top: 8%;
    margin-left: 5%;
}

    // # LANGUAGE (SUBHEADER)

.example-app-container p {
    margin-top: 15%;
    font-size: 60%;
    color: #5e626a;
    margin-left: 5%;
    margin-bottom: 0px;
}
    // # APP NAME (HEADER)

.example-app-container h5 {
    font-size: 60%;
    margin-left: 5%;
    margin-top: 0px;
    margin-bottom: 8%;
    margin-right: 5%;
}


    //! - - Migrations Container - - !//


.migrations-container:after {
    content: "";
    clear: both;
    display: table;
}

.migration-container {
    height: 20.5vh;
    float: left;
    text-align: center;
    width: 40%;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-right: 5%;
    margin-bottom: 3.5%;
}

.migration-sidebar-container {
    height: 17.5vh;
    float: left;
    text-align: center;
    width: 46%;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-right: 3%;
    margin-bottom: 3.5%;
}

.migration-container:hover {
    cursor: pointer;
    border: 1px solid #999999;
}

.migration-sidebar-container:hover {
    cursor: pointer;
    border: 1px solid #999999;
 }

    // # IMG

.migration-container img {
    width: 100%;
    border-top-right-radius: 9px;
    border-top-left-radius: 9px;
}

.migration-sidebar-container img {
    width: 100%;
    border-top-right-radius: 9px;
    border-top-left-radius: 9px;
}

    // # HEADER

.migration-container h5 {
    margin-top: 1%;
    margin-bottom: 1%;
    margin-left: 1.5%;
    text-align: left;
}

.migration-sidebar-container h5 {
    margin-top: 1%;
    margin-bottom: 1%;
    margin-left: 1.5%;
    text-align: left;
    font-size: 80%;
}

.migration-container-see-all-h5 {
    text-align: center !important;
    margin-top: 5% !important;
}

    // # TEXT

.migration-container p {
    margin-top: 0px;
    margin-left: 1.5%;
    margin-right: 2.5%;
    font-size: 65%;
    text-align: left;
    color: #5e626a;
}


.migration-sidebar-container p {
    margin-top: 0px;
    margin-left: 1.5%;
    margin-right: 2.5%;
    font-size: 57.5%;
    text-align: left;
}

.migration-container-see-all-p {
    text-align: center !important;
    margin-top: 2% !important;
}

    // # BUTTON IMG

.migration-container button {
    height: 27%;
    width: 24%;
    background-color: #ccccc;
    margin-top: 15%;
    border-radius: 9px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    cursor: pointer;
}

.migration-sidebar-container button {
    height: 27%;
    width: 30%;
    background-color: #ccccc;
    margin-top: 20.25%;
    border-radius: 9px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    cursor: pointer;
}

.migration-container-see-all-img {
    width: 70% !important;
}

    //! - - SSO Create Connection Manually Btns - - !//

.sso-manual-btns-container:after {
    content: "";
    clear: both;
    display: table;
}

.sso-manual-btn-container {
    height: 10.5vh;
    float: left;
    text-align: center;
    width: 46%;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-right: 3%;
    margin-bottom: 3.5%;
}

.sso-manual-btn-container:hover {
    cursor: pointer;
    border: 1px solid #999999;
}

.sso-manual-btn-container:after {
    content: "";
    clear: both;
    display: table;
}

.sso-manual-sidebar-btn-container {
    height: 8vh;
    float: left;
    text-align: center;
    width: 46%;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-right: 3%;
    margin-bottom: 3.5%;
}

.sso-manual-sidebar-btn-container:hover {
    cursor: pointer;
    border: 1px solid #999999;
}

.sso-manual-sidebar-btn-container:after {
    content: "";
    clear: both;
    display: table;
}

.sso-manual-btn-text {
    float: left;
    text-align: left;
    width: 75%;
}

.sso-manual-btn-sidebar-text {
    float: left;
    text-align: left;
    width: 75%;
}

.sso-manual-btn-logo {
    float: left;
    text-align: center;
    width: 25%;
    // border-left: 1px solid black;
}

.sso-manual-btn-sidebar-logo {
    float: left;
    text-align: center;
    width: 25%;
}

    // - SSO MANUAL BTN ELEMENTS - //

    // # TITLE (of btn)

.sso-manual-btn-text h4 {
    text-align: left;
    margin-top: 10%;
    margin-left: 5.5%;
    margin-bottom: 1%;
    font-size: 85%;
}

.sso-manual-btn-sidebar-text h4 {
    text-align: left;
    margin-top: 5%;
    margin-left: 5.5%;
    margin-bottom: 1%;
    font-size: 50%;
}

    // # SUBTEXT (of btn)

.sso-manual-btn-text p {
    text-align: left;
    margin-left: 5.5%;
    margin-top: 1%;
    font-size: 70%;
}

.sso-manual-btn-sidebar-text p {
    text-align: left;
    margin-left: 5.5%;
    margin-top: 1%;
    font-size: 20% !important;
    margin-right: 2%;
}

    // # BUTTON & LOGO IMG (of btn)


.sso-manual-btn-logo button {
    width: 75%;
    margin-right: 15%;
    margin-top: 35%;
    border-radius: 9px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    cursor: pointer;
    background-color: #ccccc;
}


.sso-manual-btn-sidebar-logo button {
    width: 80%;
    margin-right: 15%;
    margin-top: 35%;
    border-radius: 9px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    cursor: pointer;
    background-color: #ccccc;
}


.sso-manual-btn-logo img {
    width: 80%;
    padding-top: 25%;
    padding-bottom: 15%;
}


.sso-manual-btn-sidebar-logo img {
    width: 90%;
    padding-top: 35%;
    padding-bottom: 25%;
}


    //! - - Simple Table - - !//

.simple-table {
    border-top: 1px solid #ccc;
}

.simple-table:after {
    content: "";
    display: table;
    clear: both;
}

.simple-sidebar-table {
    border-top: 1px solid #ccc;
}

.simple-sidebar-table:after {
    content: "";
    display: table;
    clear: both;
}

.simple-table-left {
    float: left;
    text-align: left;
    width: 20%;
    padding-top: 1.5%;
}

.simple-table-sidebar-left {
    float: left;
    text-align: left;
    width: 25%; 
    padding-top: 2.5%;
}

.simple-table-right {
    float: left;
    text-align: left;
    width: 80%;
    padding-top: 1.5%;
}

.simple-table-sidebar-right {
    float: left;
    text-align: left;
    width: 75%; 
    padding-top: 2.5%;
}

    // # LEFT TEXT

.simple-table-left h5 {
    margin-top: 5%;
    font-size: 67.5%;
    color: #2e2eff;
}

.simple-table-left h5:hover {
    text-decoration: underline;
    cursor: pointer;
}

.simple-table-sidebar-left h5 {
    margin-top: 5%;
    font-size: 67.5%;
    color: #2e2eff;
}

.simple-table-sidebar-left h5:hover {
    text-decoration: underline;
    cursor: pointer;
}

    // # RIGHT TEXT

.simple-table-right p {
    margin-top: 0.75%;
    font-size: 65%;
    margin-right: 5%;
    margin-left: 1.5%;
}

.simple-table-sidebar-right p {
    margin-top: 1%;
    font-size: 65%;
    margin-right: 5%;
    margin-left: 0.5%;
}

//! - - Sign In UX - - !//

.sign-in-ux {
    margin-top: 5%;
    margin: auto; 
    padding: 3%;
    width: 57.5%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 10px;
}

.sign-in-sidebar-ux {
    margin-top: 5%;
    margin: auto; 
    padding: 3%;
    width: 90.5%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5%;
}

.sign-in-ux h1 {
    margin-top: 2%;
}

.sign-in-ux p {
    margin-bottom: 2%;
    font-size: 80%;
}

.sign-in-ux-err { 
    margin-top: 1%;
    color: #ca244d;
}

.sign-in-ux input {
    width: 91%;
    padding: 4%;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
}

.sign-in-ux-input-confirmed {
    width: 91%;
    padding: 4%;
    border-radius: 8px;
    border: 2px solid #ccc !important;
    outline: none;
    pointer-events: none;
    background-color: #EEEEEE !important;
    -webkit-user-select: none !important; /* Safari */
    -moz-user-select: none !important;    /* Firefox */
    -ms-user-select: none !important;     /* Internet Explorer/Edge */
    user-select: none !important;         /* Non-prefixed version, supported by modern browsers */
}

.sign-in-ux-input-confirmed:focus {
    // border: 2px solid #ccc !important;
    // // outline: none;
    // background-color: #E4E4E4 !important;
}

.sign-in-ux-fail {
    background-color: #feeaed;
    border: 1px solid  #e592a3 !important;
}

.sign-in-ux-fail:focus {
    border: 2px solid #e592a3 !important;
    border-color: #e592a3 !important;
    outline: none;
}

.sign-in-sidebar-ux input {
    width: 91%;
    padding: 4%;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
}

.sign-in-ux input:focus {
    border: 2px solid #9c9ef0;
    border-color: #9c9ef0;
    outline: none;
}

.sign-in-sidebar-ux input:focus {
    border: 2px solid #9c9ef0;
    border-color: #9c9ef0;
    outline: none;
}

.sign-in-ux button {
    margin-top: 5%;
    width: 100%;
    padding: 3%;
    background-color: #6363f1;
    font-family: poppins;
    color: white;
    font-weight: bold;
    border-radius: 7px;
    border: 1px solid #6363f1;
    margin-bottom: 5%;
    cursor: pointer;
}

.sign-in-ux-btn-2 {
    margin-top: 5% !important;
    width: 100%;
    padding: 3%;
    background-color: white !important;
    font-family: poppins;
    color: #000 !important;
    font-weight: bold;
    border-radius: 7px;
    border: 1px solid #ccc !important;
    margin-bottom: 5%;
}

.sign-in-ux-success-btn {
    margin-top: 5% !important;
    width: 100%;
    padding: 3%;
    background-color: #cccc !important;
    font-family: poppins;
    color: #5e626a !important;
    font-weight: bold;
    border-radius: 7px;
    border: 1px solid #cccc !important;
    margin-bottom: 5%;
    cursor: pointer;
}

.sign-in-ux-btn-2:hover {
    border: 1px solid #999999 !important;
}

.sign-in-sidebar-ux button {
    margin-top: 7.5%;
    width: 100%;
    padding: 3%;
    background-color: #6363f1;
    font-family: poppins;
    color: white;
    font-weight: bold;
    border-radius: 7px;
    border: 1px solid #6363f1;
    margin-bottom: 5%;
}

.separator-container {
    display: flex;
    align-items: center;
    text-align: center;
  }
  
  .line {
    flex-grow: 1;
    border-bottom: 1px solid #ccc;
    margin: 0 0px;
  }
  
  .or-text {
    margin: 0;
    padding: 0 10px;
    white-space: nowrap;
  }

    //! - - Complex table - - !//


  // - COMPLEX TABLE HEADER - //

.complex-table-header {
    background-color: #f8f8fb;
    padding-top: 2.5%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 0.75px solid #cccc;
}

.complex-table-header:after {
    content: "";
    clear: both;
    display: table;
}

.complex-table-sidebar-header:after {
    content: "";
    clear: both;
    display: table;
}

.c-table-header1 {
    float: left;
    width: 20%;
    text-align: left;
}

.c-table-header2 {
    float: left;
    width: 35%;
    text-align: left;
}

.c-table-header3 {
    float: left;
    width: 45%;
    text-align: left;
}

    // # TABLE HEADERS

.complex-table-header h5 {
    margin-left: 7.5%;
    margin-bottom: 6%;
    margin-top: 0px;
    font-size: 75%;
}

    // - COMPLEX TABLE ROW - //

.complex-table {
    border-left: 0.75px solid #ccc;
    border-right: 0.75px solid #ccc;
    border-bottom: 0.75px solid #ccc;
}

.complex-table:after {
    content: "";
    clear: both;
    display: table;
}

.complex-table-sidebar-cell:after {
    content: "";
    clear: both;
    display: table;
}

.c-table-cell1 {
    float: left;
    width: 20%;
    text-align: left;
}

.c-table-cell2 {
    float: left;
    width: 35%;
    text-align: left;
}

.c-table-cell3 {
    float: left;
    width: 45%;
    text-align: left;
}

.complex-table p { 
    font-size: 65%;
    margin-left: 7.5%;
    margin-right: 5%;

}

    //! - - CHECKLIST - - !//

.checklist:after {
    content: "";
    clear: both;
    display: table;
}

.checklist-icon {
    float: left;
    text-align: left;
    width: 6%;
}

.checklist-text {
    float: left;
    text-align: left;
    width: 94%;
}

    // # CHECKLIST ICON

.checklist-icon button {
    margin-top: 7%;
    background-color: white;
    height: 15px;
    width: 15px;
    border: 0.5px solid #5e626a;
    padding: 0px;
    border-radius: 3px;
    box-shadow: inset 0 4px 6px -4px rgba(0, 0, 0, 0.2);
}

.checklist-icon img {
    width: 75%;
    margin-bottom: 2%;
}

    // # CHECKLIST TEXT

.checklist p {
    margin-top: 0px;
}

    //! - - Do's and Don'ts headers - - !//

.dos-donts:after {
    content: "";
    clear: both;
    display: table;
}

.dos-donts-icon {
    float: left;
    text-align: left;
    width: 6%;
}

.dos-donts-text {
    float: left;
    text-align: left;
    width: 94%;
}

    // # CHECKLIST ICON

.dos-donts-icon button {
    margin-top: 4%;
    background-color: white;
    height: 18px;
    width: 18px;
    padding: 0px;
    border-radius: 10px;
}

.dos-donts-icon img {
    width: 95%;
    margin-top: 5%;
}

    // # CHECKLIST TEXT

.dos-donts p {
    margin-top: 0px;
}


    //! - - Hidden dropdown button - - !// 

.hidden-dropdown-btn {
    border-radius: 5px;
}

.hidden-dropdown-btn:hover {
    background-color: #eaeaea;
    cursor: pointer;
}

.hidden-dropdown-btn:after {
    content: "";
    clear: both;
    display: table;
}

.hdb-icon {
    float: left;
    text-align: center;
    width: 8%;
}

.hdb-text {
    float: left;
    text-align: left;
    width: 92%;
}

    // # ICON

.hdb-icon img {
    width: 40%;
    margin-top: 17%;
}

.hdb-icon-img {
    transition: transform 0.1s ease; /* Add transition for transform property */
}

.hdb-icon-img-rotated {
    transform: rotate(90deg); /* Rotate the arrow 180 degrees */
}

    // # TEXT

.hdb-text p {
    margin-top: 1%;
    margin-bottom: 1%;
}

//! - - Complex Sliding table - - !//


// - COMPLEX TABLE HEADER - //


.complex-sliding-table-container:after {
   content: "";
   clear: both;
   display: table;
}


.complex-sliding-table-container {
   height: auto;
   border: 1px solid #ccc;
   border-radius: 10px;
}


.complex-sliding-table-left {
   height: 100%;
   width: 34%;
   float: left;
   text-align: left;
   border-right: 1px solid #ccc;
}


.complex-sliding-table-right {
   height: 100%;
   width: 65%;
   float: left;
   text-align: left;
   overflow-x: auto;
   overflow-y: hidden; /* Prevent vertical scroll */
   display: flex;
}

.complex-sliding-table-left-cell {
   border-bottom: 1px solid #ccc;
}


   // # HEADER TEXT


.complex-sliding-table-left-cell h5 {
    line-height: 1.2;
    margin-left: 4%;
    font-size: 75%;
}


.complex-sliding-table-left-cell p {
   line-height: 1.4;
   font-size: 80%;
   font-family: inconsolata;
   margin-left: 4%;
}


   // - INNER COMPLEX SLIDING TABLE - //


.inner-complex-sliding-table {
   width: 100%;
   display: flex;
   width: max-content;
}


.inner-complex-sliding-table:after {
   content: "";
   clear: both;
   display: table;
}


.icst-column {
   float: left;
   text-align: center;
   width: 6.2em;
   // border-right: 1px solid #ccc;
}


.icst-column:last-child {
   border-right: 1px solid transparent;
}


.icst-cell {
   border-bottom: 1px solid #ccc;
}


.icst-cell h5 {
   line-height: 1.2;
   font-size: 75%;
}


.icst-cell p {
   line-height: 1.2;
   font-size: 79.7%;
}


.icst-cell button {
   background-color: white;
   height: 18px;
   width: 18px;
   padding: 0px;
   border-radius: 10px;
}


.icst-cell img {
   width: 85%;
}


    //! - - Integrations Container (RESOURCES SECTION) - - !//

    // - - INTEGRATIONS CONTAINERS - - //

.integrationsContainer:after {
    content: "";
    display: table;
    clear: both;
}

.integrationsCol {
    float: left;
    text-align: left;
    width: 46%;
    border: 1px solid #ccc;
    margin-right: 3%;
    margin-bottom: 3%;
    border-radius: 8px;
}

.integrationsCol:hover {
    border: 1px solid #999999;
    cursor: pointer;
}

.integrationsCol:after {
    content: "";
    display: table;
    clear: both;
}

.integrationsText {
    float: left;
    text-align: left;
    width: 70%;
}

.integrationsLogo {
    float: left;
    text-align: center;
    width: 30%;
}

    // # TEXT

.integrationsText h3 {
    margin-top: 4%;
    margin-left: 5%;
    margin-bottom: 0px;
    font-size: 80%;
}

.integrationsText-sidebar-h3 {
    font-size: 75% !important;
}

.integrationsText p {
    margin-top: 0px;
    margin-left: 5%;
    font-size 60%;
}

.integrationsText-sidebar-p {
    font-size: 50% !important;
}

    // # LOGO
    
.integrationsLogo img {
    width: 60%;
    margin-top: 25%;
}


    //? - - - - - END OF CONTENT CSS - - - - - //?


        //! - - - - - - DEMO DOCS DOCK/SEAERCH BAR - - - - - !//

.demo-docs-search-bar {
    filter: none !important;
    float: right;
    position: sticky;
    top: 0;
    z-index: 5;
    padding: 1%;
    background-color: #f9f9fb;
    border-radius: 8px;
    border: 1px solid #ccc;
}

.demo-docs-search-bar:after {
    content: "";
    clear: both;
    display: table;
}

.demo-docs-search-bar-input {
    float: left; 
    text-align: left;
    width: 80%;
    border-right: 1px solid #ccc;
}

.demo-docs-search-bar-btns {
    float: right;
    text-align: right;
    width: 17%;
    margin-right: 2%;
}

.demo-docs-search-bar-btns:after {
    content: "";
    clear: both;
    display: table;
}

.dd-search-bar-btn {
    float: left;
    text-align: right;
    width: 33.3%;
}

    // - - DOCK SEARCH BAR - - //


    // # INPUT 

.demo-docs-search-bar-input input {
    padding: 1%;
    margin-right: 2.5%;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.demo-docs-search-bar-input input {
    outline: none;
}
    // # BUTTON

.demo-docs-search-bar-input button {
    padding: 0.75%;
    padding-left: 2%;
    padding-right: 2%;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: poppins;
    font-size: 70%;
    cursor: pointer;
    background-color: #f9f9f9;
}

.demo-docs-search-bar-input button:hover {
    border: 1px solid #999999;
}

    // - - DOCK BUTTONS - - //

.demo-docs-search-bar-btns img {
    cursor: pointer;
}


/* CSS Transition Definitions */
.mini-search-bar-enter {
    transform: translateX(20%) !important;
    opacity: 0 !important;
}

.mini-search-bar-enter-active {
    transform: translate(0) !important;
    opacity: 1 !important;
    transition: transform 500ms, opacity 500ms !important;
}

.mini-search-bar-exit {
    transform: translateY(0);
    opacity: 1;
}

.mini-search-bar-exit-active {
    transform: translateX(5%) !important;
    opacity: 0 !important;
    transition: transform 500ms, opacity 500ms !important;
}


/* CSS Transition Definitions */
.mini-search-bar2-enter {
    transform: translateY(20%) !important;
    opacity: 0 !important;
}

.mini-search-bar2-enter-active {
    transform: translate(0) !important;
    opacity: 1 !important;
    transition: transform 500ms, opacity 500ms !important;
}

.mini-search-bar2-exit {
    transform: translate(0);
    opacity: 1;
}

.mini-search-bar2-exit-active {
    transform: translateY(5%) !important;
    opacity: 0 !important;
    transition: transform 500ms, opacity 500ms !important;
}

    //* - - FILTER BUTTONS FOR SEARCH - - *//


.filterSearchBtns {
    float: right;
    right: 3.75%;
    position: fixed;
    margin-top: 0px;
    padding: 0.2%;
    padding-left: 0.5%;
    padding-right: 0.5%;
    background-color: #f9f9fb;
    border-radius: 20px;
    border: 1px solid #6363f1;
    font-family: poppins;
    font-size: 75%;
}

.filterSearchBtns:hover {
    border: 1px solid #999999;
    cursor: pointer;
}

.filterSearchBtns-sidebar {
    float: right;
    right: 3.5%;
    position: fixed;
    margin-top: 0px;
    padding: 0.2%;
    padding-left: 0.5%;
    padding-right: 0.5%;
    background-color: #f9f9fb;
    border-radius: 20px;
    border: 1px solid #6363f1;
    font-family: poppins;
    font-size: 65%;
}

.filterSearchBtns-sidebar:hover {
    border: 1px solid #999999;
    cursor: pointer;
}

.filterSearchOptions { 
    float: right;
    right: 3.75%;
    position: fixed;
    margin-top: 2.25%;
    padding: 0.2%;
    padding-left: 0.5%;
    padding-right: 0.5%;
    background-color: #f9f9fb;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-weight: bold;
    font-size: 72.5%;
}
.filterSearchOption {
    text-align: right;
    // font-size: 93%;
}
.filterSearchOption label:hover {
    color: #6363f1;
    text-decoration: underline;
    cursor: pointer;
 }

        //? - - - - END OF DOCK BAR CSS - - - - ?//

        //! - - - - - SEARCH RESULTS - - - - - - - 1//

    // - - SEARCH RESULTS - - //

.searchResults {
    overflow-y: auto;
    width: 95.5%;
    position: relative;
    background-color: white;
    height: 40vh;
    border: 1px solid #cccccc;
    border-radius: 7px;
    // border-bottom-right-radius: 7px;
    padding: 2%;
    margin-top: 6%;
}

    // - SEARCH RESULT CELL - //

.searchResultCell {
    text-align: left;
    padding-left: 2.5%;
    padding-right: 2.5%;
    margin-top: 2%;
    padding-bottom: 0px;
    border-radius: 5px;
    cursor: pointer;
}

.searchResultCell p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: poppins;
    // margin-bottom: 
}

.searchResultOption {
    padding-top: 1%;
    margin-bottom: 0px;
    font-size: 80.5%;
    overflow: hidden;          /* Hide the overflowing text */
    display: -webkit-box;      /* Use the flexible box layout */
    -webkit-box-orient: vertical; /* Set the box orientation to vertical */
    -webkit-line-clamp: 2;     /* Number of lines to show before truncating */
    line-clamp: 2;             /* Standard property for other browsers (future-proof) */
    // line-height: 1.5em; 
}

.searchResultCategory {
    font-size: 72%;
    padding-bottom: 1%;
    cursor: pointer;
}

    // - SEARCH RESULTS (CODE SNIPPETS)  - //

.codeSnippetResult {
    text-align: left;
    padding-left: 2.5%;
    padding-right: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 2%;
    border-radius: 5px;
    cursor: pointer;
}

.codeSnippetResult:after {
    content: "";
    display: table;
    clear: both;
}

.codeSnippetCommand {
    float: left;
    text-align: left;
    width: 12%;
}

.codeSnippetLine {
    float: left;
    text-align: left;
    width: 88%;
}

.codeSnippetLineNoCommand {
    // width: 100%;
    
}

    // # COMMAND (GET/POST/DELETE) 

.codeSnippetCommand span {
    font-size: 30%;
    padding: 12%;
    // margin-top: 50%;
    border-radius: 7px;
    font-weight: bold;
}

    // # CODE LINE TEXT

.codeSnippetLine p {
    margin-top: 0px;
    // margin-left: ;
    font-family: poppins;
    // margin-bottom: 7%;
    font-size: 72.5%;
}

.codeSnippetLineNoCommand p {
    text-align: left;
    margin-top: 0px;
    font-family: poppins;
    font-size: 72.5%;
    white-space: nowrap; /* Prevent text from wrapping */
    overflow: hidden; /* Hide overflowing text */
    text-overflow: ellipsis;
}

.searchResultCell:hover,
.codeSnippetResult:hover {
  background-color: #F0F1FF;
  color: #1C1C8E;
}

        //! - - - - - - DOCS HOME CONTAINER - - - - - - !//


.docs-home-container {
    text-align: left;
}

.docs-home-container h1 {
    margin-top: 10%;
    font-family: Poppins;
    font-size: 170%;
    font-weight: bold;
}

`

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    search(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    }

    startsWith(prefix) {
        let current = this.root;
        for (let char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

export default class DocsNavigationMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {

            //* - - SEARCH BAR - - *//

            showLargeSearchBar: true,
            showMiniSearchBar: false,
            menuDocsHovered: false,
            externalDocsHovered: false,
            exitDocsHovered: false,
            dockSearchBarWidth: "auto",
            dockMenuBtnsPaddingTop: "0.7%",
            dockSearchBarInputWidth: "78%",
            dockMenuBtnWidth: "43%",
            dockExternalBtnWidth: "34.5%",
            dockExitBtnWidth: "45.5%",
            miniSearchBarTransitioning: false,

            //* - SEARCH RESULTS COMPONENTS - *//

            searchedData: "",
            searchCloseBtn: false,
            filteredOptions: [], // Use imported options
            isSearchLoading: false,
            resultsFound: false,
            hoveredResultId: null,
            commandBgColor: "transparent",
            commandTxtColor: "transparent",
            searchBarInFocus: false,

            //* # SEARCH FILTER COMPONENTS

            searchFilterTitle: "🔎",
            searchFilterSelected: "",
            currentSectionSearching: AllDocsFullSearch,

            //* - - SIDEBAR - - *//

            showDocsMenu: false,
            sidePaneWidth: "0%", //* - - Goes to 35%
            menuSubsections: true,
            menuOption1: false,
            menuOption2: false,
            menuOption3: false,
            menuOption4: false,
            mOption1Gap: "0px",
            mOption2Gap: "40px",
            mOption3Gap: "80px",
            mOption4Gap: "120px",
            prevSelectedOption: "",
            transitioningMenu: false,

            userManagementDropdown: false,
            standaloneAPIsDropdown: false,
            eventsAndWebhooksDropdown: false,
            resourcesDropdown: false,
            highlightedNode: false,
            
            indexReselecting: 0,
            aIndices: [],

            //* - - TOGGLE ADJUSTABLE DIMENSIONS - - *//

            sidebarMenuClicked: false,

            //* - - DOCUMENTATION PAGES - - *//

            showDocsHome: true,
            showDocsLoadingScreen: false,
            showUserManagementDoc: false,
            showStandAloneApis: false,
            showAPIReference: false ,
            showEventsWebhooks: false,
            showResources: false,
            currentPage: "",
            currentSection: "",
            searchingSameSection: false,

            //* - - DOCS SEARCH RESULTS PROPS - - *//

            usrMgmtScrollID: "",
            standaloneApisScrollID: "",
            eventsWebhooksScrollID: "",
            resourcesScrollID: "",

            menuOption1SearchCategory: "",
            menuOption1SearchTermObject: null,
            menuOption2SearchCategory: "",
            menuOption2SearchTermObject: null,
            menuOption3SearchCategory: "",
            menuOption3SearchTermObject: null,
            menuOption4SearchCategory: "",
            menuOption4SearchTermObject: null,

        }

            //* - TRIE NODE (for search functionality) - *//

        this.trie = new Trie(); // Initialize the trie

            //* - MENU OPTIONS REFS - *//

        this.menuOption1Ref = React.createRef();
        this.menuOption2Ref = React.createRef();
        this.menuOption3Ref = React.createRef();
        this.menuOption4Ref = React.createRef();

    }

    componentDidMount = () => {
        this.setState({
            searchFilterSelected: "All docs"
        })
    }

        //* - - SIDEBAR FUNCS - - *//


    menuOptionClicked = (option) => {
        new Promise((resolve) => {
            const optionHomepages = [
                {id: 1, name: "Quick Start"},
                {id: 2, name: "Quick Start"},
                {id: 3, name: "Event types"},
                {id: 4, name: "Overview"},
            ]
                for (let i = 1; i <= 4; i++) {
                    this.setState({
                        [`mOption${i}Gap`]: "0px"
                    })
                    if (option === i) {
                        this.setState({
                            [`menuOption${i}`]: true,
                            prevSelectedOption: `menuOption${i}`,
                            showCloseSelectedOptionBtn: true,
                            indexReselecting: 0
                        })
                        if (this.state.transitioningMenu === false) {
                            setTimeout(() => {
                                this.handleSearchWithinNested(optionHomepages[option-1].name, optionHomepages[option-1].id)
                            }, 1000)
                        }
                    }
                } 
            setTimeout(() => {
                if (option === 1) {
                    this.setState({
                        showDocsHome: false,
                        showUserManagementDoc: true,
                        userManagementDropdown: true,
                        showStandAloneApis: false,
                        standaloneAPIsDropdown: false,
                        showEventsWebhooks: false,
                        eventsAndWebhooksDropdown: false,
                        showResources: false,
                        resourcesDropdown: false,
                        currentSection: "User Management",
                    })
                    if (this.state.searchFilterTitle === "🔎") {this.setState({searchFilterTitle: "🔎 UM", searchFilterSelected: "User Management"})}
                } else if (option === 2) {
                    this.setState({
                        showDocsHome: false,
                        showStandAloneApis: true,
                        showUserManagementDoc: false,
                        showEventsWebhooks: false,
                        userManagementDropdown: false,
                        standaloneAPIsDropdown: true,
                        eventsAndWebhooksDropdown: false,
                        showResources: false,
                        resourcesDropdown: false,
                        currentSection: "Standalone APIs",
                    })
                    if (this.state.searchFilterTitle === "🔎") {this.setState({searchFilterTitle: "🔎 SA", searchFilterSelected: "Standalone APIs"})}
                } else if (option === 3) {
                    this.setState({
                        showDocsHome: false,
                        showStandAloneApis: false,
                        showUserManagementDoc: false,
                        showEventsWebhooks: true,
                        userManagementDropdown: false,
                        standaloneAPIsDropdown: false,
                        eventsAndWebhooksDropdown: true,
                        showResources: false,
                        resourcesDropdown: false,
                        currentSection: "Events and webhooks",
                    })
                    if (this.state.searchFilterTitle === "🔎") {this.setState({searchFilterTitle: "🔎 EAW", searchFilterSelected: "Events and webhooks"})}
                } else {
                    this.setState({
                        showDocsHome: false,
                        showStandAloneApis: false,
                        showUserManagementDoc: false,
                        showEventsWebhooks: false,
                        userManagementDropdown: false,
                        standaloneAPIsDropdown: false,
                        eventsAndWebhooksDropdown: false,
                        showResources: true,
                        resourcesDropdown: true,
                        currentSection: "Resources",
                    })
                    if (this.state.searchFilterTitle === "🔎") {this.setState({searchFilterTitle: "🔎 R", searchFilterSelected: "Resources"})}
                }
            }, 500)
            resolve();
        });
    }

    closeSelectedMenuOption = async () => {
        await new Promise((resolve) => {
            this.setState({
                menuOption1: false,
                menuOption2: false,
                menuOption3: false,
                menuOption4: false,
                mOption1Gap: "0px",
                mOption2Gap: "40px",
                mOption3Gap: "80px",
                mOption4Gap: "120px",
                userManagementDropdown: false,
                standaloneAPIsDropdown: false,
                eventsAndWebhooksDropdown: false,
                resourcesDropdown: false,
                showCloseSelectedOptionBtn: false,
            })
            resolve();
        });
    }

    handleMenuItemSelected = (item) => {
        const { menuOption1, menuOption2, menuOption3, menuOption4 } = this.state;
        this.setState({currentPage: item})
        if (menuOption1 === true) {
            this.setState({
                usrMgmtScrollID: item,
            })
        } else if (menuOption2 === true) {
            this.setState({
                standaloneApisScrollID: item,
            })
        } else if (menuOption3 === true) {
            this.setState({
                eventsWebhooksScrollID: item
            })
        } else if (menuOption4 === true) {
            this.setState({
                resourcesScrollID: item
            })
        }
    }

    reselectClickedOption = (index) => {
        if (this.nestedDropdownRef) {
            this.nestedDropdownRef.reselectClickedItem(index);
        }
    }

    setCurrentIndex = (index, item) => {
        this.setState({
            indexReselecting: index,
            currentPage: item
        })
    }
    

        //* - - SEARCH DOCK (NON SEARCH) FUNCS - - *//


    menuDocsEnter = () => { this.setState({menuDocsHovered: true}) }

    menuDocsLeave = () => { this.setState({menuDocsHovered: false}) }

    externalDocsEnter = () => { this.setState({ externalDocsHovered: true }) }

    externalDocsLeave = () => { this.setState({ externalDocsHovered: false }) }
    
    exitDocsEnter = () => { this.setState({exitDocsHovered: true}) }

    exitDocsLeave = () => { this.setState({exitDocsHovered: false}) }

    dockMenuBtnClicked =  ()  => {
        this.props.sidePanelOpened()
        if(this.state.showDocsMenu === false) {
            if (this.state.prevSelectedOption !== "") {
                this.handleSearchWithinNested(this.state.prevSelectedOption)
            }
            this.setState((prevState) => ({
                showDocsMenu: !prevState.showDocsMenu,
                showLargeSearchBar: !prevState.showLargeSearchBar,
                menuDocsHovered: !prevState.menuDocsHovered,
                sidebarMenuClicked: true
            }), () => {
                setTimeout(() => {
                    this.setState((prevState) => ({
                        showMiniSearchBar: !prevState.showMiniSearchBar,
                        externalDocsHovered: false,
                        exitDocsHovered: false
                    }))
                    this.reselectClickedOption(this.state.indexReselecting)
                    if (this.state.showLargeSearchFilterOptions === true) {
                        this.setState({
                            showSmallSearchFilterOptions: true
                        })
                    }
                    if (this.state.showSmallSearchFilterOptions === true || this.state.showLargeSearchFilterOptions === true) {
                        this.setState({
                            searchFilterTitle: "Close"
                        })
                    }
                }, 500)
            })
        } else {
            this.setState((prevState) => ({
                showDocsMenu: !prevState.showDocsMenu,
                showMiniSearchBar: !prevState.showMiniSearchBar,
                menuDocsHovered: !prevState.menuDocsHovered,
                sidebarMenuClicked: false
            }), () => {
                setTimeout(() => {
                    this.setState((prevState) => ({
                        showLargeSearchBar: !prevState.showLargeSearchBar
                    }))
                    if (this.state.showSmallSearchFilterOptions === true) {
                        this.setState({
                            showLargeSearchFilterOptions: true
                        })
                    }
                }, 500)
            })
        }
    }

    
        //* - - SEARCH BAR INPUT FUNCS - - *//
    

    clearSearchBar = () => {
        this.setState({
            searchedData: "",
            clearSearchBtn: false,
        })
    }

    searchBarClicked = () => {
        this.setState({
            searchBarInFocus: true
        })
    }

    groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
            (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
            return result;
        }, {});
    }

    handleSearchChange = (e) => {
        const { searchFilterTitle, searchFilterSelected, menuOption1, menuOption2, menuOption3, menuOption4 } = this.state; 
        let { currentSectionSearching } = this.state;
        this.setState({
            searchedData: e.target.value,
            isSearchLoading: true,
            clearSearchBtn: true,
            showDocsPopupHomescreen: false
        });
        
        const searchInput = e.target.value.toLowerCase();
        
        // Clear previous timeout
    
    
        // Set a new timeout to execute after 500ms
        this.searchTimeout = setTimeout(() => {
            if (searchInput.trim() === "") {
                // Reset filteredOptions and loading state
                this.setState({
                    searchedData: "",
                    searchCloseBtn: false,
                    filteredOptions: [],
                    isSearchLoading: false,
                    resultsFound: false,
                    showDocsPopupHomescreen: true,
                    clearSearchBtn: false
                });

            } else {
        
                if (searchFilterSelected === "User Management") {
                    currentSectionSearching = UserManagementFullSearch
                } else if (searchFilterSelected === "Standalone APIs") {
                    currentSectionSearching = StandaloneAPIsFullSearch
                } else if (searchFilterSelected === "Events and webhooks") {
                    currentSectionSearching = EventsWebhooksFullSearch
                } else if (searchFilterSelected === "Resources") {
                    currentSectionSearching = ResourcesFullSearch
                } else if (searchFilterSelected === "All docs") {
                    currentSectionSearching = AllDocsFullSearch
                }

                this.setState({ isSearchLoading: true, searchedData: searchInput, searchCloseBtn: true }, () => {
                    const filteredOptions = currentSectionSearching.filter(option => {
                        const name = option.name.toLowerCase();
                        const searchWords = searchInput.toLowerCase().split(' '); // Split search input into words
                        const optionWords = name.split(' '); // Split name into words
                    
                        if (searchWords.length === 1) {
                            // Special case: search input is a single word
                            const searchWord = searchWords[0];
                            return optionWords.some(optionWord => optionWord.startsWith(searchWord));
                        } else {
                            // Combine search words into a single substring
                            const searchSubstring = searchWords.join(' ');
                            return name.includes(searchSubstring);
                        }
                    });
    
                    const resultsFound = filteredOptions.length > 0; // Check if any results were found
    
                    const highlightedOptions = filteredOptions.map(option => ({
                        ...option,
                        highlightedName: this.highlightMatchedCharacters(option, searchInput)
                    }));
    
                    const groupedResults = this.groupBy(highlightedOptions, 'category');
    
                    // Construct trie for each category
                    const trieByCategory = {};
                    Object.entries(groupedResults).forEach(([category, options]) => {
                        trieByCategory[category] = new Trie();
                        options.forEach(option => {
                            trieByCategory[category].insert(option.name.toLowerCase());
                        });
                    });
    
                    // Update state after search logic is complete
                    this.setState({
                        trieByCategory,
                        groupedOptions: groupedResults,
                        filteredOptions: highlightedOptions,
                        isSearchLoading: false, // Hide loading screen
                        resultsFound: resultsFound
                    });
                });
            }
        }, 0); // Set debounce delay to 500ms
    };

    reloadFilteredSearchResults = (input) => {
        const { searchFilterSelected, menuOption1, menuOption2, menuOption3, menuOption4 } = this.state;
        let currentSectionSearching; 

        if (searchFilterSelected === "User Management") {
            currentSectionSearching = UserManagementFullSearch
        } else if (searchFilterSelected === "Standalone APIs") {
            currentSectionSearching = StandaloneAPIsFullSearch
        } else if (searchFilterSelected === "Events and webhooks") {
            currentSectionSearching = EventsWebhooksFullSearch
        } else if (searchFilterSelected === "Resources") {
            currentSectionSearching = ResourcesFullSearch
        } else if (searchFilterSelected === "All docs") {
            currentSectionSearching = AllDocsFullSearch
        }
        
        const searchInput = input.toLowerCase();
        
        // Clear previous timeout
        clearTimeout(this.searchTimeout);
    
        this.setState({
            searchedData: input,
            isSearchLoading: true,
            clearSearchBtn: true,
            showDocsPopupHomescreen: false
        });
    
        // Set a new timeout to execute after 500ms
        this.searchTimeout = setTimeout(() => {
            if (searchInput.trim() === "") {
                // Reset filteredOptions and loading state
                this.setState({
                    searchedData: "",
                    searchCloseBtn: false,
                    filteredOptions: [],
                    isSearchLoading: false,
                    resultsFound: false,
                    showDocsPopupHomescreen: true,
                    clearSearchBtn: false
                });

            } else {
                // Show loading screen and start search
                this.setState({ isSearchLoading: true, searchedData: searchInput, searchCloseBtn: true }, () => {
                    const filteredOptions = currentSectionSearching.filter(option => {
                        const name = option.name.toLowerCase();
                        const searchWords = searchInput.toLowerCase().split(' '); // Split search input into words
                        const optionWords = name.split(' '); // Split name into words
                    
                        if (searchWords.length === 1) {
                            // Special case: search input is a single word
                            const searchWord = searchWords[0];
                            return optionWords.some(optionWord => optionWord.startsWith(searchWord));
                        } else {
                            // Combine search words into a single substring
                            const searchSubstring = searchWords.join(' ');
                            return name.includes(searchSubstring);
                        }
                    });
    
                    const resultsFound = filteredOptions.length > 0; // Check if any results were found
    
                    const highlightedOptions = filteredOptions.map(option => ({
                        ...option,
                        highlightedName: this.highlightMatchedCharacters(option, searchInput)
                    }));
    
                    const groupedResults = this.groupBy(highlightedOptions, 'category');
    
                    // Construct trie for each category
                    const trieByCategory = {};
                    Object.entries(groupedResults).forEach(([category, options]) => {
                        trieByCategory[category] = new Trie();
                        options.forEach(option => {
                            trieByCategory[category].insert(option.name.toLowerCase());
                        });
                    });
    
                    // Update state after search logic is complete
                    this.setState({
                        trieByCategory,
                        groupedOptions: groupedResults,
                        filteredOptions: highlightedOptions,
                        isSearchLoading: false, // Hide loading screen
                        resultsFound: resultsFound
                    });
                });
            }
        }, 500); // Set debounce delay to 500ms
    }

    highlightMatchedCharacters(option, searchInput, isSearchLoading) {
        const name = option.name.toLowerCase();
        const searchRegex = new RegExp(`\\b${searchInput}`, 'i');
        const match = name.match(searchRegex);
        
        if (!isSearchLoading && searchInput && match) {
            // Match found and search input is not empty and not loading
            const startIndex = match.index;
            const endIndex = startIndex + searchInput.length;
            const highlightedName = (
                <span>
                    {option.name.substring(0, startIndex)}
                    <span style={{ fontWeight: "bold", color: "#2e2eff" }}>
                        {option.name.substring(startIndex, endIndex)}
                    </span>
                    {option.name.substring(endIndex)}
                </span>
            );
            return highlightedName;
        } else {
            // No match found or search input is empty or loading
            return option.name;
        }
    }

    searchedTermClicked = async (category, option, searchedPage) => {
        const { currentPage, currentSection, menuOption4 } = this.state;

            //* Handle edge case for API Reference page
        if (option.subCat1 === "API Reference" && menuOption4 === true) {
                this.handleSearchWithinNested(option.page, 4);
            return;
        }

        let searchingSamePage= false, searchingSameSection = false;
        if (currentPage === searchedPage) {
            searchingSamePage = true;
        }
        if (currentSection === category) {
            searchingSameSection = true;
        }
        
        if (this.state.showMiniSearchBar === false) {
            this.setState((prevState) => ({
                showDocsMenu: !prevState.showDocsMenu,
                showLargeSearchBar: !prevState.showLargeSearchBar,
                menuDocsHovered: !prevState.menuDocsHovered,
                sidebarMenuClicked: true,
            }), () => {
                    this.setState((prevState) => ({
                        showMiniSearchBar: !prevState.showMiniSearchBar,
                        externalDocsHovered: false,
                        exitDocsHovered: false,
                    }), async () => {
                        await this.clearRecentSearch()
                        if (!searchingSamePage && !searchingSameSection) {
                            await this.closeSelectedMenuOption()
                        }
                        await new Promise((resolve, reject) => {
                            if (category === "User Management") {
                                this.setState({transitioningMenu: true, menuOption2: false, menuOption3: false, menuOption4: false}, () => {
                                    this.menuOptionClicked(1)
                                })
                            } else if (category === "Standalone APIs") {
                                this.setState({transitioningMenu: true, menuOption1: false, menuOption3: false, menuOption4: false}, () => {
                                    this.menuOptionClicked(2)
                                })
                            } else if (category === "Events and webhooks") {
                                this.setState({transitioningMenu: true, menuOption1: false, menuOption2: false, menuOption4: false}, () => {
                                    this.menuOptionClicked(3)
                                })
                            } else if (category === "Resources") {
                                this.setState({transitioningMenu: true, menuOption1: false, menuOption2: false, menuOption3: false}, () => {
                                    this.menuOptionClicked(4)
                                })
                            }
                            resolve();
                        });
                        this.getSearchedTerm(category, option, searchedPage, searchingSamePage)
                    })
            })
        } else {
            await this.clearRecentSearch()
            if (!searchingSamePage && !searchingSameSection) {
                await this.closeSelectedMenuOption()
            }
            await new Promise((resolve, reject) => {
                if (category === "User Management") {
                    this.setState({transitioningMenu: true, menuOption2: false, menuOption3: false, menuOption4: false}, () => {
                        this.menuOptionClicked(1)
                    })
                } else if (category === "Standalone APIs") {
                    this.setState({transitioningMenu: true, menuOption1: false, menuOption3: false, menuOption4: false}, () => {
                        this.menuOptionClicked(2)
                    })
                } else if (category === "Events and webhooks") {
                    this.setState({transitioningMenu: true, menuOption1: false, menuOption2: false, menuOption4: false}, () => {
                        this.menuOptionClicked(3)
                    })
                } else if (category === "Resources") {
                    this.setState({transitioningMenu: true, menuOption1: false, menuOption2: false, menuOption3: false}, () => {
                        this.menuOptionClicked(4)
                    })
                }
                resolve();
            });
            this.getSearchedTerm(category, option, searchedPage, searchingSamePage)
        }
    }

    getSearchedTerm = (category, option, searchedPage, searchingSamePage) => {
        new Promise((resolve) => {
            const { menuOption1, menuOption2, menuOption3, menuOption4 } = this.state;
            setTimeout(() => {
                if (menuOption1 === true) {
                    if (this.state.prevSelectedOption !== option.page) {
                        this.handleSearchWithinNested(option.page, 1);
                    }
                    this.setState({
                        menuOption1SearchCategory: category,
                        menuOption1SearchTermObject: option,
                        currentPage: searchedPage
                    }, () => {
                        // Call the callback function to perform search
                        this.setState({
                            previouslySearched: option.page,
                            transitioningMenu: false
                        })
                    });
                } else if (menuOption2 === true) {
                    if (this.state.prevSelectedOption !== option.page) {
                        this.handleSearchWithinNested(option.page, 2);
                    }
                    this.setState({
                        menuOption2SearchCategory: category,
                        menuOption2SearchTermObject: option,
                        currentPage: searchedPage
                    }, () => {
                        // Call the callback function to perform search
                        this.setState({
                            previouslySearched: option.page,
                            transitioningMenu: false
                        })
                    });
                } else if (menuOption3 === true) {
                    if (this.state.prevSelectedOption !== option.page) {
                        this.handleSearchWithinNested(option.page, 3);
                    }
                    this.setState({
                        menuOption3SearchCategory: category,
                        menuOption3SearchTermObject: option,
                        currentPage: searchedPage
                    }, () => {
                        // Call the callback function to perform search
                        this.setState({
                            previouslySearched: option.page,
                            transitioningMenu: false
                        })
                    });
                } else if (menuOption4 === true) {
                    if (this.state.prevSelectedOption !== option.page) {
                        this.handleSearchWithinNested(option.page, 4);
                    }
                    this.setState({
                        menuOption4SearchCategory: category,
                        menuOption4SearchTermObject: option,
                        currentPage: searchedPage
                    }, () => {
                        // Call the callback function to perform search
                        this.setState({
                            previouslySearched: option.page,
                            transitioningMenu: false
                        })
                    });
                }
            }, searchingSamePage ? 0 : 1000)
            resolve();
        });
    }

    handleSearchWithinNested = (searchTerm, searchID) => {
        let searchPath
        if (this.nestedDropdownRef) {
            if (searchID === 1) {
                searchPath = this.nestedDropdownRef.searchMenuItems(UserManagementOptions, searchTerm);
            } else if (searchID === 2) {
                searchPath = this.nestedDropdownRef.searchMenuItems(StandaloneAPIsOptions, searchTerm);
            } else if (searchID === 3) {
                searchPath = this.nestedDropdownRef.searchMenuItems(EventsWebhooksOptions, searchTerm);
            } else if (searchID === 4) {
                searchPath = this.nestedDropdownRef.searchMenuItems(ResourcesOptions, searchTerm);
            }
          this.setSearchPath(searchPath)
        }
    };

    setSearchPath = (searchPath) => {
        this.setState({ searchPath });
    };

    clearRecentSearch = async () => {
    
       this.setState({
            menuOption1SearchTermObject: null,
            menuOption2SearchTermObject: null,
            menuOption3SearchTermObject: null,
            menuOption4SearchTermObject: null,
            searchedData: "",
            clearSearchBtn: false,
        })
    }

    displayLargeSearchFilters = () => {
        if (this.state.showLargeSearchFilterOptions === true) {
            if (this.state.searchFilterSelected !== "") {
                this.setState((prevState) => {
                    const { searchFilterSelected } = prevState;
                    // Split the text into words, map over each word to get the first letter and capitalize it
                    const firstLetters = searchFilterSelected
                      .split(' ')
                      .map(word => word.charAt(0).toUpperCase())
                      .join('');
                    return { 
                        showSmallSearchFilterOptions: false,
                        showLargeSearchFilterOptions: false,
                        searchFilterTitle: `🔎 ${firstLetters}` 
                    };
                });
            } else {
                this.setState({
                    showSmallSearchFilterOptions: false,
                    showLargeSearchFilterOptions: false,
                    searchFilterTitle: "🔎" 
                })
            }
        } else {
            this.setState({
                showLargeSearchFilterOptions: true,
                showSmallSearchFilterOptions: true,
                searchFilterTitle: "Close"
            })
        }
    }

    displaySmallSearchFilters = () => {
        console.log("search feature title: ", this.state.searchFilterTitle)
        if (this.state.showSmallSearchFilterOptions === true) {
            if (this.state.searchFilterSelected !== "") {
                this.setState((prevState) => {
                    const { searchFilterSelected } = prevState;
                    // Split the text into words, map over each word to get the first letter and capitalize it
                    const firstLetters = searchFilterSelected
                      .split(' ')
                      .map(word => word.charAt(0).toUpperCase())
                      .join('');
                    return { 
                        showSmallSearchFilterOptions: false,
                        showLargeSearchFilterOptions: false,
                        searchFilterTitle: `🔎 ${firstLetters}` 
                    };
                });
            } else {
                this.setState({
                    showSmallSearchFilterOptions: false,
                    showLargeSearchFilterOptions: false,
                    searchFilterTitle: "🔎" 
                })
            }
        } else {
            this.setState({
                showSmallSearchFilterOptions: true,
                showLargeSearchFilterOptions: true,
                searchFilterTitle: "Close"
            })
        }
        
    }

    searchFilterClicked = (option) => {
        if (option === 1) {
            this.setState({
                searchFilterTitle: "🔎 UM",
                searchFilterSelected: "User Management",
                showLargeSearchFilterOptions: false,
                showSmallSearchFilterOptions: false,
            }, () => {
                this.reloadFilteredSearchResults(this.state.searchedData)
            })
        } else if (option === 2) {
            this.setState({
                searchFilterTitle: "🔎 SA",
                searchFilterSelected: "Standalone APIs",
                showLargeSearchFilterOptions: false,
                showSmallSearchFilterOptions: false
            }, () => {
                this.reloadFilteredSearchResults(this.state.searchedData)
            })
        } else if (option === 3) {
            this.setState({
                searchFilterTitle: "🔎 EAW",
                searchFilterSelected: "Events and webhooks",
                showLargeSearchFilterOptions: false,
                showSmallSearchFilterOptions: false,
            }, () => {
                this.reloadFilteredSearchResults(this.state.searchedData)
            })
        } else if (option === 4) {
            this.setState({
                searchFilterTitle: "🔎 R",
                searchFilterSelected: "Resources",
                showLargeSearchFilterOptions: false,
                showSmallSearchFilterOptions: false
            }, () => {
                this.reloadFilteredSearchResults(this.state.searchedData)
            })
        } else {
            this.setState({
                searchFilterTitle: "🔎 AD",
                searchFilterSelected: "All docs",
                showLargeSearchFilterOptions: false,
                showSmallSearchFilterOptions: false
            }, () => {
                this.reloadFilteredSearchResults(this.state.searchedData)
            })
        }
        
    }
    
    navigateToNewPage = async (page, pageObject) => {
        await this.searchedTermClicked(pageObject.category, pageObject, pageObject.page)
    }

    navigateToNewPageOption1 = async (page, pageObject) => {
        await this.searchedTermClicked(pageObject.category, pageObject, pageObject.page)
    }

    navigateToNewPageOption2 = async (page, pageObject) => {
        await this.searchedTermClicked(pageObject.category, pageObject, pageObject.page)
    }

    navigateToNewPageOption3 = async (page, pageObject) => {
        await this.searchedTermClicked(pageObject.category, pageObject, pageObject.page)
    }

    navigateToNewPageOption4 = async (page, pageObject) => {
        await this.searchedTermClicked(pageObject.category, pageObject, pageObject.page)
    }

    searchInternalPage = () => {
        
    }

    componentDidUpdate = () => {
       
    }

    render () {
            //* - SIDE BAR MENU VARS - *//
        const { showDocsMenu, menuSubsections, menuOption1, menuOption2, menuOption3, menuOption4, mOption1Gap, mOption2Gap, mOption3Gap, mOption4Gap, showCloseSelectedOptionBtn } = this.state;
            
            //* - DOCK SEARCH BAR VARS - *//
        const { menuDocsHovered, externalDocsHovered, exitDocsHovered, dockSearchBarWidth, dockMenuBtnsPaddingTop, dockSearchBarInputWidth, dockMenuBtnWidth, dockExternalBtnWidth, dockExitBtnWidth } = this.state
            
            //* - POPUP SEARCH BAR VARS - *//
        const { isSearchLoading, groupedOptions, resultsFound, hoveredResultId} = this.state;
        const searchInput = this.state.searchedData.trim().toLowerCase();

            //* - TOGGLE ADJUSTABLE DIMENSION VAR - *//
        const { sidebarMenuClicked } = this.state;
        
            //* - DOUMENTATION PAGES VARS - *//
        const { showDocsHome, showDocsLoadingScreen, showUserManagementDoc, showStandAloneApis, showAPIReference, showEventsWebhooks, showResources } = this.state;
        const { usrMgmtScrollID, standaloneApisScrollID, eventsWebhooksScrollID, resourcesScrollID } = this.state;

            //* - SEARCH FILTERR VAR(S) - *//
        let searchFilterOptionFontWeight = "normal";
        let searchFilterOptionBorderColor = "#6363f1";
        const { searchFilterTitle, searchFilterSelected } = this.state;

        return(
            <Styles>
                        {/* - - SIDE PANEL - -  */}

                    <CSSTransition
                        in={this.state.showDocsMenu}
                        timeout={500}
                        classNames="docs-side-panel"
                        unmountOnExit    
                        >
                            <div ref={this.props.sidebarPanelRef} style={{width: "35%"}} className='demo-docs-sidebar'>
                                <div className='demo-docs-sidebar-logo'>
                                    <img src='/assets/workos_logo_icon.png' alt='no img available'/>
                                    <h5 style={{color: showDocsMenu ? "#2e2eff" : "transparent"}}>Quick Access Docs</h5>
                                </div>
                                <div style={{borderBottom: "1px solid #ccc", marginLeft: "5%", marginRight: "5%"}}></div>
                                <div style={{width: "100%", height: "88.75%", bottom: 0, overflow: "scroll", position: "relative"}}>
                                    {menuSubsections && 
                                        <div>
                                            <div className='demo-docs-sidebar-subsections'> 
                                                <div style={{top: mOption1Gap, zIndex: menuOption1 ? 1 : 0, backgroundColor: menuOption1 ? "#ECEDFE" : "#f9f9fb" }} className='menuOption1'><p><label onClick={(() => {this.menuOptionClicked(1) } )}>User Management</label></p></div>
                                                <div style={{top: mOption2Gap, zIndex: menuOption2 ? 1 : 0, backgroundColor: menuOption2 ? "#ECEDFE" : "#f9f9fb" }} className='menuOption2'><p><label onClick={(() => this.menuOptionClicked(2))}>Standalone APIs</label></p></div>
                                                <div style={{top: mOption3Gap, zIndex: menuOption3 ? 1 : 0, backgroundColor: menuOption3 ? "#ECEDFE" : "#f9f9fb" }} className='menuOption3'><p><label onClick={(() => this.menuOptionClicked(3))}>Events and webhooks</label></p></div>
                                                <div style={{top: mOption4Gap, zIndex: menuOption4 ? 1 : 0, backgroundColor: menuOption4 ? "#ECEDFE" : "#f9f9fb" }} className='menuOption4'><p><label onClick={(() => this.menuOptionClicked(4))}>Resources</label></p></div>     
                                            </div>
                                            <CSSTransition
                                            in={showCloseSelectedOptionBtn}
                                            timeout={500}
                                            classNames="mini-search-bar"
                                            unmountOnExit
                                            >
                                                <div className='closeSelectedMenuOption'>
                                                    <span onClick={this.closeSelectedMenuOption}><img src='/assets/docs_popup_exit_search_icon.png' alt='no img available'/></span>
                                                </div>
                                            </CSSTransition>
                                        </div>
                                    }

                                    {/* - User Management Dropdown Menu Options - */}

                                    <CSSTransition
                                    in={this.state.userManagementDropdown}
                                    timeout={500}
                                    classNames="dialog-slide"
                                    unmountOnExit
                                    >
                                        <div style={{marginTop: "50px"}} className="dropdown-menu">
                                            <NestedDropdown
                                            searchPath={this.state.searchPath} 
                                            setCurrentIndex={this.setCurrentIndex}
                                            setSearchPath={this.setSearchPath}
                                            getMenuItemSelected={this.handleMenuItemSelected} 
                                            menuItems={UserManagementOptions} 
                                            maximumDepth={2}
                                            ref={(ref) => { this.nestedDropdownRef = ref; }}
                                            />
                                        </div>
                                    </CSSTransition>

                                    {/* - Standalone APIs Dropdown Menu Options - */}

                                    <CSSTransition
                                    in={this.state.standaloneAPIsDropdown}
                                    timeout={500}
                                    classNames="dialog-slide"
                                    unmountOnExit
                                    >
                                        <div style={{marginTop: "50px"}} className="dropdown-menu">
                                            <NestedDropdown 
                                            searchPath={this.state.searchPath} 
                                            setCurrentIndex={this.setCurrentIndex}
                                            setSearchPath={this.setSearchPath}
                                            getMenuItemSelected={this.handleMenuItemSelected} 
                                            menuItems={StandaloneAPIsOptions}
                                            maximumDepth={3}
                                            ref={(ref) => { this.nestedDropdownRef = ref; }} 
                                            />
                                        </div>
                                    </CSSTransition>

                                    {/* - Events & Webhooks Dropdown Menu Options - */}

                                    <CSSTransition
                                    in={this.state.eventsAndWebhooksDropdown}
                                    timeout={500}
                                    classNames="dialog-slide"
                                    unmountOnExit
                                    >
                                        <div style={{marginTop: "50px"}} className="dropdown-menu">
                                            <NestedDropdown 
                                            searchPath={this.state.searchPath} 
                                            setCurrentIndex={this.setCurrentIndex}
                                            setSearchPath={this.setSearchPath}
                                            getMenuItemSelected={this.handleMenuItemSelected} 
                                            menuItems={EventsWebhooksOptions} 
                                            maximumDepth={2}
                                            ref={(ref) => { this.nestedDropdownRef = ref; }}
                                            />
                                        </div>
                                    </CSSTransition>

                                    {/* - Resources Dropdown Menu Options - */}

                                    <CSSTransition
                                    in={this.state.resourcesDropdown}
                                    timeout={500}
                                    classNames="dialog-slide"
                                    unmountOnExit
                                    >
                                        <div style={{marginTop: "50px"}} className="dropdown-menu">
                                            <NestedDropdown 
                                            searchPath={this.state.searchPath} 
                                            setCurrentIndex={this.setCurrentIndex}
                                            setSearchPath={this.setSearchPath}
                                            getMenuItemSelected={this.handleMenuItemSelected} 
                                            menuItems={ResourcesOptions} 
                                            maximumDepth={5}
                                            ref={(ref) => { this.nestedDropdownRef = ref; }} 
                                            />
                                        </div>
                                    </CSSTransition>

                                </div>
                            </div>
                    </CSSTransition>

                    {/* {this.state.showDocsMenu && 
                        <div style={{zIndex: 0.1}} className='demo-docs-sidebar'>
                            
                        </div>
                    } */}

                        {/* - - EXPANDED SEARCH BAR - - */}

                    <CSSTransition
                    in={this.state.showLargeSearchBar}
                    timeout={500}
                    classNames="docs-side-panel"
                    unmountOnExit
                    >
                        <div style={{width: dockSearchBarWidth}} className='demo-docs-search-bar'>
                            <div className='demo-docs-search-bar-input'>
                                <input
                                style={{width: dockSearchBarInputWidth}}
                                placeholder='Search the docs...'
                                id='searchedData'
                                type="text"
                                value={this.state.searchedData}
                                onChange={this.handleSearchChange}
                                onClick={this.searchBarClicked}
                                />
                                {this.state.clearSearchBtn && 
                                    <button onClick={this.clearSearchBar}>Clear</button>
                                } 
                            </div>
                            <div style={{paddingTop: dockMenuBtnsPaddingTop}} className='demo-docs-search-bar-btns'>
                                <div className='dd-search-bar-btn'>
                                    {/* GO TO NEW WINDOW DOCS */}
                                    <span><img
                                    onClick={this.dockMenuBtnClicked}
                                    onMouseEnter={this.menuDocsEnter}
                                    onMouseLeave={this.menuDocsLeave}
                                    style={{width: dockMenuBtnWidth, paddingBottom: "2%"}} src= {menuDocsHovered ? '/assets/docs_search_bar_menu_icon_color.png' : '/assets/docs_search_bar_menu_icon.png' } alt='no img available'/></span>
                                </div>
                                <div className='dd-search-bar-btn'>
                                    {/* MINIMIZE DOCS */}
                                    <span><img
                                    onMouseEnter={this.externalDocsEnter}
                                    onMouseLeave={this.externalDocsLeave} 
                                    style={{width: dockExternalBtnWidth, paddingBottom: "6%"}} src={externalDocsHovered ? '/assets/docs_search_bar_external_link_icon_color.png' : '/assets/docs_search_bar_external_link_icon.png' } alt='no img available'/></span>
                                </div>
                                <div className='dd-search-bar-btn'>
                                    {/* CLOSE DOCS */}
                                    <span><img 
                                    onMouseEnter={this.exitDocsEnter}
                                    onMouseLeave={this.exitDocsLeave}
                                    style={{width: dockExitBtnWidth}} src={exitDocsHovered ? '/assets/docs_search_bar_exit_icon_color.png' : '/assets/docs_search_bar_exit_icon.png' } alt='no img available'/></span>
                                </div>
                            </div>
                            {searchInput !== "" && (
                                <div className='searchResults'>
                                    <button style={{fontWeight: searchFilterTitle !== "Close" ? "bold" : ""}} onClick={this.displayLargeSearchFilters} className='filterSearchBtns'>{this.state.searchFilterTitle}</button>
                                    <CSSTransition
                                    in={this.state.showLargeSearchFilterOptions}
                                    timeout={500}
                                    classNames="docs-side-panel"
                                    unmountOnExit
                                    >
                                        <div className='filterSearchOptions'>
                                            <p style={{marginTop: "2%", marginBottom: "1%", fontWeight: "bold", textAlign: "left", fontSize: "92.5%"}}><u>Filter search: </u></p>
                                            <div className='filterSearchOption'><p><label style={{color: searchFilterSelected === "All docs" ? "#6363f1": "", textDecoration: searchFilterSelected === "All docs" ? "underline": ""}} onClick={() => this.searchFilterClicked(0)}>All docs</label></p></div>
                                            <div className='filterSearchOption'><p><label style={{color: searchFilterSelected === "User Management" ? "#6363f1": "", textDecoration: searchFilterSelected === "User Management" ? "underline": ""}} onClick={() => this.searchFilterClicked(1)}>User Management</label></p></div>
                                            <div className='filterSearchOption'><p><label style={{color: searchFilterSelected === "Standalone APIs" ? "#6363f1": "", textDecoration: searchFilterSelected === "Standalone APIs" ? "underline": ""}} onClick={() => this.searchFilterClicked(2)}>Standalone APIs</label></p></div>
                                            <div className='filterSearchOption'><p><label style={{color: searchFilterSelected === "Events and webhooks" ? "#6363f1": "", textDecoration: searchFilterSelected === "Events and webhooks" ? "underline": ""}} onClick={() => this.searchFilterClicked(3)}>Events and webhooks</label></p></div>
                                            <div className='filterSearchOption'><p><label style={{color: searchFilterSelected === "Resources" ? "#6363f1": "", textDecoration: searchFilterSelected === "Resources" ? "underline": ""}} onClick={() => this.searchFilterClicked(4)}>Resources</label></p></div>
                                        </div>
                                    </CSSTransition>
                                    {isSearchLoading && 
                                        <div>
                                            <p>Loading...</p>
                                        </div>
                                    }
                                    {!isSearchLoading && resultsFound && 
                                        Object.entries(groupedOptions).map(([category, options]) => (
                                            <div style={{borderBottom: "1px solid #ccc", paddingTop: "0%", paddingBottom: "2.5%"}} key={category}>
                                                {options.map(option => (
                                                    <div>
                                                        {category !== "Code Snippet" ? 
                                                        (
                                                            <div 
                                                            onClick={() => this.searchedTermClicked(category, option, option.page)}
                                                            className='searchResultCell' 
                                                            key={option.id}>
                                                                <p className='searchResultOption'>{option.highlightedName}</p>
                                                                <p className='searchResultCategory'>{category} {option.subCat1 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat1}</label> : null } {option.subCat2 ? <label style={{cursor: "pointer"}}>{'>'} {option.subCat2}</label> : null } {option.subCat3 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat3}</label> : null } {option.subCat4 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat4}</label> : null } </p> 
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                {option.command !== "" ? 
                                                                (
                                                                    <div 
                                                                    onMouseEnter={() => this.currentSearchedCellEnter(option.id)}
                                                                    onMouseLeave={this.currentSearchedCellLeave}
                                                                    style={{backgroundColor: hoveredResultId === option.id ? "#F0F1FF" : "transparent", color: hoveredResultId === option.id ? "#1C1C8E" : "black"}} 
                                                                    className='codeSnippetResult'>
                                                                        <div className='codeSnippetCommand'>
                                                                            <span style={{
                                                                                backgroundColor: option.command !== "DELETE" ? option.command === "GET" ? "#e6f4fe" : "#d8eaed" : "#feeaed",
                                                                                color: option.command !== "DELETE" ? option.command === "GET" ? "#0072dd"  : "#00815c" : "#cf375b"
                                                                            }}>{option.command}</span>
                                                                        </div>
                                                                        <div 
                                                                        className='codeSnippetLine' 
                                                                        key={option.id}>
                                                                            <p 
                                                                            style={{marginLeft: option.command !== "DELETE" ? option.command === "GET" ? "0px" : "3%" : "7%"}}
                                                                            className='searchResultOption'>/{option.highlightedName}</p>
                                                                            {/* <p className='searchResultCategory'>{category}</p> */}
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <div 
                                                                    onMouseEnter={() => this.currentSearchedCellEnter(option.id)}
                                                                    onMouseLeave={this.currentSearchedCellLeave}
                                                                    style={{backgroundColor: hoveredResultId === option.id ? "#F0F1FF" : "transparent", color: hoveredResultId === option.id ? "#1C1C8E" : "black"}} 
                                                                    className='codeSnippetResult'>
                                                                        <div 
                                                                        className='codeSnippetLineNoCommand' 
                                                                        key={option.id}>
                                                                            <p 
                                                                            // style={{marginLeft: option.command !== "DELETE" ? option.command === "GET" ? "0px" : "3%" : "7%"}}
                                                                            className='searchResultOption'>{option.highlightedName}</p>
                                                                            {/* <p className='searchResultCategory'>{category}</p> */}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    }
                                    {!isSearchLoading && !resultsFound && 
                                        <div>
                                            <p>no results found</p>
                                        </div>
                                    }
                                </div>
                            )}
                        </div>
                    </CSSTransition>

                        {/* - - SHRANK SEARCH BAR - - */}

                    <CSSTransition
                    in={this.state.showMiniSearchBar}
                    timeout={500}
                    classNames="mini-search-bar"
                    unmountOnExit
                    >
                        <div style={{width: "61%", filter: "none"}} className='demo-docs-search-bar'>
                            <div className='demo-docs-search-bar-input'>
                                <input
                                style={{width: "70%"}}
                                placeholder='Search the docs...'
                                id='searchedData'
                                type="text"
                                value={this.state.searchedData}
                                onChange={this.handleSearchChange}
                                onClick={this.searchBarClicked}
                                />
                                {this.state.clearSearchBtn && 
                                    <button onClick={this.clearSearchBar}>Clear</button>
                                }
                            </div>
                            <div style={{paddingTop: "0.15%"}} className='demo-docs-search-bar-btns'>
                                <div className='dd-search-bar-btn'>
                                    {/* GO TO NEW WINDOW DOCS */}
                                    <span><img
                                    onClick={this.dockMenuBtnClicked}
                                    onMouseEnter={this.menuDocsEnter}
                                    onMouseLeave={this.menuDocsLeave}
                                    style={{width: '54%', paddingBottom: "2%"}} src= {menuDocsHovered ? '/assets/docs_search_bar_minimize_icon_color.png' : '/assets/docs_search_bar_minimize_icon.png' } alt='no img available'/></span>
                                </div>
                                <div className='dd-search-bar-btn'>
                                    {/* MINIMIZE DOCS */}
                                    <span><img
                                    onMouseEnter={this.externalDocsEnter}
                                    onMouseLeave={this.externalDocsLeave} 
                                    style={{width: "45.5%", paddingBottom: "6%"}} src={externalDocsHovered ? '/assets/docs_search_bar_external_link_icon_color.png' : '/assets/docs_search_bar_external_link_icon.png' } alt='no img available'/></span>
                                </div>
                                <div className='dd-search-bar-btn'>
                                    {/* CLOSE DOCS */}
                                    <span><img 
                                    onMouseEnter={this.exitDocsEnter}
                                    onMouseLeave={this.exitDocsLeave}
                                    style={{width: "56.5%"}} src={exitDocsHovered ? '/assets/docs_search_bar_exit_icon_color.png' : '/assets/docs_search_bar_exit_icon.png' } alt='no img available'/></span>
                                </div>
                            </div>
                            {searchInput !== "" && (
                                <div style={{marginTop: "9%"}} className='searchResults'>
                                    <button onClick={this.displaySmallSearchFilters} className='filterSearchBtns-sidebar' style={{fontWeight: searchFilterTitle !== "Close" ? "bold" : ""}}>{this.state.searchFilterTitle}</button>
                                    <CSSTransition
                                    in={this.state.showSmallSearchFilterOptions}
                                    timeout={500}
                                    classNames="docs-side-panel"
                                    unmountOnExit
                                    >
                                        <div className='filterSearchOptions'>
                                            <p style={{marginTop: "2%", marginBottom: "1%", fontWeight: "bold", textAlign: "left", fontSize: "92.5%"}}><u>Filter search: </u></p>
                                            <div className='filterSearchOption'><p><label style={{color: searchFilterSelected === "All docs" ? "#6363f1": "", textDecoration: searchFilterSelected === "All docs" ? "underline": ""}} onClick={() => this.searchFilterClicked(0)}>All docs</label></p></div>
                                            <div className='filterSearchOption'><p><label style={{color: searchFilterSelected === "User Management" ? "#6363f1": "", textDecoration: searchFilterSelected === "User Management" ? "underline": ""}} onClick={() => this.searchFilterClicked(1)}>User Management</label></p></div>
                                            <div className='filterSearchOption'><p><label style={{color: searchFilterSelected === "Standalone APIs" ? "#6363f1": "", textDecoration: searchFilterSelected === "Standalone APIs" ? "underline": ""}} onClick={() => this.searchFilterClicked(2)}>Standalone APIs</label></p></div>
                                            <div className='filterSearchOption'><p><label style={{color: searchFilterSelected === "Events and webhooks" ? "#6363f1": "", textDecoration: searchFilterSelected === "Events and webhooks" ? "underline": ""}} onClick={() => this.searchFilterClicked(3)}>Events and webhooks</label></p></div>
                                            <div className='filterSearchOption'><p><label style={{color: searchFilterSelected === "Resources" ? "#6363f1": "", textDecoration: searchFilterSelected === "Resources" ? "underline": ""}} onClick={() => this.searchFilterClicked(4)}>Resources</label></p></div>
                                        </div>
                                    </CSSTransition>
                                    {isSearchLoading && 
                                        <div>
                                            <p>Loading...</p>
                                        </div>
                                    }
                                    {!isSearchLoading && resultsFound && 
                                        Object.entries(groupedOptions).map(([category, options]) => (
                                            <div style={{borderBottom: "1px solid #ccc", paddingTop: "0%", paddingBottom: "2.5%"}} key={category}>
                                                {options.map(option => (
                                                    <div>
                                                        {category !== "Code Snippet" ? 
                                                        (
                                                            <div 
                                                            onClick={() => this.searchedTermClicked(category, option, option.page)}
                                                            className='searchResultCell' 
                                                            key={option.id}>
                                                                <p className='searchResultOption'>{option.highlightedName}</p>
                                                                <p className='searchResultCategory'>{category} {option.subCat1 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat1}</label> : null } {option.subCat2 ? <label style={{cursor: "pointer"}}>{'>'} {option.subCat2}</label> : null } {option.subCat3 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat3}</label> : null } {option.subCat4 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat4}</label> : null }</p> 
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                {option.command !== "" ? 
                                                                (
                                                                    <div 
                                                                    onMouseEnter={() => this.currentSearchedCellEnter(option.id)}
                                                                    onMouseLeave={this.currentSearchedCellLeave}
                                                                    style={{backgroundColor: hoveredResultId === option.id ? "#F0F1FF" : "transparent", color: hoveredResultId === option.id ? "#1C1C8E" : "black"}} 
                                                                    className='codeSnippetResult'>
                                                                        <div className='codeSnippetCommand'>
                                                                            <span style={{
                                                                                backgroundColor: option.command !== "DELETE" ? option.command === "GET" ? "#e6f4fe" : "#d8eaed" : "#feeaed",
                                                                                color: option.command !== "DELETE" ? option.command === "GET" ? "#0072dd"  : "#00815c" : "#cf375b"
                                                                            }}>{option.command}</span>
                                                                        </div>
                                                                        <div 
                                                                        className='codeSnippetLine' 
                                                                        key={option.id}>
                                                                            <p 
                                                                            style={{marginLeft: option.command !== "DELETE" ? option.command === "GET" ? "0px" : "3%" : "7%"}}
                                                                            className='searchResultOption'>/{option.highlightedName}</p>
                                                                            {/* <p className='searchResultCategory'>{category}</p> */}
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <div 
                                                                    onMouseEnter={() => this.currentSearchedCellEnter(option.id)}
                                                                    onMouseLeave={this.currentSearchedCellLeave}
                                                                    style={{backgroundColor: hoveredResultId === option.id ? "#F0F1FF" : "transparent", color: hoveredResultId === option.id ? "#1C1C8E" : "black"}} 
                                                                    className='codeSnippetResult'>
                                                                        <div 
                                                                        className='codeSnippetLineNoCommand' 
                                                                        key={option.id}>
                                                                            <p 
                                                                            // style={{marginLeft: option.command !== "DELETE" ? option.command === "GET" ? "0px" : "3%" : "7%"}}
                                                                            className='searchResultOption'>{option.highlightedName}</p>
                                                                            {/* <p className='searchResultCategory'>{category}</p> */}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    }
                                    {!isSearchLoading && !resultsFound && 
                                        <div>
                                            <p>no results found</p>
                                        </div>
                                    }
                                </div>
                            )}
                        </div>
                    </CSSTransition>

                    {/* - - DOCUMENTATION HOME SCREEN & LOADING PAGE - -  */}

                    {showDocsHome && 
                        <div className='docs-home-container'>
                            <h1>User Management</h1>
                            <h2>Authentication</h2>
                            <div>
                                <div>
                                    <button>AuthKit</button>
                                </div>
                                <div>
                                    <button>Enterprise auth</button>
                                </div>
                                <div>
                                    <button>Email + Password</button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <button>Social login</button>
                                </div>
                                <div>
                                    <button>Multi-Factor Auth</button>
                                </div>
                                <div>
                                    <button>Magic Auth</button>
                                </div>
                            </div>
                            <h2>Provisioning</h2>
                            <div>
                                <div>
                                    <button>Just-in-Time</button>
                                </div>
                                <div>
                                    <button>Directory</button>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    }

                    {showDocsLoadingScreen && 
                        <div>

                        </div>
                    }

                    {/* - - DOCUMENTATION PAGES - -  */}

                    {showUserManagementDoc && <UserManagement sidebarMenuClicked={sidebarMenuClicked} scrollToID={usrMgmtScrollID} ref={this.menuOption1Ref} searchedTerm={this.state.menuOption1SearchTermObject} clearLatestSearch={this.clearRecentSearch} navigateToNewPage={this.navigateToNewPageOption1}/>}

                    {showStandAloneApis && <StandaloneAPIs sidebarMenuClicked={sidebarMenuClicked} scrollToID={standaloneApisScrollID} searchedTerm={this.state.menuOption2SearchTermObject} clearLatestSearch={this.clearRecentSearch} ref={this.menuOption2Ref} navigateToNewPage={this.navigateToNewPageOption2}/>}

                    {showEventsWebhooks && <EventsWebhooks sidebarMenuClicked={sidebarMenuClicked} ref={this.menuOption3Ref} scrollToID={eventsWebhooksScrollID} searchedTerm={this.state.menuOption3SearchTermObject} clearLatestSearch={this.clearRecentSearch} navigateToNewPage={this.navigateToNewPageOption3} />}

                    {showResources && <Resources sidebarMenuClicked={sidebarMenuClicked} ref={this.menuOption4Ref} scrollToID={resourcesScrollID} searchedTerm={this.state.menuOption4SearchTermObject} clearLatestSearch={this.clearRecentSearch} navigateToNewPage={this.navigateToNewPageOption4} selectInternalPage={this.searchedTermClicked} />}

            </Styles>
        )
    }
}