import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled(LinearGradient)`
  height: 280px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.Image`
  margin-top: 10px;
`;

export const HeaderName = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  margin-top: 10px;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-top: 5px;
`;

export const Label = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const AddLabel = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  margin: 5px 2px;
`;

export const Account = styled.View`
  background: #1d222b;
`;
//margin-top: -16px;
//border-top-left-radius: 24px;
//border-top-right-radius: 24px;

export const AccountTitle = styled.Text`
  color: #fff;
  text-transform: uppercase;
  margin-top: 20px;
  padding: 0 16px;
`;

export const Action = styled.View`
  background: #1d222b;
  margin-top: 15px;
`;

export const Actions = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px;
`;

export const Description = styled.Text`
  color: #ccc;
  font-size: 16px;
`;

export const Info = styled.Text`
color: #ccc;
font-size: 16px;
`;