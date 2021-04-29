import React, { useEffect, useState } from 'react';
import {BackHandler, Text,} from 'react-native';
import { SearchPanel } from '../SearchPanel';
import { Post } from '../Post';
import PropTypes from 'prop-types';

const PostList = ({ author, posts, handleAuthor }) => {
  const [search, setSearch] = useState('');
  const [currentPost, setCurrentPost] = useState(null);

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
  const selectedPost = posts.find(post => post.id === currentPost);
  return (
    <>
      <Text>{`${author.name}'s`}</Text>
      {selectedPost ? (
        <Post handlePost={setCurrentPost} post={selectedPost} key={selectedPost.id} />
      ) : (
        <>
          <SearchPanel onSearch={setSearch} />
          {posts.filter(onPostsSearch)
              .map(post => (
                  <Post handlePost={setCurrentPost} post={post} key={post.id} isShort />
              ))}
        </>
      )}
    < />
  );
};

PostList.propTypes = {
  author: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  handleAuthor: PropTypes.func.isRequired,
};

export default PostList;
