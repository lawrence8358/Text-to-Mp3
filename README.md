# Google Cloud Text To Speech
本範例使用批次檔在 `Windows` 環境底下，呼叫 `Google Cloud Text-to-Speech API`，將文字轉換成語音並輸出成 mp3 檔案。

<br><br>

---
### 必要條件
* Windows OS，範例使用 Windows 10。
* 下載安裝 [Node.js](https://nodejs.org/zh-tw/download/)，範例使用 v12.13.0。

<br><br>

---
### 第一次使用安裝步驟
* 執行安裝批次檔 `NpmInstall.bat`，安裝必要套件。
* 替換 `Config\license.json` 金鑰，請參閱 Google Cloud Platform [事前準備](https://cloud.google.com/text-to-speech/docs/quickstart-protocol?hl=zh-tw#before_you_begin)。
* 若有需要替換 `高傳真語音合成` 設定，請替換 `Config\setting.json` 的內容，可參考此處 [範例](https://cloud.google.com/text-to-speech/?_ga=2.130598607.-112166627.1574068989&_gac=1.175843606.1574069539.EAIaIQobChMIxaDbqLnz5QIVCmoqCh3hwAsqEAAYASABEgJtPfD_BwE)。

##### *note*
> 若 Windows 登入者身分權限較低，執行安裝批次檔可能會有權限問題，此時需要使用*滑鼠右鍵內的 `以系統管理員身分執行`*。
 
<br><br>

---
### 使用方式
* 請將要轉換的文字內容輸入在 `TextContent.txt`。
* 執行 `ConvertToMp3.bat`，轉換成功後，會將檔案輸出在 `Output` 資料夾內。

<br><br>
   
---
### License
The MIT license