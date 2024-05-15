using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using PixelParadise.Models;
using PixelParadise.Data;
using Microsoft.EntityFrameworkCore;


namespace PixelParadise.Controllers;


[ApiController]
[Route("api/[controller]")]
public class UserProfileController : ControllerBase
{
    private PixelParadiseDbContext _dbContext;
    private UserManager<IdentityUser> _userManager;

    public UserProfileController(PixelParadiseDbContext context, UserManager<IdentityUser> userManager)
    {
        _dbContext = context;
        _userManager = userManager;
    }


    [HttpGet("getAllProfiles")]
    public IActionResult GetAllProfiles()
    {
        var allProfiles = _dbContext.UserProfiles
        .Include(p => p.Messages)
        .Include(p => p.CS2Messages)
        .Include(p => p.ValorantMessages)
        .Include(p => p.StarCraftMessages)
        .Include(p => p.CodMessages)
        .Include(p => p.ChessMessages)
        .Include(p => p.RSixMessages)
        .Include(p => p.FortniteMessages)
        .Include(p => p.CodMessages)
        .Include(p => p.FinalsMessages)
        .Include(p => p.MinecraftMessages)
                .Include(p => p.RustMessages)
        .Include(p => p.PalWorldMessages)
        .Include(p => p.EldenRingMessages)
        .Include(p => p.EFTMessages)
        .Include(p => p.GTAMessages)
        .Include(p => p.TerrariaMessages)
        .Include(p => p.RobloxMessages)
        .Include(p => p.LeagueMessages)
        .Include(p => p.DestinyMessages)
        .Include(p => p.HellDiversMessages)
        .Include(p => p.Friend)
        .Include(p => p.DirectMessages)
        .Include(p => p.IdentityUser)
        .ToList();

        return Ok(allProfiles);
    }

    [HttpGet("getProfile")]
    public IActionResult GetProfile()
    {

        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        var userProfile = _dbContext.UserProfiles
        .Include(user => user.Messages)
        .Include(p => p.CS2Messages)
        .Include(p => p.ValorantMessages)
        .Include(p => p.StarCraftMessages)
        .Include(p => p.CodMessages)
        .Include(p => p.ChessMessages)
        .Include(p => p.RSixMessages)
        .Include(p => p.FortniteMessages)
        .Include(p => p.CodMessages)
        .Include(p => p.FinalsMessages)
        .Include(p => p.MinecraftMessages)
                .Include(user => user.RobloxMessages)
        .Include(p => p.RustMessages)
        .Include(p => p.PalWorldMessages)
        .Include(p => p.EldenRingMessages)
        .Include(p => p.EFTMessages)
        .Include(p => p.GTAMessages)
        .Include(p => p.TerrariaMessages)
        .Include(p => p.RobloxMessages)
        .Include(p => p.LeagueMessages)
        .Include(p => p.DestinyMessages)
        .Include(p => p.HellDiversMessages)
        .Include(p => p.Friend)
        .Include(p => p.DirectMessages)
        .Include(p => p.IdentityUser)
        .SingleOrDefault(u => u.IdentityUserId == userId);

        return Ok(userProfile);
    }

