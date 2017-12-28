import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Step1 extends Component {
    render(){
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{fontSize: 30}}>Step 1</Text>
            </View>
        );
    }
}