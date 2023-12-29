﻿namespace SignalRSample_Self
{
    public static class SD
    {
        static SD()
        {
            DealthyHallowRace = new Dictionary<string, int>();
            DealthyHallowRace.Add(Wand, 0);
            DealthyHallowRace.Add(Stone, 0);
            DealthyHallowRace.Add(Cloak, 0);
        }

        public const string Wand = "wand";
        public const string Stone = "stone";
        public const string Cloak = "cloak";

        public static Dictionary<string, int> DealthyHallowRace;
    }
}
