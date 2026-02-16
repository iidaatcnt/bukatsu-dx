import Image from "next/image";
import Link from "next/link";
import { ClipboardCheck, MonitorOff, UserX, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-indigo-100 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="w-8 h-8 text-indigo-600" />
            <div className="font-bold text-xl text-indigo-900 tracking-tight leading-none">
              地域クラブのオンライン秘書<br /><span className="text-2xl text-indigo-600">部活DX</span>
            </div>
          </div>
          <a
            href="https://lin.ee/rCg1MJn"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-2 bg-[#06C755] text-white text-sm font-bold rounded-full hover:bg-[#05b34c] transition shadow-md"
          >
            LINEで相談する
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-bold mb-6 border border-orange-200 shadow-sm">
                地域クラブ・NPO・部活動の先生へ
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                「先生、事務作業は<br className="hidden sm:inline" />
                <span className="text-indigo-600 border-b-4 border-orange-300">私に任せてください！</span>」
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                パソコンが苦手でも大丈夫。<br />
                名簿作りも、お便り作成も、集金管理も...。<br />
                面倒なことは全部、地域クラブのオンライン秘書「部活DX」が引き受けます。<br />
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://lin.ee/rCg1MJn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#06C755] text-white font-bold rounded-xl shadow-xl hover:bg-[#05b34c] hover:translate-y-[-2px] transition flex items-center justify-center text-lg w-full sm:w-auto"
                >
                  <span className="mr-2 text-2xl">📱</span> LINEでマネージャーに頼む
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500">※相談は無料です。無理な勧誘はしませんのでご安心ください。</p>
            </div>

            <div className="lg:w-2/5 relative flex justify-center">
              <div className="bg-white p-4 rounded-3xl shadow-2xl border-4 border-white transform rotate-2 relative z-10 max-w-sm w-full">
                <div className="aspect-[3/4] bg-indigo-50 rounded-xl overflow-hidden relative mb-4">
                  <Image
                    src="/manager-hero.png"
                    alt="頼れるメガネ女子マネージャー"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="space-y-2 text-center">
                  <p className="font-bold text-lg text-indigo-900">地域クラブのオンライン秘書「部活DX」</p>
                  <div className="flex justify-center gap-2 text-xs font-bold text-white">
                    <span className="bg-orange-400 px-2 py-1 rounded">PC作業</span>
                    <span className="bg-blue-400 px-2 py-1 rounded">会計</span>
                    <span className="bg-green-400 px-2 py-1 rounded">連絡</span>
                  </div>
                </div>
              </div>
              {/* Decor */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 mb-16">
            <span className="bg-yellow-200 px-4 py-1">こんな「もったいない」状況</span><br />なっていませんか？
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border-2 border-slate-100 text-center hover:shadow-lg transition group">
              <MonitorOff className="w-20 h-20 text-slate-300 mb-6 mx-auto group-hover:text-indigo-500 transition-colors" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">PCが置物化している</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                助成金でパソコンを買ったけど、使い方がわからず箱に入ったまま。
                結局、手書きの書類と電話連絡に戻ってしまっている。
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border-2 border-slate-100 text-center hover:shadow-lg transition group">
              <UserX className="w-20 h-20 text-slate-300 mb-6 mx-auto group-hover:text-indigo-500 transition-colors" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">スタッフもIT苦手</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                パートさんや保護者ボランティアにお願いしたいけど、
                みんなパソコンが苦手で、結局代表の自分が全部やるハメに...。
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border-2 border-slate-100 text-center hover:shadow-lg transition group">
              <Clock className="w-20 h-20 text-slate-300 mb-6 mx-auto group-hover:text-indigo-500 transition-colors" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">指導時間が削られる</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                名簿整理やメール返信に追われて、肝心の指導メニューを考える時間がない。
                「何のためにクラブを作ったんだっけ...」と悩む日々。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Menu (Solution) */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-indigo-300 font-bold tracking-widest uppercase mb-2">SERVICE MENU</h2>
            <h3 className="text-3xl lg:text-4xl font-bold">地域クラブ運営の「面倒くさい」<br />すべて私たちが解決します。</h3>
            <p className="mt-4 text-indigo-200 text-lg">あなたが「やりたいこと」だけを教えてください。</p>
          </div>

          {/* Main Feature: Money Collection */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl mb-12 transform hover:scale-[1.01] transition duration-500">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative bg-orange-50 min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                  src="/manager-money.png"
                  alt="月謝管理"
                  fill
                  className="object-contain"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white font-bold px-4 py-1 rounded-full shadow-lg z-10">
                  これが一番の目玉！
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-5xl mb-4">💳</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">月謝袋の完全廃止</h3>
                <h4 className="text-xl font-bold text-orange-600 mb-4">気まずい催促、もうしなくていいんです。</h4>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  「〇〇くん、月謝まだかな？」<br />
                  指導者と生徒・保護者の関係を悪くする「お金の催促」は、すべてオンラインマネージャーにお任せください。<br />
                  自動引き落とし（サブスク）の導入で、集金の手間も精神的ストレスも、未払いリスクもゼロにします。
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-bold">集金袋不要</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-bold">自動引き落とし</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-bold">未払い防止</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Contact Network */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition group">
              <div className="relative h-72 w-full bg-slate-50">
                <Image
                  src="/manager-contact.png"
                  alt="連絡網"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3 text-yellow-300">電話連絡網を「秒殺」</h4>
                <p className="text-lg text-white font-medium leading-relaxed">
                  LINE公式アカウント導入で、一斉送信ボタンを押すだけ。<br />
                  「言った言わない」も既読確認で解決。画像や動画も送れるので、雨天中止の連絡も一瞬で終わります。
                </p>
              </div>
            </div>

            {/* Member List */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition group">
              <div className="relative h-72 w-full bg-slate-50">
                <Image
                  src="/manager-list.png"
                  alt="名簿管理"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3 text-yellow-300">LINE友だち＝最強の名簿</h4>
                <p className="text-lg text-white font-medium leading-relaxed">
                  紙の名簿は不要です。LINEの友だちがそのまま顧客名簿になります。<br />
                  保護者の連絡先や住所も顧客名簿にまとめます。
                </p>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition group">
              <div className="relative h-72 w-full bg-slate-50">
                <Image
                  src="/manager-schedule.png"
                  alt="予定表"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3 text-yellow-300">「次の練習いつ？」が無くなる</h4>
                <p className="text-lg text-white font-medium leading-relaxed">
                  毎月配るプリント、無くされますよね？<br />
                  LINEのリッチメニューをタップするだけで、最新の予定表が表示されるように設定します。<br />
                  変更があった場合も、通知でお知らせすればOK。
                </p>
              </div>
            </div>

            {/* Album (Option) */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition group">
              <div className="relative h-72 w-full bg-slate-50">
                <Image
                  src="/manager-album.png"
                  alt="アルバム"
                  fill
                  className="object-contain p-2"
                />
                <div className="absolute top-2 right-2 bg-indigo-600 text-xs text-white px-2 py-1 rounded">オプション</div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3 text-yellow-300">思い出を会員限定で共有</h4>
                <p className="text-lg text-white font-medium leading-relaxed">
                  試合や合宿の写真を、保護者が見られる会員限定ページで公開。<br />
                  子どもたちの輝く姿を届けることで、保護者の満足度が劇的にアップします。
                </p>
              </div>
            </div>

            {/* Support (Option) */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition group md:col-span-2">
              <div className="relative h-80 w-full bg-slate-50">
                <Image
                  src="/manager-support.png"
                  alt="問い合わせ対応"
                  fill
                  className="object-contain p-2"
                />
                <div className="absolute top-2 right-2 bg-indigo-600 text-xs text-white px-2 py-1 rounded">オプション</div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3 text-yellow-300">体験予約もお任せください</h4>
                <p className="text-lg text-white font-medium leading-relaxed">
                  「体験に行きたいんですけど...」という問い合わせ、電話で受けていませんか？<br />
                  24時間自動で対応し、予約受付まで完了させます。<br />
                  よくある質問（退会方法や持ち物など）も、自動返信で解決します。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              パートさんを雇うより、<br className="sm:hidden" />圧倒的にお得です。
            </h2>
            <p className="text-slate-600 text-lg">
              教育コストゼロ。退職リスクなし。必要な時だけ頼める。<br />
              それが「オンライン秘書」のメリットです。
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Manager Image Section */}
            <div className="w-full lg:w-1/3 flex justify-center order-2 lg:order-1">
              <div className="relative w-64 h-64 lg:w-full lg:h-auto aspect-[3/4]">
                <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-50 transform translate-y-4"></div>
                <Image
                  src="/manager-hero.png"
                  alt="部活DXマネージャー"
                  fill
                  className="object-contain drop-shadow-xl transform hover:scale-105 transition duration-500"
                />
                <div className="absolute -bottom-4 right-0 bg-white p-3 rounded-xl shadow-lg border-2 border-indigo-100 animate-bounce">
                  <p className="text-sm font-bold text-indigo-900">「私がサポートします！」</p>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="w-full lg:w-2/3 order-1 lg:order-2">
              <div className="bg-white border-4 border-indigo-100 rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-orange-500 text-white font-bold px-6 py-2 rounded-bl-xl shadow-md">
                  まずはこれ！
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">スポット依頼プラン</h3>
                <p className="text-slate-500 text-sm mb-6">「ちょっとこれやって！」をチケット感覚で。</p>

                <div className="flex items-end gap-2 mb-8">
                  <span className="text-5xl font-black text-indigo-600">¥1,000</span>
                  <span className="text-slate-500 font-bold mb-2">（税別）/ 1作業</span>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left">
                  <p className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">ご依頼サンプル</p>
                  <ul className="space-y-4 text-base">
                    <li className="flex items-center text-slate-700">
                      <span className="text-green-500 mr-3 text-xl font-bold">✓</span>
                      <span>月謝袋の廃止（5名分設定）</span>
                    </li>
                    <li className="flex items-center text-slate-700">
                      <span className="text-green-500 mr-3 text-xl font-bold">✓</span>
                      <span>既存HPのテキスト・画像修正（1箇所）</span>
                    </li>
                    <li className="flex items-center text-slate-700">
                      <span className="text-green-500 mr-3 text-xl font-bold">✓</span>
                      <span>公式LINEの作成代行</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://lin.ee/rCg1MJn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 bg-[#06C755] text-white font-bold rounded-xl text-xl hover:bg-[#05b34c] transition shadow-lg transform hover:-translate-y-1 text-center"
                >
                  まずは無料で相談してみる
                </a>
                <p className="mt-4 text-center text-xs text-slate-400">
                  ※月額の「事務局丸ごと代行プラン」もございます（要見積もり）
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t border-slate-800">
        <ClipboardCheck className="w-12 h-12 text-slate-500 mb-4 mx-auto" />
        <p className="font-bold text-white text-lg mb-2">地域クラブのオンライン秘書 部活DX</p>
        <p>〒103-0027 東京都中央区日本橋2丁目16-4 remix日本橋 6階</p>
        <p className="mt-8 text-xs opacity-50">© 2026 Bukatsu DX. All rights reserved.</p>
      </footer>
    </div>
  );
}
