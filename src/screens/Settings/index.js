import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Header,
  HeaderContainer,
  Img,
  HeaderName,
  HeaderText,
  Label,
  AddLabel,
  Account,
  AccountTitle,
  Action,
  Actions,
  Description,
  Info
} from './styles';

import avatar from '../../images/avatar1.png';

export default function Settings() {
  return (
    <Wrapper>
      <Container>
        <Header colors={['#52E78C', '#1AB563']}>
          <HeaderContainer>
            <Img source={avatar} />
            <HeaderName>@jonatasalves</HeaderName>
            <HeaderText>Jonatas Alves</HeaderText>
            <Label>
              <AddLabel>Ver meu perfil</AddLabel>
              <AntDesign name="right" size={16} color="#fff" />
            </Label>

          </HeaderContainer>
        </Header>

        <Account>
          <AccountTitle>Minha Conta</AccountTitle>

          <Action>
            <Actions>
              <Description>Meu Perfil</Description>
              <Info>@jonatasalves<AntDesign name="right" size={16} color="#ccc" /></Info>
            </Actions>
            <Actions>
              <Description>Meu número</Description>
              <Info>(**) *****-8239<AntDesign name="right" size={16} color="#ccc" /></Info>
            </Actions>
            <Actions>
              <Description>E-mail</Description>
              <Info>j******s@h****l.com<AntDesign name="right" size={16} color="#ccc" /></Info>
            </Actions>
            <Actions>
              <Description>Dados Pessoais</Description>
              <AntDesign name="right" size={16} color="#ccc" />
            </Actions>
            <Actions>
              <Description>Conta Bancária</Description>
              <AntDesign name="right" size={16} color="#ccc" />
            </Actions>
            <Actions>
              <Description>Taxas e limites</Description>
              <AntDesign name="right" size={16} color="#ccc" />
            </Actions>
            <Actions>
              <Description>Meus endereços</Description>
              <AntDesign name="right" size={16} color="#ccc" />
            </Actions>
          </Action>
        </Account>
      </Container>
    </Wrapper>
  );
}