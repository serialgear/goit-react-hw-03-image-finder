import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchImages } from '../api';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

import { Text } from './App.styled';

class App extends React.Component {
  state = {
    images: [],
    input: '',
    page: 1,
    loading: false,
    showLoadMore: false,
  };

  componentDidMount() {
    this.setState({ images: null });
  }

  async componentDidUpdate(_, prevState) {
    if (
      prevState.input !== this.state.input ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true, showLoadMore: false });

        const foundImages = await fetchImages(
          this.state.input,
          this.state.page
        );

        this.setState(prevState => ({
          images: [...prevState.images, ...foundImages.hits],
          loading: false,
          showLoadMore: this.state.images.length !== foundImages.totalHits,
        }));

        if (foundImages.hits.length === 0) {
          toast.warning('No pictures with this title');
          return;
        }
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong. Try again later.');
      }
    }
  }

  handleFormSubmit = input => {
    this.setState({ input, page: 1, images: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    scroll.scrollToBottom();
  };

  render() {
    const { input, loading, images, showLoadMore } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {!input && <Text>Enter image name, please!</Text>}

        {images && <ImageGallery images={images} />}

        {loading && <Loader loading={loading} />}

        {showLoadMore && <Button onClick={this.loadMore} />}

        <ToastContainer autoClose={3000} theme="colored" />
      </>
    );
  }
}

export default App;
