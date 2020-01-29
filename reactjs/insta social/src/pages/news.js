import React from 'react';
import './news.css'
import api from '../services/api';

export default class News extends React.Component{

  state = {
    image: null,
    author:'',
    place: '',
    description: '',
    hashtags: ''
  }

  handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();

    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    await api.post('posts', data);
    this.props.history.push('/');

  };

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  handleImageChange = e => {
    this.setState({
      image : e.target.files[0]
    });
  };


  render(){
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange}></input>
        <input type="text" name="author" placeholder="Author" value={this.state.author} onChange={this.handleChange}></input>
        <input type="text" name="place"  placeholder="Place" value={this.state.palce} onChange={this.handleChange}></input>
        <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}></input>
        <input type="text" name="hashtags" placeholder="Hashtags" value={this.state.hashtags} onChange={this.handleChange}></input>
        <button type="submit">Send</button>
      </form>
    );
  }

}