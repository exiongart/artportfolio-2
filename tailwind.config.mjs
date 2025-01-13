/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {   

		extend: {

      cursor: {
        'handcursor': 'url(/cursor.png) 25 25, pointer',
      },

      
    
            opacity:{
                50: '.50',   
   
            },

         /* Tilføj din egen spacing nedenfor */
        spacing: {
            'xxs': '2px',
            'xs':'4px',
            's':'8px',
            'sm':'24px',
            'm':'36px',
            'ml':'50px',
            'l':'70px',
            'xl':'80px',
            'xxl':'90px',
            'full':'999px',
      },

      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      fontFamily:{
        
        'primary':['"Sansation Light"','sans-serif'],
        
      },

      fontWeight:{
         regular:'400',
         semibold:'600',
         bold:'700',

      },

      borderWidth:{
         DEFAULT:'1px',

      },

      borderRadius:{
        DEFAULT:'1px',
        'xxs': '2px',
        'xs':'4px',
        's':'8px',
        'sm':'24px',
        'm':'36px',
        'ml':'50px',
        'l':'70px',
        'xl':'80px',
        'xxl':'90px',
        'full':'999px',

     },

     

      

         /* Tilføj dit typografiske hierarki herunder */
     fontSize: {
        'h1-display-mobil': ['40px', { lineHeight: 'auto' }],
       'h1-mobil': ['34px', { lineHeight: 'auto' }],
         'h2-mobil': ['38px', { lineHeight: 'auto' }],
         'h3-mobil': ['16px', { lineHeight: 'auto' }],
         'link-mobil': ['20px', { lineHeight: 'auto' }],
         'button-mobil': ['20px', { lineHeight: 'auto' }],
         'table-mobil': ['12px', { lineHeight: '32px' }],
         'body-mobil': ['16px', { lineHeight: 'auto' }],

         'h1-display-desktop': ['50px', { lineHeight: 'auto' }],
         'h1-desktop': ['56px', { lineHeight: 'auto' }],
         'h2-desktop': ['28px', { lineHeight: 'auto' }],
         'h3-mobil': ['32px', { lineHeight: 'auto' }],
         'link-desktop': ['24px', { lineHeight: 'auto' }],
         'button-desktop': ['24px', { lineHeight: 'auto' }],
         'table-desktop': ['32px', { lineHeight: '32px' }],
         'body-desktop': ['20px', { lineHeight: 'auto' }],
        
      },

      gridTemplateColumns: {
        'grid-mobil': 'repeat(4, 1fr)',
        'grid-desktop': 'repeat(12, 1fr)',

      },

   margin:{
    'margin-mobil': '16px',
    'margin-desktop': '96px',
},

gap:{
    'gap-mobil': '16px',
    'gap-tablet': '32px',
    'gap-desktop': '40px',
},


         colors: {
                    transparent: 'transparent',
                   current: 'currentColor',
                   
                   midnight: {
                    200: '#2A3344',
                500: '#15151D',
                50: '#2A334480',
                
                   
                 },
                pink: {
                      
                    100: '#F8E7E1',
                    500: '#EC97C0',
                   600: '#CB5D97',
                   
                   50: '#F8E7E180',
                 },

                
                  
                },

        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}