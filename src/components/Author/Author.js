import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PostList } from '../PostList';
import { AuthorRow } from '../AuthorRow';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    paddingBottom: 15,
  },
});

const Author = ({
  author,
  posts,
  handleAuthor,
  isAuthorSelected,
}) => (
  <View style={styles.root}>
    {isAuthorSelected ? (
      <PostList author={author} posts={posts} handleAuthor={handleAuthor} />
    ) : (
      <AuthorRow author={author} posts={posts} handleAuthor={handleAuthor} />
    )}
  </View>
);

Author.propTypes = {
  author: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  handleAuthor: PropTypes.func,
  isAuthorSelected: PropTypes.bool,
};

export default Author;
