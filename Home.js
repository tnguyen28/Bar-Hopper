import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        

        <Button
            title="Go to map"
            onPress={() =>
                this.props.navigation.navigate('MapScreen')
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});