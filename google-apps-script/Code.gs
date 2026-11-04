/**
 * =========================================================================
 * 諾雕 ALE - Google 試算表訂單後台接收程式 (Google Apps Script)
 * =========================================================================
 * 功能：
 * 1. 接收來自 GitHub Pages 前端預約表單的訂單資料
 * 2. 自動將訂單寫入 Google Sheets 試算表
 * 3. 若有上傳圖檔，自動存入 Google Drive 雲端硬碟並附上連結
 * 4. 可選：自動寄發新訂單通知信到老闆的 Gmail
 * =========================================================================
 */

// 設定你的通知信箱 (若不需要 Email 通知可留空 "")
var NOTIFY_EMAIL = ""; 

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    message: "諾雕 ALE 預約系統後端運作正常"
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  // 嘗試獲取鎖，防止多人同時送出導致寫入衝突
  lock.tryLock(15000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 如果是全新試算表，自動建立表頭
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["預約時間", "顧客稱呼/暱稱", "Email", "聯絡方式 (LINE/電話)", "預約品項", "指定款式", "客製需求與備註", "上傳檔案連結"]);
      sheet.getRange(1, 1, 1, 8).setFontWeight("bold").setBackground("#e0f7fa");
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      // 容錯：若為表單格式傳送
      data = e.parameter;
    }

    var name = data.name || "未填寫";
    var email = data.email || "未填寫";
    var contact = data.contact || "未填寫";
    var product = data.product || "未指定";
    var variant = data.variant || "無";
    var notes = data.notes || "";
    var fileUrl = "";

    // 處理上傳檔案 (Base64)
    if (data.fileData && data.fileName) {
      try {
        var folderName = "諾雕ALE_顧客上傳圖檔";
        var folders = DriveApp.getFoldersByName(folderName);
        var targetFolder;
        if (folders.hasNext()) {
          targetFolder = folders.next();
        } else {
          targetFolder = DriveApp.createFolder(folderName);
        }

        // 解析 Base64
        var rawData = data.fileData;
        if (rawData.indexOf("base64,") !== -1) {
          rawData = rawData.split("base64,")[1];
        }
        var decoded = Utilities.base64Decode(rawData);
        var blob = Utilities.newBlob(decoded, data.fileType || "application/octet-stream", data.fileName);
        var uploadedFile = targetFolder.createFile(blob);
        uploadedFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        fileUrl = uploadedFile.getUrl();
      } catch (fileErr) {
        fileUrl = "檔案上傳處理失敗: " + fileErr.toString();
      }
    }

    // 格式化台灣時間
    var timestamp = Utilities.formatDate(new Date(), "Asia/Taipei", "yyyy-MM-dd HH:mm:ss");

    // 寫入 Google 試算表
    sheet.appendRow([
      timestamp,
      name,
      email,
      contact,
      product,
      variant,
      notes,
      fileUrl
    ]);

    // 若有設定信箱，發送 Email 通知給老闆
    if (NOTIFY_EMAIL && NOTIFY_EMAIL.indexOf("@") !== -1) {
      try {
        var subject = "🔥 [新預約訂單] 來自 " + name + " 的客製需求：" + product;
        var htmlBody = "<h2>諾雕 ALE - 收到新的雷雕預約訂單！</h2>" +
          "<p><strong>預約時間：</strong>" + timestamp + "</p>" +
          "<p><strong>顧客稱呼：</strong>" + name + "</p>" +
          "<p><strong>Email：</strong>" + email + "</p>" +
          "<p><strong>聯絡方式：</strong>" + contact + "</p>" +
          "<p><strong>訂購商品：</strong>" + product + " (" + variant + ")</p>" +
          "<p><strong>需求備註：</strong><br>" + (notes.replace(/\n/g, "<br>")) + "</p>" +
          (fileUrl ? "<p><strong>附件圖檔：</strong><a href='" + fileUrl + "'>點此查看檔案</a></p>" : "") +
          "<hr><p>您可以直接開啟本 Google 試算表查看完整訂單紀錄。</p>";

        MailApp.sendEmail({
          to: NOTIFY_EMAIL,
          subject: subject,
          htmlBody: htmlBody
        });
      } catch (mailErr) {
        Logger.log("Email notification error: " + mailErr);
      }
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "預約成功！訂單已記錄至系統。"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
