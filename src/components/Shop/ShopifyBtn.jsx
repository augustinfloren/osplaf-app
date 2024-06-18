import Client from "shopify-buy";
import { useEffect, useRef, useState } from "react";

let client = Client.buildClient({
    domain: '4232cb-95.myshopify.com',
    storefrontAccessToken: '9cbdcf814ddb7e353559938e764366bd',
});


function ShopifyBtn() {
    const [products, setProducts] = useState([]);
    const [checkout, setCheckout] = useState(null);
    
    useEffect(() => {
        // Récupérer tous les produits lorsque le composant est monté
        client.product.fetchAll().then((products) => {
            setProducts(products);
        }).catch((error) => {
            console.error('Failed to fetch products:', error);
        });

        // Créer un panier
        client.checkout.create().then((checkout) => {
            setCheckout(checkout);
        }).catch((error) => {
            console.error('Failed to create checkout:', error);
        });
    }, []);

    const handleBuy = (variantId) => {
        if (!checkout) return;

        const lineItemsToAdd = [
            {
                variantId,
                quantity: 1
            }
        ];

        client.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkout) => {
            // Rediriger l'utilisateur vers l'URL de paiement
            window.location.href = checkout.webUrl;
        }).catch((error) => {
            console.error('Failed to add item to checkout:', error);
        });
    };

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.images[0].src} alt={product.title} />

                    <button 
                        onClick={() => handleBuy(product.variants[0].id)}>
                            Buy Now
                    </button>
                </div>
            ))}

        </div>
    );
}

export default ShopifyBtn;



// (function () {
//     var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }

//     function loadScript() {
//         var script = document.createElement('script');
//         script.async = true;
//         script.src = scriptURL;
//         (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }

//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: '4232cb-95.myshopify.com',
//             storefrontAccessToken: '9cbdcf814ddb7e353559938e764366bd',
//         });

//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent('product', {
//                 id: '8981698085209',
//                 node: document.getElementById('product-component-1718634779898'), // Same ID here
//                 moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
//                 options: {
//                     "product": {
//                         "styles": {
//                             "product": {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 },
//                                 "text-align": "left"
//                             },
//                             "button": {
//                                 "color": "#5637bf",
//                                 ":hover": {
//                                     "color": "#5637bf",
//                                     "background-color": "#e6cece"
//                                 },
//                                 "background-color": "#ffe5e5",
//                                 ":focus": {
//                                     "background-color": "#e6cece"
//                                 },
//                                 "border-radius": "39px"
//                             }
//                         },
//                         "buttonDestination": "checkout",
//                         "contents": {
//                             "img": false,
//                             "title": false,
//                             "price": false
//                         },
//                         "text": {
//                             "button": "Acheter le jeu"
//                         }
//                     },
//                     "productSet": {
//                         "styles": {
//                             "products": {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     "modalProduct": {
//                         "contents": {
//                             "img": false,
//                             "imgWithCarousel": true,
//                             "button": false,
//                             "buttonWithQuantity": true
//                         },
//                         "styles": {
//                             "product": {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             "button": {
//                                 "color": "#5637bf",
//                                 ":hover": {
//                                     "color": "#5637bf",
//                                     "background-color": "#e6cece"
//                                 },
//                                 "background-color": "#ffe5e5",
//                                 ":focus": {
//                                     "background-color": "#e6cece"
//                                 },
//                                 "border-radius": "39px"
//                             }
//                         },
//                         "text": {
//                             "button": "Add to cart"
//                         }
//                     },
//                     "option": {},
//                     "cart": {
//                         "styles": {
//                             "button": {
//                                 "color": "#5637bf",
//                                 ":hover": {
//                                     "color": "#5637bf",
//                                     "background-color": "#e6cece"
//                                 },
//                                 "background-color": "#ffe5e5",
//                                 ":focus": {
//                                     "background-color": "#e6cece"
//                                 },
//                                 "border-radius": "39px"
//                             }
//                         },
//                         "text": {
//                             "total": "Subtotal",
//                             "button": "Checkout"
//                         },
//                         "popup": false
//                     },
//                     "toggle": {
//                         "styles": {
//                             "toggle": {
//                                 "background-color": "#ffe5e5",
//                                 ":hover": {
//                                     "background-color": "#e6cece"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#e6cece"
//                                 }
//                             },
//                             "count": {
//                                 "color": "#5637bf",
//                                 ":hover": {
//                                     "color": "#5637bf"
//                                 }
//                             },
//                             "iconPath": {
//                                 "fill": "#5637bf"
//                             }
//                         }
//                     }
//                 },
//             });
//         });
//     }
// })();