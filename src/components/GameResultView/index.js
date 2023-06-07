import {
  GameResultViewContainer,
  GameChoiceButton,
  GameChoiceImage,
  ResultImageContainer,
  ResultName,
  ResultText,
  ResultButton,
} from './styledComponents'

const GameResultView = props => {
  const {
    choicesList,
    checkResult,
    isShow,
    choices,
    gameStatus,
    restartGame,
  } = props
  return (
    <GameResultViewContainer>
      {isShow && (
        <>
          <GameChoiceButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameChoiceImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameChoiceButton>
          <GameChoiceButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameChoiceImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameChoiceButton>
          <GameChoiceButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameChoiceImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameChoiceButton>
        </>
      )}
      {!isShow && (
        <>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <GameChoiceImage src={choices[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <GameChoiceImage src={choices[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultText>{gameStatus}</ResultText>
            <ResultButton
              className="result-button"
              type="button"
              onClick={restartGame}
            >
              PLAY AGAIN
            </ResultButton>
          </ResultImageContainer>
        </>
      )}
    </GameResultViewContainer>
  )
}
export default GameResultView
