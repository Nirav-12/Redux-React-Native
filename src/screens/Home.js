import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decreament, Increament } from "../redux/actions/countAction";

const Home = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.count);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity
        onPress={() => dispatch(Increament())}
        style={styles.btn}
      >
        <Text style={styles.btn_text}> Increment </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(Decreament())}
        style={styles.btn}
      >
        <Text style={styles.btn_text}> Decrement </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  btn: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 40,
    margin: 10,
  },
  btn_text: {
    fontSize: 20,
    color: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 45,
    marginVertical: 100,
  },
  counter: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
