import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const ItemBoSuuTap = ({item}: {item: any}) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Collection2', {item})}
      style={styles.itemContainer}>
      <Image style={styles.itemImage} source={{uri: item?.avatar}} />
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item?.name}</Text>
        <Text style={styles.itemPrivacy}>Chỉ mình tôi</Text>
      </View>
    </TouchableOpacity>
  );
};

const ItemView = ({icon, item}: {icon: boolean; item: any}) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.itemViewContainer}
      onPress={() => navigation.navigate('ViewItem', {item})}>
      <View style={styles.itemViewContent}>
        <Image style={styles.itemThumbnail} source={{uri: item?.image}} />
        <View style={styles.itemViewTextContent}>
          <Text style={styles.itemTitle}>
            {item?.title || 'Review Nhà trọ Spider-man tập 22'}
          </Text>
          <Text style={styles.itemSubtitle}>Đã lưu từ bài viết</Text>
          <Text style={styles.itemAuthor}>{item?.name || ''}</Text>
        </View>
      </View>
      {icon ? (
        <Entypo name={'dots-three-horizontal'} size={20} />
      ) : (
        <Image
          width={50}
          height={50}
          source={require('../assets/images/book.png')}
        />
      )}
    </TouchableOpacity>
  );
};

const ItemView2 = ({item}: {item: any}) => {
  const navigation = useNavigation<any>();
  console.log(item);

  return (
    <TouchableOpacity
      style={styles.itemViewContainer}
      onPress={() => navigation.navigate('Collection2', {item})}>
      <View style={styles.itemViewContent}>
        <Image style={styles.itemThumbnail} source={{uri: item?.avatar}} />
        <View style={styles.itemViewTextContent}>
          <Text style={styles.itemTitle}>{item?.name}</Text>
          <Text style={styles.itemSubtitle}>Đã lưu từ bài viết</Text>
          <Text style={styles.itemAuthor}>Nguyễn Hải Anh</Text>
        </View>
      </View>
      <Entypo name={'dots-three-horizontal'} size={20} />
    </TouchableOpacity>
  );
};

const ItempreView = ({item, index}: any) => {
  return (
    <View
      style={[
        styles.previewContainer,
        index > 0 && {borderTopWidth: 0.5, borderColor: '#ccc'},
      ]}>
      <View style={styles.previewContent}>
        <Image style={styles.avatar} source={{uri: item?.avatar}} />
        <View style={styles.previewTextContainer}>
          <Text style={styles.itemTitle}>{item?.name}</Text>
          <Text style={styles.commentText}>{item?.comment}</Text>
          {item?.icon.length > 0 && (
            <Image
              width={50}
              height={50}
              source={{
                uri: 'https://th.bing.com/th/id/OIP.aF0fe-uk4QQpQjow11aXcAHaHF?rs=1&pid=ImgDetMain',
              }}
            />
          )}
          <View style={styles.previewActions}>
            <Text style={styles.actionLike}>Thích</Text>
            <Text style={styles.actionReply}>Trả lời</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '2%',
        }}>
        <Entypo name="dots-three-horizontal" size={20} />
        <View
          style={{
            width: 30,
            height: 25,
            borderRadius: 20,
            backgroundColor: '#F9FAFB',
            justifyContent: 'center',
          }}>
          <Text style={styles.actionLike2}>2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  itemContainer: {
    width: 191,
    height: 164,
    elevation: 2,
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: '#ccc',
  },
  avatar: {
    width: 30,
    height: 32,
    marginHorizontal: 8,
    borderRadius: 15,
  },
  itemImage: {
    width: '100%',
    height: 110,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  itemContent: {
    marginLeft: 6,
    paddingTop: 8,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  itemPrivacy: {
    fontSize: 12,
    fontWeight: '500',
    color: 'gray',
  },
  itemViewContainer: {
    flex: 1,
    height: 110,
    flexDirection: 'row',
    marginBottom: 16,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  itemViewContent: {
    flexDirection: 'row',
    flex: 1,
  },
  itemThumbnail: {
    width: 136.94,
    height: 110,
    borderRadius: 12,
  },
  itemViewTextContent: {
    flex: 0.9,
    marginLeft: 12,
  },
  itemSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'gray',
    marginVertical: 4,
  },
  itemAuthor: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray',
  },
  previewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  previewContent: {
    flexDirection: 'row',
    flex: 1,
    marginTop: '2%',
  },
  previewTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  commentText: {
    marginVertical: 12,
    fontSize: 14,
    fontWeight: '400',
    color: '#0D121C',
  },
  previewActions: {
    flexDirection: 'row',
    marginTop: 4,
  },
  actionLike: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3864FF',
    marginRight: 12,
  },
  actionLike2: {
    fontSize: 12,
    fontWeight: '400',
    color: '#3864FF',
    marginRight: 12,
  },
  actionReply: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0D121C',
  },
});

export {ItemBoSuuTap, ItemView, ItemView2, ItempreView};
