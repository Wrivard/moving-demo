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
    // Extract form data
    const {
      'Multi-Form-11-Name': name,
      'Multi-Form-11-Email': email,
      'Multi-form-11-Type': serviceType,
      'Multi-Form-11-Budget': budget,
      'Multi-Form-11-Distance': distance,
      'Multi-Form-11-Project': projectDetails,
      'Multi-Form-11-Company': company,
      'Multi-form-11-People': residenceType,
      'Multi-Form-11-Link': currentAddress,
      'Multi-Form-11-Country': region,
      'Multi-Form-11-Date': moveDate,
      'Multi-form-11-Services': services,
      'Multi-form-11-Complex': complexItems,
      'Multi-form-11-Floors': floors
    } = req.body;

    // Validate required fields
    if (!name || !email || !serviceType || !residenceType) {
      return res.status(400).json({
        success: false,
        message: 'Required fields missing'
      });
    }

    // Calculate moving quote with all variables
    const quote = calculateMovingQuote(residenceType, serviceType, region, distance, services, complexItems, floors);

    // For demo purposes - skip email sending for now
    console.log('Quote calculated:', {
      name,
      email,
      serviceType: getServiceTypeLabel(serviceType),
      residenceType: getResidenceTypeLabel(residenceType),
      distance: distance || 'Non spécifiée',
      services: services || [],
      complexItems: complexItems || [],
      floors: floors || '0',
      quote,
      projectDetails,
      company,
      currentAddress,
      region,
      moveDate
    });

    res.status(200).json({
      success: true,
      message: 'Quote calculated successfully! (Demo mode - no emails sent)',
      quote: quote
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

// Calculate moving quote with all variables
function calculateMovingQuote(residenceType, serviceType, region, distance, services, complexItems, floors) {
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

  // Distance pricing (per km)
  const distanceRate = 2.5; // $2.50 per km

  // Additional services pricing
  const servicePrices = {
    'emballage': 200,
    'montage': 150,
    'nettoyage': 100,
    'entreposage': 300
  };

  // Complex items pricing
  const complexItemPrices = {
    'piano': 300,
    'billard': 250,
    'antiquites': 200,
    'electromenager': 150,
    'jardin': 100,
    'aucun': 0
  };

  // Floor pricing
  const floorPrices = {
    '0': 0,    // Rez-de-chaussée
    '1': 50,   // 1er étage
    '2': 100,  // 2e étage
    '3': 150   // 3e étage et plus
  };

  // Get base price
  const basePrice = basePrices[residenceType] || { min: 1000, max: 1500 };
  const serviceMultiplier = serviceMultipliers[serviceType] || 1.0;

  // Calculate distance cost
  const distanceCost = distance ? Math.max(0, (parseFloat(distance) - 10) * distanceRate) : 0; // First 10km free

  // Calculate additional services cost
  let servicesCost = 0;
  if (services) {
    const servicesArray = Array.isArray(services) ? services : [services];
    servicesCost = servicesArray.reduce((total, service) => {
      return total + (servicePrices[service] || 0);
    }, 0);
  }

  // Calculate complex items cost
  let complexItemsCost = 0;
  if (complexItems) {
    const complexArray = Array.isArray(complexItems) ? complexItems : [complexItems];
    complexItemsCost = complexArray.reduce((total, item) => {
      return total + (complexItemPrices[item] || 0);
    }, 0);
  }

  // Calculate floor cost
  const floorCost = floorPrices[floors] || 0;

  // Calculate total additional costs
  const totalAdditionalCosts = distanceCost + servicesCost + complexItemsCost + floorCost;

  // Apply service multiplier to base price and add additional costs
  const finalMinPrice = Math.round((basePrice.min * serviceMultiplier) + totalAdditionalCosts);
  const finalMaxPrice = Math.round((basePrice.max * serviceMultiplier) + totalAdditionalCosts);

  return {
    minPrice: finalMinPrice,
    maxPrice: finalMaxPrice,
    basePrice: basePrice,
    serviceMultiplier: serviceMultiplier,
    breakdown: {
      basePrice: basePrice,
      serviceMultiplier: serviceMultiplier,
      distanceCost: Math.round(distanceCost),
      servicesCost: servicesCost,
      complexItemsCost: complexItemsCost,
      floorCost: floorCost,
      totalAdditionalCosts: Math.round(totalAdditionalCosts)
    }
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
