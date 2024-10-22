import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';

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

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
    elevation: 2,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  contentContainer: {
    position: 'relative',
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
});

export default TextPost;
