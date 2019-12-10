import ReactHtmlParser from 'react-html-parser';

import BubblesIcon from '../../assets/svg/bubbles.svg';
import CameraIcon from '../../assets/svg/camera.svg';
import FbIcon from '../../assets/svg/facebook.svg';
import FolderIcon from '../../assets/svg/folder.svg';
import HomeIcon from '../../assets/svg/home.svg';
import PlayIcon from '../../assets/svg/play.svg';
import PlusIcon from '../../assets/svg/plus.svg';
import SearchIcon from '../../assets/svg/search.svg';
import TwitterIcon from '../../assets/svg/twitter.svg';
import UserIcon from '../../assets/svg/user.svg';

export function IconFactory(SVGComponent) {
  console.log('IconFactory - SVGComponent: ', SVGComponent);
  return ReactHtmlParser(SVGComponent);
}

export const IconList = {
  bubbles: BubblesIcon,
  camera: CameraIcon,
  facebook: FbIcon,
  folder: FolderIcon,
  home: HomeIcon,
  play: PlayIcon,
  plus: PlusIcon,
  search: SearchIcon,
  twitter: TwitterIcon,
  user: UserIcon
};
