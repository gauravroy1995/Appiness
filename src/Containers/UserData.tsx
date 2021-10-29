import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Text
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/Hooks";
import { useLazyFetchOneQuery } from "@/Services/modules/users";
import { changeTheme, ThemeState } from "@/Store/Theme";
import { savePass,saveUser,resetLogin } from "../Actions/loginAction";

const UserData = () => {
  const { t } = useTranslation();
  const { Common, Fonts, Gutters, Layout } = useTheme();
  const dispatch = useDispatch();



  const loginData = useSelector((state) => state.loginReducer)

  const renderEachRow = ({item}) => {

    const id = item?.id ?? 0;
    const name = item?.name ?? '';
    const age = item?.age ?? '';
    const gender = item?.gender ?? '';
    const email = item?.email ?? '';
    const phone = item?.phoneNo ?? '';

      return(
          <View style={styles.eachRow} >
              <View style={styles.firstStyle} >
              <Text style={styles.eachItem} >{id}</Text>
              </View>
              <View style={styles.second} >
              <Text  style={styles.eachItem} >{name}</Text>
              </View>
              <View style={styles.third} >
              <Text  style={styles.eachItem} >{age}</Text>
              </View>
              <View style={styles.fourth} >
              <Text  style={styles.eachItem} >{gender} {email}</Text>
              </View>
              <View style={styles.fifth} >
              <Text  style={styles.eachItem} >{phone}</Text>
              </View>
          </View>
      )
  }

  const renderHeader = () => {

    const id = 'ID';
    const name = 'Name'
    const age = 'Age'
    const gender = 'Gender'
    const email = 'Email'
    const phone = 'Phone'

      return(
          <View style={styles.eachRow} >
              <View style={styles.firstStyle} >
              <Text style={styles.eachItem} >{id}</Text>
              </View>
              <View style={styles.second} >
              <Text  style={styles.eachItem} >{name}</Text>
              </View>
              <View style={styles.third} >
              <Text  style={styles.eachItem} >{age}</Text>
              </View>
              <View style={styles.fourth} >
              <Text  style={styles.eachItem} >{gender} {email}</Text>
              </View>
              <View style={styles.fifth} >
              <Text  style={styles.eachItem} >{phone}</Text>
              </View>
          </View>
      )
  }


  return (
    <View style={styles.mainContainer}>
    <FlatList 
        data={loginData.user}
        renderItem={renderEachRow}
        ListHeaderComponent={renderHeader()}
    />
    
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin:10
  },
  eachRow:{
      flexDirection:'row',
      flex:1,
      marginVertical:5
  },
  eachItem:{
      fontSize:10,
    
  },
  firstStyle:{
      flex:0.1
  },
  second:{
      flex:0.25
  },
  third:{
      flex:0.1
  },
  fourth:{
      flex:0.35,
      paddingHorizontal:5
  },
  fifth:{
      flex:0.2
  }
});

export default UserData;
