import babyCatechism from './babyCatechism'
import shortCatechism from './shortCatechism'
import lordsPray from './lordsPray'
import apostlesCreed from './apostlesCreed'
import jesusManAndGod from './jesusManAndGod'
import bibleNoError from './bibleNoError'

const CATECHISMS = {
  1: shortCatechism,
  2: babyCatechism
}
const STORIES = {
  1: lordsPray,
  2: apostlesCreed,
  3: jesusManAndGod,
  4: bibleNoError
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
  DEFAULT_IMAGE
}
