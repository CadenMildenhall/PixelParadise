
import { useEffect, useState } from "react"
import "../Styles/ProfilePage.css"
import { getUser } from "../Managers/UserProfileManager";

export const ProfilePage = () =>
{

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        getUser().then((user) => {
            setProfile(user);
        });
    },[])

    console.log(profile);

    return (
        <>
        
            <div className="UsernameHeader">
                <h1 className="uHeader">{profile.identityUser?.userName}</h1>
            </div>

            <div className="UsersPosts">
                <h1 className="allPostsHeader">ALL POSTS:</h1>

            {profile && profile.rSixMessages ? (
      profile.rSixMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: R6
        </h2>
      ))
    ) : (
      <p></p>
    )}
            {profile && profile.minecraftMessages ? (
      profile.minecraftMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: Minecraft
        </h2>
      ))
    ) : (
      <p></p>
    )}

            {profile && profile.fortniteMessages ? (
      profile.fortniteMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: Fortnite
        </h2>
      ))
    ) : (
      <p></p>
    )}

{profile && profile.chessMessages ? (
      profile.chessMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: Chess
        </h2>
      ))
    ) : (
      <p></p>
    )}


{profile && profile.codMessages ? (
      profile.codMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: Call of Duty
        </h2>
      ))
    ) : (
      <p></p>
    )}

{profile && profile.starCraftMessages ? (
      profile.starCraftMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: StarCraft2
        </h2>
      ))
    ) : (
      <p></p>
    )}

{profile && profile.valorantMessages ? (
      profile.valorantMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: Valorant
        </h2>
      ))
    ) : (
      <p></p>
    )}

{profile && profile.cS2Messages ? (
      profile.cS2Messages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: CS2
        </h2>
      ))
    ) : (
      <p></p>
    )}
                {profile && profile.finalsMessages ? (
      profile.finalsMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: The Finals
        </h2>
      ))
    ) : (
      <p></p>
    )}

{profile && profile.messages ? (
      profile.messages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: Apex
        </h2>
      ))
    ) : (
      <p></p>
    )}


{profile && profile.palWorldMessages ? (
      profile.palWorldMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: PalWorld
        </h2>
      ))
    ) : (
      <p></p>
    )}
            {profile && profile.eftMessages ? (
      profile.eftMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: EFT
        </h2>
      ))
    ) : (
      <p></p>
    )}

            {profile && profile.gtaMessages ? (
      profile.gtaMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: GTA
        </h2>
      ))
    ) : (
      <p></p>
    )}

{profile && profile.terrariaMessages ? (
      profile.terrariaMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: Terraria
        </h2>
      ))
    ) : (
      <p></p>
    )}


{profile && profile.robloxMessages ? (
      profile.robloxMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: Roblox
        </h2>
      ))
    ) : (
      <p></p>
    )}

{profile && profile.rustMessages ? (
      profile.rustMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: Rust
        </h2>
      ))
    ) : (
      <p></p>
    )}

{profile && profile.destinyMessages ? (
      profile.destinyMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: Destiny 2
        </h2>
      ))
    ) : (
      <p></p>
    )}

{profile && profile.eldenMessages ? (
      profile.eldenMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: Elden Ring
        </h2>
      ))
    ) : (
      <p></p>
    )}
                {profile && profile.leagueMessages ? (
      profile.leagueMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: League Of legends
        </h2>
      ))
    ) : (
      <p></p>
    )}

{profile && profile.hellDiversMessages ? (
      profile.hellDiversMessages.map((message) => (
        <h2 key={message.id} className="allPosts">
          {message.text}: HellDivers
        </h2>
      ))
    ) : (
      <p></p>
    )}

            </div>

        </>
    )
}