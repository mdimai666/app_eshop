using namespace System.IO

$oneDriveDir = 'C:\Users\D\OneDrive\AMAI\Share\ShopApp'

Write-Output "copy apk"
# Copy-Item .\2.txt "$(Get-Date)"
$dateStamp = Get-Date -UFormat "%Y-%m-%d_%H-%M-%S"
# Write-Output $dateStamp

$fName = 'src-cordova\platforms\android\app\build\outputs\apk\release\app-release.apk'

$source = (Get-ChildItem $fName).FullName
$destination = [System.IO.Path]::GetDirectoryName($source)

$ext = [Path]::GetExtension($source)

$newName = 'ShopApp-' + $dateStamp + $ext

$destination = [Path]::Combine($oneDriveDir, $newName)

Write-Output "Copy to -> $destination"

Copy-Item $source $destination