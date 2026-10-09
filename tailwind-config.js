// Konfigurasi kustom Tailwind CSS (harus dimuat SETELAH script CDN Tailwind)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    deep: '#431477',      /* Deep Purple */
                    royal: '#7547B7',     /* Royal Purple */
                    soft: '#C7AFE5',      /* Soft Lavender */
                    pale: '#F5EFFB',      /* Pale Lavender */
                    dark: '#32164D',      /* Dark Plum */
                    gray: '#F7F7FA',      /* Soft Gray */
                    green: '#25865A',     /* Success Green */
                }
            },
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'soft-lavender': '0 10px 30px -5px rgba(117, 71, 183, 0.15)',
                'card-hover': '0 20px 25px -5px rgba(67, 20, 119, 0.1), 0 10px 10px -5px rgba(67, 20, 119, 0.04)',
            }
        }
    }
};
