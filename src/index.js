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

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
            this.setState({ videos });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <div className="row">
                    <VideoDetail video={this.state.videos[0]} />
                    <VideoList videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
