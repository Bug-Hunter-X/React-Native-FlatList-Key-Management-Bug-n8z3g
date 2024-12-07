# React Native FlatList Key Management Bug

This repository demonstrates a common bug in React Native's `FlatList` component related to key management.  Improper key usage can lead to performance issues and incorrect rendering when updating the list.

The `bug.js` file shows an example of incorrect key usage (using the index). The `bugSolution.js` file demonstrates the correct solution. 

## Bug Description:
Using the index as the key (`keyExtractor={(item, index) => index}`) in `FlatList` is inefficient and prone to errors when items are added, removed, or reordered. This is because the index doesn't uniquely identify each item.

## Solution:
Use a unique identifier for each item as the key, typically a unique ID from your data source.