install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .

gendiff -h:
	node bin/gendiff.js

stringify:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json


