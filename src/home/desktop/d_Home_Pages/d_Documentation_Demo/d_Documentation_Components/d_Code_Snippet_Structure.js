import React, {Component} from 'react'
import styled from 'styled-components'
import CodeSnippets from './CodeSnippets'


const DropdownContainer = styled.div`
  position: relative;
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
      if (dropdownContainer && !dropdownContainer.contains(event.target)) {
          this.setState({ isOpen: false });
      }
    }

    codeSnippetCopyEnter = () => {
      this.setState({copySnippetHovered: true})
    }

    codeSnippetCopyLeave = () => {
      this.setState({copySnippetHovered: false})
    }

    toggleDropdown = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    }
  
    selectOption = (option, id, language) => {
      console.log(option)
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

    render () {

        const { tab1Selected, tab2Selected, requestSelected, responseSelected, isOpen, selectedOption, options } = this.state;
        const { id, snippet } = this.props;
        const selectedSnippet = CodeSnippets.find((item) => item.id === id && item.title === snippet);
        console.log(selectedSnippet)

        if (!selectedSnippet) {
          return <div>Snippet not found.</div>;
        }
    
        const selectedLang = this.props.selectedLang.toLowerCase(); // Assuming selectedLang is in lowercase
        const codeForSelectedLang = selectedSnippet.code[selectedLang];

        console.log(codeForSelectedLang)
    
        if (!codeForSelectedLang) {
          return <div>Code snippet not available for selected language.</div>;
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
                          <DropdownContainer>
                            <SelectButtonRequest onClick={this.toggleDropdown}>{this.state.selectedDropdownLanguage}</SelectButtonRequest>
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
                            <img src='/assets/demo_doc_copy_icon.png' alt='no img available'/>
                        </button>
                      </div>
                    </div>
                    <div className='code-snippet-body'>
                      <div>
                        {codeForSelectedLang.map((line, index) => (
                            <pre key={index} style={{ fontFamily: 'inconsolata', whiteSpace: 'pre-wrap' }}>
                              <p style={{fontSize: "70%", fontFamily: "inconsolata"}} dangerouslySetInnerHTML={{ __html: line }}></p>
                            </pre>
                        ))}
                      </div>
                    </div>
                </div>
            </Styles>
        )
    }
}