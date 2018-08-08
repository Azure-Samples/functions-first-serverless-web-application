#r "Microsoft.WindowsAzure.Storage"
using System.Net;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

public static async Task<object> Run(HttpRequestMessage req, TraceWriter log)
{
    var filename = req.GetQueryNameValuePairs()
        .FirstOrDefault(q => string.Compare(q.Key, "filename", true) == 0)
        .Value;

    CloudStorageAccount storageAccount = CloudStorageAccount.Parse(
        System.Environment.GetEnvironmentVariable("AZURE_STORAGE_CONNECTION_STRING", EnvironmentVariableTarget.Process));
    var client = storageAccount.CreateCloudBlobClient();
    var container = client.GetContainerReference("images");
    await container.CreateIfNotExistsAsync();

    CloudBlockBlob blob = container.GetBlockBlobReference(filename);

    SharedAccessBlobPolicy adHocSAS = new SharedAccessBlobPolicy()
    {
        SharedAccessExpiryTime = DateTime.UtcNow.AddMinutes(5),
        Permissions = SharedAccessBlobPermissions.Read | SharedAccessBlobPermissions.Write | SharedAccessBlobPermissions.Create
    };

    var sasBlobToken = blob.GetSharedAccessSignature(adHocSAS);
    return new
    {
        url = blob.Uri + sasBlobToken
    };
}
