# hiof.no

## Generell info

Frontend kode til Høgskolen i Østfold sine sider. Se [http://hiof.github.io/frontend](http://hiof.github.io/frontend) for prosjektstatus.


## Kopibeskyttelse


- Prosjektet er distrubiert under GNU General Public License v3 - se COPYING filen for detaljer. 
- Prosjektet bruker diverse åpen kildekode teknologier. For mer informasjon om lisensieringen av disse kan du lese LICENSE.md filen.
- Prosjektet inneholder submodule-linker til moduler som er kopibeskyttet (disse modulene er tilgjenglig på private repositories kun for HiØ ansatte tilknyttet dette prosjektet).


## Installasjon

    $ git clone https://github.com/hiof/frontend.git
    # Kloner prosjektet inn i din nåværende lokale mappe.

Installer [Node.js](http://nodejs.org) hvis du ikke allerede har det installert.

    $ sudo npm install -g grunt-cli
    $ npm install

Du har nå `$ grunt dev` og `$ grunt prod` tilgjengelig. Disse oppgavene har to forskjellgie formål. `$ grunt prod` er en oppgave som genererer frontend stacken til ./build mappen. `$ grunt dev` er en oppgave som kontinuelig overvåker endringer i dine assets filer for å se om de endres. Hvis en asset fil endres når `$ grunt dev` tråden kjøres vil oppgaver for output generering automatisk kjøres.

## Versjon

* v2.0.0 - Some bugfixes + build prosess updated to use grunt
* v1.3.0 - Ny layout module
* v1.2.0 - Ansatt katalog
* v1.1.0 - Sass is now build in modules
* v1.0.0 - Responsive design av den genrelle malen
* v0.1.1 - Bugfikser
* v0.1.0 - milestone 1 av prosjektet. Inneholder stilsett og funksjonalitet for responsive design av Høgskoleavisa
* v0.0.1 - Initial commit

### Roadmap

v3.0.0.X - Ukentlige releaser etter hvert som sprinter blir ferdige.




### Future goal

* v3.0.0 - Redesign of the information architecture layer + new visual profile 


## Prosjekt informasjon

