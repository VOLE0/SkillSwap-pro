import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Target, Users, Award, DollarSign, Book, Zap, ArrowRight, CheckCircle, Lock } from 'lucide-react';

const SkillSwapPro = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'Demo User',
    currentSkills: ['React', 'UI Design', 'SEO'],
    monthlyIncome: 3500,
    tier: 'free'
  });

  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedSkill, setSelectedSkill] = useState(null);

  // KI-generierte Skill-Empfehlungen basierend auf Marktdaten
  const skillRecommendations = [
    {
      name: 'Next.js',
      category: 'Development',
      marketDemand: 94,
      avgIncomeIncrease: 1200,
      timeToLearn: 6,
      roi: 200,
      currentSalary: 75000,
      projectedSalary: 90000,
      jobs: 12400,
      growth: '+45%'
    },
    {
      name: 'Figma Advanced',
      category: 'Design',
      marketDemand: 88,
      avgIncomeIncrease: 800,
      timeToLearn: 4,
      roi: 200,
      currentSalary: 62000,
      projectedSalary: 70000,
      jobs: 8900,
      growth: '+38%'
    },
    {
      name: 'AI Prompt Engineering',
      category: 'AI/ML',
      marketDemand: 97,
      avgIncomeIncrease: 1500,
      timeToLearn: 3,
      roi: 500,
      currentSalary: 68000,
      projectedSalary: 85000,
      jobs: 15600,
      growth: '+127%'
    },
    {
      name: 'Data Analytics',
      category: 'Analytics',
      marketDemand: 91,
      avgIncomeIncrease: 1100,
      timeToLearn: 8,
      roi: 138,
      currentSalary: 65000,
      projectedSalary: 78000,
      jobs: 18200,
      growth: '+52%'
    }
  ];

  // Skill-Swap Angebote
  const skillSwapOffers = [
    { id: 1, user: 'Sarah M.', offers: 'Advanced Excel', wants: 'React Basics', rating: 4.9, swaps: 23 },
    { id: 2, user: 'Marcus K.', offers: 'SEO Strategy', wants: 'UI/UX Design', rating: 4.8, swaps: 17 },
    { id: 3, user: 'Lisa P.', offers: 'Python for Data', wants: 'Figma', rating: 5.0, swaps: 31 },
    { id: 4, user: 'Tom R.', offers: 'Video Editing', wants: 'Next.js', rating: 4.7, swaps: 12 }
  ];

  // Einkommen-Tracking Daten
  const incomeData = [
    { month: 'Jan', income: 3200, projected: 3200 },
    { month: 'Feb', income: 3400, projected: 3300 },
    { month: 'Mar', income: 3500, projected: 3400 },
    { month: 'Apr', income: 3500, projected: 3800 },
    { month: 'Mai', income: 0, projected: 4200 },
    { month: 'Jun', income: 0, projected: 4600 },
  ];

  // Skill Distribution
  const skillDistribution = [
    { name: 'Technical', value: 45, color: '#3b82f6' },
    { name: 'Design', value: 30, color: '#8b5cf6' },
    { name: 'Marketing', value: 15, color: '#ec4899' },
    { name: 'Soft Skills', value: 10, color: '#10b981' }
  ];

  const Dashboard = () => (
    <div className="space-y-6">
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard 
          icon={<DollarSign className="w-6 h-6" />}
          title="Monatseinkommen"
          value="€3,500"
          change="+9.4%"
          color="bg-green-500"
        />
        <StatCard 
          icon={<TrendingUp className="w-6 h-6" />}
          title="Potenzial"
          value="€5,200"
          subtitle="+€1,700/Monat"
          color="bg-blue-500"
        />
        <StatCard 
          icon={<Award className="w-6 h-6" />}
          title="Skills erlernt"
          value="3"
          subtitle="6 empfohlen"
          color="bg-purple-500"
        />
        <StatCard 
          icon={<Users className="w-6 h-6" />}
          title="Skill Swaps"
          value="12"
          subtitle="2 ausstehend"
          color="bg-pink-500"
        />
      </div>

      {/* Income Projection Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Einkommens-Projektion</h2>
          <span className="text-sm text-gray-500">Basierend auf empfohlenen Skills</span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={incomeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#3b82f6" strokeWidth={3} name="Aktuell" />
            <Line type="monotone" dataKey="projected" stroke="#10b981" strokeWidth={3} strokeDasharray="5 5" name="Projiziert" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* AI Recommendations */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-6 h-6" />
          <h2 className="text-xl font-bold">KI-Empfehlung für maximales Einkommen</h2>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-lg p-4">
          <p className="text-lg mb-2">Fokussiere auf: <strong>AI Prompt Engineering</strong></p>
          <p className="text-sm opacity-90">Grund: Höchster ROI (500%) + 127% Marktwachstum + nur 3 Wochen Lernzeit</p>
          <div className="mt-4 flex gap-3">
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Lernpfad starten
            </button>
            <button className="border border-white/30 px-4 py-2 rounded-lg hover:bg-white/10 transition">
              Details ansehen
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillAnalyzer = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Skill-Empfehlungen für dich</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillRecommendations.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} onClick={() => setSelectedSkill(skill)} />
          ))}
        </div>
      </div>

      {/* Skill Distribution */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Deine Skill-Verteilung</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={skillDistribution}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({name, value}) => `${name} ${value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {skillDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const SkillSwapMarketplace = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Skill-Swap Marketplace</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
          + Angebot erstellen
        </button>
      </div>
      
      <div className="space-y-4">
        {skillSwapOffers.map((offer) => (
          <div key={offer.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                  {offer.user.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{offer.user}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      {offer.rating}
                    </span>
                    <span>• {offer.swaps} Swaps</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">Bietet an</div>
                <div className="font-semibold text-green-600">{offer.offers}</div>
                <div className="text-sm text-gray-600 mt-2">Sucht</div>
                <div className="font-semibold text-blue-600">{offer.wants}</div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Swap anfragen
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {userProfile.tier === 'free' && (
        <div className="mt-6 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-amber-600" />
            <span className="text-sm text-amber-900">Upgrade auf <strong>Pro</strong> für unbegrenzte Swaps</span>
          </div>
          <button 
            onClick={() => window.open('https://buy.stripe.com/test/cN3cwe2O68hcnDc4D', '_blank')}
            className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-700 transition"
          >
            Jetzt upgraden
          </button>
        </div>
      )}
    </div>
  );

  const Pricing = () => (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Wähle deinen Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard 
          title="Free"
          price="0"
          features={[
            'Basis Skill-Analyse',
            '3 Kurse pro Monat',
            'Community-Zugang',
            '1 Skill-Swap/Monat'
          ]}
          cta="Aktueller Plan"
          active={true}
        />
        <PricingCard 
          title="Pro"
          price="19"
          popular={true}
          features={[
            'KI-Lern-Roadmap',
            'Unbegrenzte Kurse',
            'ROI-Dashboard',
            'Unbegrenzte Swaps',
            'Zertifikate',
            'Prioritäts-Support'
          ]}
          cta="Upgrade auf Pro"
        />
        <PricingCard 
          title="Business"
          price="49"
          features={[
            'Alles aus Pro',
            'Team-Analytics',
            'Skill-Gap-Analyse',
            'Custom Roadmaps',
            'API-Zugang',
            'Dedicated Manager'
          ]}
          cta="Kontakt Sales"
        />
      </div>
    </div>
  );

  const StatCard = ({ icon, title, value, change, subtitle, color }) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-2">
        <div className={`${color} p-3 rounded-lg text-white`}>
          {icon}
        </div>
        {change && (
          <span className="text-green-600 text-sm font-semibold">{change}</span>
        )}
      </div>
      <div className="text-sm text-gray-600 mb-1">{title}</div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      {subtitle && <div className="text-xs text-gray-500 mt-1">{subtitle}</div>}
    </div>
  );

  const SkillCard = ({ skill, onClick }) => (
    <div 
      onClick={onClick}
      className="border-2 border-gray-200 rounded-xl p-4 hover:border-purple-400 hover:shadow-lg transition cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{skill.name}</h3>
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">{skill.category}</span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600">+€{skill.avgIncomeIncrease}</div>
          <div className="text-xs text-gray-500">pro Monat</div>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Marktnachfrage</span>
          <span className="font-semibold text-gray-800">{skill.marketDemand}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
            style={{ width: `${skill.marketDemand}%` }}
          />
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Lernzeit</span>
          <span className="font-semibold text-gray-800">{skill.timeToLearn} Wochen</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">ROI</span>
          <span className="font-semibold text-green-600">{skill.roi}%</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
        <div className="bg-blue-50 p-2 rounded">
          <div className="text-gray-600">Jobs verfügbar</div>
          <div className="font-bold text-blue-600">{skill.jobs.toLocaleString()}</div>
        </div>
        <div className="bg-green-50 p-2 rounded">
          <div className="text-gray-600">Wachstum</div>
          <div className="font-bold text-green-600">{skill.growth}</div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
        Lernpfad starten
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );

  const PricingCard = ({ title, price, features, cta, popular, active }) => (
    <div className={`relative bg-white rounded-xl shadow-lg p-8 ${popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Beliebtester Plan
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-800">€{price}</span>
        <span className="text-gray-600">/Monat</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-gray-700">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => {
          if (title === "Pro") {
            window.open('https://buy.stripe.com/test/cN3cwe2O68hcnDc4D', '_blank');
          } else if (title === "Business") {
            window.open('https://buy.stripe.com/test/5kQeVe7EqfIRdrHb0z', '_blank');
          }
        }}
        disabled={active}
        className={`w-full py-3 rounded-lg font-semibold transition ${
          active 
            ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
            : popular
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 cursor-pointer'
              : 'bg-gray-800 text-white hover:bg-gray-700 cursor-pointer'
        }`}
      >
        {cta}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                SkillSwap Pro
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Willkommen, <strong>{userProfile.name}</strong></span>
              <div className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-full text-xs font-semibold">
                {userProfile.tier.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: <TrendingUp className="w-4 h-4" /> },
              { id: 'skills', label: 'Skill-Analyzer', icon: <Target className="w-4 h-4" /> },
              { id: 'swap', label: 'Skill-Swap', icon: <Users className="w-4 h-4" /> },
              { id: 'pricing', label: 'Pricing', icon: <Award className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-4 border-b-2 transition ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600 font-semibold'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'skills' && <SkillAnalyzer />}
        {activeTab === 'swap' && <SkillSwapMarketplace />}
        {activeTab === 'pricing' && <Pricing />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 SkillSwap Pro - Dein KI-gestützter Karriere-Booster</p>
          <p className="text-sm text-gray-500 mt-2">Durchschnittliche Einkommenssteigerung: +48% in 12 Monaten</p>
        </div>
      </footer>
    </div>
  );
};

export default SkillSwapPro;
