import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Step0 from './Step_0';
import Step1 from './Step_1';

// No need to use StackNavigator, can use state instead
// const WizardFormNavigation = StackNavigator({
//     Step0: {screen: Step0},
//     Step1: {screen: Step1},
//   },
//   {
//     navigationOptions: {
//       header: null
//     }
//   });

export default class InviteEmployeeWizardForm extends Component{
    constructor(props){
        super(props);
        console.log('Loaded!');
        this.state = {
            currentStep: 0,
        }
    }
    render(){
        return(
            <View style={{
                flex: 1,
                justifyContent: 'center',
            }}>
                <Text style={{fontSize: 30}}>InviteEmployeeWizardForm</Text>
                {/* <WizardFormNavigation/> */}
                {this.state.currentStep == 0 ? <Step0/> : <Step1/>}
                <Button title='Next' color='#f44336'
                    style={{
                        height: 30,
                        bottom: 0
                    }}
                    onPress={() => {
                        if (this.state.currentStep == 1)
                            this.props.navigation.navigate('TabScreen', {tab: 'Employee'});
                        else
                            this.setState({currentStep: 1})
                    }}/>
            </View>
        )
    }
}