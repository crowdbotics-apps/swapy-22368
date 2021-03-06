import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile168839Navigator from '../features/UserProfile168839/navigator';
import Tutorial168838Navigator from '../features/Tutorial168838/navigator';
import NotificationList168810Navigator from '../features/NotificationList168810/navigator';
import Settings168809Navigator from '../features/Settings168809/navigator';
import Settings168801Navigator from '../features/Settings168801/navigator';
import UserProfile168799Navigator from '../features/UserProfile168799/navigator';
import UserProfile168768Navigator from '../features/UserProfile168768/navigator';
import Tutorial168767Navigator from '../features/Tutorial168767/navigator';
import NotificationList168739Navigator from '../features/NotificationList168739/navigator';
import Settings168738Navigator from '../features/Settings168738/navigator';
import Settings168730Navigator from '../features/Settings168730/navigator';
import UserProfile168728Navigator from '../features/UserProfile168728/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile168839: { screen: UserProfile168839Navigator },
Tutorial168838: { screen: Tutorial168838Navigator },
NotificationList168810: { screen: NotificationList168810Navigator },
Settings168809: { screen: Settings168809Navigator },
Settings168801: { screen: Settings168801Navigator },
UserProfile168799: { screen: UserProfile168799Navigator },
UserProfile168768: { screen: UserProfile168768Navigator },
Tutorial168767: { screen: Tutorial168767Navigator },
NotificationList168739: { screen: NotificationList168739Navigator },
Settings168738: { screen: Settings168738Navigator },
Settings168730: { screen: Settings168730Navigator },
UserProfile168728: { screen: UserProfile168728Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
