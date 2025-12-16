# Wybór drużyny (Team Selection)

Ekran wyboru drużyny jest pierwszym punktem wejścia gracza do gry. Jego zadaniem jest wybór kadry narodowej, którą gracz będzie zarządzał.
Ekran ten pojawia się przy rozpoczęciu nowej gry,

# Dostępne drużyny

Gracz ma do wyboru listę kadr narodowych, zróżnicowanych pod względem:
- poziomu sportowego,
- liczby zawodników,
- potencjału rozwojowego,
- sytuacji finansowej,
- oczekiwań federacji.
Każda drużyna reprezentuje inny poziom trudności.

# Informacje prezentowane w UI

Dla każdej drużyny wyświetlane są podstawowe informacje, umożliwiające świadomy wybór:
- nazwa kraju,
- ogólna ocena sportowa (np. gwiazdki lub poziom),
- liczba zawodników w kadrze,
- sytuacja finansowa
- oczekiwania federacji
- występy w ostatnich latach, cel kibiców
UI ma charakter dashboardowy, bez animacji real-time. Priorytetem jest czytelność i porównywalność danych.

# Wybór drużyny
Gracz wybiera drużynę poprzez kliknięcie karty drużyny i zatwierdzenia wyboru.
Po zatwierdzeniu drużyna zostaje przypisana do nowej gry,generowany jest początkowy stan sezonu, gracz przechodzi do głównego dashboardu menedżera.

# Logika systemowa (poza UI)
Wybór drużyny powoduje:
- przypisanie zestawu zawodników do gracza,
- ustawienie budżetu początkowego,
- określenie oczekiwań sezonowych (cele),
UI nie tworzy gry, a jedynie przekazuje decyzję do silnika. Cała logika inicjalizacji znajduje się po stronie silnika gry.