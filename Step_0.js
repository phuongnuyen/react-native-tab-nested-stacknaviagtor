import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Step0 extends Component {
    render(){
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'lightblue',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{fontSize: 30}}>Step 0</Text>
            </View>
        );
    }
}