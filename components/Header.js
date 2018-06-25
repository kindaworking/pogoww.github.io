import Link from 'next/link'
import ActiveLink from './ActiveLink'
import styled from 'styled-components'

const StyledImg = styled.img`
    width: 100px;
`

const StyledActiveLink = styled(ActiveLink)`
    border-bottom: 3px solid transparent; 
    padding: .5rem 0 0;
    padding-left: 0;
    padding-right: 0; 
    margin: 0 .5rem; 
    color: rgb(0,0,0); 
    text-transform: uppercase; 
    font-weight: 600;
    
    &.active,
    &:hover,
    &:focus { border-bottom: 3px solid rgb(0,0,0); }

    @media (max-width: 576px) { 
        margin: 0 .25rem;
    }

    @media (min-width: 576px) { 
        margin: 0 1rem;
    }
`
export default () => (
    <>
        <a className="skip-StyledActiveLink sr-only" href="#main">Skip to content</a>
        <header className="container">
            <nav className="navbar navbar-expand p-0">
                <Link href="/"><a className="navbar-brand" rel="home"><StyledImg src="/static/pogo-sydney-city-logo.png" alt="Pokemon GO Sydney City logo" /><span className="sr-only">Pokemon Go Sydney City</span></a></Link>       
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><StyledActiveLink href="/info" className="nav-link" aria-label="info">#info</StyledActiveLink></li>
                    <li className="nav-item"><StyledActiveLink href="/rules" className="nav-link" aria-label="rules">#rules</StyledActiveLink></li>
                    <li className="nav-item"><StyledActiveLink href="/faq" className="nav-link" aria-label="FAQ">#faq</StyledActiveLink></li>
                    <li className="nav-item d-none d-sm-block"><a href="https://discord.gg/wPEP5Dq" target="_blank" className="btn btn-primary text-uppercase" style={{color: "white"}}>Join</a></li>
                </ul>
            </nav>
        </header>
    </>
)