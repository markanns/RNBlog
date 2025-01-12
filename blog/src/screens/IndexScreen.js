import { StyleSheet, Button, FlatList, Text, View } from "react-native";
import React from "react";
import BlogContext from "../context/BlogContext";
import { useContext } from "react";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      >
        IndexScreen
      </FlatList>
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
