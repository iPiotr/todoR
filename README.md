# todoR
Aplikacja "To-Do List" jest aplikacją webową napisaną w ReactJS, która pozwala na tworzenie i zarządzanie listą zadań. Korzysta ona z bazy danych Firebase do przechowywania informacji o zadaniach.
Funkcjonalności aplikacji:

  •	Dodawanie zadań: Użytkownik może dodać nowe zadanie, wprowadzając jego nazwę w odpowiednim polu i klikając przycisk "+".

  •	Oznaczanie zadań jako wykonane: Użytkownik może oznaczyć zadanie jako wykonane, klikając na odpowiedni przycisk obok zadania lub w treść zadania.

  •	Usuwanie zadań: Użytkownik może usunąć zadanie, klikając na przycisk kosza obok zadania.

  •	Wskaźnik postępu: Obok listy zadań wyświetlona jest liczba zadań i liczba wykonanych zadań, co pozwala użytkownikowi na łatwe śledzenie postępu.

  •	Wsparcie dla języków polskiego i angielskiego: Aplikacja jest dostępna w języku polskim i angielskim. Użytkownik może zmienić język, klikając na odpowiedni skrót danego języka.
  
  • Aplikacja ta posiada także opcję monitorowanie postępu zadań wykonanych przez znajomych, każdy znajomy posiada swój własny profil z wykonanymi zadaniami.

Firebase to platforma oferująca usługi back-endowe dla aplikacji mobilnych i webowych. 
Baza danych w Firebase to NoSQL, co oznacza, że jest ona przechowywana w postaci dokumentów JSON. 
Przykładowa baza danych dla aplikacji ToDo składałaby się z kolekcji "tasks", w której znajdowałyby się dokumenty reprezentujące pojedyncze zadania. 
Każdy rekord w bazie danych posiadałby unikalny identyfikator (np. "id"), a także pola "completed" i "text", odpowiednio oznaczające czy zadanie zostało ukończone i treść zadania. 
Przykładowy rekord mógłby wyglądać następująco: { "id": "5f098a872f8c7a0f4b4d9a9f", "completed": false, "text": "Umyć naczynia" }
}

## Wygląd ##
![App](https://i.imgur.com/nJJZBtV.png)
