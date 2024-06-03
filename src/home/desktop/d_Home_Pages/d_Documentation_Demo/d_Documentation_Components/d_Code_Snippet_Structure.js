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
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 1.5;
  font-size: 80%;
}

.code-snippet-body-sidebar-p {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  font-size: 65% !important;
  line-height: 1.75 !important;
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
  line-height: 1.25 !important;
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

.code-editor {
  display: flex;
  flex-direction: column;
}

.code-line {
  display: flex;
  align-items: flex-start; /* Align items at the top */
}

.line-number {
  width: 3% !important; /* Adjust width as needed */
  padding-right: 1%;
  text-align: right;
  user-select: none; /* Prevent selecting line numbers */
  font-family: 'inconsolata';
  font-size: 80% !important; /* Match the font size */
  margin-top: 0px; /* Match p tag margin */
  margin-bottom: 0px; /* Match p tag margin */
  line-height: 1.5; /* Match line height */
  color: grey;
}

.line-number-sidebar {
  width: 4% !important; /* Adjust width as needed */
  padding-right: 1%;
  text-align: right;
  user-select: none; /* Prevent selecting line numbers */
  font-family: 'inconsolata';
  font-size: 80% !important; /* Match the font size */
  margin-top: 0px; /* Match p tag margin */
  margin-bottom: 0px; /* Match p tag margin */
  line-height: 1.5; /* Match line height */
  color: grey;
}

.line-content {
  flex: 1; /* Allow content to take up remaining space */
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
      if (this.props.languagesToRemove) {
        console.log(this.props.languagesToRemove)
        this.updateOptions(this.props.languagesToRemove)
      }
    }

    componentWillUnmount = () => {
      document.removeEventListener('click', this.handleClickOutside);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.languagesToRemove !== this.props.languagesToRemove) {
        console.log('Languages to remove updated:', this.props.languagesToRemove);
        this.updateOptions(this.props.languagesToRemove);
      }
      // Check if selectedLang prop has changed
      if (this.props.selectedLang !== prevProps.selectedLang) {
        // Find the option object corresponding to the selectedLang id
        const selectedOption = this.state.options.find(option => option.id === this.props.selectedLang);
        if (selectedOption) {
          this.selectOption(selectedOption, selectedOption.id, selectedOption.lang)
        }
      }
    }

    updateOptions = (languagesToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter(option => !languagesToRemove.includes(option.lang)),
      }));
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
      const regexPatterns = {
        skRegex: /sk_\w+/,
        clientRegex: /client_\w+/,
        listConnectionRegex: /\blistConnection\w*/,
        list_connectionRegex: /\blist_connections\w*/,
        ListConnectionRegex: /\bListConnections\w*/,
        list_metadataRegex: /\blist_metadata\w*/,
        ListMetadataRegex: /\bListMetadata\w*/,
        listMetadataRegex: /\blistMetadata\w*/,
        current_pageRegex: /\bcurrent_page\w*/,
        currentPageRegex: /\bcurrentPage\w*/,
        responseRegex: /\bresponse\b/,
        getAuthorizationUrlRegex: /\bgetAuthorizationUrl\w*/,
        getDirectoryUser: /\bgetDirectoryUser\w*/,
        getUserRegex: /\bgetUser\w*/,
        GetUserRegex: /\bGetUser\w*/,
        get_userRegex: /\bget_user\w*/,
        getSignInUrlRegex: /\bgetSignInUrl\w*/,
        signOutRegex: /\bsignOut\w*/,
        authenticateWithCodeRegex: /\bauthenticateWithCode\w*/,
        authKitMiddlewareRegex: /\bauthKitMiddleware\w*/,
        handleAuthRegex: /\bhandleAuth\w*/,
        authenticateWithRefreshTokenRegex: /\bauthenticateWithRefreshToken\w*/,
        getJwksUrlRegex: /\bgetJwksUrl\w*/,
        get_authorization_urlRegex: /\bget_authorization_url\w*/,
        LoginRegex: /\bLogin\w*/,
        GetAuthorizationURLRegex: /\bGetAuthorizationURL\w*/,
        authorizationUrllRegex: /\bauthorization_url\w*/,
        profile_and_tokenRegex: /\bprofile_and_token\w*/, 
        profileAndTokenRegex: /\bprofileAndToken\w*/,
        GetProfileAndTokenRegex: /\bGetProfileAndToken\w*/,
        getProfileAndTokenRegex: /\bgetProfileAndToken\w*/,
        get_profile_and_tokenRegex: /\bget_profile_and_token\w*/,
        usersFromDirectoryRegex: /\busersFromDirectory\w*/,
        users_from_directoryRegex: /\busers_from_directory\w*/,
        usersByGroupRegex: /\busersByGroup\w*/,
        groupsByUserRegex: /\bgroupsByUser\w*/,
        users_from_groupRegex: /\busers_from_group\w*/,
        groupsFromDirectoryRegex: /\bgroupsFromDirectory\w*/,
        groups_from_directoryRegex: /\bgroups_from_directory\w*/,
        groupsFromUserRegex: /\bgroupsFromUser\w*/,
        groups_from_userRegex: /\bgroups_from_user\w*/,
        getGroupRegex: /\bgetGroup\w*/,
        getDirectoryGroupRegex: /\bgetDirectoryGroup\w*/,
        GetGroupRegex: /\bGetGroup\w*/,
        get_groupRegex: /\bget_group\w*/,
        listDirectoryUsersRegex: /\blistDirectoryUsers\w*/,
        listDirectoryGroupsRegex: /\blistDirectoryGroups\w*/,
        listUsersRegex: /\blistUsers\w*/,
        ListUsersRegex: /\bListUsers\w*/,
        list_usersRegex: /\blist_users\w*/,
        ListGroupsRegex: /\bListGroups\w*/,
        listGroupsRegex: /\blistGroups\w*/,
        list_groupsRegex: /\blist_groups\w*/,
        createOrganizationRegex: /\bcreateOrganization\w*/,
        CreateOrganizationRegex: /\bCreateOrganization\w*/,
        create_organizationRegex: /\bcreate_organization\w*/,
        generateLinkRegex: /\bgenerateLink\w*/,
        generate_linkRegex: /\bgenerate_link\w*/,
        GenerateLinkRegex: /\bGenerateLink\w*/,
        createEventRegex: /\bcreateEvent\w*/,
        CreateEventRegex: /\bCreateEvent\w*/,
        create_eventRegex: /\bcreate_event\w*/,
        portalLinkRegex: /\bportalLink\w*/,
        auditLogExportRegex: /\bauditLogExport\w*/,
        audit_log_exportRegex: /\baudit_log_export\w*/,
        createExportRegex: /\bcreateExport\w*/,
        create_exportRegex: /\bcreate_export\w*/,
        CreateExportRegex: /\bCreateExport\w*/,
        get_exportRegex: /\bget_export\w*/,
        getExportRegex: /\bgetExport\w*/,
        GetExportRegex: /\bGetExport\w*/,
        listOfEventsRegex: /\blistOfEvents\w*/,
        ListOfEventsRegex: /\bListOfEvents\w*/,
        list_of_eventsRegex: /\blist_of_events\w*/,
        listEventsRegex: /\blistEvents\w*/,
        ListEventsRegex: /\bListEvents\w*/,
        list_eventsRegex: /\blist_events\w*/,
        eventsRegex: /\bevents\w*/,
        profileRegex: /\bprofile\w*/,
        exportRegex: /\bexport\w*/,
        userRegex: /\buser\w*/,
        listRegex: /\blist\w*/,
        groupRegex: /\bgroup\w*/,
        organizationRegex: /\borganization\w*/

      };
    
      const matchingPattern = Object.keys(regexPatterns).find((key) => regexPatterns[key].test(target.innerText));
    
      if (matchingPattern) {
        const currentApiExplainer = matchingPattern.replace('Regex', '') + `_${this.props.selectedLang}`;

            // Check if the matching pattern is for profile_and_token_assignment
        if (matchingPattern === 'profile_and_token_assignmentRegex') {
          // Check if SSO is present in the target innerText
          console.log("did we get special matching pattern?")
          if (/\bSSO\./.test(target.innerText)) {
            console.log("did we get inner special matching pattern")
            currentApiExplainer = 'SSO_profile_and_token_ruby'; // Change the explainer name accordingly
          }
        }

        this.setState({ 
          currentApiExplainer,
          replaceApiPopup: true,
          secretKeyApiPopup: matchingPattern === 'skRegex',
          replaceApiClientPopup: matchingPattern === 'clientRegex',
          apiExplainerPopup: !['skRegex', 'clientRegex'].includes(matchingPattern)
        }, () => {
          if (this.state.apiExplainerPopup) {
            this.setState({ apiExplainerPopup: true });
          }
        });
      }
    
      setTimeout(() => {
        this.scrollToApiPopup();
      }, 500);
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

    extractIdentifier = (line) => {
        // Regular expression to match the initial sequence of non-whitespace characters
        const match = line.match(/^\S+/);
        return match ? match[0] : '';
    }

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
        let selectedSnippet = CodeSnippets.find((item) => item.id === id && item.title === snippet);
        const { secretKeyApiPopup, apiExplainerPopup, currentApiExplainer } = this.state;

        if (!selectedSnippet) {
          return <div>Snippet not found.</div>;
        }
    
        let selectedLang = this.props.selectedLang.toLowerCase(); // Assuming selectedLang is in lowercase
        if (selectedSnippet.code[selectedLang] === undefined) {selectedLang = this.state.prevLangSelected}
        let codeForSelectedLang = selectedSnippet.code[selectedLang];

        // console.log(`component: ${snippet} ${codeForSelectedLang}`)

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
                {this.props.showCodeSnippetHeader ? <div></div> :
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
                            {this.props.showOnlyJSONTab !== true ? <SelectButtonRequest style={{fontSize: "70%", color: dropdownDisabledAndHidden ? "transparent" : "black"}} id="dropdown-button" onClick={this.toggleDropdown} disabled={this.props.dropdownDisabled ? true : false}>{this.state.selectedDropdownLanguage}</SelectButtonRequest> : ""}
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
                        {this.props.showOnlyJSONTab && 
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
                    }
                    <div style={{borderTopLeftRadius: this.props.showCodeSnippetHeader ? "10px" : "", borderTopRightRadius: this.props.showCodeSnippetHeader ? "10px" : ""}} className='code-snippet-body'>
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
                      <div className='code-editor'>
                        {/* {codeForSelectedLang.map((line, index) => (
                            <pre key={index} style={{ fontFamily: 'inconsolata', whiteSpace: 'pre-wrap', overflow:"scroll"}}>
                              <p 
                              className={sideBarOpen ? "code-snippet-body-sidebar-p" : ""}
                              style={{fontSize: "60%", fontFamily: "inconsolata"}} 
                              dangerouslySetInnerHTML={{ __html: line }}
                              onClick={this.handleApiKeyEnter}
                              >
                              </p>
                            </pre>
                        ))} */}
                        {codeForSelectedLang.map((line, index) => {
                          // Use a regular expression to match the first character
                          const match = line.match(/^(\d+|[^a-zA-Z0-9\s])/);
                          const firstCharacters = match ? match[0] : '';
                          // Remove the matched characters from the line content
                          const lineContent = line.substring(firstCharacters.length);

                          // Check if the line contains either specific style
                          const containsColor1 = line.includes('background-color: #e6f7ed;');
                          const containsColor2 = line.includes('background-color: #fcfae9;');

                          // Apply the same background color if either specific style is found
                          let backgroundColorStyle = {};
                          if (containsColor1) {
                              backgroundColorStyle = { backgroundColor: '#e6f7ed' };
                          } else if (containsColor2) {
                              backgroundColorStyle = { backgroundColor: '#fcfae9' };
                          }

                          return (
                            <div key={index} className="code-line" style={{ display: 'flex', ...backgroundColorStyle }}>
                              <div className="line-number" style={{ width: '30px', ...backgroundColorStyle }}>
                                {firstCharacters}
                              </div>
                              <pre className="line-content" style={{ fontFamily: 'inconsolata', whiteSpace: 'pre-wrap', overflow: 'scroll', flex: 1 }}>
                                <p
                                  id={`code-line-${index}`}
                                  className={sideBarOpen ? 'code-snippet-body-sidebar-p' : ''}
                                  style={{ fontSize: '80%', fontFamily: 'inconsolata', marginTop: '0px', marginBottom: '0px', lineHeight: '1.5' }}
                                  dangerouslySetInnerHTML={{ __html: lineContent }}
                                  onClick={this.handleApiKeyEnter}
                                />
                              </pre>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                </div>
            </Styles>
        )
    }
}