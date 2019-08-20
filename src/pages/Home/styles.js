import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const ProductItem = styled.View`
  display: flex;
  background: #fff;
  width: 220px;
  height: 358px;
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #333333;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-top: 5px;
`;

export const AddToCart = styled(RectButton)`
  background: #7159c1;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 42px;
  margin-top: auto;
`;

export const CartInfo = styled.View`
  background: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 53px;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Amount = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-left: 3px;
`;

export const TextButton = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;
