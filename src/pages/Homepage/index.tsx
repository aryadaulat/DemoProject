import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataPosts } from '../../redux/posts/postAction';
import { RootState, AppDispatch } from '../../redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainRouterParamList } from '../../types/navigation';
import { colors, fontSizes } from '../../styles/GlobalStyles';


const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NativeStackNavigationProp<MainRouterParamList>>();
  const [search, setSearch] = useState('');
  const post = useSelector((state: RootState) => state.post.data);
  const [displayData, setDisplayData] = useState<any[]>([]);

  const getDataPost = useCallback(async () => {
    try {
      await dispatch(getDataPosts());
      // const data = await dispatch(getDataPosts());
    } catch (error) {
      console.log('error', error);
    }
  }, [dispatch]);

  useEffect(() => {
    getDataPost();
  }, [getDataPost]);

  useMemo(() => {
    if (search !== '') {
      const filterData = post.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
      console.log('filterData', filterData);
      setDisplayData(filterData);
    } else {
      console.log('post', post);
      setDisplayData(post);
    }
  }, [post, search]);

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search here"
        style={styles.searchInput}
      />
      <FlatList
        data={displayData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={styles.renderListPost}
            onPress={() => navigation.navigate('Detail', {...item })}
          >
            <Text style={styles.userId}>{item.userId}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    backgroundColor: colors.secondary,
    fontSize: parseInt(fontSizes.medium),
  },
  renderListPost: {
    backgroundColor: colors.backgroundLight,
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  userId: {
    fontSize: parseInt(fontSizes.small),
    color: colors.textLight,
    marginBottom: 4,
  },
  title: {
    fontSize: parseInt(fontSizes.large),
    fontWeight: 'bold',
    color: colors.primary,
  },
});
