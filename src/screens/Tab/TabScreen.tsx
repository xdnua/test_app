import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {ItemView} from '../../components/RenderItem';
import Screen1 from '../Home/Collection';

const SELECTIONS = [
  {
    id: 1,
    label: 'Mục đã lưu',
    icon1: require('../../assets/images/home.png'),
    icon2: require('../../assets/images/Icon1.png'),
  },
  {
    id: 2,
    label: 'Video',
    icon1: require('../../assets/images/video.png'),
    icon2: require('../../assets/images/Icon2.png'),
  },
  {
    id: 3,
    label: 'Ảnh',
    icon1: require('../../assets/images/note.png'),
    icon2: require('../../assets/images/Icon2.png'),
  },
];

export default function TabScreen() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const fetchData = async () => {
    setData([]);
    try {
      const response = await axios.get(
        'https://rickandmortyapi.com/api/character?page=1&limit=10',
      );
      setData(response.data.results || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setActiveTab(1);
    fetchData();
  }, []);

  const handleTabPress = (tabId: number) => {
    setActiveTab(tabId);
    fetchData();
  };

  const renderNavItem = (item: any) => {
    const isActive = item.id === activeTab;

    return (
      <TouchableOpacity
        key={item?.id}
        onPress={() => handleTabPress(item?.id)}
        style={[styles.navItem, isActive && styles.navItemActive]}>
        <Image source={isActive ? item.icon2 : item.icon1} />
        <Text style={[styles.navText, isActive && styles.navTextActive]}>
          {item?.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đã lưu</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/images/search.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.nav}>{SELECTIONS.map(renderNavItem)}</View>

      {activeTab === 1 ? (
        <Screen1 />
      ) : (
        <View style={styles.body}>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => fetchData()}
              />
            }
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <ItemView icon={true} item={item} />}
          />
        </View>
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  nav: {
    marginVertical: '2%',
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: '#F9FAFB',
    marginRight: 12,
  },
  navItemActive: {
    backgroundColor: '#3864FF',
  },
  navText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'black',
  },
  navTextActive: {
    color: 'white',
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
});
