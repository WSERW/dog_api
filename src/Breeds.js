import HudBar from './HudBar'

function Breeds(){
    return(
        <div className="breeds-page">
                <HudBar/>
            <div className="voting-elements-block">
                <div className="voting-elements-buttons">
                    <button className="voting-back"></button>
                    <button className="voting-button-back">BREEDS</button>
                    <div className="voting-elements-select">
                        <select className="select-breeds">
                            <option className="selected">All breeds</option>
                            <option className="selected">Affenpinscher</option>
                            <option className="selected">Afghan Hound</option>
                            <option className="selected">African Hunting Dog</option>
                            <option className="selected">Airedale Terrier</option>
                            <option className="selected">Akbash Dog</option>
                            <option className="selected">Akita</option>
                            <option className="selected">...</option>
                        </select>
                        <select className="select-limit">
                            <option className="selected-limit">Limit: 5</option>
                            <option className="selected-limit">Limit: 10</option>
                            <option className="selected-limit">Limit: 15</option>
                            <option className="selected-limit">Limit: 20</option>
                        </select>
                        <button className="select-sort-up"></button>
                        <button className="select-sort-down"></button>
                    </div>
                </div>
                <div className="wrapper-dogs">
                        <div className="photo-block-dog__1 wrapper-breed">
                            <div className="dog-breed">Afghan Hound</div>
                        </div>
                        <div className="photo-block-dog__2 wrapper-breed">
                            <div className="dog-breed">Affenpinscher</div>
                        </div>
                        <div className="photo-block-dog__3 wrapper-breed">
                            <div className="dog-breed">African Hunting Dog</div>
                        </div>
                        <div className="photo-block-dog__4 wrapper-breed">
                            <div className="dog-breed">Airedale Terrier</div>
                        </div>
                        <div className="photo-block-dog__5 wrapper-breed">
                            <div className="dog-breed">Akbash Dog</div>
                        </div>
                        <div className="photo-block-dog__6 wrapper-breed">
                            <div className="dog-breed">Akita</div>
                        </div>
                        <div className="photo-block-dog__7 wrapper-breed">
                            <div className="dog-breed">West Siberian Laika</div>
                        </div>
                        <div className="photo-block-dog__8 wrapper-breed">
                            <div className="dog-breed">Alapakh Bulldog</div>
                        </div>
                        <div className="photo-block-dog__9 wrapper-breed">
                            <div className="dog-breed">Alaskan Malamute</div>
                        </div>
                </div>
                
            </div>
        </div>
    )
}

export default Breeds