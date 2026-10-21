# Jak zgłosić stronę do Google

Strona działa pod **https://kkkejtii.github.io/**, ale to nie znaczy, że Google ją zna.
Nowy adres bez żadnych linków z zewnątrz może czekać tygodniami, zanim zostanie
zauważony — albo nie zostać zauważonym wcale. Search Console to darmowe narzędzie
Google, które pozwala zgłosić stronę samemu i zobaczyć, czy i jak Google ją widzi.

Całość zajmuje około 10 minut. Wymaga Twojego logowania do konta Google, więc kroki
1 i 2 robisz sama — ja mogę dołożyć tylko część techniczną w kodzie.

---

## Krok 1: utwórz właściwość

Wejdź na **https://search.google.com/search-console** i zaloguj się kontem Google.

Zobaczysz wybór między dwoma typami. **Wybierz prawy — „Prefiks adresu URL"** i wpisz:

```
https://kkkejtii.github.io/
```

> **Dlaczego nie lewy („Domena")?**
> Typ „Domena" można potwierdzić **wyłącznie** przez wpis DNS, a DNS dla `github.io`
> należy do GitHuba, nie do Ciebie. Nie da się go potwierdzić. To nie jest Twój błąd
> ani ograniczenie do obejścia — po prostu zły typ dla tego adresu.
>
> Gdy kiedyś podłączysz własną domenę (patrz `DOMENA.md`), założysz **nową**
> właściwość i wtedy typ „Domena" zadziała, bo DNS będzie Twój.

Wpisz adres **ze slashem na końcu i z `https://`**. Google traktuje
`https://kkkejtii.github.io/` i `http://kkkejtii.github.io` jako dwie różne rzeczy.

---

## Krok 2: potwierdź, że strona jest Twoja

Google zaproponuje kilka metod. Dwie, które tu zadziałają:

### Metoda A — tag HTML (polecam)

1. Rozwiń **„Tag HTML"**
2. Zobaczysz linijkę w rodzaju:
   ```html
   <meta name="google-site-verification" content="AbC123_dEf456..." />
   ```
3. **Skopiuj samą zawartość `content`** — ten ciąg znaków po `content="`
4. Podaj mi go — dopiszę go do `app/layout.js` i wypchnę przez pull request

   To **nie jest hasło ani token dostępu**. Ten ciąg i tak będzie widoczny w kodzie
   źródłowym strony dla każdego odwiedzającego. Potwierdza tylko, że masz dostęp do
   kodu strony. Spokojnie możesz mi go przekazać.

5. Po opublikowaniu (ok. minuta) wróć do Search Console i kliknij **Zweryfikuj**

### Metoda B — plik HTML

1. Pobierz plik, który poda Google (nazwa typu `google1a2b3c4d.html`)
2. Powiedz mi, gdzie go zapisałaś — przeniosę go do katalogu `public/`,
   skąd trafi pod `https://kkkejtii.github.io/google1a2b3c4d.html`
3. Kliknij **Zweryfikuj**

Obie metody są równie dobre. Metoda A nie wymaga żadnych plików, metoda B żadnego
grzebania w kodzie. **Nie usuwaj potwierdzenia po weryfikacji** — Google sprawdza je
okresowo i cofnie dostęp, jeśli zniknie.

---

## Krok 3: zgłoś mapę strony

To jest ten krok, który naprawdę przyspiesza indeksowanie — reszta to formalności.

W lewym menu: **Mapy witryn** (*Sitemaps*). W pole wpisz:

```
sitemap.xml
```

i kliknij **Prześlij**.

Mapa jest już gotowa i działa — sprawdzone, zawiera **10 adresów** i wszystkie
odpowiadają poprawnie:

| Adres |
|---|
| `/` |
| `/archive/` |
| `/archive/summer-campaign/` |
| `/archive/brand-identity-project/` |
| `/archive/editorial-series/` |
| `/archive/digital-strategy/` |
| `/archive/visual-merchandising/` |
| `/archive/fashion-film/` |
| `/archive/content-series-lifestyle/` |
| `/archive/newsletter-content/` |

Po kilku godzinach status powinien zmienić się na **„Sukces"** i pokazać
10 wykrytych stron. Mapa aktualizuje się sama przy każdej zmianie strony —
zgłaszasz ją tylko raz, na zawsze.

---

## Krok 4: poproś o zindeksowanie strony głównej

Na samej górze Search Console jest pasek **„Sprawdź dowolny adres URL"**. Wklej:

```
https://kkkejtii.github.io/
```

Google odpowie prawdopodobnie **„Adres URL nie jest w Google"** — to normalne na tym
etapie. Kliknij wtedy **Poproś o zindeksowanie**.

Zrób to dla strony głównej i ewentualnie dla `/archive/`. Nie ma sensu klikać tego dla
wszystkich dziesięciu adresów — mapa strony załatwia resztę, a Google ma dzienny limit
takich próśb.

---

## Czego się spodziewać

| Kiedy | Co |
|---|---|
| od razu | weryfikacja i zgłoszenie mapy |
| kilka godzin – 2 dni | mapa przetworzona, status „Sukces" |
| 3 dni – 2 tygodnie | strona główna pojawia się w wynikach |
| 2–6 tygodni | podstrony projektów, pierwsze dane w raportach |

Sprawdzenie, czy już jesteś w Google — wpisz w wyszukiwarkę:

```
site:kkkejtii.github.io
```

Dopóki nic nie wyświetla, indeksowanie jeszcze trwa. **Nie zgłaszaj tej samej strony
wielokrotnie** — to nic nie przyspiesza.

Uczciwie: zgłoszenie sprawia, że Google **wie** o stronie. Nie sprawia, że będziesz
wysoko w wynikach na „marketing strategist Warszawa" — na to pracuje się treścią,
linkami i czasem. Natomiast na własne imię i nazwisko strona powinna się pojawić
stosunkowo szybko, a to jest dokładnie to, czego potrzebuje wizytówka dla klienta,
któremu wcześniej podałaś nazwisko.

---

## Przy okazji: Bing (2 minuty)

**https://www.bing.com/webmasters** pozwala zaimportować wszystko z Search Console
jednym kliknięciem. Bing to niewielki ruch, ale obsługuje też wyszukiwarkę
w Windowsie i ChatGPT. Skoro to i tak dwie minuty — warto.

---

## Gdyby coś nie zadziałało

| Komunikat | Przyczyna | Co zrobić |
|---|---|---|
| „Nie udało się zweryfikować własności" | tag jeszcze nie opublikowany | odczekać minutę po publikacji i spróbować ponownie |
| Mapa: „Nie można pobrać" | literówka — wpisane `/sitemap.xml` z ukośnikiem lub pełny adres | wpisać samo `sitemap.xml` |
| „Strona z przekierowaniem" | adres wpisany bez `https://` | założyć właściwość od nowa z poprawnym adresem |
| „Wykryto stronę – obecnie nie zaindeksowano" | Google zna, ale jeszcze nie dodał | czekać, to normalne przy nowych stronach |

## Po przejściu na własną domenę

Pamiętaj, że trzeba będzie:
1. założyć **nową** właściwość dla nowej domeny (tym razem typ „Domena" zadziała),
2. zgłosić mapę jeszcze raz,
3. starej właściwości **nie usuwać** — przyda się do obserwowania, czy ruch
   przenosi się na nowy adres.
