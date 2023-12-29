using Microsoft.AspNetCore.SignalR;

namespace SignalRSample_Self.Hubs
{
    public class DeathlyHallowsHub : Hub
    {
        public Dictionary<string, int> GetRaceStatus()
        {
            return SD.DealthyHallowRace;
        }
    }
}
