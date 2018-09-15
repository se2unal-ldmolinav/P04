import React, { Component } from 'react';
import '../styles/App.css';
import Movie from './Movie';
import axios from 'axios';

class MovieList extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies : []
        };
    }
    
    componentWillMount(){
        axios({
            method:'get',
            url:'https://ghibliapi.herokuapp.com/films',
        })
        .then(response => {
            const movies = response.data;
            this.setState({ movies });
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    
    }
    
    render() {
        const domMovies = this.state.movies.map(movie => {
            return <Movie title={movie.title} director={movie.director} 
            description={movie.description} release_date={movie.release_date}/>; 
        });

        return(
            <div>
                <h1>Películas de Studio Ghilbi</h1>
                <table>
                    <tr>
                        <th>Título</th>
                        <th>Descripción</th> 
                        <th>Director</th>
                        <th>Año de estreno</th>
                    </tr>
                    {domMovies}
                </table>  
            </div>    
        );
        
    }
}

export default MovieList;