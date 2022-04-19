import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../store/appContext"

const Card = ({ nature, item }) => {
    const { actions } = useContext(Context)
    return (
        <>
            {nature == "people" ?
                (<div>
                    <div className="card">
                        <div className="image"><img src="https://via.placeholder.com/150" className="card-img-top" alt="..." /></div>
                        <div className="description ms-3">
                            <h4>{item.properties.name}</h4>
                            <p>Gender: {item.properties.gender}</p>
                            <p>Hair color: {item.properties.hair_color}</p>
                            <p>Eye color: {item.properties.eye_color}</p>

                        </div>
                        <div className="footer justify-content-between">
                            <Link to={`/people/${item.uid}`}><button className="btn btn-outline-primary ms-3" type="button">Learn more!</button></Link>
                            <button type="button" className="btn btn-outline-warning mb-2 me-3" onClick={()=>actions.addFavorites(item._id)}><i className="fas fa-heart"></i></button>
                        </div>
                    </div></div>) :

                nature == "vehicles" ?
                    (<div>
                        <div className="card">
                            <div className="image"><img src="https://via.placeholder.com/150" className="card-img-top" alt="..." /></div>
                            <div className="description ms-3">
                                <h4>{item.properties.name}</h4>
                                <p>Model: {item.properties.model}</p>
                                <p>Vehicle Class: {item.properties.vehicle_class}</p>


                            </div>
                            <div className="footer justify-content-between">
                                <Link to={`/vehicles/${item.uid}`}><button className="btn btn-outline-primary ms-3" type="button">Learn more!</button></Link>
                                <button type="button" className="btn btn-outline-warning mb-2 me-3" onClick={()=>actions.addFavorites(item._id)}><i className="fas fa-heart"></i></button>
                            </div>
                        </div>
                    </div>) :

                    nature == "planets" ?
                        (<div>
                            <div className="card">
                                <div className="image"><img src="https://via.placeholder.com/150" className="card-img-top" alt="..." /></div>
                                <div className="description ms-3">
                                    <h4>{item.properties.name}</h4>
                                    <p>Population: {item.properties.population}</p>
                                    <p>Terrain: {item.properties.terrain}</p>

                                </div>
                                <div className="footer justify-content-between">
                                    <Link to={`/planets/${item.uid}`}><button className="btn btn-outline-primary ms-3" type="button">Learn more!</button></Link>
                                    <button type="button" className="btn btn-outline-warning mb-2 me-3" onClick={()=>actions.addFavorites(item._id)}><i className="fas fa-heart"></i></button>
                                </div>
                            </div>
                        </div>) : null
            }
        </>
    )
}
export default Card