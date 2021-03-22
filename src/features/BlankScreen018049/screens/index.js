import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"

class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <Text style={styles.Text_7}>Hello, World!</Text>
      <Image
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/resources/project/20869/6048c3f1-3868-46b3-a3da-6328d741a374.jpg"
        }}
        style={styles.Image_3}
      />
      <Button
        title="Button"
        color="#c4d2fd"
        onPress={() => alert("Pressed!")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_7: {
    marginTop: 10,
    marginBottom: 8,
    alignSelf: "center",
    fontSize: 30,
    color: "#3e4fd0"
  },
  Image_3: { width: 200, height: 200 },
  Button_5: {}
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
