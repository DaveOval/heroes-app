import React from 'react'

export const SearchPage = () => {
  return (
    <>
      <h1>Search</h1>
      
      <hr />

      <div className="row">
        <div className='col-5'>
          <h4>Searching</h4>
          <hr/>
          <fomr>
            <input 
              type="text" 
              placeholder='Search a hero'
              className='form-control'
              name="searchText" 
              id=""
              autoComplete='off' 
            />
            <button className='btn btn-outline-primary mt-1'>
              Search
            </button>
          </fomr>
        </div>

        <div className='col-7'>
          <h4>Result</h4>
          <hr/>
          <div className='alert alert-info'>
            Search a hero
          </div>
        </div>
      </div>

    </>
  )
}
