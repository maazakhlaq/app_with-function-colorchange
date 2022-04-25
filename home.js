import React ,{useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

function randomHex() { 

  let letters = "0123456789ABCDEF"; 

  let color = "#"; 

  for (let i = 0; i < 6; i++) { 

    color += letters[Math.floor(Math.random() * 16)]; 

  } 

  return color; 

} 

const SecondPage = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Second Page', 
      headerStyle: {
        backgroundColor: '#f4511e', 
      },
      headerTintColor: '#fff', 
      headerTitleStyle: {
        fontWeight: 'bold', 
      },
      headerLeft: () => (
        <TouchableOpacity
        onPress={() => setBgColor(randomHex())}
        style={{marginRight: 10}}>
        <Text style={{color: 'white'}}>color change</Text>
      </TouchableOpacity>
      ),
      headerTitle: (props) => (
        <Text
          {...props}
          style={{color: 'white', fontWeight: 'bold'}}>
          Color Page
        </Text>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setBgColor(randomHex())}
          style={{marginRight: 10}}>
          <Text style={{color: 'white'}}>color change</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const [bgColor, setBgColor] = useState(randomHex());

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={styles.header}>
          Simple background  Color Change App
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginRight: 10}}>
          <Text style={{color: 'black'}}>Home Button</Text>
        </TouchableOpacity>
        <Text>With navigation bar</Text>
      </View>
      <Text style={{textAlign: 'center', color: 'grey'}}>
       function color change
      </Text>
    </SafeAreaView>
  );
};

export default SecondPage;

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
  textStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});