# Cel dokumentu

Celem tego dokumentu jest opisanie modelu zawodnika wykorzystywanego w silniku gry Ski Jump Manager.

Model zawodnika:
- jest niezależny od UI,
- stanowi podstawę symulacji skoków,
- umożliwia podejmowanie decyzji menedżerskich,
- jest rozszerzalny w kolejnych etapach projektu.

## Struktura zawodnika

Zawodnik składa się z dwóch głównych części:
- atrybutów stałych (talent),
- stanu dynamicznego (aktualna dyspozycja).

Rozdzielenie tych warstw pozwala odróżnić potencjał zawodnika od jego bieżącej formy.

## Atrybuty stałe (Attributes)

Atrybuty stałe opisują długoterminowy potencjał sportowy zawodnika.  
Zmieniają się wolno i są podstawą symulacji skoku.

### Lista atrybutów

- **Inrun Technique (Prędkość najazdowa)**
  Określa zdolność zawodnika do generowania oraz efektywnego wykorzystania prędkości najazdowej.  
  Nie jest bezpośrednio prędkością, lecz wpływa na jej osiąganą wartość.

- **Takeoff (Wybicie)**  
  Odpowiada za jakość wybicia i stabilność początku lotu.

- **Flight (Lot)**  
  Kluczowy atrybut wpływający na długość skoku i utrzymanie się w powietrzu.

- **Landing (Lądowanie)**  
  Wpływa na noty stylowe oraz ryzyko słabego zakończenia skoku.

- **Mental (Psychika)**  
  Określa odporność na presję oraz stabilność w ważnych konkursach.

### Zakres wartości

Każdy atrybut mieści się w zakresie: 0 - 100


## Stan dynamiczny (State)

Stan dynamiczny opisuje bieżącą dyspozycję zawodnika i podlega częstym zmianom w trakcie sezonu.

### Lista parametrów

- **Form (Forma)**  
  Krótkoterminowa dyspozycja sportowa.  
  Może przyjmować wartości dodatnie i ujemne.

- **Fatigue (Zmęczenie)**  
  Określa poziom obciążenia organizmu zawodnika.

- **Confidence (Pewność siebie)**  
  Reprezentuje aktualny stan psychiczny zawodnika, zależny od wyników.

### Zakresy wartości
  Form: -10 .. +10
  Fatigue: 0 .. 100
  Confidence: 0 .. 100

## Wpływ na symulację

- Atrybuty stałe określają maksymalny potencjał skoku.
- Stan dynamiczny modyfikuje wynik w krótkim okresie.
- Ten sam zawodnik może osiągać różne rezultaty w zależności od formy, zmęczenia i presji.

Silnik gry nigdy nie zakłada pełnej kontroli gracza nad wynikiem.

## Przykładowy model danych
const competitor = {
  id: "jumper_001",
  name: "Jan Kowalski",
  nationality: "POL",
  age: 24,

  attributes: {
    inrunTechnique: 80,
    takeoff: 78,
    flight: 85,
    landing: 75,
    mental: 70
  },

  state: {
    form: 2,
    fatigue: 25,
    confidence: 60
  }
};
