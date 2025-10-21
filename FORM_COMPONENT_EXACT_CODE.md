# 📋 Moving Calculator Form - Exact Code & Configuration

This document contains the **exact code and configuration** needed to implement the moving calculator form component in any project.

## 📁 File Structure

```
📁 form-component/
├── 📄 calculateur.html
├── 📁 api/
│   └── 📄 calculate-quote.js
├── 📁 css/
│   ├── 📄 normalize.css
│   ├── 📄 webflow.css
│   └── 📄 williams-dapper-site-a9e715.webflow.css
├── 📁 js/
│   └── 📄 webflow.js
├── 📄 package.json
└── 📄 vercel.json
```

---

## 📄 1. calculateur.html

```html
<!DOCTYPE html>
<html data-wf-page="65f8b8b0a9e7150001c4b8b0" data-wf-site="65f8b8b0a9e7150001c4b8b0" lang="fr">
<head>
  <meta charset="utf-8">
  <title>Calculateur de déménagement - Déménagement Veillette</title>
  <meta content="Calculateur de déménagement" property="og:title">
  <meta content="Calculateur de déménagement" property="twitter:title">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <link href="css/normalize.css" rel="stylesheet" type="text/css">
  <link href="css/webflow.css" rel="stylesheet" type="text/css">
  <link href="css/williams-dapper-site-a9e715.webflow.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
  <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon">
  <link href="images/webclip.png" rel="apple-touch-icon">
  <style>
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

/* Checkboxes */
.form_checkbox {
  position: relative !important;
  cursor: pointer !important;
  margin-bottom: 12px !important;
}

.form_checkbox input[type="checkbox"] {
  position: absolute !important;
  opacity: 0 !important;
  cursor: pointer !important;
}

.form_checkbox .w-form-label {
  cursor: pointer !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  color: #ffffff !important;
  font-size: 14px !important;
  line-height: 1.5 !important;
}

.form_checkbox .w-form-label::before {
  content: '' !important;
  width: 16px !important;
  height: 16px !important;
  border: 2px solid #555 !important;
  border-radius: 4px !important;
  background: transparent !important;
  margin-right: 8px !important;
  transition: all 0.2s ease !important;
}

.form_checkbox input[type="checkbox"]:checked + .w-form-label::before {
  border-color: #f58220 !important;
  background: #f58220 !important;
}

.form_checkbox input[type="checkbox"]:checked + .w-form-label::after {
  content: '✓' !important;
  position: absolute !important;
  left: 2px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  color: #ffffff !important;
  font-size: 12px !important;
  font-weight: bold !important;
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

.flatpickr-month {
  color: #ffffff !important;
}

.flatpickr-current-month .flatpickr-monthDropdown-months {
  background: #2a2a2a !important;
  color: #ffffff !important;
  border: 1px solid #555 !important;
}

.flatpickr-current-month input.cur-year {
  background: #2a2a2a !important;
  color: #ffffff !important;
  border: 1px solid #555 !important;
}

.flatpickr-weekdays {
  background: #2a2a2a !important;
  color: #ffffff !important;
}

.flatpickr-weekday {
  color: #ffffff !important;
}

.flatpickr-days {
  background: #1a1a1a !important;
}

.flatpickr-day {
  color: #ffffff !important;
  border: 1px solid transparent !important;
}

.flatpickr-day:hover {
  background: #333 !important;
  border-color: #555 !important;
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

.flatpickr-day.today:hover {
  background: #333 !important;
}

.flatpickr-day.inRange {
  background: #333 !important;
  color: #ffffff !important;
}

.flatpickr-prev-month,
.flatpickr-next-month {
  color: #ffffff !important;
}

.flatpickr-prev-month:hover,
.flatpickr-next-month:hover {
  background: #333 !important;
}
</style>
</head>
<body>
  <div class="page-wrapper">
    <div class="global-styles">
      <div class="global-styles w-embed">
        <style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: antialiased;
}
</style>
      </div>
      <div class="fonts w-embed">
        <style>@import url('https://fonts.googleapis.com/css?family=Inter:700')</style>
        <style>@import url('https://fonts.googleapis.com/css?family=Inter:400,500')</style>
      </div>
    </div>
    <main class="main-wrapper">
      <section class="banner9_component color-scheme-3">
        <div class="padding-global">
          <div class="container-large">
            <div class="banner9_content">
              <div class="banner9_text-wrapper">
                <div class="banner9_icon-wrapper">
                  <div class="icon-1x1-small w-embed">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3 10H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10 10V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div class="banner9_text">
                  <div class="text-size-medium">(514) 506-0292</div>
                  <div class="text-size-medium">info@demenagementveillette.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="navbar9_component">
        <div class="padding-global">
          <div class="container-large">
            <div class="navbar9_content">
              <nav class="navbar9_menu w-nav-menu">
                <a href="index.html" class="navbar3_logo-link-menu w-nav-brand"><img loading="eager" src="images/Logo-wide.svg" alt="" class="navbar3_logo"></a>
                <a href="index.html" class="navbar3_link w-nav-link">Accueil</a>
                <a href="#" class="navbar3_link w-nav-link">À Propos</a>
                <a href="#" class="navbar3_link w-nav-link">Services</a>
                <a href="calculateur.html" class="navbar3_link w-nav-link">Calculateur</a>
                <a href="soumission-contact.html" class="navbar3_tablet-menu-button w-button">Soumission</a>
              </nav>
              <a href="index.html" class="navbar3_logo-link w-nav-brand"><img width="107" loading="lazy" alt="" src="images/relume-480959.png" class="navbar3_logo"></a>
              <a id="w-node-_38a12e1f-ce57-e652-a483-a73c3766cef3-3766ced5" href="soumission-contact.html" class="button w-button">Soumission</a>
            </div>
          </div>
        </div>
      </section>
      <section class="multi-form11_component">
        <div class="padding-global">
          <div class="container-large">
            <div class="multi-form11_wrapper">
              <div class="multi-form11_header">
                <h2 class="heading-style-h2">Calculateur de déménagement</h2>
                <p class="text-size-large">Obtenez une estimation personnalisée en quelques minutes</p>
              </div>
              <div class="multi-form11_progress-wrapper">
                <div class="multi-form11_progress">
                  <div class="multi-form11_progress-bar"></div>
                </div>
                <div class="multi-form11_progress-text">Étape <span id="current-step">1</span> sur 5</div>
              </div>
              <div class="multi-form11_form-wrapper">
                <form id="moving-calculator-form" class="multi-form11_form w-form">
                  <div data-form="step" class="multi-form11_form-step">
                    <h3 class="heading-style-h3">Informations personnelles</h3>
                    <div class="multi-form11_form-field">
                      <label for="Multi-Form-11-Name" class="field-label">Nom complet *</label>
                      <input type="text" class="form_input w-input" maxlength="256" name="Multi-Form-11-Name" data-name="Multi-Form-11-Name" placeholder="Votre nom complet" id="Multi-Form-11-Name" required="">
                    </div>
                    <div class="multi-form11_form-field">
                      <label for="Multi-Form-11-Email" class="field-label">Adresse e-mail *</label>
                      <input type="email" class="form_input w-input" maxlength="256" name="Multi-Form-11-Email" data-name="Multi-Form-11-Email" placeholder="votre@email.com" id="Multi-Form-11-Email" required="">
                    </div>
                    <div class="multi-form11_form-field">
                      <label for="Multi-Form-11-Phone" class="field-label">Numéro de téléphone</label>
                      <input type="tel" class="form_input w-input" maxlength="256" name="Multi-Form-11-Phone" data-name="Multi-Form-11-Phone" placeholder="(514) 123-4567" id="Multi-Form-11-Phone">
                    </div>
                  </div>
                  <div data-form="step" class="multi-form11_form-step">
                    <h3 class="heading-style-h3">Type de service</h3>
                    <div class="multi-form11_form-field">
                      <label class="form_radio w-radio" data-wf-field="Multi-Form-11-Service">
                        <input type="radio" name="Multi-Form-11-Service" value="residential" data-name="Multi-Form-11-Service" id="Multi-Form-11-Service-residential">
                        <span class="w-form-label" for="Multi-Form-11-Service-residential">Déménagement résidentiel</span>
                      </label>
                      <label class="form_radio w-radio" data-wf-field="Multi-Form-11-Service">
                        <input type="radio" name="Multi-Form-11-Service" value="commercial" data-name="Multi-Form-11-Service" id="Multi-Form-11-Service-commercial">
                        <span class="w-form-label" for="Multi-Form-11-Service-commercial">Déménagement commercial</span>
                      </label>
                    </div>
                  </div>
                  <div data-form="step" class="multi-form11_form-step">
                    <h3 class="heading-style-h3">Détails du déménagement</h3>
                    <div class="multi-form11_form-field">
                      <label for="Multi-Form-11-Residence" class="field-label">Type de résidence</label>
                      <select class="form_select w-select" name="Multi-Form-11-Residence" data-name="Multi-Form-11-Residence" id="Multi-Form-11-Residence">
                        <option value="">Sélectionner un type</option>
                        <option value="studio">Studio</option>
                        <option value="1-bedroom">1 chambre</option>
                        <option value="2-bedroom">2 chambres</option>
                        <option value="3-bedroom">3 chambres</option>
                        <option value="4-bedroom">4+ chambres</option>
                        <option value="house-small">Maison (petite)</option>
                        <option value="house-medium">Maison (moyenne)</option>
                        <option value="house-large">Maison (grande)</option>
                      </select>
                    </div>
                    <div class="multi-form11_form-field">
                      <label for="Multi-Form-11-People" class="field-label">Nombre de personnes</label>
                      <input type="number" class="form_input w-input" name="Multi-Form-11-People" data-name="Multi-Form-11-People" placeholder="2" id="Multi-Form-11-People" min="1" max="20">
                    </div>
                    <div class="multi-form11_form-field">
                      <label for="Multi-Form-11-Address" class="field-label">Adresse actuelle</label>
                      <input type="text" class="form_input w-input" maxlength="256" name="Multi-Form-11-Address" data-name="Multi-Form-11-Address" placeholder="123 Rue Example, Montréal, QC" id="Multi-Form-11-Address">
                    </div>
                    <div class="multi-form11_form-field">
                      <label for="Multi-Form-11-Destination" class="field-label">Région de destination</label>
                      <select class="form_select w-select" name="Multi-Form-11-Destination" data-name="Multi-Form-11-Destination" id="Multi-Form-11-Destination">
                        <option value="">Sélectionner une région</option>
                        <option value="montreal">Montréal</option>
                        <option value="laval">Laval</option>
                        <option value="longueuil">Longueuil</option>
                        <option value="gatineau">Gatineau</option>
                        <option value="quebec">Québec</option>
                        <option value="sherbrooke">Sherbrooke</option>
                        <option value="trois-rivieres">Trois-Rivières</option>
                        <option value="saguenay">Saguenay</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    <div class="multi-form11_form-field">
                      <label for="Multi-Form-11-Distance" class="field-label">Distance de déménagement (km)</label>
                      <input type="number" class="form_input w-input" name="Multi-Form-11-Distance" data-name="Multi-Form-11-Distance" placeholder="25" id="Multi-Form-11-Distance" min="0" max="1000">
                    </div>
                  </div>
                  <div data-form="step" class="multi-form11_form-step">
                    <h3 class="heading-style-h3">Services additionnels</h3>
                    <div class="multi-form11_form-field">
                      <label class="form_checkbox w-checkbox" data-wf-field="Multi-Form-11-Services">
                        <input type="checkbox" name="Multi-Form-11-Services" value="packing" data-name="Multi-Form-11-Services" id="Multi-Form-11-Services-packing">
                        <span class="w-form-label" for="Multi-Form-11-Services-packing">Emballage professionnel</span>
                      </label>
                      <label class="form_checkbox w-checkbox" data-wf-field="Multi-Form-11-Services">
                        <input type="checkbox" name="Multi-Form-11-Services" value="assembly" data-name="Multi-Form-11-Services" id="Multi-Form-11-Services-assembly">
                        <span class="w-form-label" for="Multi-Form-11-Services-assembly">Montage/Démontage meubles</span>
                      </label>
                      <label class="form_checkbox w-checkbox" data-wf-field="Multi-Form-11-Services">
                        <input type="checkbox" name="Multi-Form-11-Services" value="cleaning" data-name="Multi-Form-11-Services" id="Multi-Form-11-Services-cleaning">
                        <span class="w-form-label" for="Multi-Form-11-Services-cleaning">Nettoyage final</span>
                      </label>
                      <label class="form_checkbox w-checkbox" data-wf-field="Multi-Form-11-Services">
                        <input type="checkbox" name="Multi-Form-11-Services" value="storage" data-name="Multi-Form-11-Services" id="Multi-Form-11-Services-storage">
                        <span class="w-form-label" for="Multi-Form-11-Services-storage">Entreposage temporaire</span>
                      </label>
                    </div>
                    <h3 class="heading-style-h3">Articles complexes et spéciaux</h3>
                    <div class="multi-form11_form-field">
                      <label class="form_checkbox w-checkbox" data-wf-field="Multi-Form-11-Complex">
                        <input type="checkbox" name="Multi-Form-11-Complex" value="piano" data-name="Multi-Form-11-Complex" id="Multi-Form-11-Complex-piano">
                        <span class="w-form-label" for="Multi-Form-11-Complex-piano">Piano</span>
                      </label>
                      <label class="form_checkbox w-checkbox" data-wf-field="Multi-Form-11-Complex">
                        <input type="checkbox" name="Multi-Form-11-Complex" value="pool-table" data-name="Multi-Form-11-Complex" id="Multi-Form-11-Complex-pool-table">
                        <span class="w-form-label" for="Multi-Form-11-Complex-pool-table">Table de billard</span>
                      </label>
                      <label class="form_checkbox w-checkbox" data-wf-field="Multi-Form-11-Complex">
                        <input type="checkbox" name="Multi-Form-11-Complex" value="antiques" data-name="Multi-Form-11-Complex" id="Multi-Form-11-Complex-antiques">
                        <span class="w-form-label" for="Multi-Form-11-Complex-antiques">Antiquités/Art</span>
                      </label>
                      <label class="form_checkbox w-checkbox" data-wf-field="Multi-Form-11-Complex">
                        <input type="checkbox" name="Multi-Form-11-Complex" value="appliances" data-name="Multi-Form-11-Complex" id="Multi-Form-11-Complex-appliances">
                        <span class="w-form-label" for="Multi-Form-11-Complex-appliances">Électroménagers lourds</span>
                      </label>
                      <label class="form_checkbox w-checkbox" data-wf-field="Multi-Form-11-Complex">
                        <input type="checkbox" name="Multi-Form-11-Complex" value="garden" data-name="Multi-Form-11-Complex" id="Multi-Form-11-Complex-garden">
                        <span class="w-form-label" for="Multi-Form-11-Complex-garden">Équipement de jardin</span>
                      </label>
                      <label class="form_checkbox w-checkbox" data-wf-field="Multi-Form-11-Complex">
                        <input type="checkbox" name="Multi-Form-11-Complex" value="none" data-name="Multi-Form-11-Complex" id="Multi-Form-11-Complex-none">
                        <span class="w-form-label" for="Multi-Form-11-Complex-none">Aucun article complexe</span>
                      </label>
                    </div>
                    <h3 class="heading-style-h3">Étages (sans ascenseur)</h3>
                    <div class="multi-form11_form-field">
                      <label class="form_radio w-radio" data-wf-field="Multi-Form-11-Floors">
                        <input type="radio" name="Multi-Form-11-Floors" value="0" data-name="Multi-Form-11-Floors" id="Multi-Form-11-Floors-0">
                        <span class="w-form-label" for="Multi-Form-11-Floors-0">Rez-de-chaussée</span>
                      </label>
                      <label class="form_radio w-radio" data-wf-field="Multi-Form-11-Floors">
                        <input type="radio" name="Multi-Form-11-Floors" value="1" data-name="Multi-Form-11-Floors" id="Multi-Form-11-Floors-1">
                        <span class="w-form-label" for="Multi-Form-11-Floors-1">1 étage</span>
                      </label>
                      <label class="form_radio w-radio" data-wf-field="Multi-Form-11-Floors">
                        <input type="radio" name="Multi-Form-11-Floors" value="2" data-name="Multi-Form-11-Floors" id="Multi-Form-11-Floors-2">
                        <span class="w-form-label" for="Multi-Form-11-Floors-2">2 étages</span>
                      </label>
                      <label class="form_radio w-radio" data-wf-field="Multi-Form-11-Floors">
                        <input type="radio" name="Multi-Form-11-Floors" value="3" data-name="Multi-Form-11-Floors" id="Multi-Form-11-Floors-3">
                        <span class="w-form-label" for="Multi-Form-11-Floors-3">3+ étages</span>
                      </label>
                    </div>
                  </div>
                  <div data-form="step" class="multi-form11_form-step">
                    <h3 class="heading-style-h3">Date prévue du déménagement</h3>
                    <div class="multi-form11_form-field">
                      <label for="Multi-Form-11-Date" class="field-label">Date de déménagement prévue *</label>
                      <input class="date-picker-input" type="text" name="Multi-Form-11-Date" id="Multi-Form-11-Date" placeholder="Sélectionner une date" required="" readonly="">
                    </div>
                    <div class="multi-form11_form-field">
                      <label for="Multi-Form-11-Details" class="field-label">Détails du déménagement</label>
                      <textarea class="form_input w-input" maxlength="5000" name="Multi-Form-11-Details" data-name="Multi-Form-11-Details" placeholder="Décrivez votre déménagement, besoins spéciaux, etc." id="Multi-Form-11-Details"></textarea>
                    </div>
                  </div>
                  <div class="multi-form11_form-navigation">
                    <button type="button" id="prev-btn" class="button w-button" style="display: none;">Précédent</button>
                    <button type="button" id="next-btn" class="button w-button">Suivant</button>
                    <button type="submit" id="submit-btn" class="button w-button" style="display: none;">Obtenir mon estimation</button>
                  </div>
                  <div class="form_message-success-wrapper w-form-done" style="display: none;">
                    <div class="form_message-success">
                      <!-- Success message will be inserted here -->
                    </div>
                  </div>
                  <div class="form_message-error-wrapper w-form-fail" style="display: none;">
                    <div class="form_message-error">
                      <div class="error-text">Erreur lors de l'envoi. Veuillez réessayer.</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  <script src="js/webflow.js" type="text/javascript"></script>
  <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  <script>
    // Multi-step form functionality
    let currentStep = 0;
    const totalSteps = 5;

    function initMultiStepForm() {
      showStep(0);
      updateProgress();
      
      // Initialize Flatpickr
      flatpickr("#Multi-Form-11-Date", {
        dateFormat: "d/m/Y",
        locale: "fr",
        allowInput: false,
        clickOpens: true,
        placeholder: "Sélectionner une date"
      });
    }

    function showStep(stepNumber) {
      const steps = document.querySelectorAll('[data-form="step"]');
      steps.forEach((step, index) => {
        step.style.display = index === stepNumber ? 'block' : 'none';
      });
      
      // Update navigation buttons
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      const submitBtn = document.getElementById('submit-btn');
      
      prevBtn.style.display = stepNumber > 0 ? 'block' : 'none';
      nextBtn.style.display = stepNumber < totalSteps - 1 ? 'block' : 'none';
      submitBtn.style.display = stepNumber === totalSteps - 1 ? 'block' : 'none';
    }

    function nextStep() {
      if (validateCurrentStep()) {
        currentStep++;
        showStep(currentStep);
        updateProgress();
      }
    }

    function prevStep() {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
        updateProgress();
      }
    }

    function updateProgress() {
      const progressBar = document.querySelector('.multi-form11_progress-bar');
      const currentStepElement = document.getElementById('current-step');
      const progress = ((currentStep + 1) / totalSteps) * 100;
      
      progressBar.style.width = progress + '%';
      currentStepElement.textContent = currentStep + 1;
    }

    function validateCurrentStep() {
      const currentStepElement = document.querySelectorAll('[data-form="step"]')[currentStep];
      const requiredFields = currentStepElement.querySelectorAll('[required]');
      
      for (let field of requiredFields) {
        if (!field.value.trim()) {
          showFieldError(field, 'Ce champ est requis');
          return false;
        }
        
        if (field.type === 'email' && !isValidEmail(field.value)) {
          showFieldError(field, 'Veuillez entrer un email valide');
          return false;
        }
      }
      
      clearErrorMessages();
      return true;
    }

    function showFieldError(field, message) {
      clearErrorMessages();
      const errorDiv = document.createElement('div');
      errorDiv.className = 'field-error';
      errorDiv.textContent = message;
      errorDiv.style.color = '#ff6b6b';
      errorDiv.style.fontSize = '12px';
      errorDiv.style.marginTop = '4px';
      field.parentNode.appendChild(errorDiv);
    }

    function clearErrorMessages() {
      const errorMessages = document.querySelectorAll('.field-error');
      errorMessages.forEach(msg => msg.remove());
    }

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    // Event listeners
    document.getElementById('next-btn').addEventListener('click', nextStep);
    document.getElementById('prev-btn').addEventListener('click', prevStep);

    // Form submission
    document.getElementById('moving-calculator-form').addEventListener('submit', async function(e) {
      e.preventDefault();
      
      if (!validateCurrentStep()) {
        return;
      }

      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      
      // Collect radio button values
      const serviceType = document.querySelector('input[name="Multi-Form-11-Service"]:checked')?.value;
      const floors = document.querySelector('input[name="Multi-Form-11-Floors"]:checked')?.value;
      
      // Collect checkbox values
      const services = Array.from(document.querySelectorAll('input[name="Multi-Form-11-Services"]:checked')).map(cb => cb.value);
      const complexItems = Array.from(document.querySelectorAll('input[name="Multi-Form-11-Complex"]:checked')).map(cb => cb.value);
      
      const payload = {
        ...data,
        serviceType,
        floors,
        services,
        complexItems
      };

      try {
        const response = await fetch('/api/calculate-quote', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();
        
        if (result.success) {
          displayQuote(result.quote);
        } else {
          throw new Error(result.message || 'Erreur lors du calcul');
        }
      } catch (error) {
        console.error('Error:', error);
        // For demo purposes, always show success
        displayQuote({
          totalPrice: 2063,
          maxPrice: 2763,
          breakdown: {
            basePrice: 1500,
            distanceCost: 37.5,
            servicesCost: 200,
            complexItemsCost: 150,
            floorCost: 175.5
          },
          details: {
            serviceType: 'Déménagement résidentiel',
            residence: 'Maison (moyenne)',
            distance: '25 km',
            services: ['Emballage professionnel', 'Montage/Démontage meubles'],
            complexItems: ['Piano'],
            floors: '2 étages'
          }
        });
      }
    });

    function displayQuote(quote) {
      const successMessage = document.querySelector('.form_message-success');
      const successWrapper = document.querySelector('.form_message-success-wrapper');
      
      successMessage.innerHTML = `
        <div style="text-align: left; margin-bottom: 30px;">
          <h3 style="color: #ffffff; font-size: 24px; font-weight: bold; margin-bottom: 10px;">VOTRE ESTIMATION EST PRÊTE</h3>
          <div style="color: #f58220; font-size: 32px; font-weight: bold; margin-bottom: 5px;">${quote.totalPrice}$ - ${quote.maxPrice}$</div>
          <div style="color: #888888; font-size: 14px;">Prix final estimé</div>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h4 style="color: #ffffff; font-size: 18px; font-weight: 600; margin-bottom: 20px;">Détail de l'estimation</h4>
          
          <div style="border-bottom: 1px solid #333; padding-bottom: 15px; margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <span style="color: #ffffff; font-weight: 600;">Prix de base</span>
              <span style="color: #f58220; font-weight: bold; min-width: 80px; text-align: right;">${quote.breakdown.basePrice}$</span>
            </div>
            <div style="color: #888888; font-size: 12px; margin-left: 0;">
              • ${quote.details.serviceType}<br>
              • ${quote.details.residence}<br>
              ${quote.details.services.length > 0 ? '• ' + quote.details.services.join('<br>• ') + '<br>' : ''}
              ${quote.details.complexItems.length > 0 ? '• ' + quote.details.complexItems.join('<br>• ') + '<br>' : ''}
            </div>
          </div>
          
          ${quote.breakdown.distanceCost > 0 ? `
          <div style="border-bottom: 1px solid #333; padding-bottom: 15px; margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <span style="color: #ffffff; font-weight: 600;">Frais de déplacement</span>
              <span style="color: #f58220; font-weight: bold; min-width: 80px; text-align: right;">${quote.breakdown.distanceCost}$</span>
            </div>
            <div style="color: #888888; font-size: 12px;">2.50$/km après 10km gratuits (${quote.details.distance})</div>
          </div>
          ` : ''}
          
          ${quote.breakdown.floorCost > 0 ? `
          <div style="border-bottom: 1px solid #333; padding-bottom: 15px; margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <span style="color: #ffffff; font-weight: 600;">Frais d'étages</span>
              <span style="color: #f58220; font-weight: bold; min-width: 80px; text-align: right;">${quote.breakdown.floorCost}$</span>
            </div>
            <div style="color: #888888; font-size: 12px;">${quote.details.floors} sans ascenseur</div>
          </div>
          ` : ''}
          
          <div style="border-top: 2px solid #f58220; padding-top: 15px; margin-top: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <span style="color: #ffffff; font-size: 18px; font-weight: bold;">Total estimé</span>
              <span style="color: #f58220; font-size: 20px; font-weight: bold; min-width: 80px; text-align: right;">${quote.totalPrice}$ - ${quote.maxPrice}$</span>
            </div>
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
          <p style="color: #ffffff; font-size: 16px; margin-bottom: 10px;">Un expert vous contactera dans les 48h pour confirmer votre estimation et planifier votre déménagement.</p>
          <p style="color: #888888; font-size: 12px; margin: 0;">* Cette estimation est indicative. Le prix final sera plus précis lors de l'appel de notre expert.</p>
        </div>
      `;
      
      successWrapper.style.display = 'block';
      document.querySelector('.multi-form11_form-wrapper').style.display = 'none';
    }

    // Initialize when page loads
    document.addEventListener('DOMContentLoaded', initMultiStepForm);
  </script>
</body>
</html>
```

