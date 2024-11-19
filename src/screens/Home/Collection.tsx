import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ModalAdd} from '../../components/ModalAdd';
import {ItemView2} from '../../components/RenderItem';
import {useSelector} from 'react-redux';
import {saveDataCollection} from '../../redux/actions/collection';

export default function Collection() {
  const data = useSelector(state => state?.collection?.data);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = useCallback(() => {
    setModalVisible(prev => !prev);
  }, []);

  const handleAddData = useCallback((newData: any) => {
    saveDataCollection(newData);
    setModalVisible(prev => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Gần đây nhất</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.createText}>Tạo</Text>
        </TouchableOpacity>
      </View>

      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={({item}) => <ItemView2 item={item} />}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View
          style={[
            styles.container,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <Text style={styles.titleText}>Không có dữ liệu</Text>
        </View>
      )}

      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={toggleModal}>
        <ModalAdd
          onHandelModel={toggleModal}
          setData={handleAddData}
          check={true}
          item={[]}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  createText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'blue',
  },
  listContainer: {
    paddingHorizontal: 8,
    paddingTop: 8,
  },
});
