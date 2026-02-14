
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-indigo-100 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👩‍💼</span>
            <div className="font-bold text-xl text-indigo-900 tracking-tight leading-none">
              オンライン秘書<br /><span className="text-2xl text-indigo-600">部活DX</span>
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
                面倒なことは全部、あなたの「オンラインマネージャー」が引き受けます。<br />
                <span className="text-sm text-slate-500 mt-2 block">（スマホで写真を送るだけでOKです！）</span>
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
                  <p className="font-bold text-lg text-indigo-900">あなたの専属マネージャー</p>
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
            <div className="bg-slate-50 p-8 rounded-2xl border-2 border-slate-100 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">💻💦</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">PCが置物化している</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                助成金でパソコンを買ったけど、使い方がわからず箱に入ったまま。
                結局、手書きの書類と電話連絡に戻ってしまっている。
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border-2 border-slate-100 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">😓</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">スタッフもIT苦手</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                パートさんや保護者ボランティアにお願いしたいけど、
                みんなパソコンが苦手で、結局代表の自分が全部やるハメに...。
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border-2 border-slate-100 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">⏳</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">指導時間が削られる</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                名簿整理やメール返信に追われて、肝心の指導メニューを考える時間がない。
                「何のためにクラブを作ったんだっけ...」と悩む日々。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Menu */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-indigo-300 font-bold tracking-widest uppercase mb-2">SERVICE MENU</h2>
            <h3 className="text-3xl lg:text-4xl font-bold">「面倒なこと」は、すべて私たちが引き受けます。</h3>
            <p className="mt-4 text-indigo-200">あなたが「やりたいこと」だけを教えてください。</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "月謝袋の廃止・未払いゼロへ",
                icon: "💳",
                desc: "「月謝まだですか？」という気まずい催促はもう不要。自動引き落とし導入で、集金の手間も精神的ストレスもゼロにします。"
              },
              {
                title: "電話連絡網・欠席連絡からの解放",
                icon: "💬",
                desc: "朝の欠席連絡電話、もう出なくてOK。LINEで24時間自動受付。体験会の予約も、顧客名簿の管理も、スマホひとつで完結します。"
              },
              {
                title: "チーム公式グッズ販売",
                icon: "👕",
                desc: "「お揃いのTシャツ作りたいけど在庫が怖い...」。SUZURIなどを使って、在庫リスクゼロで公式グッズのネット販売を開始します。"
              },
              {
                title: "TikTok / YouTube動画作成",
                icon: "🎥",
                desc: "練習風景の動画を送るだけ。流行りの音楽に乗せて、生徒が集まる「カッコいいショート動画」を作成・投稿代行します。"
              },
              {
                title: "チラシ・ポスター作成",
                icon: "🎨",
                desc: "手書きのラフ案を写メで送るだけ。プロのデザインで見やすく、生徒が集まる募集チラシを作成し、データでお渡しします。"
              },
              {
                title: "HP修正・更新代行",
                icon: "🛠️",
                desc: "「来月の予定を載せて」「試合結果をアップして」。スマホで一行送るだけで、私たちが即座にホームページを更新します。"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl hover:bg-white/20 transition">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-indigo-100 leading-relaxed opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">パートさんを雇うより、<br className="sm:hidden" />圧倒的にお得です。</h2>
          <p className="text-slate-600 mb-12">
            教育コストゼロ。退職リスクなし。必要な時だけ頼める。<br />
            それが「オンライン秘書」のメリットです。
          </p>

          <div className="bg-white border-4 border-indigo-100 rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-white font-bold px-6 py-2 rounded-bl-xl shadow-md">
              まずはこれ！
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">スポット依頼プラン</h3>
            <p className="text-slate-500 text-sm mb-6">「ちょっとこれやって！」をチケット感覚で。</p>

            <div className="flex items-end justify-center gap-2 mb-8">
              <span className="text-5xl font-black text-indigo-600">¥1,000</span>
              <span className="text-slate-500 font-bold mb-2">/ 1作業〜</span>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left max-w-sm mx-auto">
              <p className="font-bold text-slate-900 mb-4 text-center">ご依頼サンプル</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-700">
                  <span className="text-green-500 mr-3 text-lg">✓</span>
                  <span>HPのテキスト・画像修正</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="text-green-500 mr-3 text-lg">✓</span>
                  <span>ショート動画 編集・投稿（1本）</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="text-green-500 mr-3 text-lg">✓</span>
                  <span>保護者一斉メール配信代行</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="text-green-500 mr-3 text-lg">✓</span>
                  <span>オリジナルグッズ画像作成</span>
                </li>
              </ul>
            </div>

            <a
              href="https://lin.ee/rCg1MJn"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-[#06C755] text-white font-bold rounded-xl text-lg hover:bg-[#05b34c] transition shadow-lg transform hover:-translate-y-1"
            >
              まずは無料で相談してみる
            </a>
            <p className="mt-4 text-xs text-slate-400">
              ※月額の「事務局丸ごと代行プラン」もございます（要見積もり）
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t border-slate-800">
        <div className="mb-4 text-4xl">👩‍💼</div>
        <p className="font-bold text-white text-lg mb-2">オンライン秘書 部活DX</p>
        <p>〒270-1432 千葉県白井市冨士137-88</p>
        <p className="mt-8 text-xs opacity-50">© 2026 Bukatsu DX. All rights reserved.</p>
      </footer>
    </div>
  );
}
