export default async bud => {
    bud.entry({
        main: ['index.js'],
        admin: ['admin-panel.js'],
    })

    bud.serve(new URL(`http://localhost:3001`));
    bud.proxy(new URL(`http://127.0.0.1:3477`));
    bud.watch(bud.path(`./**/*.php`));
    bud.babel.setPreset('@babel/preset-env');
    await bud.extensions.add(`@roots/bud-extensions/mini-css-extract-plugin`)
}
