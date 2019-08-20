import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background: #141419;
  padding: 20px;
`;

export const CartInfo = styled.View`
  position: relative;
`;

export const CartCounter = styled.Text`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 10px;
  color: #fff;
  background: #7159c1;
  padding: 2px;
  text-align: center;
  width: 16px;
  border-radius: 8px;
`;
