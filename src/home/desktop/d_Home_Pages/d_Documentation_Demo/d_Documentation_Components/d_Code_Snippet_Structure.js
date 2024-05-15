import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippets from './CodeSnippets'


const DropdownContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const SelectButtonResponse = styled.button`
  background-color: transparent;
  margin-top: 5%;
  border: none;
  padding: 5%;
  padding-left: 8.5%;
  padding-right: 8.5%;
  cursor: default;
  font-family: poppins;
  border-radius: 7px;
  font-size: 75%;
`;

const DropdownContent = styled.div`
  width: 100%;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  margin-top: 5%;
  bottom: calc(-100%); /* Adjust the distance from the button */
  left: 0;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 8px;
  padding: 3%;
`;

const DropdownItem = styled.div`
  position: relative;
  padding: 5px;
  padding-left: 7.5px;
  padding-right: 7.5px;
  cursor: pointer;
  &:hover {
    background-color: #e6e7ff; /* Change to your desired highlight color */
  }
  border-radius: 5px;
`;

const TickImage = styled.img`
  width: 10%;
  position: absolute;
  left: 7.5px; /* Adjust this value to position the tick image */
  top: 50%;
  transform: translateY(-50%);
  display: ${props => (props.isSelected ? 'block' : 'none')};
`;

const Styles = styled.div `

        // - - - - - - CODE SNIPPET CONTAINER - - - - - - //

.code-snippet-container {
  
}

  // - - CODE HEADER - - //

.code-snippet-header {
  background-color: #f8f8fb;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.code-snippet-header:after {
  content: "";
  display: table;
  clear: both;
}

.code-snippet-title {
  float: left;
  text-align: left;
  width: 70%;
}

.code-snippet-language {
  float: left;
  text-align: right;
  width: 20%;
  position: relative;
  padding-top: 0.85%;
  display: inline-block;
}

.code-snippet-copy {
  float: right;
  text-align: right;
  width: 10%;
}

  // # TITLE 

.code-snippet-title h5 {
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: 75%;
}

  // # HEADER LANGUAGE 

.code-snippet-language p {
  text-align: left !important;
  margin-left: 20% !important;
  font-size: 70% !important;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

.code-snippet-language-sidebar-p {
  text-align: right !important;
  margin-left: 0% !important;
  font-size: 60% !important;

}
  
  // # HEADER (BUTTON CONTAINER)

.code-snippet-copy button {
    padding: 2%;
    margin-left: 2.5%;
    margin-top: 8.5%;
    height: 70% !important;
    width: 55%;
    padding-top: 10%;
    margin-right: 19% !important;
    border-radius: 50% !important;
    border: 2px solid transparent!important; 
    cursor: pointer !important;
}

.code-snippet-copy-sidebar-button {
  width: 72% !important;
  margin-top: 19.5% !important;
  padding-top: 0% !important;
}

    // # HEADER (COPY ICON)
    
.code-snippet-copy img {
    margin-top: 0%;
    width: 62.5% !important;
}

.code-snippet-copy-sidebar-img {
  margin-top: 20% !important;
}

  // - - CODE DOUBLE HEADER - - //


.code-double-header {
  width: 60%;
  height: 100%;
}

.code-double-header:after {
  content: "";
  display: table;
  clear: both;
}

.code-header-request {
  float: left; 
  text-align: center;
  width: 50%;
  // padding-bottom: 0.5%;
  border-bottom: 2px solid #2e2eff;
  height: 4.5vh;
}

.code-header-response {
  float: left; 
  text-align: center;
  width: 50%;
  // padding-bottom: 0.5%;
  border-bottom: 2px solid #2e2eff;
  height: 4.5vh;
}

  // # REQUEST (BUTTON) CONTAINER

.code-header-request button {
  width: 90%;
  margin-top: 6.5%;
  padding: 2%;
  font-family: poppins;
  font-size: 75%;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 7px;
  cursor: pointer;
}

.code-header-request-sidebar-button {
  width: 100% !important;
  margin-top: 8.5% !important;
  padding-top: 5% !important;
  margin-left: 4% !important;
  padding-bottom: 5% !important;
  font-size: 65.5% !important;
}

.code-header-request button:hover {
  background-color: #e9e9f0;
}

  // # RESPONSE (BUTTON) CONTAINER

.code-header-response button {
  width: 90%;
  margin-top: 6.5%;
  padding: 2%;
  font-family: poppins;
  font-size: 75%;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 7px;
  cursor: pointer;
}

.code-header-response-sidebar-button {
  width: 100% !important;
  margin-top: 8.5% !important;
  padding-top: 5% !important;
  margin-left: 4% !important;
  padding-bottom: 5% !important;
  font-size: 65.5% !important;
}

.code-header-response button:hover {
  background-color: #e9e9f0;
}

  // - - CODE BODY - - //

.code-snippet-body {
  border: 1px solid #ccc;
  padding: 1%;
  padding-top: 2%;
  padding-bottom: 2%;
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
}

.code-snippet-body p {
  margin-top: 0.5%;
  margin-bottom: 0.5%;
  font-size: 80% !important;
}

.code-snippet-body-sidebar-p {
  margin-top: 1% !important;
  margin-bottom: 1% !important;
}

.code-snippet-body pre {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

  // - - REPLACE API POPUP - - //

.replace-api-popup {
  height: auto !important;
  position: absolute;
  width: auto !important;
  max-width: 65% !important;
  background-color: white;
  border: 0.5px solid #6363f1 !important; 
  border-radius: 7px;
  padding: 1.5%;
  z-index: 2; /* Set a negative z-index to position it under other elements */
  margin-top: 0%;
  // margin-right: 0.5% !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1) !important;
  overflowX: scroll;
}

.replace-api-popup span {
  background-color: #ededf1;
}

.replace-api-popup img {
  width: 12px;
  height: 12px;
  margin-bottom: 0px;
  margin-top: 0px;
}

.replace-api-popup p {
  padding-top: 3% !important;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  font-size: 70% !important;
}

.replace-api-popup label:hover {
  text-decoration: underline:
  cursor: pointer;
}

  // - - SELECTED API EXPLAINER POPUP - - //

.selected-api-explainer span {
  background-color: transparent;
}

.selected-api-explainer p {
  font-size: 80% !important;
}

`

