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
import { savePass,saveUser } from "../Actions/loginAction";

const ExampleContainer = () => {
  const { t } = useTranslation();
  const { Common, Fonts, Gutters, Layout } = useTheme();
  const dispatch = useDispatch();

  const [userId, setUserId] = useState("9");
  const [fetchOne] =
    useLazyFetchOneQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);


  const loginData = useSelector((state) => state.loginReducer)

  const onUsernameChange = (text) => {
    dispatch(saveUser(text))
  }

  const onPasswordChange = (text) => {
    dispatch(savePass(text))
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
      />
     
        <Button title="Login" 
        />
        <View style={styles.emptyView}  />
        <Button title="Reset" />
    
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
