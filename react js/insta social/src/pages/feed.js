import React from 'react';
import './feed.css';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';
import more from '../assets/more.svg'
import api from '../services/api';
import io from 'socket.io-client';

export default class Feed extends React.Component {

  state = {
    feed: []
  };

  async componentDidMount() {
    this.registerToSocket();
    const response = await api.get('posts');
    this.setState({ feed: response.data });
  }

  registerToSocket = () => {
    const socket = io('http://localhost:8080');
    socket.on('posts', newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] })
    })

    socket.on('like', likedPost => {
      this.setState({
        feed: this.state.feed.map(post => post._id === likedPost._id? likedPost : post)
      })
    })
  }

  handleLike = id => {
    api.post(`posts/${id}/like`);
  }

  render() {
    return (
      <section id="post-list">
        {this.state.feed.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>
              <img src={more} alt="Mais" />
            </header>
            <img src={`http://localhost:8080/files/${post.image}`} alt="Images" />
            <footer>
              <div className="actions">
                <button onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt="like" />
                </button>
                <img src={comment} alt="comment" />
                <img src={send} alt="send" />
              </div>
              <strong>{post.likes} curtidas</strong>
              <p>{post.description}
                {post.hashtags.split(" ").map(word => (
                  <span key={word}> #{word}</span>
                ))}
              </p>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}
