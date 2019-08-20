import React from 'react';
import { connect } from 'react-redux';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, CartInfo, CartCounter } from './styles';

import logo from '../../assets/images/Logo.png';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={logo}
          style={{ width: 200, height: 26, resizeMode: 'cover' }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <CartInfo>
          <Icon name="shopping-basket" size={28} color="#fff" />
          <CartCounter>{cartSize || 0}</CartCounter>
        </CartInfo>
      </TouchableOpacity>
    </Container>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
