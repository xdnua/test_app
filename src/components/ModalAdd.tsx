import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const ModalAdd = ({onHandelModel, setData, check, item}: any) => {
  const [name, setName] = useState(item.name);

  const handleAddData = () => {
    if (!name.trim()) {
      Alert.alert('Lỗi', 'Tên bộ sưu tập không được để trống!');
      return;
    }

    const newCollection = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
      name: name,
      avatar:
        'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-anh-meo-cute-doi-mat-to-tron-den-lay-de-thuong.jpg',
    };
    const newCollection2 = {
      ...item,
      name,
    };

    setData(check ? newCollection : newCollection2);
    setName('');
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <TouchableOpacity onPress={onHandelModel} style={styles.closeButton}>
          <AntDesign name="close" size={20} />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.modalTitle}>
            {check ? 'Tạo' : 'Sửa'} bộ sưu tập
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.textInput}
            placeholder="Tên bộ sưu tập"
          />
        </View>

        <View style={styles.privacySection}>
          <View style={styles.privacyHeader}>
            <Image
              width={50}
              height={50}
              source={require('../assets/images/loock.png')}
            />
            <Text style={styles.privacyText}>Chỉ mình tôi</Text>
          </View>
          <Text style={styles.privacyDescription} numberOfLines={2}>
            Chỉ bạn mới xem được bộ sưu tập này, bạn sẽ có thể đóng góp bất cứ
            lúc nào.
          </Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setName('')}>
            <Text style={styles.cancelButtonText}>Huỷ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createButton} onPress={handleAddData}>
            <Text style={styles.createButtonText}>{check ? 'Tạo' : 'Sửa'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    padding: 16,
    height: 328,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  closeButton: {
    alignSelf: 'flex-start',
  },
  content: {
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    marginBottom: 10,
  },
  textInput: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  privacySection: {
    marginBottom: 16,
  },
  privacyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  privacyText: {
    color: '#6C737F',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 6,
  },
  privacyDescription: {
    color: '#6C737F',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    width: '45%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9DA4AE',
  },
  createButton: {
    width: '45%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3399FF',
    borderRadius: 8,
  },
  createButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
});
