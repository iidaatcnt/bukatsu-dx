import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Header / Navigation */}
      <header className="fixed w-full bg-white/90 backdrop-blur-md border-b border-blue-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-blue-900 tracking-tight">
            部活DX <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded ml-2 align-middle">Beta</span>
          </div>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            地域移行の波を、<br className="md:hidden" />
            <span className="text-blue-600">ITでチャンスに変える。</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            地域スポーツクラブ・文化活動団体の運営を、<br className="hidden md:inline" />
            「集客・連絡・集金」のシステム化で劇的に効率化します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              無料相談を申し込む
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a
              href="#reason"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all"
            >
              選ばれる理由を見る
            </a>
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">OWNER'S PAIN</h2>
            <h3 className="text-3xl font-bold text-slate-900">こんなお悩みありませんか？</h3>
            <p className="mt-4 text-slate-600">アナログな管理が、あなたの指導時間を奪っています。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "集まらない", desc: "チラシや口コミだけでは限界。Webでどう発信すればいいか分からない。", icon: "📣" },
              { title: "連絡が大変", desc: "LINEグループやメールでの連絡網。既読チェックや返信対応に追われる日々。", icon: "📩" },
              { title: "集金が面倒", desc: "現金集金は管理が煩雑。未納催促のストレスから解放されたい。", icon: "💰" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-300 uppercase tracking-widest mb-2">OUR SOLUTION</h2>
            <h3 className="text-3xl font-bold">部活DXが提供する「3つの武器」</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">📱</div>
              <h4 className="text-xl font-bold mb-4">Instagram・SNS活用</h4>
              <p className="text-blue-100 opacity-90">
                保護者や生徒が見ているスマホへダイレクトにアプローチ。魅力的な発信で「入りたい」を作ります。
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">💻</div>
              <h4 className="text-xl font-bold mb-4">公式ホームページ制作</h4>
              <p className="text-blue-100 opacity-90">
                クラブの「顔」となるWebサイト。活動方針や実績を掲載し、保護者に安心感を与えます。
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🤖</div>
              <h4 className="text-xl font-bold mb-4">事務作業の自動化</h4>
              <p className="text-blue-100 opacity-90">
                出欠確認やスケジュール管理をデジタル化。空いた時間で、より質の高い指導を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reason Section */}
      <section id="reason" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">WHY US</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">業界歴30年のエンジニアが<br />直接サポートします。</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Web制作会社やフリーランスの多くは「作って終わり」です。<br />
                しかし、地域クラブに必要なのは、ITツールの導入から日々の運用まで相談できる「パートナー」です。
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                私は30年間、エンジニアとして現場の問題解決に取り組んできました。
                難しい専門用語は使いません。あなたのクラブの「事務員代行」として、IT周りを丸ごとお任せください。
              </p>
              <ul className="space-y-3">
                {[
                  "直通連絡でスピーディーな対応",
                  "地域活動への理解と共感",
                  "無駄なコストを省いた適正価格"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <span className="w-5 h-5 bg-green-500 rounded-full text-white flex items-center justify-center text-xs mr-3">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              {/* Profile Image Placeholder */}
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-white">
                  {/* ここにプロフィール写真を入れます */}
                  飯田 正勝<br />(Profile Image)
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-sm font-bold opacity-80 mb-1">PROVEN TRACK RECORD</p>
                <p className="font-bold text-lg">「しろいプログラミング教室」など<br />教育・地域運営実績あり</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">PRICING</h2>
            <h3 className="text-3xl font-bold text-slate-900">地域活動を応援する、<br />続けやすい料金プラン</h3>
          </div>

          <div className="max-w-lg mx-auto bg-white border-2 border-blue-100 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              おすすめ
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Web制作・運用サポート</h4>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-black text-blue-600">¥3,000</span>
              <span className="text-slate-500 ml-2">/ 月〜</span>
            </div>
            <p className="text-slate-600 mb-8 text-sm">
              ホームページの維持管理、SNS更新のアドバイス、ちょっとしたIT相談まで。
              アルバイトを雇うよりも圧倒的に低コストで、専属のWeb担当者を持てます。
            </p>
            <a
              href="#contact"
              className="block w-full py-4 text-center font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition"
            >
              まずは無料で相談する
            </a>
            <p className="text-center text-xs text-slate-400 mt-4">初期費用はご相談ください</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            あなたのクラブの「IT担当」になります。
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            まずは現状のお悩みをお聞かせください。無理な売り込みは一切いたしません。<br />
            「どんなことができるの？」といった軽いご質問でも大歓迎です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold rounded-lg text-lg flex items-center justify-center transition">
              LINEで気軽に相談する
            </button>
            <button className="px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 font-bold rounded-lg text-lg transition">
              お問い合わせフォームへ
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-slate-500 text-sm text-center border-t border-slate-900">
        <p>© 2026 Bukatsu DX. All rights reserved.</p>
      </footer>
    </div>
  );
}
