import React from 'react'
import HudBar from './HudBar'
import DogImg from './DogImg'
class Gallery extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            response: [],
            breeds:[],
            limit:5,
            page:1,
            order:'Random',
            mimeType: 'jpg,png',
            breedId: '',
        }
        this.changeOrder = this.changeOrder.bind(this)
        this.changeCount = this.changeCount.bind(this)
        this.changeType = this.changeType.bind(this)
        this.changeBreed = this.changeBreed.bind(this)
        this.getData = this.getData.bind(this)
        this.getBreeds = this.getBreeds.bind(this)

        
    }
    componentDidMount(){
        this.getData()
        this.getBreeds()
    }
    getBreeds(){
        let url = `https://api.thedogapi.com/v1/breeds`
        fetch(url,{
            method: "GET",
            headers:{
                "x-api-key": "e23b92b1-7998-4c8e-9f7a-a519f75e538c",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            }
        })
        .then(response =>response.json())
        .then(response => {
            this.setState({breeds:response})
        })
    }
    getData(){
        let url = `https://api.thedogapi.com/v1/images/search?limit=${this.state.limit}&page=${this.state.page}&order=${this.state.order}&mime_types=${this.state.mimeType}&breed_ids=${this.state.breedId}`
        fetch(url,{
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            }
        })
        .then(response =>response.json())
        .then(response => {
            this.setState({response:response})
        })
    }
    changeOrder(e){
        this.setState({order:e.target.value})
    }
    changeCount(e){
        this.setState({limit:e.target.value})
    }
    changeType(e){
        this.setState({mimeType:e.target.value})
    }
    changeBreed(e){
        this.setState({breedId:e.target.value})
    }
    render(){
        return(
            <div className="gallery-page">
                <HudBar/>
                <div className="voting-elements-block">
                    <div className="voting-elements-buttons">
                        <button className="voting-back"></button>
                        <button className="voting-button-back">GALLERY</button>
                        <button className="voting-button-upload">UPLOAD</button>
                    </div>
                    <div className="voting-elements-select">
                        <div className="voting-option-select">
                            <div className="voting-option-left">
                                <p className="voting-option-name">ORDER</p>
                                <select onChange={this.changeOrder} className="select-gallery">
                                    <option className="select">Random</option>
                                    <option className="select">Desc</option>
                                    <option className="select">Asc</option>
                                </select>
                                <p className="voting-option-name">BREED</p>
                                <select onChange={this.changeBreed} className="select-gallery">
                                    <option className="select" value=''>None</option>
                                    {this.state.breeds.map(breed =>
                                        <option className="select" key={breed.id} value={breed.id}>{breed.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className="voting-option-right">
                                <p className="voting-option-name">TYPE</p>
                                <select onChange={this.changeType} className="select-gallery">
                                    <option className="select" value='jpg,png'>Static</option>
                                    <option className="select" value=''>All</option>
                                    <option className="select" value='gif'>Animated</option>
                                </select>
                                <p className="voting-option-name">LIMIT</p>
                                <div className="voting-button-select">
                                    <select onChange={this.changeCount} className="select-gallery short">
                                        <option className="select" value='5'>5 items per page</option>
                                        <option className="select" value='10'>10 items per page</option>
                                        <option className="select" value='15'>15 items per page</option>
                                        <option className="select" value='20'>20 items per page</option>
                                    </select>
                                    <button onClick={this.getData} className="refresh-button"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-dogs wrapper-dogs-gallery">
                        {this.state.response.map((dog) =>
                            <DogImg dog={dog} key={dog.id}/>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery