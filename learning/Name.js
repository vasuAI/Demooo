import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
const Name = props => {
  const {name} = props;
  return (
    <SafeAreaView>
      <View>
        <View style={styles.name}>
          <Text style={styles.text1}>Introduction</Text>
          <Text style={styles.text}>
            FirstName:{' '}
            <Text style={styles.spanColor}> {name[0].firstName} </Text>
          </Text>
          <Text style={styles.text}>
            MiddleName:{' '}
            <Text style={styles.spanColor}> {name[0].midName} </Text>
          </Text>
          <Text style={styles.text}>
            LastName: <Text style={styles.spanColor}> {name[0].lastName} </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  name: {
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'space-around',
    paddingHorizontal:25,
    
  },
  text1: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
  text: {
    padding: 10,
    fontSize: 18,
  },
  spanColor: {
    color: '',
    fontSize: 25,
  },
});

export default React.memo(Name);
