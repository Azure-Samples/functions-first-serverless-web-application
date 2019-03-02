#r "Newtonsoft.Json"
using ImageResizer;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Formatting;
using Newtonsoft.Json;

static HttpClient httpClient = new HttpClient();

public static async Task<object> Run(Stream myBlob, string name, Stream thumbnail, TraceWriter log)
{
    var instructions = new Instructions
    {
        Width = 200,
        Height = 200,
        Mode = FitMode.Crop,
        Scale = ScaleMode.Both
    };ImageBuilder.Current.Build(new ImageJob(myBlob, thumbnail, instructions)
{
    DisposeSourceObject = false,
    ResetSourceStream = true
});

var request = new HttpRequestMessage() {
    RequestUri = new Uri(
        System.Environment.GetEnvironmentVariable("COMP_VISION_URL", EnvironmentVariableTarget.Process) + 
        "/vision/v2.0/analyze?visualFeatures=Description&amp;language=en"),
        Method = HttpMethod.Post,
        Content = new StreamContent(myBlob)
    };
    request.Headers.Add(
        "Ocp-Apim-Subscription-Key", 
        System.Environment.GetEnvironmentVariable("COMP_VISION_KEY", EnvironmentVariableTarget.Process));
    request.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");

    var response = await httpClient.SendAsync(request);
    dynamic result = await response.Content.ReadAsAsync<object>();

    return new {
        id = name,
        imgPath = "/images/" + name,
        thumbnailPath = "/thumbnails/" + name,
        description = result.description
    };
}
