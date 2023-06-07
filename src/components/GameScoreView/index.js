import {
  GameScoreViewContainer,
  GameChoicesContainer,
  GameChoicesNames,
  ScoreContainer,
  ScoreHeading,
  Score,
} from './styledComponents'

const GameScoreView = props => {
  const {score} = props

  return (
    <GameScoreViewContainer>
      <GameChoicesContainer>
        <GameChoicesNames>ROCK</GameChoicesNames>
        <GameChoicesNames>PAPER</GameChoicesNames>
        <GameChoicesNames>SCISSORS</GameChoicesNames>
      </GameChoicesContainer>
      <ScoreContainer>
        <ScoreHeading>Score</ScoreHeading>
        <Score>{score}</Score>
      </ScoreContainer>
    </GameScoreViewContainer>
  )
}

export default GameScoreView
