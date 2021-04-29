import React, { useEffect, useState } from 'react';
import {BackHandler, Text, StyleSheet } from 'react-native';
import { SearchPanel } from '../SearchPanel';
import { Post } from '../Post';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  title: {
    fontWeight: '400',
    fontSize: 16,
  },
});

const PostList = ({ author, posts, handleAuthor }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const backAction = () => {
      handleAuthor(author.id);

      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const onPostsSearch = post => {
    if (!search) return true;

    return (
      post.title.toLowerCase().includes(search.toLowerCase()
        ) || (
      post.body.toLowerCase().includes(search.toLowerCase()))
    );
  };
  return (
    <>
      <Text style={styles.title}>{`${author.name}'s Posts`}</Text>
      <SearchPanel onSearch={setSearch} />
      {posts.filter(onPostsSearch)
        .map(post => (
          <Post post={post} key={post.id} />
       ))}
    < />
  );
};

PostList.propTypes = {
  author: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  handleAuthor: PropTypes.func.isRequired,
};

export default PostList;
