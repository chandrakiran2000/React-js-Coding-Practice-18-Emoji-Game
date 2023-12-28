// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {handlePlayBtn, clickedEmojiList} = props
  const score = clickedEmojiList.length
  const result = score === 12

  const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const winImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  const heading = result ? 'You Won' : 'You Lose'
  const para1 = result ? 'Best Score' : 'Score'
  const winLossImg = result ? winImg : loseImg

  return (
    <div className="result-card">
      <div className="result-text-card">
        <h1 className="you-won-text">{heading}</h1>
        <p className="best-score">{para1}</p>
        <p className="best-score-result">{score}/12</p>
        <button
          className="play-again-btn"
          type="button"
          onClick={handlePlayBtn}
        >
          Play Again
        </button>
      </div>
      <img className="result-img" src={winLossImg} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
