import React from 'react';
import { StyleSheet, Text, View, ImageBackground ,Image,Dimensions} from 'react-native';






class RaiseIssue extends React.Component{
    render(){
        return(
            <View  style={styles.container}>
                 <Text>raise issue</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default RaiseIssue;
  
  
  
  
  
  
  