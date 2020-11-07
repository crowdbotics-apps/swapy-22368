import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
