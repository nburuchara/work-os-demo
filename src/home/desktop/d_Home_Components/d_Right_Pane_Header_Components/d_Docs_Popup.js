import React, {Component} from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';
import DocsSelected from './d_Docs_Selected_Popup'
import ResultsData from "./d_Docs_Results"; // Import options from separate file

const Styles = styled.div  `

        // - - - - - - POPUP CONTAINER - - - - - - //

.popup-container {
    height: 40vh;
    position: absolute;
    width: 22.4%;
    background-color: white;
    border: 0.5px solid #ccc;
    border-radius: 7px;
    padding: 0.75%;
    z-index: 999; /* Set a negative z-index to position it under other elements */
    margin-top: 0.5%;
    margin-left: 0.5%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}

    // - - POPUP CONTAINER ANIMATION - - //

/* CSS Transition Definitions */
.dialog-slide-enter {
    transform: translateY(10%);
    opacity: 0;
}

.dialog-slide-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: transform 500ms, opacity 500ms;
}

.dialog-slide-exit {
    transform: translateY(0);
    opacity: 1;
}

.dialog-slide-exit-active {
    transform: translateY(5%);
    opacity: 0;
    transition: transform 500ms, opacity 500ms;
}


    // - - POPUP HEADER - - //

.popup-docs-header {
    padding-bottom: 1.5%;
}

.popup-docs-header:after {
    content: "";
    display: table;
    clear: both;
}

.popup-docs-search {
    float: left;
    text-align: center;
    width: 75%;
}

.popup-docs-see-all-btn {
    float: left;
    text-align: right;
    width: 25%;
}

    // - POPUP SEARCH BAR - //

.popup-docs-search:after {
    content: "";
    display: table;
    clear: both;
}

.popup-docs-search-icon {
    float: left;
    text-align: center;
    width: 8%;
}

.popup-docs-search-text {
    float: left;
    text-align: left;
    width: 85%;
}

.popup-docs-search-close-icon {
    float: left;
    text-align: left;
    width: 7%;
}

    // # BUTTON CONTAINER
    
.popup-docs-search button {
    cursor: text !important;
    width: 100% !important;
    padding: 0.1em !important;
    padding-right: 0.3em !important;
}

    // # SEARCH ICON

.popup-docs-search-icon img {
    margin-top: 25%;
    width: 75%;
    margin-left: 2.5px;
}

    // # TEXT INPUT

.popup-docs-search-text input {
    margin-top: 1%;
    width: 94.5%;
    font-size: 1em;
    background-color: transparent;
    border: 1px solid transparent;
}

.popup-docs-search-text input:focus {
    outline: none;
}

.popup-docs-search-text input::placeholder {
    color: #43474C;
}

    // # CLOSE ICON & SPAN 

.popup-docs-search-close-icon span {
    background-color: transparent;
    border-radius: 50%;
    padding-top: 15%;
    padding-left: 15%;
    padding-right: 12%;
    cursor: pointer !important;
}

.popup-docs-search-close-icon span:hover  {
    background-color: #ccc;
}

.popup-docs-search-close-icon img {
    margin-top: 35%;
    width: 70%;
    margin-right: 5%;
}

    // - POPUP SEE ALL BUTTON - //

.popup-docs-see-all-btn button {
    width: 90% !important;
    background-color: #6363f1 !important;
    color: white;
    padding: 5% !important;
    font-family: poppins;
    font-size: 70%;
    font-weight: bold;
}

    // - - SEARCH RESULTS - - //

.searchResults {
    overflow-y: auto;
    width: 95%;
    height: 85%;
    border: 1px solid #cccccc;
    border-radius: 7px;
    padding: 2%;
    margin-top: 1.5%;
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

    // - - DOCS HOMESCREEN - - //

.popup-docs-homescreen {
    height: 90%;
    overflow: scroll;
    text-align: left;
    margin-left: 0.75%;
}

.popup-docs-homescreen h4 {
    font-size: 90%;
    margin-top: 3%;
    margin-bottom: 0.5%;
    font-family: poppins;
}

.popup-docs-homescreen h5 {
    font-size: 80%;
    margin-top: 2%;
    margin-bottom: 2%;
    font-family: poppins;
    color: #2e2eff;
}

    // - DOCS HOMESCREEN DROPDOWN - //

.popup-docs-homescreen-dropdown {
    width: 99%;
}

.popup-docs-homescreen-dropdown:after {
    content: "";
    clear: both;
    display: table;
}

.popup-docs-homescreen-dropdown-title {
    float: left;
    text-align: left;
    width: 90%;
}

.popup-docs-homescreen-dropdown-icon {
    float: left;
    text-align: left;
    width: 10%;
}

    // # TEXT (TITLE)

.popup-docs-homescreen-dropdown-title h4 {
  
}

    // # ICON (ARROW)

.popup-docs-homescreen-dropdown-icon img {
    margin-top: 38.5%;
    margin-left: 10%;
    width: 50%;
    cursor: pointer;
}

.popup-docs-dropdown-arrow {
    transition: transform 0.3s ease;
}

.popup-docs-dropdown-arrow-rotated {
    transform: rotate(180deg); /* Rotate the arrow 180 degrees */
}

    // # DROPDOWN SELECTION

.popup-eocs-homescreen-dropdown-selection {
    z-index: -1;
}

.popup-docs-homescreen-dropdown-selection p {
    margin-top: 2%;
    margin-bottom: 0px;
    font-size: 75%;
    color: #5e626a;
    font-family: rubik;
    font-weight: bold;
}

.popup-docs-homescreen-dropdown-selection h5 {
    position: relative;
    cursor: pointer;
    display: inline-block;
    font-size: 80%;
}

.popup-docs-homescreen-dropdown-selection h5::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px; /* Adjust thickness of underline */
    background-color: #2e2eff; /* Adjust color of underline */
    bottom: 0;
    left: 0;
    transition: width 0.3s ease; /* Animation transition */
}

.popup-docs-homescreen-dropdown-selection h5:hover::before {
    width: 102%; /* Expand underline to cover text */
}

    // - POPUP DOCS HOMESCREEN SEPARATOR - //

.popup-docs-home-separator {
    width: 95%;
    border-bottom: 1px solid #ccc;
    margin-top: 2.5%;
    transition: transform 0.5s ease; /* Add transition for smooth animation */
    transform-origin: top; /* Set the transform origin */
}
    
.slide-down {
    transform: translateY(10vh); /* Slide the element down by its own height */
}


    // - DOCS HOMESCREEN OPTION (TO SELECT) - //

.popup-docs-homescreen-option {
    width: 94.5%;
    border: 1px solid #ccc;
    border-radius: 7px;
    cursor: pointer;
    margin-bottom: 3%;
    padding-right: 0.25%;
}

.popup-docs-homescreen-option:hover {
    background-color: #F6F7FF;
    // color: #1C1C8E;
}

.popup-docs-homescreen-option:after {
    content: "";
    display: table;
    clear: both;
}

.popup-docs-homescreen-option-icon {
    float: left;
    text-align: center;
    width: 20%;
}

.popup-docs-homescreen-option-title {
    float: left;
    text-align: left;
    width: 80%;
}

    // # ICON / BUTTON CONTAINER

.popup-docs-homescreen-option-icon button {
    margin-top: 14.5% !important;
    width: 45px !important;
    height: 45px !important;
}

.popup-docs-homescreen-option-icon img {
    width: 30px;
    height: 30px;
}

    // # TEXT

.popup-docs-homescreen-option-title p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: poppins;
}

.docs-homescreen-option-title {
    font-weight: bold;
    padding-top: 2.75%;
    font-size: 77.5%;
}

.docs-homescreen-option-subtitle {
    padding-right: 2%;
    line-height: 1.2em;
    padding-bottom: 5%;
    font-size: 70%;
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

export default class Popup extends Component {
    constructor() {
        super()
        this.state = {

            //* - - POPUP HOMESCREEN - - *//

            showDocsPopupHomescreen: true,
            docsPopupDropdownClicked: false,
            docsSelectionMenu: false,
            userManagementTxtColor: "#2e2eff",
            standAloneApisTxtColor: "black",
            eventsWebhooksTxtColor: "black",
            resourcesTxtColor: "black",
            docsPopupHomeSeparator: true,
            authKitLogoHovered: false,
            enterpriseAuthHovered: false,
            emailAndPasswordLogoHovered: false,
            socialLoginLogoHovered: false,
            multifactorAuthLogoHovered: false,
            magicAuthLogoHovered: false,
            justInTimeLogoHovered: false,
            directoryLogoHovered: false,

            //* - - SEARCH BAR - - *//

            searchedData: "",
            searchCloseBtn: false,
            filteredOptions: [], // Use imported options
            isSearchLoading: false,
            resultsFound: false,
            hoveredResultId: null,
            commandBgColor: "transparent",
            commandTxtColor: "transparent",
            searchBarInFocus: false,

            //* - - DEMO DOCUMENTATION - - *//

            showGetExportDocs: false
        }
        this.trie = new Trie(); // Initialize the trie
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        // Populate the trie with options data
        for (let option of ResultsData) {
            this.trie.insert(option.name.toLowerCase());
        }
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    handleClickOutside = (e) => {
        if (this.inputRef.current && !this.inputRef.current.contains(e.target)) {
            this.setState({searchBarInFocus: false});
        }
    };

    clearSearchBar = () => {
        this.setState({
            searchedData: "",
            searchCloseBtn: false,
            searchBarInFocus: true,
            showDocsPopupHomescreen: true
        })
        this.inputRef.current.focus(); // Keep the input in focus
    }

    searchBarClicked = () => {
        this.inputRef.current.focus();
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

    this.setState({searchedData: e.target.value, isSearchLoading: true, searchCloseBtn: true, showDocsPopupHomescreen: false})
    
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
                    showDocsPopupHomescreen: true
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

    docsDropdownClicked = () => {
        this.setState(prevState => ({
            docsPopupDropdownClicked: !prevState.docsPopupDropdownClicked,
            docsSelectionMenu: !prevState.docsSelectionMenu,
            docsPopupHomeSeparator: !prevState.docsPopupHomeSeparator
        }));
    }

    authKitLogoEnter = () => {this.setState({authKitLogoHovered: true})}

    authKitLogoLeave = () => {this.setState({authKitLogoHovered: false})}

    enterpriseAuthLogoEnter = () => {this.setState({enterpriseAuthHovered: true})}

    enterpriseAuthLogoLeave = () => {this.setState({enterpriseAuthHovered: false})}

    emailAndPasswordEnter = () => {this.setState({emailAndPasswordLogoHovered: true})}

    emailAndPasswordLeave = () => {this.setState({emailAndPasswordLogoHovered: false})}

    socialLoginEnter = () => {this.setState({socialLoginLogoHovered: true})}

    socialLoginLeave = () => {this.setState({socialLoginLogoHovered: false})}

    multifactorAuthEnter = () => {this.setState({multifactorAuthLogoHovered: true})}

    multifactorAuthLeave = () => {this.setState({multifactorAuthLogoHovered: false})}

    magicAuthEnter = () => {this.setState({magicAuthLogoHovered: true})}

    magicAuthLeave = () => {this.setState({magicAuthLogoHovered: false})}

    justInTimeEnter = () => {this.setState({justInTimeLogoHovered: true})}

    justInTimLeave = () => {this.setState({justInTimeLogoHovered: false})}

    directoryEnter = () => {this.setState({directoryLogoHovered: true})}

    directoryLeave = () => {this.setState({directoryLogoHovered: false})}

    render () {
            //* - POPUP SEARCH BAR VARS - *//
        const { isSearchLoading, groupedOptions, resultsFound, hoveredResultId, searchCloseBtn, searchBarInFocus} = this.state;
        const searchInput = this.state.searchedData.trim().toLowerCase();

            //* - POPUP HOMESCREEN VARS - *//
        const { docsPopupDropdownClicked, authKitLogoHovered, enterpriseAuthHovered, emailAndPasswordLogoHovered, socialLoginLogoHovered, multifactorAuthLogoHovered, magicAuthLogoHovered, justInTimeLogoHovered, directoryLogoHovered} = this.state;

        return (
            <Styles>
                {/* <CSSTransition
                in={this.props.isVisibleProp}
                timeout={500}
                classNames="dialog-slide"
                unmountOnExit
                > */}
                    <div className='popup-container'>
                        <div className='popup-docs-header'>
                            <div className='popup-docs-search'>
                                <button
                                onClick={this.searchBarClicked}
                                style={{border: searchBarInFocus ? "1px solid #cccccc" : "1px solid transparent", cursor: "text"}}
                                >
                                    <div className='popup-docs-search-icon'>
                                        <img onClick={this.searchBarClicked} src='/assets/docs_popup_search_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='popup-docs-search-text'>
                                        <input
                                        ref={this.inputRef}
                                        id='searchedData'
                                        type="text"
                                        placeholder='Search the docs...'
                                        value={this.state.searchedData}
                                        onChange={this.handleSearchChange}
                                        onClick={this.searchBarClicked}
                                        />
                                    </div>
                                    <div onClick={this.searchBarClicked} className='popup-docs-search-close-icon'>
                                        {searchCloseBtn && 
                                            <span
                                            onClick={this.clearSearchBar}
                                            >
                                                <img src='/assets/docs_popup_exit_search_icon.png' alt='img not available'/>
                                            </span>
                                        }
                                    </div>
                                </button>
                            </div>
                            <div className='popup-docs-see-all-btn'>
                                <button
                                >All docs</button>
                            </div>
                        </div>
                        {/* <DocsSearchResults/> */}
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
                        {this.state.showDocsPopupHomescreen && 
                            <div className='popup-docs-homescreen'>

                                        {/* - - - - - USER MANAGEMENT - - - - - */}

                                <div className='popup-docs-homescreen-dropdown'>
                                    <div className='popup-docs-homescreen-dropdown-title'><h4>User Management</h4></div>
                                    <div className='popup-docs-homescreen-dropdown-icon'>
                                        <img 
                                        onClick={this.docsDropdownClicked}
                                        className={docsPopupDropdownClicked ? 'popup-docs-dropdown-arrow popup-docs-dropdown-arrow-rotated' : 'popup-docs-dropdown-arrow'}
                                        src='/assets/env_select_dropdown.png' alt='no img available'/>
                                    </div>
                                </div>

                                <CSSTransition
                                in={this.state.docsSelectionMenu}
                                timeout={500}
                                classNames="dialog-slide"
                                unmountOnExit
                                >
                                    <div className='popup-docs-homescreen-dropdown-selection'>
                                        <div style={{width: "95%", borderBottom: "1px solid #2e2eff", marginTop: "1%"}}></div>
                                        <p>Browse docs:</p>
                                        <div><h5 className='popup-dropdown-user-management' style={{color: this.state.userManagementTxtColor}}>User Management</h5></div>
                                        <div><h5 className='popup-dropdown-standalone-apis' style={{color: this.state.standAloneApisTxtColor}}>Standalone APIs</h5></div>
                                        <div><h5 className='popup-dropdown-events-webhooks' style={{color: this.state.eventsWebhooksTxtColor}}>Events and webhooks</h5></div>
                                        <div><h5 className='popup-dropdown-resources' style={{color: this.state.resourcesTxtColor}}>Resources</h5></div>
                                        <div style={{width: "95%", borderBottom: "1px solid #2e2eff", marginTop: "2.5%"}}></div>
                                    </div>
                                    
                                </CSSTransition>
                                
                                {this.state.docsPopupHomeSeparator && 
                                    <div className={`popup-docs-home-separator ${this.state.docsPopupHomeSeparator ? '' : 'slide-down'}`}></div>
                                } 

                                    {/* - - - AUTHENTICATION - - -  */}

                                <h5>Authentication</h5>

                                    {/* - AUTH KIT - */}

                                <div 
                                onMouseEnter={this.authKitLogoEnter}
                                onMouseLeave={this.authKitLogoLeave}
                                className='popup-docs-homescreen-option'>
                                    <div className='popup-docs-homescreen-option-icon'>
                                        <button style={{border: authKitLogoHovered ? "1px solid #ccc" : "1px solid transparent" }}>
                                            <img src={authKitLogoHovered ? '/assets/docs_popup_authkit_icon_color.png' : '/assets/docs_popup_authkit_icon.png' } alt='no img available'/>
                                        </button>
                                    </div>
                                    <div className='popup-docs-homescreen-option-title'>
                                        <p className='docs-homescreen-option-title'>AuthKit</p>
                                        <p className='docs-homescreen-option-subtitle'>Fully customizable for authentication at any size.</p>
                                    </div>
                                </div>

                                    {/* - ENTERPRISE AUTH - */}

                                <div 
                                onMouseEnter={this.enterpriseAuthLogoEnter}
                                onMouseLeave={this.enterpriseAuthLogoLeave}
                                className='popup-docs-homescreen-option'>
                                    <div className='popup-docs-homescreen-option-icon'>
                                        <button style={{border: enterpriseAuthHovered ? "1px solid #ccc" : "1px solid transparent" }}>
                                            <img src={enterpriseAuthHovered ? '/assets/left_pane_authentication_icon_color.png' : '/assets/docs_popup_enterprise_auth_icon.png' } alt='no img available'/>
                                        </button>
                                    </div>
                                    <div className='popup-docs-homescreen-option-title'>
                                        <p className='docs-homescreen-option-title'>Enterprise auth</p>
                                        <p className='docs-homescreen-option-subtitle'>Single sign-on with email verification, identity linking, and auth policies.</p>
                                    </div>
                                </div>

                                    {/* - EMAIL AND PASSWORD - */}

                                <div 
                                onMouseEnter={this.emailAndPasswordEnter}
                                onMouseLeave={this.emailAndPasswordLeave}
                                className='popup-docs-homescreen-option'>
                                    <div className='popup-docs-homescreen-option-icon'>
                                        <button style={{border: emailAndPasswordLogoHovered ? "1px solid #ccc" : "1px solid transparent" }}>
                                            <img src={emailAndPasswordLogoHovered ? '/assets/docs_popup_email_password_icon_color.png' : '/assets/docs_popup_email_password_icon.png' } alt='no img available'/>
                                        </button>
                                    </div>
                                    <div className='popup-docs-homescreen-option-title'>
                                        <p className='docs-homescreen-option-title'>Email + Password</p>
                                        <p className='docs-homescreen-option-subtitle'>Simple and secure sign-in experience for your users.</p>
                                    </div>
                                </div>

                                    {/* - SOCIAL LOGIN - */}

                                <div 
                                onMouseEnter={this.socialLoginEnter}
                                onMouseLeave={this.socialLoginLeave}
                                className='popup-docs-homescreen-option'>
                                    <div className='popup-docs-homescreen-option-icon'>
                                        <button style={{border: socialLoginLogoHovered ? "1px solid #ccc" : "1px solid transparent" }}>
                                            <img style={{width: "25px", height: "25px"}} src={socialLoginLogoHovered ? '/assets/docs_popup_social_login_icon_color.png' : '/assets/docs_popup_social_login_icon.png' } alt='no img available'/>
                                        </button>
                                    </div>
                                    <div className='popup-docs-homescreen-option-title'>
                                        <p className='docs-homescreen-option-title'>Social Login</p>
                                        <p className='docs-homescreen-option-subtitle'>Authenticate users with providers like Google or Microsoft OAuth.</p>
                                    </div>
                                </div>

                                    {/* - MULTI-FACTOR AUTHENTICATION - */}

                                <div 
                                onMouseEnter={this.multifactorAuthEnter}
                                onMouseLeave={this.multifactorAuthLeave}
                                className='popup-docs-homescreen-option'>
                                    <div className='popup-docs-homescreen-option-icon'>
                                        <button style={{border: multifactorAuthLogoHovered ? "1px solid #ccc" : "1px solid transparent" }}>
                                            <img src={multifactorAuthLogoHovered ? '/assets/docs_popup_multi_auth_icon_color.png' : '/assets/docs_popup_multi_auth_icon.png' } alt='no img available'/>
                                        </button>
                                    </div>
                                    <div className='popup-docs-homescreen-option-title'>
                                        <p className='docs-homescreen-option-title'>Multi-Factor Auth</p>
                                        <p className='docs-homescreen-option-subtitle'>Unlock additional authentication factors such as TOTP or SMS.</p>
                                    </div>
                                </div>
                                
                                {/* - MAGIC AUTH - */}

                                <div 
                                onMouseEnter={this.magicAuthEnter}
                                onMouseLeave={this.magicAuthLeave}
                                className='popup-docs-homescreen-option'>
                                    <div className='popup-docs-homescreen-option-icon'>
                                        <button style={{border: magicAuthLogoHovered ? "1px solid #ccc" : "1px solid transparent" }}>
                                            <img style={{width: "25px", height: "25px"}} src={magicAuthLogoHovered ? '/assets/docs_popup_magic_auth_icon_color.png' : '/assets/docs_popup_magic_auth_icon.png' } alt='no img available'/>
                                        </button>
                                    </div>
                                    <div className='popup-docs-homescreen-option-title'>
                                        <p className='docs-homescreen-option-title'>Magic Auth</p>
                                        <p className='docs-homescreen-option-subtitle'>Allow passwordless sign-in with a six-digit code sent via email.</p>
                                    </div>
                                </div>

                                    {/* - - - PROVISIONING - - -  */}

                                    <h5>Provisioning</h5>

                                    {/* - JUST-IN-TIME - */}

                                <div 
                                onMouseEnter={this.justInTimeEnter}
                                onMouseLeave={this.justInTimLeave}
                                className='popup-docs-homescreen-option'>
                                    <div className='popup-docs-homescreen-option-icon'>
                                        <button style={{border: justInTimeLogoHovered ? "1px solid #ccc" : "1px solid transparent" }}>
                                            <img src={justInTimeLogoHovered ? '/assets/docs_popup_just_in_time_icon_color.png' : '/assets/docs_popup_just_in_time_icon.png' } alt='no img available'/>
                                        </button>
                                    </div>
                                    <div className='popup-docs-homescreen-option-title'>
                                        <p className='docs-homescreen-option-title'>Just-in-Time</p>
                                        <p className='docs-homescreen-option-subtitle'>Automatically create user accounts during the first authentication.</p>
                                    </div>
                                </div>

                                    {/* - DIRECTORY - */}

                                <div 
                                onMouseEnter={this.directoryEnter}
                                onMouseLeave={this.directoryLeave}
                                className='popup-docs-homescreen-option'>
                                    <div className='popup-docs-homescreen-option-icon'>
                                        <button style={{border: directoryLogoHovered ? "1px solid #ccc" : "1px solid transparent" }}>
                                            <img style={{width: "25px", height: "25px"}} src={directoryLogoHovered ? '/assets/docs_popup_directory_icon_color.png' : '/assets/docs_popup_directory_icon.png' } alt='no img available'/>
                                        </button>
                                    </div>
                                    <div className='popup-docs-homescreen-option-title'>
                                        <p className='docs-homescreen-option-title'>Directory</p>
                                        <p className='docs-homescreen-option-subtitle'>Create and manage user accounts synced from a directory source.</p>
                                    </div>
                                </div>

                            </div>
                        }
                    </div>
                {/* </CSSTransition> */}
            </Styles>
        )
    }
}