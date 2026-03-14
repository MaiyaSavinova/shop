//для не авторизованных пользоваталей
//странички
export const HOME_URL: string = '/';
export const PRODUCTS_URL: string = 'products';
export const PRODUCTS_CARD_URL: string = 'products-card/:id';

//модальные окошки
export const BASKET_URL: string = 'basket'; //кнопка войти/зарегистрироваться
export const AUTH_URL: string = 'auth';
export const REGISTER_URL: string = 'register';


//только для авторизованных пользователей 
export const PROFILE_URL: string = 'profile';
export const FAVORYTE_URL: string = 'favoryte'; 
// корзина без auth и register, просто кнопка оформить заказ.