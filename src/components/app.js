import React from "react";
import SearchBar from "./searchBar";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";
import NavBar from "./navBar";
import youtube from "../api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  onComment = async term => {
    const response = await youtube.get("/comments", {
      params: {
        q: term
      }
    });
    this.setState({
      comments: response.data.items
    });
  };

  componentDidMount = () => {
    this.onTermSubmit("react basic");
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />

          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail
                  video={this.state.selectedVideo}
                  onComment={this.onComment}
                />
              </div>
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
