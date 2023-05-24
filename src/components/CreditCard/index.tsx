import { CardFlagEnum } from "../../types/Enums/CardFlagEnum";
import {
  CreditCardContainer,
  VortigoLogo,
  ChipContainer,
  Chip,
  ContactLess,
  CardNumberContainer,
  CardNumber,
  FooterContainer,
  LeftFooterContent,
  RightFooterContent,
  CardFlag,
  ValidThruContainer,
  ValidThruText,
  ValidThruValue,
  CardHolderContainer,
  CardHolder,
} from "./styles";


interface CreditCardProps {
  cardNumber: string;
  cardHolder: string;
  cardFlag: CardFlagEnum;
  validThruText: string;
  expirationDate: string;
}

export default function CreditCard(props: CreditCardProps) {
	const { cardNumber, cardHolder, cardFlag, validThruText, expirationDate } = props;

	return (
		<CreditCardContainer>

      <VortigoLogo />

      <ChipContainer>

        <Chip />
        <ContactLess />
      
      </ChipContainer>

      <CardNumberContainer>{ cardNumber.split('-').map( (number) => 
        <CardNumber key={number}>{number}</CardNumber> ) }
      </CardNumberContainer>

      <FooterContainer>

        <LeftFooterContent>

          <ValidThruContainer>
            <ValidThruText>{validThruText}</ValidThruText>
            <ValidThruValue>{expirationDate}</ValidThruValue>
          </ValidThruContainer>

          <CardHolderContainer>
            <CardHolder>{String(cardHolder).toUpperCase()}</CardHolder>
          </CardHolderContainer>

        </LeftFooterContent>
        
        <RightFooterContent>
          <CardFlag />
        </RightFooterContent>

      </FooterContainer>

    </CreditCardContainer>
	);
}