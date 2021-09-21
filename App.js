import React, {useRef, useEffect} from 'react';
import {View, Text, Button, Animated} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
  TransitionSpecs,
} from '@react-navigation/stack';
import VideoPlayer from './src/screens/VideoPlayer';

function HomeScreen() {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="navigate" onPress={() => navigate('Details')} />
    </View>
  );
}
function DetailsScreen() {
  const translate = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translate, {
          toValue: 3,
          duration: 4999,
          useNativeDriver: true,
        }),
        Animated.timing(translate, {
          toValue: 0,
          duration: 4999,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [translate]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <Animated.View
        style={[
          {backgroundColor: 'red', width: 99, height: 99},
          {transform: [{scale: translate}]},
        ]}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.ModalPresentationIOS,
        }}>
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
