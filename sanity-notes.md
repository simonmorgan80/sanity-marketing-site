Export types after schema changes

npx sanity@latest schema extract --path=./src/sanity/extract.json
npx sanity@latest typegen generate

// Run all

npm run typegen
