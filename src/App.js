// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";
import styled from "styled-components";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 26;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 100;

const SALARY_AMOUNT = 1500;
const DONATE1 = 200;
const DONATE2 = 120;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);
  const getSalary = () => {
    setBalance(balance + SALARY_AMOUNT);

    setPayment([
      {
        name: "Зарплатонька прилетіла!!!",
        amount: SALARY_AMOUNT,
        type: "+"
      },

      ...payment
    ]);
  };
  const Armydonate = () => {
    setBalance(balance - DONATE1);

    setPayment([
      {
        name: "Хлопцям на ЗСУ! Харош!)",
        amount: DONATE1,
        type: "-"
      },
      ...payment
    ]);
  };

  const DONATEFORLIFE = () => {
    setBalance(balance - DONATE2);

    setPayment([
      {
        name: "Притулі на Космодесант 😈",
        amount: DONATE2,
        type: "-"
      },
      ...payment
    ]);
  };

  // Функція для прямого поповнення балансу
  const getMoney = () => {
    setBalance(balance + GET_MONEY);

    setPayment([
      {
        name: "На що донатим цього разу?)",
        amount: GET_MONEY,
        type: "+"
      },
      ...payment
    ]);
  };

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Використовуються кредитні гроші`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  // функціонал транзакцій =====================================
  const [payment, setPayment] = React.useState([]);

  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================
  const LOGIN = `Qazowsky`;
  const PASSWORD = `12345`;

  const [isLogged, setLogged] = React.useState(false);

  // ця функція відкриває вікно в браузері з текстом
  const doLogin = () => {
    const login = prompt("Ваш логін");
    const password = prompt("Ваш пароль");

    if (login === LOGIN && password === PASSWORD) {
      alert(`Ласкаво просимо!`);
      setLogged(true);
    } else {
      if (login !== LOGIN && password !== PASSWORD) {
        return alert(`Неправильний логін та пароль`);
      }

      if (login !== LOGIN) {
        return alert(`Неправильний Логін`);
      }

      if (password !== PASSWORD) {
        return alert(`Неправильний пароль`);
      }
    }
  };

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="DaRK BaNK" onClick={doLogin} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      {isLogged && <Balance balance={balance} />}

      {/* Компонент меню з кнопками */}
      {isLogged && (
        <Menu
          // ось сюди ми передаємо конфігурацію кнопок
          config={[
            {
              name: " Повернись живим ",
              onClick: DONATEFORLIFE,
              img: "/icon/dove-peace-no-war-agreement-svgrepo-com.svg"
            },
            {
              name: "Поповнити баланс",
              onClick: getMoney,
              img: "/icon/peace-talk-peace-no-war-negotiate-svgrepo-com.svg"
            },
            {
              name: "Отримати зарплатню!",
              onClick: getSalary,
              img: "/icon/jet-fighter-military-war-svgrepo-com.svg"
            },
            {
              name: "Задонатити на ЗСУ ! ! !",
              onClick: Armydonate,
              img: "/icon/soldier-army-military-war-svgrepo-com (1).svg"
            }
          ]}
        />
      )}
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      {isLogged && <Payment payment={payment} />}
      {isLogged === false && <NotLogged>Треба увійти в аккаунт</NotLogged>}
    </Page>
  );
}

const NotLogged = styled.div`
  padding: 60px 30px 170px 30px;
  background: #1e1e1e;
  color: #19ddf3;
  text-align: center;
  font-size: 30px;
  margin-top: 560px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
