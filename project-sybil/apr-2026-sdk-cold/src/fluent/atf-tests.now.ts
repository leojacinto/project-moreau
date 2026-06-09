import { Test } from '@servicenow/sdk/core'

export const testNavigateToRequests = Test(
  { $id: Now.ID['atf-navigate-requests'], name: 'Navigate to Travel Requests' },
  (ATF) => {
    ATF.applicationNavigator.navigateToModule({
      $id: Now.ID['atf-step-nav-requests'],
      module: 'My Requests',
    })
  },
)

export const testNavigateToExpenses = Test(
  { $id: Now.ID['atf-navigate-expenses'], name: 'Navigate to Expenses' },
  (ATF) => {
    ATF.applicationNavigator.navigateToModule({
      $id: Now.ID['atf-step-nav-expenses'],
      module: 'My Expenses',
    })
  },
)

export const testNavigateToPolicies = Test(
  { $id: Now.ID['atf-navigate-policies'], name: 'Navigate to Policies' },
  (ATF) => {
    ATF.applicationNavigator.navigateToModule({
      $id: Now.ID['atf-step-nav-policies'],
      module: 'Travel Policies',
    })
  },
)

export const testNavigateToDelegations = Test(
  { $id: Now.ID['atf-navigate-delegations'], name: 'Navigate to Delegations' },
  (ATF) => {
    ATF.applicationNavigator.navigateToModule({
      $id: Now.ID['atf-step-nav-delegations'],
      module: 'Delegations',
    })
  },
)

export const testNavigateToApprovals = Test(
  { $id: Now.ID['atf-navigate-approvals'], name: 'Navigate to Approvals Queue' },
  (ATF) => {
    ATF.applicationNavigator.navigateToModule({
      $id: Now.ID['atf-step-nav-approvals'],
      module: 'Awaiting Approval',
    })
  },
)

export const testNavigateToFinance = Test(
  { $id: Now.ID['atf-navigate-finance'], name: 'Navigate to Finance Queue' },
  (ATF) => {
    ATF.applicationNavigator.navigateToModule({
      $id: Now.ID['atf-step-nav-finance'],
      module: 'Finance Queue',
    })
  },
)

export const testOpenNewRequest = Test(
  { $id: Now.ID['atf-open-new-request'], name: 'Open New Travel Request Form' },
  (ATF) => {
    ATF.form_SP.openNewForm({
      $id: Now.ID['atf-step-open-request'],
      table: 'x_snc_apr_tv3b_request',
    })
  },
)

export const testOpenNewExpense = Test(
  { $id: Now.ID['atf-open-new-expense'], name: 'Open New Expense Form' },
  (ATF) => {
    ATF.form_SP.openNewForm({
      $id: Now.ID['atf-step-open-expense'],
      table: 'x_snc_apr_tv3b_expense',
    })
  },
)

export const testSetRequestField = Test(
  { $id: Now.ID['atf-set-request-field'], name: 'Set Travel Request Fields' },
  (ATF) => {
    ATF.form_SP.openNewForm({
      $id: Now.ID['atf-step-open-form'],
      table: 'x_snc_apr_tv3b_request',
    })
    ATF.form_SP.setFieldValue({
      $id: Now.ID['atf-step-set-city'],
      table: 'x_snc_apr_tv3b_request',
      fieldValues: {
        x_snc_apr_tv3b_destination_city: 'Berlin',
      },
    })
  },
)

export const testMenuVisibility = Test(
  { $id: Now.ID['atf-menu-visibility'], name: 'Verify Travel Menu Visibility' },
  (ATF) => {
    ATF.applicationNavigator.moduleVisibility({
      $id: Now.ID['atf-step-menu-vis'],
      visibleModules: ['My Requests'],
      assertVisible: 'at_least_modules_visible',
    })
  },
)

export const testCatalogRequestSubmission = Test(
  { $id: Now.ID['atf-catalog-submit'], name: 'Submit Travel via Catalog' },
  (ATF) => {
    ATF.catalog_SP.openRecordProducer({
      $id: Now.ID['atf-step-open-catalog'],
      recordProducer: 'Submit Travel Request',
    })
  },
)
