import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ItemView} from '../../components/RenderItem';
import {
  deleteItemCollection,
  updateDataCollection,
} from '../../redux/actions/collection';
import {ModalAdd} from '../../components/ModalAdd';
import {useSelector} from 'react-redux';

export default function Collection2({navigation, route}: any) {
  const {item} = route.params;
  const store = useSelector(state => state?.collection?.data);

  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://rickandmortyapi.com/api/character?page=1&limit=10',
      );
      setData(response?.data?.results || []);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const toggleModal = useCallback(() => {
    setModalVisible(prev => !prev);
  }, []);

  const deleteItem = () => {
    Alert.alert(
      'Cảnh báo',
      'Bạn muốn xoá bộ sưu tập này',
      [
        {text: 'Huỷ', onPress: () => console.log('Huỷ'), style: 'cancel'},
        {
          text: 'Đồng ý',
          onPress: () => {
            deleteItemCollection(item?.id);
            navigation.goBack();
            ToastAndroid.show('Xoá thành công bộ sưu tập!', ToastAndroid.SHORT);
          },
        },
      ],
      {cancelable: true},
    );
  };

  const handleUpdateData = useCallback((item: any) => {
    updateDataCollection(item);
    setModalVisible(prev => !prev);
    ToastAndroid.show('Cập nhât thành công bộ sưu tập!', ToastAndroid.SHORT);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.collectionHeader}>
          <Text style={styles.collectionTitle}>
            {store.find((itemSearch: any) => itemSearch.id === item.id)?.name}
          </Text>
          <View style={styles.collectionPrivacy}>
            <AntDesign name="lock" size={20} />
            <Text style={styles.privacyText}>Chỉ mình tôi</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={toggleModal}>
            <AntDesign name="edit" size={20} />
            <Text style={styles.Text}>Đổi tên bộ sưu tập</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteItem} style={styles.actionButton}>
            <AntDesign name="delete" size={20} />
            <Text style={styles.Text}>Xoá bộ sưu tập</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ItemView icon={false} item={item} />}
          keyExtractor={(item, index) => `${item?.id || index}`}
        />
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={toggleModal}>
        <ModalAdd
          onHandelModel={toggleModal}
          setData={handleUpdateData}
          check={false}
          item={item}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    justifyContent: 'center',
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 8,
  },
  collectionHeader: {
    padding: 16,
    paddingBottom: 5,
  },
  collectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  collectionPrivacy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  privacyText: {
    marginLeft: 8,
    fontSize: 14,
    color: 'black',
  },
  actions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 8,
    marginRight: 16,
  },
  Text: {
    marginLeft: 5,
    fontSize: 14,
    color: '#4D5761',
    fontWeight: '600',
  },
  divider: {
    width: '90%',
    alignSelf: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginVertical: 16,
  },
});
