import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  CartContainer,
  CartEmpty,
  EmptyText,
  EmptyButton,
  EmptyButtonText,
  ItemCard,
  ItemInfo,
  ItemImage,
  ItemDescription,
  ItemPrice,
  ItemTitle,
  SubTotal,
  ItemAmount,
  Button,
  Amount,
  ItemSubtotal,
  Checkout,
  TotalText,
  TotalPrice,
  ButtonBuy,
  TextButton,
} from './styles';

export default function Cart({ navigation }) {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((subTotal, product) => {
        return subTotal + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <CartContainer>
        {!cart.length ? (
          <CartEmpty>
            <Icon name="remove-shopping-cart" size={44} color="#eee" />
            <EmptyText>Seu carrinho esta vazio</EmptyText>
            <EmptyButton onPress={() => navigation.navigate('Home')}>
              <EmptyButtonText>Comece a comprar</EmptyButtonText>
            </EmptyButton>
          </CartEmpty>
        ) : (
          <>
            <FlatList
              data={cart}
              extraData={total}
              keyExtractor={item => String(item.id)}
              renderItem={({ item: product }) => (
                <ItemCard>
                  <ItemInfo>
                    <ItemImage source={{ uri: product.image }} />
                    <ItemDescription>
                      <ItemTitle>{product.title}</ItemTitle>
                      <ItemPrice>{product.priceFormatted}</ItemPrice>
                    </ItemDescription>
                    <Button
                      onPress={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
                    >
                      <Icon name="delete-forever" size={24} color="#7159c1" />
                    </Button>
                  </ItemInfo>
                  <SubTotal>
                    <ItemAmount>
                      <Button onPress={() => decrement(product)}>
                        <Icon
                          name="remove-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </Button>
                      <Amount value={String(product.amount)} />
                      <Button onPress={() => increment(product)}>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </Button>
                    </ItemAmount>
                    <ItemSubtotal>{product.subtotal}</ItemSubtotal>
                  </SubTotal>
                </ItemCard>
              )}
            />

            <Checkout>
              <TotalText>Total</TotalText>
              <TotalPrice>{total}</TotalPrice>
              <ButtonBuy type="button">
                <TextButton>Finalizar Pedido</TextButton>
              </ButtonBuy>
            </Checkout>
          </>
        )}
      </CartContainer>
    </Container>
  );
}
