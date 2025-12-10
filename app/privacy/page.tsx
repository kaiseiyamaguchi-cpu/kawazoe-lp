import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              トップページに戻る
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1>プライバシーポリシー</h1>
          <p className="text-muted-foreground">最終更新日：2025年12月10日</p>

          <p>
            セレンディップ工房株式会社（以下「当社」といいます）は、当社が提供する習慣化アプリ「TSUZUKU」（以下「本サービス」といいます）におけるユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
          </p>

          <h2>第1条（個人情報）</h2>
          <p>
            「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレス、その他の記述等により特定の個人を識別できる情報を指します。
          </p>

          <h2>第2条（収集する情報）</h2>
          <p>当社は、ユーザーから以下の情報を取得します。</p>

          <h3>2.1 ユーザーが提供する情報</h3>
          <ol>
            <li>
              <strong>アカウント登録情報</strong>
              <ul>
                <li>メールアドレス</li>
                <li>ユーザー名（ニックネーム）</li>
                <li>プロフィール画像（任意）</li>
              </ul>
            </li>
            <li>
              <strong>習慣トラッキング情報</strong>
              <ul>
                <li>起床時刻</li>
                <li>学習時間</li>
                <li>達成記録</li>
                <li>ストリーク（連続記録）</li>
              </ul>
            </li>
            <li>
              <strong>コミュニティ投稿情報</strong>
              <ul>
                <li>投稿内容（テキスト、画像）</li>
                <li>コメント</li>
                <li>いいね・リアクション</li>
              </ul>
            </li>
            <li>
              <strong>決済情報</strong>
              <ul>
                <li>クレジットカード情報（決済代行会社Stripeを通じて処理）</li>
                <li>取引履歴</li>
              </ul>
            </li>
          </ol>

          <h3>2.2 自動的に収集される情報</h3>
          <ol>
            <li>
              <strong>利用情報</strong>
              <ul>
                <li>アプリの起動日時、利用時間</li>
                <li>操作ログ</li>
                <li>閲覧履歴</li>
              </ul>
            </li>
            <li>
              <strong>デバイス情報</strong>
              <ul>
                <li>IPアドレス</li>
                <li>デバイスの種類、OS</li>
                <li>ブラウザの種類とバージョン</li>
                <li>Cookie情報</li>
              </ul>
            </li>
            <li>
              <strong>位置情報</strong>
              <ul>
                <li>概要的な位置情報（市区町村レベル）</li>
                <li>※詳細な位置情報は収集しません</li>
              </ul>
            </li>
          </ol>

          <h2>第3条（個人情報の利用目的）</h2>
          <p>当社は、取得した個人情報を以下の目的で利用します。</p>
          <ol>
            <li>本サービスの提供、維持、保護及び改善のため</li>
            <li>ユーザー認証及びアカウント管理のため</li>
            <li>ユーザーの習慣データの記録、分析、可視化のため</li>
            <li>ランキング機能の提供のため</li>
            <li>ユーザー間のコミュニケーション機能の提供のため</li>
            <li>利用料金の請求及び決済処理のため</li>
            <li>ユーザーからのお問い合わせへの対応のため</li>
            <li>規約違反や不正利用の防止及び対応のため</li>
            <li>サービスの改善及び新機能の開発のため</li>
            <li>統計データの作成及び分析のため（個人を特定できない形式）</li>
            <li>メンテナンス情報、重要なお知らせ等の通知のため</li>
            <li>キャンペーンやイベント情報の配信のため（同意を得た場合のみ）</li>
          </ol>

          <h2>第4条（個人情報の第三者提供）</h2>
          <p>当社は、以下の場合を除いて、ユーザーの同意なく第三者に個人情報を提供しません。</p>
          <ol>
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
          </ol>

          <h2>第5条（個人情報の共同利用）</h2>
          <p>当社は、以下の業務委託先と個人情報を共同利用することがあります。</p>
          <ol>
            <li>
              <strong>決済サービス提供事業者</strong>
              <ul>
                <li>Stripe, Inc.</li>
                <li>目的：決済処理のため</li>
                <li>提供情報：決済に必要な情報（クレジットカード情報は直接Stripeに送信され、当社は保持しません）</li>
              </ul>
            </li>
            <li>
              <strong>サーバーホスティング事業者</strong>
              <ul>
                <li>目的：サービスの安定稼働のため</li>
                <li>提供情報：サービス利用に必要な情報</li>
              </ul>
            </li>
            <li>
              <strong>分析ツール提供事業者</strong>
              <ul>
                <li>目的：サービス改善のための利用動向分析</li>
                <li>提供情報：匿名化された利用統計情報</li>
              </ul>
            </li>
          </ol>

          <h2>第6条（個人情報の開示・訂正・削除）</h2>
          <ol>
            <li>ユーザーは、当社に対し、個人情報保護法の定めに従い、自己の個人情報の開示を請求することができます。</li>
            <li>ユーザーは、アプリ内の設定画面から、自己の個人情報を閲覧、訂正、削除することができます。</li>
            <li>アカウントを削除した場合、登録情報は削除されますが、投稿したコンテンツは匿名化された状態で残る場合があります。</li>
          </ol>

          <h2>第7条（個人情報の安全管理）</h2>
          <p>当社は、個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p>
          <ol>
            <li>データの暗号化（通信時・保存時）</li>
            <li>アクセス制限及び認証管理</li>
            <li>ファイアウォールによる不正アクセス防止</li>
            <li>定期的なセキュリティ診断</li>
            <li>従業員への教育及び監督</li>
          </ol>

          <h2>第8条（Cookie及びトラッキング技術）</h2>
          <ol>
            <li>本サービスは、ユーザー体験の向上及びサービスの改善を目的として、Cookieその他のトラッキング技術を使用します。</li>
            <li>
              Cookieを使用する目的：
              <ul>
                <li>ログイン状態の維持</li>
                <li>ユーザー設定の保存</li>
                <li>サービス利用状況の分析</li>
                <li>広告の最適化</li>
              </ul>
            </li>
            <li>ユーザーは、ブラウザの設定によりCookieを無効にすることができますが、その場合、本サービスの一部機能が正常に動作しない可能性があります。</li>
          </ol>

          <h2>第9条（アクセス解析ツール）</h2>
          <p>当社は、本サービスの利用状況を把握するため、Google Analyticsなどのアクセス解析ツールを使用することがあります。これらのツールは、Cookieを使用してユーザーの情報を収集しますが、個人を特定する情報は含まれません。</p>

          <h2>第10条（未成年者の個人情報）</h2>
          <ol>
            <li>本サービスは、13歳未満の方の利用を想定していません。</li>
            <li>13歳以上18歳未満の方が本サービスを利用する場合は、保護者の同意を得た上でご利用ください。</li>
          </ol>

          <h2>第11条（プライバシーポリシーの変更）</h2>
          <ol>
            <li>当社は、必要に応じて本ポリシーを変更することがあります。</li>
            <li>重要な変更がある場合は、本サービス上で通知します。</li>
            <li>変更後も本サービスを継続利用する場合、変更後のプライバシーポリシーに同意したものとみなします。</li>
          </ol>

          <h2>第12条（お問い合わせ窓口）</h2>
          <p>個人情報の取扱いに関するお問い合わせは、以下までご連絡ください。</p>
          <p>
            <strong>セレンディップ工房株式会社</strong><br />
            Email: wiseowl.good.morning2.0@gmail.com<br />
            個人情報保護管理者：川添貴裕
          </p>

          <hr />

          <p><strong>制定日：2025年12月10日</strong></p>
        </article>
      </div>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground">
              利用規約
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="/privacy" className="hover:text-foreground">
              プライバシーポリシー
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="/tokushoho" className="hover:text-foreground">
              特定商取引法に基づく表記
            </Link>
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            © 2025 TSUZUKU All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
