import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import {ItemView} from '../../components/RenderItem';
import Screen1 from '../Home/Collection';

const SELECTIONS = [
  {id: 1, icon: 'home', label: 'Mục đã lưu'},
  {id: 2, icon: 'video', label: 'Video'},
  {id: 3, icon: 'file-plus', label: 'Ảnh'},
];

export default function TabScreen() {
  const [data, setData] = useState([]);
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
        <Feather
          name={item?.icon}
          size={20}
          color={isActive ? 'white' : 'black'}
        />
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
          <AntDesign name="left" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đã lưu</Text>
        <TouchableOpacity>
          <AntDesign name="search1" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.nav}>{SELECTIONS.map(renderNavItem)}</View>

      {activeTab === 1 ? (
        <Screen1 />
      ) : (
        <View style={styles.body}>
          <FlatList
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
