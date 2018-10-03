import React from 'react';
import { fetchAnimals, updateActiveAnimal, fetchUserInventory, setLoading, setAnimalInventory } from '../actions'
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Button,
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
    margin: '10%',
    marginBottom: '5%',
    padding: 20,
    flex: 1,
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
    flexDirection: 'column',
    height: 80,
    margin: 2,
    padding: 5,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'green'
  },
  // invListEquipBtn: {
  //   width: 10,
  //   // width: 30,
  //   position: 'absolute',
  //   top: -67,
  // },
  invListIconWrapper: {
    // flex: 1,
    position: 'relative',
    left: 0,
    top: 0,
    width: 67,
    height: 67,
    margin: 'auto',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
  },
  invListIcon: {
    flex: 0.9,
    width: '90%',
    margin: 3
  },
  invListItemDescription: {
    flex: 1,
    position: 'absolute',
    left: 76,
    top: 20,
    height: 30,
    width: 184,
    backgroundColor: 'lightgreen',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 3
  },
  invListItemDescriptionEquipped: {
    flex: 1,
    position: 'absolute',
    left: 76,
    top: 20,
    height: 30,
    width: 184,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 3
  },
  invListItemDescriptionText: {
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  invAnimalDesc: {
    position: 'absolute',
    bottom: 18,
    right: 18,
    width: 175,
    height: 30,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    paddingLeft: 0
  },
  invAnimalDescText: {
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  invAnimalImg: {
    position: 'absolute',
    top: 10,
    right: 18,
    width: 170,
    height: 170
  }
})

class GardenScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: true,
      dog: require(`../assets/images/anims/dog-anim-hat.gif`),
      cat: require(`../assets/images/anims/cat-anim-glasses.gif`)
    }
    this.showAnimalInventory = this.showAnimalInventory.bind(this)
    this.closeAnimalInventory = this.closeAnimalInventory.bind(this)
    this.getAnimalImage = this.getAnimalImage.bind(this)
    this.getImage = this.getImage.bind(this)
    this.setAnimalCosmetic = this.setAnimalCosmetic.bind(this)
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
        //this.getAllAnimalImages()
        this.props.setLoading(false)
      })
  }

  showAnimalInventory(animal) {
    if (this.props.user.loading === false) {
      this.props.updateActiveAnimal(animal)
      this.setState({
        hidden: false
      }, () => {
        this.getAnimalImage(animal)
      })
    }
  }

  closeAnimalInventory(animalId) {
    this.props.updateActiveAnimal(null)
    this.setState({
      hidden: true
    }, () => {
      this.getAnimalImage(animalId)
    })
  }

  setAnimalCosmetic(cosmetic) {
    this.props.setAnimalInventory({ ...cosmetic }, this.props.animals.ActiveAnimal.animalId)
    this.getAnimalImage(this.props.animals.ActiveAnimal.animalId)
  }

  getAnimalImage(animalId) {
    let thisActiveAnimal = this.props.animals.UserAnimals.find(animal => {
      return animal.animalId === animalId
    })
    let animSpecies = thisActiveAnimal.species.toLowerCase()
    let cosmetic = thisActiveAnimal.inventory.name.toLowerCase()
    if (cosmetic == "bowler hat") cosmetic = 'hat'
    const animalImageRef = {
      hat: {
        dog: require(`../assets/images/anims/dog-anim-hat.gif`),
        cat: require(`../assets/images/anims/cat-anim-hat.gif`)
      },
      moustache: {
        dog: require(`../assets/images/anims/dog-anim-moustache.gif`),
        cat: require(`../assets/images/anims/cat-anim-moustache.gif`)
      },
      tie: {
        dog: require(`../assets/images/anims/dog-anim-tie.gif`),
        cat: require(`../assets/images/anims/cat-anim-tie.gif`)
      },
      crown: {
        dog: require(`../assets/images/anims/dog-anim-crown.gif`),
        cat: require(`../assets/images/anims/cat-anim-crown.gif`)
      },
      glasses: {
        dog: require(`../assets/images/anims/dog-anim-glasses.gif`),
        cat: require(`../assets/images/anims/cat-anim-glasses.gif`)
      },
      none: {
        dog: require(`../assets/images/anims/dog-anim.gif`),
        cat: require(`../assets/images/anims/cat-anim.gif`)
      }
    }
    animSpecies === 'dog' ?
      this.setState({
        dog: animalImageRef[cosmetic][animSpecies]
      })
      :
      this.setState({
        cat: animalImageRef[cosmetic][animSpecies]
      })
    return animalImageRef[cosmetic][animSpecies]
  }

  getImage() {
    if (this.props.animals.ActiveAnimal.species === 'dog') {
      return this.state.dog
    } else {
      return this.state.cat
    }
  }

  keyExtractor = (item, index) => String(item.id)

  render() {
    if (this.state.hidden) {
      return (
        <ImageBackground source={require('../assets/images/backyard.jpg')} style={styles.backgroundImage}>
          <View>
            <TouchableWithoutFeedback onPress={() => { this.showAnimalInventory(2) }}>
              <Image style={{ width: 150, height: 150, top: 20, left: 115 }} source={this.state.cat} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => { this.showAnimalInventory(1) }}>
              <Image style={{ width: 150, height: 150, top: -10, left: 370 }} source={this.state.dog} />
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => { this.closeAnimalInventory(this.props.animals.ActiveAnimal.animalId) }} style={styles.inventoryExit}>
            <Text style={styles.inventoryExitX}>X</Text>
          </TouchableOpacity>
          <View style={styles.inventoryContainer}>
            <FlatList
              style={styles.invList}
              data={this.props.user.inventory}
              keyExtractor={this.keyExtractor}
              renderItem={({ item }) => (
                <View style={styles.invListItem}>
                  <View style={styles.invListIconWrapper}>
                    <Image style={styles.invListIcon} source={require(`../assets/images/cosmetics/bowler-hat-512.png`)} />
                  </View>
                  <TouchableOpacity onPress={() => { this.setAnimalCosmetic(item) }} style={styles.invListItemDescription}>
                    <Text style={styles.invListItemDescriptionText}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
            <Image style={styles.invAnimalImg} source={this.getImage()} />
            <View style={styles.invAnimalDesc}>
              <Text style={styles.invAnimalDescText}>{this.props.animals.ActiveAnimal.name} is a {this.props.animals.ActiveAnimal.disposition} {this.props.animals.ActiveAnimal.species}!</Text>
            </View>
          </View>

          <ImageBackground source={require('../assets/images/backyard.jpg')} style={styles.backgroundImageFaded}>
            <View>
              <Image style={{ width: 150, height: 150, top: 20, left: 115 }} source={this.state.cat} />
              <Image style={{ width: 150, height: 150, top: -10, left: 370 }} source={this.state.dog} />
            </View>
          </ImageBackground>
        </View>
      )
    }
  }
}

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
    setAnimalInventory: setAnimalInventory,
    setLoading: setLoading
  }, dispatch)
}

export default connect(MapStateToProps, mapDispatchToProps)(GardenScreen)