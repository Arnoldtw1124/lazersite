# 諾雕 ALE - Google 試算表後台接收設定教學 (Google Sheets + Apps Script)

這套系統讓您**完全不用伺服器與資料庫月費**，就可以透過 **GitHub Pages** 接收全世界客人的預約，並自動將所有訂單紀錄即時寫入您的 **Google 試算表 (Google Sheets)**，還可以隨時在手機查看與收到 Gmail 通知！

---

## 步驟 1：建立 Google 試算表

1. 開啟 [Google 試算表 (Google Sheets)](https://sheets.google.com)。
2. 建立一張**全新的空白試算表**，將標題命名為：`諾雕ALE_訂單後台系統`。
3. （第一列表頭程式會自動為您建立，您也可以手動輸入）：
   - `A1`: 預約時間
   - `B1`: 顧客稱呼/暱稱
   - `C1`: Email
   - `D1`: 聯絡方式 (LINE/電話)
   - `E1`: 預約品項
   - `F1`: 指定款式
   - `G1`: 客製需求與備註
   - `H1`: 上傳檔案連結

---

## 步驟 2：貼上 Apps Script 程式碼

1. 在試算表上方工具列，點選 **「擴充功能」 (Extensions) > 「Apps Script」**。
2. 刪除編輯器中的所有預設代碼。
3. 打開本專案資料夾中的 `google-apps-script/Code.gs`，將裡面的全部代碼複製，貼進 Apps Script 編輯器中。
4. （可選）：如果您希望有人預約時，Gmail 會立即寄信通知您，請將第 13 行修改為您的 Gmail：
   ```javascript
   var NOTIFY_EMAIL = "your_email@gmail.com";
   ```
5. 按下上方 **「儲存」 (磁碟片圖示 💾 或 Ctrl+S)**。

---

## 步驟 3：部署為網路應用程式 (Web App)

1. 點擊右上角藍色的 **「部署」 (Deploy) > 「新增部署作業」 (New deployment)**。
2. 點擊左側齒輪圖示 ⚙️，選擇 **「網頁應用程式」 (Web app)**。
3. 設定以下三個欄位：
   - **說明 (Description)**：`諾雕ALE接收端點`
   - **執行身分 (Execute as)**：選擇 **「我」 (Me: your_email@gmail.com)**
   - **誰可以存取 (Who has access)**：⚠️ **務必選擇「所有人」 (Anyone)**（這樣網站的訪客才能傳送預約）
4. 點選右下角 **「部署」 (Deploy)**。
5. （首次部署需授權）：點選「核准存取權」 > 選擇您的 Google 帳號 > 點「進階 (Advanced)」 > 點「前往『未命名專案』(安全)」 > 點「允許」。
6. 部署完成後，複製畫面上的 **網頁應用程式網址 (Web App URL)**（結尾為 `/exec`）。

---

## 步驟 4：將網址填入網站的 booking.html

1. 打開專案中的 `booking.html`。
2. 找到大約第 175 行附近的：
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/您的網址/exec';
   ```
3. 將剛剛複製的 Web App URL 替換進去並儲存。
4. 推送 (git push) 到 GitHub，GitHub Pages 就會即時生效！

---

## 後台查看與數據分析功能

- **手機隨身看**：只要在手機下載「Google 試算表」App，隨時隨地有新訂單打開手機就看得到！
- **圖檔直接點開**：客人如果上傳了圖片或設計檔，Google Apps Script 會自動將檔案存入您的 Google 雲端硬碟，試算表上會直接提供可點擊的雲端連結！
- **視覺化統計**：在試算表中選取「預約品項」欄位，點選「插入」>「圖表」，就能一秒產出銷售圓餅圖、熱門商品統計與週訂單趨勢！
