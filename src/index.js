import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list'
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = '';

class App  extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };

        // Downwards dataflow, only the most parent component should be responsible for fetching data
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            // syntactic sugar for setting state.videos to the videos variable
            // this. setState({ videos = videos })
            this.setState({ vidoes });
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                {/* passing videos as a prop to VideoList from current component */}
                <VideoDetail />  
                <VideoList videos={this.state.videos}/> 
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));
