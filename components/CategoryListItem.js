import React from 'react'

import {
    Image,
    Text,
    View
} from 'react-native';

import GunImg from '../assets/tommy-gun.png';

export default function CategoryListItem(props){
    return <View>
        <Text>This is category list item</Text>
        <Image source={GunImg}></Image>
    </View>
}