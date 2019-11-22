@echo off
echo NPM install start ...

set rootDir=%~dp0
cd %rootDir% 
set nodeModulesDir=node_modules
set lockFile=package-lock.json

if exist %lockFile% (del /F %lockFile%)
if exist %nodeModulesDir% (rmdir /Q /S  %nodeModulesDir%)

call npm install @google-cloud/text-to-speech 

if exist %lockFile% (del /F %lockFile%)

echo NPM install done.
  
pause
