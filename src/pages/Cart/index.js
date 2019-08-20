import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Cart,
  ItemCard,
  ItemInfo,
  ItemImage,
  ItemDescription,
  ItemPrice,
  ItemTitle,
  SubTotal,
  ItemAmount,
  Amount,
  ItemSubtotal,
  TotalText,
  TotalPrice,
  ButtonBuy,
  TextButton,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Cart>
        <ItemCard>
          <ItemInfo>
            <ItemImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ItemDescription>
              <ItemTitle>Tenis de caminhada leve e confortavel</ItemTitle>
              <ItemPrice>179,90</ItemPrice>
            </ItemDescription>
            <Icon name="delete-forever" size={24} color="#7159c1" />
          </ItemInfo>
          <SubTotal>
            <ItemAmount>
              <Icon name="add-circle-outline" size={20} color="#7159c1" />
              <Amount value="1" />
              <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            </ItemAmount>
            <ItemSubtotal>R$ 359,09</ItemSubtotal>
          </SubTotal>
        </ItemCard>

        <ItemCard>
          <ItemInfo>
            <ItemImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ItemDescription>
              <ItemTitle>Tenis de caminhada leve e confortavel</ItemTitle>
              <ItemPrice>179,90</ItemPrice>
            </ItemDescription>
            <Icon name="delete-forever" size={24} color="#7159c1" />
          </ItemInfo>
          <SubTotal>
            <ItemAmount>
              <Icon name="add-circle-outline" size={20} color="#7159c1" />
              <Amount value="1" />
              <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            </ItemAmount>
            <ItemSubtotal>R$ 359,09</ItemSubtotal>
          </SubTotal>
        </ItemCard>

        <TotalText>Total</TotalText>
        <TotalPrice>R$ 1220,00</TotalPrice>
        <ButtonBuy type="button">
          <TextButton>Finalizar Pedido</TextButton>
        </ButtonBuy>
      </Cart>
    </Container>
  );
}
