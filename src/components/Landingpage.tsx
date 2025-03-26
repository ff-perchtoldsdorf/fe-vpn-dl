import './Landingpage.scss'
import openVpnLogo from '../assets/openvpn.svg'
import { useState } from 'react';

export default function Landingpage() {
    const [tankYou, setTankYou] = useState(false);

    return (
        <div className='landingpage'>
            <div className="container">
                <div className="left">
                    <img src={openVpnLogo} alt='OpenVPN' />
                </div>
                <>
                </>
                <div className="right">
                    <h1>FF Perchtoldsdorf VPN Server</h1>
                    {tankYou
                        ? <p>Komme wieder zurück wenn du dich mit der VPN verbunden hast!</p>
                        : <p>Willkommen auf unserem VPN-Server. Hier kannst du dir das Profil für die VPN-Verbindung herunterladen.</p>
                    }
                    <div className="btns">
                        <a href='https://openvpn.net/client/' className='orange'>
                        {tankYou ? 'VPN Client noch nicht installiert?' : 'OpenVPN Client'}
                        </a>
                        {!tankYou && (
                            <a href='/client.ovpn' download onClick={() => setTankYou(true)}>VPN Profil</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}