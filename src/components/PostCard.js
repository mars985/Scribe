import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card, Title } from "react-native-paper";
import Markdown from "react-native-markdown-display";

const TextPost = ({ heading, content, onPress }) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content>
        <Title style={styles.heading}>{heading}</Title>
        <View style={styles.contentContainer}>
          <Text numberOfLines={3} ellipsizeMode="tail" style={styles.content}>
            {content}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const PostCard = ({ heading, content }) => {
  return (
    <View style={styles2.card}>
      <View style={styles2.headingContainer}>
        <Markdown style={styles2.heading}>{heading}</Markdown>
      </View>
      <View style={styles2.contentContainer}>
        <Markdown style={styles2.content}>{content}</Markdown>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    borderRadius: 8,
    elevation: 2,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  contentContainer: {
    position: "relative",
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
  },
});
const styles2 = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 10,
  },
  headingContainer: {
    marginBottom: 8,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contentContainer: {
    marginTop: 4,
  },
  content: {
    fontSize: 14,
    color: "#333",
  },
});

export default TextPost;
// export default PostCard;
