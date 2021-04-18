import Header from './Header.js';
import Main from './Main.js';

import Voting from './Voting/Voting.js';
import Likes from './Voting/Likes.js';
import Dislikes from './Voting/Dislikes.js';
import Favourites from './Voting/Favourites.js';

import Gallery from './Gallery.js';
import Breeds from './Breeds.js';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <main className="home-page">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/voting' component={Voting}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/breeds' component={Breeds}/>
          <Route path='/likes' component={Likes}/>
          <Route path='/dislikes' component={Dislikes}/>
          <Route path='/favourites' component={Favourites}/>

        </Switch>
      </Router>
    </main>
  )
}

export default App;
