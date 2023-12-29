using Microsoft.AspNetCore.SignalR;

namespace SignalRSample_Self.Hubs
{
    public class UserHub : Hub
    {
        public static int TotalViews { get; set; } = 0;
        public static int TotalUsers { get; set; } = 0;

        // methods that process requests sent by the client
        public override Task OnConnectedAsync()
        {
            TotalUsers++;
            Clients.All.SendAsync("updateTotalUsers", TotalUsers);
            Console.WriteLine("Sending value from server for updateTotalUsers[OnConnectedAsync]: " + TotalUsers);
            return base.OnConnectedAsync();
        }
        public override Task OnDisconnectedAsync(Exception? exception)
        {
            TotalUsers--;
            Clients.All.SendAsync("updateTotalUsers", TotalUsers);
            Console.WriteLine("Sending value from server for updateTotalUsers[OnDisconnectedAsync]: " + TotalUsers);
            return base.OnDisconnectedAsync(exception);
        }

        public async Task NewWindowLoaded()
        {
            TotalViews++;
            await Clients.All.SendAsync("updateTotalViews", TotalViews);
            Console.WriteLine("Sending value from server: " + TotalViews);
        }
    }
}
