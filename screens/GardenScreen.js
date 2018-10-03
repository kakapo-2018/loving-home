import React from 'react';
import { fetchAnimals, updateActiveAnimal, fetchUserInventory, setLoading } from '../actions'
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 0
  },
  backgroundImageFaded: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    zIndex: 0
  },
  inventoryContainer: {
    // position: 'absolute',
    // top: 90,
    // left: 100,
    // width: 450,
    // height: 150,
    margin: '10%',
    marginBottom: '5%',
    padding: 20,
    flex: 1,
    // width: 530,
    // height: 200,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    opacity: 1,
    zIndex: 1
  },
  inventoryExit: {
    // marginTop: '5%',
    // marginRight: '5%',
    position: 'absolute',
    right: '8.5%',
    top: '18%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'lightpink',
    width: 35,
    height: 35,
    paddingLeft: 8.5,
    paddingTop: 1,
    opacity: 1,
    zIndex: 2
  },
  inventoryExitX: {
    fontSize: 20,
    textAlign: 'left',
    padding: 0,
    margin: 0
  },
  invList: {
    flex: 1,
    margin: 0,
    padding: 2,
    paddingBottom: 2,
    maxWidth: '60%',
    maxHeight: '80%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  invListItem: {
    flex: 1,
    height: 80,
    margin: 2,
    padding: 5,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'green'
  }
})

class GardenScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hidden: true
    }

    this.showAnimalInventory = this.showAnimalInventory.bind(this)
    this.closeAnimalInventory = this.closeAnimalInventory.bind(this)
  }


  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.setLoading(true)
    let promiseArr = []
    promiseArr.push(this.props.fetchAnimals())
    promiseArr.push(this.props.fetchUserInventory())
    Promise.all(promiseArr)
      .then(() => {
        this.props.setLoading(false)
      })
  }

  showAnimalInventory(animal) {
    if (this.props.user.loading === false) {
      this.props.updateActiveAnimal(animal)
      this.setState({
        hidden: false
      })
    }
  }

  closeAnimalInventory() {
    this.props.updateActiveAnimal(null)
    this.setState({
      hidden: true
    })
  }

  keyExtractor = (item, index) => String(item.id)

  render() {
    if (this.state.hidden) {
      return (
        <ImageBackground source={require('../assets/images/backyard.jpg')} style={styles.backgroundImage}>
          <View>
            <TouchableWithoutFeedback onPress={() => { this.showAnimalInventory(2) }}>
              <Image style={{ width: 150, height: 150, top: 20, left: 115 }} source={require('../assets/images/cat.png')} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => { this.showAnimalInventory(1) }}>
              <Image style={{ width: 150, height: 150, top: -10, left: 370 }} source={require('../assets/images/dog.png')} />
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={this.closeAnimalInventory} style={styles.inventoryExit}>
            <Text style={styles.inventoryExitX}>X</Text>
          </TouchableOpacity>
          <View style={styles.inventoryContainer}>
            <FlatList
              style={styles.invList}
              data={this.props.user.inventory}
              keyExtractor={this.keyExtractor}
              renderItem={({ item }) => (
                <View style={styles.invListItem}>
                  <Text>{item.name}</Text>
                </View>
              )}
            />

            <Text>Inventory. {this.props.user.inventory.length}</Text>
            {/* <Text>{this.props.animals.ActiveAnimal.name} is a {this.props.animals.ActiveAnimal.disposition} {this.props.animals.ActiveAnimal.species}</Text> */}
          </View>
          <ImageBackground source={require('../assets/images/backyard.jpg')} style={styles.backgroundImageFaded}>
            <View>
              <Image style={{ width: 150, height: 150, top: 20, left: 115 }} source={require('../assets/images/cat.png')} />
              <Image style={{ width: 150, height: 150, top: -10, left: 370 }} source={require('../assets/images/dog.png')} />
            </View>
          </ImageBackground>
        </View>
      )
    }
  }
}

{/* <View style={this.state.hidden ? { height: 0 } : styles.hidden}>
  <Text style={this.state.hidden ? { height: 0 } : styles.hiddenHeader}>Inventory</Text>
</View> */}

function MapStateToProps(state) {
  return {
    animals: state.animals,
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAnimals: fetchAnimals,
    updateActiveAnimal: updateActiveAnimal,
    fetchUserInventory: fetchUserInventory,
    setLoading: setLoading
  }, dispatch)
}

export default connect(MapStateToProps, mapDispatchToProps)(GardenScreen)