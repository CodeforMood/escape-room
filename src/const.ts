export enum AppRoute {
  MyQuests = '/myQuests',
  Root = '/',
  Login = '/login',
  Quest = '/quest',
  Load = '/load',
  Booking = '/booking',
  Contacts = '/contacts',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  JustSlash = '/',
  Quest = '/quest/',
  Login = '/login',
  Logout = '/logout',
  Booking = '/booking',
  Reservation = '/reservation/'
}

export enum SlicesName {
  User = 'USER',
  QuestsData = 'QUESTS_DATA',
  CurrentQuestData = 'CURRENT_QUEST_DATA',
  BookingQuestData = 'BOOKING_QUEST_DATA',
  MyQuestsData = 'MY_QUESTS_DATA',
}

export const DEFAULT_COORDINATES = [59.968137, 30.316272];

export const URL_MARKER_DEFAULT = 'img/svg/pin-default.svg';

export const URL_MARKER_ACTIVE = 'img/svg/pin-active.svg';

export const SPINNER_COLOR = '#7777FF';
