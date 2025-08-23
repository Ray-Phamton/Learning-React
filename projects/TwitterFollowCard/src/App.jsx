import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard'

export function App (){
        //Functions can be passed as parameters for later reuse and elements can be passed too
        //components is functions what make elements

      const formatUserName = (userName) => `@${userName}`
    return (
    <section className = "containerSuggestion" >
        <TwitterFollowCard formatUserName ={formatUserName} userName = 'Ray-Phamton' initialIsFollowing = {true} >Raymon Reyes</TwitterFollowCard>

        <TwitterFollowCard formatUserName ={formatUserName} initialIsFollowing = {false} userName = 'Theyobii'>The Yorbis</TwitterFollowCard>

        <TwitterFollowCard formatUserName ={formatUserName} initialIsFollowing = {true} userName = 'ImMau14'>Mauricio Balatro</TwitterFollowCard>
    </section>
    )

}