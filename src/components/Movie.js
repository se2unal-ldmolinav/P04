import React, { Component } from 'react';
import '../styles/App.css';

class Movie extends Component {
    
    constructor(props){
        super(props);
    }
    
  render() {
    return (
        <tr>
           <td>{this.props.title}</td>
           <td>{this.props.description}</td>
           <td>{this.props.director}</td>
           <td>{this.props.release_date}</td>
        </tr>
    );
  }
}

export default Movie;