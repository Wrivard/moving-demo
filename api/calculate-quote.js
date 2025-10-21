import { Resend } from 'resend';

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
    // Extract form data
    const {
      'Multi-Form-11-Name': name,
      'Multi-Form-11-Email': email,
      'Multi-form-11-Type': serviceType,
      'Multi-Form-11-Budget': budget,
      'Multi-Form-11-Project': projectDetails,
      'Multi-Form-11-Company': company,
      'Multi-form-11-People': residenceType,
      'Multi-Form-11-Link': currentAddress,
      'Multi-Form-11-Country': region,
      'Multi-Form-11-Date': moveDate
    } = req.body;

    // Validate required fields
    if (!name || !email || !serviceType || !residenceType) {
      return res.status(400).json({
        success: false,
        message: 'Required fields missing'
      });
    }

    // Calculate moving quote based on residence type and service
    const quote = calculateMovingQuote(residenceType, serviceType, region);

    // Initialize Resend for email sending
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable missing');
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.FROM_EMAIL || 'noreply@demenagementveillette.com';
    
    // Business email (hardcoded for demo)
    const businessEmail = 'info@demenagementveillette.com';

    // Create business email with quote details
    const businessEmailContent = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f4f0;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto;">
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <!-- Header -->
                <tr>
                  <td style="background-color: #2c3e50; color: #ffffff; text-align: center; padding: 30px;">
                    <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🚚 Nouvelle Demande de Devis</h1>
                    <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Calculateur de déménagement</p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px; background-color: #ffffff;">
                    <h2 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #d4a574; padding-bottom: 10px;">👤 Informations du Client</h2>
                    <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 30px;">
                      <tr>
                        <td style="font-weight: bold; color: #2c3e50; width: 120px; vertical-align: top;">Nom:</td>
                        <td style="color: #34495e;">${name}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold; color: #2c3e50; vertical-align: top;">Email:</td>
                        <td style="color: #34495e;"><a href="mailto:${email}" style="color: #d4a574; text-decoration: none;">${email}</a></td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold; color: #2c3e50; vertical-align: top;">Type de service:</td>
                        <td style="color: #34495e;">${getServiceTypeLabel(serviceType)}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold; color: #2c3e50; vertical-align: top;">Type de résidence:</td>
                        <td style="color: #34495e;">${getResidenceTypeLabel(residenceType)}</td>
                      </tr>
                      ${company ? `
                      <tr>
                        <td style="font-weight: bold; color: #2c3e50; vertical-align: top;">Entreprise:</td>
                        <td style="color: #34495e;">${company}</td>
                      </tr>
                      ` : ''}
                      ${currentAddress ? `
                      <tr>
                        <td style="font-weight: bold; color: #2c3e50; vertical-align: top;">Adresse actuelle:</td>
                        <td style="color: #34495e;">${currentAddress}</td>
                      </tr>
                      ` : ''}
                      ${region ? `
                      <tr>
                        <td style="font-weight: bold; color: #2c3e50; vertical-align: top;">Région:</td>
                        <td style="color: #34495e;">${region}</td>
                      </tr>
                      ` : ''}
                      ${moveDate ? `
                      <tr>
                        <td style="font-weight: bold; color: #2c3e50; vertical-align: top;">Date prévue:</td>
                        <td style="color: #34495e;">${moveDate}</td>
                      </tr>
                      ` : ''}
                    </table>
                    
                    <h2 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 20px; border-bottom: 2px solid #d4a574; padding-bottom: 10px;">💰 Estimation Calculée</h2>
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #d4a574; text-align: center;">
                      <div style="font-size: 24px; font-weight: bold; color: #2c3e50; margin-bottom: 10px;">
                        ${quote.minPrice}$ - ${quote.maxPrice}$
                      </div>
                      <div style="color: #34495e; font-size: 14px;">
                        Estimation basée sur: ${getResidenceTypeLabel(residenceType)} - ${getServiceTypeLabel(serviceType)}
                      </div>
                    </div>
                    
                    ${projectDetails ? `
                    <h2 style="color: #2c3e50; margin: 20px 0 15px 0; font-size: 20px; border-bottom: 2px solid #d4a574; padding-bottom: 10px;">📝 Détails Supplémentaires</h2>
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #d4a574; line-height: 1.6; color: #34495e;">
                      ${projectDetails.replace(/\n/g, '<br>')}
                    </div>
                    ` : ''}
                  </td>
                </tr>
                
                <!-- Action Button -->
                <tr>
                  <td style="padding: 0 30px 40px 30px; text-align: center;">
                    <a href="mailto:${email}?subject=Devis personnalisé - Déménagement Veillette & Fils" style="display: inline-block; background-color: #d4a574; color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 6px; font-weight: bold; font-size: 16px; transition: background-color 0.3s;">
                      📧 Contacter le Client
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send business email
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: businessEmail,
      subject: `🚚 Nouvelle Demande de Devis - ${name} (${getResidenceTypeLabel(residenceType)})`,
      html: businessEmailContent,
      replyTo: email
    });

    if (error) {
      console.error('Business email error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send email'
      });
    }

    // Send confirmation email to customer with quote
    const confirmationContent = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f4f0;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto;">
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <tr>
                  <td style="background-color: #d4a574; color: #ffffff; text-align: center; padding: 30px;">
                    <h1 style="margin: 0; font-size: 28px; font-weight: bold;">✅ Votre Devis est Prêt!</h1>
                    <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Estimation personnalisée</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 40px 30px; background-color: #ffffff; text-align: center;">
                    <p style="font-size: 18px; color: #2c3e50; margin: 0 0 20px 0;">Bonjour <strong>${name}</strong>,</p>
                    <p style="font-size: 16px; color: #34495e; line-height: 1.6; margin: 0 0 25px 0;">
                      Merci d'avoir utilisé notre calculateur de déménagement ! Voici votre estimation personnalisée.
                    </p>
                    
                    <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px; margin: 20px 0; border: 2px solid #d4a574;">
                      <h3 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 20px;">💰 Estimation de Votre Déménagement</h3>
                      <div style="font-size: 32px; font-weight: bold; color: #d4a574; margin: 15px 0;">
                        ${quote.minPrice}$ - ${quote.maxPrice}$
                      </div>
                      <div style="color: #34495e; font-size: 14px; margin-top: 10px;">
                        <strong>Service:</strong> ${getServiceTypeLabel(serviceType)}<br>
                        <strong>Type de résidence:</strong> ${getResidenceTypeLabel(residenceType)}
                      </div>
                    </div>
                    
                    <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: left;">
                      <h4 style="color: #2c3e50; margin: 0 0 10px 0;">📋 Prochaines Étapes:</h4>
                      <ul style="color: #34495e; margin: 0; padding-left: 20px;">
                        <li>Un de nos experts vous contactera dans les 24h</li>
                        <li>Nous planifierons une visite d'évaluation gratuite</li>
                        <li>Vous recevrez un devis détaillé et personnalisé</li>
                        <li>Nous organiserons votre déménagement sans stress</li>
                      </ul>
                    </div>
                    
                    <p style="font-size: 16px; color: #34495e; margin: 25px 0 0 0;">
                      Cordialement,<br>
                      <strong style="color: #2c3e50;">L'équipe Déménagement Veillette & Fils</strong><br>
                      <span style="font-size: 14px;">(514) 506-0292 | info@demenagementveillette.com</span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send confirmation email (don't fail if this fails)
    try {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'Votre estimation de déménagement - Déménagement Veillette & Fils',
        html: confirmationContent,
        replyTo: businessEmail
      });
    } catch (confirmationError) {
      console.warn('Confirmation email failed:', confirmationError);
    }

    res.status(200).json({
      success: true,
      message: 'Quote calculated and sent successfully!',
      quote: quote,
      data: data
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

// Calculate moving quote based on residence type and service
function calculateMovingQuote(residenceType, serviceType, region) {
  // Base pricing for different residence types
  const basePrices = {
    'Multi-form 11 People Option 1': { min: 800, max: 1200 }, // Petite résidence
    'Multi-form 11 People Option 2': { min: 600, max: 900 },  // Appartement
    'Multi-form 11 People Option 3': { min: 1200, max: 1800 }, // Maison moyenne
    'Multi-form 11 People Option 4': { min: 1800, max: 2500 }, // Grande maison
    'Multi-form 11 People Option 5': { min: 2200, max: 3200 }, // Maison familiale
    'Multi-form 11 People Option 6': { min: 3000, max: 4500 }  // Propriété complexe
  };

  // Service type multipliers
  const serviceMultipliers = {
    'Multi-form 11 Type Option 1': 1.0,  // Déménagement résidentiel
    'Multi-form 11 Type Option 2': 1.3,  // Déménagement commercial
    'Multi-form 11 Type Option 3': 1.5,  // Déménagement longue distance
    'Multi-form 11 Type Option 4': 1.2   // Autre
  };

  // Get base price
  const basePrice = basePrices[residenceType] || { min: 1000, max: 1500 };
  const multiplier = serviceMultipliers[serviceType] || 1.0;

  return {
    minPrice: Math.round(basePrice.min * multiplier),
    maxPrice: Math.round(basePrice.max * multiplier),
    basePrice: basePrice,
    multiplier: multiplier
  };
}

// Helper functions to get readable labels
function getServiceTypeLabel(serviceType) {
  const labels = {
    'Multi-form 11 Type Option 1': 'Déménagement résidentiel',
    'Multi-form 11 Type Option 2': 'Déménagement commercial',
    'Multi-form 11 Type Option 3': 'Déménagement longue distance',
    'Multi-form 11 Type Option 4': 'Autre'
  };
  return labels[serviceType] || serviceType;
}

function getResidenceTypeLabel(residenceType) {
  const labels = {
    'Multi-form 11 People Option 1': 'Petite résidence',
    'Multi-form 11 People Option 2': 'Appartement',
    'Multi-form 11 People Option 3': 'Maison moyenne',
    'Multi-form 11 People Option 4': 'Grande maison',
    'Multi-form 11 People Option 5': 'Maison familiale',
    'Multi-form 11 People Option 6': 'Propriété complexe'
  };
  return labels[residenceType] || residenceType;
}
