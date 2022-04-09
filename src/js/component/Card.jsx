import React, {useContext} from "react"
import { Context } from "../store/appContext"

const Card = ({nature,item})=>{
const {store} = useContext(Context)
    return(
        <>
        {nature == "people"?
        (<div><div className="card">
        <div className="image"><img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/></div>
        <div className="description">
            <h4>{item.properties.name}</h4>
            <p>Gender: {item.properties.gender}</p>
            <p>Hair color: {item.properties.hair_color}</p>
            <p>Eye color: {item.properties.eye_color}</p>
           
        </div>
        <div className="footer">
        <a href="#" className="btn btn-primary">Go somewhere</a> 
        <a href="#" className="btn ml-auto btn-primary">Fav</a>
        </div>
    </div></div>):
        
        nature == "vehicles"?
        (<div>
            <div className="card">
            <div className="image"><img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/></div>
            <div className="description">
                <h4>{item.properties.name}</h4>
                <p>Gender: {item.properties.gender}</p>
                <p>Hair color: {item.properties.hair_color}</p>
                <p>Eye color: {item.properties.eye_color}</p>
               
            </div>
            <div className="footer">
            <a href="#" className="btn btn-primary">Go somewhere</a> 
            <a href="#" className="btn ml-auto btn-primary">Fav</a>
            </div>
        </div>
        </div>):
       
        nature == "planets"?
        (<div>
            <div className="card">
            <div className="image"><img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/></div>
            <div className="description">
                <h4>{item.properties.name}</h4>
                <p>Gender: {item.properties.gender}</p>
                <p>Hair color: {item.properties.hair_color}</p>
                <p>Eye color: {item.properties.eye_color}</p>
               
            </div>
            <div className="footer">
            <a href="#" className="btn btn-primary">Go somewhere</a> 
            <a href="#" className="btn ml-auto btn-primary">Fav</a>
            </div>
        </div>
        </div>): null
        }
        </>
    )
}
export default Card