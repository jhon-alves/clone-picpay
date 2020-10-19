import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #000;
  padding: 20px 16px 0 16px;
`;

export const Header = styled.View`
  height: 20px;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;

export const Card = styled.View`
  background: #1e222b;
  border-radius: 8px;
  margin-top: 20px;
  padding: 20px;
`;

export const CardBody = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Img = styled.Image``;

export const CardDetails = styled.View`
  flex: 1;  
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin-left: 15px;

`;

export const CardInfo = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 15px;

`;

export const HeaderStore = styled.View`
  margin-top: 15px;
  height: 20px;
  justify-content: center;
`;

export const TitleStore = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;

export const Store = styled.View`
  padding: 15px 0 30px 0;
  border-radius: 8px;
`;

export const StoreBody = styled.View`
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
`;

export const StoreDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const StoreTitle = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

export const StoreInfo = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  margin: 5px 10px;
`;