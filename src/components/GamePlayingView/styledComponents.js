import styled from 'styled-components'

export const Game = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const RulesContainer = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vw;
  justify-content: space-between;
  padding: 25px;
  background-color: #ffffff;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`
export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`

export const TriggerButton = styled.button`
  width: 90px;
  height: 45px;
  color: #223a5f;
  font-family: Bree Serif;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-style: none;
  outline: none;
`
export const TriggerButtonClose = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  font-size: 18px;
  border-style: none;
  outline: none;
  align-self: flex-end;
  margin-bottom: 5px;
`
