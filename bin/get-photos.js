#!/usr/bin/env node

import * as dotenv from 'dotenv'
import { createClient } from 'pexels'

dotenv.config()
const client = createClient(process.env.PEXELS_API_KEY)

const args = process.argv.slice(2)
const id = args.shift()
if (args.length < 1) {
  args.push(1)
}

for (const page of args) {
  client.collections.media({ id, type: 'photos', page, per_page: 80 }).then(media => {
    console.log(JSON.stringify(media, null, 2))
  })
}
