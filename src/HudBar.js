import {Link} from 'react-router-dom'

function HudBar(){
    return(
        <div className="voting-links-block">
            <div className="voting-search-box">
                <input className="voting-search" type="search" placeholder="Search for breeds by name"/>
            </div>
            <Link to='/likes'><button className="voting-button smile"></button></Link>
            <Link to='/favourites'><button className="voting-button heart"></button></Link>
            <Link to='/dislikes'><button className="voting-button sad"></button></Link>
        </div>
    )
}

export default HudBar