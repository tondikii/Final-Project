import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Text } from 'native-base'
import AsyncStorage from "@react-native-async-storage/async-storage";

// Apollo Client
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../queries';

// Firebase Firestore
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore'

export default function CoachChat({
  route
}) {
  const { coachName, coachImage, id } = route.params
  const [messages, setMessages] = useState([]);
  const [accessToken, setAccessToken] = useState('')
  
  const getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("@access_token");
      if (value !== null) {
        // value previously stored
        // console.log(value);
        setAccessToken(value)        
      }
    } catch (e) {
      // error reading value
      console.error(e);
    }
  };

  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      accessToken
    },
  });
  
  let user = {}
  if (!loading) {
    user = data.getUserProfile.UserProfile
  }
  
  useEffect(() => {
    // Get Access Token
    getStorage()
    // Get Message
    setMessages([
      {
        _id: 0,
        text: `Hallo, Saya ${coachName}, bagaimana progress latihan mu ?`,
        createdAt: new Date(),
        user: {
          _id: id,
          name: coachName,
          avatar: coachImage,
        },
      },
    ])
  }, [])

  const onSend = useCallback(
    async (messages = []) => {
      setMessages(
        previousMessages => GiftedChat.append(previousMessages, messages)
      )
      const { _id, text, createdAt, user } = messages[0]
      
      // insert messages to firestrore
      try {
        console.log('masuk');
        const docRef = await addDoc(collection(db, 'chats'), {
          _id,
          text,
          createdAt,
          user
        })
        console.log('Document Writtenn with id: ', docRef.id);
      } catch (error) {
        console.error(error);  
      }
  }, [])

  return (
    <>
      {
        loading ? 
        <Text>loading...</Text> : (
          <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
              _id: user.id,
              email: user.User.email,
            }}
          />
        )
      }
    </>
  )
}