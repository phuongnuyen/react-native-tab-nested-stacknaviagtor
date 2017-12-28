import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export default class EmployeeScreen extends Component{
    render(){
        return(
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{fontSize: 30}}>EmployeeScreen</Text>
                <Button title='Invite' color='#f44336'
                    onPress={() => {
                        this.props.navigation.navigate('InviteEmployeeWizardForm')}}/>
            </View>
        )
    }
}