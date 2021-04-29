import Svg, {Path} from 'react-native-svg';
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const ArrowIcon = ({ style, fill,  width, height }) => (
  <View style={style}>
    <Svg width={width} height={height} viewBox="0 0 8 12" fill="none" >
      <Path
        d="M3.8147e-06 1.41L4.58 6L3.8147e-06 10.59L1.41 12L7.41 6L1.41 0L3.8147e-06 1.41Z"
        fill={fill}
      />
    </Svg>
  </View>
);

ArrowIcon.propTypes = {
    style: PropTypes.object,
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};
ArrowIcon.defaultProps = {
    style: {},
    fill: '#382A2C',
    width: 8,
    height: 12,
};

export default ArrowIcon;