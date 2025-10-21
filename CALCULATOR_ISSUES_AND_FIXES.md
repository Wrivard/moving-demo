# 🔧 Moving Calculator - Issues & Fixes Reference

This document contains all the issues we encountered during development and their solutions. Use this as a reference when implementing the calculator in other projects.

## 📋 Table of Contents

1. [Multi-Step Form Issues](#multi-step-form-issues)
2. [Radio Button Problems](#radio-button-problems)
3. [Input Field Issues](#input-field-issues)
4. [Date Picker Problems](#date-picker-problems)
5. [Color & Styling Issues](#color--styling-issues)
6. [Navigation Issues](#navigation-issues)
7. [Quote Display Issues](#quote-display-issues)
8. [Form Validation Issues](#form-validation-issues)
9. [CSS Override Solutions](#css-override-solutions)

---

## 🚨 Multi-Step Form Issues

### Issue: All Steps Visible at Once
**Problem:** All form steps were displaying simultaneously instead of one at a time.

**Solution:**
```css
/* Add to CSS */
[data-form="step"] {
  display: none !important;
}

[data-form="step"]:first-child {
  display: block !important;
}
```

**JavaScript Fix:**
```javascript
function showStep(stepNumber) {
  const steps = document.querySelectorAll('[data-form="step"]');
  steps.forEach((step, index) => {
    step.style.display = index === stepNumber ? 'block' : 'none';
  });
}
```

### Issue: Progress Bar Not Updating
**Problem:** Progress bar stuck at 50% on step 5/5.

**Solution:**
```javascript
function updateProgress() {
  const progressBar = document.querySelector('.multi-form11_progress-bar');
  const totalSteps = 5;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  progressBar.style.width = progress + '%';
}
```

---

## 🔘 Radio Button Problems

### Issue: Radio Buttons Not Working/Selectable
**Problem:** Radio buttons appeared but couldn't be clicked or selected.

**Solution:**
```css
/* Fix radio button functionality */
.form_radio {
  position: relative !important;
  cursor: pointer !important;
}

.form_radio input[type="radio"] {
  position: absolute !important;
  opacity: 0 !important;
  cursor: pointer !important;
}

.form_radio .w-form-label {
  cursor: pointer !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}
```

### Issue: Default Radio Button Checked
**Problem:** Step 2 had a radio button pre-selected by default.

**Solution:**
```html
<!-- Remove this class from default radio buttons -->
<label class="form_radio w-radio" data-wf-field="Multi-Form-11-Service">
  <!-- Remove: is-active-inputactive class -->
  <input type="radio" name="Multi-Form-11-Service" value="residential">
  <span class="w-form-label">Déménagement résidentiel</span>
</label>
```

### Issue: Radio Button Visual Styling
**Problem:** Black text on black background, poor contrast, weird hover states.

**Solution:**
```css
/* Shadcn-style radio buttons */
.form_radio {
  position: relative !important;
  cursor: pointer !important;
  margin-bottom: 12px !important;
}

.form_radio input[type="radio"] {
  position: absolute !important;
  opacity: 0 !important;
  cursor: pointer !important;
}

.form_radio .w-form-label {
  cursor: pointer !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  color: #ffffff !important;
  font-size: 14px !important;
  line-height: 1.5 !important;
}

/* Custom radio button appearance */
.form_radio .w-form-label::before {
  content: '' !important;
  width: 16px !important;
  height: 16px !important;
  border: 2px solid #555 !important;
  border-radius: 50% !important;
  background: transparent !important;
  margin-right: 8px !important;
  transition: all 0.2s ease !important;
}

.form_radio input[type="radio"]:checked + .w-form-label::before {
  border-color: #f58220 !important;
  background: #f58220 !important;
}

.form_radio input[type="radio"]:checked + .w-form-label::after {
  content: '' !important;
  position: absolute !important;
  left: 4px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  width: 6px !important;
  height: 6px !important;
  border-radius: 50% !important;
  background: #ffffff !important;
}
```

---

## 📝 Input Field Issues

### Issue: Text Overlapping Icons
**Problem:** Email and date input text overlapping with icons.

**Solution:**
```css
/* Fix input field icons */
.form_input[type="email"] {
  padding-left: 45px !important;
}

.form_input[type="date"] {
  padding-left: 12px !important;
  padding-right: 12px !important;
}
```

### Issue: Black Text on Dark Background
**Problem:** Input text invisible due to poor contrast.

**Solution:**
```css
/* Input field styling */
.form_input {
  color: #ffffff !important;
  background-color: #2a2a2a !important;
  border: 1px solid #555 !important;
  border-radius: 6px !important;
  padding: 8px 12px !important;
  font-size: 14px !important;
  height: 40px !important;
  transition: all 0.2s ease !important;
}

.form_input:focus {
  outline: none !important;
  border-color: #f58220 !important;
  box-shadow: 0 0 0 2px rgba(245, 130, 32, 0.2) !important;
}

.form_input::placeholder {
  color: #888 !important;
}
```

### Issue: White Text on White Background in Dropdowns
**Problem:** Dropdown options invisible due to white text on white background.

**Solution:**
```css
/* Select dropdown styling */
.form_select {
  color: #ffffff !important;
  background-color: #2a2a2a !important;
  border: 1px solid #555 !important;
  border-radius: 6px !important;
  padding: 8px 12px !important;
  font-size: 14px !important;
  height: 40px !important;
}

.form_select option {
  background-color: #2a2a2a !important;
  color: #ffffff !important;
  padding: 8px !important;
}
```

---

## 📅 Date Picker Problems

### Issue: Date Picker Not Working
**Problem:** Native date picker had functionality issues.

**Solution - Flatpickr Implementation:**
```html
<!-- Add to head -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

<!-- Add before closing body tag -->
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
```

```html
<!-- Replace date input -->
<input class="date-picker-input" type="text" name="Multi-Form-11-Date" id="Multi-Form-11-Date" placeholder="Sélectionner une date" required="" readonly="">
```

```javascript
// Initialize Flatpickr
flatpickr("#Multi-Form-11-Date", {
  dateFormat: "d/m/Y",
  locale: "fr",
  allowInput: false,
  clickOpens: true,
  placeholder: "Sélectionner une date"
});
```

### Issue: Date Picker Styling
**Problem:** Calendar didn't match site's dark theme.

**Solution:**
```css
/* Flatpickr dark theme styling */
.flatpickr-calendar {
  background: #1a1a1a !important;
  border: 1px solid #555 !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
  color: #ffffff !important;
}

.flatpickr-months {
  background: #2a2a2a !important;
  border-radius: 8px 8px 0 0 !important;
  padding: 10px !important;
}

.flatpickr-day.selected {
  background: #f58220 !important;
  color: #ffffff !important;
  border-color: #f58220 !important;
}

.flatpickr-day.today {
  border-color: #f58220 !important;
  color: #f58220 !important;
}
```

---

## 🎨 Color & Styling Issues

### Issue: Blue Colors in Form
**Problem:** Form used blue colors instead of brand colors.

**Solution:**
```css
/* Replace all blue colors with brand colors */
/* Old: #4d65ff, #3b82f6, etc. */
/* New: #f58220 (brand orange) */

.button {
  background-color: #f58220 !important;
  color: #ffffff !important;
  border: none !important;
}

.button:hover {
  background-color: #e6731a !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 4px 12px rgba(245, 130, 32, 0.3) !important;
}
```

### Issue: Inconsistent Hover States
**Problem:** Hover effects didn't match brand colors.

**Solution:**
```css
/* Consistent hover states */
.form_input:hover {
  border-color: #777 !important;
}

.form_select:hover {
  border-color: #777 !important;
}

.form_radio:hover .w-form-label::before {
  border-color: #777 !important;
}
```

### Issue: Progress Bar Colors
**Problem:** Progress bar didn't use brand colors.

**Solution:**
```css
.multi-form11_progress-bar {
  background-color: #f58220 !important;
}

.multi-form11_progress {
  background-color: #555 !important;
}
```

---

## 🧭 Navigation Issues

### Issue: Navigation Links Not Working
**Problem:** All navigation links pointed to "#" instead of actual pages.

**Solution:**
```html
<!-- Fix navigation links -->
<a href="index.html" class="navbar3_logo-link w-nav-brand">
<a href="index.html" class="navbar3_link w-nav-link">Accueil</a>
<a href="calculateur.html" class="navbar3_link w-nav-link">Calculateur</a>
<a href="soumission-contact.html" class="button w-button">Soumission</a>
```

### Issue: Current Page Link Not Visible
**Problem:** Current page link was dark gray and hard to see.

**Solution:**
```css
.navbar3_link.w-nav-link.w--current {
  color: #ffffff !important;
}
```

---

## 📊 Quote Display Issues

### Issue: Text Alignment Problems
**Problem:** Quote text not properly aligned, messy layout.

**Solution:**
```css
/* Quote display styling */
.form_message-success {
  background-color: #1a1a1a !important;
  color: #ffffff !important;
  padding: 40px !important;
  margin: 20px 0 !important;
  border-radius: 8px !important;
  text-align: left !important;
}

.form_message-success h3,
.form_message-success h4 {
  text-align: left !important;
}

.form_message-success p {
  text-align: left !important;
}
```

### Issue: Price Display Inconsistency
**Problem:** Some prices were white, others were orange.

**Solution:**
```css
/* Consistent price styling */
.price-display {
  color: #f58220 !important;
  font-weight: bold !important;
}

.total-price {
  color: #f58220 !important;
  font-weight: bold !important;
}
```

### Issue: Background Color Inconsistency
**Problem:** Different background colors causing weird white space.

**Solution:**
```css
/* Remove inconsistent backgrounds */
.form_message-success-wrapper {
  background-color: #1a1a1a !important;
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
  border-radius: 0 !important;
}
```

---

## ✅ Form Validation Issues

### Issue: Validation Not Working
**Problem:** Form allowed submission without required fields.

**Solution:**
```javascript
function validateCurrentStep() {
  const currentStepElement = document.querySelectorAll('[data-form="step"]')[currentStep];
  const requiredFields = currentStepElement.querySelectorAll('[required]');
  
  for (let field of requiredFields) {
    if (!field.value.trim()) {
      showFieldError(field, 'Ce champ est requis');
      return false;
    }
  }
  return true;
}

function nextStep() {
  if (validateCurrentStep()) {
    currentStep++;
    showStep(currentStep);
    updateProgress();
  }
}
```

### Issue: Email Validation
**Problem:** Invalid emails were accepted.

**Solution:**
```javascript
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// In validation
if (field.type === 'email' && !isValidEmail(field.value)) {
  showFieldError(field, 'Veuillez entrer un email valide');
  return false;
}
```

---

## 🎯 CSS Override Solutions

### Issue: Webflow Styles Overriding Custom Styles
**Problem:** Webflow's default styles were interfering with custom styling.

**Solution:**
```css
/* Use !important for critical overrides */
.form_input {
  color: #ffffff !important;
  background-color: #2a2a2a !important;
  border: 1px solid #555 !important;
}

/* Target specific Webflow classes */
.w-form-label {
  color: #ffffff !important;
}

.w-radio {
  margin-bottom: 12px !important;
}

/* Override Webflow's default focus states */
.w-input:focus {
  border-color: #f58220 !important;
  box-shadow: 0 0 0 2px rgba(245, 130, 32, 0.2) !important;
}
```

### Issue: Form Message Styling
**Problem:** Success/error messages didn't match site theme.

**Solution:**
```css
.form_message-success-wrapper {
  background-color: #1a1a1a !important;
  color: #ffffff !important;
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
  border-radius: 0 !important;
}

.form_message-success {
  background-color: #1a1a1a !important;
  color: #ffffff !important;
  padding: 40px !important;
  margin: 20px 0 !important;
  border-radius: 8px !important;
  text-align: left !important;
}

/* Hide error messages for demo */
.form_message-error-wrapper {
  display: none !important;
}
```

---

## 🔧 Complete CSS Override Template

Here's a complete CSS template to add to any project:

```css
/* ===== MOVING CALCULATOR FIXES ===== */

/* Multi-step form */
[data-form="step"] {
  display: none !important;
}

[data-form="step"]:first-child {
  display: block !important;
}

/* Progress bar */
.multi-form11_progress-bar {
  background-color: #f58220 !important;
}

.multi-form11_progress {
  background-color: #555 !important;
}

/* Input fields */
.form_input {
  color: #ffffff !important;
  background-color: #2a2a2a !important;
  border: 1px solid #555 !important;
  border-radius: 6px !important;
  padding: 8px 12px !important;
  font-size: 14px !important;
  height: 40px !important;
  transition: all 0.2s ease !important;
}

.form_input:focus {
  outline: none !important;
  border-color: #f58220 !important;
  box-shadow: 0 0 0 2px rgba(245, 130, 32, 0.2) !important;
}

.form_input::placeholder {
  color: #888 !important;
}

/* Email input icon spacing */
.form_input[type="email"] {
  padding-left: 45px !important;
}

/* Select dropdowns */
.form_select {
  color: #ffffff !important;
  background-color: #2a2a2a !important;
  border: 1px solid #555 !important;
  border-radius: 6px !important;
  padding: 8px 12px !important;
  font-size: 14px !important;
  height: 40px !important;
}

.form_select option {
  background-color: #2a2a2a !important;
  color: #ffffff !important;
  padding: 8px !important;
}

/* Radio buttons */
.form_radio {
  position: relative !important;
  cursor: pointer !important;
  margin-bottom: 12px !important;
}

.form_radio input[type="radio"] {
  position: absolute !important;
  opacity: 0 !important;
  cursor: pointer !important;
}

.form_radio .w-form-label {
  cursor: pointer !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  color: #ffffff !important;
  font-size: 14px !important;
  line-height: 1.5 !important;
}

.form_radio .w-form-label::before {
  content: '' !important;
  width: 16px !important;
  height: 16px !important;
  border: 2px solid #555 !important;
  border-radius: 50% !important;
  background: transparent !important;
  margin-right: 8px !important;
  transition: all 0.2s ease !important;
}

.form_radio input[type="radio"]:checked + .w-form-label::before {
  border-color: #f58220 !important;
  background: #f58220 !important;
}

.form_radio input[type="radio"]:checked + .w-form-label::after {
  content: '' !important;
  position: absolute !important;
  left: 4px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  width: 6px !important;
  height: 6px !important;
  border-radius: 50% !important;
  background: #ffffff !important;
}

/* Buttons */
.button {
  background-color: #f58220 !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 6px !important;
  padding: 12px 24px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
}

.button:hover {
  background-color: #e6731a !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 4px 12px rgba(245, 130, 32, 0.3) !important;
}

/* Navigation */
.navbar3_link.w-nav-link.w--current {
  color: #ffffff !important;
}

/* Quote display */
.form_message-success-wrapper {
  background-color: #1a1a1a !important;
  color: #ffffff !important;
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
  border-radius: 0 !important;
}

.form_message-success {
  background-color: #1a1a1a !important;
  color: #ffffff !important;
  padding: 40px !important;
  margin: 20px 0 !important;
  border-radius: 8px !important;
  text-align: left !important;
}

.form_message-success h3,
.form_message-success h4 {
  text-align: left !important;
}

.form_message-success p {
  text-align: left !important;
}

/* Hide error messages for demo */
.form_message-error-wrapper {
  display: none !important;
}

/* Date picker */
.date-picker-input {
  width: 100% !important;
  padding: 8px 12px !important;
  background-color: #2a2a2a !important;
  border: 1px solid #555 !important;
  border-radius: 6px !important;
  color: #ffffff !important;
  font-size: 14px !important;
  height: 40px !important;
  transition: all 0.2s ease !important;
  cursor: pointer !important;
}

.date-picker-input:focus {
  outline: none !important;
  border-color: #f58220 !important;
  box-shadow: 0 0 0 2px rgba(245, 130, 32, 0.2) !important;
}

.date-picker-input:hover {
  border-color: #777 !important;
}

.date-picker-input::placeholder {
  color: #888 !important;
}

/* Flatpickr dark theme */
.flatpickr-calendar {
  background: #1a1a1a !important;
  border: 1px solid #555 !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
  color: #ffffff !important;
}

.flatpickr-months {
  background: #2a2a2a !important;
  border-radius: 8px 8px 0 0 !important;
  padding: 10px !important;
}

.flatpickr-day.selected {
  background: #f58220 !important;
  color: #ffffff !important;
  border-color: #f58220 !important;
}

.flatpickr-day.today {
  border-color: #f58220 !important;
  color: #f58220 !important;
}
```

---

## 🚀 Quick Implementation Checklist

When implementing in a new project:

- [ ] Add the complete CSS override template
- [ ] Include Flatpickr CSS and JS files
- [ ] Update color variables to match new brand
- [ ] Test all form steps navigation
- [ ] Verify radio buttons work and look correct
- [ ] Check input field styling and icon spacing
- [ ] Test date picker functionality
- [ ] Verify quote display formatting
- [ ] Test form validation
- [ ] Check navigation links
- [ ] Test responsive design

---

**Note:** Replace `#f58220` with your brand's accent color throughout the CSS template.