    [HttpPost("postMessage")]
    [Authorize]
    public IActionResult PostMessage([FromBody] Messages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new Messages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.Messages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postCSMessage")]
    [Authorize]
    public IActionResult PostCSMessage([FromBody] CS2Messages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new CS2Messages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.CS2Messages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postRSixMessage")]
    [Authorize]
    public IActionResult PostRSixMessage([FromBody] RSixMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new RSixMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.RSixMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postFortniteMessage")]
    [Authorize]
    public IActionResult PostFortniteMessage([FromBody] FortniteMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new FortniteMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.FortniteMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postValorantMessage")]
    [Authorize]
    public IActionResult PostValorantMessage([FromBody] ValorantMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new ValorantMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.ValorantMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postFinalsMessage")]
    [Authorize]
    public IActionResult PostFinalsMessage([FromBody] FinalsMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new FinalsMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.FinalsMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postMinecraftMessage")]
    [Authorize]
    public IActionResult PostMinecraftMessage([FromBody] MinecraftMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new MinecraftMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.MinecraftMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postStarCraftMessage")]
    [Authorize]
    public IActionResult PostStarCraftMessage([FromBody] StarCraftMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new StarCraftMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.StarCraftMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postCodMessage")]
    [Authorize]
    public IActionResult PostCodMessage([FromBody] CodMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new CodMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.CodMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postChessMessage")]
    [Authorize]
    public IActionResult PostChessMessage([FromBody] ChessMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new ChessMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.ChessMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("addFriend")]
    public async Task<IActionResult> AddFriend([FromBody] Friends friends)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var currentUserProfile = _dbContext.UserProfiles
            .Include(u => u.Friend) // Include the Friend collection to avoid lazy loading issues
            .SingleOrDefault(u => u.IdentityUserId == userId);

        if (currentUserProfile == null)
        {
            return NotFound(); // Handle the case where the current user profile is not found
        }

        var friendUserProfile = _dbContext.UserProfiles
            .Include(u => u.Friend) // Include the Friend collection to avoid lazy loading issues
            .SingleOrDefault(u => u.Id == friends.FriendsId);

        var friendsUserProfile = currentUserProfile.Friend
                .SingleOrDefault(f => f.Id == friends.Id);

        if (friendUserProfile == null)
        {
            return NotFound(); // Handle the case where the friend user profile is not found
        }

        // Check if the friend is already in the current user's friend list
        if (currentUserProfile.Friend.Any(f => f.FriendsId == friendsUserProfile.Id))
        {
            return BadRequest("User is already a friend.");
        }

        if (currentUserProfile.Friend.Any(f => f.Id == friendsUserProfile.Id))
        {
            return BadRequest("User already added");

        }


        var newFriend = new Friends
        {
            FriendsId = friendUserProfile.Id,
            FriendsName = friendUserProfile.FirstName
        };

        currentUserProfile.Friend.Add(newFriend); // Add new friend to current user's friend list
                                                  // friendUserProfile.Friend.Add(currentUserFriend); // Add current user to friend's friend list

        await _dbContext.SaveChangesAsync();

        return Ok(newFriend);
    }

    [HttpPost("postDirectMessage")]
    [Authorize]
    public IActionResult PostDirectMessage([FromBody] DirectMessages directMessages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewDirectMessage = new DirectMessages
        {
            Message = directMessages.Message,
            TimeStamp = DateTime.Now
        };

        userProfile.DirectMessages.Add(NewDirectMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewDirectMessage);
    }

    [HttpDelete("RemoveFriend/{FriendId}")]
    public IActionResult RemoveFriend(int FriendId)
    {
        try
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var userProfile = _dbContext.UserProfiles
                .Include(u => u.Friend) // Include the Friends collection to avoid lazy loading issues
                .SingleOrDefault(u => u.IdentityUserId == userId);

            if (userProfile == null)
            {
                return NotFound($"User with ID {userId} not found.");
            }

            var friendToRemove = userProfile.Friend
                .SingleOrDefault(f => f.FriendsId == FriendId);

            if (friendToRemove == null)
            {
                return NotFound($"Friend with ID {FriendId} not found.");
            }

            // Remove the friend from the current user's friend list
            userProfile.Friend.Remove(friendToRemove);

            // Update the friend's friends list to remove the current user
            var friendProfile = _dbContext.UserProfiles
                .Include(u => u.Friend) // Include the Friends collection to avoid lazy loading issues
                .SingleOrDefault(u => u.Id == FriendId);

            if (friendProfile != null)
            {
                var currentUserFriend = friendProfile.Friend.FirstOrDefault(f => f.FriendsId == userProfile.Id);
                if (currentUserFriend != null)
                {
                    friendProfile.Friend.Remove(currentUserFriend);
                }
            }

            _dbContext.SaveChanges();

            return Ok($"Friend with ID {FriendId} has been successfully removed.");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal Server Error: {ex.Message}");
        }
    }


    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////
    //////////////////////////////

    [HttpPost("postHellDiversMessage")]
    [Authorize]
    public IActionResult PostHellDiversMessage([FromBody] MinecraftMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new HellDiversMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.HellDiversMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postEFTMessage")]
    [Authorize]
    public IActionResult PostEFTMessage([FromBody] MinecraftMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new EFTMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.EFTMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postGTAMessage")]
    [Authorize]
    public IActionResult PostGTAMessage([FromBody] MinecraftMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new GTAMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.GTAMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postPalWorldMessage")]
    [Authorize]
    public IActionResult PostPalWorldMessage([FromBody] MinecraftMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new PalWorldMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.PalWorldMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postRustMessage")]
    [Authorize]
    public IActionResult PostRustMessage([FromBody] MinecraftMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new RustMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.RustMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postLeagueMessage")]
    [Authorize]
    public IActionResult PostLeagueMessage([FromBody] MinecraftMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new LeagueMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.LeagueMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postTerrariaMessage")]
    [Authorize]
    public IActionResult PostTerrariaessage([FromBody] MinecraftMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new TerrariaMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.TerrariaMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postRobloxMessage")]
    [Authorize]
    public IActionResult PostRobloxMessage([FromBody] MinecraftMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new RobloxMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.RobloxMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postDestinyMessage")]
    [Authorize]
    public IActionResult PostDestinyMessage([FromBody] MinecraftMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new DestinyMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.DestinyMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }

    [HttpPost("postEldenMessage")]
    [Authorize]
    public IActionResult PostEldenMessage([FromBody] MinecraftMessages messages)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var userProfile = _dbContext.UserProfiles
            .SingleOrDefault(u => u.IdentityUserId == userId);

        var NewMessage = new EldenRingMessages
        {
            Text = messages.Text,
            TimeStamp = DateTime.Now
        };

        userProfile.EldenRingMessages.Add(NewMessage);

        _dbContext.SaveChangesAsync();

        return Ok(NewMessage);
    }




}


