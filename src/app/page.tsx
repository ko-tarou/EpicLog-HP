"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  AlertCircle,
  Check,
  Download,
  FileDown,
  Github,
  Globe,
  Info,
  Laptop,
  Lock,
  MessageSquare,
  Shield,
  Terminal,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Home() {
  const [showPermissionInfo, setShowPermissionInfo] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <Badge variant="outline" className="mb-4 px-3 py-1 border-indigo-400 text-indigo-300">
                v2.3.0 リリース
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-indigo-400">Epic</span>Log
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
                あなたのブラウザ履歴が、
                <br className="md:hidden" />
                <span className="font-medium text-indigo-300">詩的な物語</span>に生まれ変わる。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Download className="mr-2 h-5 w-5" />
                  ダウンロード
                </Button>
                <Button size="lg" className="bg-white/20 border-white/40 text-white hover:bg-white/30">
                  <Info className="mr-2 h-5 w-5" />
                  詳細を見る
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-1">
                  <div className="bg-gray-900 rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="EpicLogアプリのスクリーンショット"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white rounded-full p-4 shadow-lg">
                  <Shield className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">コンセプト</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              「日記を書かなくても、1日がちゃんと記録されてる。」
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              現代人の多くは日記をつけず、気づけば時間が過ぎていく。
              <br />
              EpicLog はブラウザの履歴という"無意識の行動記録"を使って、
              <br />
              <span className="font-medium text-indigo-700">あなたの1日を詩のように記憶</span>します。
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">主な機能</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              あなたの日常を<span className="text-indigo-600">物語</span>に
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-indigo-600" />,
                title: "履歴自動収集",
                description: "過去24時間のブラウザ履歴を非侵襲的に取得します。Safari、Chrome、Edgeに対応。",
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
                title: "AIによる要約",
                description: "Qwen2.5-7B-Instructによる詩的なストーリー生成。最大100文字の感情豊かな表現。",
              },
              {
                icon: <Lock className="h-8 w-8 text-indigo-600" />,
                title: "完全ローカル実行",
                description: "モデルもデータも全てユーザーのPC上で処理。プライバシーを最大限に尊重します。",
              },
              {
                icon: <Laptop className="h-8 w-8 text-indigo-600" />,
                title: "クロスプラットフォーム",
                description: "現在はmacOS対応。Windows版も近日公開予定です。",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="mb-4 bg-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">技術構成</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">最先端技術の組み合わせ</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Electron",
                  description: "クロスプラットフォームのデスクトップアプリ",
                },
                {
                  title: "llama.cpp",
                  description: "ローカルLLM推論エンジン（Apple Silicon Metal対応）",
                },
                {
                  title: "Qwen2.5-7B-Instruct",
                  description: "LLMモデル（GGUF形式 / quantized）",
                },
                {
                  title: "SQLite3",
                  description: "ブラウザ履歴取得用ローカルDBアクセス",
                },
                {
                  title: "Day.js",
                  description: "日時整形ライブラリ",
                },
              ].map((tech, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-md">
                  <div className="bg-indigo-100 p-2 rounded-md mr-4">
                    <Terminal className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{tech.title}</h3>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 md:py-24 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-indigo-400 text-indigo-200 hover:bg-indigo-800/30">
              ダウンロード
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">EpicLog を今すぐ試す</h2>

            <Card className="bg-white/10 backdrop-blur-sm border-none shadow-2xl mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">最新バージョン</CardTitle>
                <CardDescription className="text-indigo-200">EpicLog v2.3.0 - macOS対応</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Badge variant="secondary" className="mr-2 bg-indigo-800 text-white">
                    23GB
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-800 text-white">
                    .dmg
                  </Badge>
                </div>
                <p className="text-sm text-indigo-200 mb-6">
                  インストール後、初回起動時に「フルディスクアクセス」の許可が必要です。
                </p>
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-100">
                  <FileDown className="mr-2 h-5 w-5" />
                  <a
                    href="https://kanazawa-it.box.com/s/yb7l5y7urrwsx40rj2xmumd0j6ia1h21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ダウンロード（Box）
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Button
              className="bg-white/20 border-white/40 text-white hover:bg-white/30"
              onClick={() => setShowPermissionInfo(!showPermissionInfo)}
            >
              <Info className="mr-2 h-4 w-4" />
              フルディスクアクセスについて
            </Button>

            {showPermissionInfo && (
              <Alert className="mt-6 bg-white/20 border-white/40 text-white text-left">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="text-white font-medium">フルディスクアクセスについて</AlertTitle>
                <AlertDescription className="text-white/90">
                  <p className="mb-2">
                    EpicLogはブラウザ履歴を読み取るために、macOSの「フルディスクアクセス」権限が必要です。
                    この権限はSafariなどのブラウザの履歴データベースにアクセスするために使用されます。
                  </p>
                  <p>
                    すべてのデータ処理はローカルで行われ、外部に送信されることはありません。
                    権限は「システム設定」→「プライバシーとセキュリティ」→「フルディスクアクセス」から設定できます。
                  </p>
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">よくある質問</h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "なぜファイルサイズが大きいのですか？",
                  answer:
                    "EpicLogには高性能なAIモデル（Qwen2.5-7B-Instruct）が含まれているため、ファイルサイズが約23GBと大きくなっています。これにより、インターネット接続なしでもAI機能を利用できます。将来的にはモデルを外部からダウンロードする方式も検討しています。",
                },
                {
                  question: "プライバシーは守られますか？",
                  answer:
                    "はい。EpicLogはすべての処理をローカルで行い、あなたのデータが外部に送信されることはありません。ブラウザ履歴の読み取りと、AIによる処理はすべてあなたのコンピュータ上で完結します。",
                },
                {
                  question: "Windows版はいつリリースされますか？",
                  answer:
                    "Windows版は現在開発中で、近日中にリリース予定です。正確な日程は決まり次第、公式サイトでお知らせします。",
                },
                {
                  question: "フルディスクアクセス権限は安全ですか？",
                  answer:
                    "フルディスクアクセス権限はブラウザの履歴データベースにアクセスするために必要です。EpicLogはこの権限を履歴の読み取りにのみ使用し、他の目的では使用しません。すべての処理はローカルで行われ、データが外部に送信されることはありません。",
                },
                {
                  question: "生成される物語はどのようなものですか？",
                  answer:
                    "あなたのブラウザ履歴から、その日の活動を反映した最大100文字程度の詩的な短い物語が生成されます。感情表現を含み、あなたの1日を独自の視点で表現します。",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">ロードマップ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">今後の予定</h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Windows版対応",
                  description: "Windows環境でもEpicLogを利用できるようにします。",
                  status: "開発中",
                },
                {
                  title: "モデルの外部ダウンロード対応",
                  description: "アプリ本体を軽量化し、初回起動時にAIモデルをダウンロードする方式を導入します。",
                  status: "計画中",
                },
                {
                  title: "モバイル通知機能",
                  description: "生成されたストーリーをモバイルデバイスに通知する機能を追加します。",
                  status: "検討中",
                },
                {
                  title: "ストーリー保存・共有機能",
                  description: "生成されたストーリーを保存し、必要に応じて共有できる機能を追加します。",
                  status: "計画中",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-md">
                  <div className="mr-4 mt-1">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-indigo-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-lg text-gray-900">{item.title}</h3>
                      <Badge variant="outline" className="bg-indigo-100 text-indigo-800 border-none">
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">EpicLog</h3>
                <p className="text-gray-400 mb-4">あなたのブラウザ履歴が、詩的な物語に生まれ変わる。</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">リンク</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      ダウンロード
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      プライバシーポリシー
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      利用規約
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">技術協力</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">OpenAI</li>
                  <li className="text-gray-400">llama.cpp</li>
                  <li className="text-gray-400">Alibaba Qwen Team</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              <p>© 2025 EpicLog. All Rights Reserved.</p>
              <p className="mt-2 text-sm">開発者: @kota</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

