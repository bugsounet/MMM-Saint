# MMM-Saint

Ceci est un module pour MagicMirror.<br>
Il permet d'afficher le `Saint du Jour` sur votre Miroir

# Installation

```
cd ~/MagicMirror/modules
git clone https://github.com/bugsounet/MMM-Saint
cd MMM-Saint
npm install
```

# Configuration

Copiez simplement cette partie de code dans votre fichier de configuration de MagicMirror

```js
{
  module: 'MMM-Saint',
  position: "top_center",
  configDeepMerge: true
},
```

## Option

Par defaut, afin de mettre a jour rapidement les données, MMM-Saint vérifie la date du jour toutes les minutes.<br>
Vous pouvez toutefois spéficier un autre interval de mise a jour, si vous le désirez, avec le champs `update` en configuration (le temps sera en ms)

Exemple de configuration, si vous voulez effectuer une verification toutes les 5 mins.

```js
{
  module: 'MMM-Saint',
  position: "top_center",
  configDeepMerge: true,
  config: {
    debug: false,
    update: 1000*60*5,
    personalize: {
      displayTomorrow: false,
      todayText: "Aujourd'hui, nous fêtons",
      tomorrowText: "Demain, nous fêterons",
      displayIcon: true
    }
  }
},
```

# Mise à jour

Une mise à jour de MMM-Saint est disponible ?
Utilisez cette commande:

```sh
cd ~/MagicMirror/modules/MMM-Saint
npm run update
```

# Crédits
  * Programmation: Bugsounet
  * Idées/Mise en page/CSS: 2hdlockness

# Donations
[Donations](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TTHRH94Y4KL36&source=url), si vous aimez mes modules !
