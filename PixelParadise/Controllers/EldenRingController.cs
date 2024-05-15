

using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Text;
using PixelParadise.Models;
using PixelParadise.Data;
using Microsoft.EntityFrameworkCore;

namespace PixelParadise.Controllers;


[ApiController]
[Route("api/[controller]")]
public class EldenRingController : ControllerBase
{
    private PixelParadiseDbContext _dbContext;
    private UserManager<IdentityUser> _userManager;

    public EldenRingController(PixelParadiseDbContext context, UserManager<IdentityUser> userManager)
    {
        _dbContext = context;
        _userManager = userManager;
    }


    [HttpGet("getEldenRingProfile")]
    public IActionResult GetEldenRingProfile()
    {

            return Ok(_dbContext.EldenRingMessages);
    }
}
