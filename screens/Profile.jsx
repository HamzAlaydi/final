import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import * as SecureStore from "expo-secure-store";

import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({});

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.logoBackground}>
          <Image
            style={styles.userStyle}
            source={require("../assets/images/profile.png")}
          />
        </View>
        <Text style={styles.textName}>{profile.user}</Text>
        <Text style={styles.textEmail}>{profile.email}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnStart}>
          <Text style={styles.textBtn}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FD5606",
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },

  userStyle: {
    width: 240,
    height: 240,
  },
  textName: {
    fontSize: 32,
    fontWeight: "500",
    color: "white",
  },
  textEmail: {
    fontSize: 28,
    color: "white",
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 80,
  },
  btnStart: {
    backgroundColor: "white",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textBtn: {
    fontSize: 24,
    color: "#FD5606",
    fontWeight: "500",
  },
});

export default Profile;
