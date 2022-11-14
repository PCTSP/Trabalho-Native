import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },

  header: {
    backgroundColor: 'red',
    width: 360,
    height: 90,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  logo: {
    resizeMode: "contain",
    width:200
  },

  title: {
    marginTop: 40,
    fontSize: 18,
    marginLeft: 15
  },

  input: {
    height:50,
    width:330,
    fontSize: 18,
    marginLeft: 15,
    marginTop: 40,
    borderBottomColor: 'gray',
    borderStyle: "solid",
    borderBottomWidth: 1.2,
  },

  keepInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 15,
    height:60
  },

  infoText: {
    fontSize: 16,
    color: '#8a8a8a'
  },

  link: {
    color: 'red',
    textDecorationLine: "underline",
    fontSize: 18,
    paddingHorizontal: 15,
  },

  button: {
    backgroundColor:'red',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 150,
    width:300,
    marginLeft: 30,
  },

  buttonText: {
    color: 'white',
    fontSize: 15
  }

})