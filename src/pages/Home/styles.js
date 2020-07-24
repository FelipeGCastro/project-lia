import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 20px;
    color: #fff;
    font-size: 40px;
    font-weight: 400;
  }
  a {
    text-decoration: none;
  }
  .yellowCard {
    background-color: #FFFAD8;
  }
  .greenCard {
    background-color: #E3FFD8;
  }
  .blueCard {
    background-color: #D8F8FF;
  }
`
export const LogoImage = styled.img`
min-width: 300px;
width: 100%;
max-width: 500px;
margin: 20px 0;
`
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const ContentCard = styled.div`
  width: 250px;
  height: 250px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  margin: 10px;
  transition-duration: 400ms;

  &:hover {
    transform: translateY(-10px);
    transform: scale(1.1)
  }

  span {
    font-family: 'Comic Neue', cursive;
  text-decoration: none;
  text-align: center;
  font-size: 29px;
  color: #484040;
  font-weight: 600;
  }
 
`
