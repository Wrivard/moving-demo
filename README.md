# 🚚 Moving Calculator Demo

A working moving company quote calculator built with Webflow export and Vercel serverless functions.

## ✨ Features

- **Multi-step form** with real-time quote preview
- **Smart pricing calculation** based on residence type and service
- **Email integration** with Resend API
- **Professional email templates** for both business and customer
- **Responsive design** that works on all devices

## 🚀 Quick Setup for Demo

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `moving-calculator-demo`
3. Make it public
4. **DO NOT** initialize with README, .gitignore, or license
5. Copy the repository URL

### 2. Connect to GitHub
```bash
git remote add origin [YOUR_GITHUB_REPO_URL]
git push -u origin main
```

### 3. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy the project

### 4. Configure Environment Variables
In Vercel Dashboard → Project → Settings → Environment Variables, add:

- `RESEND_API_KEY` = Your Resend API key
- `FROM_EMAIL` = noreply@yourdomain.com (verified domain)

## 📧 Email Configuration Required

**You need to provide:**
1. **Resend API Key** (get from [resend.com](https://resend.com))
2. **Verified Domain** (must be verified in Resend Dashboard)
3. **Business Email** (where quotes should be sent)

## 🎯 How It Works

1. **Step 1**: Customer enters personal information
2. **Step 2**: Selects service type and residence type (with real-time quote preview)
3. **Step 3**: Provides additional details and current address
4. **Step 4**: Selects region and move date
5. **Result**: Calculates quote and sends emails to both business and customer

## 💰 Pricing Structure

- **Petite résidence**: $800 - $1,200
- **Appartement**: $600 - $900
- **Maison moyenne**: $1,200 - $1,800
- **Grande maison**: $1,800 - $2,500
- **Maison familiale**: $2,200 - $3,200
- **Propriété complexe**: $3,000 - $4,500

**Service multipliers:**
- Résidentiel: 1.0x
- Commercial: 1.3x
- Longue distance: 1.5x
- Autre: 1.2x

## 🛠️ Technology Stack

- **Frontend**: Webflow export (HTML/CSS/JS)
- **Backend**: Vercel serverless functions
- **Email Service**: Resend API
- **Deployment**: Vercel

## 📱 Demo Ready

This calculator is ready for client demonstration with:
- Professional design
- Real-time calculations
- Email notifications
- Mobile responsive interface
- French language support

---

**Ready for your demo!** 🎉
