import React, { Component } from 'react';
import './App.css';
import logoPic from './pics/logoPic.png';
import skywardPic from './pics/skyward.jpg';
import relicPic from './pics/relic.jpg';
import riftPic from './pics/rift.png';
import facebookPic from './pics/FB.png';
import instagramPic from './pics/Insta.png';
import spotifyPic from './pics/spotifyCircle.jpg';
import youtubePic from './pics/YT.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <div>
          <nav className='navbar'>
            <ul
              className='navbar-nav mr-auto'
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              <li style={{ paddingRight: '10px' }}>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li style={{ paddingRight: '10px' }}>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li style={{ paddingRight: '10px' }}>
                <NavLink to='/albums'>Albums</NavLink>
              </li>
              <li style={{ paddingRight: '10px' }}>
                <NavLink to='/shows'>Shows</NavLink>
              </li>
            </ul>

            <ul
              className='navbar-nav ml-auto'
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              <li style={{ paddingLeft: '10px' }}>
                <a
                  href='https://www.facebook.com/formingthevoid/'
                  target='_blank'
                >
                  {' '}
                  <img
                    src={facebookPic}
                    alt='pics'
                    className='img-fluid'
                    style={{ width: '25px' }}
                  />
                </a>
              </li>
              <li style={{ paddingLeft: '10px' }}>
                <a
                  href='https://www.instagram.com/forming_the_void/?hl=en'
                  target='_blank'
                >
                  {' '}
                  <img
                    src={instagramPic}
                    alt='pics'
                    className='img-fluid'
                    style={{ width: '25px' }}
                  />
                </a>
              </li>
              <li style={{ paddingLeft: '10px' }}>
                <a
                  href='https://open.spotify.com/artist/4VSEqckiFLO2SOuSKAlXTv'
                  target='_blank'
                >
                  <img
                    src={spotifyPic}
                    alt='pics'
                    className='img-fluid'
                    style={{ width: '25px' }}
                  />
                </a>
              </li>
              <li style={{ paddingLeft: '10px' }}>
                <a
                  href='https://www.youtube.com/watch?v=cLUvtkiaZFA'
                  target='_blank'
                >
                  {' '}
                  <img
                    src={youtubePic}
                    alt='pics'
                    className='img-fluid'
                    style={{ width: '25px' }}
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/*   <ul class="navbar-nav">
                <li class="nav"><a class="navbar-brand nav-link"
                        href="https://open.spotify.com/artist/4VSEqckiFLO2SOuSKAlXTv" target="_blank"><img
                            src="pics/sites/spotifyCircle.jpg" alt="" style="width:25px;"></a></li>
                <li class="nav"><a class="navbar-brand nav-link" href="https://www.youtube.com/watch?v=cLUvtkiaZFA"
                        target="_blank"><img src="pics/sites/YT.png" alt="" style="width:25px;"></a></li>
                <li class="nav"><a class="navbar-brand nav-link" href="https://www.facebook.com/formingthevoid/"
                        target="_blank"><img src="pics/sites/FB.png" alt="" style="width:25px;"></a></li>
                <li class="nav"><a class="navbar-brand nav-link"
                        href="https://www.instagram.com/forming_the_void/?hl=en" target="_blank"><img
                            src="pics/sites/insta.png" alt="" style="width:25px;"></a></li>
            </ul> */}

        <Switch>
          <Route path='/shows'>
            <Shows />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/albums'>
            <Albums />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const homeStyle = {
    // backgroundColor: 'hsl(218, 51%, 10%)',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '1000px'
  };

  // const imageStyle = {
  //   width: "55%",
  //   height: "auto"
  // }

  // style={imageStyle}

  return (
    <div style={{ backgroundColor: 'hsl(218, 51%, 10%)' }}>
      <div style={homeStyle} className='mx-auto'>
        <img src={logoPic} alt='pics' className='img-fluid' />
      </div>
    </div>
  );
}

