# Game

By: Thomas Bakken, Elijah C, Stella Marie, Sage Paden, and Mike Workman

A single-player survival game where a player navigates hostile terrain as they hope to sanctuary in a dystopian world ravaged by rogue robots.
Inspired by: [Oregon Trail](https://www.youtube.com/watch?v=FfbGEP087HM)

## **Technologies Used**

- HTML5
- CSS3
- Skeleton 2.0.4 by Dave Gamache
- Node.js
  - Webpack
  - ESLint
  - Jest, Jest-Each
  - Babel

## **Description**



## **Complete Setup**

- Navigate to your new repo
- Clone it

```bash
git clone .../.git
git pull origin main
```

- Load the project's modules library: ```npm install```
- View in browser with ```npm start```

### **Change project references**

package.json
- Line 2 project name

webpack.config.js
- Line 23 title in HtmlWebpackPlugin

README.md
- Line 1 title of project
- Line 3 developer(s) of project
- Line 7 username and repo name in link

index.html
- Line 6 title in head

## **Features**

To run the test suite, use the command ```npm run test``` in the terminal. You can also use ```npx jest```.

To create the production ready code for your project, use the command ```npm run build``` in the terminal.

To build and preview your project, use either ```npm run start``` or ```npm start``` in the terminal.

## **Rendering**

Before publishing your website, app, or api, delete the rules in .eslintrc, "no-console": "off" and "no-unused-vars": "off", then run ```npm run lint```

**Github Pages**

```bash
git add .
git commit -m "Save final changes"
git push origin main
git checkout -b gh-pages
git push origin gh-pages
```

**To update Github Pages**

```bash
git add .
git commit -m "Save changes in main"
git push origin main
git checkout gh-pages
git merge main
git push origin gh-pages
```

### **How to render from dist/**

1. Remove dist/ from .gitignore

2.  
```bash
git add dist
git commit -m "Initial dist subtree commit"
```

3.  
```bash
git subtree push --prefix dist origin gh-pages
```

## **Known Bugs**

Please report any issues in using this template.

## **License**

Refer to [Attributions](./attributions.md)

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Sm Kou
