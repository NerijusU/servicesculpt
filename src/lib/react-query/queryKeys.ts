export enum QueryKeys {
  CREATE_USER_ACCOUNT = 'createUserAccount',

  GET_FILE_PREVIEW = 'getFilePreview',

  // Users
  GET_USER = 'getUser',
  GET_CURRENT_USER = 'getCurrentUser',
  UPDATE_USER = 'updateUser',
  GET_USERS = 'getUsers',
  GET_USER_BY_ID = 'getUserById',
  GET_USER_BY_USERNAME = 'getUserByUsername',
  GET_USER_ID_BY_USERNAME = 'getUserIdByUsername',

  // Offers
  GET_OFFERS = 'getOffers',
  GET_USER_OFFERS = 'getUserOffers',
  GET_RECENT_OFFERS = 'getRecentOffers',
  GET_OFFER_BY_ID = 'getOfferById',
  GET_OFFERS_BY_USER_ID = 'getOffersByUserId',
  GET_OFFER_BY_ID_FROM_USER = 'getOfferByIdFromUser',
  GET_INFINITE_OFFERS = 'getInfiniteOffers',
  UPDATE_OFFER = 'updateOffer',

  // Customers
  GET_CUSTOMERS = 'getCustomers',
  GET_USER_CUSTOMERS = 'getUserCustomers',
  GET_RECENT_CUSTOMERS = 'getRecentCustomers',
  GET_CUSTOMER_BY_ID = 'getCustomerById',
  GET_INFINITE_CUSTOMERS = 'getInfiniteCustomers',

  // Appointments
  GET_APPOINTMENTS = 'getAppointments',
  GET_USER_APPOINTMENTS = 'getUserAppointments',
  GET_USER_APPOINTMENT_BY_ID = 'getUserAppointmentById',
  GET_RECENT_APPOINTMENTS = 'getRecentAppointments',
  GET_APPOINTMENT_BY_ID = 'getAppointmentById',
  GET_INFINITE_APPOINTMENTS = 'getInfiniteAppointments',

  // Search
  SEARCH_USERS = 'searchUsers',
  SEARCH_CUSTOMERS = 'searchCustomers',
  SEARCH_APPOINTMENTS = 'searchAppointments',
  SEARCH_OFFERS = 'searchOffers',
}
