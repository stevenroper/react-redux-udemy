import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { getPost, deletePost } from '../actions/index'
import { Link } from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.getPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push("/");
      });
  }

  render() {
    const { post } = this.props;

    if (!this.props.post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <div>
          <Link to="/">Back to posts</Link>
          <button
            onClick={this.onDeleteClick.bind(this)}
            className="btn btn-danger pull-xs-right">
            Delete Post
          </button>
        </div>
        <div>
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post }
}

export default connect(mapStateToProps, { getPost, deletePost })(PostsShow);