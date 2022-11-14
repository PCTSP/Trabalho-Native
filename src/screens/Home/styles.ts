import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 30,
    paddingHorizontal: 15,
  },

  header: {
    width: 320,
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconsAlign: {
    flexDirection: 'column',
    alignItems: "center"
  },

  textHeader: {
    color: 'white',
    fontSize: 15
  },

  text: {
    color:'white',
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 40
  },

  iconShazam: {
    height: 200,
    width: 200,
    alignSelf: "center",
    backgroundColor: 'white',
    borderRadius: 100,
    marginTop: 60
  },

  iconSearch: {
    alignSelf:"center",
    marginTop: 80
  },

})