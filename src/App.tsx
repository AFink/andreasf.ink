import Logo from './assets/logo.svg'

import ParticlesLoader from './ParticlesLoader';

import Navbar from './components/Navbar';

import { config } from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCopyright } from '@fortawesome/free-regular-svg-icons/faCopyright';

function App() {
    const currentYear = new Date().getFullYear();

    return (
        <div className='min-vh-100'>
            <ParticlesLoader />

            {/* @ts-expect-error */}
            <Logo alt="Full Logo" className="fill-logo-light dark:fill-logo-dark absolute top-[47%] left-1/2 max-h-[30%] max-w-[70%] -translate-x-1/2 -translate-y-1/2" />

            <footer className='absolute bottom-0 w-full py-3 text-gray-900 dark:text-white/50 text-center'>
                <p className="copyright m-0"><FontAwesomeIcon icon={faCopyright} className='mr-1' />{currentYear}&nbsp;{config.copyright}
                    {
                        config.footer.map((item, index) => (
                            <span key={index}> | <a href={item.href} target="_blank" className='transition-color ease-in-out duration-200 border-b border-dotted border-gray-800 text-gray-800 dark:border-white/50 dark:text-white/50 no-underline hover:border-white/0 hover:text-primary'>{item.name}</a> </span>
                        ))
                    }
                </p>
            </footer>

            <Navbar />
        </div>
    )
}

export default App
