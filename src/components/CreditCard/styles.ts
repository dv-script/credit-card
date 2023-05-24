import styled from "styled-components";

import VortigoLogoImg from "assets/vortigo.png";
import ChipImg from "assets/chip.png"
import ContactLessImg from "assets/contactLess.png"
import MasterCard from "../../assets/mastercard.png";

export const CreditCardContainer = styled.section`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    height: 322px;
    width: 512px;
    background: rgb(0, 158, 156);
    background: linear-gradient(
        120deg,
        rgba(0, 158, 156, 1) 0%,
        rgba(112, 34, 131, 1) 60%
    );
    padding: 1.5rem 1rem 1rem 3.5rem;
`;

export const VortigoLogo = styled.img.attrs((props => ({ ...props, src: VortigoLogoImg })))`
    margin-left: auto;
    height: 2.3rem;
    width: auto;
`;

export const ChipContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3.5rem;
`;

export const Chip = styled.img.attrs((props => ({ ...props, src: ChipImg })))`
    height: 3rem;
    width: auto;
`;

export const ContactLess = styled.img.attrs((props => ({ ...props, src: ContactLessImg })))`
    height: 3rem;
    width: auto;
`;

export const CardNumberContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    margin-top: 1rem;
    padding-right: 2.5rem;
`;

export const textWithGradient = styled.span`
    background: -webkit-linear-gradient(90deg, #8a8b8a 0%, #e1e2e1 62%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: -2px 2px 5px rgba(0,0,0,0.45);
`;

export const CardNumber = styled(textWithGradient)`
    font-size: 2rem;
`;

export const FooterContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    width: 100%;
`;

export const LeftFooterContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ValidThruContainer = styled.div`
    display: flex;
    align-items: center;
`
;
export const ValidThruText = styled.span`
    font-size: 1rem;
    margin-right: 1rem;
    width: 50px;
    color: #fff;
`;

export const ValidThruValue = styled(textWithGradient)`
    font-size: 2rem;
`;

export const CardHolderContainer = styled.div`
    display: flex;
    margin-top: auto;
`

export const CardHolder = styled(textWithGradient)`
    font-size: 1.5rem;
`

export const RightFooterContent = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: auto;
`;

export const CardFlag = styled.img.attrs((props => ({ ...props, src: MasterCard })))`
    width: auto;
    height: 74px;
`