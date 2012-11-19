# hiof.no

## Generell info

Frontend kode til Høgskolen i Østfold sine sider.


## Kopibeskyttelse


- Prosjektet er distrubiert under GNU General Public License v3 - se COPYING filen for detaljer. 
- Prosjektet bruker diverse åpen kildekode teknologier. For mer informasjon om lisensieringen av disse kan du lese LICENSE.md filen.
- Prosjektet inneholder submodule-linker til moduler som er kopibeskyttet (disse modulene er tilgjenglig på private repositories kun for HiØ ansatte tilknyttet dette prosjektet).


## Installasjon

    $ git clone https://github.com/hiof/frontend.git
    # Kloner prosjektet inn i din nåværende lokale mappe.

Se GitHub for en grundig guide https://help.github.com/articles/fork-a-repo

## Versjon

* v1.3.0 - Ny layout module
* v1.2.0 - Ansatt katalog
* v1.1.0 - Sass is now build in modules
* v1.0.0 - Responsive design av den genrelle malen
* v0.1.1 - Bugfikser
* v0.1.0 - milestone 1 av prosjektet. Inneholder stilsett og funksjonalitet for responsive design av Høgskoleavisa
* v0.0.1 - Initial commit

### Roadmap

* v1.4.0 - Forsiden /student & /ansatt
* v1.5.0 - Styling for the device app
* v2.0.0 - Everything converted to the "2012 refresh"


### Future goal

* v3.0.0 - Redesign of the information architecture layer + new visual profile 

## Prosjekt informasjon

Kildekoden til all frontend kode er plassert i /app/assets folderen. Innholdet er delt i 4 mapper, Coffeescript (JavaScript), Fonter, bilder og Sass (CSS).

Fonter og bilder mappene inneholder statiske filer som dynamisk blir linket opp i JavaScript og CSS koden systemet genererer.

Koden er bygget opp i et modulært system slik at man kan endre for eksempel layout eller et design til en boks ved kun å jobbe med de spesifike modulene. Dette setter også krav til deg som utvikler siden du måta høyde for at for eksempel en boks kan brukes på flere plasser noe osm gjør at effekter som for eksempel skygge og avrunding på programmeres deretter.


### CSS

Høgskolens stilark blir gererert til to filer via en CSS forlengelse som heter Sass. Sass har en del tillegsfunksjoner som nestede regler, variabler, mixins(funksjoner), velgeren arv, og mye mer. Sass genererer godt formatert CSS og gjør dine stilark enklere å organisere og vedlikeholde.

Sass filene er delt inn i 5 forskjellige hovedkategorier, verktøy, plugins, typografi, layout og design.

Sass vs Scss


*Verktøy:*

Verktøy innehodler forskjellige standard "verktøy" som for eksempel flyt av bilder og lignende i tilleg til en konfigurasjons fil som inneholder konstant variabler.


* sass/_config.sass
* sass/_tools.sass

*Plugins:*


Plugins er en egen mappe med designfiler som blir brukt av eksterne plugins. Hvis en plugin er kopibeskyttet så vil informasjon om dette finnes øverst i filen.  

* sass/plugins/


*Typografi:*

* sass/_typography.sass


*Layout: *

Prosjektet bruker en layout motor som heter Scalable grid system. Motoren genererer layout størrelser som blir hentet inn i de forskjellige media queries som spessifiserer layout for sitt platform mål.


* sass/_layout.sass
* sass/layout/


*Design:*

Design filene er delt opp i flere forskjellige moduler. Det er en hovedmodul der den generelle stilsettingen er beskrevet som er universiell for alle platformer. Hver platform har deretter sin egen stilsetting.


### Coffeescript

Coffeescript er preprosessor for JavaScript som gjør at språket ser mye enklere ut. En annen stor fordel med å skrive CoffeeScript kontra JavaScript er at man får feilmelding når koden kompilerer til JavaScript. Dette gjør det mye enklere å feilsøke.


## Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Added some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request


## Bruk

### Logoer

Hoved logoer blir gennerert under logo namesopacet og er tilgjenglig med følgende klasser:

.logo-hiof
.logo-hogskoleavisa
.logo-itdrift


Avdelings logoer blir generert under faculty namespacet og er tilgjenglig med følgende klasser:

.faculty-ir
.faculty-it
.faculty-hs
.faculty-oss
.faculty-lu


### Sidebar elementer

Standard klassenavn for en boks som har avrundede hjørner (standard stil) har klasse .box

Eventuelle elementer under .box som har klassen .ribbon får en uthevning. Denne klassen er tilgjenglig i seks forskjellige farger.