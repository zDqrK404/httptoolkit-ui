import * as _ from 'lodash';
import { observable, action, flow, computed, when, observe } from 'mobx';

import { logError, logErrorsAsUser } from '../../errors';
import { trackEvent } from '../../metrics';
import { delay } from '../../util/promise';
import { ObservablePromise, lazyObservablePromise, observablePromise } from '../../util/observable';

import {
    User,
    getLatestUserData,
    getLastUserData,
    logOut,

    SKU,
    SubscriptionPlans,
    prepareCheckout,
    openNewCheckoutWindow,
    cancelSubscription,
    loadPlanPricesUntilSuccess
} from '@httptoolkit/accounts';

// ------------------------------------------------------------------
// You could override settings in here to become a paid user for free.
// I'd rather you didn't! HTTP Toolkit takes time & love to build,
// and I can't do that if it doesn't pay my bills :-)
//
// Fund open source - if you want Pro, help pay for its development.
// Can't afford it? Get in touch: tim@httptoolkit.com.
// ------------------------------------------------------------------
