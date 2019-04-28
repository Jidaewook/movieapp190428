// import {createStackNavigator, createAppContainer} from "react-navigation";
// import TabNavigation from "./Tapnavigation";
// import DetailScreen from "../screens/Detail";
// import {headerStyles} from "./config";


// const MainNavigation = createStackNavigator(
//     {
//         Tabs: {screen: TabNavigation, navigationOptions: {header: null}},
//         Detail: {
//             screen: DetailScreen, 
//             navigationOptions: {
//                 ...headerStyles
//             }
//         }
//     },
//     {}
// );

// export default createAppContainer(MainNavigation);


import { createStackNavigator, createAppContainer } from "react-navigation";
// import TabNavigation from "./TabNavigation";
import TabNavigation from "./TapNavigation";
import DetailScreen from "../screens/Detail";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
    {
        Tabs: { screen: TabNavigation, navigationOptions: { header: null } },
        Detail: {
            screen: DetailScreen,
            navigationOptions: {
                ...headerStyles
            }
        }
    },
{ }
);

export default createAppContainer(MainNavigation);