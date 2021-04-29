import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from './ArrowIcon';

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    minHeight: 100,
    padding: 10,
  },
  titleBlock: {
    flex: 0.6,
  },
  name: {
    fontSize: 16,
    paddingBottom: 5,
  },
  email: {
    fontSize: 10,
    color: 'gray',
  },
  postBlock: {
    marginTop: 5,
    flex: 0.4,
    position: 'relative',
  },
  postQuantity: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  arrowIcon: {
    top: 6,
    right: 0,
    position: 'absolute',
  },
});

const AuthorRow = ({ author, posts }) => (
  <>
    <View style={styles.root}>
      <View style={styles.titleBlock}>
        <Text style={styles.name}>{author.name}</Text>
        <Text style={styles.email}>
          {author.email}
        </Text>
      </View>
      <View style={styles.postBlock}>
        <Text style={styles.postQuantity}>
          {`${posts.length} posts`}
        </Text>
        <ArrowIcon style={styles.arrowIcon} />
      </View>
    </View>
  </>
);

AuthorRow.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  posts: PropTypes.array.isRequired,
};

export default AuthorRow;
