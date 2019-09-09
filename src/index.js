import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/search_bar";

const API_KEY = 'AIzaSyCLbKOa_gXSZ7t15gLv4j56XzxiUSpompI';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
