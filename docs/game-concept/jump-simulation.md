## Cel dokumentu

Celem dokumentu jest opisanie **modelu symulacji pojedynczego skoku narciarskiego** w grze Ski Jump Manager.

Dokument:
- opisuje logikę i zależności,
- jest niezależny od UI oraz technologii,
- stanowi podstawę do implementacji w silniku gry,
- umożliwia późniejszy balans i rozbudowę systemu.

---

## Założenia ogólne

- Skok nie jest zdarzeniem losowym, lecz wynikiem **modelu z kontrolowaną losowością**.
- Gracz nie steruje skokiem bezpośrednio.
- Każdy skok jest konsekwencją:
  - potencjału zawodnika,
  - jego aktualnego stanu,
  - warunków konkursowych,
  - niewielkiego czynnika losowego.

Losowość **nigdy nie dominuje** nad statystykami.

---

## Dane wejściowe symulacji

Symulacja pojedynczego skoku przyjmuje następujące dane:

### Zawodnik
- atrybuty stałe (Attributes),
- stan dynamiczny (State).

### Kontekst skoku
- typ i wielkość skoczni,
- punkt K,
- belka startowa,
- presja konkursu,
- warunki zewnętrzne (np. wiatr).

---

## Wiatr i warunki zewnętrzne

Warunki wiatrowe są generowane na dwóch poziomach:
- **globalnym** (charakter konkursu),
- **lokalnym** (konkretny skok).

Wiatr wpływa na:
- **fizyczną długość skoku**,
- decyzje dotyczące belki startowej,
- **rekompensatę punktową**.

Losowość wiatru jest ograniczona i kontrolowana, aby:
- zachować realizm,
- umożliwić balans,
- generować nieprzewidywalne, lecz uczciwe sytuacje konkursowe.

---

## Etapy symulacji skoku

Symulacja skoku przebiega w kilku logicznych krokach, które zawsze są wykonywane w tej samej kolejności.

---

## 1. Efektywność najazdu

Efektywność najazdu opisuje zdolność zawodnika do generowania oraz wykorzystania prędkości najazdowej.

Wpływają na nią:
- **Inrun Technique** (atrybut stały),
- **Fatigue** (stan dynamiczny),
- **Form** (stan dynamiczny),
- **Confidence** (stan dynamiczny).

Efektywność ta **nie jest prędkością**, lecz parametrem pośrednim wykorzystywanym do jej obliczenia.

---

## 2. Bazowa prędkość najazdowa

Bazowa prędkość najazdowa wynika z:
- charakterystyki skoczni,
- ustawienia belki startowej.

Jest to wartość niezależna od zawodnika i wspólna dla wszystkich startujących przy tych samych ustawieniach.

---

## 3. Finalna prędkość najazdowa

Finalna prędkość najazdowa jest obliczana na podstawie:
- bazowej prędkości skoczni,
- efektywności najazdu zawodnika,
- wpływu zmęczenia,
- niewielkiego czynnika losowego.

Losowy czynnik:
- ma bardzo mały zakres (np. ±0.1–0.3 km/h),
- symuluje drobne, nieprzewidywalne różnice,
- nigdy nie decyduje samodzielnie o wyniku skoku.

Prędkość najazdowa istnieje **wyłącznie w kontekście pojedynczego skoku** i nie jest zapisywana jako statystyka zawodnika.

---

## 4. Faza wybicia

Faza wybicia wykorzystuje:
- **Takeoff**,
- finalną prędkość najazdową,
- aktualny stan zawodnika.

Jej wynik wpływa na:
- jakość początku lotu,
- stabilność dalszej fazy skoku.

---

## 5. Faza lotu

Faza lotu jest głównym źródłem długości skoku.

Wpływają na nią:
- **Flight**,
- jakość wybicia,
- warunki zewnętrzne,
- forma i pewność siebie zawodnika.

Na tym etapie obliczana jest **bazowa długość skoku**.

---

## 6. Lądowanie i styl

Lądowanie wpływa na:
- noty stylowe,
- końcowy wynik punktowy skoku.

Wpływają na nie:
- **Landing**,
- **Mental**,
- drobny czynnik losowy.

Noty stylowe są **pośrednio powiązane z osiągniętą odległością**, lecz nie wynikają z niej wprost.

---

## 7. Presja konkursowa

Presja konkursowa działa jako **modyfikator negatywny**, szczególnie dla zawodników o niskim poziomie atrybutu **Mental**.

Jej wpływ:
- rośnie wraz z rangą konkursu,
- może obniżać stabilność i powtarzalność skoków,
- nie działa liniowo.

---

## 8. Wynik skoku

Wynikiem symulacji pojedynczego skoku są:
- długość skoku,
- noty stylowe,
- rekompensata za warunki zewnętrzne (np. wiatr),
- łączna liczba punktów.

Wynik ten:
- nie jest gwarantowany nawet przy wysokich statystykach,
- zawsze mieści się w realistycznym zakresie,
- może być analizowany i debugowany na podstawie danych wejściowych.

---

## Założenia projektowe

- brak pełnej kontroli gracza nad wynikiem,
- brak skoków „idealnych” gwarantowanych statystykami,
- każdy skok jest unikalny, ale przewidywalny w długim okresie,
- model musi być łatwy do balansowania.
