// Styles
import '@/styles/main.scss'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons:{
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
})
