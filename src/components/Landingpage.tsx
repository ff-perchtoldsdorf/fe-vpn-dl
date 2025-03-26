import './Landingpage.scss'
import openVpnLogo from '../assets/openvpn.svg'

export default function Landingpage() {
    return (
        <div className='landingpage'>
            <div className="container">
                <div className="left">
                    <img src={openVpnLogo} alt='OpenVPN' />
                </div>
                <div className="right">
                    <h1>FF Perchtoldsdorf VPN Server</h1>
                    <p>Mit unserer VPN-Verbindung erhältst du Zugriff auf das Netzwerk der FF Perchtoldsdorf.</p>
                    <div className="btns">
                        <a className='orange' href='https://openvpn.net/client/'>VPN Client</a>
                        <a href='/client.ovpn' download>Profil</a>
                    </div>
                </div>
            </div>
        </div>
    )
}