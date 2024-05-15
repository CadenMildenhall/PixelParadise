using PixelParadise.Models;

public class Friends
{
    public int Id { get; set; }
    public UserProfile? Users { get; set; }
    public int FriendsId { get; set; }
    public string FriendsName { get; set; }
}
