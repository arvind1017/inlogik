# Reading the code from https://github.com/dotnet/samples/blob/main/csharp/getting-started/console-webapiclient/Program.cs and detailing my understanding

## Detailed Explaination

### imports
```csharp
using System.Net.Http.Headers;
using System.Net.Http.Json;
```

The above 2 imports indicate that the code would be dealing with the Http protocol and Json objects may be serialization / deserialization

The color of the imports indicate that both of the imports are used and none are unused

### Headers
```csharp
using HttpClient client = new();
client.DefaultRequestHeaders.Accept.Clear();
client.DefaultRequestHeaders.Accept.Add(
    new MediaTypeWithQualityHeaderValue("application/vnd.github.v3+json"));
client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");
```
1. A new instance of httpclient is created with using keyword indicating that the client will be disposed after the scope of the instance variable "client" is complete.
2. All the default http headers are cleared
3. A new http header is added to use the json version v3
4. A new header useragent is added 

``` csharp
var repositories = await ProcessRepositoriesAsync(client);

foreach (var repo in repositories)
{
    Console.WriteLine($"Name: {repo.Name}");
    Console.WriteLine($"Homepage: {repo.Homepage}");
    Console.WriteLine($"GitHub: {repo.GitHubHomeUrl}");
    Console.WriteLine($"Description: {repo.Description}");
    Console.WriteLine($"Watchers: {repo.Watchers:#,0}");
    Console.WriteLine($"{repo.LastPush}");
    Console.WriteLine();
}
```
The ProcessRepositoriesAsync method is called and the response of the same is stored in variable "repositories".

For each of the repository in the list the respositories variable, the info of the repository is printed in the console in the following format,

Name: <name of the repo>
Homepage: <home page>
Github: <github home url>
Description: <description of the repo>
Watchers: <watchers list> 
<The timestamp of the last push of the repo>
a blank line after the next repo information


``` csharp

static async Task<List<Repository>> ProcessRepositoriesAsync(HttpClient client)
{
    var repositories = await client.GetFromJsonAsync<List<Repository>>("https://api.github.com/orgs/dotnet/repos");
    return repositories ?? new List<Repository>();
}
```
The function ProcessRepositoriesAsync, which is getting called in line 10.
1. The function is static, so no need for the class to be instantiated to call this function
2. The function is asynchronous and returns the list of Repository object
3. The function takes the HttpClient instance, which in this case is the client created in line 4
4. A httpclient call "GetFromJsonAsync" is made to the URL "https://api.github.com/orgs/dotnet/repos" and the result from the call is automatically parsed to a list of the object Repository -> and the list of Repository is then saved to the variable repositories
5. The variable respositories is null checked and if the value is not null, the list of Repository object is sent, else a new list of Repository object is done so that the calling function never gets a null value