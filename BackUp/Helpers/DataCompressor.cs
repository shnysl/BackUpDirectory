using System.IO.Compression;

namespace BackUp.Helpers
{
    public static class DataCompressor
    {

        public static void Compression(string startPath, string zipPath)
        {
            //string _startPath = @".\start";
            //string _ziPath = @".\result.zip";
            //string extractPath = @".\extract";
            ZipFile.CreateFromDirectory(startPath, zipPath + ".zip");
            //ZipFile.ExtractToDirectory(zipPath, extractPath);
        }
    }
}
