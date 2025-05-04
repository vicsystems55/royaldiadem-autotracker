<template>
    <div class="font-sans">
      <!-- Header -->
      <section class="bg-purple-900 text-white py-10 text-center">
        <h1 class="text-4xl font-bold uppercase">About Us</h1>
      </section>
  
      <!-- Our Story -->
      <section class="py-12 px-4 md:px-50 flex flex-col md:flex-row items-center gap-8">
        <img src="../../assets/office-image.jpg" alt="Building" height="150px;" class="w-full md:w-1/2 rounded shadow-lg" />
        <div class="md:w-1/2">
          <h2 class="text-2xl font-bold mb-4">Our Story</h2>
          <p class="text-gray-700 leading-relaxed">
            Royal Diadem Auto Tracker Nigeria is an Information Technology firm with a team of highly qualified and
            experienced engineers, technicians and customer service executives, who are trained to provide excellent
            vehicle tracking and monitoring systems. We install GPS Trackers for various vehicle types and also provide
            FRSC speed limiters.
          </p>
        </div>
      </section>
  
      <!-- Founder's Message -->
      <section class="bg-gray-50 py-12 px-4 md:px-50">
        <h2 class="text-2xl font-bold mb-8">Founder's Message</h2>
        <div class="flex flex-col md:flex-row items-start gap-6">
          <img src="../../assets/founder.jpg" alt="Founder" class="w-40 rounded shadow-md" />
          <div>
            <p class="italic text-gray-700 mb-4">
              I welcome you to ROYAL DIADEM AUTO TRACKER. We provide the most affordable and efficient durable car tracking
              and recovery services. We are committed to providing reliable and affordable vehicle tracking services to
              Nigerians and are proud to have protected hundreds of vehicles so far.
            </p>
            <p class="font-semibold">Elizabeth. A. Alade</p>
            <p class="text-sm text-gray-500">President & Founder</p>
          </div>
        </div>
      </section>
  
      <!-- Our Team -->
      <section class="py-12 px-4 md:px-50 text-center">
        <h2 class="text-2xl font-bold mb-8">Our Team</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div class="bg-white rounded shadow p-4">
            <img src="../../assets/elizabeth.jpg" alt="Elizabeth" class="rounded mb-4" />
            <p class="font-semibold">Elizabeth. A. Alade</p>
          </div>
          <div class="bg-white rounded shadow p-4">
            <img src="../../assets/ilesanmi.jpg" alt="Ilesanmi" class="rounded mb-4" />
            <p class="font-semibold">Ilesanmi Oluwaseun A.</p>
          </div>
          <div class="bg-white rounded shadow p-4">
            <img src="../../assets/adelana.jpg" alt="Adelana" class="rounded mb-4" />
            <p class="font-semibold">Adelana Felix O.</p>
          </div>
        </div>
      </section>
  
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
  };
  </script>
  
  <style scoped>
  </style>
  