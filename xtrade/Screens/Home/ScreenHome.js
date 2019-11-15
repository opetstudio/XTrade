import React, { Component } from 'react'
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Text
} from 'native-base'
import { ImageBackground, View, StatusBar } from 'react-native'
import { isIphoneX } from '../../Lib/helper/platform'
import StyledStatusBar from '../../Containers/StyledStatusBar'
import CardSwipe from './CardSwipe'
import Footer from '../../Containers/Footer'
import { Images, Metrics, Colors } from '../../Themes'
import UserProfile from './UserProfile'
import MaterialButtonViolet from '../../Components/Button/MaterialButtonViolet'

const styles = {
  container: {
    backgroundColor: '#fff'
  },
  backgroundImg: {
    flex: 1,
    width: Metrics.screenWidth
  }
}
class ScreenHome extends Component {
  render () {
    return (
      <Container>
        <ImageBackground source={Images.backgroundXpay} style={{ flex: 1, width: '100%' }}>
          <Content>
            <Text>Welcome to the Xtrade App</Text>
          </Content>
          
        </ImageBackground>
        <Footer />
      </Container>
    )
  }
}

export default ScreenHome
