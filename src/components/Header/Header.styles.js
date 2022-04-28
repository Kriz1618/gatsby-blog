import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  aling-items: center;
  justify-content: space-between;
  height: 70px;
  magin: 20px auto;

  @media screen and (min-width:768px) {
    height: 120px;
  }
`
export const Logo = styled.img`
  max-widht: 100px;

  @media screen and (min-width:768px) {
    max-wigth: 250px;
  }
`