using System;
using System.IO;
using BackUp.Helpers;

namespace BackUp
{
    internal static class Program
    {
        private static void Main()
        {
            AppDomain currentDomain = AppDomain.CurrentDomain;
            currentDomain.UnhandledException += MyHandler;
            //TODO settings icinde birden fazla source and destination okunabilmeli, tek klasor yedeklenmeyecek. array olmasi gerekiyor
            var settings = JsonHelper.LoadJson();

            //TODO klasor yapisi : DestionationFolder\\2020\\11\05\\SourceFolderName_12_30.zip seklinde olmali
            foreach (var setting in settings)
            {
                
                var targetFolderName = $"{setting.SourcePath.Substring(setting.SourcePath.LastIndexOf('\\') + 1)}_{DateTime.Now:HH_mm}";
                var folderPath = Directory.CreateDirectory(Path.Combine(setting.DestinationPath, DateTime.Now.Year.ToString(), DateTime.Now.Month.ToString(), DateTime.Now.Day.ToString()));
                if (!File.Exists(Path.Combine(folderPath.FullName, targetFolderName + ".zip")))
                { 
                    
                    DataCompressor.Compression(setting.SourcePath, Path.Combine(folderPath.FullName, targetFolderName));
                }
            }
  
        }
        private static void MyHandler(object sender, UnhandledExceptionEventArgs args)
        {
            Exception exception = (Exception)args.ExceptionObject;
            ExceptionLogger.Log(exception);
        }


        //TODO bu kismi farkli bir classa almamiz gerekiyor, JsonHelper olabilir adi
    }
}