function About() {
  const aboutStyle = {
    backgroundColor: 'hsl(218, 51%, 10%)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    paddingRight: '20px'
  };

  return (
    <div style={aboutStyle}>
      <ul>
        <h1
          className='display-4 text-center pb-4'
          style={{ color: 'hsl(218, 75%, 45%)', fontWeight: 'bold' }}
        >
          PRESS
        </h1>
        <li>
          <h5 className='float-right'>- DOOM CHARTS</h5>
          <p>
            &quot;It&rsquo;s clear the fans and critics hear something special,
            and seeing them live in Vegas plus meeting and hanging out with the
            dudes it&rsquo;s clear they are on the right path.&rdquo;
          </p>
        </li>
        <li>
          <h5 className='float-right'>- METAL HAMMER</h5>
          <p>
            &quot;Displaying an elaborate musical tapestry that swirls from
            devastatingly heavy riffs [...] Rift is very much an organic and
            elaborate offering from a band whose potential is fast becoming
            realized.&quot;
          </p>
        </li>
        <li>
          <h5 className='float-right'>- THE WIRE</h5>
          <p>
            &quot;Their fourth album Rift is epic in scale, replete with
            windswept hooks and skyscraping vocals, but it also delivers heavy
            metal thunder in abundance [...] It&apos;s immense - and immensely
            satisfying.&quot;
          </p>
        </li>
        <li>
          <h5 className='float-right'>- CLASSIC ROCK (UK)</h5>
          <p>
            &ldquo;Forming The Void are set to crush all-comers with this follow
            up to their much lauded third album Relic.&rdquo;
          </p>
        </li>
        <li>
          <h5 className='float-right'>- ANGRY METAL GUY</h5>
          <p>
            &ldquo;Turns out that there&rsquo;s room for a little more worship
            of The Good Riff after all. Of course, by &ldquo;a little bit
            more&rdquo; I really &ldquo;packed full&rdquo; of The Good Riff, as
            Rift takes no shortcuts in terms of hooking the listener in with
            them.&rdquo;
          </p>
        </li>
        <li>
          <h5 className='float-right'>- METAL INJECTION</h5>
          <p>
            &ldquo;Louisiana&rsquo;s Forming the Void is one of stoner
            metal&rsquo;s best-kept secrets [&mldr;]Any self-respecting fan of
            stoner, sludge prog, or hell, even grunge, owes it to themselves to
            give this album a spin. &rdquo;
          </p>
        </li>
        <li>
          <h5 className='float-right'>- CVLT NATION</h5>
          <p>
            &ldquo;Melding their influences, which range from Mastodon and The
            Sword, to Soundgarden and YOB, Forming The Void&rsquo;s riffs summon
            a sense of adventure.&rdquo;
          </p>
        </li>
      </ul>
    </div>
  );
}

function Albums() {
  return (
    <div
      id='albums'
      className='album'
      style={{ backgroundColor: 'hsl(218, 51%, 10%)' }}
    >
      <div className='container-fluid'>
        <h1
          className='display-4 text-center pt-5'
          style={{ color: 'hsl(218, 75%, 45%)', fontWeight: 'bold' }}
        >
          Albums
        </h1>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card mb-4 shadow-sm'>
              <img
                className='bd-placeholder-img card-img-top'
                src={skywardPic}
                alt='pics'
                style={{ height: '250px' }}
              />
              <div className='card-body' id='album'>
                <div className='d-flex justify-content-between aligns-center'>
                  <iframe
                    title='Skyward'
                    style={{ border: '0', width: '100%', height: '307px' }}
                    src='https://bandcamp.com/EmbeddedPlayer/album=3399954694/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/'
                    seamless=''
                  >
                    <a href='http://formingthevoid.bandcamp.com/album/skyward'>
                      Skyward by Forming the Void
                    </a>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card mb-4 shadow-sm'>
              <img
                className='bd-placeholder-img card-img-top'
                src={relicPic}
                alt='pics'
                style={{ height: '250px' }}
              />
              <div className='card-body' id='album'>
                <div className='d-flex justify-content-between aligns-center'>
                  <iframe
                    title='Relic'
                    style={{ border: '0', width: '100%', height: '406px' }}
                    src='https://bandcamp.com/EmbeddedPlayer/album=1034333834/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/'
                    seamless=''
                  >
                    <a href='http://formingthevoid.bandcamp.com/album/relic'>
                      Relic by Forming the Void
                    </a>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card shadow-sm'>
              <img
                className='bd-placeholder-img card-img-top'
                src={riftPic}
                alt='pics'
                style={{ height: '250px' }}
              />
              <div className='card-body' id='album'>
                <div className='d-flex justify-content-between aligns-center'>
                  <iframe
                    title='Rift'
                    style={{ border: '0', width: '100%', height: '373px' }}
                    src='https://bandcamp.com/EmbeddedPlayer/album=2696210395/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/'
                    seamless=''
                  >
                    <a href='http://formingthevoid.bandcamp.com/album/rift'>
                      Rift by Forming the Void
                    </a>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

class Shows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showData: []
    };
  }

  componentDidMount() {
    fetch(
      'https://rest.bandsintown.com/artists/formingthevoid/events?app_id=13706c200eb9a2e94dde6d6e2ffd999a&date=upcoming'
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          showData: result
        });
      });
  }

  render() {
    const showsStyle = {
      backgroundColor: 'hsl(218, 51%, 10%)',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      maxWidth: '1000px'
    };

    const contents = [];
    this.state.showData.map((item, key) => {
      var day = new Date(item.datetime);
      day.toDateString();
      var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
      var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
      let day2 = `${days[day.getDay()]}, ${
        months[day.getMonth()]
      } ${day.getDate()}`;
      item.datetime = day2;
      return contents.push(
        <tr key={key}>
          <td>
            {item.datetime + ' - ' + item.venue.city + ', '}{' '}
            <a href={item.url}> {item.venue.name} </a>{' '}
          </td>
        </tr>
      );
    });

    return (
      <div style={{ backgroundColor: 'hsl(218, 51%, 10%)' }}>
        <div style={showsStyle} className='mx-auto'>
          <table className='table text-center table-dark'>
            <h1
              className='display-4 pb-1'
              style={{ color: 'hsl(218, 75%, 45%)', fontWeight: 'bold' }}
            >
              SHOWS
            </h1>
            <tbody>{contents}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