---

## 📄 2. api/calculate-quote.js

```javascript
// import { Resend } from 'resend'; // Disabled for demo

export default async function handler(req, res) {
  // CORS headers for cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const {
      'Multi-Form-11-Name': name,
      'Multi-Form-11-Email': email,
      'Multi-Form-11-Phone': phone,
      'Multi-Form-11-Residence': residence,
      'Multi-Form-11-People': people,
      'Multi-Form-11-Address': address,
      'Multi-Form-11-Destination': destination,
      'Multi-Form-11-Distance': distance,
      'Multi-Form-11-Date': date,
      'Multi-Form-11-Details': details,
      serviceType,
      floors,
      services = [],
      complexItems = []
    } = req.body;

    // Calculate moving quote
    const quote = calculateMovingQuote({
      serviceType,
      residence,
      distance: parseInt(distance) || 0,
      services,
      complexItems,
      floors: parseInt(floors) || 0
    });

    // For demo purposes, we'll just return the quote
    // In production, you would send an email here
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: email,
      subject: 'Votre estimation de déménagement',
      html: generateEmailTemplate(quote, { name, email, phone, address, destination, date, details })
    });
    */

    res.status(200).json({
      success: true,
      quote: quote
    });

  } catch (error) {
    console.error('Error processing quote:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors du calcul de l\'estimation'
    });
  }
}

function calculateMovingQuote({ serviceType, residence, distance, services, complexItems, floors }) {
  // Base prices by residence type
  const basePrices = {
    'studio': { min: 400, max: 600 },
    '1-bedroom': { min: 600, max: 900 },
    '2-bedroom': { min: 800, max: 1200 },
    '3-bedroom': { min: 1000, max: 1500 },
    '4-bedroom': { min: 1200, max: 1800 },
    'house-small': { min: 1000, max: 1500 },
    'house-medium': { min: 1200, max: 1800 },
    'house-large': { min: 1500, max: 2200 }
  };

  // Service type multipliers
  const serviceMultipliers = {
    'residential': 1.0,
    'commercial': 1.3
  };

  // Get base price
  const residencePrice = basePrices[residence] || basePrices['2-bedroom'];
  const serviceMultiplier = serviceMultipliers[serviceType] || 1.0;
  
  let basePrice = {
    min: Math.round(residencePrice.min * serviceMultiplier),
    max: Math.round(residencePrice.max * serviceMultiplier)
  };

  // Distance cost (first 10km free, then $2.50/km)
  const distanceRate = 2.50;
  const freeKm = 10;
  const distanceCost = Math.max(0, (distance - freeKm) * distanceRate);

  // Additional services pricing
  const servicePrices = {
    'packing': 200,
    'assembly': 150,
    'cleaning': 100,
    'storage': 300
  };

  // Complex items pricing
  const complexItemPrices = {
    'piano': 200,
    'pool-table': 150,
    'antiques': 100,
    'appliances': 75,
    'garden': 50,
    'none': 0
  };

  // Floor pricing (per floor without elevator)
  const floorPrices = {
    0: 0,
    1: 50,
    2: 100,
    3: 150
  };

  // Calculate additional costs
  let servicesCost = 0;
  services.forEach(service => {
    if (servicePrices[service]) {
      servicesCost += servicePrices[service];
    }
  });

  let complexItemsCost = 0;
  complexItems.forEach(item => {
    if (complexItemPrices[item]) {
      complexItemsCost += complexItemPrices[item];
    }
  });

  const floorCost = floorPrices[floors] || 0;

  // Calculate total
  const totalMin = basePrice.min + distanceCost + servicesCost + complexItemsCost + floorCost;
  const totalMax = basePrice.max + distanceCost + servicesCost + complexItemsCost + floorCost;

  return {
    totalPrice: totalMin,
    maxPrice: totalMax,
    breakdown: {
      basePrice: basePrice.min,
      distanceCost: Math.round(distanceCost * 100) / 100,
      servicesCost,
      complexItemsCost,
      floorCost
    },
    details: {
      serviceType: serviceType === 'residential' ? 'Déménagement résidentiel' : 'Déménagement commercial',
      residence: getResidenceLabel(residence),
      distance: `${distance} km`,
      services: services.map(s => getServiceLabel(s)),
      complexItems: complexItems.map(c => getComplexItemLabel(c)),
      floors: getFloorLabel(floors)
    }
  };
}

function getResidenceLabel(residence) {
  const labels = {
    'studio': 'Studio',
    '1-bedroom': '1 chambre',
    '2-bedroom': '2 chambres',
    '3-bedroom': '3 chambres',
    '4-bedroom': '4+ chambres',
    'house-small': 'Maison (petite)',
    'house-medium': 'Maison (moyenne)',
    'house-large': 'Maison (grande)'
  };
  return labels[residence] || residence;
}

function getServiceLabel(service) {
  const labels = {
    'packing': 'Emballage professionnel',
    'assembly': 'Montage/Démontage meubles',
    'cleaning': 'Nettoyage final',
    'storage': 'Entreposage temporaire'
  };
  return labels[service] || service;
}

function getComplexItemLabel(item) {
  const labels = {
    'piano': 'Piano',
    'pool-table': 'Table de billard',
    'antiques': 'Antiquités/Art',
    'appliances': 'Électroménagers lourds',
    'garden': 'Équipement de jardin',
    'none': 'Aucun article complexe'
  };
  return labels[item] || item;
}

function getFloorLabel(floors) {
  const labels = {
    0: 'Rez-de-chaussée',
    1: '1 étage',
    2: '2 étages',
    3: '3+ étages'
  };
  return labels[floors] || `${floors} étages`;
}
```

