import React, { Component } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../RootScreen/index';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { getCoinListRequest } from './action';
import Spinner from '../../components/Spinner';
import DefaultSearchBar from '../../components/DefaultSearchBar';

interface Props {
  callGetCoinList: () => any;
  navigation: StackNavigationProp<StackParamList>;
  getCoinList?: any
}

interface State {
  coinList?: any,
  searchInput: String
}

class MainScreen extends Component<Props, State>{
  arrayHolder: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      searchInput: '',
      coinList: null,
    };
    this.arrayHolder=[];
  }

  componentDidMount(){
    this.props.callGetCoinList();
  }

  componentDidUpdate(prevProps:any) {
    if(this.props.getCoinList !== prevProps.getCoinList){
      this.setState({coinList:this.props.getCoinList.data})
      this.arrayHolder=this.props.getCoinList.data;
    }
  }

  searchFilterFunction = (text: String) =>{
    const newData = this.arrayHolder.filter((item:any) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      
      return itemData.indexOf(textData) > -1;
    });
  
    this.setState({
      coinList:newData,
      searchInput:text
    });
  }

  renderItem=({item}: any)=>{
    return(
      <TouchableOpacity 
        style={styles.itemContainer}
        onPress={()=>{this.props.navigation.navigate('DetailScreen',{
          name: item.name,
          id: item.id
        })}}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { coinList } = this.state;
    const { getCoinList } = this.props;
    
    if(getCoinList.fetching) return (<Spinner/>)
    return (
      <>
        <DefaultSearchBar
          value={this.state.searchInput}
          onClear={()=>this.setState({searchInput:''})}
          onChangeText={(text:String)=>this.searchFilterFunction(text)}
        />
        <FlatList
          data={coinList}
          keyExtractor={coin=>coin.id}
          renderItem={this.renderItem}
          initialNumToRender={20}
          ItemSeparatorComponent={()=><View style={styles.separator}/>}
        />
      </>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    getCoinList: state.getCoinList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    callGetCoinList: () => dispatch(getCoinListRequest()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);

const styles = StyleSheet.create({
  itemContainer:{
    padding:20,
    shadowColor: "rgba(0, 0, 0, 0.05)", 
    shadowRadius: 5,
    shadowOpacity: 1, 
    shadowOffset: {width: 5, height: 0}
  },
  separator:{
    width:'100%',
    margin: 'auto', 
    height:5,
    backgroundColor:'#d3d3d3'
  }
})