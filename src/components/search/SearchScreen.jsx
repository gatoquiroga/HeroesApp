
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import HeroCard from '../HeroCard'
import queryString from 'query-string'
import { getHeroByName } from '../helpers/getHeroByName'

const SearchScreen = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const heroes = getHeroByName (q);

    const showSearch = (q.length===0);
    const showError = (q.length>0) && heroes.length===0;

 const { searchText, onInputChange}= useForm({
  searchText : q
 });

 const onSearchSubmit = (event)=>{

  event.preventDefault();

  //if(searchText.trim().length <=1) return;
 navigate(`?q=${searchText}`)
  
 }


  return (
    <>
      <h1>search</h1>
      <hr/>
      <div className="row">

      <div className="col-5   ">
       <h4>Searching</h4>
       <hr/>
       <form onSubmit={onSearchSubmit}> 
        <input
          type="text"
          placeholder='Buscar Heroe'
          className='form-control '
          name='searchText'
          autoComplete='off'
          value={searchText}
          onChange={onInputChange}
          />
       <button className='btn btn-outline-primary btn-outline-dark mt-1'>
        Search
       </button>
       </form>
      </div>
      <div className="col-7 ">
            <h4>Resultado</h4>
            <hr/>

           
              <div className='alert  alert-primary animate__animated animate__fadeIn' style={{display: showSearch ? '' : 'none'}}>
                Buscar Heroe
                </div> 


               <div className='alert  alert-danger animate__animated animate__fadeIn'  style={{display: showError ? '' :'none'}}>
              No encontramos <b>{q}</b> como resultado a tu busqueda..
            </div>  
            
            
            
            {
              heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
              ))
            }
      </div>
          </div>
    </>
  )
}

export default SearchScreen
