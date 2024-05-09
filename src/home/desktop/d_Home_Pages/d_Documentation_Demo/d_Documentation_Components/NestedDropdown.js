import React, { Component } from 'react';

class NestedDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndices: []
    };
  }

  handleItemClick = (index) => {
    this.setState(prevState => ({
      activeIndices: prevState.activeIndices.includes(index)
        ? prevState.activeIndices.filter(i => i !== index)
        : [...prevState.activeIndices, index]
    }));
  };

  renderMenuItems = (menuItems, level = 0) => {
    const { activeIndices } = this.state;

    return (
      <ul className={`nested-dropdown-level-${level}`}>
        {menuItems.map((item, index) => (
          <li key={item.id}>
            <button onClick={() => this.handleItemClick(item.id)}>
              {item.levelName}
            </button>
            {activeIndices.includes(item.id) && item.sections && (
              <NestedDropdown menuItems={item.sections} />
            )}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { menuItems } = this.props;
    if (!menuItems || menuItems.length === 0) {
      return null;
    }

    return (
      <div className="nested-dropdown">
        {this.renderMenuItems(menuItems)}
      </div>
    );
  }
}

export default NestedDropdown;
