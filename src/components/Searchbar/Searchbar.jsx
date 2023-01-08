import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchIcon,
  SearchInput,
} from './Searchbar.styled';

class Searchbar extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    input: '',
  };

  handleInputChange = event => {
    this.setState({ input: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.input.trim() === '') {
      toast.warning('Enter image name, please!');
      return;
    }

    this.props.onSubmit(this.state.input);
    this.reset();
  };

  reset = () => {
    this.setState({ input: '' });
  };

  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchIcon />
          </SearchButton>

          <SearchInput
            name="input"
            value={this.state.input}
            onChange={this.handleInputChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
        <ToastContainer autoClose={3000} theme="colored" />
      </SearchHeader>
    );
  }
}

export default Searchbar;
