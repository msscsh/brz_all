import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const brawlerTypes = ["Atirador", "Suporte", "Assassino"]; 

const Welcome = () => {

  const router = useRouter();
  const [activeBrawlerType, setActiveBrawlerType] = useState('Atirador')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome</Text>
        <Text style={styles.welcomeMessage}>Find brawler</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={ () => {}}
            placeholder="Escolha um brawler"
          />
          <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
            <Image 
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tabsContainer}>
          <FlatList 
            data={brawlerTypes}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.tab(activeBrawlerType, item)}
                onPress={() => {
                  setActiveBrawlerType(item);
                  router.push(`/search/${item}`)
                }}
              >
                <Text style={styles.tabText(activeBrawlerType, item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            contentContainerStyle={{ columnGap: SIZES.small}}
            horizontal
          />
        </View>

      </View>
    </View>
  )
}

export default Welcome