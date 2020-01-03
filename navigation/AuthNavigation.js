import { createStackNavigator } from 'react-navigation-stack'
import _init_ from '../screens/Initialise'
import Signup from '../screens/Signup'

const AuthNavigation = createStackNavigator(
  {
    _init_: { screen: _init_ },
    Signup: { screen: Signup }
  },
  {
    
    headerMode: 'none'
  }
)

export default AuthNavigation