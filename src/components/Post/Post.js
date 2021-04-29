import React, {useEffect} from 'react';
import {Text, View, StyleSheet, BackHandler, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
    marginBottom: 5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    padding: 5,
    backgroundColor: 'white',
  },
  body: {
    opacity: 0.54,
    padding: 5,
  },
});

const Post = ({ post: { id, title, body } }) => (
    <View
        key={id}
        style={styles.root}
    >
      <Text
          style={styles.title}
      >
        {`Title: ${title}`}
      </Text>
      <Text style={styles.body}>
        {`Body: ${body}`}
      </Text>
    </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default Post;
