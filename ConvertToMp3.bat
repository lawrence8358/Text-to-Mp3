@echo off

SET rootDir=%~dp0
cd %rootDir%

:: set temporarily path
:: https://cloud.google.com/text-to-speech/docs/quickstart-protocol?hl=zh-tw
set GOOGLE_APPLICATION_CREDENTIALS=%rootPath%Config\license.json
 
:: Create a directory for output mp3 file  
set mp3Dir=Output
IF not exist %mp3Dir% (mkdir %mp3Dir%)

call node config\main.js

pause
