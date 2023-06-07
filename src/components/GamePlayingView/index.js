import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  Game,
  RulesContainer,
  PopUpView,
  PopUpImage,
  TriggerButton,
  TriggerButtonClose,
} from './styledComponents'

import GameScoreView from '../GameScoreView'

import GameResultView from '../GameResultView'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GamePlayingView extends Component {
  state = {
    score: 0,
    isShow: true,
    choices: [choicesList[0], choicesList[1]],
    gameStatus: 'YOU WON',
  }

  getResult = (choice1, choice2) => {
    if (choice1.id === 'ROCK') {
      switch (choice2.id) {
        case 'SCISSORS':
          return 'YOU WON'
        case 'PAPER':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else if (choice1.id === 'PAPER') {
      switch (choice2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (choice2.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = id => {
    const {score} = this.state
    const choice1 = choicesList.filter(eachValue => eachValue.id === id)
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const result = this.getResult(choice1[0], choice2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState({
      isShow: false,
      score: newScore,
      choices: [choice1[0], choice2],
      gameStatus: result,
    })
  }

  restartGame = () => {
    this.setState({isShow: true})
  }

  render() {
    const {score, isShow, choices, gameStatus} = this.state

    return (
      <Game>
        <GameScoreView score={score} />
        <GameResultView
          choicesList={choicesList}
          checkResult={this.checkResult}
          isShow={isShow}
          choices={choices}
          gameStatus={gameStatus}
          restartGame={this.restartGame}
        />
        <RulesContainer>
          <Popup
            modal
            trigger={<TriggerButton type="button">RULES</TriggerButton>}
          >
            {close => (
              <PopUpView>
                <TriggerButtonClose
                  type="button"
                  className="trigger-button-close"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </TriggerButtonClose>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpView>
            )}
          </Popup>
        </RulesContainer>
      </Game>
    )
  }
}

export default GamePlayingView
