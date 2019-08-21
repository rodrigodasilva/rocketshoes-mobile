import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data, loading: false });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  renderProduct = ({ item }) => {
    const { amount } = this.props;

    // console.tron.log(amount);

    return (
      <ProductItem key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title} </ProductTitle>
        <ProductPrice>{item.priceFormatted} </ProductPrice>
        <AddToCart onPress={() => this.handleAddProduct(item.id)}>
          <CartInfo>
            <Icon name="add-shopping-cart" size={16} color="#fff" />
            <Amount>{amount[item.id] || 0}</Amount>
          </CartInfo>
          <TextButton>Adicionar</TextButton>
        </AddToCart>
      </ProductItem>
    );
  };

  render() {
    const { products, loading } = this.state;

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
            extraData={this.props}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderProduct}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}), // inicia o amount vazio
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
