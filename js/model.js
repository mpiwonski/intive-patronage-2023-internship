class Model {
  _data = {
    transactions: [
      [
        {
          date: "2023-01-17",
          type: 2,
          amount: 20,
          balance: 12897.01,
          description: "Zakupy na rynku",
        },
        {
          date: "2023-01-14",
          type: 1,
          amount: 2000,
          balance: 12917.01,
          description: "Zwrot z inwestycji",
        },

        {
          date: "2023-01-11",
          type: 4,
          amount: -100,
          balance: 10917.01,
          description: "Paliwo",
        },
        {
          date: "2023-01-10",
          type: 3,
          amount: 10000,
          balance: 11017.01,
          description: "Wynagrodzenie",
        },
        {
          date: "2023-01-06",
          type: 2,
          amount: -120,
          balance: 1017.01,
          description: "Zakupy spożywcze w Biedronce",
        },
        {
          date: "2023-01-04",
          type: 1,
          amount: 300,
          balance: 1137.01,
          description: "Zwrot pieniędzy od znajomego",
        },
        {
          date: "2023-01-02",
          type: 2,
          amount: -3,
          balance: 837.01,
          description: "Bułki w piekarni",
        },
        {
          date: "2023-01-01",
          type: 4,
          amount: -59.99,
          balance: 840.01,
          description: "Internet",
        },
        {
          date: "2023-01-01",
          type: 2,
          amount: -56.3,
          balance: 900,
          description: "Zakupy spożywcze w Lidlu",
        },
      ],
      [
        {
          date: "2023-01-17",
          type: 2,
          amount: 5,
          balance: 4335,
          description: "Zakupy na rynku",
        },
        {
          date: "2023-01-15",
          type: 1,
          amount: 1000,
          balance: 4330,
          description: "Zwrot z inwestycji",
        },
        {
          date: "2023-01-13",
          type: 4,
          amount: -200,
          balance: 3330,
          description: "Paliwo",
        },
        {
          date: "2023-01-10",
          type: 3,
          amount: 3000,
          balance: 3530,
          description: "Wynagrodzenie",
        },
        {
          date: "2023-01-06",
          type: 2,
          amount: -50,
          balance: 530,
          description: "Zakupy spożywcze w Biedronce",
        },
        {
          date: "2023-01-05",
          type: 1,
          amount: 500,
          balance: 580,
          description: "Zwrot pieniędzy od znajomego",
        },
        {
          date: "2023-01-03",
          type: 2,
          amount: -20,
          balance: 80,
          description: "Pieczywo w piekarni",
        },
        {
          date: "2023-01-02",
          type: 4,
          amount: -100,
          balance: 100,
          description: "Internet",
        },
        {
          date: "2023-01-02",
          type: 2,
          amount: -150,
          balance: 200,
          description: "Zakupy spożywcze w Lidlu",
        },
      ],
      [
        {
          date: "2023-01-16",
          type: 2,
          amount: -30,
          balance: 6120,
          description: "Zakupy na rynku",
        },
        {
          date: "2023-01-14",
          type: 1,
          amount: 1500,
          balance: 6150,
          description: "Zwrot z inwestycji",
        },
        {
          date: "2023-01-13",
          type: 4,
          amount: -150,
          balance: 4650,
          description: "Paliwo",
        },
        {
          date: "2023-01-10",
          type: 3,
          amount: 4000,
          balance: 4800,
          description: "Wynagrodzenie",
        },
        {
          date: "2023-01-10",
          type: 2,
          amount: -5,
          balance: 800,
          description: "Zakupy spożywcze w Biedronce",
        },
        {
          date: "2023-01-05",
          type: 1,
          amount: 400,
          balance: 805,
          description: "Zwrot pieniędzy od znajomego",
        },
        {
          date: "2023-01-05",
          type: 2,
          amount: -15,
          balance: 405,
          description: "Pieczywo w piekarni",
        },
        {
          date: "2023-01-05",
          type: 4,
          amount: -80,
          balance: 420,
          description: "Internet",
        },
        {
          date: "2023-01-02",
          type: 2,
          amount: -100,
          balance: -500,
          description: "Zakupy spożywcze w Lidlu",
        },
      ],
    ],
    transactionTypes: {
      1: "Wpływy - inne",
      2: "Wydatki - zakupy",
      3: "Wpływy - wynagrodzenie",
      4: "Wydatki - inne",
    },
    transactionTypesEng: {
      1: "Income - others",
      2: "Expenses - shopping",
      3: "Income - salary",
      4: "Expenses - others",
    },
  };

  _iconsSrcObj = {
    1: "https://img.icons8.com/fluency/48/null/banknotes.png",
    2: "https://img.icons8.com/fluency/48/null/confectionery.png",
    3: "https://img.icons8.com/fluency/48/null/budget.png",
    4: "https://img.icons8.com/fluency/48/null/shopping-basket.png",
  };

  _regexObj = {
    EMAIL_PATTERN: new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
    USERNAME_PATTERN: new RegExp(/^[A-Za-z0-9\\\/\-_\[\]]{6,16}$/),
    USERNAME_PATTERN_ATLEAST_5_LETTERS: new RegExp(/[a-zA-Z]{5,}/),
    USERNAME_PATTERN_ATLEAST_1_NUMBER: new RegExp(/[0-9]+/),
    PASSWORD_PATTERN: new RegExp(/^.{6,}$/),
  };

  _url = `https://api.npoint.io/38edf0c5f3eb9ac768bd`;
  constructor() {
    this._setRandomDataWhenRegistering();
    this._setPolishLang();
    this.currentChart = 0;
  }

  _getRandomDataWhenRegistering() {
    const lastDataIndex = this._data.transactions.length;
    const randomDataIndex = Math.floor(Math.random() * lastDataIndex);
    let id = 0;
    const transactions = this._data.transactions[randomDataIndex].map(
      (transaction) => {
        const newTransactionObj = {
          date: new Date(transaction.date),
          type: transaction.type,
          amount: transaction.amount,
          balance: transaction.balance,
          description: transaction.description,
          id,
        };
        id++;
        return newTransactionObj;
      }
    );
    return {
      transactions,
      transactionTypes: this._data.transactionTypes,
      transactionTypesEng: this._data.transactionTypesEng,
    };
  }

  async _getTransactionDataAPI() {
    try {
      const dataAPI = await fetch(this._url);
      const {
        transactions: transactionsBeforeUpdate,
        transacationTypes: transactionTypes,
      } = await dataAPI.json();
      let id = 0;
      const transactions = transactionsBeforeUpdate.map((transaction) => {
        const newTransactionObj = {
          date: new Date(transaction.date),
          type: transaction.type,
          amount: transaction.amount,
          balance: transaction.balance,
          description: transaction.description,
          id,
        };
        id++;
        return newTransactionObj;
      });
      return {
        transactions,
        transactionTypes,
      };
    } catch (e) {
      console.log(e);
    }
  }

  _getSearchedData(searchTerm) {
    const { transactions } = this.getLoggedUserData().transactionData;
    return transactions.filter((transaction) => {
      const splittedTransactionDesc = transaction.description.split(" ");
      const cleanedSplitTranDesc = splittedTransactionDesc.map((element) => {
        return element.replace(new RegExp(/[\.\,\;]+/), "").toLowerCase();
      });
      if (cleanedSplitTranDesc.includes(searchTerm.toLowerCase())) {
        return true;
      }
    });
  }

  async hashPassword(password, salt = false) {
    try {
      if (!salt) {
        salt = crypto.randomUUID();
      }

      const saltedPassword = password + salt;

      const encoder = new TextEncoder();
      const encodedSaltedPassword = encoder.encode(saltedPassword);
      const hashedSaltedPassword = await crypto.subtle.digest(
        "SHA-256",
        encodedSaltedPassword
      );

      const hashArray = Array.from(new Uint8Array(hashedSaltedPassword)); // convert buffer to byte array
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      return {
        hashedSaltedPassword: hashHex,
        salt,
      };
    } catch (e) {
      console.log(e);
    }
  }

  _setDataForDoughnutChart(transactionData) {
    let resObj = {};
    const { transactions, transactionTypes, transactionTypesEng } =
      transactionData;

    const tranType = this._isPolishLang
      ? transactionTypes
      : transactionTypesEng;

    transactions.forEach((transaction) => {
      if (!resObj[tranType[transaction.type]]) {
        resObj[tranType[transaction.type]] = 1;
      } else {
        resObj[tranType[transaction.type]] += 1;
      }
    });

    return resObj;
  }

  _setDataForBarChart(transactionData) {
    let resArr = [];
    const { transactions } = transactionData;

    transactions.forEach((transaction) => {
      if (
        !resArr.find(
          (res) =>
            !(new Date(transaction.date) > res.transactionDate) &&
            !(new Date(transaction.date) < res.transactionDate)
        )
      ) {
        resArr.push({
          transactionDate: new Date(transaction.date),
          balance: transaction.balance,
        });
      }
    });

    return resArr.sort(
      (tran1, tran2) => tran1.transactionDate - tran2.transactionDate
    );
  }

  _setRandomDataWhenRegistering() {
    this._transactionData = this._getRandomDataWhenRegistering();
  }

  getRandomDataWhenRegistering() {
    return this._transactionData;
  }

  getAPIData() {
    return this._getTransactionDataAPI();
  }

  getSearchData(searchTerm) {
    return this._getSearchedData(searchTerm);
  }

  getDataForDoughnutChart() {
    return this._setDataForDoughnutChart(
      this.getLoggedUserData().transactionData
    );
  }

  getDataForBarChart() {
    return this._setDataForBarChart(this.getLoggedUserData().transactionData);
  }

  getTransactionTypes() {
    return this._data.transactionTypes;
  }

  getTransactionTypesEng() {
    return this._data.transactionTypesEng;
  }

  logInUser(userObj) {
    localStorage.setItem("loggedUser", JSON.stringify(userObj));
  }

  logOutUser() {
    localStorage.removeItem("loggedUser");
  }

  getLoggedUserData() {
    return JSON.parse(localStorage.getItem("loggedUser"));
  }

  isUserLoggedIn() {
    return localStorage.getItem("loggedUser");
  }

  isUserData() {
    return localStorage.getItem("userData");
  }

  setUserData(userDataObjectArray) {
    localStorage.setItem("userData", JSON.stringify(userDataObjectArray));
  }

  getUserData() {
    return localStorage.getItem("userData");
  }

  userExists(username) {
    if (!this.getUserData()) return false;
    return JSON.parse(this.getUserData()).find(
      (user) => user.username === username
    );
  }

  userEmailExists(username) {
    return JSON.parse(this.getUserData()).find(
      (user) => user.userEmail === username
    );
  }

  togglePolishLangFlag() {
    this._isPolishLang = !this._isPolishLang;
  }

  _setPolishLang() {
    this._isPolishLang =
      localStorage.getItem("isPolishLang") === "true"
        ? true
        : localStorage.getItem("isPolishLang") !== "false";
  }

  getPolishLang() {
    return this._isPolishLang;
  }

  setFlagImg() {
    return localStorage.getItem("isPolishLang") === "true"
      ? "icons/icons8-united-kingdom-48.png"
      : "icons/icons8-poland-48.png";
  }

  initPolishLangFlag() {
    localStorage.setItem(
      "isPolishLang",
      !localStorage.getItem("isPolishLang")
        ? "false"
        : localStorage.getItem("isPolishLang") === "true"
        ? "false"
        : "true"
    );
  }

  getIconsSrcObj() {
    return this._iconsSrcObj;
  }

  _setFilteredTransactions({ transactionData }, selectedOption) {
    const { transactions, transactionTypes } = transactionData;
    return transactions.filter((transaction) => {
      if (transactionTypes[transaction.type] === selectedOption) {
        return true;
      }
    });
  }

  getFilteredTransactions(selectedOption) {
    return this._setFilteredTransactions(
      this.getLoggedUserData(),
      selectedOption
    );
  }

  setCurrentChart(currentChart) {
    this.currentChart = currentChart;
  }

  getCurrentChart() {
    return this.currentChart;
  }

  getRegexPatternsObj() {
    return this._regexObj;
  }
}

export default Model;
