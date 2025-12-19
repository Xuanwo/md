export interface ReadTimeResults {
  text: string
  minutes: number
  time: number
  words: number
}

const DEFAULT_WORDS_PER_MINUTE = 200

function countWords(input: string): number {
  if (!input)
    return 0

  const cjk = input.match(/[\u4E00-\u9FFF]/g)?.length ?? 0
  const latin = input.match(/[A-Za-z0-9]+(?:'[A-Za-z0-9]+)?/g)?.length ?? 0
  return cjk + latin
}

export function estimateReadingTime(input: string, wordsPerMinute = DEFAULT_WORDS_PER_MINUTE): ReadTimeResults {
  const words = countWords(input)
  const minutes = wordsPerMinute > 0 ? words / wordsPerMinute : 0
  const roundedMinutes = Math.max(1, Math.ceil(minutes))

  return {
    text: `${roundedMinutes} min read`,
    minutes,
    time: roundedMinutes * 60 * 1000,
    words,
  }
}

