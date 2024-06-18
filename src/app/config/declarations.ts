// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-eleComponent
import { eleComponent } from '../components/transact/ele.component';
//CORE_REFERENCE_IMPORT-prepaid_mobileComponent
import { prepaid_mobileComponent } from '../components/transact/prepaid_mobile.component';
//CORE_REFERENCE_IMPORT-face_api
import { face_api } from '../sd-services/face_api';
//CORE_REFERENCE_IMPORT-undercostructionsComponent
import { undercostructionsComponent } from '../components/undercostructions.component';
//CORE_REFERENCE_IMPORT-terms_and_condtionsComponent
import { terms_and_condtionsComponent } from '../components/home/terms_and_condtions.component';
//CORE_REFERENCE_IMPORT-confirm_detailsComponent
import { confirm_detailsComponent } from '../components/confirm_details.component';
//CORE_REFERENCE_IMPORT-my_detailsComponent
import { my_detailsComponent } from '../components/more/my_details.component';
//CORE_REFERENCE_IMPORT-confirmComponent
import { confirmComponent } from '../components/PopUps/confirm.component';
//CORE_REFERENCE_IMPORT-sucessComponent
import { sucessComponent } from '../components/shared/sucess.component';
//CORE_REFERENCE_IMPORT-sign_inComponent
import { sign_inComponent } from '../components/PopUps/sign_in.component';
//CORE_REFERENCE_IMPORT-loaderComponent
import { loaderComponent } from '../components/shared/loader.component';
//CORE_REFERENCE_IMPORT-profileComponent
import { profileComponent } from '../components/more/profile.component';
//CORE_REFERENCE_IMPORT-Our_privacy_centerComponent
import { Our_privacy_centerComponent } from '../components/more/Our_privacy_center.component';
//CORE_REFERENCE_IMPORT-My_tax_detailsComponent
import { My_tax_detailsComponent } from '../components/more/My_tax_details.component';
//CORE_REFERENCE_IMPORT-EmailComponent
import { EmailComponent } from '../components/more/Email.component';
//CORE_REFERENCE_IMPORT-sidenavComponent
import { sidenavComponent } from '../components/home/sidenav.component';
//CORE_REFERENCE_IMPORT-coming_soonComponent
import { coming_soonComponent } from '../components/shared/coming_soon.component';
//CORE_REFERENCE_IMPORT-buy_airtimeComponent
import { buy_airtimeComponent } from '../components/transact/buy_airtime.component';
//CORE_REFERENCE_IMPORT-register_feedbackComponent
import { register_feedbackComponent } from '../components/shared/register_feedback.component';
//CORE_REFERENCE_IMPORT-api_service
import { api_service } from '../sd-services/api_service';
//CORE_REFERENCE_IMPORT-update_permanent_limitsComponent
import { update_permanent_limitsComponent } from '../components/cards/physical/update_permanent_limits.component';
//CORE_REFERENCE_IMPORT-payment_notifcationComponent
import { payment_notifcationComponent } from '../components/transact/payment_notifcation.component';
//CORE_REFERENCE_IMPORT-pay_ben_electricComponent
import { pay_ben_electricComponent } from '../components/transact/pay_ben_electric.component';
//CORE_REFERENCE_IMPORT-electricityComponent
import { electricityComponent } from '../components/transact/electricity.component';
//CORE_REFERENCE_IMPORT-inforComponent
import { inforComponent } from '../components/auth/activate_app/infor.component';
//CORE_REFERENCE_IMPORT-scan_to_payComponent
import { scan_to_payComponent } from '../components/more/scan_to_pay.component';
//CORE_REFERENCE_IMPORT-choose_banksComponent
import { choose_banksComponent } from '../components/transact/choose_banks.component';
//CORE_REFERENCE_IMPORT-bank_accountComponent
import { bank_accountComponent } from '../components/transact/bank_account.component';
//CORE_REFERENCE_IMPORT-buy_prepaid_mobileComponent
import { buy_prepaid_mobileComponent } from '../components/transact/buy_prepaid_mobile.component';
//CORE_REFERENCE_IMPORT-creditComponent
import { creditComponent } from '../components/explore/credit.component';
//CORE_REFERENCE_IMPORT-loanComponent
import { loanComponent } from '../components/explore/loan.component';
//CORE_REFERENCE_IMPORT-get_estimateComponent
import { get_estimateComponent } from '../components/explore/get_estimate.component';
//CORE_REFERENCE_IMPORT-add_beneficiaryComponent
import { add_beneficiaryComponent } from '../components/transact/add_beneficiary.component';
//CORE_REFERENCE_IMPORT-add_electricity_benComponent
import { add_electricity_benComponent } from '../components/transact/add_electricity_ben.component';
//CORE_REFERENCE_IMPORT-buy_electricityComponent
import { buy_electricityComponent } from '../components/transact/buy_electricity.component';
//CORE_REFERENCE_IMPORT-buy_prepaidComponent
import { buy_prepaidComponent } from '../components/transact/buy_prepaid.component';
//CORE_REFERENCE_IMPORT-cellphoneComponent
import { cellphoneComponent } from '../components/transact/cellphone.component';
//CORE_REFERENCE_IMPORT-pay_userComponent
import { pay_userComponent } from '../components/transact/pay_user.component';
//CORE_REFERENCE_IMPORT-pay_beneficiaryComponent
import { pay_beneficiaryComponent } from '../components/transact/pay_beneficiary.component';
//CORE_REFERENCE_IMPORT-send_cashComponent
import { send_cashComponent } from '../components/transact/send_cash.component';
//CORE_REFERENCE_IMPORT-transfer_moneyComponent
import { transfer_moneyComponent } from '../components/transact/transfer_money.component';
//CORE_REFERENCE_IMPORT-savingsComponent
import { savingsComponent } from '../components/savings/savings.component';
//CORE_REFERENCE_IMPORT-tailor_made_cardComponent
import { tailor_made_cardComponent } from '../components/shared/tailor_made_card.component';
//CORE_REFERENCE_IMPORT-favouritesComponent
import { favouritesComponent } from '../components/home/favourites.component';
//CORE_REFERENCE_IMPORT-inboxComponent
import { inboxComponent } from '../components/messages/inbox.component';
//CORE_REFERENCE_IMPORT-transactionsComponent
import { transactionsComponent } from '../components/messages/transactions.component';
//CORE_REFERENCE_IMPORT-long_card1Component
import { long_card1Component } from '../components/shared/long_card1.component';
//CORE_REFERENCE_IMPORT-exploreComponent
import { exploreComponent } from '../components/explore/explore.component';
//CORE_REFERENCE_IMPORT-transactComponent
import { transactComponent } from '../components/transact/transact.component';
//CORE_REFERENCE_IMPORT-messagesComponent
import { messagesComponent } from '../components/messages/messages.component';
//CORE_REFERENCE_IMPORT-cards_landingComponent
import { cards_landingComponent } from '../components/cards/cards_landing.component';
//CORE_REFERENCE_IMPORT-VirtualComponent
import { VirtualComponent } from '../components/cards/virtual/Virtual.component';
//CORE_REFERENCE_IMPORT-cardsComponent
import { cardsComponent } from '../components/cards/physical/cards.component';
//CORE_REFERENCE_IMPORT-home_footerComponent
import { home_footerComponent } from '../components/shared/home_footer.component';
//CORE_REFERENCE_IMPORT-logged_in_landingComponent
import { logged_in_landingComponent } from '../components/landings/logged_in_landing.component';
//CORE_REFERENCE_IMPORT-medium_cardComponent
import { medium_cardComponent } from '../components/shared/medium_card.component';
//CORE_REFERENCE_IMPORT-long_cardComponent
import { long_cardComponent } from '../components/shared/long_card.component';
//CORE_REFERENCE_IMPORT-activation_codeComponent
import { activation_codeComponent } from '../components/auth/activate_app/activation_code.component';
//CORE_REFERENCE_IMPORT-activate_with_emailComponent
import { activate_with_emailComponent } from '../components/auth/activate_app/activate_with_email.component';
//CORE_REFERENCE_IMPORT-activation_optionsComponent
import { activation_optionsComponent } from '../components/auth/activate_app/activation_options.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home/home.component';
//CORE_REFERENCE_IMPORT-unable_to_captureComponent
import { unable_to_captureComponent } from '../components/shared/unable_to_capture.component';
//CORE_REFERENCE_IMPORT-take_selfieComponent
import { take_selfieComponent } from '../components/shared/take_selfie.component';
//CORE_REFERENCE_IMPORT-activate_appComponent
import { activate_appComponent } from '../components/auth/company/activate_app/activate_app.component';
//CORE_REFERENCE_IMPORT-open_accComponent
import { open_accComponent } from '../components/auth/company/open_account/open_acc.component';
//CORE_REFERENCE_IMPORT-verify_identityComponent
import { verify_identityComponent } from '../components/auth/open_account/verify_identity.component';
//CORE_REFERENCE_IMPORT-sign_up_stepperComponent
import { sign_up_stepperComponent } from '../components/auth/open_account/sign_up_stepper.component';
//CORE_REFERENCE_IMPORT-prepare_for_selfieComponent
import { prepare_for_selfieComponent } from '../components/auth/open_account/prepare_for_selfie.component';
//CORE_REFERENCE_IMPORT-instructionsComponent
import { instructionsComponent } from '../components/auth/open_account/instructions.component';
//CORE_REFERENCE_IMPORT-sign_in_stepperComponent
import { sign_in_stepperComponent } from '../components/auth/activate_app/sign_in_stepper.component';
//CORE_REFERENCE_IMPORT-saving_accountComponent
import { saving_accountComponent } from '../components/auth/activate_app/saving_account.component';
//CORE_REFERENCE_IMPORT-remote_app_pinComponent
import { remote_app_pinComponent } from '../components/auth/activate_app/remote_app_pin.component';
//CORE_REFERENCE_IMPORT-footerComponent
import { footerComponent } from '../components/auth/activate_app/footer.component';
//CORE_REFERENCE_IMPORT-feedbackComponent
import { feedbackComponent } from '../components/auth/activate_app/feedback.component';
//CORE_REFERENCE_IMPORT-enter_remote_pinComponent
import { enter_remote_pinComponent } from '../components/auth/activate_app/enter_remote_pin.component';
//CORE_REFERENCE_IMPORT-create_remote_pinComponent
import { create_remote_pinComponent } from '../components/auth/activate_app/create_remote_pin.component';
//CORE_REFERENCE_IMPORT-confirm_app_activationComponent
import { confirm_app_activationComponent } from '../components/auth/activate_app/confirm_app_activation.component';
//CORE_REFERENCE_IMPORT-activation_instructionsComponent
import { activation_instructionsComponent } from '../components/auth/activate_app/activation_instructions.component';
//CORE_REFERENCE_IMPORT-stepperComponent
import { stepperComponent } from '../components/shared/stepper.component';
//CORE_REFERENCE_IMPORT-landingComponent
import { landingComponent } from '../components/landings/landing.component';
//CORE_REFERENCE_IMPORT-ft_landingComponent
import { ft_landingComponent } from '../components/landings/ft_landing.component';
//CORE_REFERENCE_IMPORT-stop_cardComponent
import { stop_cardComponent } from '../components/cards/physical/stop_card.component';
//CORE_REFERENCE_IMPORT-tap_to_payComponent
import { tap_to_payComponent } from '../components/cards/physical/tap_to_pay.component';
//CORE_REFERENCE_IMPORT-set_temporary_limitsComponent
import { set_temporary_limitsComponent } from '../components/cards/physical/set_temporary_limits.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-eleComponent
  eleComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-prepaid_mobileComponent
  prepaid_mobileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-undercostructionsComponent
  undercostructionsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-terms_and_condtionsComponent
  terms_and_condtionsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-confirm_detailsComponent
  confirm_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-my_detailsComponent
  my_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-confirmComponent
  confirmComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sucessComponent
  sucessComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sign_inComponent
  sign_inComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loaderComponent
  loaderComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-profileComponent
  profileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-Our_privacy_centerComponent
  Our_privacy_centerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-My_tax_detailsComponent
  My_tax_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-EmailComponent
  EmailComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sidenavComponent
  sidenavComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-coming_soonComponent
  coming_soonComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-buy_airtimeComponent
  buy_airtimeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-register_feedbackComponent
  register_feedbackComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-update_permanent_limitsComponent
  update_permanent_limitsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-payment_notifcationComponent
  payment_notifcationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-pay_ben_electricComponent
  pay_ben_electricComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-electricityComponent
  electricityComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-inforComponent
  inforComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-scan_to_payComponent
  scan_to_payComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-choose_banksComponent
  choose_banksComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-bank_accountComponent
  bank_accountComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-buy_prepaid_mobileComponent
  buy_prepaid_mobileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-creditComponent
  creditComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loanComponent
  loanComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-get_estimateComponent
  get_estimateComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-add_beneficiaryComponent
  add_beneficiaryComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-add_electricity_benComponent
  add_electricity_benComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-buy_electricityComponent
  buy_electricityComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-buy_prepaidComponent
  buy_prepaidComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-cellphoneComponent
  cellphoneComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-pay_userComponent
  pay_userComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-pay_beneficiaryComponent
  pay_beneficiaryComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-send_cashComponent
  send_cashComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-transfer_moneyComponent
  transfer_moneyComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-savingsComponent
  savingsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-tailor_made_cardComponent
  tailor_made_cardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-favouritesComponent
  favouritesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-inboxComponent
  inboxComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-transactionsComponent
  transactionsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-long_card1Component
  long_card1Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-exploreComponent
  exploreComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-transactComponent
  transactComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-messagesComponent
  messagesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-cards_landingComponent
  cards_landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-VirtualComponent
  VirtualComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-cardsComponent
  cardsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-home_footerComponent
  home_footerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-logged_in_landingComponent
  logged_in_landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-medium_cardComponent
  medium_cardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-long_cardComponent
  long_cardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-activation_codeComponent
  activation_codeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-activate_with_emailComponent
  activate_with_emailComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-activation_optionsComponent
  activation_optionsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-unable_to_captureComponent
  unable_to_captureComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-take_selfieComponent
  take_selfieComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-activate_appComponent
  activate_appComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-open_accComponent
  open_accComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-verify_identityComponent
  verify_identityComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sign_up_stepperComponent
  sign_up_stepperComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-prepare_for_selfieComponent
  prepare_for_selfieComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-instructionsComponent
  instructionsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sign_in_stepperComponent
  sign_in_stepperComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-saving_accountComponent
  saving_accountComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-remote_app_pinComponent
  remote_app_pinComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-footerComponent
  footerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-feedbackComponent
  feedbackComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-enter_remote_pinComponent
  enter_remote_pinComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-create_remote_pinComponent
  create_remote_pinComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-confirm_app_activationComponent
  confirm_app_activationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-activation_instructionsComponent
  activation_instructionsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-stepperComponent
  stepperComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingComponent
  landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ft_landingComponent
  ft_landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-stop_cardComponent
  stop_cardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-tap_to_payComponent
  tap_to_payComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-set_temporary_limitsComponent
  set_temporary_limitsComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-face_api
  face_api,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-api_service
  api_service,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'ft-landing', component: ft_landingComponent },
  { path: 'stepper', component: stepperComponent },
  { path: 'sign_in_stepper', component: sign_in_stepperComponent },
  { path: 'sign_up_stepper', component: sign_up_stepperComponent },
  { path: 'company_activate', component: activate_appComponent },
  { path: 'company_open_account', component: open_accComponent },
  { path: 'open_account_instructions', component: instructionsComponent },
  { path: 'basic_details', component: verify_identityComponent },
  { path: 'prepare_for_selfie', component: prepare_for_selfieComponent },
  { path: 'account_number', component: saving_accountComponent },
  { path: 'remote_app_pin', component: remote_app_pinComponent },
  {
    path: 'confirm_app_activation',
    component: confirm_app_activationComponent,
  },
  {
    path: 'app_activation_instructions',
    component: activation_instructionsComponent,
  },
  { path: 'take_selfie', component: take_selfieComponent },
  { path: 'unable_to_capture', component: unable_to_captureComponent },
  { path: 'home', component: homeComponent },
  { path: 'feedback', component: feedbackComponent },
  { path: 'activation_options', component: activation_optionsComponent },
  { path: 'activate_with_email', component: activate_with_emailComponent },
  { path: 'activation_code', component: activation_codeComponent },
  {
    path: 'logged_in_landing',
    component: logged_in_landingComponent,
    children: [
      { path: 'home', component: homeComponent },
      { path: 'cards', component: cards_landingComponent },
      { path: 'transact', component: transactComponent },
      { path: 'messages', component: messagesComponent },
      { path: 'explore', component: exploreComponent },
      { path: 'favourites', component: favouritesComponent },
      { path: 'savings_account', component: savingsComponent },
      {
        path: 'update_permanent_limit',
        component: update_permanent_limitsComponent,
      },
      {
        path: 'update_temporary_limit',
        component: set_temporary_limitsComponent,
      },
      { path: 'pay_beneficiary', component: pay_beneficiaryComponent },
      { path: 'add_beneficiary', component: add_beneficiaryComponent },
      { path: 'credit', component: creditComponent },
      { path: 'loan', component: loanComponent },
      { path: 'get_estimate', component: get_estimateComponent },
      { path: 'buy_prepaid_mobile', component: buy_prepaid_mobileComponent },
      { path: 'bank_account', component: bank_accountComponent },
      { path: 'choose_banks', component: choose_banksComponent },
      { path: 'pay_user', component: pay_userComponent },
      {
        path: 'buy_electricity',
        component: buy_electricityComponent,
        children: [
          { path: 'pay_ben_electric', component: pay_ben_electricComponent },
          { path: 'ele', component: eleComponent },
        ],
      },
      { path: 'add_electricity_ben', component: add_electricity_benComponent },
      { path: 'transfer_money', component: transfer_moneyComponent },
      { path: 'send_cash', component: send_cashComponent },
      { path: 'prepaid_mobile', component: prepaid_mobileComponent },
    ],
  },
  { path: 'enter_remote_pin', component: enter_remote_pinComponent },
  { path: 'landing', component: landingComponent },
  { path: 'create_remote_pin', component: create_remote_pinComponent },
  { path: 'scan_to_pay', component: scan_to_payComponent },
  { path: 'update_temporary_limit', component: set_temporary_limitsComponent },
  {
    path: 'update_permanent_limit',
    component: update_permanent_limitsComponent,
  },
  { path: 'register_feedback', component: register_feedbackComponent },
  { path: 'email', component: EmailComponent },
  { path: 'my-tax-details', component: My_tax_detailsComponent },
  { path: 'policy', component: Our_privacy_centerComponent },
  { path: 'buy_airtime', component: buy_airtimeComponent },
  { path: 'cellphone', component: cellphoneComponent },
  { path: 'transfer_money', component: transfer_moneyComponent },
  { path: 'buy_prepaid', component: buy_prepaidComponent },
  { path: 'sidenav', component: sidenavComponent },
  { path: 'profile', component: profileComponent },
  { path: 'my-details', component: my_detailsComponent },
  { path: 'capitec', component: loaderComponent },
  { path: 'sucess', component: sucessComponent },
  { path: 'underconstruction', component: undercostructionsComponent },
  { path: '', redirectTo: '/capitec', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
