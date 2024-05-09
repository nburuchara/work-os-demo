import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const Styles2 = styled.div `

        // - - - - - - NESTED DROPDOWN - - - - - - //

.nested-dropdown {
    text-align: left;
    margin-left: 5%;
    height: 100%;
}

.nested-dropdown p {
    font-size: 85%;
    cursor: pointer;
}

    // - - NESTED MENU OPTION - - //

.menu-option {
    cursor: pointer; /* Change cursor to pointer on hover */
    padding: 2.5%;
    padding-left: 3%;
    padding-right: 3%;
    border-radius: 7px;
}

.menu-option:hover {
    background-color: #ECEDFE; /* Change background color on hover */
    font-weight: bold;
/* Add other hover styles as desired */
}

.menu-option-active {
    background-color: #ECEDFE; /* Change background color for active (clicked) state */
    font-weight: bold; /* Make text bold for active (clicked) state */
}

    // - NESTED MENU OPTIONS ANIMATION - //

/* CSS Transition Definitions */
.nested-menu-enter {
    transform: translateY(10%) !important;
    opacity: 0 !important;
}

.nested-menu-enter-active {
    transform: translateY(0) !important;
    opacity: 1 !important;
    transition: transform 500ms, opacity 500ms !important;
}

.nested-menue-exit {
    transform: translateY(0) !important;
    opacity: 1 !important;
}

.nested-menu-exit-active {
    transform: translateY(20%) !important;
    opacity: 0 !important;
    transition: transform 500ms, opacity 500ms !important;
}


`

class NestedDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndices: []
    };
  }

//   handleItemClick = (index) => {
//     this.setState(prevState => ({
//       activeIndices: prevState.activeIndices.includes(index)
//         ? prevState.activeIndices.filter(i => i !== index)
//         : [...prevState.activeIndices, index]
//     }));
//   };

handleItemClick = (index) => {
    const { activeIndices } = this.state;

    // Toggle the clicked item's active state
    const itemIndex = activeIndices.indexOf(index);
    if (itemIndex !== -1) {
        // If the clicked item is already active, deselect it and collapse if it's clicked again
        activeIndices.splice(itemIndex, 1);
    } else {
        // Otherwise, select the clicked item
        activeIndices.push(index);

        // Collapse other items with the same parent
        const parentIndex = this.getParentIndex(index);
        const updatedActiveIndices = activeIndices.filter((activeIndex) => {
            const activeParentIndex = this.getParentIndex(activeIndex);
            return activeParentIndex !== parentIndex || activeIndex === index;
        });

        this.setState({ activeIndices: updatedActiveIndices });
    }
};

  
getParentIndex = (index) => {
    // Convert index to string if it's not already
    const indexString = typeof index === 'string' ? index : index.toString();
    // Extract the parent index from the concatenated index
    return indexString.substring(0, indexString.lastIndexOf('-'));
};
  
  
  

  // Function to get the hierarchy level of an item by its index
getHierarchyLevel = (index) => {
    const { menuItems } = this.props;
    const getItemLevel = (items, targetIndex, level = 0) => {
      for (const item of items) {
        if (item.id === targetIndex) {
          return level;
        }
        if (item.sections) {
          const nestedLevel = getItemLevel(item.sections, targetIndex, level + 1);
          if (nestedLevel !== -1) {
            return nestedLevel;
          }
        }
      }
      return -1;
    };
    return getItemLevel(menuItems, index);
};

  handleMouseEnter = () => { }

  handleMouseLeave = () => { }

  renderMenuItems = (menuItems, level = 0) => {
    const { activeIndices } = this.state;

    return (
        <div className={`nested-dropdown-level-${level}`}>
            {menuItems.map((item, index) => (
                <p style={{marginTop: "1%"}} key={item.id}>
                    <span 
                        className={`menu-option ${activeIndices.includes(item.id) ? 'menu-option-active' : 'menu-option'}`}
                        onClick={() => this.handleItemClick(item.id)}
                        onMouseEnter={() => this.handleMouseEnter(item.id)}
                        onMouseLeave={() => this.handleMouseLeave()}
                    >
                        {item.levelName}
                    </span><br/>
                    {activeIndices.includes(item.id) && item.sections && (
                        <img src='/assets/docs_sidebar_nested_icon.png' style={{ width: "5%", marginTop: "5%", marginLeft: "5%"}} />
                    )}
                    <CSSTransition
                    in={activeIndices.includes(item.id) && item.sections}
                    timeout={500}
                    classNames="nested-menu"
                    unmountOnExit
                    >   
                        <div>
                            {activeIndices.includes(item.id) && item.sections && (
                                <NestedDropdown
                                    menuItems={item.sections}
                                    activeIndices={activeIndices} // Pass activeIndices to nested components
                                    handleItemClick={this.handleItemClick} // Pass handleItemClick to nested components
                                />
                            )}
                        </div>
                    </CSSTransition>
                </p>
            ))}
        </div>
    );
  };

  render() {
    const { menuItems } = this.props;
    if (!menuItems || menuItems.length === 0) {
      return null;
    }

    return (
        <Styles2>
            <div className="nested-dropdown">
                {this.renderMenuItems(menuItems)}
            </div>
        </Styles2>
    );
  }
}

export default NestedDropdown;
