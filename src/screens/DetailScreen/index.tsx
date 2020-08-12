import React, { Component } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../RootScreen/index';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { getCurrentCoinRequest } from './action';
import Spinner from '../../components/Spinner';


interface Props {
  callGetCurrentCoin: (arg: any) => any;
  navigation: StackNavigationProp<StackParamList>;
  getCurrentCoin?: any,
  route?:any
}

interface State {
  coinId?: any,
  coinInfo: any,
}

class DetailScreen extends Component<Props,State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      coinId: this.props.route.params.id,
      coinInfo: null
    };
  }

  componentDidMount(){
    this.props.callGetCurrentCoin(this.state.coinId);
  }

  static getDerivedStateFromProps(nextProps: any) {
    return {coinInfo: nextProps.getCurrentCoin.data};
  }

  render() {
    const { getCurrentCoin } = this.props;
    const { coinInfo } = this.state;
    if(getCurrentCoin.fetching || coinInfo===null ) return (<Spinner/>)
    else {
      return (
        <ScrollView style={{flex:1}}>
          <View style={styles.containerImage}>
            <Image 
              style={{width: 250,height: 250}}
              resizeMode='contain'
              source={{uri: coinInfo.image.large}}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textHeader}>Алгоритм шифрования: </Text>
            <Text style={{fontSize:14}}>{coinInfo.hashing_algorithm ? coinInfo.hashing_algorithm : "неизвестен" }</Text>
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textHeader}>Описание: </Text>
            <Text style={{fontSize:14}}>{coinInfo.description.en ? coinInfo.description.en.replace(/<\/?[^>]+(>|$)/g, "") : "отсутствует"}</Text>
          </View>
          
        </ScrollView>
      )
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    getCurrentCoin: state.getCurrentCoin
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    callGetCurrentCoin: (id: any) => dispatch(getCurrentCoinRequest(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DetailScreen);

const styles = StyleSheet.create({
  containerImage:{
    alignItems:'center',
    marginTop:20,
    marginBottom:20
  },
  containerText:{
    marginBottom:10,
    marginLeft:20,
    marginRight:20,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  textHeader:{
    fontWeight:'bold',
    fontSize:14
  }
})