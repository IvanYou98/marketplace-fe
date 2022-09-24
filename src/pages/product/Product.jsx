import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header/Header";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  text-align: left;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Button = styled.button`
  padding: 15px;
  margin-top: 20px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${productId}`, {
      headers: {
        token: localStorage.getItem("token")
      }
    }).then(res => {
      setProduct(res.data);
    }).catch(err => {
      console.log(err.res.data);
    })
  }, [productId])

  return (
    <Container>
      <Header />
      <Wrapper>
        <ImgContainer>
          <Image src={product.imgs[0]} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>
          <AddContainer>
            <Button>ADD TO WISH LIST</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;