// This service handles validation and analysis of business ideas

const IdeaValidationService = {
  // Calculates market potential score (0-100)
  calculateMarketPotentialScore: (marketData) => {
    // Base score starts at 50
    let score = 50;
    
    // Market size impact (0-25 points)
    const marketSizeScores = {
      'small': 5,
      'medium': 15,
      'large': 20,
      'very_large': 25
    };
    score += marketSizeScores[marketData.marketSize] || 0;
    
    // Market growth impact (0-25 points)
    const marketGrowthScores = {
      'declining': 0,
      'stable': 10,
      'growing': 15,
      'fast_growing': 20,
      'explosive': 25
    };
    score += marketGrowthScores[marketData.marketGrowth] || 0;
    
    // Return normalized score
    return Math.min(Math.max(score, 0), 100);
  },
  
  // Calculates competitive advantage score (0-100)
  calculateCompetitiveScore: (competitorData) => {
    // Base score starts at 50
    let score = 50;
    
    // Market barriers impact (0-20 points)
    const barrierScores = {
      'very_low': 0,
      'low': 5,
      'medium': 10,
      'high': 15,
      'very_high': 20
    };
    score += barrierScores[competitorData.marketBarriers] || 0;
    
    // Competition strength penalty (-20 to 0 points)
    // For simplicity, we'll estimate this from the text length of competitor strengths
    const strengthLength = competitorData.competitorStrengths.length;
    if (strengthLength > 300) score -= 20;
    else if (strengthLength > 200) score -= 15;
    else if (strengthLength > 100) score -= 10;
    else if (strengthLength > 50) score -= 5;
    
    // Competition weakness bonus (0 to 20 points)
    // For simplicity, we'll estimate this from the text length of competitor weaknesses
    const weaknessLength = competitorData.competitorWeaknesses.length;
    if (weaknessLength > 300) score += 20;
    else if (weaknessLength > 200) score += 15;
    else if (weaknessLength > 100) score += 10;
    else if (weaknessLength > 50) score += 5;
    
    // Return normalized score
    return Math.min(Math.max(score, 0), 100);
  },
  
  // Calculates financial viability score (0-100)
  calculateFinancialScore: (financialData) => {
    // Base score starts at 50
    let score = 50;
    
    // Profit margin impact (0-20 points)
    const profitScores = {
      'very_low': 0,
      'low': 5,
      'medium': 10,
      'high': 15,
      'very_high': 20
    };
    score += profitScores[financialData.estimatedProfit] || 0;
    
    // Break-even time impact (0-20 points)
    const bepScores = {
      'very_slow': 0,
      'slow': 5,
      'medium': 10,
      'fast': 15,
      'very_fast': 20
    };
    score += bepScores[financialData.breakEvenTime] || 0;
    
    // Risk impact (-20 to 0 points)
    const riskScores = {
      'very_low': 0,
      'low': -5,
      'medium': -10,
      'high': -15,
      'very_high': -20
    };
    score += riskScores[financialData.riskLevel] || 0;
    
    // Return normalized score
    return Math.min(Math.max(score, 0), 100);
  },
  
  // Calculates overall feasibility score (0-100)
  calculateOverallScore: (scores) => {
    // Weight each component score
    const weightedScore = (
      scores.marketPotential * 0.35 +  // Market potential has 35% weight
      scores.competitiveAdvantage * 0.35 + // Competitive advantage has 35% weight
      scores.financialViability * 0.30  // Financial viability has 30% weight
    );
    
    return Math.round(weightedScore);
  },
  
  // Generate assessment recommendations based on scores
  generateRecommendations: (scores, ideaData) => {
    const recommendations = [];
    
    // Market potential recommendations
    if (scores.marketPotential < 40) {
      recommendations.push({
        category: 'market',
        severity: 'high',
        title: 'Potensi Pasar Terbatas',
        description: 'Ukuran pasar dan pertumbuhan yang Anda targetkan tampaknya terbatas. Pertimbangkan untuk memperluas target pasar atau mencari segmen dengan pertumbuhan lebih tinggi.'
      });
    } else if (scores.marketPotential < 70) {
      recommendations.push({
        category: 'market',
        severity: 'medium',
        title: 'Validasi Kebutuhan Pasar',
        description: 'Lakukan riset pasar lebih mendalam untuk memvalidasi bahwa kebutuhan pelanggan benar-benar ada dan cukup signifikan.'
      });
    } else {
      recommendations.push({
        category: 'market',
        severity: 'low',
        title: 'Optimalkan Strategi Masuk Pasar',
        description: 'Pasar Anda tampak menjanjikan. Fokus pada strategi masuk yang tepat untuk mengkapitalisasi peluang ini dengan cepat.'
      });
    }
    
    // Competitive advantage recommendations
    if (scores.competitiveAdvantage < 40) {
      recommendations.push({
        category: 'competitive',
        severity: 'high',
        title: 'Perkuat Diferensiasi',
        description: 'Posisi kompetitif Anda cukup lemah. Prioritaskan pengembangan faktor pembeda yang lebih kuat dari kompetitor yang ada.'
      });
    } else if (scores.competitiveAdvantage < 70) {
      recommendations.push({
        category: 'competitive',
        severity: 'medium',
        title: 'Tingkatkan Keunggulan Kompetitif',
        description: 'Anda memiliki beberapa keunggulan, namun perlu diperkuat. Fokus pada memaksimalkan kelemahan kompetitor Anda.'
      });
    } else {
      recommendations.push({
        category: 'competitive',
        severity: 'low',
        title: 'Pertahankan Keunggulan',
        description: 'Posisi kompetitif Anda kuat. Pastikan untuk membangun hambatan bagi kompetitor baru dan mempertahankan keunggulan Anda.'
      });
    }
    
    // Financial viability recommendations
    if (scores.financialViability < 40) {
      recommendations.push({
        category: 'financial',
        severity: 'high',
        title: 'Revisi Model Keuangan',
        description: 'Proyeksi finansial saat ini berisiko tinggi. Cari cara untuk meningkatkan margin, mempercepat BEP, atau mengurangi biaya awal.'
      });
    } else if (scores.financialViability < 70) {
      recommendations.push({
        category: 'financial',
        severity: 'medium',
        title: 'Optimalkan Arus Kas',
        description: 'Perhatikan manajemen arus kas untuk memastikan bisnis dapat bertahan sampai mencapai titik impas.'
      });
    } else {
      recommendations.push({
        category: 'financial',
        severity: 'low',
        title: 'Rencanakan Pertumbuhan',
        description: 'Model finansial Anda menjanjikan. Fokus pada strategi reinvestasi untuk mempercepat pertumbuhan.'
      });
    }
    
    // Overall recommendation based on total score
    if (scores.overall < 40) {
      recommendations.push({
        category: 'overall',
        severity: 'high',
        title: 'Pertimbangkan Kembali atau Pivot',
        description: 'Ide bisnis ini menghadapi tantangan signifikan. Pertimbangkan untuk melakukan pivot atau mencari peluang bisnis alternatif.'
      });
    } else if (scores.overall < 70) {
      recommendations.push({
        category: 'overall',
        severity: 'medium',
        title: 'Lanjutkan dengan Perbaikan',
        description: 'Ide bisnis ini memiliki potensi, namun memerlukan perbaikan di beberapa area sebelum eksekusi penuh.'
      });
    } else {
      recommendations.push({
        category: 'overall',
        severity: 'low',
        title: 'Lanjutkan dengan Eksekusi',
        description: 'Ide bisnis ini menunjukkan potensi yang kuat. Lanjutkan dengan perencanaan eksekusi yang lebih detail.'
      });
    }
    
    return recommendations;
  },
  
  // Generate analysis with scores and recommendations
  generateAnalysis: async (ideaData) => {
    try {
      console.log('Generating analysis for idea:', ideaData.id);
      
      // Calculate component scores
      const marketPotentialScore = IdeaValidationService.calculateMarketPotentialScore(ideaData.marketAnalysis);
      const competitiveScore = IdeaValidationService.calculateCompetitiveScore(ideaData.competitorAnalysis);
      const financialScore = IdeaValidationService.calculateFinancialScore(ideaData.financialAnalysis);
      
      // Calculate overall score
      const scores = {
        marketPotential: marketPotentialScore,
        competitiveAdvantage: competitiveScore,
        financialViability: financialScore
      };
      scores.overall = IdeaValidationService.calculateOverallScore(scores);
      
      // Generate recommendations
      const recommendations = IdeaValidationService.generateRecommendations(scores, ideaData);
      
      // Add a slight delay to simulate processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create analysis result
      const analysis = {
        ideaId: ideaData.id,
        scores,
        recommendations,
        generatedAt: new Date().toISOString()
      };
      
      // Store analysis in localStorage
      const savedAnalyses = JSON.parse(localStorage.getItem('businessIdeasAnalyses') || '[]');
      savedAnalyses.push(analysis);
      localStorage.setItem('businessIdeasAnalyses', JSON.stringify(savedAnalyses));
      
      console.log('Analysis generated successfully:', analysis);
      return analysis;
    } catch (error) {
      console.error('Error generating analysis:', error);
      throw error;
    }
  },
  
  // Retrieve analysis for a specific idea
  getAnalysis: (ideaId) => {
    const savedAnalyses = JSON.parse(localStorage.getItem('businessIdeasAnalyses') || '[]');
    return savedAnalyses.find(analysis => analysis.ideaId === ideaId);
  },
  
  // Get idea details by ID
  getIdeaById: (ideaId) => {
    const savedIdeas = JSON.parse(localStorage.getItem('businessIdeas') || '[]');
    return savedIdeas.find(idea => idea.id === ideaId);
  }
};

export default IdeaValidationService;