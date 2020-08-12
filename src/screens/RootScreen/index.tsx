import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import MainScreen from '../MainScreen/index';
import DetailScreen from '../DetailScreen/index';

export type StackParamList = {
  MainScreen: undefined;
  DetailScreen: { name: string, id: any};
};

const Stack = createStackNavigator<StackParamList>();

interface Props {}

class RootScreen extends Component<Props> {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainScreen"
        >
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              title:"Список криптовалют",
              headerTintColor:'white',
              headerStyle: {
                backgroundColor:'orange'
              }
            }}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={({ route })=>({
              headerTitle: route.params.name,
              headerBackTitleVisible: false,
              headerTintColor:'white',
              headerStyle: {
                backgroundColor:'orange',
              }
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = () => { 
  return {};
}

const mapDispatchToProps = () => { 
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen);