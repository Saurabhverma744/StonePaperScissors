import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
`
export const Option = styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #ffffff;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
`
export const ScorePhrase = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
`
export const ScoreNumber = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
`
export const GameViewContainer = styled.div`
  width: 65%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GameOptionsList = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 480px;
  flex-wrap: wrap;
`
export const TriggerButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #223a5f;
  margin: 8px;
  padding: 8px 15px 8px 15px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`
export const PopUpImage = styled.img`
  width: 90%;
  align-self: center;
`
export const PopUpBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`
export const GameResultViewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 560px;
`
export const SelectedOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 600px;
`
export const GameUserOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GameParticipantText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Roboto';
`

export const GameParticipantChoiceImage = styled.img`
  height: 170px;
  width: 170px;
`

export const ResultText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
`

export const PlayAgainButton = styled.Button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #223a5f;
  margin: 8px;
  padding: 8px 15px 8px 15px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  align-self: center;
`
