# palettable

![website with colors and corresponding hex codes](https://serveon.site/palettable.png)

I found myself frequently using the same colors in apps, which resulted in me frequently opening up my own project implementations to dig for them

Palettable generates a website that demos all the colors that you like so you can get them at the click of a button, hosted wherever you want

All you need to do is fork the repo is give your color a name and color code in `palettable.js`!

If you supply a github username it will also add a link to your github account at the bottom so other people can fork yours and see other stuff you've made

### palettable.js api

palettable.js is a simple json object, a key for your color name, and a value for it's hex code!

here's mine at the time of authoring!

```js
const palettable = {
  colors: [
    {
      "do not merge": "#f9af9d",
    },
    {
      glade: "#1A535C",
    },
    {
      "m@": "#4a148c",
    },
  ],
  githubUsername: "johnstonmatt",
};

export default palettable;
```

example at [https://palettable.ma.ttjohnston.com]() !
