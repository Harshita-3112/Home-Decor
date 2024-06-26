import {
  FlatList,
  FlatListComponent,
  StyleSheet,
  Text,
  View,
  renderNotificationCard,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Notifications = () => {
  // const renderStudentCard = ({item, index}) => {
  // console.log(item, 'item here');
  // return (
  //   <View
  //     style={{
  //       backgroundColor: 'yellow',
  //       height: 120,
  //       width: '50%',
  //       borderRadius: 16,
  //       marginTop: 20,
  //       marginHorizontal: 2,
  //       padding: 8,
  //       justifyContent: 'space-between',
  //     }}>
  //     <Text>{'Name: ' + item.name}</Text>
  //     <Text>{'Class: ' + item.class} </Text>
  //     <Text>{'Rollno: ' + item.roll_no}</Text>
  //     <Text> {'Section: ' + item.section} </Text>
  //   </View>
  // )};

  const renderNotificationCard = ({item, index}) => {
    return (
      <View
        style={{
          height: 70,
          width: 320,
          backgroundColor: '#F9FAFB',
          borderRadius: 10,
          marginTop: 60,
          flexDirection: 'row',
          padding: 10,
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: '#FFF9E4',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {item.icon}
        </View>
        <Text
          style={{
            color: '#000',
            fontFamily: 'Poppins-Regular',
            left: 14,
            width: 240,
          }}>
          {item.discount}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20}}>
      {/* <FlatList
        data={STUDENT_DATA}
        renderItem={renderStudentCard}
        numColumns={10}
        columnWrapperStyle={{flexGrow: 1}}
      /> */}

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',

          alignItems: 'center',
        }}>
        <AntDesign name={'arrowleft'} size={22} color={'#000'} />
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold',
            marginLeft: '28%',
          }}>
          Notification
        </Text>
      </View>
      <FlatList data={Notification} renderItem={renderNotificationCard} />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
// const STUDENT_DATA = [
//   {
//     name: 'Adwita',
//     class: 3,
//     roll_no: 12,
//     section: 'A',
//   },

//   {
//     name: 'Sam',
//     class: 3,
//     roll_no: 30,
//     section: 'H',
//   },

//   {
//     name: 'Max',
//     class: 2,
//     roll_no: 12,
//     section: 'G',
//   },

//   {
//     name: 'Sia',
//     class: 3,
//     roll_no: 14,
//     section: 'F',
//   },

//   {
//     name: 'Mahi',
//     class: 9,
//     roll_no: 11,
//     section: 'D',
//   },

//   {
//     name: 'Avi',
//     class: 1,
//     roll_no: 22,
//     section: 'C',
//   },
//   {
//     name: 'Tanya',
//     class: 4,
//     roll_no: 17,
//     section: 'C',
//   },

//   {
//     name: 'Annu',
//     class: 8,
//     roll_no: 18,
//     section: 'B',
//   },

//   {
//     name: 'Sabiha',
//     class: 3,
//     roll_no: 15,
//     section: 'E',
//   },

//   {
//     name: 'Avni',
//     class: 10,
//     roll_no: 42,
//     section: 'H',
//   },
// ];

const Notification = [
  {
    icon: <AntDesign name={'tagso'} size={32} color={'#000'} />,
    discount: 'Additional 5% discount for pre-booking',
  },

  {
    icon: <AntDesign name={'shoppingcart'} size={32} color={'#000'} />,
    discount: 'A reminder to check the items in your cart',
  },

  {
    icon: <AntDesign name={'notification'} size={32} color={'#000'} />,
    discount: 'Invite a friend and get a $10 voucher for your next purchase.',
  },

  {
    icon: <AntDesign name={'tagso'} size={32} color={'#000'} />,
    discount: 'An additional 10% discount for new customers.',
  },
];
