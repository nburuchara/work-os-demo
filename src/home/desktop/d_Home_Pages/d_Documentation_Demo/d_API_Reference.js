import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippetStruct from './d_Documentation_Components/d_Code_Snippet_Structure'
import { hover } from '@testing-library/user-event/dist/hover'
import { CSSTransition } from 'react-transition-group';
import SidebarOptions from './Documentation_Menu_Options'
import NestedDropdown from './d_Documentation_Components/NestedDropdown'
import ResultsData from "../../d_Home_Components/d_Right_Pane_Header_Components/d_Docs_Results"; // Import options from separate file

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
    font-size: 100%;
}

.demo-docs-section h3 {
    font-size: 84%;
    font-family: poppins;
}

.demo-docs-section p {
    font-family: poppins;
    font-size: 80%;
}

    // - DEMO DOCS HYPERLINK (EXTERNAL LINK) - //

    // # LINK

.demo-docs-hyperlink {
    color: #6363f1;
    padding-top: 0.5%;
}

.demo-docs-hyperlink:hover {
    text-decoration: underline;
    color: #6363f1;
    cursor: pointer;
}

    // # ICON

.demo-docs-hyperlink-icon img {
    width: 2.75%;
    margin-left: 0.5%;
    vertical-align: middle;
    padding-bottom: 0.5%;
    cursor: pointer;
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
}

.demo-docs-code-container-header h5 {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 3%;
    padding-bottom: 3%;
    margin-left: 2%;
    font-size: 75%;
}

    // # HEADER (BUTTON CONTAINER)

.demo-docs-code-container-header span {
    margin-top: 1.5%;
    height: 60%;
    width: 5%;
    margin-right: 2.5%;
    border-radius: 50%;
    border: 2px solid transparent; 
    cursor: pointer;
    padding-left: 0.75%;
    padding-right: 0.75%;
    padding-top: 0.25%;
    padding-bottom: 0.25%;
}

    // # HEADER (COPY ICON)
    
.demo-docs-code-container-header img {
    margin-top: 10%;
    margin-left: 10%;
    width: 80.5%;
}

    // # BODY 

.demo-docs-code-container-body p {
    font-family: inconsolata;
    margin-left: 2%;
    margin-top: 2%;
    padding-top: 1.5%;
    padding-bottom: 3.5%;
    margin-bottom: 0px;
}

    // - DEMO DOCS SEPARATOR - //

