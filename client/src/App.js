import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { tryGetLoggedInUser } from "./Managers/authmanager.js";
import { Spinner } from "reactstrap";
import NavBar from "./Components/NavBar.js";
import ApplicationViews from "./Components/ApplicationViews.js";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home.js";
import { Apex } from "./Components/Apex.js";
import { CS } from "./Components/CS.js";
import { Valorant } from "./Components/Valorant.js";
import { StarCraft } from "./Components/StarCraft.js";
import { Minecraft } from "./Components/Minecraft.js";
import { Fortnite } from "./Components/Fortnite.js";
import { Chess } from "./Components/Chess.js";
import { CallOfDuty } from "./Components/CallOfDuty.js";
import { Finals } from "./Components/Finals.js";
import { RainbowSix } from "./Components/RainbowSix.js";
import { Social } from "./Components/Social.js";
import { FriendSearch } from "./Components/FriendSearch.js";
import { Message } from "./Components/Message.js";
import { ProfilePage } from "./Components/ProfilePage.js";
import { PalWorld } from "./Components/PalWorld.js";
import { GTA } from "./Components/GTA.js";
import { EldenRing } from "./Components/EldenRing.js";
import { Destiny } from "./Components/Destiny.js";
import { Roblox } from "./Components/Roblox.js";
import { Terraria } from "./Components/Terraria.js";
import { HellDivers } from "./Components/HellDivers.js";
import { EFT } from "./Components/EFT.js";
import { League } from "./Components/League.js";
import { Rust } from "./Components/Rust.js";

function App() {
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    // user will be null if not authenticated
    tryGetLoggedInUser().then((user) => {
      setLoggedInUser(user);
    });
  }, []);

  // wait to get a definite logged-in state before rendering
  if (loggedInUser === undefined) {
    return <Spinner />;
  }

  return (
    <>
      <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <ApplicationViews
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />

      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="/apex" element={<Apex />} />
        <Route path="/CS" element={<CS />} />
        <Route path="/valorant" element={<Valorant />} />
        <Route path="/starcraft" element={<StarCraft />} />
        <Route path="/minecraft" element={<Minecraft />} />
        <Route path="/fortnite" element={<Fortnite />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/cod" element={<CallOfDuty />} />
        <Route path="/finals" element={<Finals />} />
        <Route path="/rainbow" element={<RainbowSix />} />
        <Route path="/socialpage" element={<Social />} />
        <Route path="/friendsearch" element={<FriendSearch />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/palworld" element={<PalWorld />} />
        <Route path="/gta" element={<GTA />} />
        <Route path="/elden" element={<EldenRing />} />
        <Route path="/destiny" element={<Destiny />} />
        <Route path="/roblox" element={<Roblox />} />
        <Route path="/terraria" element={<Terraria />} />
        <Route path="/helldivers" element={<HellDivers />} />
        <Route path="/eft" element={<EFT />} />
        <Route path="/league" element={<League />} />
        <Route path="/rust" element={<Rust />} />
      </Routes>
    </>
  );
}

export default App;


