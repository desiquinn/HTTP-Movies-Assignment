import React, { Component } from 'react';

export default class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedMovie: {
                title: '',
                director: '',
                metascore: '',
                stars: [],
            },
        };
    };

    handleChange = event => {
        this.setState({
            ...this.state.updatedMovie,
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Update The Movie</h1>
                <p> Make changes in the form below to update the movie's details</p>
                <input 
                    type='text'
                    name='title'
                    placeholder='Title'
                    value = {this.state.updatedMovie.title}
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='director'
                    placeholder='Director'
                    value = {this.state.updatedMovie.director}
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='metascore'
                    placeholder='Metascore'
                    value = {this.state.updatedMovie.metascore}
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='stars'
                    placeholder='Stars'
                    value = {this.state.updatedMovie.stars}
                    onChange={this.handleChange}
                />
                <button type='submit'>Update</button>
            </form>
        )
    }
}
