import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/Hooks";
import { useLazyFetchOneQuery } from "@/Services/modules/users";
import { changeTheme, ThemeState } from "@/Store/Theme";
import { savePass,saveUser,resetLogin } from "../Actions/loginAction";

const ExampleContainer = () => {
  const { t } = useTranslation();
  const { Common, Fonts, Gutters, Layout } = useTheme();
  const dispatch = useDispatch();



  const loginData = useSelector((state) => state.loginReducer)

  const onUsernameChange = (text) => {
    dispatch(saveUser(text))
  }

  const onPasswordChange = (text) => {
    dispatch(savePass(text))
  }

  const resetLoginDetails = () => {
    dispatch(resetLogin())
  }

  const onLogin = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordreg = /^[a-zA-Z0-9]{6,}$/;

    const testUsername = emailRegex.test(loginData.username)
    const passwordTest = passwordreg.test(loginData.password)
    console.log(testUsername,passwordTest,'uuss')
  }

  return (
    <View style={styles.mainContainer}>
      <TextInput placeholder="Enter Username"
      style={styles.textInputWrap}
      value={loginData.username}
      keyboardType="default"
      onChangeText={onUsernameChange}
      />

      <TextInput placeholder="Enter Password"
      style={styles.textInputWrap}
      value={loginData.password}
      keyboardType="default"
      onChangeText={onPasswordChange}
      secureTextEntry={true}
      />
     
        <Button title="Login" 
        onPress={onLogin}
        />
        <View style={styles.emptyView}  />
        <Button title="Reset"
        color="#614196"
        onPress={resetLoginDetails}
        />
    
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin:20
  },
  buttonWra: {
    marginHorizontal:0
    // flexDirection: 'row',
    // width:'100%'
  },
  emptyView:{
    marginVertical:5
  },
  textInputWrap:{
    borderRadius:5,
    borderWidth: 1,
    marginVertical:5
  }
});

export default ExampleContainer;
