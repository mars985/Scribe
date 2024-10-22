// import { View } from "react-native";
// import { Avatar, Button, Card, Text } from "react-native-paper";

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

// const Post = () => {
//   return (
//     <View>
//       {/* <Text>Post</Text> */}
//       <Card
//         onPress={() => {
//           console.log("card");
//         }}
//       >
//         <Card.Title
//           title="Card Title"
//           subtitle="Card Subtitle"
//           left={LeftContent}
//         />
//         <Card.Content>
//           {/* <Text variant="titleLarge">Card title</Text> */}
//           <Text variant="bodyMedium">Card content</Text>
//         </Card.Content>
//         {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
//         {/* <Card.Actions>
//           <Button>Cancel</Button>
//           <Button>Ok</Button>

//         </Card.Actions> */}
//       </Card>
//     </View>
//   );
// };

// export default Post;

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const TextPost = ({ heading, content }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.heading}>{heading}</Title>
        <View style={styles.contentContainer}>
          <Text numberOfLines={3} ellipsizeMode="tail" style={styles.content}>
            {content}
          </Text>
          <View style={styles.fadeOverlay} />
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
  fadeOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 20,
    backgroundColor: 'white',
    opacity: 0.8,
  },
});

export default TextPost;
