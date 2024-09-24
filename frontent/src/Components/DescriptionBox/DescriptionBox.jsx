import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati odit temporibus vel voluptate quibusdam possimus magni minus quis excepturi, esse reprehenderit voluptatum quos sit amet eaque accusantium laboriosam fugit eligendi inventore aspernatur reiciendis consequuntur deleniti animi! Aut sit fuga beatae, dicta facere, quos et eaque, ullam quo nulla quae voluptate.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quasi molestias consectetur beatae temporibus saepe, aperiam soluta quo veritatis dolor non tempore doloribus quos omnis fugit! Tenetur veniam atque voluptatum.</p>
        </div>
    </div>
  )
}

export default DescriptionBox