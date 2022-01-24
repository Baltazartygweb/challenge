import react from 'react';


const Search = () => {

return (

    <div col-12 col-sm-12 col-md-12 col-lg-12>
       <div className="row">
        <div className="col sm-2">Search by</div>   
        <div className="col sm-8 float-right">
        <input type="search" class="form-control" id="search-input" aria-label="Search docs for..." autocomplete="off" data-bd-docs-version="5.0"/>
        
       </div>
       </div>
    </div>

    ) 
}

export default Search;