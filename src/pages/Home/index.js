import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ActivityIndicator } from 'react-native';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import {
  Container,
  Loading,
  ProductItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddToCart,
  CartInfo,
  Amount,
  TextButton,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
      setLoading(false);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <ProductItem key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title} </ProductTitle>
        <ProductPrice>{item.priceFormatted} </ProductPrice>
        <AddToCart onPress={() => handleAddProduct(item.id)}>
          <CartInfo>
            <Icon name="add-shopping-cart" size={16} color="#fff" />
            <Amount>{amount[item.id] || 0}</Amount>
          </CartInfo>
          <TextButton>Adicionar</TextButton>
        </AddToCart>
      </ProductItem>
    );
  }

  return (
    <Container>
      {loading ? (
        <Loading>
          <ActivityIndicator color="#7159c1" size={50} />
        </Loading>
      ) : (
        <FlatList
          // horizontal
          data={products}
          extraData={amount}
          keyExtractor={item => String(item.id)}
          renderItem={renderProduct}
        />
      )}
    </Container>
  );
}
