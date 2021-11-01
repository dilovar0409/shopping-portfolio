import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards" style={{marginBottom:'20px'}}>
                        <div className="card">
                            <div className="image" style={{padding:"40px"}}>
                                <img src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">${price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return <div className="d-flex" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>{renderList}</div>
}

export default ProductComponent;