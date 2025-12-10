import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TokushohoPage() {
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
          <h1>特定商取引法に基づく表記</h1>

          <h2>販売事業者</h2>
          <p><strong>セレンディップ工房株式会社</strong></p>

          <h2>代表者</h2>
          <p><strong>川添 貴裕</strong></p>

          <h2>所在地</h2>
          <p>
            <strong>〒982-0001</strong><br />
            <strong>宮城県仙台市太白区八本松１丁目１３番１１－２１７号</strong>
          </p>

          <h2>お問い合わせ</h2>
          <p>
            <strong>Email</strong>: wiseowl.good.morning2.0@gmail.com
          </p>
          <p>
            ※お問い合わせはメールにて受け付けております。<br />
            ※営業時間：平日10:00～18:00（土日祝日を除く）<br />
            ※お電話でのお問い合わせは受け付けておりません。
          </p>

          <h2>販売価格</h2>
          <h3>基本プラン</h3>
          <p><strong>無料</strong></p>

          <h3>プレミアムプラン</h3>
          <p><strong>月額 980円（税込）</strong></p>
          <p>※表示価格は全て税込価格です。</p>

          <h2>お支払い方法</h2>
          <p><strong>クレジットカード決済</strong></p>
          <p>対応カードブランド：</p>
          <ul>
            <li>VISA</li>
            <li>Mastercard</li>
            <li>American Express</li>
            <li>JCB</li>
            <li>Diners Club</li>
            <li>Discover</li>
          </ul>
          <p>
            ※決済はStripe社の決済システムを利用しています。<br />
            ※クレジットカード情報は当社では保持せず、Stripe社が安全に管理します。
          </p>

          <h2>決済時期</h2>
          <p>
            <strong>月額料金</strong>：毎月の契約更新日に自動決済されます。<br />
            <strong>初回決済</strong>：プレミアムプランお申し込み時に即時決済されます。
          </p>

          <h2>サービスの提供時期</h2>
          <p><strong>即時提供</strong></p>
          <p>
            決済完了後、直ちにプレミアム機能をご利用いただけます。<br />
            ※アプリのダウンロード・インストールが別途必要です。
          </p>

          <h2>返品・返金について</h2>
          <p>本サービスはデジタルコンテンツであり、<strong>返品・返金はお受けできません</strong>。</p>
          <p>お申し込み前に、サービス内容を十分にご確認の上、ご契約ください。</p>

          <h2>解約・キャンセルについて</h2>
          <h3>解約方法</h3>
          <p>アプリ内の「設定」→「アカウント管理」→「プレミアムプランの解約」から解約手続きを行ってください。</p>

          <h3>解約のタイミング</h3>
          <p>解約手続きは<strong>いつでも可能</strong>です。</p>

          <h3>解約後の利用期間</h3>
          <p>解約手続き完了後も、<strong>次回更新日まではプレミアム機能をご利用いただけます</strong>。</p>

          <h3>日割り返金について</h3>
          <p>月の途中で解約された場合でも、<strong>日割り計算による返金は行いません</strong>。</p>

          <h3>再契約について</h3>
          <p>解約後、再度プレミアムプランをご契約いただくことが可能です。</p>

          <h2>契約の更新</h2>
          <p>
            プレミアムプランは<strong>自動更新</strong>です。<br />
            解約手続きを行わない限り、毎月自動的に契約が更新され、課金されます。
          </p>

          <h2>無料トライアルについて</h2>
          <p>※現在、無料トライアルは実施しておりません。今後実施する場合は、本サービス上でお知らせいたします。</p>

          <h2>動作環境</h2>
          <h3>推奨環境</h3>
          <ul>
            <li><strong>iOS</strong>: iOS 15.0以降</li>
            <li><strong>Android</strong>: Android 8.0以降</li>
            <li><strong>インターネット接続</strong>: 必須</li>
          </ul>
          <p>※推奨環境以外でのご利用は、正常に動作しない場合があります。</p>

          <h2>注意事項</h2>
          <ol>
            <li>本サービスは、継続的な努力を促進するツールであり、結果を保証するものではありません。</li>
            <li>1つのアカウントを複数人で共有することはできません。</li>
            <li>不正利用が発覚した場合、予告なくアカウントを停止することがあります。</li>
            <li>サービス内容は予告なく変更される場合があります。</li>
            <li>本サービスの利用には、別途通信料が発生します。</li>
          </ol>

          <h2>知的財産権</h2>
          <p>本サービス及び本サービスに関連する全てのコンテンツ（テキスト、画像、ロゴ、デザイン等）の知的財産権は、当社または正当な権利者に帰属します。無断での複製、転載、配布等を禁止します。</p>

          <h2>準拠法・管轄裁判所</h2>
          <p>
            本取引及び本規約の解釈にあたっては、日本法を準拠法とします。<br />
            本サービスに関する紛争については、<strong>仙台地方裁判所</strong>を第一審の専属的合意管轄裁判所とします。
          </p>

          <hr />

          <p>
            <strong>制定日：2025年12月10日</strong><br />
            <strong>最終更新日：2025年12月10日</strong>
          </p>
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
