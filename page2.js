import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const FirstPage = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <Text
          {...props}
          style={{color: 'white', fontWeight: 'bold'}}>
          Home Page
        </Text>
      ),
      headerStyle: {
        backgroundColor: '#f4511e', //Set Header color
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container }>
        <Text style={styles.header}>
          Color Change With React Navigation 
        </Text>
         <TouchableOpacity
          onPress={() => navigation.navigate('SecondPage')}
          activeOpacity={0.7}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>
            Click to see color change page 
          </Text>
        </TouchableOpacity>
      
		</View>
      <Text style={{textAlign: 'center', color: 'grey'}}>
        Background Color change
      </Text>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 16,
  },
  buttonStyle: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#808080',
    borderRadius: 2,
    marginTop: 12,
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});