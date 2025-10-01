import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';

type DetailPostParams = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const DetailPost = ({ route }: { route: RouteProp<Record<string, DetailPostParams>, string> }) => {
  const data = route.params;
  console.log('data params ',data)
  return (
    <View style={styles.container}>
      <Text style={styles.label}>User ID: <Text style={styles.value}>{data.userId}</Text></Text>
      <Text style={styles.label}>Post ID: <Text style={styles.value}>{data.id}</Text></Text>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.body}>{data.body}</Text>
    </View>
  );
};

export default DetailPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  value: {
    fontWeight: '400',
    color: '#666',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 12,
  },
  body: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
});
