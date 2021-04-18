import React from 'react'

class DogImg extends React.Component{
    render(){
        return(
            <div className="photo-block-dog wrapper-breed">
                <img src={this.props.dog.url} alt=""/>
                <div className="dog-favourites"></div>
            </div>
        )
    }
}

export default DogImg