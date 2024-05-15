

using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Linq;

namespace PixelParadise.Models;

public class UserProfile
{
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Address { get; set; }
    public string? Email { get; set; }
    public string? UserName { get; set; }
    public string? IdentityUserId { get; set; }
    public IdentityUser? IdentityUser { get; set; }
    public ICollection<Friends> Friend { get; set; } = new List<Friends>();
    public ICollection<Messages> Messages { get; set; } = new List<Messages>();
    public ICollection<CS2Messages> CS2Messages { get; set; } = new List<CS2Messages>();
    public ICollection<FinalsMessages> FinalsMessages { get; set; } = new List<FinalsMessages>();
    public ICollection<RSixMessages> RSixMessages { get; set; } = new List<RSixMessages>();
    public ICollection<MinecraftMessages> MinecraftMessages { get; set; } = new List<MinecraftMessages>();
    public ICollection<FortniteMessages> FortniteMessages { get; set; } = new List<FortniteMessages>();
    public ICollection<StarCraftMessages> StarCraftMessages { get; set; } = new List<StarCraftMessages>();
    public ICollection<CodMessages> CodMessages { get; set; } = new List<CodMessages>();
    public ICollection<ChessMessages> ChessMessages { get; set; } = new List<ChessMessages>();
    public ICollection<ValorantMessages> ValorantMessages { get; set; } = new List<ValorantMessages>();
    public ICollection<DirectMessages> DirectMessages { get; set; } = new List<DirectMessages>();
     public ICollection<HellDiversMessages> HellDiversMessages { get; set; } = new List<HellDiversMessages>();
    public ICollection<TerrariaMessages> TerrariaMessages { get; set; } = new List<TerrariaMessages>();
    public ICollection<EFTMessages> EFTMessages { get; set; } = new List<EFTMessages>();
    public ICollection<RobloxMessages> RobloxMessages { get; set; } = new List<RobloxMessages>();
    public ICollection<RustMessages> RustMessages { get; set; } = new List<RustMessages>();
    public ICollection<GTAMessages> GTAMessages { get; set; } = new List<GTAMessages>();
    public ICollection<LeagueMessages> LeagueMessages { get; set; } = new List<LeagueMessages>();
    public ICollection<EldenRingMessages> EldenRingMessages { get; set; } = new List<EldenRingMessages>();
    public ICollection<DestinyMessages> DestinyMessages { get; set; } = new List<DestinyMessages>();
    public ICollection<PalWorldMessages> PalWorldMessages { get; set; } = new List<PalWorldMessages>();

}

