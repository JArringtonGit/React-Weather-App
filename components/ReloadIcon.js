import { View, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/index'

export default function ReloadIcon({load}) {
  const reloadIconName = Platform.OS === 'android' ? 'md-refresh' : 'ios-refresh'
  return (
    <View style={styles.reloadIcon}>
      <Ionicons onPress={load} name={reloadIconName} size={24} color={colors.PRIMARY_COLOR} />
    </View>
  )
}

const styles = StyleSheet.create({
    reloadIcon: {
        right: 20,
        position: 'absolute',
        top: 30
    },
})