import React, { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Brand } from "@/Components";
import { useTheme } from "@/Hooks";
import { useLazyFetchOneQuery } from "@/Services/modules/users";
import { changeTheme, ThemeState } from "@/Store/Theme";

const ExampleContainer = () => {
  const { t } = useTranslation();
  const { Common, Fonts, Gutters, Layout } = useTheme();
  const dispatch = useDispatch();

  const [userId, setUserId] = useState("9");
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchOneQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput placeholder="Enter Username" />

      <TextInput placeholder="Enter Password" />
      <View style={styles.buttonWra}>
        <Button title="Login" />

        <Button title="Reset" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  buttonWra: {
    flexDirection: 'row',
    width:'100%'
  },
});

export default ExampleContainer;
