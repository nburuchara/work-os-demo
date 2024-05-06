import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippets from './CodeSnippets'


const DropdownContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const SelectButtonRequest = styled.button`
  background-color: transparent;
  margin-top: 5%;
  border: none;
  padding: 5%;
  padding-left: 8.5%;
  padding-right: 8.5%;
  cursor: pointer;
  font-family: poppins;
  border-radius: 7px;
  font-size: 75%;
  &:hover {
    background-color: #eaeaef;
  }
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
  display: inline-block;
}

.code-snippet-copy {
  float: left;
  text-align: center;
  width: 10%;
}

  // # TITLE 

.code-snippet-title h5 {
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left: 2%;
}

  // # HEADER LANGUAGE 

.code-snippet-language p {
  text-align: left !important;
  margin-left: 20% !important;
  font-size: 70% !important;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
  
  // # HEADER (BUTTON CONTAINER)

.code-snippet-copy button {
    padding: 2%;
    margin-top: 9.5% !important;
    height: 70% !important;
    width: 55% !important;
    // margin-right: 2% !important;
    border-radius: 50% !important;
    border: 2px solid transparent!important; 
    cursor: pointer !important;
}

    // # HEADER (COPY ICON)
    
.code-snippet-copy img {
    margin-top: 20% !important;
    width: 62.5% !important;
}

  // - - CODE DOUBLE HEADER - - //


.code-double-header {
  width: 47.5%;
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
  margin-top: 5.5%;
  padding: 4%;
  font-family: poppins;
  font-size: 75%;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 7px;
  cursor: pointer;
}

.code-header-request button:hover {
  background-color: #e9e9f0;
}

  // # RESPONSE (BUTTON) CONTAINER

.code-header-response button {
  width: 90%;
  margin-top: 5.5%;
  padding: 4%;
  font-family: poppins;
  font-size: 75%;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 7px;
  cursor: pointer;
}

.code-header-response button:hover {
  background-color: #e9e9f0;
}

  // - - CODE BODY - - //

.code-snippet-body {
  border: 1px solid #ccc;
  padding: 1%;
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
}

.code-snippet-body p {
  margin-top: 1.25% !important;
  margin-bottom: 1.25% !important;
  font-size: 85% !important;
}

.code-snippet-body pre {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

  // - - REPLACE API POPUP - - //

.replace-api-popup {
  height: auto !important;
  position: absolute;
  width: 35.5% !important;
  background-color: white;
  border: 0.5px solid #cccd43 !important; 
  border-radius: 7px;
  padding: 1.5%;
  z-index: 2; /* Set a negative z-index to position it under other elements */
  margin-top: 0%;
  // margin-right: 0.5% !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07), 0 6px 20px 0 rgba(0, 0, 0, 0.07) !important;
  // overflow: scroll;
}

.replace-api-popup span {
  background-color: #ededf1;
}

.replace-api-popup img {
  width: 5%;
  margin-bottom: 0px;
  margin-top: 0px;
}

.replace-api-popup p {
  padding-top: 3% !important;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  font-size: 65% !important;
}

.replace-api-popup label:hover {
  text-decoration: underline:
  cursor: pointer;
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
            showReponseCode: false
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
        this.setState({requestSelected: true})
      }
      this.setState({
        tab1Selected: true,
        tab2Selected: false
      })
      console.log(this.state.prevLangSelected)
      this.props.updateSelectedLang(this.state.prevLangSelected)
    }

    responseCallClicked = (secondLang) => {
      if (secondLang === "" || secondLang === undefined) {
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
          this.props.updateSelectedLang(secondLang.toLowerCase())
        })
      }
    }

    handleApiKeyEnter = (event) => {
      const target = event.target;
      const skRegex = /sk_\w+/; // Regular expression to match "sk_..." pattern
      const clientRegex = /^client_\w+/; // Regular expression to match "client_..." pattern at the beginning of the string
      if (skRegex.test(target.innerText)) {
        this.setState({
          replaceApiPopup: true,
          replaceApiClientPopup: false
        });
        
      } else if (clientRegex.test(target.innerText)) {
        this.setState({
          replaceApiClientPopup: true,
          replaceApiPopup: false
        })
      }
    }    

    handleApiKeyLeave = () => {
     this.setState({replaceApiPopup: false, replaceApiClientPopup: false})
    }

    handleApiLabelEnter = () => {this.setState({apiLabelHovered: true})}

    handleApiLabelLeave = () => {this.setState({apiLabelHovered: false})}
    render () {

        const { tab1Selected, tab2Selected, requestSelected, isOpen, selectedOption, options, replaceApiPopup, replaceApiClientPopup,  apiLabelHovered } = this.state;
        const { id, snippet } = this.props;
        const selectedSnippet = CodeSnippets.find((item) => item.id === id && item.title === snippet);

        if (!selectedSnippet) {
          return <div>Snippet not found.</div>;
        }
    
        const selectedLang = this.props.selectedLang.toLowerCase(); // Assuming selectedLang is in lowercase
        const codeForSelectedLang = selectedSnippet.code[selectedLang];

        console.log(codeForSelectedLang)
    
        if (!codeForSelectedLang) {
          return <div><p style={{color: "#6363f1", fontWeight: "bold"}}>Code snippet not available for: <label style={{color: "black"}}>{this.state.selectedDropdownLanguage}</label>.</p></div>;
        }

        return (
            <Styles>
                <div className='code-snippet-container'>
                    <div className='code-snippet-header'>
                      <div className='code-snippet-title'>
                        {selectedSnippet && selectedSnippet.doubleHeaders && selectedSnippet.doubleHeaders[this.props.selectedLang.toLowerCase()] ? (
                          <div className='code-double-header'>
                            <div 
                            style={{borderBottom: tab1Selected ? "2px solid #2e2eff" : "1px solid transparent"}}
                            className='code-header-request'>
                              <button
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
                          <h5>{this.props.snippet}</h5>
                        )}
                      </div>
                      <div className='code-snippet-language' id="dropdown-container">
                        {requestSelected && 
                          <DropdownContainer id={`dropdown-container-${this.props.id}`}>
                            <SelectButtonRequest id="dropdown-button" onClick={this.toggleDropdown}>{this.state.selectedDropdownLanguage}</SelectButtonRequest>
                            <DropdownContent isOpen={isOpen}>
                              {options.map(option => (
                                <DropdownItem
                                  key={option.id}
                                  onClick={() => this.selectOption(option, option.id, option.lang)}
                                >
                                  <TickImage
                                    src="/assets/docs_code_snippet_checkmark_icon.png" // Path to your tick image
                                    alt="no img available"
                                    isSelected={selectedOption && selectedOption.id === option.id}
                                  />
                                  <p>{option.lang}</p>
                                </DropdownItem>
                              ))}
                            </DropdownContent>
                          </DropdownContainer>
                        }
                        {this.state.showJSONTab && 
                          <SelectButtonResponse>JSON</SelectButtonResponse>
                        }
                      </div>
                      <div className='code-snippet-copy'>
                        <button 
                        onMouseEnter={this.codeSnippetCopyEnter}
                        onMouseLeave={this.codeSnippetCopyLeave}
                        style={{backgroundColor: this.state.copySnippetHovered ? "#e9e9f0": "transparent"}}>
                            <span><img src='/assets/demo_doc_copy_icon.png' alt='no img available'/></span>
                        </button>
                      </div>
                    </div>
                    <div className='code-snippet-body'>
                        {replaceApiPopup && 
                          <div className='replace-api-popup'>
                            <img onClick={this.handleApiKeyLeave} style={{float: "right", cursor: "pointer"}} src='assets/docs_popup_exit_search_icon.png' alt='no img avilable'/>
                            <p>Replace this with your secret key found on the <label onMouseEnter={this.handleApiLabelEnter} onMouseLeave={this.handleApiLabelLeave} style={{color: "#6363f1", textDecoration: apiLabelHovered ? "underline": "none", cursor: apiLabelHovered ? 'pointer': 'default'}}>API Keys</label> page in the dashboard.</p>
                          </div>
                        }
                        {replaceApiClientPopup && 
                          <div className='replace-api-popup'>
                            <img onClick={this.handleApiKeyLeave} style={{float: "right", cursor: "pointer"}} src='assets/docs_popup_exit_search_icon.png' alt='no img avilable'/>
                            <p>Replace this with your client ID found on the <label onMouseEnter={this.handleApiLabelEnter} onMouseLeave={this.handleApiLabelLeave} style={{color: "#6363f1", textDecoration: apiLabelHovered ? "underline": "none", cursor: apiLabelHovered ? 'pointer': 'default'}}>API Keys</label> page in the dashboard.</p>
                          </div>
                        }
                      <div>
                        {codeForSelectedLang.map((line, index) => (
                            <pre key={index} style={{ fontFamily: 'inconsolata', whiteSpace: 'pre-wrap' }}>
                              <p 
                              style={{fontSize: "70%", fontFamily: "inconsolata"}} 
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