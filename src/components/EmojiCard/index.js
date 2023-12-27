// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onClickEmoji = () => {
    //  console.log('clicked')
    clickEmoji(id)
  }

  return (
    <li className="each-emoji-card">
      <button className="emoji-btn" type="button" onClick={onClickEmoji}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
