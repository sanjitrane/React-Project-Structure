# Usage:

The structure have support:

- Babel
- Typescript
- CSS, SVG
- Webpack
- Jest, React-Testing-Library
- Redux Toolkit
- Deployment on gh-pages

# To Run the project:

- npm install
- npm run start
- http://localhost:3000/

# To Run the tests:

- Write tests in the **tests** folder
- npm run test

# To deploy on gh-pages

- Push the code on your github repository
- Go in settings
- Click on Pages from Left-side navigation
  Keep the following settings:
  - Source: Deploy from a branch
  - Branch: select gh-pages from the first dropdown, root from the second dropdown
  - Save
- Package.json:
  - Add homepage: "https://github.com/{github-username}/{reponame}
- Run npm deploy from terminal
- On successful deployment Terminal will print message "Published"
- On the Github Pages (settings > Pages) "Your site is live at ...."
  - Check for last deployed info (if the latest timestamp is not shown then refresh the page)

Common Issues:

- Assets loading from folder not reflecting on the website (icons, images)
  - check if the path is './assets/....'
