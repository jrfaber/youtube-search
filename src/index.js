import React, { Component } from "react";
import ReactDOM from 'react-dom';
import SearchBar from "./components/search_bar";
import YTSearch from 'youtube-api-search';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS library
import "./index.css"; // in addition, import our own CSS specs

const API_KEY = 'AIzaSyCLbKOa_gXSZ7t15gLv4j56XzxiUSpompI';

class App extends Component {
    constructor(props) {
        super(props);

        this.videoSearch("surfboards")

        this.state = {
            videos: [],
            selectedVideo: null
        };
    }

        videoSearch (term) {
            YTSearch({ key: API_KEY, term: term }, videos => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            });
        }

    render() {
        return (
            <div>
                <SearchBar onSearchTermSearch={term => this.videoSearch(term)}/>
                <div className="row">
                    <VideoDetail video={this.state.videos[0]} />
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList videos={this.state.videos} />
                    <VideoList
                        // callback function
                        onVideoSelect={selectedVideo =>
                            this.setState({ selectedVideo })
                        }
                        videos={this.state.videos}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
