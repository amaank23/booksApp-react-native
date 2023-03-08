import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "../views/Home";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { getHeaderTitle } from "@react-navigation/elements";
import Categories from "../views/Categories";
import HeaderCustom from "../components/header/Header";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebaseConfig";

const auth = getAuth(app);

const Drawer = createDrawerNavigator();

export default function UserStack() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Home /> */}
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerType: "back",
            header: ({ navigation, route, options }) => {
              const title = getHeaderTitle(options, route.name);

              return (
                <HeaderCustom
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
          drawerContent={(props) => {
            return (
              <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem label={"Logout"} onPress={() => signOut(auth)} />
              </DrawerContentScrollView>
            );
          }}
        >
          <Drawer.Screen name="All Books" component={Home} options={{}} />
          <Drawer.Screen name="Book Categories" component={Categories} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
