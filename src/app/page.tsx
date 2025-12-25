'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Check, Download, Sparkles, Shield, Zap, Star, TrendingUp, Crown, Gem, Clock, Users, Play, ChevronRight, Gift } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = async () => {
    setIsLoading(true)
    // Add your OGADS link here
    const ogadsLink = 'https://lockedapp.org/cl/i/9v9q8v'
    window.open(ogadsLink, '_blank')
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 via-white to-yellow-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-orange-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Brawl Stars Mod
            </span>
          </div>
          <Badge variant="secondary" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 px-4 py-1.5">
            V64.264 Latest
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Game Icon - Top Center */}
          <div className="flex justify-center mb-8">
            <img
              src="https://i.ibb.co/d4Bcz7F7/brawl-stars-mod-apk.webp"
              alt="Brawl Stars Mod APK"
              className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-2xl hover:scale-110 transition-transform cursor-pointer"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 px-4 py-1.5">
                  🔥 100% Working - No Root Required
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                    UNLOCK
                  </span>
                  <br />
                  <span className="text-gray-900">EVERYTHING</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  Get <span className="font-bold text-orange-600">999,999 Gems & Coins</span>, Unlock All Brawlers, Skins & More!
                  The Ultimate Brawl Stars Mod Experience.
                </p>
              </div>

              <Button
                onClick={handleDownload}
                disabled={isLoading}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-6 text-lg font-bold shadow-xl shadow-orange-500/30 transform hover:scale-105 transition-all w-full sm:w-auto"
              >
                {isLoading ? (
                  <>
                    <Download className="w-5 h-5 mr-2 animate-bounce" />
                    Preparing...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </>
                )}
              </Button>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-gray-900">50,000+</span> Players Already Downloaded
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/20">
                <img
                  src="/brawl-stars-hero.png"
                  alt="Brawl Stars Mod Gameplay"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-green-500 text-white mb-3">
                    ✨ Anti-Ban Protection
                  </Badge>
                  <p className="text-white text-lg font-semibold">
                    Safe & Secure - Updated Daily
                  </p>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce">
                <div className="flex items-center gap-2">
                  <Gem className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">999K</p>
                    <p className="text-xs text-gray-600">Gems</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce delay-1000">
                <div className="flex items-center gap-2">
                  <Crown className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">ALL</p>
                    <p className="text-xs text-gray-600">Brawlers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-12 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">50K+</div>
              <div className="text-sm md:text-base opacity-90">Downloads</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">4.9</div>
              <div className="text-sm md:text-base opacity-90">User Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">100%</div>
              <div className="text-sm md:text-base opacity-90">Working</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">24/7</div>
              <div className="text-sm md:text-base opacity-90">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 px-4 py-1.5">
              ⚡ Premium Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unlock the full potential of Brawl Stars with our powerful mod
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-xl shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4">
                  <Gem className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Unlimited Gems</CardTitle>
                <CardDescription className="text-base">
                  Get 999,999 free gems instantly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Instant delivery', 'No cooldown', 'Works on all modes'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-all hover:shadow-xl shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">All Brawlers Unlocked</CardTitle>
                <CardDescription className="text-base">
                  Access every brawler from day one
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['All Legendary Brawlers', 'Mythic Brawlers', 'Max Power Level'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Anti-Ban System</CardTitle>
                <CardDescription className="text-base">
                  Play safely without any risks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Undetectable', 'Regular Updates', 'Safe to Use'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-xl shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Unlimited Coins</CardTitle>
                <CardDescription className="text-base">
                  Never run out of coins again
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['999,999 Coins', 'Buy Everything', 'Upgrade Fast'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">All Skins</CardTitle>
                <CardDescription className="text-base">
                  Exclusive skins for all brawlers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Legendary Skins', 'Exclusive Designs', 'No Restrictions'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:border-red-400 transition-all hover:shadow-xl shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Auto Updates</CardTitle>
                <CardDescription className="text-base">
                  Stay updated automatically
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Daily Updates', 'Latest Features', 'Bug Fixes'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/brawl-stars-features.png"
              alt="Brawl Stars Features"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 px-4 py-1.5">
              🎮 Easy Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to unlock unlimited resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl">
                  <Download className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Download</h3>
              <p className="text-gray-600">
                Click the download button and complete a quick verification
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Install</h3>
              <p className="text-gray-600">
                Install the mod file on your device (Android/iOS)
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Enjoy!</h3>
              <p className="text-gray-600">
                Open the game and enjoy unlimited resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <Card className="border-0 bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/10" />
            <CardContent className="relative p-12 md:p-16 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                  Ready to Dominate?
                </h2>
                <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                  Join thousands of players already enjoying unlimited resources
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={handleDownload}
                  disabled={isLoading}
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-xl font-bold shadow-xl transform hover:scale-105 transition-all"
                >
                  {isLoading ? (
                    <>
                      <Download className="w-6 h-6 mr-2 animate-bounce" />
                      Preparing...
                    </>
                  ) : (
                    <>
                      <Download className="w-6 h-6 mr-2" />
                      Download Now - FREE
                    </>
                  )}
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  No Root Required
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  No Jailbreak
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  100% Safe
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Instant Access
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 px-4 py-1.5">
              ❓ Got Questions?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Is this mod safe to use?',
                a: 'Yes! Our mod is completely safe and undetectable. We use advanced anti-ban technology to protect your account.'
              },
              {
                q: 'Do I need root or jailbreak?',
                a: 'No, our mod works perfectly without root or jailbreak. Just install and play!'
              },
              {
                q: 'Will my account get banned?',
                a: 'With our advanced anti-ban system, the risk is extremely low. We update regularly to stay undetected.'
              },
              {
                q: 'How long does it take to get resources?',
                a: 'Resources are added instantly after verification. No waiting!'
              },
              {
                q: 'Does it work on iOS and Android?',
                a: 'Yes! Our mod works on both iOS and Android devices.'
              }
            ].map((faq, i) => (
              <Card key={i} className="border-2 border-orange-200 hover:border-orange-400 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {faq.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 px-4 py-1.5">
              ⭐ What Players Say
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Trusted by Thousands
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex M.',
                rating: 5,
                text: 'Best mod ever! Got all brawlers and skins. Working perfectly on my Android device!'
              },
              {
                name: 'Sarah K.',
                rating: 5,
                text: 'Finally found a mod that actually works. No issues at all, highly recommended!'
              },
              {
                name: 'Mike T.',
                rating: 5,
                text: 'Been using this for months now. Safe, reliable, and always updated!'
              }
            ].map((review, i) => (
              <Card key={i} className="border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-xl">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      {review.name[0]}
                    </div>
                    <span className="font-semibold text-gray-900">{review.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Start Playing Today!
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't miss out on unlimited resources. Download now and dominate the arena!
            </p>
          </div>

          <Button
            onClick={handleDownload}
            disabled={isLoading}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-12 py-8 text-2xl font-bold shadow-2xl shadow-orange-500/30 transform hover:scale-105 transition-all"
          >
            {isLoading ? (
              <>
                <Download className="w-7 h-7 mr-2 animate-bounce" />
                Preparing Download...
              </>
            ) : (
              <>
                <Download className="w-7 h-7 mr-2" />
                Download Now - It's FREE!
              </>
            )}
          </Button>

          <div className="flex flex-wrap justify-center gap-8 text-gray-300 pt-8">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span>100% Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span>50K+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <Separator className="bg-gray-800 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Brawl Stars Mod</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 All Rights Reserved. This is a fan-made modification.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
