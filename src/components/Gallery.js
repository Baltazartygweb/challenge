import react from 'react';
import foto from '../imagen2.png';
import "./gallery.css";


const Gallery = () => {

  return (
    <div className="mt-3 gallery">
      <div className='row'>
        <div className='col-md-4 mt-4'>
          <img className="img-fluid rounded d-block m-l-none" src={foto} alt="image" />
        </div>
        <div className='col-md-4 mt-4'>
          <img className="img-fluid rounded d-block m-l-none" src={foto} alt="image"/>
        </div>
        <div className='col-md-4 mt-4'>
          <img className="img-fluid rounded d-block m-l-none" src={foto} alt="image" />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4 mt-4'>
          <img className="img-fluid rounded d-block m-l-none" src={foto} alt="image" />
        </div>
        <div className='col-md-4 mt-4'>
          <img className="img-fluid rounded d-block m-l-none" src={foto} alt="image"/>
        </div>
        <div className='col-md-4 mt-4'>
          <img className="img-fluid rounded d-block m-l-none" src={foto} alt="image" />
        </div>
      </div>
      <div className="mt-4">
        <p className="center-text style">Load More</p>
      </div>
    </div>

    ) 
}

export default Gallery;