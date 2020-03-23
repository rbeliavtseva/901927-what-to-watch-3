import React, {PureComponent, createRef} from 'react';

const withFullScreenVideo = (Component) => {
  class WithFullScreenVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoPlayer = createRef();
      this._playToggler = createRef();
      this._playerProgress = createRef();

      this.state = {
        videoStarted: false,
        videoFullScreen: false,
        videoReady: false,
      };

      this.handleVideoStartPause = this.handleVideoStartPause.bind(this);
      this.videoFullScreen = this.videoFullScreen.bind(this);
      this.handleVideoReady = this.handleVideoReady.bind(this);
      this.handleVideoBarUpdate = this.handleVideoBarUpdate.bind(this);
    }

    handleVideoStartPause() {
      const videoPlayer = this._videoPlayer.current;

      if (!this.state.videoStarted) {
        videoPlayer.videoPlay();
      } else {
        videoPlayer.videoPause();
      }

      this.setState({videoStarted: !this.state.videoStarted});
    }

    videoFullScreen() {
      if (!this.state.videoFullScreen) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }

      this.setState({videoFullScreen: !this.state.videoFullScreen});
    }

    handleVideoReady() {
      this.setState({videoReady: !this.state.videoReady});
    }

    handleVideoBarUpdate() {
      const {currentTime, duration} = this._videoPlayer.current._videoRef.current;

      const togglerPosition = (Math.round((currentTime / duration) * 100));

      this._playToggler.current.style.left = togglerPosition + `%`;
      this._playerProgress.current.value = togglerPosition;
    }

    componentDidUpdate(_, prevState) {
      if (this.state.videoReady && !prevState.videoReady) {
        this._playToggler.current.style.left = 0 + `%`;
        this._playerProgress.current.value = 0;
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          videoPlayer={this._videoPlayer}
          playToggler={this._playToggler}
          playerProgress={this._playerProgress}
          videoReady={this.state.videoReady}
          handleVideoReady={this.handleVideoReady}
          videoStarted={this.state.videoStarted}
          videoFullScreen={this.state.videoFullScreen}
          handleVideoFullScreen={this.videoFullScreen}
          handleVideoStartPause={this.handleVideoStartPause}
          handleVideoBarUpdate={this.handleVideoBarUpdate}
        />
      );
    }
  }

  return WithFullScreenVideo;
};

export default withFullScreenVideo;
