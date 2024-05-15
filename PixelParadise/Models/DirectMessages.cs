

using System.Text.Json.Serialization;

namespace PixelParadise.Models;

  public class DirectMessages
  {
    public int Id { get; set; }
    public int UserProfileId { get; set; }
    public string Message { get; set; }
    [JsonIgnore]
    public UserProfile? UserProfile { get; set; }
    public DateTime TimeStamp { get; set; }
  }