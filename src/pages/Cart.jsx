import Navbar from "../component/Navbar";
import Announcement from "../component/Announcement";
import Footer from "../component/Footer";
import styled from "styled-components";
import shoe from "../Assets/shoe.png";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const TopBottom = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin: "5px 15px"})}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: "20px"})}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopBottom>CONTINUE SHOPPING</TopBottom>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopBottom type="filled">CHECKOUT NOW</TopBottom>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsjsyo3yiTJn4ZUTSKeo2MGWKV0qF5F33LQ&usqp=CAU" />
                <Details>
                  <ProductName>
                    <b>Product: </b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>45645634
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName>
                    <b>Product: </b>HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>45645634
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size: </b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.33</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
