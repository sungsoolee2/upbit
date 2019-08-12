import React, { Component } from 'react';
import Dropdown from './dropdown';

class DropdownApp extends Component {
    constructor(){
    super()
    this.state = {
      themes: [
        {
          id: 0,
          title: 'Dark mode',
          selected: false,
          key: 'themes'
        },
        {
          id: 1,
          title: 'Light mode',
          selected: false,
          key: 'themes'
        },
        {
          id: 2,
          title: 'Cool blue',
          selected: false,
          key: 'themes'
        },
        {
          id: 3,
          title: 'Easy gray',
          selected: false,
          key: 'themes'
        },
        {
          id: 4,
          title: 'Verdant green',
          selected: false,
          key: 'themes'
        }
      ]
    }
  }

  toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }

  render() {
    return (
      <div className="dropdownApp">

        <div className="wrapper">

          <Dropdown
            title="Choose theme"
            list={this.state.themes}
            resetThenSet={this.resetThenSet}
          />
        </div>
      </div>
    );
  }
}

export default DropdownApp;