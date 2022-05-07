import React from "react";

function Product({image, title, description}){
    return (
        <article className="product">
            <img src={image} alt={title}/>
            <h1 className="product-name">{title}</h1>
            <p className="product-description">{description}</p>
        </article>
    );
}

export default Product;