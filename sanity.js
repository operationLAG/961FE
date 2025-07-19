// sanity.js
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'v3dmdzg4', // ← REPLACE THIS
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
})
