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

export default class NestedDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndices: props.searchPath || [],
      selectedIndex: 0
    };
  }

componentDidMount() {
    this.setState({ activeIndices: this.props.searchPath || [] });
}

componentDidUpdate(prevProps) {
    // Check if the searchPath prop has changed
    if (prevProps.searchPath !== this.props.searchPath) {
        this.setState({ activeIndices: this.props.searchPath || []});
    }
}


handleItemClick = (index, item) => {
    this.setState(prevState => {
        const { activeIndices } = prevState;
        const itemIndex = activeIndices.indexOf(index);
        // this.setState({
        //     selectedIndex: index
        // })
        let newActiveIndices;
        if (itemIndex !== -1) {
            // Deselect the clicked item
            newActiveIndices = activeIndices.filter((_, i) => i !== itemIndex);
        } else {
            // Select the clicked item and collapse other items with the same parent
            const parentIndex = this.getParentIndex(index);
            newActiveIndices = [...activeIndices, index].filter((activeIndex) => {
                const activeParentIndex = this.getParentIndex(activeIndex);
                return activeParentIndex !== parentIndex || activeIndex === index;
            });
        }

        this.props.setSearchPath(newActiveIndices); // Notify parent component
        this.props.setCurrentIndex(index);
        return { activeIndices: newActiveIndices };
    });

    this.props.getMenuItemSelected(item); // Notify parent component about the selected item
};

reselectClickedItem = (index) => {

    const { activeIndices } = this.state;
    
    console.log('active indices: ', this.state.activeIndices)

    if (this.getHierarchyLevel(index) === 2 && this.getHierarchyLevel(activeIndices[activeIndices.length - 1]) === 1) {
        activeIndices.pop();
    }
 
    if (!activeIndices.includes(index)) {
        activeIndices.push(index)
    }

    let immediateParentIndex = this.getImmediateParentIndex(index)


    if (this.getHierarchyLevel(index) === 2) {
        activeIndices.push(immediateParentIndex)
    }

    if (activeIndices.length > this.props.maximumDepth) {
        // Find the index of the second last item
    let secondLastIndex = activeIndices.length - 2;
        // Remove the second last item
    activeIndices.splice(secondLastIndex, 1);

    
}

}
  
getParentIndex = (index) => {
    // Convert index to string if it's not already
    const indexString = typeof index === 'string' ? index : index.toString();
    // Extract the parent index from the concatenated index
    return indexString.substring(0, indexString.lastIndexOf('-'));
};

getImmediateParentIndex = (index) => {
    const { menuItems } = this.props;

    const findParent = (items, targetIndex, parent = null) => {
        for (const item of items) {
            if (item.id === targetIndex) {
                return parent ? parent.id : null;
            }
            if (item.sections) {
                const parentLevelIndex = findParent(item.sections, targetIndex, item);
                if (parentLevelIndex !== null) {
                    return parentLevelIndex;
                }
            }
        }
        return null;
    };

    return findParent(menuItems, index);
};

getAllIndicesAtSameLevel = (index) => {
    const { menuItems } = this.props;
    const parentIndices = [];

    const findParent = (items, targetIndex, parent = null) => {
        for (const item of items) {
            if (item.id === targetIndex) {
                // Found the target index, so add all parent indices to the array
                if (parent) {
                    parentIndices.push(parent.id);
                }
                return;
            }
            if (item.sections) {
                findParent(item.sections, targetIndex, item);
            }
        }
    };

    findParent(menuItems, index);
    return parentIndices;
};


closeOtherParentsInSameLevel = (index) => {
    const { menuItems } = this.props;
    const currentParentIndex = index

    if (!currentParentIndex) {
        // No parent index, so no other parents to close
        return;
    }

    const closeParents = (items, targetIndex, parentIndices = []) => {
        for (const item of items) {
            if (item.id === targetIndex) {
                // Found the target index, close all parent indices except for the current one
                const parentIndexesToClose = parentIndices.filter(parentIndex => parentIndex !== currentParentIndex);
                console.log('parent indexes to close: ',parentIndexesToClose)
                this.setState(prevState => ({
                    activeIndices: prevState.activeIndices.filter(idx => !parentIndexesToClose.includes(idx))
                }));
                return;
            }
            if (item.sections) {
                closeParents(item.sections, targetIndex, [...parentIndices, item.id]);
            }
        }
    };

    closeParents(menuItems, index);
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

searchMenuItems = (menuItems, searchTerm) => {
    let path = [];
  
    const search = (items, term, currentPath = []) => {
        let found = false;
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (!item) continue; // Add defensive check for undefined item
          
          const newPath = [...currentPath, item.id];
          
          if (item.levelName && item.levelName.toLowerCase().includes(term.toLowerCase())) {
            // If item matches search term, add its index to path
            path = newPath;
            found = true;
            // Break the loop to prioritize the first match
            break;
          }
    
          if (item.sections && search(item.sections, term, newPath)) {
            // If match found in nested section, update found status
            found = true;
            // Break the loop to prioritize the first match
            break;
          }
        }
        return found; // Return whether match was found
      };
    
      search(menuItems, searchTerm);
      this.props.getMenuItemSelected(searchTerm)
      return path;
};

handleMouseEnter = () => { }

handleMouseLeave = () => { }

handleSearchWithinNested = (searchTerm) => {
    const { searchMenuItems, menuItems } = this.props;
    const searchPath = searchMenuItems(menuItems, searchTerm);
    this.setState({activeIndices: searchPath})
    // this.setSearchPath(searchPath)
};

setSearchPath = (searchPath) => {
    // this.sets
    this.setState({ searchPath });
};

renderMenuItems = (menuItems, level = 0) => {
    const { activeIndices } = this.state;

    return (
        <div className={`nested-dropdown-level-${level}`}>
            {menuItems.map((item, index) => (
                <p style={{marginTop: "1%"}} key={item.id}>
                    <span 
                        className={`menu-option ${activeIndices.includes(item.id) ? 'menu-option-active' : 'menu-option'}`}
                        onClick={() => this.handleItemClick(item.id, item.levelName)}
                        onMouseEnter={() => this.handleMouseEnter(item.id)}
                        onMouseLeave={() => this.handleMouseLeave()}
                    >
                        {item.levelName}
                    </span><br/>
                    {activeIndices.includes(item.id) && item.sections && (
                        <img src='/assets/docs_sidebar_nested_icon.png' style={{ width: "5%", marginTop: "5%", marginLeft: "5%"}} alt='no img available' />
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
                                searchPath={this.props.searchPath}
                                setCurrentIndex={this.props.setCurrentIndex}
                                setSearchPath={this.setSearchPath}
                                getMenuItemSelected={this.props.getMenuItemSelected}
                                menuItems={item.sections}
                                maximumDepth={this.props.maximumDepth}
                                activeIndices={activeIndices} // Pass activeIndices to nested components
                                handleItemClick={() => this.handleItemClick(item.id, item.levelName)} // Pass handleItemClick to nested components
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
