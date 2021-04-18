import React  from 'react'
import HudBar from '../HudBar';
import DogImg from '../DogImg';
class Likes extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            voutes: []
        }
        this.getVotes = this.getVotes.bind(this)
        this.getImg = this.getImg.bind(this)

    }
    componentDidMount(){
        this.getVotes()
    }
    getImg(id){
        let img;
        let url = `https://api.thedogapi.com/v1/images/${id}`;
        console.log(url)
        fetch(url,{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "x-api-key": "e23b92b1-7998-4c8e-9f7a-a519f75e538c",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
        })
        .then(response =>response.json())
        .then(response => response)
    }
    getVotes(){
        let url = `https://api.thedogapi.com/v1/votes`;
        fetch(url,{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "x-api-key": "e23b92b1-7998-4c8e-9f7a-a519f75e538c",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
        })
        .then(response =>response.json())
        .then(response => {
            this.setState({voutes:response})
        })
    }
    render() {
        let likes = this.state.voutes.filter( dog=> dog.value == 1)
        return (
            <div className='likes-block'>
                <HudBar/>
                <div className="wrapper-dogs wrapper-dogs-gallery">
                    {likes.map((dog) =>
                        <DogImg dog={this.getImg(dog.image_id)} key={dog.image_id}/>)
                    }
                </div>
            </div>
        )
    }
}

export default Likes;
