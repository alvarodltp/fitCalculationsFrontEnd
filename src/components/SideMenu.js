import React, { Component } from 'react'
import { Image, Menu } from 'semantic-ui-react'

export default class MenuExampleLabeledIconsVertical extends Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu icon='labeled'>
          <Menu.Item name='stats' active={activeItem === 'stats'} onClick={this.handleItemClick}>
            <Image src={'../stats-menu.png'} />
            Stats
          </Menu.Item>

          <Menu.Item
            name='calories'
            active={activeItem === 'calories'}
            onClick={this.handleItemClick}
          >
            <Image src={'../calories-menu.png'} />
            Calories
          </Menu.Item>

          <Menu.Item
            name='macros'
            active={activeItem === 'macros'}
            onClick={this.handleItemClick}
          >
            <Image src={'../macros-menu.png'} />
            Macros
          </Menu.Item>

          <Menu.Item
            name='exercise'
            active={activeItem === 'exercise'}
            onClick={this.handleItemClick}
          >
            <Image src={'../exercise-menu.png'} />
            Exercise
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
