import React, {Component} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    Alert,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    View,
    CheckBox,
    ImageBackground,
  } from 'react-native';
  import { List, ListItem } from 'react-native-elements'

export default class CharitiesScreen extends React.Component {
    
  static navigationOptions = {
    header: null,
  };



  render() {
      return (
        <ImageBackground source={require('../assets/images/backyard.jpg')}
        style={styles.backgroundImage}>

    <CheckBox
  title='Click Here'
  checked={false}
/>
<FlatList 
    verticle = {true}
    data = {list}
    renderItem={({item}) => <Text>{item.charityName}</Text>}
/>

{/* <List>
<ListItem
data={list}
renderItem={this.renderRow}
// keyExtractor={item => item.charityName}
/>
</List> */}
 

  </ImageBackground>
          
      )
  }
}

const list = [ {charityName: 'SPCA', mission: 'The SPCA helps protect over 45,000 animals in New Zealand every year. Animals who are sick, injured, abused or simply abandoned', websiteURL: 'https://www.spca.nz/', logo: 'https://www.spca.nz/images/logo.svg?v=1' },
{ id: 2, charityName: 'HUHA', mission: 'Helping you help animals (HUHA) is a charitable trust dedicated to teaching empathy to the community and providing shelter for those less fortunate animals that struggle to survive in today’s disposable culture.', websiteURL: 'https://huha.org.nz/', logo: 'https://huha.org.nz/wp-content/uploads/2014/06/huha_logo.png' },
{ id: 3, charityName: 'Wellington Cats Protection League', mission: 'To take in displaced or unwanted cats and rehome them where possible. To inform the public on the care of cats. To encourage the desexing of all cats not required for breeding', websiteURL: 'http://www.cpl-wellington.org.nz/', logo: 'http://www.cpl-wellington.org.nz/sites/default/files/cpl_logo_new.png' },
{ id: 4, charityName: 'Pet Rescue', mission: 'Giving animals a second chance at life', websiteURL: 'http://www.petrescue.org.nz/', logo: 'http://www.petrescue.org.nz/theme/PetRescue/img/logo.png' },
{ id: 5, charityName: 'Upper Hutt Animal Rescue', mission: 'Upper Hutt Animal Rescue Society (UHARS) operates as a shelter that takes in homeless, stray and unwanted animals, providing them with a safe haven until they find a permanent home.', websiteURL: 'https://www.animalrescue.org.nz/', logo: 'https://thelongestwalknz.files.wordpress.com/2017/06/965222_536874076350481_958366789_o.jpg?w=365&h=365&crop=1' },
{ id: 6, charityName: 'The Kitten Inn', mission: 'We take in unwanted pregnant cats, and kittens from throughout the Wellington region. We also regularly run discounted desexing programs to encourage and help people to responsibly desex their cats.', websiteURL: 'http://kitteninn.org.nz/', logo: 'https://scontent.fakl4-1.fna.fbcdn.net/v/t1.0-1/p200x200/12688230_932318636823555_3500040946927369511_n.png?_nc_cat=105&oh=16fe384c75cf8218df21572a35e47a42&oe=5C186A74' }
];

// renderRow ({item}) {
//     return (
//         <ListItem
//         charityName={item.charityName}
//         mission={item.mission}
//         />
//     )
// }

const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      width: '100%',
      height: null,
  }
})