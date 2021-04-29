import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchIcon from "./SearchIcon";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    height: 40,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    paddingLeft: 11,
    paddingTop: 11,
  },
  input: {
    height: 40,
    opacity: 0.87,
    borderRadius: 4,
    paddingLeft: 40,
  },
});


const SearchPanel = ({ onSearch }) => (
  <View style={styles.root}>
    <SearchIcon style={styles.icon} />
    <TextInput
      style={styles.input}
      onChangeText={onSearch}
      placeholder="Search"
    />
  </View>
);

SearchPanel.propTypes = {
  onSearch: PropTypes.func,
};
SearchPanel.defaultProps = {
  onSearch: () => {},
}

export default SearchPanel;