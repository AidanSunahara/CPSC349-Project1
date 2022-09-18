#!/usr/bin/env node

import * as dotenv from 'dotenv'
import { createClient } from 'pexels'

dotenv.config()
const client = createClient(process.env.PEXELS_API_KEY)

const pages = process.argv.slice(2)
if (pages.length < 1) {
  pages.push(1)
}

for (const page of pages) {
  client.collections.featured({ page, per_page: 80 }).then(collections => {
    console.log(JSON.stringify(collections, null, 2))
  })
}
