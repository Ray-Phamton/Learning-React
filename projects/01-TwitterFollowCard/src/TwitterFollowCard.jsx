import { useState } from 'react'
import './TwitterFollowCard.css'
// children birng everything that is wrapped between the components, there can be multiple things even components

export function TwitterFollowCard ({ children, formatUserName, userName, initialIsFollowing }) { // "isFollow" exists for future updates
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleCLick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-img'
          alt='User image'
          src={`https://github.com/${userName}.png?size=720`}
        /> {/* image from github */}
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-Username'>{formatUserName(userName)}</span> {/* reusing an external function */}
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleCLick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-unfollow'>Unfollow</span>
        </button>
      </aside>
    </article>
  )
}
