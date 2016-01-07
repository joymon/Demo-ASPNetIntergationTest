"Length of GithubAPIKey is " + $env:GitHubAPIKey.length

$PSScriptRoot
$appSettingsPath = Join-Path $PSScriptRoot '..\src\*\configs\appSettings.config'
$appSettingsPath
#$xml = [xml](Get-Content $appSettingsPath)
#$node=$xml.appSettings.add | where {$_.key -eq "GitHubAPIToken"}
#$node.value =$env:GitHubAPIKey
#$xml.Save($appSettingsPath);
dir $appSettingsPath -recurse | foreach-object{  
   $wc = [xml](Get-Content $_.fullname)
   $wc.SelectNodes("//add[@key='GitHubAPIToken']") | Foreach-Object {$_.value = $env:GitHubAPIKey}
   "Saved file " + $_.fullname  
   $wc.Save($_.fullname)  
}