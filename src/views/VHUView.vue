<template>
    <div v-html="htmlContent"></div>
  </template>
  
  <script>
  export default {
    name: 'OtherView',
    data() {
      return {
        htmlContent: '', // Stocke le contenu HTML chargé
      };
    },
    mounted() {
      this.loadHtmlContent();
    },
    methods: {
      async loadHtmlContent() {
        try {
          const response = await fetch('/centre.html'); // Assurez-vous que le chemin est correct
          if (response.ok) {
            const html = await response.text();
            this.htmlContent = html;
          } else {
            console.error('Failed to load HTML content');
          }
        } catch (error) {
          console.error('Error fetching HTML content:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Vos styles ici */
  </style>
  