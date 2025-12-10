import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-primary">TSUZUKU</div>

          {/* Social */}
          <div className="text-sm text-muted-foreground">
            アプリ公式:{" "}
            <Link href="#" className="font-medium text-foreground hover:text-primary transition-colors">
              @tsuzuku_app
            </Link>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm">
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              利用規約
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              プライバシーポリシー
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="/tokushoho" className="text-muted-foreground hover:text-foreground transition-colors">
              特定商取引法
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">© 2025 TSUZUKU All Rights Reserved.</div>
      </div>
    </footer>
  )
}
