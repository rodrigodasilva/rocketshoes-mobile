import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

function Cart({
  navigation,
  cart,
  total,
  removeFromCart,
  updateAmountRequest,
}) {
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
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
              extraData={this.props}
              keyExtractor={item => String(item.id)}
              renderItem={({ item: product }) => (
                <ItemCard>
                  <ItemInfo>
                    <ItemImage source={{ uri: product.image }} />
                    <ItemDescription>
                      <ItemTitle>{product.title}</ItemTitle>
                      <ItemPrice>{product.price}</ItemPrice>
                    </ItemDescription>
                    <Button onPress={() => removeFromCart(product.id)}>
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

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
