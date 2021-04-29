import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import React from 'react';
import { Author } from '../Author';
import { SearchPanel } from '../SearchPanel';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  title: {
    fontWeight: '400',
    fontSize: 16,
  },
  content: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  nameBlock: {
    marginTop: 5,
    flex: 0.15,
  },
  name: {
    backgroundColor: '#6FCF97',
    borderRadius: 50,
    width: 50,
    height: 50,
    paddingVertical: 15,
    textAlign: 'center',
  },
  author: {
    flex: 0.85,
    height: 60,
  },
});

const AuthorList = ({
  authors,
  onAuthorSearch,
  posts,
  handleAuthor,
  onSearch,
}) => {
  const getInitials = (name) => {
    const initials = name.match(/(\w)\w*\s(\w)\w*/);

    return initials[1] + initials[2];
  };
  const getPosts = authorId => posts.filter(post => post.userId === authorId);

  return (
    <View>
      <Text style={styles.title}>Authors</Text>
      <SearchPanel onSearch={onSearch} />
      {authors && authors.filter(onAuthorSearch).map(author => (
        <TouchableWithoutFeedback
          key={author.id}
          onPress={() => {handleAuthor(author.id)}}
        >
          <View
            style={styles.content}
          >
            <View style={styles.nameBlock}>
              <Text
                style={styles.name}
              >
                {getInitials(author.name)}
              </Text>
            </View>
            <View style={styles.author}>
              <Author
                key={author.id}
                author={author}
                posts={getPosts(author.id)}
                handleAuthor={(author) => handleAuthor(author)}
                isAuthorSelected={false}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  )
};

AuthorList.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  })).isRequired,
  onAuthorSearch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  })).isRequired,
  handleAuthor: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default AuthorList;