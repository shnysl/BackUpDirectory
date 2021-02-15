using System;
using System.Collections.Generic;
using System.IO;
using BackUp.Models;
using Newtonsoft.Json;

namespace BackUp.Helpers
{
    class JsonHelper
    {
        public static List<Settings> LoadJson()
        {
            const string fileName = @"Settings.json";
            var filePath = $"{AppDomain.CurrentDomain.BaseDirectory}\\{fileName}";
            using (var streamReader = new StreamReader(filePath))
            {
                var json = streamReader.ReadToEnd();
                return JsonConvert.DeserializeObject<List<Settings>>(json);
            }
        }
    }
}
