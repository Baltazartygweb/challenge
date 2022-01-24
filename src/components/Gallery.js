import react from 'react';
import foto from '../imagen.png';
//import "./gallery.css";


const Gallery = () => {

  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-4'>
          <img className="img-fluid rounded d-block" src={foto} alt="image" />
        </div>
        <div className='col-md-4'>
          <img className="img-fluid rounded d-block m-l-none" src={foto} alt="image"/>
        </div>
        <div className='col-md-4'>
          <img className="img-fluid rounded d-block m-l-none" src={foto} alt="image" />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <img className="img-fluid rounded d-block m-l-none" src={foto} alt="image" />
        </div>
        <div className='col-md-4'>
          <img className="img-fluid rounded d-block m-l-none" src={foto} alt="image"/>
        </div>
        <div className='col-md-4'>
          <img className="img-fluid rounded d-block m-l-none" src={foto} alt="image" />
        </div>
      </div>
      <div>
        <button className="btn btn-pink">Load More</button>
      </div>
    </div>

    ) 
}

export default Gallery;