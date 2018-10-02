import React, { Component } from "react";
import api from "../utils/api";
import { fetchCharities } from "../actions";
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
  ImageBackground
} from "react-native";
import { WebBrowser } from "expo";
import { MonoText } from "../components/StyledText";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black"
  },
  words: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    marginTop: 20,
    width: 200,
    backgroundColor: "green"
  },
  pageheader: {
    fontSize: 40,
    marginTop: 25
  },
  hidden: {
    height: 200,
    width: 600,
    backgroundColor: "green"
  }
});

class CharitiesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    };

    this.expandArticle = this.expandArticle.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.fetchCharities();
  }

  expandArticle() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  keyExtractor = (item, index) => String(item.id);

  render() {
    console.log(this.props.charities);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.expandArticle()}>
          <Text style={styles.pageheader}>Select your Charities</Text>
        </TouchableOpacity>
        <Text style={this.state.hidden ? { height: 0 } : styles.hidden}>
          Charitieseihfrakjhfksjdhfkj
        </Text>
        <FlatList
          horizontal={true}
          data={this.props.charities.Charities}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <Text style={styles.words}>
              <Image source={{ uri: item.logo }} />
              {item.charityName}
            </Text>
          )}
        />
      </View>
    );
  }
}

function MapStateToProps(state) {
  return {
    charities: state.charities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchCharities: fetchCharities
    },
    dispatch
  );
}
export default connect(
  MapStateToProps,
  mapDispatchToProps
)(CharitiesScreen);
