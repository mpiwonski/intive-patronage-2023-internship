class View {
  /////// Buttons ///////
  btnLogin = document.querySelector(".btnLog");
  btnRegister = document.querySelector(".btnRegister");
  btnLogOut = document.querySelector(".btnLogOut");
  btnChangeLanguage = document.querySelector(".btnChangeLanguage");
  btnSubmitLoginForm = document.querySelector(".form-submit-button-login");
  btnSubmitRegisterForm = document.querySelector(
    ".form-submit-button-register"
  );
  btnFilterTransactions = document.querySelector(".btnFilterTransaction");
  btnShowAllTransactions = document.querySelector(".btnShowAllTransactions");
  btnSearchTransactions = document.querySelector(".btnSearchTransactions");

  /////// Nav bar ///////
  navBar = document.querySelector(".navBar");

  /////// Forms ///////
  registrationForm = document.querySelector(".registerForm");
  loginForm = document.querySelector(".loginForm");
  filterForm = document.querySelector(".filterForm");
  searchForm = document.querySelector(".searchForm");

  /////// Labels ///////
  loginFormUsernameLabel = document.querySelector("#usernameLogin-label");
  loginFormPasswordLabel = document.querySelector("#passwordLogin-label");
  registerFormUsernameLabel = document.querySelector("#usernameRegister-label");
  registerFormPasswordLabel = document.querySelector("#passwordRegister-label");
  registerFormEmailConfirmationLabel = document.querySelector(
    "#emailConfirmation-label"
  );
  filterFormTransactionTypeLabel = document.querySelector(
    "#transactionTypeFilter-label"
  );
  searchFormSearchValueLabel = document.querySelector("#searchValue-label");

  /////// Sections ///////
  transactionsSection = document.querySelector(".section-transactions");
  formsSection = document.querySelector(".section-forms");
  chartsSection = document.querySelector(".section-charts");
  greetingSection = document.querySelector(".section-greeting");

  /////// Form fields ///////
  registrationFormUsernameField = document.querySelector("#usernameRegister");
  registrationFormPasswordField = document.querySelector("#passwordRegister");
  registrationFormEmailField = document.querySelector("#email");
  registrationFormConfirmationEmailField =
    document.querySelector("#emailConfirmation");
  loginFormUsernameField = document.querySelector("#usernameLogin");
  loginFormPasswordField = document.querySelector("#passwordLogin");
  searchFormField = document.querySelector("#searchValue");

  /////// Divs ///////
  loggedInUserDiv = document.querySelector(".loggedInUser");
  transactionsDiv = document.querySelector(".transactions");
  loginFormDiv = document.querySelector(".loginForm-div");
  registerFormDiv = document.querySelector(".registerForm-div");
  chartsDiv = document.querySelector(".charts-div");

  /////// Select ///////
  transactionTypeSelect = document.getElementById("transactionType");

  /////// Headings ///////
  sectionChartsHeading = document.querySelector(".section-charts-heading");
  sectionTransactionsHeading = document.querySelector(
    ".section-transactions-heading"
  );

  /////// Others ///////
  flagLanguageImage = document.querySelector(".appLanguage");
  chartElements = [...document.querySelectorAll(".chart")];
  transactionsDescriptionDesktop = document.querySelector(
    ".transactions-description-desktop"
  );
  transactionsDescriptionMobile = document.querySelector(
    ".transactions-description-mobile"
  );

  constructor(isPolishLang) {
    this._setFlagLanguageImage(isPolishLang);
  }

  /////// UI CHANGES ///////

  changeUserInterfaceBasedOnLanguage(getPolishLang) {
    const isPolishLang = getPolishLang();
    this.btnLogin.textContent = isPolishLang ? "Logowanie" : "Log in";
    this.btnRegister.textContent = isPolishLang ? "Rejestracja" : "Sign up";
    this.btnLogOut.textContent = isPolishLang ? "Wyloguj" : "Log out";

    if (localStorage.getItem("loggedUser")) {
      const userObj = JSON.parse(localStorage.getItem("loggedUser"));

      document.querySelector(".loggedInUserName").textContent = isPolishLang
        ? `Zalogowano jako ${userObj.username}`
        : `Logged in as ${userObj.username}`;
    }

    // Login form
    this.loginFormUsernameLabel.textContent = isPolishLang
      ? "Nazwa u??ytkownika / Email"
      : "Username / Email";
    this.loginFormPasswordLabel.textContent = isPolishLang
      ? "Has??o"
      : "Password";
    this.btnSubmitLoginForm.textContent = isPolishLang ? "Zaloguj" : "Log in";

    // Register form
    this.registerFormUsernameLabel.textContent = isPolishLang
      ? "Nazwa u??ytkownika"
      : "Username";
    this.registerFormPasswordLabel.textContent = isPolishLang
      ? "Has??o"
      : "Password";
    this.registerFormEmailConfirmationLabel.textContent = isPolishLang
      ? "Potwierd?? e-mail"
      : "Confirm e-mail";
    this.btnSubmitRegisterForm.textContent = isPolishLang
      ? "Zarejestruj"
      : "Sign up";

    // Charts
    this.sectionChartsHeading.textContent = isPolishLang ? "Wykresy" : "Charts";

    // Transactions
    this.sectionTransactionsHeading.textContent = isPolishLang
      ? "Historia transakcji"
      : "Transaction history";

    this.filterFormTransactionTypeLabel.textContent = isPolishLang
      ? "Filtruj transakcje"
      : "Filter transactions";

    this.btnFilterTransactions.textContent = isPolishLang
      ? "Poka?? wybrane transakcje"
      : "Show selected transactions";

    this.btnShowAllTransactions.textContent = isPolishLang
      ? "Poka?? wszystkie transakcje"
      : "Show all transactions";

    this.searchFormSearchValueLabel.textContent = isPolishLang
      ? "Wyszukaj transakcje po opisie"
      : "Search transactions by its description";

    this.btnSearchTransactions.textContent = isPolishLang
      ? "Szukaj transakcji"
      : "Search transactions";

    this.transactionsDescriptionDesktop.innerHTML = ``;
    this.transactionsDescriptionMobile.innerHTML = ``;
    this.displayTransactionsDescriptionDesktop(getPolishLang);
    this.displayTransactionsDescriptionMobile(getPolishLang);
  }

  showLoginBtn() {
    this.btnLogin.removeAttribute("hidden");
  }
  hideLoginBtn() {
    this.btnLogin.setAttribute("hidden", "hidden");
  }

  hideRegisterBtn() {
    this.btnRegister.setAttribute("hidden", "hidden");
  }

  showRegisterBtn() {
    this.btnRegister.removeAttribute("hidden");
  }
  clearRegisterFormFields() {
    this.registrationFormUsernameField.value = "";
    this.registrationFormPasswordField.value = "";
    this.registrationFormEmailField.value = "";
    this.registrationFormConfirmationEmailField.value = "";
  }

  clearLoginFormFields() {
    this.loginFormUsernameField.value = "";
    this.loginFormPasswordField.value = "";
  }
  showLogOutBtn() {
    this.btnLogOut.removeAttribute("hidden");
  }

  hideLogOutBtn() {
    this.btnLogOut.setAttribute("hidden", "hidden");
  }

  hideRegistrationForm() {
    this.registerFormDiv.setAttribute("hidden", "hidden");
  }

  hideLoginForm() {
    this.loginFormDiv.setAttribute("hidden", "hidden");
  }

  showRegistrationForm() {
    this.registerFormDiv.removeAttribute("hidden");
  }

  showLoginForm() {
    this.loginFormDiv.removeAttribute("hidden");
  }

  hideFormsSection() {
    this.formsSection.setAttribute("hidden", "hidden");
  }

  showFormsSection() {
    this.formsSection.removeAttribute("hidden");
  }

  hideGreetingSection() {
    this.greetingSection.setAttribute("hidden", "hidden");
  }

  showGreetingSection() {
    this.greetingSection.removeAttribute("hidden");
  }

  hideTransactionsSection() {
    this.transactionsSection.setAttribute("hidden", "hidden");
  }

  showTransactionsSection() {
    this.transactionsSection.removeAttribute("hidden");
  }

  hideChartsSection() {
    this.chartsSection.setAttribute("hidden", "hidden");
  }

  showChartsSection() {
    this.chartsSection.removeAttribute("hidden");
  }

  restartTransactionsDiv() {
    this.transactionsSection.removeChild(
      document.querySelector(".transactions")
    );
    const transactionsDivNode = document.createElement("div");
    transactionsDivNode.classList.add("transactions");
    transactionsDivNode.classList.add("form-style");
    this.transactionsSection.appendChild(transactionsDivNode);
  }

  clearTransactionsDiv() {
    this.transactionsDiv.innerHTML = "";
  }

  clearChartsDiv() {
    this.chartsDiv.innerHTML = "";
  }

  showChart(i, setCurrentChart) {
    let currentChart = i;

    if (currentChart === -1) currentChart = this.chartElements.length - 1;

    if (currentChart === 2) currentChart = 0;

    setCurrentChart(currentChart);

    currentChart === 0
      ? this.chartElements[1].classList.add("chart-hidden")
      : this.chartElements[0].classList.add("chart-hidden");

    this.chartElements[currentChart].classList.toggle("chart-hidden");
  }

  _setFlagLanguageImage(isPolishLang) {
    this.flagLanguageImage.src = isPolishLang
      ? "icons/icons8-united-kingdom-48.png"
      : "icons/icons8-poland-48.png";
  }

  displayLoggedInUserName(isUserLoggedIn, getLoggedUserData, isPolishLang) {
    if (!isUserLoggedIn()) return;
    const userObj = getLoggedUserData();
    console.log(userObj);
    this.hideGreetingSection();

    this.hideRegisterBtn();
    this.hideLoginBtn();

    this.showLogOutBtn();
    this.navBar.classList.add("navBar-logout");
    this.loggedInUserDiv.insertAdjacentHTML(
      "afterbegin",
      isPolishLang()
        ? `<span class="loggedInUserName">Zalogowano jako ${userObj.username}`
        : `<span class="loggedInUserName">Logged in as ${userObj.username}`
    );
  }

  displayTransactionsDescriptionDesktop(isPolishLang) {
    const html = `
          <span>${isPolishLang() ? "Data" : "Date"}</span>
          <span>${isPolishLang() ? "Typ transakcji" : "Transaction type"}</span>
          <span>${isPolishLang() ? "Opis" : "Description"}</span>
          <span>${isPolishLang() ? "Kwota [PLN]" : "Amount [PLN]"}</span>
          <span>${
            isPolishLang() ? "Stan konta [PLN]" : "Account balance [PLN]"
          }</span>
    `;
    this.transactionsDescriptionDesktop.insertAdjacentHTML("afterbegin", html);
  }

  displayTransactionsDescriptionMobile(isPolishLang) {
    const html = `
          <span>${isPolishLang() ? "Typ transakcji" : "Transaction type"}</span>
          <span>${isPolishLang() ? "Opis" : "Description"}</span>
          <span>${isPolishLang() ? "Kwota [PLN]" : "Amount [PLN]"}</span>`;

    this.transactionsDescriptionMobile.insertAdjacentHTML("afterbegin", html);
  }

  ///////////////////////// MAIN FUNCTIONS /////////////////////////

  async displayCharts(
    isUserLoggedIn,
    getDoughnutChartData,
    getBarChartData,
    isPolishLang,
    getTransactionTypesEng
  ) {
    try {
      if (!isUserLoggedIn()) return;

      this.showChartsSection();

      const data = getDoughnutChartData();

      const dataBarObjArr = getBarChartData();

      const barChartData = dataBarObjArr.map((tran) => tran.balance);
      const barChartLabels = dataBarObjArr.map((tran) =>
        new Date(tran.transactionDate).toLocaleDateString()
      );

      let barColors = [];
      barChartData.forEach((data) => {
        if (data < 0) barColors.push("rgba(255,0,0)");
        if (data >= 0) barColors.push("rgba(0,128,0)");
      });

      Chart.defaults.color = "rgb(black)";

      if (Chart.getChart("doughnutChart")) {
        Chart.getChart("doughnutChart").options.plugins.title.text =
          isPolishLang()
            ? "Udzia?? poszczeg??lnych kategorii transakcji w og??lnej liczbie transakcji wg historii"
            : "Distribution of selected transaction categories across all available transactions based on transaction history";
        Chart.getChart("doughnutChart").data.labels = isPolishLang()
          ? Object.keys(data)
          : Object.values(getTransactionTypesEng());
        Chart.getChart("doughnutChart").update();

        if (Chart.getChart("barChart")) {
          Chart.getChart("barChart").options.plugins.title.text = isPolishLang()
            ? "Saldo konta wyra??one w PLN na przestrzeni ostatnich dni wg historii transakcji"
            : "Account balance [PLN] fluctuations over the last few days based on transaction history";
          Chart.getChart("barChart").options.scales.y.title.text =
            isPolishLang() ? "Stan konta [PLN]" : "Account balance [PLN]";
          Chart.getChart("barChart").data.datasets[0].label = isPolishLang()
            ? "Stan konta [PLN]"
            : "Account balance [PLN]";
          Chart.getChart("barChart").options.scales.x.title.text =
            isPolishLang() ? "Data" : "Date";
          Chart.getChart("barChart").update();
        }

        return;
      }

      const configDoughnutChart = {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: Object.values(data),
            },
          ],
          labels: Object.keys(data),
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              text: isPolishLang()
                ? "Udzia?? poszczeg??lnych kategorii transakcji w og??lnej liczbie transakcji wg historii"
                : "Distribution of selected transaction categories across all available transactions based on transaction history",
              display: true,
              padding: 20,
            },
          },
        },
      };

      const configBarChart = {
        type: "bar",
        data: {
          datasets: [
            {
              backgroundColor: barColors,
              data: barChartData,
              label: isPolishLang()
                ? "Stan konta [PLN]"
                : "Account balance [PLN]",
            },
          ],
          labels: barChartLabels,
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                text: isPolishLang()
                  ? "Stan konta [PLN]"
                  : "Account balance [PLN]",
                display: true,
              },
            },
            x: {
              title: {
                text: isPolishLang() ? "Data" : "Date",
                display: true,
              },
            },
          },
          responsive: true,
          plugins: {
            title: {
              text: isPolishLang()
                ? "Saldo konta wyra??one w PLN na przestrzeni ostatnich dni wg historii transakcji"
                : "Account balance [PLN] fluctuations over the last few days based on transaction history",
              display: true,
              padding: 20,
            },
            annotation: {
              annotations: {
                line1: {
                  type: "line",
                  yMin: 0,
                  yMax: 0,
                  borderColor: "rgb(black)",
                  borderWidth: 2,
                  label: {
                    content: "0 PLN",
                    display: true,
                  },
                },
              },
            },
          },
        },
      };

      new Chart(document.querySelector("#doughnutChart"), configDoughnutChart);

      new Chart(document.querySelector("#barChart"), configBarChart);
    } catch (e) {
      console.log(e);
    }
  }

  displayFilterForm(getTransactionTypes) {
    const uniqueTransactionTypes = Object.values(getTransactionTypes());
    let filterOptionsHTML = ``;
    uniqueTransactionTypes.forEach((transactionType) => {
      const html = `
      <option class="transactionType-option" value="${transactionType}">${transactionType}</option>
      `;
      filterOptionsHTML += html;
    });

    this.transactionTypeSelect.insertAdjacentHTML(
      "afterbegin",
      filterOptionsHTML
    );
  }

  displayTransactionsDesktopView(
    transactions,
    transactionTypes,
    transactionsDiv,
    iconsObj,
    isPolishLang
  ) {
    let transactionsHTML = ``;
    transactions.forEach((transaction) => {
      const singleTransactionHTML = `
        <div class="singleTransaction">
            <span class="singleTransaction-date">${new Date(
              transaction.date
            ).toLocaleDateString()}</span>
            <img class="singleTransaction-image" src="${
              iconsObj[transaction.type]
            }" alt="Icon related to transaction type"/>
            <div class="singleTransaction-description-type">
                <span class="singleTransaction-description">${
                  transaction.description
                }</span>
                <span class="singleTransaction-type" style="display: block">${
                  transactionTypes[transaction.type + ""]
                }</span>
            </div>
            <span class="singleTransaction-amount">${
              transaction.amount
            } PLN</span>
            <span class="singleTransaction-balance">${
              transaction.balance
            } PLN</span>
        </div>
      `;
      transactionsHTML += singleTransactionHTML;
    });

    this.showTransactionsSection();
    this.displayTransactionsDescriptionDesktop(isPolishLang);
    transactionsDiv.insertAdjacentHTML("afterbegin", transactionsHTML);
  }

  displayTransactionsMobileView(
    transactions,
    transactionTypes,
    transactionsDiv,
    iconsObj,
    isPolishLang
  ) {
    let transactionsHTML = ``;
    let id = 0;
    transactions.forEach((transaction) => {
      const singleTransactionHTML = `
            <div class="transactionGroupDate transactionGroupDate-hidden" data-transactiondate="${
              transaction.date
            }">${new Date(transaction.date).toLocaleDateString()}</div>
            <div class="singleTransaction singleTransaction-mobile" data-transactionid=${id}>
                <img class="singleTransaction-image" src="${
                  iconsObj[transaction.type]
                }" alt="Icon related to transaction type"/>
                <span class="singleTransaction-description">${
                  transaction.description
                }</span>
                <span class="singleTransaction-amount">${
                  transaction.amount
                } PLN</span>
            </div>
            <div class="singleTransaction  singleTransaction-detailed singleTransaction-detailed-hidden" data-transactionid=${id}>
                <span class="singleTransaction-date">${new Date(
                  transaction.date
                ).toLocaleDateString()}</span>
                <img class="singleTransaction-image" src="${
                  iconsObj[transaction.type]
                }" alt="Icon related to transaction type"/>
                <div class="singleTransaction-description-type">
                    <span class="singleTransaction-description">${
                      transaction.description
                    }</span>
                    <span style="display: block">${
                      transactionTypes[transaction.type + ""]
                    }</span>
                </div>
                <span class="singleTransaction-amount">${
                  transaction.amount
                } PLN</span>
                <span class="singleTransaction-balance">${
                  transaction.balance
                } PLN</span>
            </div>
          
        `;
      transactionsHTML += singleTransactionHTML;
      id++;
    });

    this.showTransactionsSection();
    this.displayTransactionsDescriptionMobile(isPolishLang);
    transactionsDiv.insertAdjacentHTML("afterbegin", transactionsHTML);

    const transactionGroupDateElements = document.querySelectorAll(
      ".transactionGroupDate"
    );
    let usedTransactionGroupDates = [];
    transactionGroupDateElements.forEach((element) => {
      if (
        !usedTransactionGroupDates.includes(element.dataset.transactiondate)
      ) {
        usedTransactionGroupDates.push(element.dataset.transactiondate);
        element.classList.remove("transactionGroupDate-hidden");
      }
    });

    transactionsDiv.addEventListener("click", function expandTransaction(e) {
      if (e.target.classList.contains("transactionGroupDate")) return;

      const elements = [
        ...transactionsDiv.querySelectorAll(".singleTransaction-detailed"),
      ];

      if (e.target.localName === "div") {
        elements.forEach(
          (element) =>
            element.dataset.transactionid !==
              e.target.nextElementSibling.dataset.transactionid &&
            element.classList.add("singleTransaction-detailed-hidden")
        );

        e.target.nextElementSibling.classList.toggle(
          "singleTransaction-detailed-hidden"
        );
      } else if (
        e.target.localName === "img" ||
        e.target.localName === "span"
      ) {
        e.target.parentElement.nextElementSibling.classList.toggle(
          "singleTransaction-detailed-hidden"
        );
      }
    });
  }

  async displayTransactions(
    isUserLoggedIn,
    loggedUserData,
    APIData,
    getFilteredTransactions,
    searchData,
    selectedOption = "",
    searchTerm = "",
    getTransactionTypes,
    getIcons,
    isPolishLang
  ) {
    try {
      if (!isUserLoggedIn()) return;

      let randomData = loggedUserData().transactionData;
      const iconsObj = getIcons();

      const { transactions, transactionTypes } =
        randomData || (await APIData());

      this.transactionTypeSelect.innerHTML = ``;

      this.displayFilterForm(getTransactionTypes);

      // WORKAROUND SOLUTION (eliminating double event listeners)
      this.restartTransactionsDiv();

      if (selectedOption) {
        const filteredTransactions = getFilteredTransactions(selectedOption);

        if (window.innerWidth > 768) {
          this.displayTransactionsDesktopView(
            filteredTransactions,
            transactionTypes,
            document.querySelector(".transactions"),
            iconsObj,
            isPolishLang
          );
        } else {
          this.displayTransactionsMobileView(
            filteredTransactions,
            transactionTypes,
            document.querySelector(".transactions"),
            iconsObj,
            isPolishLang
          );
        }
      } else if (searchTerm) {
        const searchedTransactions = searchData(searchTerm);

        if (window.innerWidth > 768) {
          this.displayTransactionsDesktopView(
            searchedTransactions,
            transactionTypes,
            document.querySelector(".transactions"),
            iconsObj,
            isPolishLang
          );
        } else {
          this.displayTransactionsMobileView(
            searchedTransactions,
            transactionTypes,
            document.querySelector(".transactions"),
            iconsObj,
            isPolishLang
          );
        }
      } else {
        console.log(transactions);
        if (window.innerWidth > 768) {
          this.displayTransactionsDesktopView(
            transactions,
            transactionTypes,
            document.querySelector(".transactions"),
            iconsObj,
            isPolishLang
          );
        } else {
          this.displayTransactionsMobileView(
            transactions,
            transactionTypes,
            document.querySelector(".transactions"),
            iconsObj,
            isPolishLang
          );
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  /////// Form validation ///////
  validateUsername(
    username,
    USERNAME_PATTERN,
    USERNAME_PATTERN_ATLEAST_1_NUMBER,
    USERNAME_PATTERN_ATLEAST_5_LETTERS,
    isPolishLang
  ) {
    if (
      !USERNAME_PATTERN.test(username) ||
      !USERNAME_PATTERN_ATLEAST_5_LETTERS.test(username) ||
      !USERNAME_PATTERN_ATLEAST_1_NUMBER.test(username)
    ) {
      this.registrationFormUsernameField.setCustomValidity(
        isPolishLang()
          ? 'Podana nazwa u??ytkownika ma niepoprawny format. Nazwa u??ytkownika powinna sk??ada?? si?? z przynajmniej 6 znak??w, ale nie mo??e by?? d??u??sza ni?? 16. Dozwolone znaki  to ma??e i du??e litery, liczby i znaki takie jak "-", "_", "[", "]","", "/". Has??o powinno zawiera?? przynajmniej 5 liter i przynajmniej jedn?? cyfr??.'
          : 'Format of a given username is inappropriate. Username should contain at least 6 chars, but at max 16 chars. Chars that are permitted: small and big letters, digits and special chars as "." and "," and ";". Username should contain at least 5 letters and at least 1 digit.'
      );
      this.registrationFormUsernameField.reportValidity();
      this.clearRegisterFormFields();
      return -1;
    } else {
      this.registrationFormUsernameField.setCustomValidity("");
    }
  }

  validatePassword = (userPassword, PASSWORD_PATTERN, isPolishLang) => {
    if (!PASSWORD_PATTERN.test(userPassword)) {
      this.registrationFormPasswordField.setCustomValidity(
        isPolishLang()
          ? "Podane has??o ma niepoprawny format. Has??o powinno sk??ada?? si?? z przynajmniej 6 znak??w."
          : "Format of a given password is inappropriate. Password should contain at least 6 characters."
      );
      this.registrationFormPasswordField.reportValidity();
      this.clearRegisterFormFields();
      this.registrationFormUsernameField.focus();
      return -1;
    } else {
      this.registrationFormPasswordField.setCustomValidity("");
    }
  };

  validateEmail(userEmail, EMAIL_REGEX, isPolishLang) {
    if (!EMAIL_REGEX.test(userEmail)) {
      this.registrationFormEmailField.setCustomValidity(
        isPolishLang()
          ? "Podany adres e-mail ma niepoprawny format. Prosz?? spr??buj ponownie."
          : "Format of a given e-mail address is inappropriate. Please try again."
      );
      this.registrationFormEmailField.reportValidity();
      this.clearRegisterFormFields();
      this.registrationFormUsernameField.focus();
      return -1;
    } else {
      this.registrationFormUsernameField.setCustomValidity("");
    }
  }

  validateEmailConfirmationEmailMatch(
    userEmail,
    userConfirmationEmail,
    isPolishLang
  ) {
    if (userEmail !== userConfirmationEmail) {
      this.registrationFormConfirmationEmailField.setCustomValidity(
        isPolishLang()
          ? "Podane adresy e-mail r????ni?? si?? od siebie. Prosz?? spr??bowa?? ponownie."
          : "Given e-mail addresses are not the same. Please try again."
      );
      this.registrationFormConfirmationEmailField.reportValidity();

      this.clearRegisterFormFields();
      this.registrationFormUsernameField.focus();
      return -1;
    } else {
      this.registrationFormConfirmationEmailField.setCustomValidity("");
    }
  }

  validateUniqueUsername = (userData, username, isPolishLang) => {
    const isUsernameNotUnique = userData.find(
      (user) => user.username === username
    );

    if (isUsernameNotUnique) {
      this.registrationFormUsernameField.setCustomValidity(
        isPolishLang()
          ? "Podana nazwa u??ytkownika ju?? istnieje. Prosz?? wybierz inn??."
          : "Given username already exists. Please choose another one."
      );
      this.registrationFormUsernameField.reportValidity();

      this.clearRegisterFormFields();
      this.registrationFormUsernameField.focus();
      return -1;
    } else {
      this.registrationFormUsernameField.setCustomValidity("");
    }
  };

  validateUniqueEmail(userData, userEmail, isPolishLang) {
    const isAnyUserAlreadyAssociatedWithEmail = userData.find(
      (user) => user.userEmail === userEmail
    );

    if (isAnyUserAlreadyAssociatedWithEmail) {
      this.registrationFormEmailField.setCustomValidity(
        isPolishLang()
          ? "Podany e-mail zosta?? ju?? wykorzystany podczas rejestracji. Prosz?? u??yj inny adres e-mail."
          : "Given e-mail address has been already used. Please choose another one."
      );
      this.registrationFormEmailField.reportValidity();
      this.clearRegisterFormFields();
      this.registrationFormUsernameField.focus();
      return -1;
    } else {
      this.registrationFormUsernameField.setCustomValidity("");
    }
  }

  validateLoginScenarios(
    matchesUserCredentials,
    username,
    EMAIL_REGEX,
    doesUserEmailExist,
    isPolishLang
  ) {
    if (!matchesUserCredentials && !username.includes("@")) {
      this.loginFormUsernameField.setCustomValidity(
        isPolishLang()
          ? "Wprowadzono b????dn?? nazw?? u??ytkownika lub has??o. Prosz?? spr??buj ponownie."
          : "Given username or password is wrong. Please try again."
      );
      this.loginFormUsernameField.reportValidity();
      this.clearLoginFormFields();
      return -1;
    } else if (!EMAIL_REGEX.test(username) && username.includes("@")) {
      this.loginFormUsernameField.setCustomValidity(
        isPolishLang()
          ? "Upewnij si??, ??e wprowadzony adres e-mail jest poprawny i spr??buj zarejestrowa?? si?? ponownie."
          : "Make sure e-mail adress is correct and try to sign up again."
      );
      this.loginFormUsernameField.reportValidity();
      this.clearLoginFormFields();
      return -1;
    } else if (EMAIL_REGEX.test(username) && !doesUserEmailExist(username)) {
      this.loginFormUsernameField.setCustomValidity(
        isPolishLang()
          ? "Nie znaleziono konta powi??zanego z tym adresem e-mail. Zach??camy do za??o??enia konta z podanym wcze??niej adresem e-mail."
          : "No account related to given e-mail address has been found. Sign up with that e-mail address!"
      );
      this.loginFormUsernameField.reportValidity();
      this.clearLoginFormFields();
      return -1;
    } else {
      this.loginFormUsernameField.setCustomValidity("");
    }
  }

  handleRegistrationForm(
    getTransactionData,
    isUserData,
    hashPassword,
    setUserData,
    getUserData,
    logInUser,
    getRegexPatternsObj,
    isUserLoggedIn,
    loggedUserData,
    APIData,
    filteredTransactions,
    searchData,
    doughnutChartData,
    barChartData,
    isPolishLang,
    getIcons,
    getTransactionTypesEng,
    getTransactionTypes
  ) {
    this.registrationForm.addEventListener("submit", async (e) => {
      try {
        e.preventDefault();

        const transactionData = getTransactionData();
        const username = this.registrationFormUsernameField.value;
        const userPassword = this.registrationFormPasswordField.value;
        const userEmail = this.registrationFormEmailField.value;
        const userConfirmationEmail =
          this.registrationFormConfirmationEmailField.value;

        const regexPatternsObj = getRegexPatternsObj();
        if (
          this.validateUsername(
            username,
            regexPatternsObj["USERNAME_PATTERN"],
            regexPatternsObj["USERNAME_PATTERN_ATLEAST_1_NUMBER"],
            regexPatternsObj["USERNAME_PATTERN_ATLEAST_5_LETTERS"],
            isPolishLang
          ) === -1 ||
          this.validatePassword(
            userPassword,
            regexPatternsObj["PASSWORD_PATTERN"],
            isPolishLang
          ) === -1 ||
          this.validateEmail(
            userEmail,
            regexPatternsObj["EMAIL_PATTERN"],
            isPolishLang
          ) ||
          this.validateEmailConfirmationEmailMatch(
            userEmail,
            userConfirmationEmail,
            isPolishLang
          ) === -1
        )
          return;

        if (!isUserData()) {
          const { hashedSaltedPassword, salt } = await hashPassword(
            userPassword
          );

          const userObj = {
            username,
            salt,
            hashedSaltedPassword,
            userEmail,
            transactionData,
          };
          const userDataObjectArray = [userObj];
          setUserData(userDataObjectArray);
          logInUser(userObj);
        } else {
          const userData = JSON.parse(getUserData());

          if (
            this.validateUniqueUsername(userData, username, isPolishLang) ===
              -1 ||
            this.validateUniqueEmail(userData, userEmail, isPolishLang) === -1
          )
            return;

          const { hashedSaltedPassword, salt } = await hashPassword(
            userPassword
          );
          const userObj = {
            username,
            salt,
            hashedSaltedPassword,
            userEmail,
            transactionData,
          };
          const modifiedUserData = [...userData, userObj];
          setUserData(modifiedUserData);
          logInUser(userObj);
        }

        this.clearRegisterFormFields();
        this.hideRegistrationForm();
        this.hideFormsSection();
        this.showLogOutBtn();
        this.displayLoggedInUserName(
          isUserLoggedIn,
          loggedUserData,
          isPolishLang
        );

        await this.displayCharts(
          isUserLoggedIn,
          doughnutChartData,
          barChartData,
          isPolishLang,
          getTransactionTypesEng
        );
        await this.displayTransactions(
          isUserLoggedIn,
          loggedUserData,
          APIData,
          filteredTransactions,
          searchData,
          "",
          "",
          getTransactionTypes,
          getIcons,
          isPolishLang
        );
      } catch (e) {
        console.log(e);
      }
    });
  }

  handleLoginForm(
    doesUserExist,
    hashPassword,
    logInUser,
    isUserLoggedIn,
    loggedUserData,
    APIData,
    filteredTransactions,
    searchData,
    doughnutChartData,
    barChartData,
    isPolishLang,
    getIcons,
    getRegexPatternsObj,
    doesUserEmailExist,
    getTransactionTypesEng
  ) {
    this.loginForm.addEventListener("submit", async (e) => {
      try {
        e.preventDefault();

        const username = this.loginFormUsernameField.value;
        const password = this.loginFormPasswordField.value;

        const userExists = doesUserExist(username);

        let matchesUserCredentials = false;
        if (userExists) {
          const { hashedSaltedPassword } = await hashPassword(
            password,
            userExists.salt
          );

          if (userExists.hashedSaltedPassword === hashedSaltedPassword) {
            matchesUserCredentials = true;
          }
        }

        const EMAIL_REGEX = getRegexPatternsObj()["EMAIL_PATTERN"];
        const validationResult = this.validateLoginScenarios(
          matchesUserCredentials,
          username,
          EMAIL_REGEX,
          doesUserEmailExist,
          isPolishLang
        );
        if (validationResult === -1) return;

        logInUser(userExists);
        this.clearLoginFormFields();
        this.hideLoginForm();
        this.hideFormsSection();

        this.displayLoggedInUserName(
          isUserLoggedIn,
          loggedUserData,
          isPolishLang
        );
        await this.displayCharts(
          isUserLoggedIn,
          doughnutChartData,
          barChartData,
          isPolishLang,
          getTransactionTypesEng
        );
        await this.displayTransactions(
          isUserLoggedIn,
          loggedUserData,
          APIData,
          filteredTransactions,
          searchData,
          "",
          "",
          doughnutChartData,
          getIcons,
          isPolishLang
        );
      } catch (e) {
        console.log(e);
      }
    });
  }

  handleFilterForm(
    isUserLoggedIn,
    loggedUserData,
    APIData,
    filteredTransactions,
    searchData,
    getTransactionTypes,
    getIcons
  ) {
    this.filterForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const selectedOption = this.transactionTypeSelect.value;

      await this.displayTransactions(
        isUserLoggedIn,
        loggedUserData,
        APIData,
        filteredTransactions,
        searchData,
        selectedOption,
        "",
        getTransactionTypes,
        getIcons
      );
    });
  }

  handleSearchForm(
    isUserLoggedIn,
    loggedUserData,
    APIData,
    filteredTransactions,
    searchData,
    getTransactionTypes,
    getIcons
  ) {
    this.searchForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const searchTerm = this.searchFormField.value;

      this.searchFormField.value = "";

      await this.displayTransactions(
        isUserLoggedIn,
        loggedUserData,
        APIData,
        filteredTransactions,
        searchData,
        "",
        searchTerm,
        getTransactionTypes,
        getIcons
      );
    });
  }

  handleRegisterButton() {
    this.btnRegister.addEventListener("click", () => {
      this.showFormsSection();
      this.hideGreetingSection();

      this.hideLoginForm();
      this.showLoginBtn();

      this.showRegistrationForm();
      this.hideRegisterBtn();
    });
  }

  handleLoginButton() {
    this.btnLogin.addEventListener("click", () => {
      this.showFormsSection();
      this.hideGreetingSection();

      this.hideRegistrationForm();
      this.showRegisterBtn();

      this.showLoginForm();
      this.hideLoginBtn();
    });
  }

  handleLogoutButton(logOutUser) {
    this.btnLogOut.addEventListener("click", () => {
      logOutUser();
      this.hideLogOutBtn();
      document.querySelector(".loggedInUserName").remove();

      this.hideTransactionsSection();
      this.clearTransactionsDiv();

      this.hideChartsSection();
      this.clearChartsDiv();

      this.showLoginBtn();
      this.showRegisterBtn();

      this.showGreetingSection();

      location.reload();
    });
  }

  handleShowAllTransactionsButton(
    isUserLoggedIn,
    loggedUserData,
    APIData,
    filteredTransactions,
    searchData,
    getTransactionTypes,
    getIcons
  ) {
    this.btnShowAllTransactions.addEventListener("click", async () => {
      await this.displayTransactions(
        isUserLoggedIn,
        loggedUserData,
        APIData,
        filteredTransactions,
        searchData,
        "",
        "",
        getTransactionTypes,
        getIcons
      );
    });
  }

  handleChangeLanguageButton(
    initPolishLangFlag,
    togglePolishLangFlag,
    getPolishLangFlag,
    setFlagImg,
    isUserLoggedIn,
    doughnutChartData,
    barChartData,
    getTransactionTypesEng
  ) {
    this.btnChangeLanguage.addEventListener("click", async () => {
      initPolishLangFlag();
      togglePolishLangFlag();

      this.flagLanguageImage.src = setFlagImg();
      this.changeUserInterfaceBasedOnLanguage(getPolishLangFlag);
      await this.displayCharts(
        isUserLoggedIn,
        doughnutChartData,
        barChartData,
        getPolishLangFlag,
        getTransactionTypesEng
      );
    });
  }

  handleChartsSliding(getCurrentChart, setCurrentChart) {
    this.chartsDiv.addEventListener("click", (e) => {
      if (e.target.localName !== "a") return;

      if (e.target.classList.contains("anchor-prev-chart")) {
        this.showChart(getCurrentChart() - 1, setCurrentChart);
      }

      if (e.target.classList.contains("anchor-next-chart")) {
        this.showChart(getCurrentChart() + 1, setCurrentChart);
      }
    });
  }
}

export default View;
