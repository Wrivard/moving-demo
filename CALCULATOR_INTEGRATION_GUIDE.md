# 🚀 Moving Calculator Integration Guide

This guide explains how to integrate the moving calculator into another project with different brand colors while maintaining the same logic, layout, structure, and fonts.

## 📋 Table of Contents

1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Integration Steps](#integration-steps)
4. [Color Customization](#color-customization)
5. [API Configuration](#api-configuration)
6. [Form Structure](#form-structure)
7. [JavaScript Logic](#javascript-logic)
8. [Styling Guide](#styling-guide)
9. [Testing Checklist](#testing-checklist)

## 🎯 Overview

The moving calculator consists of:
- **Multi-step form** with 5 steps
- **Real-time validation** and progress tracking
- **Custom date picker** (Flatpickr)
- **Quote calculation API** (serverless function)
- **Professional quote display** with detailed breakdown

## 📁 File Structure

```
your-project/
├── calculateur.html          # Main calculator page
├── api/
│   └── calculate-quote.js    # Serverless function for calculations
├── css/
│   ├── normalize.css         # CSS reset
│   ├── webflow.css          # Base styles
│   └── your-custom.css      # Your project styles
├── js/
│   └── webflow.js           # Base JavaScript
└── images/
    └── [your-images]        # Your project images
```

## 🔧 Integration Steps

### Step 1: Copy Core Files

1. **Copy `calculateur.html`** to your project
2. **Copy `api/calculate-quote.js`** to your project's API directory
3. **Ensure you have** the required CSS and JS dependencies

### Step 2: Update Dependencies

Add these CDN links to your HTML head:

```html
<!-- Flatpickr CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

<!-- jQuery (if not already included) -->
<script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js"></script>

<!-- Flatpickr JS -->
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
```

### Step 3: Update Navigation

Update your navigation links to point to `calculateur.html`:

```html
<a href="calculateur.html">Calculateur</a>
```

## 🎨 Color Customization

### Current Color Scheme
```css
/* Current colors in the calculator */
--primary-bg: #1a1a1a;        /* Dark background */
--secondary-bg: #2a2a2a;      /* Input backgrounds */
--accent-color: #f58220;      /* Orange accent */
--text-primary: #ffffff;      /* White text */
--text-secondary: #888888;    /* Gray text */
--border-color: #555555;      /* Border color */
```

### How to Change Colors

**1. Update CSS Variables (Recommended)**

Add this to your CSS file:

```css
:root {
  /* Your brand colors */
  --primary-bg: #your-dark-bg;
  --secondary-bg: #your-input-bg;
  --accent-color: #your-brand-color;
  --text-primary: #your-text-color;
  --text-secondary: #your-gray-text;
  --border-color: #your-border-color;
}
```

**2. Find and Replace Colors**

Search and replace these hex codes in `calculateur.html`:

| Current Color | Usage | Replace With |
|---------------|-------|--------------|
| `#1a1a1a` | Main backgrounds, quote container | Your dark background |
| `#2a2a2a` | Input backgrounds, form elements | Your secondary background |
| `#f58220` | Accent color, buttons, highlights | Your brand color |
| `#ffffff` | Primary text, labels | Your text color |
| `#888888` | Secondary text, descriptions | Your gray text |
| `#555555` | Borders, separators | Your border color |

### Color Replacement Examples

**For a Blue Theme:**
```css
--primary-bg: #0f1419;
--secondary-bg: #1a2332;
--accent-color: #3b82f6;
--text-primary: #ffffff;
--text-secondary: #94a3b8;
--border-color: #334155;
```

**For a Green Theme:**
```css
--primary-bg: #0f1b0f;
--secondary-bg: #1a2e1a;
--accent-color: #10b981;
--text-primary: #ffffff;
--text-secondary: #9ca3af;
--border-color: #374151;
```

## 🔌 API Configuration

### Serverless Function Setup

**For Vercel:**
1. Create `api/calculate-quote.js`
2. Ensure `vercel.json` is configured:

```json
{
  "functions": {
    "api/calculate-quote.js": {
      "runtime": "nodejs18.x"
    }
  }
}
```

**For Netlify:**
1. Create `netlify/functions/calculate-quote.js`
2. Update the fetch URL in JavaScript:

```javascript
// Change this line in calculateur.html
const response = await fetch('/api/calculate-quote', {
  // to this for Netlify:
const response = await fetch('/.netlify/functions/calculate-quote', {
```

### API Endpoint Configuration

The API expects this data structure:

```javascript
{
  "Multi-Form-11-Name": "John Doe",
  "Multi-Form-11-Email": "john@example.com",
  "Multi-Form-11-Service": "residential",
  "Multi-Form-11-Residence": "family-house",
  "Multi-Form-11-Distance": "50",
  "Multi-form-11-Services[]": ["packing", "assembly"],
  "Multi-form-11-Complex[]": ["piano"],
  "Multi-form-11-Floors": "2nd-floor",
  "Multi-Form-11-Country": "Montreal",
  "Multi-Form-11-Date": "15/12/2024"
}
```

## 📝 Form Structure

### Step 1: Personal Information
```html
<input name="Multi-Form-11-Name" type="text" required>
<input name="Multi-Form-11-Email" type="email" required>
```

### Step 2: Service Type
```html
<input name="Multi-Form-11-Service" type="radio" value="residential">
<input name="Multi-Form-11-Service" type="radio" value="commercial">
```

### Step 3: Residence Type
```html
<select name="Multi-Form-11-Residence">
  <option value="apartment">Appartement</option>
  <option value="family-house">Maison familiale</option>
  <!-- etc. -->
</select>
```

### Step 4: Additional Services
```html
<input name="Multi-form-11-Services[]" type="checkbox" value="packing">
<input name="Multi-form-11-Services[]" type="checkbox" value="assembly">
<!-- etc. -->
```

### Step 5: Final Details
```html
<input name="Multi-Form-11-Distance" type="number">
<input name="Multi-form-11-Floors" type="radio" value="ground-floor">
<input name="Multi-Form-11-Country" type="select">
<input name="Multi-Form-11-Date" type="text" class="date-picker-input">
```

## ⚙️ JavaScript Logic

### Key Functions to Understand

**1. Multi-step Navigation:**
```javascript
function nextStep() {
  if (validateCurrentStep()) {
    currentStep++;
    showStep(currentStep);
    updateProgress();
  }
}
```

**2. Form Validation:**
```javascript
function validateCurrentStep() {
  // Validates required fields for each step
  // Returns true if valid, false if invalid
}
```

**3. Quote Calculation:**
```javascript
// Sends form data to API and displays result
const response = await fetch('/api/calculate-quote', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

**4. Date Picker Initialization:**
```javascript
flatpickr("#Multi-Form-11-Date", {
  dateFormat: "d/m/Y",
  locale: "fr",
  allowInput: false,
  clickOpens: true,
  placeholder: "Sélectionner une date"
});
```

## 🎨 Styling Guide

### CSS Classes to Customize

**Form Elements:**
```css
.form_input                    /* All input fields */
.date-picker-input            /* Date picker input */
.form_select                  /* Dropdown selects */
.form_checkbox                /* Checkboxes */
.form_radio                   /* Radio buttons */
.button                       /* Buttons */
```

**Quote Display:**
```css
.form_message-success         /* Quote container */
.form_message-success h3      /* Main title */
.form_message-success h4      /* Section titles */
```

**Progress Bar:**
```css
.multi-form11_progress        /* Progress bar background */
.multi-form11_progress-bar    /* Progress bar fill */
```

### Flatpickr Calendar Styling

Customize the date picker calendar:

```css
.flatpickr-calendar {
  background: var(--primary-bg) !important;
  border: 1px solid var(--border-color) !important;
  color: var(--text-primary) !important;
}

.flatpickr-day.selected {
  background: var(--accent-color) !important;
  color: var(--text-primary) !important;
}
```

## ✅ Testing Checklist

### Functionality Tests
- [ ] All form steps navigate correctly
- [ ] Validation works on each step
- [ ] Date picker opens and selects dates
- [ ] Form submits and shows quote
- [ ] Progress bar updates correctly
- [ ] All radio buttons and checkboxes work

### Visual Tests
- [ ] Colors match your brand
- [ ] Text is readable (good contrast)
- [ ] Form elements are properly styled
- [ ] Quote display looks professional
- [ ] Responsive on mobile devices

### Integration Tests
- [ ] API endpoint responds correctly
- [ ] Form data is sent properly
- [ ] Quote calculation is accurate
- [ ] Error handling works
- [ ] Navigation links work

## 🚀 Deployment

### Vercel Deployment
1. Connect your repository to Vercel
2. Ensure `vercel.json` is configured
3. Deploy - the API will work automatically

### Netlify Deployment
1. Connect your repository to Netlify
2. Move API function to `netlify/functions/`
3. Update fetch URL in JavaScript
4. Deploy

### Custom Server
1. Set up your server to handle the API endpoint
2. Update the fetch URL in the JavaScript
3. Ensure CORS is configured if needed

## 🔧 Troubleshooting

### Common Issues

**Date Picker Not Working:**
- Check if Flatpickr CSS/JS is loaded
- Verify the input has the correct ID
- Check browser console for errors

**Form Not Submitting:**
- Verify all required fields are filled
- Check if API endpoint is accessible
- Look for JavaScript errors in console

**Styling Issues:**
- Ensure your CSS overrides are loaded after base styles
- Check for conflicting CSS rules
- Use browser dev tools to inspect elements

**API Errors:**
- Verify the serverless function is deployed
- Check function logs for errors
- Ensure request format matches expected structure

## 📞 Support

For questions or issues with integration:
1. Check this documentation first
2. Review the original `calculateur.html` for reference
3. Test with the original color scheme first
4. Gradually apply your custom colors

---

**Note:** This calculator is designed to be easily customizable while maintaining its core functionality. The key is to preserve the JavaScript logic and form structure while adapting the visual styling to match your brand.
