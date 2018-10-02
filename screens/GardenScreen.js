import React from 'react';
import { fetchAnimals, updateActiveAnimal } from '../actions'
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 0
  },
  backgroundImageFaded: {
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
    padding: 20,
    minWidth: 300,
    minHeight: 200,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    opacity: 1,
    zIndex: 1
  },
  inventoryExit: {
    position: 'absolute',
    right: 5,
    top: 5,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'lightpink',
    width: 35,
    height: 35,
    paddingLeft: 8.5,
    paddingTop: 1
  },
  inventoryExitX: {
    fontSize: 20,
    textAlign: 'left',
    padding: 0,
    margin: 0
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
    this.currentAnimalInfo = this.currentAnimalInfo.bind(this)
  }


  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.fetchAnimals()
  }

  showAnimalInventory(animal) {
    this.props.updateActiveAnimal(animal)
    this.setState({
      hidden: false
    })
  }

  closeAnimalInventory() {
    this.props.updateActiveAnimal(null)
    this.setState({
      hidden: true
    })
  }

  currentAnimalInfo() {
    if (this.props.animals.ActiveAnimal.id) {
      return this.props.animals.UserAnimals.find(animal => {
        return animal.animalId === this.props.animals.ActiveAnimal.id
      })
    } else {
      return {
        animalId: null,
        name: "",
        species: "",
        disposition: ""
      }
    }
  }

  render() {
    let currentAnimal = { ...this.currentAnimalInfo() }
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
        <View>
          <View style={styles.inventoryContainer}>
            <TouchableOpacity onPress={this.closeAnimalInventory} style={styles.inventoryExit}>
              <Text style={styles.inventoryExitX}>X</Text>
            </TouchableOpacity>
            <Text>Inventory</Text>
            <Text>{currentAnimal.name} is a {currentAnimal.disposition} {currentAnimal.species}</Text>
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
    animals: state.animals
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAnimals: fetchAnimals,
    updateActiveAnimal: updateActiveAnimal
  }, dispatch)
}

export default connect(MapStateToProps, mapDispatchToProps)(GardenScreen)