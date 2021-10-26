import { Icon } from 'native-base';
import * as React from 'react';
import Svg, { Defs, G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function CameraIcon(props) {
  return (
    <Icon
      height="1em"
      viewBox="0 0 32 32"
      widt
      h="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipRule="evenodd" fill="#333" fillRule="evenodd">
        <Path d="M16 10.001a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8zm4.555 11.905a5.998 5.998 0 01-8.459.65 5.997 5.997 0 01-.65-8.459 6 6 0 019.109 7.809z" />
        <Path d="M16 14.001A4 4 0 0012 18v.002a.5.5 0 001 0V18a3 3 0 013-2.999.5.5 0 000-1z" />
        <Path d="M29.492 9.042l-4.334-.723-1.373-3.434A2.988 2.988 0 0021 3H11a2.99 2.99 0 00-2.786 1.886L6.842 8.319l-4.333.723A2.989 2.989 0 000 12v15c0 1.654 1.346 3 3 3h26c1.654 0 3-1.346 3-3V12a2.989 2.989 0 00-2.508-2.958zM30 27a1 1 0 01-1 1H3a1 1 0 01-1-1V12a1 1 0 01.836-.986l5.444-.907 1.791-4.478C10.224 5.25 10.591 5 11 5h10c.408 0 .775.249.928.629l1.791 4.478 5.445.907A1 1 0 0130 12v15z" />
      </G>
    </Icon>
  );
}

export { CameraIcon };
