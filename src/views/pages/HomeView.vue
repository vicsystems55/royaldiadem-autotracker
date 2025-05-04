<template>
    <main>
      <!-- Hero Section -->
      <section class="hero bg-gray-100 text-center py-20">
        <div class="container mx-auto px-4">
          <div class="bg-gray-700 text-white p-8 rounded-md max-w-2xl mx-auto">
            <h1 class="text-3xl font-bold mb-4">Reliable Vehicle Security</h1>
            <p class="mb-6">
              Having advanced GPS tracker protects your vehicle from theft and unauthorized access. 
              Make the smart choice & experience peace of mind.
            </p>
            <button class="bg-purple-600 px-6 py-2 rounded text-white hover:bg-purple-700">
              Get Quote
            </button>
          </div>
        </div>
      </section>
  
      <!-- What We Offer Section -->
      <section class="features py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-bold text-center mb-12">What we offer</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div v-for="(feature, index) in features" :key="index" class="p-4">
              <div class="text-purple-600 text-3xl mb-2">
                <i :class="feature.icon"></i>
              </div>
              <h3 class="font-semibold text-lg">{{ feature.title }}</h3>
              <p class="text-sm text-gray-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Pricing Section -->
      <section class="pricing bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-bold text-center mb-12">Our Pricing</h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div v-for="(plan, index) in pricingPlans" :key="index" class="bg-white shadow p-6 rounded-lg text-center">
              <h3 class="text-xl font-semibold mb-2">{{ plan.name }}</h3>
              <p class="text-2xl font-bold text-green-600 mb-4">{{ plan.price }}</p>
              <ul class="text-left text-sm mb-6">
                <li v-for="(item, i) in plan.features" :key="i" class="mb-1 flex items-start">
                  <span class="text-green-500 mr-2">✔️</span> {{ item }}
                </li>
              </ul>
              <button class="bg-purple-600 px-4 py-2 text-white rounded hover:bg-purple-700">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Testimonies Section -->
      <section class="testimonies py-16 bg-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-2xl font-bold mb-8">Testimonies</h2>
          <div class="max-w-3xl mx-auto">
            <p class="italic text-gray-700 mb-4">
              “My car got stolen at a gun point along Abuja-Kaduna road, I didn’t rest until I called my rep of
              Royal Diadem to stop the vehicle engine. In 25 minutes, I got my vehicle back.”
            </p>
            <p class="font-semibold">Winner Ugonchukwu</p>
            <p class="text-sm text-gray-500">Abuja</p>
          </div>
        </div>
      </section>
  
      <!-- Value Proposition Section -->
      <section class="value-prop py-16 bg-gray-100">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-xl font-bold mb-6">
            Royal Diadem Auto Tracker & Recovery Solution
          </h2>
          <div class="flex justify-center mb-6">
            <img src="../../assets/tracker-showcase.png" alt="Auto Tracker Demo" class="rounded shadow-md" />
          </div>
          <p class="text-sm text-gray-700 max-w-xl mx-auto">
            Having advanced GPS tracker protects your vehicle from theft and unauthorized access.
            Knowing where your drivers and vehicles are at a time aids decision making in many ways.
          </p>
        </div>
      </section>
  
      <!-- Call to Action -->
      <section class="cta bg-purple-800 text-white text-center py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-semibold mb-4">Make your ride safe and convenient.</h2>
          <button class="bg-white text-purple-800 px-6 py-2 rounded hover:bg-gray-100">
            Book Now
          </button>
        </div>
      </section>
  
      <!-- Meet the Team -->
      <section class="team py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-bold text-center mb-10">Meet The Team</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
            <div v-for="(member, index) in team" :key="index">
              <img :src="member.photo" :alt="member.name" class="w-40 h-40 mx-auto object-cover rounded-full mb-4" />
              <h3 class="font-bold">{{ member.name }}</h3>
              <p class="text-sm text-gray-600">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  const features = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Tracking Unit',
      description: 'A tracking unit well hidden in your vehicle helps us track the car in real time and recover it.'
    },
    {
      icon: 'fas fa-headphones',
      title: 'Listen to Conversation',
      description: 'Secretly listen to live conversations going on in your car.'
    },
    {
      icon: 'fas fa-car-crash',
      title: 'Vehicle Engine Control',
      description: 'Remotely turn off your vehicle engine in the event of a theft.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Easy Recovery',
      description: 'Our tools help locate and recover stolen vehicles efficiently.'
    },
    {
      icon: 'fas fa-bullseye',
      title: 'Geo Fencing & Ignition Alert',
      description: 'Receive alerts when your vehicle enters or exits defined zones.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Well Equipped Control Centre',
      description: '24/7 support centre that tracks and handles all reports quickly.'
    }
  ]
  
  const pricingPlans = [
    {
      name: 'Standard',
      price: '₦40K',
      features: [
        'Self Tracking', 'Mobile Tracking', 'Location with Map', 'Voice Monitoring', 'SMS Engine Control',
        'Over Speed Alert', 'Back-Up Battery', 'Real time tracking', '24/7 Support',
        'One Time Payment', '12 Months Warranty'
      ]
    },
    {
      name: 'Super',
      price: '₦45K',
      features: [
        'All Standard Features', 'Web/PC Tracking', 'Free Update/Upgrades', '24/7 Support', 'No Renewal',
        '12 Months Warranty'
      ]
    },
    {
      name: 'Superior',
      price: '₦50K',
      features: [
        'All Super Features', 'Geo Fencing', 'Dual Speed Alert', 'Free Update/Upgrades',
        '24/7 Support', 'One Time Payment', '12 Months Warranty'
      ]
    }
  ]
  
  const team = [
    {
      name: 'Elizabeth A. Njide',
      role: 'President/Founder',
      photo: '/images/team/elizabeth.jpg'
    },
    {
      name: 'Ilesanmi Oluwaseun A.',
      role: 'Operations Manager',
      photo: '/images/team/ilesanmi.jpg'
    },
    {
      name: 'Adetunji Felix D.',
      role: 'Business Development Manager',
      photo: '/images/team/felix.jpg'
    }
  ]
  </script>
  
  <style scoped>
  .hero {
    background-image: url('@/assets/banner-bg.jpg');
    background-size: cover;
    background-position: center;
  }
  </style>
  