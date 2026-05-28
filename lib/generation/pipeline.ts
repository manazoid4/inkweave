/**
 * Core generation pipeline: INGEST -> ANALYSE -> OUTLINE -> EXPAND -> COMPILE -> DELIVER
 * Each stage is a pure async function that receives the prior stage's output.
 */

export type Snippet = {
  id: string
  content: string
  order: number
}

export type Outline = {
  title: string
  genre: string
  chapters: { number: number; title: string; summary: string }[]
}

export type Manuscript = {
  title: string
  chapters: { number: number; title: string; content: string }[]
  wordCount: number
}

export type GenerationJob = {
  id: string
  userId: string
  snippets: Snippet[]
  status: 'pending' | 'analysing' | 'outlining' | 'expanding' | 'compiling' | 'done' | 'error'
  outline?: Outline
  manuscript?: Manuscript
  error?: string
  createdAt: string
  updatedAt: string
}
