import React from 'react';
import HudBar from '../HudBar';

class Voting extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            img: {},
            voutes: [],
        }
        this.getImg = this.getImg.bind(this)
    }
    componentDidMount(){
        this.getImg()
    }
    getImg(){
        let url = `https://api.thedogapi.com/v1/images/search`
        fetch(url,{
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            }
        })
        .then(response =>response.json())
        .then(response => {
            this.setState({img:response[0]})
        })
    }
    postVote(imageId,value){
        let url = `https://api.thedogapi.com/v1/votes`;
        fetch(url,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "x-api-key": "e23b92b1-7998-4c8e-9f7a-a519f75e538c",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
            body:JSON.stringify({
                image_id: imageId,
                value: value,
            })
        })
        .then(response =>response.json())
    }
    render(){
        return(
            <div className="voting-page">
                <HudBar/>
            <div className="voting-elements-block">
                <div className="voting-elements-buttons">
                    <button className="voting-back"></button>
                    <button className="voting-button-back">VOTING</button>
                </div>
                <div className="voting-elements-picture">
                    <div className="voting-elements-image">
                        <img src={this.state.img.url} alt=""/>
                        <div className="voting-elements-btns">
                            <button onClick={()=>{
                                this.postVote(this.state.img.id,1);
                                this.getImg();
                                }} className="voting-green-smile"></button>
                            <button className="voting-heart-smile"></button>
                            <button onClick={()=>{
                                this.postVote(this.state.img.id,0)
                                this.getImg();
                                }} className="voting-yellow-smile"></button>
                        </div>
                    </div>
                </div>
                <div className="voting-added-elements">
                    <div className="voting-element">
                        <div className="voting-time"><p className="time">22:35</p></div>
                        <div className="voting-imageid"><p className="imageid">Image ID: <strong className="black">fQSunHvl8</strong> was added to Favourites</p></div>
                        <div className="voting-icon"></div>
                    </div>
                    <div className="voting-element">
                        <div className="voting-time"><p className="time">22:27</p></div>
                        <div className="voting-imageid"><p className="imageid">Image ID: <strong className="black">Hjd0XecNX</strong> was added to Likes</p></div>
                        <div className="voting-icon green_smile"></div>
                    </div>
                    <div className="voting-element">
                        <div className="voting-time"><p className="time">22:21</p></div>
                        <div className="voting-imageid"><p className="imageid">Image ID: <strong className="black">BbMFS3bU</strong> was added to Dislikes</p></div>
                        <div className="voting-icon yellow_smile"></div>
                    </div>
                    <div className="voting-element">
                        <div className="voting-time"><p className="time">21:56</p></div>
                        <div className="voting-imageid"><p className="imageid">Image ID: <strong className="black">fQSunHvl8</strong> was removed from Favourites</p></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Voting