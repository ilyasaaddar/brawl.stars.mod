# 🚀 دليل نشر المشروع على GitHub

## ✅ ما تم إعداده بالفعل

تم تحضير المشروع بالكامل للنشر على GitHub:
- ✅ تم إضافة جميع الملفات المطلوبة
- ✅ تم إنشاء 4 commits احترافية
- ✅ تم إنشاء README.md شامل
- ✅ تم إعداد .env.example
- ✅ تم إعداد .gitignore

## 📝 خطوات النشر على GitHub

### الخطوة 1: إنشاء حساب GitHub (إذا لم يكن لديك)
1. اذهب إلى [github.com](https://github.com)
2. سجل حساب جديد مجاني

### الخطوة 2: إنشاء مستودع جديد
1. سجل الدخول إلى GitHub
2. انقر على زر `+` في الزاوية اليمنى العليا
3. اختر `New repository`

### الخطوة 3: إعدادات المستودع
املأ النموذج:
- **Repository name**: `brawl-stars-mod-landing` (أو أي اسم تريده)
- **Description**: `Professional Brawl Stars Mod landing page with OGADS integration`
- **Visibility**: اختر `Public` (مجاني) أو `Private` (للمستودعات الخاصة)
- **لا تقم بتحديد أي خيارات أخرى** (Initialize this repository... أو Add README...)

انقر على `Create repository`

### الخطوة 4: ربط المشروع بالمسودع
بعد إنشاء المستودع، ستظهر صفحة تحتوي على أوامر. اختر قسم "…or push an existing repository from the command line"

استخدم الأوامر التالية (استبدل YOUR_USERNAME باسم مستخدم GitHub الخاص بك):

```bash
# تعيين رابط المستودع البعيد
git remote add origin https://github.com/YOUR_USERNAME/brawl-stars-mod-landing.git

# إعادة تسمية الفرع الرئيسي إلى main (موصى به)
git branch -M main

# رفع الكود إلى GitHub
git push -u origin main
```

### الخطوة 5: التحقق من النشر
1. اذهب إلى صفحة المستودع على GitHub
2. سترى جميع الملفات والملفات المرفوعة
3. README.md سيظهر في الصفحة الرئيسية

## 🎯 الأوامر الكاملة (انسخ والصق)

استبدل `YOUR_USERNAME` باسم مستخدم GitHub الحقيقي الخاص بك:

```bash
# 1. إضافة المستودع البعيد
git remote add origin https://github.com/YOUR_USERNAME/brawl-stars-mod-landing.git

# 2. تغيير اسم الفرع إلى main
git branch -M main

# 3. رفع الكود إلى GitHub
git push -u origin main
```

## 🔐 المصادقة مع GitHub

### الطريقة 1: باستخدام Personal Access Token (موصى به)

1. اذهب إلى GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. انقر `Generate new token` → `Generate new token (classic)`
3. أدخل:
   - **Note**: `Git Access for Brawl Stars Project`
   - **Expiration**: اختر فترة صلاحية (مثلاً 90 days)
   - **Select scopes**: حدد `repo` (هذا ضروري)

4. انقر `Generate token`
5. **انسخ التوكن واحفظه** (لن يتم إظهاره مرة أخرى)

6. عند استخدام `git push`، ستطلب منك كلمة المرور
7. أدخل: `YOUR_USERNAME` + رمز + `YOUR_TOKEN`
   - مثال: إذا اسمك `john` والتوكن `ghp_xxx123`
   - أدخل: `john:ghp_xxx123`

### الطريقة 2: استخدام GitHub CLI (أسهل)

```bash
# تثبيت GitHub CLI (إذا لم يكن مثبتاً)
# على Ubuntu/Debian:
sudo apt install gh

# على macOS:
brew install gh

# المصادقة
gh auth login

# اختر:
# - GitHub.com
# - HTTPS
# - Login with a web browser
# ثم اتبع الخطوات في المتصفح
```

بعد المصادقة، `git push` سيعمل تلقائياً بدون طلب كلمة المرور.

## 🌐 نشر المشروع على Vercel (اختياري)

بعد رفع المشروع على GitHub، يمكنك نشره مجاناً على Vercel:

1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخول بحساب GitHub
3. انقر `Add New` → `Project`
4. اختر مستودع `brawl-stars-mod-landing`
5. انقر `Deploy`

ستحصل على رابط مثل: `https://brawl-stars-mod-landing.vercel.app`

## 📊 الـ Commits التي تم إنشاؤها

```
66e592e chore: Update .gitignore to include .env.example and add template
8669a3c docs: Add comprehensive README with setup instructions
1a1fb42 feat: Add Brawl Stars Mod landing page with OGADS integration
08cec87 Initial commit
```

## ✅ التحقق من النجاح

بعد رفع المشروع، تحقق من:

1. **GitHub**: هل تظهر جميع الملفات؟
   - ✅ README.md
   - ✅ src/app/page.tsx
   - ✅ public/*.png
   - ✅ .env.example
   - ✅ .gitignore

2. **README.md**: هل يظهر بشكل جميل على صفحة المستودع؟

3. **الصور**: هل تظهر في مجلد public؟

## 🎉 مبروك!

مشروعك الآن على GitHub! 🚀

يمكنك مشاركة الرابط مع أي شخص:
`https://github.com/YOUR_USERNAME/brawl-stars-mod-landing`

## 💡 نصائح إضافية

1. **إضافة وصف للمستودع**: اذهب إلى Settings → General → Description
2. **إضافة تاغات**: إضافة تاغات مثل `brawl-stars`, `nextjs`, `landing-page`
3. **تشغيل GitHub Pages**: إذا أردت نشر مستندات
4. **استخدام GitHub Actions**: للـ CI/CD التلقائي

## ❓ المشاكل الشائعة

### المشكلة: `fatal: remote origin already exists`
**الحل**: استخدم `git remote set-url origin https://github.com/YOUR_USERNAME/REPO.git`

### المشكلة: `Permission denied (publickey)`
**الحل**: استخدم Personal Access Token بدلاً من SSH key

### المشكلة: `failed to push some refs`
**الحل**: استخدم `git pull origin main --rebase` ثم `git push -u origin main`

---

💪 إذا واجهت أي مشاكل، فقط أخبرني وسأساعدك!
