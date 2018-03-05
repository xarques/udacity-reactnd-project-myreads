import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';

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

  renderOption = (book, option) => {
    const result = (option && option.replace(/([A-Z])/g, " $1"));
    const capitalizedOption = result.charAt(0).toUpperCase() + result.slice(1); // capitalize the first letter
    const selected = book.shelf && book.shelf === option;
    return(
      <div className="shelf-option" onClick={event => this.props.changeShelf(book, option)}><p><span className={!selected ? "invisible": undefined}>
      <FontAwesomeIcon icon={faCheck }/></span>{capitalizedOption}</p></div>
    )
  }
  render() {
    const { book } = this.props;
    return (
      <div className=''>
        <button 
          className='change-shelf'
          onClick={ this.toogleMenu }>
          Change Shelf
        </button>
        <div className={this.state.menuDisplayed ? "shelves-options" : "hidden"}
          onMouseLeave={this.hideMenu}
        >
          <div className="shelf-option shelf-option-title" ><p>Move to ...</p></div>
          {this.renderOption(book, "currentlyReading")}
          {this.renderOption(book, "wantToRead")}
          {this.renderOption(book, "read")}
          {this.renderOption(book, "none")}
        </div>
      </div>
    )
  }
}

export default ShelfMenu;