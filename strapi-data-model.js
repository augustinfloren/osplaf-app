import axios from 'axios';

const apiUrl = 'http://localhost:1337/api/regles';
const authUrl = 'http://localhost:1337/api/auth/local';

// Fonction pour obtenir le jeton d'accès
async function getToken() {
    try {
        const response = await axios.post(authUrl, {
            identifier: 'augustinfloren@gmail.com',
            password: 'Trappist13!'
        });
        return response.data.jwt; // Retourne le jeton d'accès
    } catch (error) {
        console.error('Erreur lors de l\'authentification:', error);
    }
}

// Fonction pour récupérer les articles protégés depuis Strapi
async function fetchProtectedArticles(token) {
    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data.data; // Strapi retourne les données dans un champ 'data'
    } catch (error) {
        console.error('Erreur lors de la récupération des articles:', error);
    }
    
}

// Fonction pour afficher les articles sur la page
async function displayArticles() {
    const token = await getToken();
    if (!token) {
        console.error('Impossible d\'obtenir le jeton d\'accès');
        return;
    }
    const articles = await fetchProtectedArticles(token);
    const articlesContainer = document.getElementById('articles');

    console.log(articles)
}

// Appel de la fonction pour afficher les articles lors du chargement de la page
displayArticles();