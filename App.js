import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import styles from './css/styles';

export default class App extends React.Component {
    
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonStyle}>
           <Button
                onPress={() => {
                        Alert.alert('Start The List');
                }} 
                title="Create List"
            /> 
        </View>
        
      </View>
    );
  }
}