.demo-docs-separator {
    // text-align: right;
    // margin-top: 10%;
    // margin-bottom: 6.75%;
    // width: 64%;
    // border-bottom: 2px solid transparent;
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
    font-size: 75%;
    margin-bottom: 0px;
    margin-top: 10%;
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

.testing-the-api-info-box img {
    width: 2.75%;
    margin-left: 0.5%;
    vertical-align: middle;
    padding-bottom: 0.5%;
    cursor: pointer;
}

.testing-the-api-info-box p {
    color: #656971;
    font-size: 67.5%;
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
    padding: 3%;
    margin-top: 2%;
}

.errors-cell span {
    padding: 1.75%;
    font-size: 70%;
    font-weight: bold;
    border-radius: 30px;
    font-family: rubik;
    margin-right: 5%;
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

export default class APIReference extends Component {
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

            //* - - DOCUMENTATION CONTENT - - *//
            
            docsCodeBlur: "0px",
            docsContentBlur: "0px",
            codeSnippet1CopyHovered: false,

            //* - - LANGUAGES (for code snippets) - - *//

            currentSelectedLanguage: "javascript",
            curlSelected: false,
            javascriptSelected: false,
            phpSelected: false,
            rubySelected: false,
            laravelSelected: false,
            pythonSelected: false,
            javaSelected: false,
            goSelected: false,
            dotnetSelected: false,
            jsonSelected: false,
            yarnSelected: false,
            bundlerSelected: false,
            gradleSelected: false,

            //* - - ERRORS - - *//

            error_2xx: true,
            error_4xx: true,
            error_5xx: true,
        }

        this.trie = new Trie(); // Initialize the trie
    }



    codeSnippet1CopyEnter = () => {this.setState({codeSnippet1CopyHovered: true})}

    codeSnippet1CopyLeave = () => {this.setState({codeSnippet1CopyHovered: false})}

    newLangSelected = (currentLang) => {
        if (this.state.currentSelectedLanguage === "") {
            this.setState({ 
                [`${currentLang}Selected`]: true,
                currentSelectedLanguage: currentLang,
            })
        } else {
            console.log(currentLang)
            this.setState({
                [`${this.state.currentSelectedLanguage}Selected`]: false 
            }, () => {
                this.setState({
                    [`${currentLang}Selected`]: true,
                    currentSelectedLanguage: currentLang,
                })
            })
        }
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
                docsCodeBlur: "0px",
                docsContentBlur: "0px"
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
                docsCodeBlur: "0px",
                docsContentBlur: "0px"
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

        const { codeSnippet1CopyHovered } = this.state;
        const { javascriptSelected, yarnSelected, phpSelected, rubySelected, bundlerSelected, laravelSelected, pythonSelected, javaSelected, gradleSelected, goSelected, dotnetSelected } = this.state;
        const { error_2xx, error_4xx, error_5xx } = this.state;
        const { showDocsMenu, sidePaneWidth, menuSubsections, menuOption1, menuOption2, menuOption3, menuOption4, mOption1Gap, mOption2Gap, mOption3Gap, mOption4Gap } = this.state;
        const { menuDocsHovered, externalDocsHovered, exitDocsHovered, dockSearchBarWidth, dockMenuBtnsPaddingTop, dockSearchBarInputWidth, dockMenuBtnWidth, dockExternalBtnWidth, dockExitBtnWidth } = this.state
            
            //* - POPUP SEARCH BAR VARS - *//
        const { isSearchLoading, groupedOptions, resultsFound, hoveredResultId, searchCloseBtn, searchBarInFocus} = this.state;
        const searchInput = this.state.searchedData.trim().toLowerCase();

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
                    
                    <div style={{filter: `blur(${this.state.docsCodeBlur})`}} className='demo-docs-container'>
                        <div style={{filter: `blur(${this.state.docsContentBlur})`}} className='demo-docs-section'>
                            <h1 style={{fontSize: "120%", paddingTop: '0%'}}>API Reference</h1>
                            <p>The WorkOS API enables adding Enterprise Ready features to your application. This REST API provides programmatic access to User Management, Single Sign-On, Directory Sync, and Audit Log resources.</p>  
                            <p><label className='demo-docs-hyperlink'>Sign in</label><span className='demo-docs-hyperlink-icon'><img src='/assets/external_link_color.png' alt='no img available'/></span> to see code examples customized with your API keys and data.</p>   
                            <div className='demo-docs-code-container'>
                                <div style={{display: "flex", justifyContent: "space-between"}} className='demo-docs-code-container-header'>
                                    <h5>API Base URL</h5>
                                    <span 
                                    onMouseEnter={this.codeSnippet1CopyEnter}
                                    onMouseLeave={this.codeSnippet1CopyLeave}
                                    style={{backgroundColor: codeSnippet1CopyHovered ? "#e9e9f0": "transparent"}}>
                                        <img src='/assets/demo_doc_copy_icon.png' alt='no img available'/>
                                    </span>
                                </div>
                                <div className='demo-docs-code-container-body'>
                                    <p>https://api.workos.com</p>
                                </div>
                            </div>
                        </div>
                        <div style={{filter: `blur(${this.state.docsContentBlur})`}} className='demo-docs-separator'></div>
                        <div style={{filter: `blur(${this.state.docsContentBlur})`}} className='demo-docs-section'>
                            <h1>Client libraries</h1>
                            <p>WorkOS offers native SDKs in several popular programming languages. Choose one language below to see our API Reference in your application’s language.</p>
                            <div className='demo-docs-languages'>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("javascript")} 
                                    style={{boxShadow: javascriptSelected || yarnSelected ? "0 0 0 2px #6363f1" : "none", border: javascriptSelected || yarnSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{marginTop: "15%"}} src='/assets/docs_api_reference_node_language_icon.png' alt='img not available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p style={{marginBottom: "6.5%"}}>Node.js</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("ruby")}
                                    style={{boxShadow: rubySelected || bundlerSelected ? "0 0 0 2px #6363f1" : "none", border: rubySelected || bundlerSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "43%", paddingBottom: "5%", marginTop: "30%"}} src='/assets/docs_api_reference_ruby_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p style={{marginBottom: "6%"}}>Ruby</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("laravel")}
                                    style={{boxShadow: laravelSelected ? "0 0 0 2px #6363f1" : "none", border: laravelSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "50%", paddingBottom: "5%", marginTop: "30%"}} src='/assets/docs_api_reference_laravel_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p style={{marginBottom: "6.5%"}}>Laravel</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("python")}
                                    style={{boxShadow: pythonSelected ? "0 0 0 2px #6363f1" : "none", border: pythonSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "52%", paddingBottom: "5%", marginTop: "27%"}} src='/assets/docs_api_reference_python_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p style={{marginBottom: "6%"}}>Python</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='demo-docs-languages'>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("php")}
                                    style={{boxShadow: phpSelected ? "0 0 0 2px #6363f1" : "none", border: phpSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "77.5%"}} src='/assets/docs_api_reference_php_language_icon.png' alt='img not available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p style={{marginBottom: "0px"}}>PHP</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("go")}
                                    style={{boxShadow: goSelected ? "0 0 0 2px #6363f1" : "none", border: goSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "78%", marginTop: "15%"}} src='/assets/docs_api_reference_go_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p style={{marginBottom: "2%"}}>Go</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("java")}
                                    style={{boxShadow: javaSelected || gradleSelected ? "0 0 0 2px #6363f1" : "none", border: javaSelected || gradleSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{width: "52%", paddingBottom: "5%", marginTop: "22%"}} src='/assets/docs_api_reference_java_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p style={{marginBottom: "6%"}}>Java</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='demo-docs-language'>
                                    <button 
                                    onClick={() => this.newLangSelected("dotnet")}
                                    style={{boxShadow: dotnetSelected ? "0 0 0 2px #6363f1" : "none", border: dotnetSelected ? "1px solid transparent" : "1px solid #ccc" }}>
                                        <div className='demo-docs-language-container'>
                                            <div className='demo-docs-language-icon'>
                                                <img style={{marginTop: "18%"}} src='/assets/docs_api_reference_net_language_icon.png' alt='no img available'/>
                                            </div>
                                            <div className='demo-docs-language-text'>
                                                <p style={{marginBottom: "6.3%"}}>.NET</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <p style={{color: "#5e626a", fontSize: "80%"}}>Don't see an SDK you need? <label className='client-library-contact-us'>Contact us</label> to request and SDK!</p>
                            <p>Install the SDK using the command below.</p>

                            <CodeSnippetStruct
                            id={0}
                            headerTabs={2}
                            snippet="Install the WorkOS SDK"
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}
                            />
                            
                        </div>
                        <div style={{filter: `blur(${this.state.docsContentBlur})`}} className='demo-docs-separator'></div>
                        <div style={{filter: `blur(${this.state.docsContentBlur})`}} className='demo-docs-section'>
                            <h1>Testing the API</h1>
                            <p>You can test the API directly with cURL, or use the <label className='demo-docs-hyperlink'>Postman collection</label><span className='demo-docs-hyperlink-icon'><img src='/assets/external_link_color.png' alt='no img available'/></span> for convenience.</p>
                            <div className='testing-the-api-info-box'>
                                <p><span style={{marginRight: "2%"}}><img src='/assets/docs_testing_the_api_info_icon.png' alt='no img available'/></span>Check out the <label>guide</label> about the WorkOS API Postman collection to learn more about it.</p>
                            </div>
                        </div>
                        <div style={{filter: `blur(${this.state.docsContentBlur})`}} className='demo-docs-separator'></div>
                        <div style={{filter: `blur(${this.state.docsContentBlur})`}} className='demo-docs-section'>
                            <div className='api-keys'>
                                <h1>API Keys</h1>
                                <p>WorkOS authenticates your API requests using your account’s API keys. API requests made without authentication or using an incorrect key will return a <span>401</span> error. Requests using a valid key but with insufficient permissions will return a <span>403</span> error. All API requests must be made over HTTPS. Any requests made over plain HTTP will fail.</p>
                            </div>

                            <CodeSnippetStruct 
                            id={1}
                            headerTabs={0}
                            snippet="Set API Key" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>
                            
                            <p>You can view and manage your API keys in the <label className='demo-docs-hyperlink'>WorkOS Dashboard</label><span className='demo-docs-hyperlink-icon'><img src='/assets/external_link_color.png' alt='no img available'/></span>.</p>
                            <h3>Secure your API Keys</h3>
                            <div className='api-keys'>
                                <p>API keys can perform any API request to WorkOS. They should be kept secure and private! Be sure to prevent API keys from being made publicly accessible, such as in client-side code, GitHub, unsecured S3 buckets, and so forth. API keys are prefixed with <span>sk_</span>.</p>
                            </div>
                            <h3>In Staging</h3>
                            <p>Your Staging Environment comes with an API key already generated for you. Staging API keys may be viewed as often as they are needed and will appear inline throughout our documentation in code examples if you are logged in to your WorkOS account. API requests will be scoped to the provided key’s Environment.</p>
                            <h3>In Production</h3>
                            <p>Once you unlock Production access you will need to generate an API Key for it. Production API keys may only be viewed once and will need to be saved in a secure location upon creation of them.</p>
                        </div>
                        <div style={{filter: `blur(${this.state.docsContentBlur})`}} className='demo-docs-separator'></div>
                        <div style={{filter: `blur(${this.state.docsContentBlur})`}} className='demo-docs-section'>
                            <h1>Errors</h1>
                            <p>WorkOS uses standard HTTP response codes to indicate the success or failure of your API requests.</p>
                            <div className='errors'>
                                <div className='errors-cell'>
                                    <span style={{backgroundColor: error_2xx ? "#d8eaed" : "", color: error_2xx ? "#00815c" : ""}}>200</span><label>Successful request.</label>
                                </div>
                                <div className='errors-cell' style={{display: "flex", alignItems: "flex-start"}}>
                                    <span style={{backgroundColor: error_4xx ? "#fcf5c0" : "", color: error_2xx ? "#a06e00" : ""}}>400</span><label style={{marginTop: "0px"}}>The request was not acceptable. Check that the parameters were correct.</label>
                                </div>
                                <div className='errors-cell'>
                                    <span style={{backgroundColor: error_4xx ? "#fcf5c0" : "", color: error_2xx ? "#a06e00" : ""}}>401</span><label>The API key used was invalid.</label>
                                </div>
                                <div className='errors-cell' style={{display: "flex", alignItems: "flex-start"}}>
                                    <span style={{backgroundColor: error_4xx ? "#fcf5c0" : "", color: error_2xx ? "#a06e00" : ""}}>403</span><label style={{marginTop: "0px"}}>The API key used did not have the correct permissions.</label>
                                </div>
                                <div className='errors-cell'>
                                    <span style={{backgroundColor: error_4xx ? "#fcf5c0" : "", color: error_2xx ? "#a06e00" : ""}}>404</span><label>The resource was not found.</label>
                                </div>
                                <div className='errors-cell'  style={{display: "flex", alignItems: "flex-start"}}>
                                    <span style={{backgroundColor: error_4xx ? "#fcf5c0" : "", color: error_2xx ? "#a06e00" : ""}}>422</span><label style={{marginTop: "0px"}}>Validation failed for the request. Check that the parameters were correct.</label>
                                </div>
                                <div className='errors-cell'>
                                    <span style={{backgroundColor: error_4xx ? "#fcf5c0" : "", color: error_2xx ? "#a06e00" : ""}}>422</span><label>Too many requests. Refer to the <span className='inline-errors-cell-span'>Rate Limits</span> section.</label>
                                </div>
                                <div className='errors-cell'>
                                    <span style={{backgroundColor: error_5xx ? "#feeaed" : "", color: error_2xx ? "#ce3358" : ""}}>5xx</span><label>Indicates an error with WorkOS servers</label>
                                </div>
                            </div>
                        </div>
                        <div style={{filter: `blur(${this.state.docsContentBlur})`}} className='demo-docs-separator'></div>
                        <div style={{filter: `blur(${this.state.docsContentBlur})`}} className='demo-docs-section'>
                            <h1>Pagination</h1>
                            <div className='api-keys'>
                                <p>Many top-level resources have support for bulk fetches via list API methods. For instance, you can <label className='demo-docs-hyperlink'>list connections</label>, <label className='demo-docs-hyperlink'>list directory users</label>, and <label className='demo-docs-hyperlink'>list directory groups</label>. These list API methods share a common structure, taking at least these four parameters: <span>limit</span>, <span>order</span>, <span>after</span>, and  <span>before</span></p>
                                <p>WorkOS utilizes pagination via the <span>after</span> and <span>before</span> Both parameters take an existing object ID value and return objects in either descending or ascending order by creation time.</p>
                            </div>
                            <CodeSnippetStruct 
                            id={2}
                            headerTabs={0}
                            snippet="Pagination" 
                            updateSelectedLang={this.newLangSelected}
                            selectedLang={this.state.currentSelectedLanguage}/>
                        </div>
                        <div style={{filter: `blur(${this.state.docsContentBlur})`}} className='demo-docs-separator'></div>
                        <div style={{filter: `blur(${this.state.docsContentBlur})`}} className='demo-docs-section'>
                            <h1>rest of the docs ...</h1>
                        </div>
                    </div>
            </Styles>
        )
    }
}