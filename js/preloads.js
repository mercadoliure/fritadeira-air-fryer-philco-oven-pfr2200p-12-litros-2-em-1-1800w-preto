
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/polyfills.CqZeYl46.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/app.CLx9lloW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/VaultedContact.Bk1DprWW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DeliveryMethodSelectorSection.DxuobKuL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useUnauthenticatedErrorModal.Dpp6o-yB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/AmazonPayPCIButton.AjTJGOas.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/CheckoutAsGuest.CjEWUo0S.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useRefEffect.CygINimC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShopPayLogo.C-GitcnI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PickupPointCarrierLogo.4uGuqWTP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/hooks.r19UJibp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/LocalizationExtensionField.DEh8hJSR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useShowShopPayOptin._okoVFnP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Rollup.Bnefko3Q.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useShopPayRequiresVerification.ubcLoQ36.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Section.WsOTN0XK.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/GooglePayPCIButton.s17V3K-u.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PayButtonSection.DdZy9gP2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/RageClickCapture.C0-uv0dP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useInstallmentsErrorHandler.CZjmXF8x.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/index.Dc-Taz7V.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DutyOptions.B2YZv9a4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/SubscriptionPriceBreakdown.B9LtpdMD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useAmazonContact.CgbBYp2Z.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/StockProblemsLineItemList.C7u3-Dgs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useGetBuyWithPrimeCheckoutSessionId.B8FNdrog.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/index.ChE8Ns6q.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/app.DUpjA8nd.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/VaultedContact.BsDM6oHQ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DeliveryMethodSelectorSection.DNerkzQV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/CheckoutAsGuest.CUoq2pCx.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/LocalizationExtensionField.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/Section.BzDw6wmZ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/useGetBuyWithPrimeCheckoutSessionId.DVQdwG9J.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  