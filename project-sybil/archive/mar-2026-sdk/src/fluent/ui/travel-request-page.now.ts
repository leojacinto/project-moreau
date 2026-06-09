import { UiPage } from '@servicenow/sdk/core'
import indexPage from '../../client/index.html'

UiPage({
  $id: Now.ID['travel_request_ui_page'],
  endpoint: 'x_snc_travel_request_ui.do',
  description: 'Travel Request custom UI Page',
  category: 'general',
  html: indexPage,
  direct: true,
})
