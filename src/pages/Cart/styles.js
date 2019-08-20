import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
  padding: 20px;
  flex: 1;
`;

export const CartContainer = styled.View`
  min-height: 200px;
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  max-height: 100%;
`;

export const CartEmpty = styled.View`
  display: flex;
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #222;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const EmptyButton = styled(RectButton)`
  background: #7159c1;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
`;

export const EmptyButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const ItemCard = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const ItemInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ItemImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ItemDescription = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const ItemTitle = styled.Text`
  font-size: 14px;
  color: #333333;
`;

export const SubTotal = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #eee;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
`;

export const ItemAmount = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100px;
`;

export const Button = styled.TouchableOpacity``;

export const Amount = styled.TextInput.attrs({
  readonly: true,
})`
  width: 51px;
  height: 26px;
  padding: 5px;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ddd;
  margin: 0 5px;
  color: #666;
`;

export const ItemSubtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Checkout = styled.View`
  /* display: flex; */
  align-items: center;
`;

export const TotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #000;
  margin-bottom: 30px;
`;

export const ButtonBuy = styled(RectButton)`
  background: #7159c1;
  border: none;
  text-align: center;
  padding: 13px 0;
  width: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;
