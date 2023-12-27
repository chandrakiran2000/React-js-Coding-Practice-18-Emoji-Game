import {Component} from 'react'
//  import {v4 as uuid} from 'uuid'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    emojisList: this.props,
    isGamePlaying: true,
    highestScore: 0,
    clickedEmojiList: [],
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickEmoji = id => {
    const {clickedEmojiList} = this.state
    console.log(id)
    this.setState({emojisList: this.getShuffledEmojisList()})
    const newEmoji = {
      emojiId: id,
    }
    const findEmoji = clickedEmojiList.filter(each => each.emojiId === id)
    //  console.log(findEmoji)

    /* if (clickedEmojiList.length === 12) {
        this.setState({isGamePlaying: false})
        this.setState(prevState => ({
          highestScore: 12,
        }))
      }  */
    if (clickedEmojiList.length === 12) {
      this.setState({isGamePlaying: false})
      this.setState(prevState => ({
        highestScore: 12,
      }))
    } else if (findEmoji.length > 0) {
      this.setState({isGamePlaying: false})
      this.setState(prevState => ({
        highestScore:
          prevState.clickedEmojiList.length > prevState.highestScore
            ? prevState.clickedEmojiList.length
            : prevState.highestScore,
      }))
    } else {
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, newEmoji],
      }))
    }

    /*   this.setState(prevState => ({
      clickedEmojiList: [...prevState.clickedEmojiList, newEmoji],
    })) */
  }

  renderEmojiGame = () => {
    //  const shuffledEmojisList = this.getShuffledEmojisList()
    const {emojisList} = this.props

    return (
      <ul className="emoji-card">
        {emojisList.map(each => (
          <EmojiCard
            eachEmoji={each}
            key={each.id}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  handlePlayBtn = () => {
    this.setState(prevState => ({
      highestScore:
        prevState.clickedEmojiList.length > prevState.highestScore
          ? prevState.clickedEmojiList.length
          : prevState.highestScore,
    }))
    this.setState({isGamePlaying: true, clickedEmojiList: []})
    this.setState({emojisList: this.getShuffledEmojisList()})
    console.log('hi')
  }

  renderingWinOrLossCard = () => {
    const {isGamePlaying, clickedEmojiList} = this.state
    return (
      <div className="won-game-card">
        <WinOrLoseCard
          isGamePlaying={isGamePlaying}
          clickedEmojiList={clickedEmojiList}
          handlePlayBtn={this.handlePlayBtn}
        />
      </div>
    )
  }

  render() {
    const {isGamePlaying, highestScore, clickedEmojiList} = this.state
    //  console.log(emojisList)
    return (
      <div className="bg-card">
        <Navbar
          clickedEmojiList={clickedEmojiList}
          isGamePlaying={isGamePlaying}
          highestScore={highestScore}
        />
        <div className="emoji-game-card">
          {isGamePlaying
            ? this.renderEmojiGame()
            : this.renderingWinOrLossCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame

//  ccbp publish RJSCPU31DB emojigbyack.ccbp.tech
