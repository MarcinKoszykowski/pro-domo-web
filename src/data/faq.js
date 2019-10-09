import React from 'react';
import styled from 'styled-components';

const List = styled.li`
  padding-top: 5px;
  list-style: square;
  margin-left: 30px;

  @media screen and (max-width: 1000px) {
    padding-top: 4px;
  }
  @media screen and (max-width: 700px) {
    margin-left: 25px;
    padding-top: 2px;
  }
`;
const SubList = styled(List)`
  list-style-type: disc;
`;
const faq = [
  {
    key: '1',
    question: 'Co muszę zrobić aby otrzymać pożyczkę w Pro Domo Sp. z o.o.?',
    answer: (
      <p>
        Aby otrzymać pożyczkę w Pro Domo Sp. z o.o. wystarczy spotkać się z Doradcą Klienta i
        ustalić z Nim warunki.
      </p>
    ),
  },
  {
    key: '2',
    question: 'Jakie warunki muszę spełnić aby otrzymać pożyczkę w Pro Domo Sp. z o.o.?',
    answer: (
      <>
        <p>
          Pożyczka w Pro Domo Sp. z o.o. może być udzielona tylko osobom fizycznym posiadającym
          pełną zdolność do czynności prawnych i spełniającym następujące warunki:
        </p>
        <ul>
          <List>posiadają ważny dowód osobisty,</List>
          <List>legitymują się polskim obywatelstwem,</List>
          <List>posiadają źródło dochodów zapewniające spłatę zaciągniętej pożyczki,</List>
          <List>
            wiek, łącznie z okresem na jaki została zaciągnięta pożyczka nie może przekraczać:
            <ul>
              <SubList>mężczyźni – 75 lat,</SubList>
              <SubList>kobiety – 82 lata,</SubList>
            </ul>
          </List>
          <List>posiadają miejsce zamieszkania i zameldowania na terenie działania Spółki.</List>
        </ul>
      </>
    ),
  },
  {
    key: '3',
    question: 'Jakie dokumenty wymagane są do otrzymania pożyczki?',
    answer: (
      <p>
        Aby otrzymać pożyczkę od naszego Doradcy należy złożyć Wniosek o udzielenie pożyczki oraz
        dostarczyć kopię dokumentu tożsamości.
      </p>
    ),
  },
  {
    key: '4',
    question: 'Jaką kwotę będę mógł/mogła otrzymać przy pierwszej pożyczce?',
    answer: (
      <p>
        Maksymalna wysokość pierwszej pożyczki to 700zł, jednak w naszej firmie Klienci traktowani
        są indywidualnie. Przed podpisaniem Umowy nasz Doradca ocenia Twoją obecną sytuację
        finansową i wspólnie z Nim ustalana jest optymalna kwota pożyczki biorąc pod uwagę wysokość
        raty tak, aby odpowiadała Twoim możliwościom.
      </p>
    ),
  },
  {
    key: '5',
    question: 'Czy będę mógł/mogła otrzymać pożyczkę jeśli jestem wpisany jako dłużnik w BIK?',
    answer: (
      <p>
        Tak, ponieważ podczas rozpatrywania Wniosku, każdy Klient traktowany jest indywidualnie. Pod
        uwagę brana jest Twoja obecna sytuacja finansowa, dlatego jeżeli jesteś wpisany jako dłużnik
        w BIK, możesz otrzymać od nas pożyczkę.
      </p>
    ),
  },
  {
    key: '6',
    question: 'Po jakim czasie zapłacę pierwszą ratę?',
    answer: (
      <p>
        Spłata rozpoczyna się w ciągu 7 dni od otrzymania pożyczki. Podczas podpisywania Umowy z
        Doradcą Klienta ustalasz: dzień tygodnia oraz godzinę cotygodniowych wizyt, podczas których
        Doradca Klienta będzie odbierał od Ciebie raty. Wszystkie dokonywane przez Ciebie płatności
        zapisywane są w Terminarzu Spłat, który potwierdza dokonywane przez Ciebie płatności,
        dlatego należy go trzymać w bezpiecznym miejscu.
      </p>
    ),
  },
  {
    key: '7',
    question: 'Czy w umowie są jakieś ukryte koszty?',
    answer: (
      <p>
        Nie, w naszej Umowie nie ma żadnych ukrytych kosztów. Wszystkie zapisy treści Umowy oraz
        całkowity koszt pożyczki to informacje dostępne dla Naszego Klienta i otrzymujesz je do
        wglądu przed podpisaniem Umowy.
      </p>
    ),
  },
  {
    key: '8',
    question: 'Co wydarzy się jeżeli nie będę mógł/mogła spłacić pożyczki w terminie?',
    answer: (
      <p>
        Pierwszym krokiem w przypadku pojawienia się opóźnienia w spłatach jest kontakt z Doradcą
        Klienta, który obsługuję Twoją pożyczkę. Doradca Klienta w porozumieniu z Tobą oraz z
        Kierownikiem Oddziału zaproponuje rozwiązanie powstałego problemu.
      </p>
    ),
  },
  {
    key: '9',
    question: 'Czy będę mógł/mogła spłacić pożyczkę wcześniej?',
    answer: (
      <p>
        Biorąc pożyczkę w Pro Domo Sp. z o.o. dajemy Ci taką możliwość, aby otrzymać więcej
        informacji należy skontaktować się z Doradcą Klienta obsługującego Twoją pożyczkę.
      </p>
    ),
  },
  {
    key: '10',
    question: 'Czy w tym samym czasie będę mógł/mogła otrzymać kilka pożyczek?',
    answer: (
      <p>
        Nie, jedna osoba może otrzymać jedną pożyczkę w tym samym czasie. Jeżeli pożyczka zostanie
        spłacona można złożyć wiosek i starać się o kolejną pożyczkę.
      </p>
    ),
  },
  {
    key: '11',
    question: 'Czy Pro Domo Sp. z o.o. działa na terenie całej Polski?',
    answer: (
      <p>
        Nie, obszar działania Pro Domo Sp. z o.o. dostępny jest na stronie głównej. W razie
        jakichkolwiek pytań skontaktuj się z nami poprzez wypełnienie Formularza Kontaktowego lub
        bezpośrednio telefonicznie.
      </p>
    ),
  },
];

export default faq;
