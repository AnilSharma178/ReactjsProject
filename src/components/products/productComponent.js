import React, { Component } from 'react';
import './productComponent.css';


class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { imageUri: '' }
    }


    handleClick = (imageName) => {
        this.setState({
            imageUri: imageName
        })
        window.document.location = `/productDetail/${imageName}`;
    }

    render() {

        const lstImage = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15"];

        //const lstImage = ["img1"];
        const images = lstImage.map(image => {
            return <div className="col-md-4 img-div"> <img key={image}
                src={require(`../../images/Products/${image}.jpg`)}
                style={{ width: "180px", height: "245px" }} alt=""
                className="img-responsive"
                onClick={this.handleClick.bind(this, image)} /></div>
        });
        return (

            <div className="con"> 
                <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col-md-12">
                        <div className="row">
                            {images}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductComponent;