import React from 'react';

class NewBookmark extends React.Component {
  state = {
    title: '',
    url: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.url.trim()) {
      this.props.onAddBookmark(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      title: '',
      url: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={this.handleInputChange}
          value={this.state.title}
        />
        <input
          type="text"
          placeholder="URL"
          name="url"
          onChange={this.handleInputChange}
          value={this.state.url}
        />
        <hr />
        <button type="submit">Add bookmark</button>
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
      </form>
    );
  }
}

export default NewBookmark;