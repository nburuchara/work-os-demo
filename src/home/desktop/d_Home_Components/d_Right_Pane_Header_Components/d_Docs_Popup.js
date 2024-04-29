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
    text-align: center;
    width: 92%;
}

    // # BUTTON 
    
.popup-docs-search button {
    width: 100% !important;
    padding: 0.1em !important;
}

    // # ICON

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
    width: 75%;
    height: auto;
    border: 1px solid #cccccc;
    margin-top: 1.5%;
    border-radius: 7px;
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
            filteredOptions: [], // Use imported options
            isSearchLoading: false,
            resultsFound: false
        }
        this.trie = new Trie(); // Initialize the trie
    }

    componentDidMount() {
        // Populate the trie with options data
        for (let option of ResultsData) {
            this.trie.insert(option.name.toLowerCase());
        }
    }

    groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
            (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
            return result;
        }, {});
    }

    handleSearchChange = (e) => {
        const searchInput = e.target.value.toLowerCase();
        if (searchInput.trim() === "") {
            // Reset filteredOptions and loading state
            this.setState({
                searchedData: "",
                filteredOptions: [],
                isSearchLoading: false,
                resultsFound: false
            });
        } else {
            // Show loading screen and start search
            this.setState({ isSearchLoading: true, searchedData: e.target.value}, () => {
                setTimeout(() => {
                    const filteredOptions = ResultsData.filter(option => {
                        const words = option.name.toLowerCase().split(" ");
                        return words.some(word => word.startsWith(searchInput));
                    });

                    const resultsFound = filteredOptions.length > 0; // Check if any results were found

                    const groupedResults = this.groupBy(filteredOptions, 'category');
                
                    // Construct trie for each category
                    const trieByCategory = {};
                    Object.entries(groupedResults).forEach(([category, options]) => {
                        trieByCategory[category] = new Trie();
                        options.forEach(option => {
                            trieByCategory[category].insert(option.name.toLowerCase());
                        });
                    });
                    
                    this.setState({
                        trieByCategory,
                        groupedOptions: groupedResults,
                        filteredOptions,
                        isSearchLoading: false, // Hide loading screen
                        resultsFound: resultsFound
                    });
                }, 1000); // Simulated delay of 1 second
            });
        }
    };

    render () {
        const { isSearchLoading, groupedOptions, resultsFound } = this.state;
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
                                <button>
                                    <div className='popup-docs-search-icon'>
                                        <img src='/assets/docs_popup_search_icon.png' alt='no img available'/>
                                    </div>
                                    <div className='popup-docs-search-text'>
                                        <input
                                        id='searchedData'
                                        type="text"
                                        value={this.state.searchedData}
                                        onChange={this.handleSearchChange}
                                        />
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
                                        // alert(options),
                                        <div key={category}>
                                            <h2>{category}</h2>
                                            {options.map(option => (
                                                <div key={option.id}>{option.name}</div>
                                            ))}
                                        </div>
                                    ))
                                }
                                {!isSearchLoading && !resultsFound && 
                                    <p>no results found</p>
                                }
                            </div>
                        )}
                    </div>
                {/* </CSSTransition> */}
            </Styles>
        )
    }
}