import React, { Component } from 'react';
import NewsBox from "./NewsBox";

class Feed extends Component {
  render() {
    return (
      <div className="Feed">
        <NewsBox/>
      </div>
    );
  }
}

export default Feed;