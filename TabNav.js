import React, {Component} from 'react';
import {
  TabNavigator,
} from 'react-navigation';
import EmployeeScreen from './EmployeeScreen';
import OtherTabScreen from './OtherTabScreen';

const initialRouteName= 'Employee';
const Tab = TabNavigator({
    'Tab1': {screen: OtherTabScreen},
    'Employee': {screen: EmployeeScreen},
    'Tab3': {screen: OtherTabScreen}
}, {
  initialRouteName: initialRouteName
});
export default Tab;