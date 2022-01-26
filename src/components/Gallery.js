import react from 'react';
import foto from '../galleryFoto.png';
//import "./gallery.css";


const Gallery = () => {

  return (
    <div className="container mt-3">
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
      <div className="text-center mt-4">
        <p className="mx-auto">Load More</p>
      </div>
    </div>

    ) 
}

export default Gallery;