# MediGuide
面倒な病院の検索-服薬通知-検診予定を一括管理するWebアプリ

<img width="1400" alt="ホーム画面" src="https://github.com/user-attachments/assets/39d206e7-98f7-4775-b037-0f6ea826238f">

## URL
https://mediguide-pi.vercel.app/ <br >

## サービスの概要
**MediGuide**は、忙しい日常の中で健康管理を効率的に行えるようサポートするWebアプリです。
病院の検索、服薬の通知、検診予定を一括管理することで、ユーザーの医療体験をより便利で快適にします。

## サービスを開発した背景
複数のアプリやサービスを利用しなければ健康情報を管理できないケースが多く見られます。
例えば、病院検索には地図アプリ、服薬通知にはリマインダーアプリ、検診予定の管理にはカレンダーアプリなど、それぞれの用途で別々のツールを使う必要があります。
MediGuideはこれらを一つにまとめ、ユーザーが簡単に健康を管理できるよう設計しました。

## 画面と機能
**[ホーム画面]**
<img width="1400" alt="ホーム画面" src="https://github.com/user-attachments/assets/39d206e7-98f7-4775-b037-0f6ea826238f">

**[ログイン画面]**
<img width="1400" alt="ログイン画面" src="">
Firebase Authenticationを使用して、Googleでのログインをサポート。

**[病院検索画面]**
<img width="1400" alt="病院検索画面" src="">

**[検診カレンダー画面]**
<img width="1400" alt="検診カレンダー画面" src="">
過去の検診記録や今後の予定をカレンダー形式で管理。

**[服薬通知画面]**
<img width="1400" alt="服薬通知画面" src="">
  - **登録機能**:  
    ユーザーは以下の情報を登録できます:  
      - 薬の名前（例: 解熱剤、抗生物質など）  
      - 錠数（例: 1錠、2錠）  
      - 服薬時間（例: 8：30など）  
  - **通知機能**:  
    指定された服薬時間になるとブラウザ通知を送信。  
    - 通知内容には、薬の名前と服用する錠数が表示されます。  
  - **管理機能**:  
    過去の服薬履歴を一覧で確認可能。


## 使用技術
- **TypeScript** 
- **Next.js** 
- **Firebase**  
  - Authentication: ログイン機能の実装。  
  - Firestore Database: 検診カレンダー機能のデータベースとして利用。  
  - Realtime Database: 服薬通知機能のデータベースとして使用。


## 今後の展望


## 資料
https://docs.google.com/presentation/d/1RGL2WRrBlI7_w5I2btxdqFBUnVSjYQuFP5Sw6Vu0DXY/edit#slide=id.g2d0400b65d7_3_293


お気軽にフィードバックや機能リクエストをお寄せください！ 😊
