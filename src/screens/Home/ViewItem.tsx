import React, {useState} from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ItempreView} from '../../components/RenderItem';

export default function ViewItem({navigation, route}: any) {
  const {item} = route.params;

  const [dataComment, setDataComment] = useState([
    {
      id: 1,
      name: 'Nguyễn Xuân Duẫn',
      avatar:
        'https://th.bing.com/th?id=OIP.Rqjnb1vRphnNziOgFytW7gHaKc&w=210&h=296&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      icon: ':)',
      comment:
        'I bought it 3 weeks ago and now come back just to say “Awesome”. I really enjoy it.',
    },
    {
      id: 2,
      name: 'Nguyễn Xuân Duẫn',
      avatar:
        'https://th.bing.com/th?id=OIP.Rqjnb1vRphnNziOgFytW7gHaKc&w=210&h=296&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      icon: '',
      comment:
        'I bought it 3 weeks ago and now come back just to say “Awesome”. I really enjoy it.',
    },
  ]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={25} />
          </TouchableOpacity>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://th.bing.com/th/id/OIP.CrcpgkhSEvshgPRNoqn4RQHaHa?rs=1&pid=ImgDetMain',
            }}
          />
          <View>
            <View style={styles.nameWrapper}>
              <Text style={styles.name}>Sơn Tùng MTP</Text>
              <MaterialIcons
                name="verified"
                size={20}
                color="#3864FF"
                style={styles.verifiedIcon}
              />
            </View>
            <Text style={styles.subInfo}>
              {item?.species} • {item?.status}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <AntDesign name="ellipsis1" size={25} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <View style={styles.body}>
          <Text style={styles.description}>
            Dân ca Quan họ là một trong những làn điệu dân ca tiêu biểu của vùng
            châu thổ sông Hồng ở miền Bắc Việt Nam.
          </Text>
          <Image
            style={styles.mainImage}
            source={{
              uri: 'https://th.bing.com/th/id/OIP.CrcpgkhSEvshgPRNoqn4RQHaHa?rs=1&pid=ImgDetMain',
            }}
          />
          <Text style={styles.stats}>55k lượt xem</Text>
          <Text style={styles.stats}>11k thích • 6 bình luận • 2 chia sẻ</Text>

          <View style={styles.actionRow}>
            {renderAction(AntDesign, 'hearto', '11k')}
            {renderAction(Ionicons, 'chatbox-ellipses-outline', '55k')}
            {renderAction(Ionicons, 'share-outline', '11k')}
            {renderAction(MaterialCommunityIcons, 'chart-box-outline', '11k')}
          </View>
        </View>

        <View style={styles.commentContainer}>
          <FlatList
            scrollEnabled={false}
            data={dataComment}
            renderItem={({item, index}) => (
              console.log(index), (<ItempreView item={item} index={index} />)
            )}
          />
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <Image style={styles.avatar} source={{uri: item?.image}} />
        <TextInput
          style={styles.commentInput}
          placeholder="Nhập bình luận"
          placeholderTextColor="#9DA4AE"
        />
        <View style={styles.boderIcon}>
          <MaterialCommunityIcons name="emoticon-happy-outline" size={25} />
        </View>
        <View style={styles.boderIcon}>
          <Feather name="image" size={25} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const renderAction = (IconComponent: any, iconName: string, text: string) => (
  <View style={styles.action}>
    <IconComponent name={iconName} size={25} />
    <Text style={styles.actionText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 32,
    marginHorizontal: 8,
    borderRadius: 15,
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  verifiedIcon: {
    marginLeft: 3,
  },
  subInfo: {
    fontSize: 12,
    fontWeight: '500',
  },
  bodyContainer: {
    flexGrow: 1,
  },
  body: {
    padding: 16,
    backgroundColor: 'white',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#0D121C',
  },
  commentContainer: {
    flex: 1,
    marginTop: 8,
    padding: 16,
    backgroundColor: 'white',
  },
  mainImage: {
    borderRadius: 8,
    marginVertical: 8,
    height: 418,
  },
  stats: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4D5761',
    marginVertical: 4,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 36,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4D5761',
    marginLeft: 4,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderColor: '#E4E7EB',
  },
  boderIcon: {
    borderRadius: 15,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  commentInput: {
    width: 250,
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
    color: '#000',
  },
});
