

using System.Diagnostics.Contracts;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using PixelParadise.Models;
using Microsoft.AspNetCore.Identity;

namespace PixelParadise.Data
{
    public class PixelParadiseDbContext : IdentityDbContext<IdentityUser>
    {
        private readonly IConfiguration _configuration;

        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<Friends> Friends { get; set; }
        public DbSet<Messages> Messages { get; set; }
        public DbSet<ChessMessages> ChessMessages { get; set; }
        public DbSet<StarCraftMessages> StarCraftMessages { get; set; }
        public DbSet<ValorantMessages> ValorantMessages { get; set; }
        public DbSet<FortniteMessages> FortniteMessages { get; set; }
        public DbSet<MinecraftMessages> MinecraftMessages { get; set; }
        public DbSet<RSixMessages> RSixMessages { get; set; }
        public DbSet<CodMessages> CodMessages { get; set; }
        public DbSet<FinalsMessages> FinalsMessages { get; set; }
        public DbSet<CS2Messages> CS2Messages { get; set; }
         public DbSet<TerrariaMessages> TerrariaMessages { get; set; }
        public DbSet<PalWorldMessages> PalWorldMessages { get; set; }
        public DbSet<EFTMessages> EFTMessages { get; set; }
        public DbSet<GTAMessages> GTAMessages { get; set; }
        public DbSet<RustMessages> RustMessages { get; set; }
        public DbSet<RobloxMessages> RobloxMessages { get; set; }
        public DbSet<LeagueMessages> LeagueMessages { get; set; }
        public DbSet<HellDiversMessages> HellDiversMessages { get; set; }
        public DbSet<DestinyMessages> DestinyMessages { get; set; }
        public DbSet<EldenRingMessages> EldenRingMessages { get; set; }
        public DbSet<DirectMessages> DirectMessages { get; set; }

        public PixelParadiseDbContext(DbContextOptions<PixelParadiseDbContext> context, IConfiguration config) : base(context)
        {
            _configuration = config;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<UserProfile>()
            .HasMany(up => up.Friend)
            .WithOne(m => m.Users)
            .HasForeignKey(m => m.FriendsId)
            .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<UserProfile>()
            .HasMany(up => up.DirectMessages)
            .WithOne(m => m.UserProfile)
            .HasForeignKey(m => m.UserProfileId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<UserProfile>()
            .HasMany(up => up.Messages)
            .WithOne(m => m.UserProfiles)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<UserProfile>()
            .HasMany(up => up.CS2Messages)
            .WithOne(m => m.UserProfiles)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<UserProfile>()
            .HasMany(up => up.CodMessages)
            .WithOne(m => m.UserProfiles)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<UserProfile>()
            .HasMany(up => up.FortniteMessages)
            .WithOne(m => m.UserProfiles)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<UserProfile>()
            .HasMany(up => up.ChessMessages)
            .WithOne(m => m.UserProfiles)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<UserProfile>()
            .HasMany(up => up.StarCraftMessages)
            .WithOne(m => m.UserProfiles)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<UserProfile>()
            .HasMany(up => up.ValorantMessages)
            .WithOne(m => m.UserProfiles)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<UserProfile>()
            .HasMany(up => up.RSixMessages)
            .WithOne(m => m.UserProfiles)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<UserProfile>()
            .HasMany(up => up.FinalsMessages)
            .WithOne(m => m.UserProfiles)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<UserProfile>()
            .HasMany(up => up.FinalsMessages)
            .WithOne(m => m.UserProfiles)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Restrict);

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<IdentityUser>().HasData(new IdentityUser
            {
                Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                UserName = "itsCado54",
                Email = "cado.54@yahoo.com",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            });

            _ = modelBuilder.Entity<UserProfile>().HasData(new UserProfile
            {
                Id = 1,
                IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                FirstName = "Caden",
                LastName = "Mildenhall",
                Address = "412 Beamon Drive",
            });

                        modelBuilder.Entity<IdentityUser>().HasData(new IdentityUser
            {
                Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5s",
                UserName = "Micheal.M",
                Email = "cado.54.soccer@gmail.com",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            });

            _ = modelBuilder.Entity<UserProfile>().HasData(new UserProfile
            {
                Id = 2,
                IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5s",
                FirstName = "Michael",
                LastName = "Mildenhall",
                Address = "412 Beamon Drive",
            });
        }
    }
}