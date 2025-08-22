import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App} from './App' 
import './App.css'

const root = createRoot(document.getElementById('root'))

// components must always be in PascalCase

const suggestion = ({name,userName,isFollow}) =>{
    return(
        <App userName={userName} name={name} isFollow={isFollow}/>
    )
}



root.render(
    <section className = "containerSuggestion" >
    {suggestion({name: 'Raymon Reyes', userName: 'Ray-Phamton'})}
    {suggestion({name: 'TheYorbis', userName: 'Theyobii'})}
    {suggestion({name: 'Mauricio Rodriguez', userName: 'ImMau14'})}
    </section>
)
