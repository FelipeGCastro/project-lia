import {
  babyCatechism,
  shortCatechism,
  lordsPray,
  apostlesCreed,
  jesusManAndGod,
  bibleNoError,
  salvation,
  solaFide,
  solaGratia,
  solaScriptura,
  soliDeoGloria,
  solusChristus
} from 'src/content'

import Baby from 'src/assets/littleBaby.svg'
import Cross from 'src/assets/cross.svg'
import HandsPraying from 'src/assets/handsPraying.svg'
import feather from 'src/assets/feather.svg'
import babyKing from 'src/assets/babyKing.svg'
import bible from 'src/assets/bible.svg'
import crowd from 'src/assets/crowd.svg'
import bibleClosed from 'src/assets/bibleClosed.svg'
import gift from 'src/assets/gift.svg'
import goldCrowd from 'src/assets/goldCrowd.svg'
import hands from 'src/assets/hands.svg'
import westminster from 'src/assets/westminster.svg'
export { default as colors } from './colors'

const MENU_LIST = [
  { link: '/player/2', colorCard: 'yellowCard', img: Baby, alt: 'Baby', title: 'Baby Catecismo' },
  { link: '/player/1', colorCard: 'greenCard', img: westminster, alt: 'Cruz', title: 'Breve Catecismo de Westminster' },
  { link: '/stories/1', colorCard: 'blueCard', img: HandsPraying, alt: 'Oração', title: 'Oração do Pai Nosso' },
  { link: '/stories/2', colorCard: 'browCard', img: feather, alt: 'Credo', title: 'Credo Apostólico' },
  { link: '/stories/3', colorCard: 'redCard', img: babyKing, alt: 'Bebê Rei', title: 'Jesus Homem e Deus' },
  { link: '/stories/4', colorCard: 'purpleCard', img: bible, alt: 'Bíblia', title: 'A Bíblia não erra' },
  { link: '/stories/5', colorCard: 'lightBlueCard', img: crowd, alt: 'Coroa de Espinho', title: 'Queda e Salvação' },
  { link: '/stories/6', colorCard: 'yellowCard', img: hands, alt: 'Coroa de Espinho', title: 'Sola Fide' },
  { link: '/stories/7', colorCard: 'greenCard', img: gift, alt: 'Coroa de Espinho', title: 'Sola Gratia' },
  { link: '/stories/8', colorCard: 'blueCard', img: bibleClosed, alt: 'Bíblia', title: 'Sola Scriptura' },
  { link: '/stories/9', colorCard: 'browCard', img: goldCrowd, alt: 'Coroa de Espinho', title: 'Soli Deo Gloria' },
  { link: '/stories/10', colorCard: 'redCard', img: Cross, alt: 'Cruz', title: 'Solus Christus' }
]

const CATECHISMS = {
  1: shortCatechism,
  2: babyCatechism
}
const STORIES = {
  1: lordsPray,
  2: apostlesCreed,
  3: jesusManAndGod,
  4: bibleNoError,
  5: salvation,
  6: solaFide,
  7: solaGratia,
  8: solaScriptura,
  9: soliDeoGloria,
  10: solusChristus
}

const ESPACE_KEY = 32
const RIGHT_ARROW_KEY = 39
const LEFT_ARROW_KEY = 37
const DEFAULT_IMAGE = 'https://storage.cloud.google.com/projetolia/babyCatechism/40.svg'

export {
  shortCatechism,
  babyCatechism,
  CATECHISMS,
  STORIES,
  ESPACE_KEY,
  RIGHT_ARROW_KEY,
  LEFT_ARROW_KEY,
  DEFAULT_IMAGE,
  MENU_LIST
}
