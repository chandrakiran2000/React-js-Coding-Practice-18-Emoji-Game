// Write your code here.
import './index.css'

const NavBar = props => {
  const {clickedEmojiList, highestScore, isGamePlaying} = props
  const score = clickedEmojiList.length

  const handleScore = () => (
    <div className="score-card">
      <p className="score-text">Score: {score}</p>
      <p className="total-score-text">Top Score: {highestScore}</p>
    </div>
  )

  const addClassName = isGamePlaying ? 'addClas' : ''

  return (
    <div className="navbar-card">
      <div className={`nav ${addClassName}`}>
        <div className="logo-card">
          <img
            className="logo-img"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="logo-text">Emoji Game</h1>
        </div>
        {isGamePlaying ? handleScore() : ''}
      </div>
    </div>
  )
}

export default NavBar
