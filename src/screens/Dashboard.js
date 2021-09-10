import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import { SafeAreaView } from 'react-navigation'
import { Text, StyleSheet } from 'react-native'
import Map from '../components/Map'

export default function Dashboard() {
  return (

      <SafeAreaView forceInset={{ top: 'always' }}>
          <Button
            >
            KLIQ
          </Button>
          <Button mode="outlined" onPress={logoutUser}>
         Logout
       </Button> 
            <Map />
       
        </SafeAreaView>
  )
}
