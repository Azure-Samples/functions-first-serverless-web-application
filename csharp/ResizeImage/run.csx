using ImageResizer;

public static void Run(Stream myBlob, string name, Stream thumbnail, TraceWriter log)
{
    var instructions = new Instructions
    {
        Width = 200,
        Height = 200,
        Mode = FitMode.Crop,
        Scale = ScaleMode.Both
    };

    ImageBuilder.Current.Build(new ImageJob(myBlob, thumbnail, instructions));
}
