import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfMenu extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    menuDisplayed: false
  }

  toogleMenu = () => {
    this.setState(state => ({ menuDisplayed: !state.menuDisplayed }));
  }

  hideMenu = () => {
    this.setState({ menuDisplayed: false });
  }

  render() {
    const { book, changeShelf } = this.props;
    return (
      <div className=''>
        <button 
          className='change-shelf'
          onClick={ this.toogleMenu }>
          Change Shelf
          <select
            size={5}
            value={ book.shelf }
            className={this.state.menuDisplayed ? "shelves-options" :"shelves-options" }
            onChange={ event => changeShelf(book, event.target.value) }
            onMouseOut={ this.hideMenu }>
            <option value="" disabled>Move to</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want To Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </button>
      </div>
    )
  }
}

export default ShelfMenu;