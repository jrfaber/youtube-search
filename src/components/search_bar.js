import React, { Component } from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: "" };
    }
    
    render (){
        return (
            <div>
                <input 
                    value={this.state.termP}
                    onChange = {event =>
                        this.setState({ term: event.state.term })
                    }
                    />
            </div>
        )
    }
}




export default SearchBar;