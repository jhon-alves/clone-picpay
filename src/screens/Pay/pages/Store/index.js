import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import {
  Container,
  Header,
  Title,
  Card,
  CardBody,
  Img,
  CardDetails,
  CardTitle,
  CardInfo,
  HeaderStore,
  TitleStore,
  Store,
  StoreBody,
  StoreDetails,
  StoreInfo,
  StoreTitle
} from './styles';

import cellPhone from '../../../../images/cellphone.png';
import recharge from '../../../../images/01.png';
import uber from '../../../../images/02.png';
import bus from '../../../../images/03.png';
import ifood from '../../../../images/15.png';
import sky from '../../../../images/04.png';
import claro from '../../../../images/16.png';

export default function StoreScreen() {
  return (
    <Container>
      <Header>
        <Title>Destaques</Title>
      </Header>

      <Card>
        <CardBody>
          <Img source={cellPhone} />
          <CardDetails>
            <CardTitle>R$10 de volta</CardTitle>
            <CardInfo>
              Usando um cartão de crédito na sua primeira recarga de celular, você ganha R$10 de volta.
            </CardInfo>
          </CardDetails>
        </CardBody>
      </Card>

      <HeaderStore>
        <TitleStore>Lojas</TitleStore>
      </HeaderStore>

      <Store style={{ borderBottomColor: 'grey', borderBottomWidth: 2 }}>
        <StoreBody>
          <Img source={ifood} resizeMode="contain" />
          <StoreDetails>
            <StoreTitle>Ifood</StoreTitle>
            <StoreInfo>
              Pede um ifood
            </StoreInfo>
          </StoreDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </StoreBody>

        <StoreBody>
          <Img source={uber} resizeMode="contain" />
          <StoreDetails>
            <StoreTitle>Uber Pré Pago</StoreTitle>
            <StoreInfo>
              Compre créditos para viajar de Uber
            </StoreInfo>
          </StoreDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </StoreBody>

        <StoreBody>
          <Img source={bus} resizeMode="contain" />
          <StoreDetails>
            <StoreTitle>Cartão de Transporte</StoreTitle>
            <StoreInfo>
              Bilhete Único SP, Giro MetrôRio, Diadema, Ribeirão Preto, Pelotas, Taubaté e Sorocaba
            </StoreInfo>
          </StoreDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </StoreBody>

        <StoreBody>
          <Img source={recharge} resizeMode="contain" />
          <StoreDetails>
            <StoreTitle>Recarga de Celular</StoreTitle>
            <StoreInfo>
              Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios
            </StoreInfo>
          </StoreDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </StoreBody>
      </Store>

      <HeaderStore>
        <TitleStore>TVs</TitleStore>
      </HeaderStore>

      <Store>
        <StoreBody>
          <Img source={sky} resizeMode="contain" />
          <StoreDetails>
            <StoreTitle>SKY TV Pré-Pago</StoreTitle>
            <StoreInfo>
              Recarga da SKY TV
            </StoreInfo>
          </StoreDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </StoreBody>

        <StoreBody>
          <Img source={claro} resizeMode="contain" />
          <StoreDetails>
            <StoreTitle>Claro TV Pré-Pago</StoreTitle>
            <StoreInfo>
              Recarga da Claro TV
            </StoreInfo>
          </StoreDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </StoreBody>
      </Store>
    </Container>
  );
}