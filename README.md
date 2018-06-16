# Code Ninjas

Code Ninjas is an interactive web app, designed to teach JavaScript to kids aged 7 years and up. Answer questions and level up to become a fully fledged Code Ninja!

This is the front end of the Code Ninjas app. The back end is hosted [here](https://codeninjasserver.herokuapp.com/).

Code Ninjas is a project by TeamJSKids (Ash, Joy, Janet and Jo), created in July 2017. This reskinned version of the front end is by Jo. [View the demo.](https://codeninjas-v2.herokuapp.com/)

## Installing this app locally

```bash
git clone https://github.com/dentednerd/CodeNinjas.git
cd CodeNinjas
npm start
```

## Creating this app on Heroku

This assumes you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed and that you are logged in (`heroku login`).

```bash
heroku create -b https://github.com/heroku/heroku-buildpack-static.git
echo '{ "root": "build/" }' > static.json
sed '/build/d' .gitignore > .gitignore.new && mv .gitignore.new .gitignore
```

## Deploying this app

```bash
npm run build
git add .
git commit -m "Deploying"
git push heroku master
heroku open
```

## To do

1. Colour code the ninja images to match levels
2. Provide a reward / achievement mechanic
3. Animate the ninja avatars
4. Look at reimplementing authentication
5. Provide a female ninja avatar option