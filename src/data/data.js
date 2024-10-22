import expressvpnlogo from "../images/expressvpnlogo.png"
import cyberghostlogo from "../images/cyberghostlogo.png"
import nordvpnlogo from "../images/nordvpnlogo.png"
import expressMobileLogo from "../images/expressvpn.png"
import cyberGhostMobileLogo from "../images/cyberghost.png"
import nordvpnMobileLogo from "../images/nordvpn.png"


export const data = [
    {
        websiteName: "www.expressvpn.com",
        mobileLogo: expressMobileLogo,
        logo: expressvpnlogo,
        name: "Express VPN",
        overview: (<>
            ExpressVPN, which is currently offering a <strong>30-day free trial</strong>, is the ultimate choice for high-speed browsing. With its military-grade encryption, you can rest assured that your internet activity will always remain private.
        </>),
        additional: "Over 7000 people checked out ExpressVPN in the last month",
        moneydays: " 30 days",
        servers: "3000 Servers in 105 countries",
        ks: "Yes",
        devices: " 8",
        mobile: "iOS, Android",
        website: "https://www.expressvpn.com/",
        price: '6.67',
        recommended: true
    },
   
     {
        websiteName: "www.cyberghostvpn.com",
        mobileLogo: cyberGhostMobileLogo,
        logo: cyberghostlogo,
        name: "CyberGhost VPN",
        overview: "Thanks to a brilliant interface and lots of handy features, this VPN will make even the pickiest users happy. For desktop or mobile, Windows, Mac, or Linux, if you want to securely enjoy private browsing,  CyberGhost is consistently impressive.",
        additional: "",
        moneydays: "45 days",
        servers: "11690 Servers in 100 countries",
        ks: "Yes",
        devices: "7",
        mobile: "iOS, Android",
        website: "https://www.cyberghost.com/",
        price: '7.67',
        recommended: false
    },
    {
        websiteName: "www.nordvpn.com",
        mobileLogo: nordvpnMobileLogo,
        logo: nordvpnlogo,
        name: "NordVPN",
        overview: " NordVPN offers decent value for money. Get a fast, secure, and affordable VPN with good global coverage.",
        additional: "",
        moneydays: "30 days",
        servers: " 6293 Servers in 111 countries",
        ks: "Yes",
        devices: "10",
        mobile: "iOS, Android",
        website: "https://www.nordvpn.com/",
        price: '8.67',
        recommended: false
    },
]