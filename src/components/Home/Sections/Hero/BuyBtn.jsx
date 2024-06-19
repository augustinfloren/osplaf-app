import Client from "shopify-buy";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

let client = Client.buildClient({
    domain: '4232cb-95.myshopify.com',
    storefrontAccessToken: '9cbdcf814ddb7e353559938e764366bd',
});

function BuyBtn() {
    const [products, setProducts] = useState([]);
    const [checkout, setCheckout] = useState(null);
    
    useEffect(() => {
        client.product.fetchAll().then((products) => {
            setProducts(products);
        }).catch((error) => {
            console.error('Failed to fetch products:', error);
        });

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
        <motion.a 
            className="buy-button"
            whileHover={{ 
                scale: 0.9, 
                backgroundColor: "#FFE5E5",
                color: "#5637BF",
                boxShadow: "0px 0px 20px #5737bf6e",
                fontWeight: 600,
            }}
            onClick={() => handleBuy(products[0].variants[0].id)}>
                Acheter le jeu
        </motion.a>
    );
}

export default BuyBtn;