import React from 'react'
import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularbrawlers.style';
import { COLORS, SIZES } from '../../../constants';
import { PopularBrawlerCard } from '../../common/cards/popular/Popularbrawlercard';


const Popularbrawlers = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Brawlers</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Mostrar todos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Algo deu errado</Text>
        ) : (
          <FlatList 
            data={[1, 2, 3, 4]}
          />
        )}
      </View> 
    </View>
  );
}

export default Popularbrawlers