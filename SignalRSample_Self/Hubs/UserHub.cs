using Microsoft.AspNetCore.SignalR;

namespace SignalRSample_Self.Hubs
{
    public class UserHub : Hub
    {
        public static int TotalViews { get; set; } = 0;

        // methods that process requests sent by the client
        public async Task NewWindowLoaded()
        {
            TotalViews++;
            await Clients.All.SendAsync("updateTotalViews", TotalViews);
            Console.WriteLine("Sending value from server: " + TotalViews);
        }
    }
}
