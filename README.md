# Strapi intro

## Teknologier

Frontenden til portfolio-appen er skrevet i [React ⚛️](https://react.dev/) og [NextJs 🔼](https://nextjs.org/) med `app`-folder.
Der brukes [NextUI 🧱](https://nextui.org/) til noen av komponentene, og [tailwindcss 🎨](https://tailwindcss.com/) til stilsetting.

## 🔤 Kom i gang!

### 📦 Kodekloning og avhengigheter

Før du kan begynne med selve workshoppen må vi laste ned prosjektet og installere litt avhengigheter.

1. Du må å ha [`node`](https://nodejs.org/) installert.
2. `git clone` prosjektet ned til din maskin
3. Gå inn i både `cms`-mappen og `portfolio`-mappen og innstallerer avhengighetene med `npm install`
4. Det _kan_ hende du må installere [`sqlite`](https://www.sqlite.org/index.html)

### 🚀 Starte opp appene

#### 👤 Starte opp CMSet

Strapi-CMSet starter du i mappen `cms` med `npm run develop` og kjører på [`http://localhost:1337`](http://localhost:1337) eller [`http://127.0.0.1:1337`](http://127.0.0.1:1337).
Første gang du åpner CMSet må du lage deg en bruker, som automatisk blir gitt administrator-rettigheter til CMSet.

> P.S Brukerdetailjene vil kun bli lagret lokalt i din egen database.

- Portfolioen starter du i mappen `portfolio` med `npm run dev` og kjører på [`http://localhost:3000`]

### 🏷️ Lage den første Content typen

For å komme i gang kan vi begynne med å lage en content type for en `author` som vil være eieren av portfolioen.
Begynn med et felt for navn og en kort biografi (`name` og `bio`)

Gå deretter over til content og lag en ny author, og fyll ut feltene.

### 🤐 Sette opp klienthemmelighetene

For å snakke med Strapi-CMSet vårt må vi enten gjøre content typen tilgjengelig for public brukere, eller benytte oss av et API-token på alle requestene.

Vi går for enkleste vei her, og gir tilgang til content-typene for `Public` rollen.
`Settings > Roles > Public` åpne fanen for `Author` og gi `find`-tilgang.

### 🎈 Hente de første feltene

Med strapi blir det laget endepunkter for hver content type. Du kan hente ut `author`-typen på endepunktet `/api/author` ved bruk av fetch.

Funksjonen brukes allerede i appen, og du kan forvente at dataen dukker opp hvis den er implementert riktig!

### 📸 Legg til et felt for bilde

Vi trenger et fint bilde av forfatteren. Legg til støtte for et bilde av forfatteren i CMSet og legg til et bilde i CMSet.

Hopp over til `app/components/author/AuthorSection.tsx` og implementer uthentingen av bildet.

> Ikke alle felter blir med i responsen fra API-et fra før. Man kan bruke query-parametere for å hente ut feltene man ønsker Dokumentasjonen ligger [her](https://docs.strapi.io/dev-docs/api/rest/populate-select)

### 📎 SoMe lenker

Det er lagt opp for å liste ut diverse SoMe-lenker på forsiden av portfolioen i `AuthorSection.tsx`. Lag en fin struktur på _content typen_ til forfatteren for å legge til SoMe lenker for Github, LinkedIn og Twitter/X. List de så ut på forsiden.

### 🧳 Over til prosjekter

Lag en ny type _Content type_ for prosjekter som skal vises frem i portfolioen. Denne _bør_ inneholde felter for prosjektnavn (`projectName`), en kort beskrivelse (`shortDescription`), en slug (`slug`) og et bilde (`image`).

Fyll inn litt info om et prosjekt _(ChatGPT er god på å lage dummy-data, og unsplash.com har fine bilder ✨)_, og implementer `getProjects` i `utils/projects`.

Fiks i samme slengen uthentingen av bildet som skal vises på forsiden i `ProjectCard.tsx`.

> P.S Slug kan lages med en UID-type i Strapi

### 📄 Prosjektsidene

Fra forsiden og under `/prosjekter` ligger alle prosjektene. Trykker man videre skal man kunne lese litt i dybden om hvert enkelt prosjekt. Legg til nye felter for en liste med nøkkelord (`keywords`), dato (`date`) fyll ut litt forskjellig informasjon på disse.

Koden for prosjektsidene finner du under `/prosjekter/[slug]/page.tsx` og du må implementere `getProject` i `/utils/project.ts` for uthenting av et spesifikt prosjekt

> For å filtrere resultater i API-kallet kan du bruke [`filters`](https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#filtering) query-parameteret..

### 💰 Riktekst-innhold

Det finnes flere måter å ta riktekst-input i Strapi, men det er ikke noe dedikert bibliotek for å rendre rikteksten i frontenden.

Lag et riktekstfelt som bruker _markdown_-format.

Ta i bruk [`react-markdown`](https://github.com/remarkjs/react-markdown) for å rendre ut riktekst-innholdet til prosjektet.

> P.S Det ligger en `components` config for react-markdown i `/utils/richtextConfig.ts` som kan brukes.

> Se gjerne på de andre formatene for riktekst ser ut.

### 🫶 Favorittprosjekter

Akkurat nå rendres det kun ut et tilfeldig utvalg av prosjekter på forsiden. Lag funksjonalitet så forfatteren kan velge sine favorittprosjekter å vise frem på forsiden!
