import { GlobalStyle } from 'GlobalStyle';
import CreditCard from 'components/CreditCard';
import { CardFlagEnum } from 'types/Enums/CardFlagEnum';

export default function App() {
	return (
		<>
    <GlobalStyle />
    <main>
      <CreditCard
        cardFlag={CardFlagEnum.MASTERCARD}
        cardHolder='DAVI HASSON CASTRO'
        cardNumber='5185-8100-0000-0000'
        validThruText='VALID THRU'
        expirationDate='08/27'
      />
    </main>
    </>
	);
}
