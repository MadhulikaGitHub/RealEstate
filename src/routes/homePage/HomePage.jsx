import React from 'react'
import './HomePage.scss'
import SearchBar from '../../components/SearchBar/SearchBar'

function HomePage() {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className="wrapper">

          <h1 className='title'>
            Find Real Estate & Get your dream place
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, adipisci. Sed odit, provident ipsam velit cupiditate laborum nulla dolorem officia nam eaque tenetur nihil quisquam possimus, eum, enim sint eos.
          </p>

          <SearchBar/>

          <div className="boxes">

            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>

            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>

          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage