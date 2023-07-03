import React, {Component, useContext} from 'react'
import { View, Text, Button } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { AuthContextNew } from './authProvider';

class FireBaseApp extends Component {
    state = {
        user : {
            username: ""
        }
    }
    constructor(props) {
        super(props);
        this.getUser();
        this.subscriber = firestore().collection('Users').doc('bTqkCZEgkoh8fBWR5trNWv9DBuJ3').onSnapshot(doc => {
            this.setState({
                user: {
                    username: doc.data().username
                }
            })
        })
    }
    getUser = async () => {
        const userDocument = await firestore().collection('Users').doc('bTqkCZEgkoh8fBWR5trNWv9DBuJ3').get()
    }
    render() {
        return (
            <View style={{padding: 50}}>
                <Text style={{fontFamily: 'WorkSans-Regular'}} >Name: {this.state.user.username}</Text>
            </View>
        )
    }

}

export default FireBaseApp