import React from 'react';
import './product.css'; 

const galleryItems = [
  {
    id: 1,
    imgSrc: 'https://i.ytimg.com/vi/uRrMt7QKp44/maxresdefault.jpg',
    title: 'SKETCHING',
    description: '“Sketching is a continuing source of learning rather than a string of performances.”'
  },
  {
    id: 2,
    imgSrc: 'https://t4.ftcdn.net/jpg/06/52/16/27/360_F_652162792_yVVz1nKrdLxUvemAJUe4RfBHAXd3MgCI.jpg',
    title: 'ILLUSTRATION',
    description: '“Illustrations can be a big window: a looking glass into the author`s imagination.”'
  },
  {
    id: 3,
    imgSrc: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/buddha-wallpaper-free-photo.jpg?w=2210&quality=70',
    title: 'PAINTING',
    description: '“Painting from nature is not copying the object; it is realizing one`s sensations.”'
  },
  {
    id: 4,
    imgSrc: 'https://i.ytimg.com/vi/JP6dp299BfI/maxresdefault.jpg',
    title: 'RANGOLI',
    description: '“Rangoli is a traditional Indian art of hand-drawing patterns on the ground.”'
  },
  {
    id: 5,
    imgSrc: 'https://cdn.originalbuddhas.com/pages/uploads/101372/conversions/wax-buddha-large.jpg',
    title: 'SCULPTURE',
    description: '“Sculpture is the art of the intelligence.”'
  },
  {
    id: 6,
    imgSrc: 'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/85257/253127/1652883548244_IMG_20220317_002635_925__55593.1687005708.jpg?c=2',
    title: 'MANDALA',
    description: '“The mandala is a map for spiritual transformation.”'
  }
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title">
              <h1 className="display-4 fw-semibold">GALLERY</h1>
              <div className="line"></div>
              <p>“Art washes away from the soul the dust of everyday life.”</p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {galleryItems.map(item => (
            <div key={item.id} className="col-lg-4 col-sm-6">
              <div className="gallery-card">
                <img src={item.imgSrc} alt={item.title} className="gallery-img" />
                <div className="gallery-content">
                  <h5 className="gallery-title">{item.title}</h5>
                  <p className="gallery-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
