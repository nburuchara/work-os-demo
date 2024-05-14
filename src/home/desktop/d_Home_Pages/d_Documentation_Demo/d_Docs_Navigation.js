import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from './d_Documentation_Components/d_Code_Snippet_Structure'
import { hover } from '@testing-library/user-event/dist/hover'
import { CSSTransition } from 'react-transition-group';
import SidebarOptions from './Resources_Docs/Resources_Docs_Options'
import NestedDropdown from './d_Documentation_Components/NestedDropdown'
import ResultsData from "../../d_Home_Components/d_Right_Pane_Header_Components/d_Docs_Results"; // Import options from separate file
import APIReference from './Resources_Docs/d_API_Reference';
import UserManagement from './User_Mgmt_Docs/User_Management';

const Styles = styled.div `

        // - - - - - - DEMO DOCS SIDEBAR - - - - - //

.demo-docs-sidebar {
    filter: none;
    position: absolute; 
    bottom: 0; 
    height: 100%;
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
    width: 90%;
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
        
        // - - - - - - DEMO DOCS CONTAINER - - - - - - //

.demo-docs-container {
    text-align: left;
    margin-left: 1%;
    margin-right: 1%;
}

    // - - DEMO DOCS HEADER - - //

.demo-docs-section {
    width: 63%;
    float: right;
    border-bottom: 2px solid #ccc;
    padding-bottom: 5%;
    margin-bottom: 1%;
}

.demo-docs-section h1 {
    font-family: poppins;
    margin-bottom: 2%;
    font-size: 120%;
}

.demo-docs-section-sidebar-h1 {
    font-size: 100% !important;
}

.demo-docs-section h3 {
    font-size: 95%;
    font-family: poppins;
}

.demo-docs-section-sidebar-h3 {
    font-size: 84%;
}

.demo-docs-section p {
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
    margin-top: 1%;
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
    border-radius: 5px;
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


    //! - - Labeled Header - - !//

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
    padding-right: 28%;
    padding-left: 28%;
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
    margin-left: 2.5%;
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
    transform: translate(-50%, -50%) scale(1.5);
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
    width: 20%;
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
    font-size: 75%;
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
    font-size: 75%;
    font-family: poppins;
    padding-left: 10%;
    padding-right: 10%;
    cursor: pointer;
    color: #5e626a;
}

        // - - - - - - DEMO DOCS DOCK/SEAERCH BAR - - - - - //

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

        // - - - - - IMPORTED SEARCH FUNCTIONALITY - - - - - - - //

    // - - SEARCH RESULTS - - //

.searchResults {
    overflow-y: auto;
    width: 95.5%;
    position: relative;
    background-color: white;
    height: 20vh;
    border: 1px solid #cccccc;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
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


        // - - - - - - DOCS HOME CONTAINER - - - - - - //

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

            //* - - TOGGLE ADJUSTABLE DIMENSIONS - - *//

            sidebarMenuClicked: false,

            //* - - DOCUMENTATION PAGES - - *//

            showDocsHome: false,
            showUserManagementDoc: true,
            showAPIReference: false,

        }
        this.trie = new Trie(); // Initialize the trie
    }

    menuOptionClicked = (option) => {
        for (let i = 1; i <= 4; i++) {
            this.setState({
                [`mOption${i}Gap`]: "0px"
            })
            if (option === i) {
                this.setState({
                    [`menuOption${i}`]: true 
                })
            }
        } 
        setTimeout(() => {
            this.setState({
                resourcesDropdown: true
            })
        }, 500)
    }

    menuDocsEnter = () => { this.setState({menuDocsHovered: true}) }

    menuDocsLeave = () => { this.setState({menuDocsHovered: false}) }

    externalDocsEnter = () => { this.setState({ externalDocsHovered: true }) }

    externalDocsLeave = () => { this.setState({ externalDocsHovered: false }) }
    
    exitDocsEnter = () => { this.setState({exitDocsHovered: true}) }

    exitDocsLeave = () => { this.setState({exitDocsHovered: false}) }

    dockMenuBtnClicked =  ()  => {
        this.props.sidePanelOpened()
        if(this.state.showDocsMenu === false) {
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
        const searchInput = e.target.value.toLowerCase();
    
    // Clear previous timeout
    clearTimeout(this.searchTimeout);

    this.setState({searchedData: e.target.value, isSearchLoading: true, clearSearchBtn: true, showDocsPopupHomescreen: false})
    
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
                this.setState({ isSearchLoading: true, searchedData: searchInput, searchCloseBtn: true}, () => {
                    // Perform search logic
                    const filteredOptions = ResultsData.filter(option => {
                        const words = option.name.toLowerCase().split(/[\s/:]+/);
                        return words.some(word => word.startsWith(searchInput));
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
    };

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

    currentSearchedCellEnter = (resultId) => {
        this.setState({ hoveredResultId: resultId });
    }

    currentSearchedCellLeave = () => {
        this.setState({ hoveredResultId: null });
    }
    

    render () {
            //* - SIDE BAR MENU VARS - *//
        const { showDocsMenu, menuSubsections, menuOption1, menuOption2, menuOption3, menuOption4, mOption1Gap, mOption2Gap, mOption3Gap, mOption4Gap } = this.state;
            
            //* - DOCK SEARCH BAR VARS - *//
        const { menuDocsHovered, externalDocsHovered, exitDocsHovered, dockSearchBarWidth, dockMenuBtnsPaddingTop, dockSearchBarInputWidth, dockMenuBtnWidth, dockExternalBtnWidth, dockExitBtnWidth } = this.state
            
            //* - POPUP SEARCH BAR VARS - *//
        const { isSearchLoading, groupedOptions, resultsFound, hoveredResultId} = this.state;
        const searchInput = this.state.searchedData.trim().toLowerCase();

            //* - TOGGLE ADJUSTABLE DIMENSION VAR - *//
        const { sidebarMenuClicked } = this.state;
        
            //* - DOUMENTATION PAGES VARS - *//
        const { showDocsHome, showUserManagementDoc, showAPIReference } = this.state;
        const { usrMgmtScrollID } = this.state;
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
                                        <div className='demo-docs-sidebar-subsections'> 
                                            <div style={{top: mOption1Gap, zIndex: menuOption1 ? 1 : 0, backgroundColor: menuOption1 ? "#ECEDFE" : "#f9f9fb" }} className='menuOption1'><p><label onClick={(() => this.menuOptionClicked(1))}>User Management</label></p></div>
                                            <div style={{top: mOption2Gap, zIndex: menuOption2 ? 1 : 0, backgroundColor: menuOption2 ? "#ECEDFE" : "#f9f9fb" }} className='menuOption2'><p><label onClick={(() => this.menuOptionClicked(2))}>Standalone APIs</label></p></div>
                                            <div style={{top: mOption3Gap, zIndex: menuOption3 ? 1 : 0, backgroundColor: menuOption3 ? "#ECEDFE" : "#f9f9fb" }} className='menuOption3'><p><label onClick={(() => this.menuOptionClicked(3))}>Events and webhooks</label></p></div>
                                            <div style={{top: mOption4Gap, zIndex: menuOption4 ? 1 : 0, backgroundColor: menuOption4 ? "#ECEDFE" : "#f9f9fb" }} className='menuOption4'><p><label onClick={(() => this.menuOptionClicked(4))}>Resources</label></p></div>     
                                        </div>
                                    }

                                    <CSSTransition
                                    in={this.state.resourcesDropdown}
                                    timeout={500}
                                    classNames="dialog-slide"
                                    unmountOnExit
                                    >
                                    <div style={{marginTop: "50px"}} className="dropdown-menu">
                                        <NestedDropdown menuItems={SidebarOptions} />
                                    </div>
                                    </CSSTransition>
                                </div>
                            </div>
                    </CSSTransition>

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
                                                            onMouseEnter={() => this.currentSearchedCellEnter(option.id)}
                                                            onMouseLeave={this.currentSearchedCellLeave}
                                                            style={{backgroundColor: hoveredResultId === option.id ? "#F0F1FF" : "transparent", color: hoveredResultId === option.id ? "#1C1C8E" : "black"}} 
                                                            className='searchResultCell' 
                                                            key={option.id}>
                                                                <p className='searchResultOption'>{option.highlightedName}</p>
                                                                <p className='searchResultCategory'>{category} {option.subCat1 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat1}</label> : null } {option.subCat2 ? <label style={{cursor: "pointer"}}>{'>'} {option.subCat2}</label> : null }</p> 
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
                                                            onMouseEnter={() => this.currentSearchedCellEnter(option.id)}
                                                            onMouseLeave={this.currentSearchedCellLeave}
                                                            style={{backgroundColor: hoveredResultId === option.id ? "#F0F1FF" : "transparent", color: hoveredResultId === option.id ? "#1C1C8E" : "black"}} 
                                                            className='searchResultCell' 
                                                            key={option.id}>
                                                                <p className='searchResultOption'>{option.highlightedName}</p>
                                                                <p className='searchResultCategory'>{category} {option.subCat1 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat1}</label> : null } {option.subCat2 ? <label style={{cursor: "pointer"}}>{'>'} {option.subCat2}</label> : null }</p> 
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

                        {/* - - DOCUMENTATION PAGES - -  */}
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
                    {showUserManagementDoc && <UserManagement sidebarMenuClicked={sidebarMenuClicked} scrollToID={usrMgmtScrollID}/>}
                    {showAPIReference && <APIReference sidebarMenuClicked={sidebarMenuClicked}/>}
                    

            </Styles>
        )
    }
}