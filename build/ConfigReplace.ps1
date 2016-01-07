"Length of GithubAPIKey is " + $env:GitHubAPIKey.length
#Do not show the key as it should be secure. Show the length to understand its present in the AppVeyor.
$PSScriptRoot
$appSettingsPath = Join-Path $PSScriptRoot '..\src\*\*.config'
$appSettingsPath
dir $appSettingsPath -recurse | foreach-object{  
   $wc = [xml](Get-Content $_.fullname)
   $wc.SelectNodes("//add[@key='GitHubAPIToken']") | Foreach-Object {$_.value = $env:GitHubAPIKey}
   "Saved file " + $_.fullname  
   $wc.Save($_.fullname)  
}
