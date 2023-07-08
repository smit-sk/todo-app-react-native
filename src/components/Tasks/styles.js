import { Platform, StyleSheet } from "react-native";

const taskContainer = StyleSheet.create({
  container: {
    height: Platform.OS == "ios" ? '100%' : '70%',
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    alignContent: "center"
  },
  noTaskContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  noTaskText: {
    fontSize: 24,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default taskContainer;