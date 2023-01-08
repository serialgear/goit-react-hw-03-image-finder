import React from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends React.Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, description } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <GalleryItem>
          <GalleryImage
            src={webformatURL}
            alt={description}
            onClick={this.toggleModal}
          />

          {showModal && (
            <Modal
              largeImageURL={largeImageURL}
              description={description}
              onClose={this.toggleModal}
            />
          )}
        </GalleryItem>
      </>
    );
  }
}

export default ImageGalleryItem;
