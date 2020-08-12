import React, {FC} from 'react';
import { SearchBar } from 'react-native-elements';

interface Props {
  onChangeText: (text:String) => void;
  onClear: () => any;
  value?: any;
}

const DefaultSearchBar: FC<Props> = ({onChangeText, onClear, value}) => {
  return (
    <SearchBar
        containerStyle={{
          margin:0,
          paddingRight:10,
          paddingLeft:10,
          paddingTop:0,
          paddingBottom:0,
          borderBottomWidth:0,
          borderTopWidth:0,
          borderLeftWidth:0,
          borderRightWidth:0,
          borderRadius:0,
          backgroundColor:'white',
        }}
        inputContainerStyle={{
          margin:0,
          padding:0,
          backgroundColor:'white'
        }}
        inputStyle={{
          color:'black',
          fontSize:14
        }}
        autoCorrect={false}
        value={ value }
        onClear={ onClear }
        onChangeText={ onChangeText }
      />
  );
};


export default DefaultSearchBar;