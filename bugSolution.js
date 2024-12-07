// bugSolution.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
];

const MyFlatList = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.text}</Text>
        </View>
      )}
    />
  );
};

export default MyFlatList;