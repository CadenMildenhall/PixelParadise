import { useNavigate } from "react-router-dom"
import "../Styles/Home.css"

export const Home = () =>
{

const navigate = useNavigate();

const toApex = () =>
{
    navigate("/apex");
}

const toCS = () =>
{
    navigate("/CS")
}

const toValorant = () =>
{
    navigate("/valorant")
}

const toStarCraft = () =>
{
    navigate("/starcraft")
}

const toMinecraft = () =>
{
    navigate("/minecraft")
}

const toFortnite = () =>
{
    navigate("/fortnite")
}

const toChess = () =>
{
    navigate("/chess")
}

const toCallOfDuty = () =>
{
    navigate("/cod")
}

const toFinals = () =>
{
    navigate("/finals")
}

const toRainbowSix = () =>
{
    navigate("/rainbow")
}

///

const toHellDivers = () =>
{
    navigate("/helldivers")
}

const toRoblox = () =>
{
    navigate("/roblox")
}

const toEFT = () =>
{
    navigate("/eft")
}

const toTerraria = () =>
{
    navigate("/terraria")
}

const toPalWorld = () =>
{
    navigate("/palworld")
}

const toRust = () =>
{
    navigate("/rust")
}

const toLeague = () =>
{
    navigate("/league")
}

const toDestiny = () =>
{
    navigate("/destiny")
}

const toGta = () =>
{
    navigate("/gta")
}

const toEldenRing = () =>
{
    navigate("/elden")
}

    return (
        <>


            <div className="Logo">
                <img src="c080708d04b61442471fc503e6f07f99-flat-gaming-controller-icon.webp" className="PPlogo"></img>
            </div>

            <div className="Buttons">
                <button onClick={toApex} className="Apex"></button>
                <button onClick={toCS} className="CS2"></button>
                <button onClick={toValorant} className="Valorant"></button>
                <button onClick={toStarCraft} className="StarCraft2"></button>
                <button onClick={toMinecraft} className="MineCraft"></button>
                <button onClick={toFortnite} className="Fortnite"></button>
                <button onClick={toChess} className="Chess"></button>
                <button onClick={toCallOfDuty} className="CallOfDuty"></button>
                <button onClick={toFinals} className="Finals"></button>
                <button onClick={toRainbowSix} className="RainbowSix"></button>
            </div>

            <div className="Buttons">
                <button onClick={toHellDivers} className="HellDivers"></button>
                <button onClick={toLeague} className="League"></button>
                <button onClick={toEldenRing} className="EldenRing"></button>
                <button onClick={toGta} className="GTA"></button>
                <button onClick={toDestiny} className="dTwo"></button> 
                <button onClick={toEFT} className="EFT"></button>
                <button onClick={toRoblox} className="Roblox"></button>
                <button onClick={toRust} className="Rust"></button>
                <button onClick={toTerraria} className="Terraria"></button>
                <button onClick={toPalWorld} className="PalWorld"></button>
            </div>

        </>
    )
}