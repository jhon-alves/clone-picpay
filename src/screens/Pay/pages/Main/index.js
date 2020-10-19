import React from 'react';
import {
  Container,
  Header,
  TitleServices,
  Card,
  CardBody,
  CardDetails,
  Img,
  CardTitle,
  CardInfo,
  HeaderContacts,
  TitleContacts,
  CardContacts,
} from './styles';

import { SimpleLineIcons } from '@expo/vector-icons';

import recharge from '../../../../images/01.png';
import pay from '../../../../images/06.png';
import charge from '../../../../images/07.png';
import cardMachine from '../../../../images/14.png';
import avatarcontatos from '../../../../images/avatar-contatos.png';

export default function MainScreen() {
  return (
    <Container>
      <Header>
        <TitleServices>Serviços</TitleServices>
      </Header>

      <Card style={{ borderBottomColor: 'grey', borderBottomWidth: 2 }}>
        <CardBody>
          <Img source={recharge} resizeMode="contain" />
          <CardDetails>
            <CardTitle>Recarga de Celular</CardTitle>
            <CardInfo>
              Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios
            </CardInfo>
          </CardDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </CardBody>

        <CardBody>
          <Img source={pay} resizeMode="contain" />
          <CardDetails>
            <CardTitle>Pagar Conta</CardTitle>
            <CardInfo>
              Pague sua conta de luz, água, boletos bancarios etc.
            </CardInfo>
          </CardDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </CardBody>

        <CardBody>
          <Img source={charge} resizeMode="contain" />
          <CardDetails>
            <CardTitle>Cobrar</CardTitle>
            <CardInfo>
              Cobrar um amigo
            </CardInfo>
          </CardDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </CardBody>

        <CardBody>
          <Img source={cardMachine} resizeMode="contain" />
          <CardDetails>
            <CardTitle>Pagar com Maquininhas</CardTitle>
            <CardInfo>
              Pague com o PicPay em máquinas Cielo e Getnet escaneando o QR code na máquina
            </CardInfo>
          </CardDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </CardBody>
      </Card>

      <HeaderContacts>
        <TitleContacts>Contatos</TitleContacts>
      </HeaderContacts>

      <CardContacts>
        <CardBody>
          <Img source={avatarcontatos} resizeMode="contain" />
          <CardDetails>
            <CardTitle>@magna.alves</CardTitle>
            <CardInfo>
              Magna Alves
            </CardInfo>
          </CardDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </CardBody>

        <CardBody>
          <Img source={avatarcontatos} resizeMode="contain" />
          <CardDetails>
            <CardTitle>@karoline</CardTitle>
            <CardInfo>
              Karoline Santato
            </CardInfo>
          </CardDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </CardBody>

        <CardBody>
          <Img source={avatarcontatos} resizeMode="contain" />
          <CardDetails>
            <CardTitle>@juliana.alves</CardTitle>
            <CardInfo>
              Juliana Alves
            </CardInfo>
          </CardDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </CardBody>

        <CardBody>
          <Img source={avatarcontatos} resizeMode="contain" />
          <CardDetails>
            <CardTitle>@lucas.nascimento</CardTitle>
            <CardInfo>
              Lucas Nascimento
            </CardInfo>
          </CardDetails>
          <SimpleLineIcons name="options" color="#fff" size={16} />
        </CardBody>
      </CardContacts>
    </Container>
  );
}