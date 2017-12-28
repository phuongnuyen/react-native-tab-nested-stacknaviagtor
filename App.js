import React, { Component } from 'react';
import {
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import TabNav from './TabNav';
import InviteEmployeeWizardForm from './InviteEmployeeWizardForm';
import EmployeeScreen from './EmployeeScreen';

const App = StackNavigator({
  TabScreen: {screen: TabNav},
  EmployeeScreen: {screen: EmployeeScreen},
  InviteEmployeeWizardForm: {screen: InviteEmployeeWizardForm},  
},
{
  navigationOptions: {
    header: null
  }
});



export default App;