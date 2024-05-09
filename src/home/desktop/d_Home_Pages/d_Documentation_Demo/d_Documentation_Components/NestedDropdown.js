import React, { Component } from 'react';
import styled from 'styled-components';

const Styles2 = styled.div `

        // - - - - - - NESTED DROPDOWN - - - - - - //

.nested-dropdown {
    text-align: left;
    margin-left: 5%;
}

.nested-dropdown p {
    font-size: 85%;
    cursor: pointer;
}


    // - - NESTED MENU OPTION - - //

.menu-option {
    cursor: pointer; /* Change cursor to pointer on hover */
    padding: 2.5%;
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

    // Check if the clicked item is already active
    const isActive = activeIndices.includes(index);

    if (isActive) {
        // If the clicked item is active, deselect it and collapse the menu
        const updatedActiveIndices = activeIndices.filter((activeIndex) => activeIndex !== index);
        this.setState({ activeIndices: updatedActiveIndices });
    } else {
        // If the clicked item is not active, select it and collapse other items with the same parent
        const updatedActiveIndices = [...activeIndices, index];

        // Collapse other items with the same parent
        const parentIndex = this.getParentIndex(index);
        const collapsedIndices = updatedActiveIndices.filter((activeIndex) => {
            const activeParentIndex = this.getParentIndex(activeIndex);
            return activeParentIndex !== parentIndex || activeIndex === index;
        });

        this.setState({ activeIndices: collapsedIndices });
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
                    {activeIndices.includes(item.id) && item.sections && (
                        <NestedDropdown
                            menuItems={item.sections}
                            activeIndices={activeIndices} // Pass activeIndices to nested components
                            handleItemClick={this.handleItemClick} // Pass handleItemClick to nested components
                        />
                    )}
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
