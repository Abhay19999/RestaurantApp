import React from 'react'

function MenuCard({menuData}) {
    return (
        <div>
        <section className = "main-card--cointainer">
        {menuData.map((curElem) => {
            const {id,name,category,image,description} = curElem;
            return(
            <div>
            <div class="card-container" key={id}>
            <div class="card" >
            <img src={image} className = "card-media" />
            <div class="container">
            <span className = "card-number card-circle subtle">{id}</span>
            <h5><b>{name}</b></h5>
            <h2>{name}</h2>
            <span className = "card-description">
            {description}</span>
            <span className = "card-tag subtle">Order Now</span>

            </div>
            </div>
                </div>
            </div>

            );
        })}
        </section>
        </div>
    );
};

export default MenuCard
