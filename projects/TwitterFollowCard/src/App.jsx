import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard'

export function App ({userName,name,isFollow}){
    return (
        <TwitterFollowCard userName={userName} name={name} isFollow={isFollow}/>
    )

}