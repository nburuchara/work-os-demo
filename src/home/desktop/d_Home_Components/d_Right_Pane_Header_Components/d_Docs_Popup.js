import React, {Component} from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';
import DocsSearchResults from './d_Docs_Search_Results_Popup'
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.20);
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
    transform: translateY(10%);
    opacity: 0;
    transition: transform 500ms, opacity 500ms;
}


    // - - POPUP HEADER - - //

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

    // # BUTTON 
    
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

    // # INPUT

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

    // # CLOSE ICON & SPAN 

.popup-docs-search-close-icon span {
    background-color: transparent;
    border-radius: 50%;
    padding-top: 15%;
    padding-left: 15%;
    padding-right: 12%;
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

    // - CODE SNIPPET SEARCH RESULT - //

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

    // # COMMAND 

.codeSnippetCommand span {
    font-size: 30%;
    padding: 12%;
    // margin-top: 50%;
    border-radius: 7px;
    font-weight: bold;
}

    // # LINE

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
            searchedData: "",
            searchCloseBtn: false,
            filteredOptions: [], // Use imported options
            isSearchLoading: false,
            resultsFound: false,
            hoveredResultId: null,
            commandBgColor: "transparent",
            commandTxtColor: "transparent",
            searchBarInFocus: false
        }
        this.trie = new Trie(); // Initialize the trie
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        // Populate the trie with options data
        for (let option of ResultsData) {
            this.trie.insert(option.name.toLowerCase());
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
        document.addEventListener('click', this.handleClickOutside);
    }

    handleClickOutside = (e) => {
        if (this.inputRef.current && !this.inputRef.current.contains(e.target)) {
            this.setState({searchBarInFocus: false});
        }
    };

    clearSearchBar = () => {
        this.setState({
            searchedData: "",
            searchCloseBtn: false
        })
        this.inputRef.current.focus(); // Keep the input in focus
    }

    searchBarClicked = () => {
        this.setState({
            searchBarInFocus: true
        })
        this.inputRef.current.focus();
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

    this.setState({searchedData: e.target.value, isSearchLoading: true, searchCloseBtn: true})
    
        // Set a new timeout to execute after 500ms
        this.searchTimeout = setTimeout(() => {
            if (searchInput.trim() === "") {
                // Reset filteredOptions and loading state
                this.setState({
                    searchedData: "",
                    searchCloseBtn: false,
                    filteredOptions: [],
                    isSearchLoading: false,
                    resultsFound: false
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
        const { isSearchLoading, groupedOptions, resultsFound, hoveredResultId, searchCloseBtn, searchBarInFocus} = this.state;
        const searchInput = this.state.searchedData.trim().toLowerCase();
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
                                        <img src='/assets/docs_popup_search_icon.png' alt='no img available'/>
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
                                    <div className='popup-docs-search-close-icon'>
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
                    </div>
                {/* </CSSTransition> */}
            </Styles>
        )
    }
}