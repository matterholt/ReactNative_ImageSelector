import { Icon } from 'native-base';
import * as React from 'react';
import Svg, { Defs, G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function InfoIcon(props) {
  return (
    <Icon
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <Path d="M66 84H54V42a5.997 5.997 0 00-6-6H36a6 6 0 000 12h6v36H30a6 6 0 000 12h36a6 6 0 000-12zM48 24a12 12 0 10-12-12 12.012 12.012 0 0012 12z" />
    </Icon>
  );
}

export { InfoIcon };
