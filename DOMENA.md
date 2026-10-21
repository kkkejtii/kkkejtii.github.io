# Jak podłączyć własną domenę

Strona działa teraz pod darmowym adresem **https://kkkejtii.github.io/** i będzie
działać tak dalej bez żadnych zmian. Ten plik opisuje, co zrobić, **jeśli** zechcesz
podłączyć własną domenę (np. `kkkejtii.pl`). Nic tu nie dzieje się automatycznie —
to instrukcja do wykonania wtedy, gdy podejmiesz decyzję.

---

## 1. Wybór nazwy

Dobra domena dla portfolio: krótka, łatwa do podyktowania przez telefon, bez myślników
i bez cyfr. Propozycje w Twoim charakterze (do sprawdzenia dostępności u rejestratora):

| Domena | Uwaga |
|---|---|
| `kkkejtii.pl` | spójne z Instagramem i TikTokiem (`@kkkejtii`) |
| `kkkejtii.com` | wersja międzynarodowa, jeśli myślisz o klientach z zagranicy |
| `kasiakolodziej.pl` | imię i nazwisko — najlepsze dla klientów B2B |
| `katarzynakolodziej.com` | pełna forma, trudniejsza do podyktowania |

Koszt orientacyjny: `.pl` ok. 10–80 zł/rok, `.com` ok. 50–80 zł/rok (pierwszy rok bywa
promocyjnie tańszy, odnowienie jest droższe — sprawdź cenę **odnowienia**, nie tylko
pierwszego roku). Rejestratorzy: OVH, nazwa.pl, Cloudflare Registrar (najtaniej, ale
tylko domeny międzynarodowe), Namecheap.

Hosting pozostaje darmowy — GitHub Pages nie bierze pieniędzy za własną domenę.
Płacisz wyłącznie za samą nazwę.

---

## 2. Co trzeba zrobić — trzy kroki

### Krok A: wpisy DNS u rejestratora

**Tego nie zmieniam bez Twojego wyraźnego potwierdzenia.** Błąd w DNS może odciąć
pocztę albo wyłączyć stronę na kilka godzin, więc to decyzja do podjęcia świadomie.

W panelu rejestratora, w sekcji „DNS" / „Strefa DNS", dodaj:

**Dla domeny głównej (`kkkejtii.pl`) — cztery rekordy A:**

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

**Opcjonalnie IPv6 — cztery rekordy AAAA:**

```
AAAA   @   2606:50c0:8000::153
AAAA   @   2606:50c0:8001::153
AAAA   @   2606:50c0:8002::153
AAAA   @   2606:50c0:8003::153
```

**Dla `www` — jeden rekord CNAME:**

```
CNAME   www   kkkejtii.github.io.
```

(Adresy IP sprawdzone w dokumentacji GitHuba 21.10.2026. Gdyby GitHub je kiedyś
zmienił, aktualna lista jest tutaj: docs.github.com → Pages → „Managing a custom
domain".)

Uwaga: jeśli w strefie DNS są już rekordy A lub CNAME dla `@`, trzeba je **zastąpić**,
a nie dopisać obok. Jeśli masz pod tą domeną pocztę, **nie ruszaj rekordów MX ani TXT**.

### Krok B: ustawienie w GitHubie

1. Wejdź na `github.com/kkkejtii/kkkejtii.github.io`
2. **Settings** → w lewej kolumnie **Pages**
3. Pole **Custom domain** → wpisz domenę (np. `kkkejtii.pl`) → **Save**
4. GitHub zacznie sprawdzać DNS. Może to potrwać od kilku minut do 24 godzin.
5. Gdy pojawi się zielony komunikat, zaznacz **Enforce HTTPS**
   (ta opcja jest nieaktywna, dopóki GitHub nie wystawi certyfikatu — po prostu
   wróć tu później)

GitHub sam utworzy w repozytorium plik `CNAME`. Jeśli wolisz dodać go wcześniej,
utwórz plik `public/CNAME` zawierający jedną linię z nazwą domeny bez `https://`:

```
kkkejtii.pl
```

### Krok C: jedna zmiana w kodzie

W pliku `lib/site.js` zmień pierwszą linię:

```js
export const SITE_URL = 'https://kkkejtii.github.io';
```

na nową domenę:

```js
export const SITE_URL = 'https://kkkejtii.pl';
```

To jedno miejsce — stąd generują się `sitemap.xml`, `robots.txt`, adresy kanoniczne
i metadane Open Graph (obrazek pokazywany przy wysyłaniu linku na Messengerze czy
LinkedInie). Bez tej zmiany strona będzie działać, ale Google i podglądy linków będą
wskazywać stary adres.

Po zmianie: zatwierdź ją w GitHub Desktop i wypchnij — publikacja przebiegnie sama.

---

## 3. Czego się spodziewać

- **Stary adres nie przestaje działać.** `kkkejtii.github.io` będzie przekierowywać
  na nową domenę. Linki, które już komuś wysłałaś, zadziałają.
- **HTTPS pojawia się z opóźnieniem.** Przez pierwszą godzinę–dobę przeglądarka może
  ostrzegać o certyfikacie. To normalne, nie trzeba nic naprawiać.
- **Pozycjonowanie się zeruje.** Nowa domena startuje w Google od zera. Jeśli zależy
  Ci na widoczności, warto zgłosić ją w Google Search Console razem z `sitemap.xml`.

---

## 4. Gdyby coś nie zadziałało

| Objaw | Przyczyna | Co zrobić |
|---|---|---|
| GitHub pisze „Domain's DNS record could not be retrieved" | DNS jeszcze się nie rozpropagował | odczekać, sprawdzić po godzinie |
| Strona pokazuje 404 | plik `CNAME` zniknął przy kolejnej publikacji | dodać `public/CNAME` (Krok B) |
| „Not Secure" w przeglądarce po dobie | nie zaznaczone **Enforce HTTPS** | Settings → Pages → zaznaczyć |
| Przestała działać poczta na tej domenie | nadpisane rekordy MX | przywrócić MX u rejestratora |

Sprawdzenie, czy DNS już działa (do wpisania w Terminalu):

```
dig +short kkkejtii.pl
```

Powinny pokazać się cztery adresy `185.199.1xx.153`.
