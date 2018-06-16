import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import config from '../../config';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.renderDropDown = this.renderDropDown.bind(this);
  }

  toggleDropDown() {
    this.setState((state) => {
      return { showDropDown: !state.showDropDown };
    });
  }

  renderDropDown(levels) {
    if (!this.state.showDropDown) return null;
    return (
      <ul className="level-list">
        {levels}
      </ul>
    );
  }

  render() {
    const levels = config.levels.map((level, i) => {
      return (
        <li key={shortid.generate()}>
          <Link to={`/levels/${i}`}>{level.levelName}</Link>
        </li>
      );
    });

    return (
      <nav>
        <h1>Code Ninjas</h1>
        {this.renderDropDown(levels)}
        <button className="button" onClick={this.toggleDropDown}>Levels</button>
      </nav>
    );
  }
}

export default Nav;
