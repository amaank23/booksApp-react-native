import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./src/views/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getHeaderTitle } from "@react-navigation/elements";
import Categories from "./src/views/Categories";
import HeaderCustom from "./src/components/header/Header";

const Drawer = createDrawerNavigator();

export default function App() {
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
