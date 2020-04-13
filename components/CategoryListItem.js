import React from 'react'

import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';

import GunImg from '../assets/tommy-gun.png';

export default function CategoryListItem(props){
    return <View style={styles.container}>
        <Text style={styles.title}>This is category list item</Text>
        <Image style={styles.categoryImage} source={GunImg}></Image>
    </View>
}

const styles = StyleSheet.create({
    container:{
         elevation: 1,
         alignItems: 'center',
         padding: 30,
         shadowColor: '#000',
         shadowRadius: 10,
         shadowOpacity: 0.3,
         shadowOffset: {width: 0, height: 0},
         backgroundColor: '#FFF',
         borderRadius: 4,
         alignItems: 'center',
    },
   categoryImage:{
       width: 64,
       height: 64
   },
   title:{
       textTransform: 'uppercase',
       fontWeight: '700',
       marginBottom: 10
   },
});