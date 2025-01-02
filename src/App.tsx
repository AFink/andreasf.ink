import Brand from './assets/brand.svg'
import Logo from './assets/logo.svg'

import ParticlesLoader from './ParticlesLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faSteam } from '@fortawesome/free-brands-svg-icons/faSteam';
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker';
import { faLastfm } from '@fortawesome/free-brands-svg-icons/faLastfm';
import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faReddit } from '@fortawesome/free-brands-svg-icons/faReddit';
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
import { faKeybase } from '@fortawesome/free-brands-svg-icons/faKeybase';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const config = {
    "lang": "de",
    "title": "Home - Andreas Fink",
    "brand": "AndreasF.ink",
    "copyright": "Andreas Fink",
    "replyto": "kontakt@andreasf.ink",
    "navbar": [
        {
            "name": "E-Mail",
            "href": "mailto:hallo@andreasf.ink",
            "icon": faEnvelope
        },
        {
            "name": "GitHub",
            "href": "https://github.com/AFink",
            "icon": faGithub
        },
        {
            "name": "Spotify",
            "href": "https://open.spotify.com/user/finki70",
            "icon": faSpotify
        },
        {
            "name": "Instagram",
            "href": "https://www.instagram.com/xndrxxs_fxnk/",
            "icon": faInstagram
        },
        {
            "name": "Discord",
            "href": "https://discord.com/users/290893007044083714",
            "icon": faDiscord
        },
        {
            "name": "Twitter",
            "href": "https://twitter.com/xndrxxs_fxnk",
            "icon": faTwitter
        },
        {
            "name": "Steam",
            "href": "http://steamcommunity.com/id/realpantha/",
            "icon": faSteam
        },
        {
            "name": "Docker",
            "href": "https://hub.docker.com/u/finki70",
            "icon": faDocker
        },
        {
            "name": "Last.fm",
            "href": "https://www.last.fm/de/user/finki70",
            "icon": faLastfm
        },
        {
            "name": "Twitch",
            "href": "https://www.twitch.tv/realpanther_",
            "icon": faTwitch
        },
        {
            "name": "YouTube",
            "href": "https://www.youtube.com/channel/UC1V09EbSXPIWCiSRup9Lccw",
            "icon": faYoutube
        },
        {
            "name": "Reddit",
            "href": "https://www.reddit.com/u/RealPanther_",
            "icon": faReddit
        },
        {
            "name": "Telegram",
            "href": "https://t.me/finki70",
            "icon": faTelegram
        },
        {
            "name": "Keybase",
            "href": "https://keybase.io/finki70",
            "icon": faKeybase
        }
    ],
    "footer": [
        {
            "name": "Impressum",
            "href": "https://andreasf.ink/impressum/"
        },
        {
            "name": "Datenschutz",
            "href": "https://andreasf.ink/datenschutz/"
        }
    ]
};


function NavbarTest() {
    return (
        <Navbar expand="lg" className="navbar-dark py-3">
            <Container>
                <div>
                    <Navbar.Brand href="#" aria-label='Home-Logo-Link' className="me-2">
                        {/* @ts-expect-error */}
                        <Brand className="d-inline-block align-top" height="30" alt="Logo {{config.brand}}" />
                    </Navbar.Brand>
                    <Navbar.Brand href="#" aria-label='Home-Text-Link' >{config.brand}</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='mt-4 mt-lg-0' id="basic-navbar-nav">
                    <Nav className="ms-auto mb-2 mb-lg-0">
                        {
                            config.navbar.map((item, index) => (
                                <Nav.Item key={index}>
                                    <Nav.Link href={item.href} target='_blank'>
                                        <FontAwesomeIcon icon={item.icon} />
                                        <p className="d-lg-none">{item.name}</p>
                                    </Nav.Link>
                                </Nav.Item>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse >
            </Container >
        </Navbar >
    );
}

function App() {
    const currentYear = new Date().getFullYear();



    return (
        <div className='d-flex flex-column min-vh-100'>
            <NavbarTest />

            <ParticlesLoader />

            <div className="container">
                {/* @ts-expect-error */}
                <Logo className="logo" alt="Full Logo {{config.brand}}" />
            </div>

            <footer className='py-3'>
                <p className="copyright m-0"><span style={{ fontFamily: 'none' }}>&copy;</span>{currentYear}&nbsp;{config.copyright}
                    {
                        config.footer.map((item, index) => (
                            <span key={index}> | <a href={item.href} target="_blank">{item.name}</a> </span>
                        ))
                    }
                </p>
            </footer>
        </div>
    )
}

export default App
