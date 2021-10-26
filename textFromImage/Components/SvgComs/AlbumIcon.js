import { Icon } from 'native-base';
import * as React from 'react';
import Svg, { Defs, G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function AlbumIcon(props) {
  return (
    <Icon
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <Defs></Defs>
      <G data-name="Layer 37" id="prefix__Layer_37">
        <Path
          className="prefix__cls-1"
          d="M24 27H2a1 1 0 01-1-1V2a1 1 0 011-1h22a1 1 0 011 1v24a1 1 0 01-1 1zM3 25h20V3H3z"
        />
        <Path
          className="prefix__cls-1"
          d="M30 31H8a1 1 0 010-2h21V7h-1a1 1 0 010-2h2a1 1 0 011 1v24a1 1 0 01-1 1z"
        />
        <Path
          className="prefix__cls-1"
          d="M2 21.86a1 1 0 01-.7-.29 1 1 0 010-1.41L5.35 16a2.67 2.67 0 013.48-.29l3.59 2.6a.68.68 0 00.88-.08l3.7-3.72a2.75 2.75 0 013.82 0l3.88 3.93a1 1 0 01-1.42 1.4l-3.88-3.93a.69.69 0 00-1 0l-3.71 3.75a2.68 2.68 0 01-3.48.3l-3.59-2.6a.67.67 0 00-.88.07l-4.03 4.13a1 1 0 01-.71.3zM13.85 12.86a4 4 0 114-4 4 4 0 01-4 4zm0-6a2 2 0 102 2 2 2 0 00-2-2z"
        />
      </G>
    </Icon>
  );
}

export { AlbumIcon };
