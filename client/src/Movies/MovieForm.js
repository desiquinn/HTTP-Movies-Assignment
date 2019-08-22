import React, { Component } from 'react';
import axios from "axios";

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

    componentDidMount () {
        const id = this.props.match.params.id

        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res => {
                this.setState({ updatedMovie: res.data })
                console.log(res.data)
            })
            .catch(err => console.log(err.response));
    }

    //this.props.match.params.id

    handleChange = event => {
        console.log(event.target.name)
        console.log(event.target.value)
        console.log(this.state.updatedMovie)
        this.setState({
            updatedMovie:{
                ...this.state.updatedMovie,
                [event.target.name]: event.target.value
            }
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${this.props.match.params.id}`, this.state.updatedMovie)
            .then(res => {
                console.log(res.data)
                this.props.history.push("/");
            })
            .catch(err => console.log(err.response))
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
        );
    }
}
