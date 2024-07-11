# README

# サービス名: GearNET

## **サービス概要**
  ギターやベースなど楽器を紹介し、同じ音楽好きの仲間を作ることを目的としたコミュニティーツールです。<br>

## **このサービスへの思い・作りたい理由**
   私自身ギターやベースといった楽器が大好きで、日々演奏を楽しんでいます。<br>
   そこで同じ楽器好きの仲間と交流し、情報を共有する場があれば楽しいと考えました。<br>
   このサービスは、楽器好きの人たちが集まり、気軽にお互いの楽器を紹介し合い、機材の情報交換をする場になればと思っています。<br>
   さらに、このコミュニティを通じて、一緒にバンドを結成する機会や自身の音楽活動を広める機会が生まれることも期待しています。<br>
  「GearNET」は、そんな楽器好きが気軽に繋がれるツールになることを目指しています。<br>


## **ユーザー層について**
  年齢に関係なく、楽器を愛するすべての人々を対象に提供できるものにしたいと思っています。<br>           

## **サービスの利用イメージ**
  **利用方法** <br> 
     ・ユーザー登録を行う <br> 
     ・プロフィールページの設定 <br> 
     ・自分の楽器（ギター、ベースなど）や機材（エフェクターなど）の画像や動画、レビュー書きを投稿する。(投稿したい人のみ設定) <br> 
     ・他のユーザーの投稿を閲覧し、いいねやお気に入り、コメントを書く <br> 
     ・フォーラムやチャット機能を使って、他のユーザーと情報交換を行う <br> 
   
  **価値** <br>
     ・楽器や機材の情報共有ができる :他のユーザーが持っている楽器や機材に関する情報やレビューから知識を深めることができる <br> 
     ・同じ趣味をもつ仲間ができる :楽器や音楽に対する共通の趣味を持つ仲間ができることでモチベーションがあがる <br> 
     ・技術や演奏スキルの向上 :他ユーザーの演奏動画を参考にしたり、またアドバイスを受けたりすることで自分の技術やスキル向上につながる <br> 


## **ユーザーの獲得について**
  投稿を簡単に行えるシェアボタンを設置やQRコードを使用したいと思っています。<br> 

## **サービスの差別化ポイント・推しポイント**
  **類似サービス** <br>
    ・BandLab : 音楽制作に焦点を当てていて他のミュージシャンとつながり、作品の公開や情報交換が行われています。<br>
    ・Vampr :  音楽制作に焦点を当てており、よりプロ思考を対象としている印象。<br>
    ・Co-Writing Studio : 音楽制作のコミュニケーションツール。仲間同士でやり取りをする便利ツールといった印象。<br>
   
  **当サービスの差別化ポイント** <br>
    ・音楽好きならプロ・アマ問わず誰でも気軽に利用できる。<br>
    ・楽曲制作に重点を置いた他のアプリとは異なり、楽器や機材の紹介から始められるので初心者や趣味で楽器を楽しむ人にとっても使いやすい。<br>
    ・音楽仲間との出会いや、互いの活動の共有、バンドの結成につながることを期待できる。<br>


## **機能候補**
  MVPリリース <br>
    ・ユーザー登録・ログイン機能 <br>
    ・タグ機能（楽器の種類を選択）<br>
    ・プロフィール機能(Xとyoutubeのアカウントを載せることできる) <br>
    ・コンテンツ投稿機能(紹介したい楽器の画像や動画の投稿) <br>
    ・いいね <br>
    ・フォロー機能 <br>
    ・コメント機能 <br>
    ・マイページ機能  <br>
    
  本リリース(仮) <br>
    ・DM機能 <br>
    ・お知らせ機能 <br>
    ・検索機能  ※マルチ検索・オートコンプリート <br>


## **機能の実装方針予定**
| カテゴリ | 技術 |
| --- | --- |
| フロントエンド | React |
| バックエンド | Ruby 3.2.2 / Ruby on Rails 7.1.3 |
| データベース | Postgres |
| 環境構築 | Docker |
| 認証 | Sorcery / omniauth-google-oauth2 |
| インフラ | Heroku / Amazon S3 |
| CSS | tailwind CSS |
| その他 | Swiper |

**Gem** <br>
  ・acts_as_follower: フォロー機能の実装<br>
  ・ransack: 検索機能<br>
  ・stimulus-autocomplete: 検索補完機能の実装予定<br>
  ・carrierwave: 画像、動画にアップロード<br>
  ・image_processing: 画像のリサイズ<br>
  ・streamio-ffmpeg: 動画の長さ、ファイルサイズの検証および変換<br>
  ・kaminari: ページネーションの実装<br>
  ・acts-as-taggable-on: タグ機能(使用するかは検討中)<br>
  ・pundit: 権限管理<br>
**API** <br>
  ・DM機能：ActionCableを使用して実装予定。<br>
  ・Notification: フォローしたユーザーの新規投稿、新規フォロー、メッセージなどの通知<br>


**投稿内容について** <br>
  ・ギター、アコギ、ベース、エフェクター、その他(その他の場合は手入力)で選択したものによって投稿フォーム出るように実装と選択したものでタグがつくように実装 <br>
      **ギター、アコギ、ベース** <br>
        ・ブランド名・カテゴリー(stratcaster, telecaster, lesporlなど)・年代を選択ボックスから選択。モデル名(手入力)。 該当しない場合はその他で手入力できるようにする。<br>
        ・画像、動画のアップロード <br>
        ・コメント <br> 
        ・プレビュー <br>
      **エフェクター** <br>
        ・機材メーカー、種類を選択（歪系、モジュレーション系、空間系、ダイナミクス系、フィルター系などタブから選択）、モデル名(手入力) <br>
        ・画像、動画のアップロード <br>
        ・コメント <br>
        ・プレビュー <br>
      **その他** <br>
        ・メーカー名、種類を手入力 <br>
        ・画像、動画のアップロード <br>
        ・コメント <br>
        ・プレビュー <br>

## **画面遷移図**
https://www.figma.com/design/otAy1mzefGG2xHZME0yxub/My_app_dev?node-id=0-1&t=c4Wbcvk5EGSpltxG-1

## **ER図**
https://drive.google.com/file/d/1WmjND-yhE_E6vsLMml6eReQ2jVsVat8C/view?usp=sharing

