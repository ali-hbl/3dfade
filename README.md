# Portfolio Vidéographe - 3DFade

Un portfolio moderne et élégant pour vidéographe créé avec Next.js 15, TypeScript et Tailwind CSS.

## 🎬 Fonctionnalités

- **Page d'accueil** : Section intro avec hero section et aperçu des créations
- **À propos** : Présentation personnelle, compétences et récompenses
- **Mes créations** : Galerie de projets avec filtres et recherche
- **Contact** : Formulaire de contact complet avec FAQ
- **Design responsive** : Optimisé pour tous les appareils
- **Animations fluides** : Utilisation de Framer Motion
- **SEO optimisé** : Métadonnées et structure sémantique

## 🚀 Technologies utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions
- **Lucide React** - Icônes modernes
- **Google Fonts** - Inter et Playfair Display

## 📦 Installation

1. Clonez le repository :
```bash
git clone <url-du-repo>
cd 3dfade
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Personnalisation

### Couleurs
Le thème utilise un dégradé rouge-orange comme couleur principale. Vous pouvez modifier les couleurs dans :
- `tailwind.config.js` pour les couleurs personnalisées
- `src/app/globals.css` pour les variables CSS

### Contenu
- **Page d'accueil** : Modifiez `src/app/page.tsx`
- **À propos** : Modifiez `src/app/about/page.tsx`
- **Créations** : Modifiez `src/app/creations/page.tsx`
- **Contact** : Modifiez `src/app/contact/page.tsx`

### Navigation
Modifiez le composant `src/components/Navigation.tsx` pour ajouter ou modifier les liens de navigation.

## 📱 Responsive Design

Le portfolio est entièrement responsive et s'adapte à :
- Mobile (320px+)
- Tablette (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déployez en un clic

### Autres plateformes
- **Netlify** : `npm run build && npm run export`
- **AWS Amplify** : Configuration automatique
- **Heroku** : Ajoutez un `package.json` avec script de build

## 📄 Structure du projet

```
src/
├── app/
│   ├── about/          # Page À propos
│   ├── creations/      # Page Mes créations
│   ├── contact/        # Page Contact
│   ├── globals.css     # Styles globaux
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Page d'accueil
├── components/
│   └── Navigation.tsx  # Composant de navigation
```

## 🎯 Fonctionnalités avancées

- **Animations au scroll** : Éléments qui apparaissent progressivement
- **Navigation sticky** : Barre de navigation qui reste visible
- **Formulaire de contact** : Validation et feedback utilisateur
- **Filtres de projets** : Recherche et filtrage par catégorie
- **Design sombre** : Thème noir élégant pour mettre en valeur les vidéos

## 📞 Support

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou à me contacter.

---

Créé avec ❤️ pour les créateurs vidéo
