import './TwitterFollowCard.css'
export function TwitterFollowCard ({userName,name,isFollow}){ //"isFollow" exists for future updates
  return (
    <article className = 'tw-followCard' >
      <header className = 'tw-followCard-header'>
        <img 
          className = 'tw-followCard-img'        
          alt= "User image" 
          src = { `https://github.com/${userName}.png?size=720`}/> {/* image from github */}
        <div className = 'tw-followCard-info'   >
          <strong>{name}</strong> 
          <span className = 'tw-followCard-Usernaame'   >@{userName}</span>
        </div>     
      </header>
      <aside>
        <button className = 'tw-followCard-button'   >
          Follow
        </button>        
      </aside>
    </article>
  )

}