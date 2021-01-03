import { PureComponent } from 'react';
import { toast } from 'react-toastify';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Button from '../Button';
import Modal from '../Modal';
import { fetchImages } from '../../services/news-api';
import PropTypes from 'prop-types';

export default class ImageGallery extends PureComponent {
  state = {
    images: [],
    currentPage: 1,
    activeIdx: null,
    status: 'idle',
    showModal: false,
  };

  componentDidMount() {
    this.fetchNewImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({
        images: [],
        currentPage: 1,
        activeIdx: null,
        status: 'idle',
      });
      this.fetchNewImages();
    }

    if (
      prevProps.query === this.props.query &&
      prevState.currentPage !== this.state.currentPage
    ) {
      this.setState({ status: 'pending' });
      const { currentPage } = this.state;
      const q = this.props.query;
      fetchImages(q, currentPage)
        .then(images =>
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
          })),
        )
        .then(() => {
          this.setState({ status: 'resolved' });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(() => this.setState({ status: 'rejected' }));
    }
    return;
  }

  fetchNewImages = () => {
    this.setState({ status: 'pending' });
    const { currentPage } = this.state;
    const q = this.props.query;
    fetchImages(q, currentPage)
      .then(images => this.setState({ images }))
      .then(() => {
        if (this.state.images.length === 0) {
          toast.error(`No such name exists`);
          this.setState({ status: 'idle' });
        } else {
          this.setState({ status: 'resolved' });

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(() => this.setState({ status: 'rejected' }));
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  showImage = e => {
    const index = this.state.images.findIndex(
      image => image.webformatURL === e.target.src,
    );

    this.setState({ activeIdx: index, showModal: true });
  };

  render() {
    const { images, status, activeIdx, showModal } = this.state;

    return (
      <>
        {status === 'rejected' && toast.error(`oops ... something went wrong`)}
        {
          <ul className="ImageGallery">
            {images.map(({ id, tags, webformatURL }) => (
              <ImageGalleryItem
                key={id}
                name={tags}
                url={webformatURL}
                onClick={this.showImage}
              />
            ))}
          </ul>
        }
        <div className="container">
          {status === 'pending' && (
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          )}
          {images.length > 0 && status === 'resolved' && (
            <Button onClick={this.handleLoadMore} />
          )}
        </div>
        {showModal && (
          <Modal image={images[activeIdx]} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};