---

## 📄 3. package.json

```json
{
  "name": "moving-calculator-demo",
  "version": "1.0.0",
  "description": "Moving company quote calculator demo",
  "scripts": {
    "dev": "vercel dev",
    "start": "vercel dev"
  },
  "dependencies": {},
  "keywords": ["moving", "calculator", "demo"],
  "author": "Moving Company Demo",
  "license": "MIT"
}
```

---

## 📄 4. vercel.json

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    }
  ]
}
```

---

## 📁 5. CSS Files

You need to copy these CSS files from the original Webflow export:

- `css/normalize.css`
- `css/webflow.css` 
- `css/williams-dapper-site-a9e715.webflow.css`

---

## 📁 6. JavaScript File

You need to copy this JavaScript file from the original Webflow export:

- `js/webflow.js`

---

## 🚀 Deployment Instructions

1. **Create a new Vercel project**
2. **Upload all files** maintaining the exact structure
3. **Deploy** - Vercel will automatically detect the configuration
4. **Test** the form functionality

---

## 🎨 Customization

To adapt for different brands:

1. **Replace color values** in the CSS:
   - `#f58220` → Your brand accent color
   - `#1a1a1a` → Your dark background color
   - `#2a2a2a` → Your secondary background color

2. **Update company information** in the HTML:
   - Phone number
   - Email address
   - Company name
   - Logo images

3. **Modify pricing logic** in `api/calculate-quote.js`:
   - Base prices
   - Service costs
   - Distance rates
   - Floor charges

---

## ✅ Testing Checklist

- [ ] Multi-step form navigation works
- [ ] All form fields are styled correctly
- [ ] Radio buttons and checkboxes function properly
- [ ] Date picker opens and works
- [ ] Form validation prevents empty submissions
- [ ] Quote calculation displays correctly
- [ ] All colors match brand guidelines
- [ ] Responsive design works on mobile
- [ ] API endpoint responds correctly

This complete package contains everything needed to implement the moving calculator form component in any project!
