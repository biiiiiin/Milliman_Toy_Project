## Install & Run

1. cd milliman
2. npm install --legacy-peer-deps
3. npm start


### Unfixed Error
1. category 글씨 중앙 높이 위치
2. title bar 글씨 중앙 위치, 기능 미적용
3. git clone, 설치 이후 첫 실행 시 다음과 같은 error message 출력 => 출력 창의 오른쪽 위 X 버튼 누르면 정상 작동
---
Failed to compile.
[0] 
[0] [eslint] Failed to load parser '@typescript-eslint/parser' declared in 'package.json » eslint-config-react-app#overrides[0]': Cannot find module 'typescript'
[0] Require stack:
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@typescript-eslint/typescript-estree/dist/convert.js
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@typescript-eslint/typescript-estree/dist/ast-converter.js
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@typescript-eslint/typescript-estree/dist/parser.js
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@typescript-eslint/typescript-estree/dist/index.js
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@typescript-eslint/parser/dist/parser.js
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@typescript-eslint/parser/dist/index.js
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@eslint/eslintrc/dist/eslintrc.cjs
[0] ERROR in [eslint] Failed to load parser '@typescript-eslint/parser' declared in 'package.json » eslint-config-react-app#overrides[0]': Cannot find module 'typescript'
[0] Require stack:
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@typescript-eslint/typescript-estree/dist/convert.js
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@typescript-eslint/typescript-estree/dist/ast-converter.js
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@typescript-eslint/typescript-estree/dist/parser.js
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@typescript-eslint/typescript-estree/dist/index.js
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@typescript-eslint/parser/dist/parser.js
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@typescript-eslint/parser/dist/index.js
[0] - /Users/biiiiiin/Desktop/Milliman_Toy_Project/milliman/node_modules/@eslint/eslintrc/dist/eslintrc.cjs