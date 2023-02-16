## 예제
https://svelte.dev/examples/hacker-news

## 개발
npm run dev

## 서비스할 때
vite --port 8000 --host

## 끼양
```
git config user.name "alicelukas"
git config user.email alicelukas@github.io
npm run build
mv docs docs1
git checkout build
rm -rf docs
mv docs1 docs
git add .
git commit -m "build"
```