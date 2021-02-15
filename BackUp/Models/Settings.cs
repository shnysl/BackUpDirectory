namespace BackUp.Models
{
    public class Settings
    {
        public Settings(string sourcePath, string destinationPath)
        {
            SourcePath = sourcePath;
            DestinationPath = destinationPath;
        }

        public string SourcePath { get; }
        public string DestinationPath { get; }
    }
}
