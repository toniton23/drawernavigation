import React from "react";
import { StyleSheet, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Poto from "../img/potogw.jpg";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image source={Poto} size={50} />
              <View
                style={{
                  marginLeft: 15,
                  marginTop: -10,
                  flexDirection: "column",
                }}
              >
                <Title style={styles.Title}>Achmad Fatoni</Title>
                <Caption style={styles.caption}>@afaton</Caption>
              </View>
              <View style={styles.row}>
                <View style={styles.section}>
                  <Paragraph style={(styles.paragraph, styles.caption)}>
                    80
                  </Paragraph>
                  <Caption style={styles.caption}>Following</Caption>
                </View>
                <View style={styles.section}>
                  <Paragraph style={(styles.paragraph, styles.caption)}>
                    100
                  </Paragraph>
                  <Caption style={styles.caption}>Followers</Caption>
                </View>
              </View>
            </View>
            <View style={{ marginLeft: -15 }}>
              <DrawerItem
                icon={(color, size) => (
                  <MaterialCommunityIcons
                    name="home-outline"
                    color={color}
                    size={25}
                  />
                )}
                label="Home"
                onPress={() => {}}
              />
            </View>
            <View style={styles.DrawerItem}>
              <DrawerItem
                icon={(color, size) => (
                  <Feather name="user" color={color} size={25} />
                )}
                label="Profile"
                onPress={() => {}}
              />
            </View>
            <View style={styles.DrawerItem}>
              <DrawerItem
                icon={(color, size) => (
                  <MaterialCommunityIcons
                    name="bookmark-outline"
                    color={color}
                    size={25}
                  />
                )}
                label="Bookmarks"
                onPress={() => {}}
              />
            </View>
            <View style={styles.DrawerItem}>
              <DrawerItem
                icon={(color, size) => (
                  <Feather name="settings" color={color} size={25} />
                )}
                label="Setting"
                onPress={() => {}}
              />
            </View>
            <View style={styles.DrawerItem}>
              <DrawerItem
                icon={(color, size) => (
                  <Feather name="users" color={color} size={25} />
                )}
                label="Support"
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={(color, size) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  DrawerItem: { marginLeft: -15, marginTop: -20 },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  Title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 10,
    lineHeight: 14,
    marginTop: -5,
    marginLeft: 4,
  },
  row: {
    marginTop: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -200,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
