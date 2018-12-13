import React from 'react'

import {Text, View, Image} from 'react-native'

export default class HelloWorldApp extends React.Component {

  constructor() {
    super()

    this.state = {
      img: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

  }

  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return <View>
      <Text>Hello World</Text>
      <Image source={{uri: this.state.img}} style={{width: 193,height: 110}}></Image>
    </View>
    
  }
}