/* ══════════════════════════════════════════════════════════════════
   nypsCM 共用設定 —— 所有頁面都從這裡讀
   換學期、換學生名單、改密碼，只要改這個檔案。

   使用這份設定的頁面：
     index.html        課室系統
     funday.html       賴床大作戰（5 年級）
   （簡報評量、餐廳點餐、天氣時光機已移到 _backup 資料夾，沒有上線）
   ══════════════════════════════════════════════════════════════════ */

export const TEACHER_NAME = 'Ruby';      // 會顯示在控制台與學生待機畫面
export const TEACHER_PASSWORD = 'edu';   // 所有頁面的老師密碼

/* 班級名單：seat = 座號，name = 顯示的名字，en = 英文名（沒有就留空 ''） */
export const ROSTER = {
  '5': [
    { seat: 1, name: 'Jimmy', en: '' },
    { seat: 2, name: 'Larry', en: '' },
    { seat: 3, name: 'Joe',   en: '' },
    { seat: 4, name: 'Riley', en: '' },
    { seat: 5, name: 'Diana', en: '' }
  ],
  '6': [
    { seat: 1, name: 'Lola',    en: '' },
    { seat: 2, name: 'Charles', en: '' },
    { seat: 3, name: 'Jenny',   en: '' },
    { seat: 4, name: 'Irving',  en: '' },
    { seat: 5, name: 'Tim',     en: '' },
    { seat: 6, name: 'Joana',   en: '' }
  ]
};

/* Firebase（一般不用改） */
export const firebaseConfig = {
  apiKey: "AIzaSyAdKdGniXt6PbHFfxIjyY09bWplPQQufc4",
  authDomain: "nypscm.firebaseapp.com",
  projectId: "nypscm",
  storageBucket: "nypscm.firebasestorage.app",
  messagingSenderId: "775913301411",
  appId: "1:775913301411:web:9d73da7688854865826616"
};
export const APP_ID = "nypscm-class-pro";   // 資料庫路徑，firestore.rules 只開放這個