export default class CodeSnippet extends Component {
    constructor() {
        super() 
        this.state = {
            headerSections: 0,
            linesOfCode: 5,
            requestSelected: true,
            responseSelected: false,
            copySnippetHovered: false,
            tab1Selected: true,
            tab2Selected: false,
            isOpen: false,
            replaceApiPopup: false,
            replaceApiClientPopup:false,
            apiLabelHovered: false,
            selectedOption: null,
            prevLangSelected: "",
            showJSONTab: false,
            selectedDropdownLanguage: "JavaScript",
            options: [
              {id: 'curl', lang: 'cURL'}, 
              {id: 'javascript', lang:'JavaScript'}, 
              {id: 'ruby', lang:'Ruby'}, 
              {id: 'python', lang:'Python'}, 
              {id: 'go', lang:'Go'}, 
              {id: 'php', lang:'PHP'}, 
              {id: 'laravel', lang:'Laravel'}, 
              {id: 'java', lang:'Java'}, 
              {id: 'dotnet', lang:'.NET'}
            ],
            showRequestCode: false,
            showReponseCode: false,

            //* - - API HYPERLINKS - - *//
            secretKeyApiPopup: false,
            apiExplainerPopup: false,
            currentApiExplainer: ""
        }
    }

    componentDidMount = () => {
      document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount = () => {
      document.removeEventListener('click', this.handleClickOutside);
    }

    componentDidUpdate(prevProps) {
      // Check if selectedLang prop has changed
      if (this.props.selectedLang !== prevProps.selectedLang) {
        // Find the option object corresponding to the selectedLang id
        const selectedOption = this.state.options.find(option => option.id === this.props.selectedLang);
        if (selectedOption) {
          this.selectOption(selectedOption, selectedOption.id, selectedOption.lang)
        }
      }
    }

    handleClickOutside = (event) => {
      const dropdownContainer = document.getElementById('dropdown-container');
      const button = document.getElementById('dropdown-button'); // Add id to the button

      // Check if the click occurred outside the dropdown container and the button,
      // unless toggleDropdown was clicked (isOpen remains true in that case)
      if (dropdownContainer && button && !dropdownContainer.contains(event.target) && !button.contains(event.target) && !this.state.isOpen) {
        this.setState({ isOpen: false });
      }
    }

    codeSnippetCopyEnter = () => {
      this.setState({copySnippetHovered: true})
    }

    codeSnippetCopyLeave = () => {
      this.setState({copySnippetHovered: false})
    }

    toggleDropdown = (id) => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }));
    }
  
    selectOption = (option, id, language) => {
      this.setState({
        selectedOption: option,
        selectedDropdownLanguage: language,
        tab1Selected: true,
        tab2Selected: false,
        isOpen: false
      });
      this.props.updateSelectedLang(id)
    }

    requestCallClicked = () => {
      if (this.state.showJSONTab === true) {
        this.setState({requestSelected: true, showJSONTab: false})
      }
      this.setState({
        tab1Selected: true,
        tab2Selected: false
      })
      console.log(this.state.prevLangSelected)
      this.props.updateSelectedLang(this.state.prevLangSelected)
    }

    responseCallClicked = (secondLang) => {
      if (secondLang === "Response") {
        this.setState({
          tab1Selected: false,
          tab2Selected: true,
          prevLangSelected: this.props.selectedLang
        }, () => {
            secondLang = "json"
            this.setState({
              showJSONTab: true,
              requestSelected: false
            })
            this.props.updateSelectedLang(secondLang)
        })
      } else {
        this.setState({
          tab1Selected: false,
          tab2Selected: true,
          prevLangSelected: this.props.selectedLang
        }, () => {
          this.props.updateSelectedLang(secondLang.toLowerCase().replace(/[^\w]/g, ''))
        })
      }
    }

    handleApiKeyEnter = (event) => {
      const target = event.target;
      const skRegex = /sk_\w+/; // Regular expression to match "sk_..." pattern
      const clientRegex = /^client_\w+/; // Regular expression to match "client_..." pattern at the beginning of the string
      const listRegex = /\blist\w*/; // Regular expression to match "list..." pattern at the beginning of the string
      const userRegex = /\buser\w*/; // Regular expression to match "user..." pattern at the beginning of the string
      const listConnectionRegex = /\blistConnection\w*/; // Regular expression to match "listConnection..." pattern at the beginning of the string
      const list_connectionRegex = /\blist_connections\w*/; // Regular expression to match "list_connection..." pattern at the beginning of the string
      const ListConnectionRegex = /\bListConnections\w*/; // Regular expression to match "ListConnection..." pattern at the beginning of the string
      const list_metadataRegex = /\blist_metadata\w*/; // Regular expression to match "list_metadata..." pattern at the beginning of the string
      const ListMetadataRegex = /\bListMetadata\w*/; // Regular expression to match "ListMetadata..." pattern at the beginning of the string
      const listMetadataRegex = /\blistMetadata\w*/; // Regular expression to match "listMetadata..." pattern at the beginning of the string
      const current_pageRegex = /\bcurrent_page\w*/; // Regular expression to match "current_page..." pattern at the beginning of the string
      const currentPageRegex = /\bcurrentPage\w*/; // Regular expression to match "currentPage..." pattern at the beginning of the string
      const responseRegex = /\bresponse\b/; // Regular expression to match "response..." pattern at the beginning of the string
      const getAuthorizationUrlRegex = /\bgetAuthorizationUrl\w*/; // Regular expression to match "getAuthorizationUrl" pattern at the beginning of the string
      const getUserRegex = /\bgetUser\w*/; // Regular expression to match "getUser" pattern at the beginning of the string
      const getSignInUrlRegex = /\bgetSignInUrl\w*/; // Regular expression to match "getUser" pattern at the beginning of the string
      const signOutRegex = /\bsignOut\w*/; // Regular expression to match "getUser" pattern at the beginning of the string
      const authenticateWithCodeRegex = /\bauthenticateWithCode\w*/; // Regular expression to match "authenticateWithCode" pattern at the beginning of the string
      
      if (skRegex.test(target.innerText)) {
        this.setState({replaceApiPopup: true, secretKeyApiPopup: true, replaceApiClientPopup: false, apiExplainerPopup: false});
      } else if (clientRegex.test(target.innerText)) {
        this.setState({replaceApiClientPopup: true, replaceApiPopup: false, secretKeyApiPopup: false, apiExplainerPopup: false})
      } else if (listConnectionRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `listConnections_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (list_connectionRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `list_connections_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (ListConnectionRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `ListConnections_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (listRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `list_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (list_metadataRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `list_metadata_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (current_pageRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `current_page_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (responseRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `response_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (ListMetadataRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `ListMetadata_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (currentPageRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `currentPage_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (listMetadataRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `listMetadata_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (getAuthorizationUrlRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `getAuthorizationUrl_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (getUserRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `getUser_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (getSignInUrlRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `getSignInUrl_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (signOutRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `signOut_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (userRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `user_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      } else if (authenticateWithCodeRegex.test(target.innerText)) {
        this.setState({currentApiExplainer: `authenticateWithCode_${this.props.selectedLang}`,replaceApiPopup: true,secretKeyApiPopup: false
        }, () => { this.setState({apiExplainerPopup: true})})
      }
      setTimeout(() => {
        this.scrollToApiPopup()
      }, 500)
    }    

    handleApiKeyLeave = () => {
     this.setState({replaceApiPopup: false, replaceApiClientPopup: false, secretKeyApiPopup: false, apiExplainerPopup: false})
    }

    scrollToApiPopup = () => {
      const element = document.getElementById('code-snippet-body');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    handleApiLabelEnter = () => {this.setState({apiLabelHovered: true})}

    handleApiLabelLeave = () => {this.setState({apiLabelHovered: false})}


    render () {

      const SelectButtonRequest = styled.button`
          background-color: transparent;
          margin-top: 5%;
          border: none;
          padding: 5%;
          padding-left: 8.5%;
          padding-right: 8.5%;
          cursor:  ${this.props.dropdownDisabledAndHidden ? "default" : "pointer"};
          font-family: poppins;
          border-radius: 7px;
          font-size: 75%;
          &:hover {
            background-color: ${this.props.dropdownDisabledAndHidden ? "transparent" : "#eaeaef"} ;
          }
      `;

        const { tab1Selected, tab2Selected, requestSelected, isOpen, selectedOption, options, replaceApiPopup, replaceApiClientPopup,  apiLabelHovered } = this.state;
        const { id, snippet, sideBarOpen, dropdownDisabledAndHidden } = this.props;
        const selectedSnippet = CodeSnippets.find((item) => item.id === id && item.title === snippet);
        const { secretKeyApiPopup, apiExplainerPopup, currentApiExplainer } = this.state;

        if (!selectedSnippet) {
          return <div>Snippet not found.</div>;
        }
    
        const selectedLang = this.props.selectedLang.toLowerCase(); // Assuming selectedLang is in lowercase
        const codeForSelectedLang = selectedSnippet.code[selectedLang];

        let selectedApiExplainer = null
        
        if (currentApiExplainer !== "") {
          selectedApiExplainer = selectedSnippet.apiEpxlainers[currentApiExplainer]
        }
        
        // if (!selectedApiExplainer) {
        //   return <div><p>No API explanation</p></div>
        // }
    
        if (!codeForSelectedLang) {
          return <div><p style={{color: "#6363f1", fontWeight: "bold"}}>Code snippet not available for: <label style={{color: "black"}}>{this.props.selectedLang.charAt(0).toUpperCase() + this.props.selectedLang.slice(1)}</label>.</p></div>;
        }

        return (
            <Styles>
                <div className='code-snippet-container'>
                    <div className='code-snippet-header'>
                      <div className='code-snippet-title'>
                        {selectedSnippet && selectedSnippet.doubleHeaders && selectedSnippet.doubleHeaders[this.props.selectedLang.toLowerCase()] ? (
                          <div style={{width: sideBarOpen ? "60%" : "47.5%"}} className='code-double-header'>
                            <div 
                            style={{borderBottom: tab1Selected ? "2px solid #2e2eff" : "1px solid transparent"}}
                            className='code-header-request'>
                              <button
                              className={sideBarOpen ? "code-header-request-sidebar-button" : ""}
                              style={{fontWeight: tab1Selected ? "bold" : "normal" , color: tab1Selected ? "#000" : "#5e626a" }}
                              onClick={this.requestCallClicked}
                              >
                                {selectedSnippet.doubleHeaders[this.props.selectedLang.toLowerCase()][0] === 'request' ? 
                                  (
                                    <span>Request</span>
                                  ) : 
                                  (
                                    <span>
                                      {selectedSnippet && selectedSnippet.doubleHeaders && selectedSnippet.doubleHeaders[this.props.selectedLang.toLowerCase()] &&
                                        selectedSnippet.doubleHeaders[this.props.selectedLang.toLowerCase()][0].lang1
                                      }
                                    </span>
                                  )
                                }
                              </button>
                            </div>
                            <div 
                            style={{borderBottom: tab2Selected ? "2px solid #2e2eff" : "1px solid transparent"}}
                            className='code-header-response'>
                              <button
                              className={sideBarOpen ? "code-header-response-sidebar-button" : ""}
                              style={{fontWeight: tab2Selected ? "bold" : "normal" , color: tab2Selected ? "#000" : "#5e626a" }}
                              onClick={() => this.responseCallClicked(selectedSnippet.doubleHeaders[this.props.selectedLang.toLowerCase()][0].lang2)}
                              >
                                {selectedSnippet.doubleHeaders[this.props.selectedLang.toLowerCase()][0] === 'request' ? 
                                  (
                                    <span>Response</span>
                                  ) : 
                                  (
                                    <span>
                                      {selectedSnippet && selectedSnippet.doubleHeaders && selectedSnippet.doubleHeaders[this.props.selectedLang.toLowerCase()] &&
                                        selectedSnippet.doubleHeaders[this.props.selectedLang.toLowerCase()][0].lang2
                                      }
                                    </span>
                                  )
                                }
                              </button>
                            </div>
                          </div>
                        ) : (
                          <h5 style={{ fontSize: sideBarOpen ? "75%" : "100%", paddingTop: sideBarOpen ? "2%": "0%" , paddingBottom: sideBarOpen ? "2%" : "0%"}}>{this.props.snippet}</h5>
                        )}
                      </div>
                      <div style={{paddingTop: sideBarOpen ? "0.85%" : "0%"}} className='code-snippet-language' id="dropdown-container">
                        {requestSelected && 
                          <DropdownContainer id={`dropdown-container-${this.props.id}`}>
                            <SelectButtonRequest style={{fontSize: "70%", color: dropdownDisabledAndHidden ? "transparent" : "black"}} id="dropdown-button" onClick={this.toggleDropdown} disabled={this.props.dropdownDisabled ? true : false}>{this.state.selectedDropdownLanguage}</SelectButtonRequest>
                            <DropdownContent style={{width: sideBarOpen ? "135%" : "100%"}} isOpen={isOpen}>
                              {options.map(option => (
                                <DropdownItem
                                  style={{paddingRight: sideBarOpen ? "5px": "0%"}}
                                  key={option.id}
                                  onClick={() => this.selectOption(option, option.id, option.lang)}
                                >
                                  <TickImage
                                    src="/assets/docs_code_snippet_checkmark_icon.png" // Path to your tick image
                                    alt="no img available"
                                    isSelected={selectedOption && selectedOption.id === option.id}
                                  />
                                  <p className={sideBarOpen ? "code-snippet-language-sidebar-p" : ""}>{option.lang}</p>
                                </DropdownItem>
                              ))}
                            </DropdownContent>
                          </DropdownContainer>
                        }
                        {this.state.showJSONTab && 
                          <SelectButtonResponse>JSON</SelectButtonResponse>
                        }
                      </div>
                      <div style={{float: sideBarOpen ? "right" : "left", textAlign: sideBarOpen ? "right" : "center"}} className='code-snippet-copy'>
                        <button 
                        className={sideBarOpen ? "code-snippet-copy-sidebar-button" : ""}
                        onMouseEnter={this.codeSnippetCopyEnter}
                        onMouseLeave={this.codeSnippetCopyLeave}
                        style={{backgroundColor: this.state.copySnippetHovered ? "#e9e9f0": "transparent"}}>
                            <span><img className={sideBarOpen ? "code-snippet-copy-sidebar-img" : ""} src='/assets/demo_doc_copy_icon.png' alt='no img available'/></span>
                        </button>
                      </div>
                    </div>
                    <div className='code-snippet-body'>
                        {replaceApiPopup && 
                          <div id="code-snippet-body" className='replace-api-popup'>
                            <img onClick={this.handleApiKeyLeave} style={{float: "right", cursor: "pointer"}} src='assets/docs_popup_exit_search_icon.png' alt='no img avilable'/>
                            {secretKeyApiPopup && <p>Replace this with your secret key found on the <label onMouseEnter={this.handleApiLabelEnter} onMouseLeave={this.handleApiLabelLeave} style={{color: "#6363f1", textDecoration: apiLabelHovered ? "underline": "none", cursor: apiLabelHovered ? 'pointer': 'default'}}>API Keys</label> page in the dashboard.</p>}
                            {apiExplainerPopup && 
                              <div className='selected-api-explainer'>
                                {selectedApiExplainer.map((line, index) => {
                                  return(
                                    <pre key={index} style={{ fontFamily: 'inconsolata', whiteSpace: 'pre-wrap' }}>
                                      <p 
                                      style={{fontSize: "80%", fontFamily: "inconsolata"}} 
                                      dangerouslySetInnerHTML={{ __html: line }}>
                                      </p>
                                    </pre>
                                  )
                                })}
                              </div>
                            }
                          </div>
                        }
                        {replaceApiClientPopup && 
                          <div id="code-snippet-body" className='replace-api-popup'>
                            <img onClick={this.handleApiKeyLeave} style={{float: "right", cursor: "pointer"}} src='assets/docs_popup_exit_search_icon.png' alt='no img avilable'/>
                            <p>Replace this with your client ID found on the <label onMouseEnter={this.handleApiLabelEnter} onMouseLeave={this.handleApiLabelLeave} style={{color: "#6363f1", textDecoration: apiLabelHovered ? "underline": "none", cursor: apiLabelHovered ? 'pointer': 'default'}}>API Keys</label> page in the dashboard.</p>
                          </div>
                        }
                      <div>
                        {codeForSelectedLang.map((line, index) => (
                            <pre key={index} style={{ fontFamily: 'inconsolata', whiteSpace: 'pre-wrap', overflow:"scroll"}}>
                              <p 
                              className={sideBarOpen ? "code-snippet-body-sidebar-p" : ""}
                              style={{fontSize: "60%", fontFamily: "inconsolata"}} 
                              dangerouslySetInnerHTML={{ __html: line }}
                              onClick={this.handleApiKeyEnter}
                              >
                              </p>
                            </pre>
                        ))}
                      </div>
                    </div>
                </div>
            </Styles>
        )
    }
}