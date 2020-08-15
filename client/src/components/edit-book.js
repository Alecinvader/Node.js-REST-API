import React, { Component } from "react";
import axios from "axios";

export default class EditBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      author: "",
      genre: "",
      title: "",
      read: false,
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://secret-lake-91457.herokuapp.com/books/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          author: response.data.author,
          genre: response.data.genre,
          title: response.data.title,
          read: response.data.read,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChangeAuthor(event) {
    this.setState({
      author: event.target.value,
    });
  }

  onChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onChangeGenre(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const book = {
      author: this.state.author,
      genre: this.state.genre,
      title: this.state.title,
      read: this.state.read,
    };

    console.log(book);

    axios
      .patch(
        "https://secret-lake-91457.herokuapp.com/books/" +
          this.props.match.params.id,
        book
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Book</h3>
        <form onSubmit={this.onSubmit}>
          {/* <div className="form-group"> 
          <label>Title: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div> */}
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Author: </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
          </div>
          <div className="form-group">
            <label>Genre: </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Update Book"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
