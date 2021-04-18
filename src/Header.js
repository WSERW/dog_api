import logo from './img/logos/Logo.png';
import {Link} from 'react-router-dom'

function Header(){
    return(
        <div className="container-left">
            <div className="home-page__logo">
                <img className="home-page-image" src={logo}/>
            </div>
            <div className="home-page__main-text">
                <h1 className="home-page-header">Hi intern!</h1>
                <h4 className="home-page-subheader">Welcome to MSI 2021 Front-end test</h4>
            </div>
            <div className="home-page-choosing__menu">
                <h4 className="home-page-heading">Lets start using The Dogs API</h4>
            </div>
            <div className="home-page-choosing__block">
                <div className="home-page-choosing__elements ">
                    <div className="home-page-choosing__voiting">
                    </div>
                    <Link to='/voting'>Voting</Link>
                    {/* <button className="home-page-choosing__item-button">VOTING</button> */}
                </div>
                <div className="home-page-choosing__elements ">
                    <div className="home-page-choosing__breeds">
                    </div>
                    <Link to='/breeds'>Breeds</Link>
                    {/* <button className="home-page-choosing__item-button">BREEDS</button> */}
                </div>
                <div className="home-page-choosing__elements ">
                    <div className="home-page-choosing__gallery">
                    </div>
                    <Link to='/gallery'>Gallery</Link>
                    {/* <button className="home-page-choosing__item-button">GALLERY</button> */}
                </div>
            </div>
        </div>
    )
}

export default Header