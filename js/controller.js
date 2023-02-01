import Model from "./model.js";
import View from "./view.js";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View(this.model.getPolishLang());
  }
  bindHandleLoginButton() {
    this.view.handleLoginButton();
  }

  bindHandleRegisterButton() {
    this.view.handleRegisterButton();
  }

  bindChangeLanguageButton() {
    this.view.handleChangeLanguageButton(
      this.model.initPolishLangFlag.bind(this.model),
      this.model.togglePolishLangFlag.bind(this.model),
      this.model.getPolishLang.bind(this.model),
      this.model.setFlagImg,
      this.model.isUserLoggedIn,
      this.model.getDataForDoughnutChart.bind(this.model),
      this.model.getDataForBarChart.bind(this.model),
      this.model.getTransactionTypesEng.bind(this.model),
      this.model.getTransactionTypes.bind(this.model)
    );
  }

  bindHandleLogoutButton() {
    this.view.handleLogoutButton(this.model.logOutUser);
  }

  bindHandleRegistrationForm() {
    this.view.handleRegistrationForm(
      this.model.getRandomDataWhenRegistering.bind(this.model),
      this.model.isUserData,
      this.model.hashPassword,
      this.model.setUserData,
      this.model.getUserData,
      this.model.logInUser,
      this.model.getRegexPatternsObj.bind(this.model),
      this.model.isUserLoggedIn,
      this.model.getLoggedUserData,
      this.model.getAPIData.bind(this.model),
      this.model.getFilteredTransactions.bind(this.model),
      this.model.getSearchData.bind(this.model),
      this.model.getDataForDoughnutChart.bind(this.model),
      this.model.getDataForBarChart.bind(this.model),
      this.model.getPolishLang.bind(this.model),
      this.model.getIconsSrcObj.bind(this.model),
      this.model.getTransactionTypesEng.bind(this.model),
      this.model.getTransactionTypes.bind(this.model)
    );
  }

  bindHandleLoginForm() {
    this.view.handleLoginForm(
      this.model.userExists.bind(this.model),
      this.model.hashPassword,
      this.model.logInUser,
      this.model.isUserLoggedIn,
      this.model.getLoggedUserData,
      this.model.getAPIData.bind(this.model),
      this.model.getFilteredTransactions.bind(this.model),
      this.model.getSearchData.bind(this.model),
      this.model.getDataForDoughnutChart.bind(this.model),
      this.model.getDataForBarChart.bind(this.model),
      this.model.getPolishLang.bind(this.model),
      this.model.getIconsSrcObj.bind(this.model),
      this.model.getRegexPatternsObj.bind(this.model),
      this.model.userEmailExists.bind(this.model),
      this.model.getTransactionTypesEng.bind(this.model),
      this.model.getTransactionTypes.bind(this.model)
    );
  }

  bindHandleFilterForm() {
    this.view.handleFilterForm(
      this.model.isUserLoggedIn,
      this.model.getLoggedUserData,
      this.model.getAPIData.bind(this.model),
      this.model.getFilteredTransactions.bind(this.model),
      this.model.getSearchData.bind(this.model),
      this.model.getTransactionTypes.bind(this.model),
      this.model.getIconsSrcObj.bind(this.model)
    );
  }

  bindHandleSearchForm() {
    this.view.handleSearchForm(
      this.model.isUserLoggedIn,
      this.model.getLoggedUserData,
      this.model.getAPIData.bind(this.model),
      this.model.getFilteredTransactions.bind(this.model),
      this.model.getSearchData.bind(this.model),
      this.model.getTransactionTypes.bind(this.model),
      this.model.getIconsSrcObj.bind(this.model)
    );
  }

  bindHandleChartsSliding() {
    this.view.handleChartsSliding(
      this.model.getCurrentChart.bind(this.model),
      this.model.setCurrentChart.bind(this.model)
    );
  }

  bindHandleShowAllTransactionsButton() {
    this.view.handleShowAllTransactionsButton(
      this.model.isUserLoggedIn,
      this.model.getLoggedUserData,
      this.model.getAPIData.bind(this.model),
      this.model.getFilteredTransactions.bind(this.model),
      this.model.getSearchData.bind(this.model),
      this.model.getTransactionTypes.bind(this.model),
      this.model.getIconsSrcObj.bind(this.model)
    );
  }

  //   Default activities
  displayLoggedInUserNameAfterRefresh() {
    this.view.displayLoggedInUserName(
      this.model.isUserLoggedIn,
      this.model.getLoggedUserData,
      this.model.getPolishLang.bind(this.model)
    );
  }

  async displayChartsAfterRefresh() {
    await this.view.displayCharts(
      this.model.isUserLoggedIn,
      this.model.getDataForDoughnutChart.bind(this.model),
      this.model.getDataForBarChart.bind(this.model),
      this.model.getPolishLang.bind(this.model),
      this.model.getTransactionTypesEng.bind(this.model)
    );
  }

  async displayTransactionsAfterRefresh() {
    await this.view.displayTransactions(
      this.model.isUserLoggedIn,
      this.model.getLoggedUserData,
      this.model.getAPIData.bind(this.model),
      this.model.getFilteredTransactions.bind(this.model),
      this.model.getSearchData.bind(this.model),
      "",
      "",
      this.model.getTransactionTypes.bind(this.model),
      this.model.getIconsSrcObj.bind(this.model),
      this.model.getPolishLang.bind(this.model)
    );
  }

  maintainUserInterfaceBasedOnLanguageAfterRefresh() {
    this.view.changeUserInterfaceBasedOnLanguage(
      this.model.getPolishLang.bind(this.model),
      this.model.getTransactionTypes.bind(this.model),
      this.model.getTransactionTypesEng.bind(this.model)
    );
  }
}

const controller = new Controller();

// Regular activities
controller.bindHandleLoginButton();
controller.bindHandleRegisterButton();
controller.bindChangeLanguageButton();
controller.bindHandleRegistrationForm();
controller.bindHandleLoginForm();
controller.bindHandleFilterForm();
controller.bindHandleSearchForm();
controller.bindHandleLogoutButton();
controller.bindHandleShowAllTransactionsButton();
controller.bindHandleChartsSliding();

// Default activities (while refreshing the page)
controller.displayLoggedInUserNameAfterRefresh();
controller.displayChartsAfterRefresh();
controller.displayTransactionsAfterRefresh();
controller.maintainUserInterfaceBasedOnLanguageAfterRefresh();
