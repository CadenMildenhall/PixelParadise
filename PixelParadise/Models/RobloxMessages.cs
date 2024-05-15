


namespace PixelParadise.Models;

public class RobloxMessages
{

    public int Id { get; set; }
    public int UserId { get; set; }
    public string? Text { get; set; }
    public DateTime TimeStamp { get; set; }
    public UserProfile? UserProfiles { get; set; }
}