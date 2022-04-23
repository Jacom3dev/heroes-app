import React, { useMemo } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import HeroCard from '../hero/HeroCard';

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''}= queryString.parse(location.search);


  const [ values, handleInputChange] = useForm(
    {search:q}
  )

  const {search} = values;

  const heroesFileted = useMemo(()=>getHeroesByName(q),[q]) ;

  const handleSearch = (e)=>{
    e.preventDefault();
    if (search.length !== 0) {
      navigate(`?q=${search}`);
    }
  }

  return (
    <>
      <h1>Busqueda</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input 
              type="text"
              placeholder='Buscar héroe'
              className='form-control'
              name='search'
              autoComplete='off'
              value={search}
              onChange={handleInputChange}
            />
            <button type='submit' className='btn btn-outline-info mt-2'>Buscar...</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados {(q !== '')&& `de : ${q}`} </h4>
          <hr />
          {
            (q === '')
            ? <div className="alert alert-info">Buscar Héroe</div>
            : (heroesFileted.length === 0)
              && <div className="alert alert-danger">No hay resultados de : <b>{q}</b></div>
          }
          {
            heroesFileted.map((hero)=>(
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SearchScreen