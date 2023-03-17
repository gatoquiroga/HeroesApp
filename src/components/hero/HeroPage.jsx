import React, { useMemo } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

const HeroPage = () => {
const {id} = useParams(); 

const hero =useMemo(() => getHeroById(id), [id]) ;
const navigate= useNavigate();

const onNavigateBack= () => {
navigate(-1)
};

if (!hero) {
  
  return <Navigate to="/marvel "/>
}

  return (
    <div className=' row mt-5'>
    <div className="col-4">
      <img  
      src={ `/heroes/${ id }.jpg` }
       alt={hero.superhero}
         className=' img-thumbnail animate__animated animate__fadeInLeft'/>
    </div>
    <div className="col-8">
      <h3>{hero.superhero}</h3>
      <ul className=' list-group list-group-flush'>
        <li className=' list-list-group-item'><b> Alter Ego:</b> {hero.alter_ego}</li>
        <li className=' list-list-group-item'><b> Publisher:</b> {hero.publisher}</li>
        <li className=' list-list-group-item'><b> First Appereance:</b> {hero.first_appearance}</li>
      </ul>

      <h5 className=' mt-3' > Characters </h5>
      <p>{hero.characters}</p>
      <button 
      className='btn btn-outline-primary  bg-dark '
      onClick={onNavigateBack}>
      Back
    </button> 
    </div>

  
    </div>
  )
}

export default HeroPage
