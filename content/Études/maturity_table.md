---
title: Construire une Maturity Table Produit
date: 2023-03-27
lastmod: 2023-10-15
tags:
    - produit
---

L'une des tâches centrales en tant que Product Manager est de savoir prioriser
les efforts de son équipe. Je ne sais pas pour vous, mais je me mets énormément 
de pression sur cette étape. Et si je faisais une erreur ? Et si je priorisais
quelque chose au détriment d'une fonctionnalité qui pourrait nous rapporter plus
de client ?
Lors de mes premières années en tant que PM, je me suis retrouvée plusieurs fois 
devant l'exercice de la mise à jour des priorités et roadmap. Et à chaque fois, 
j'y passais énormément de temps, car en même temps, j'essayais de comprendre 
chaque facette de mon produit, de les pondérer les uns aux autres.

Et un jour, je suis tombée sur 
[la Maturity Table de GitLab](https://about.gitlab.com/direction/maturity/).
J'ai beaucoup aimé cette méthode qui permet de facilement partager une vision
mais aussi de donner un outil de travail et de fournir un cap aux équipes.

## Le contexte de mon expérimentation

Histoire de mieux situer la rédaction de cette Maturity Table, je vous présente
la Blue Corp. La Blue Corp est une entreprise proposant une plateforme: le 
Mentaverse, qui vous permet d'explorer les méandres de votre esprit et 
d'interagir avec votre subconscient de manière inédite. Cette plateforme est à 
la fois disponible en mode SaaS et en mode auto-hébergé. 

J'ai rejoint cette entreprise il y a de cela un an en tant que PM. Si au début, 
je travaille sur quelques fonctionnalités pour me faire la main, au bout 
d'un moment, ma hiérarchie me demande de revoir intégralement le produit 
auto-hébergé, qui souffre de nombreux problèmes et peine à installer une vision.

Au début, je reprends les méthodes que l'on m'a enseigné dans mes recherches 
produit précédentes:
- récupérer autant de témoignages utilisateurs que possible,  auprès de nombreux 
  intervenants, des prospects, des clients existants ou même des personnes qui 
  avaient déjà de l’expérience dans les logiciels auto-hébergés,
- jeter un oeil aux demandes support qui étaient remontées à mon équipes, en 
  extraire des données chiffrées pour voir les principaux points de friction du 
  produit, etc.,
- écouter les demandes des équipes commerciales, qui étaient le mieux placés 
  pour connaître les points de friction à la vente du produit.

Tout cela me permettait de construire ma roadmap trimestre après trimestre, de
construire des OKRs métiers en lien avec les besoins utilisateurs mais il était 
complexe pour moi de me projeter à plus long terme sur mon produit. Je courrais 
d'une fonctionnalité à une autre, en étant plus réactive que proactive.

Jusqu’à ce que mon management me demande justement de leur fournir une roadmap 
sur un an. Je n’avais plus le choix, il fallait sauter dans le grand bain et 
trouver une manière de faire les choses de manière pereine. Je devais aussi 
faire en sorte que cette roadmap ne soit pas une documentation impossible à
mettre à jour et qui prendrait plus de temps à corriger qu'elle n'en ferait 
gagner à mettre à utiliser.

## Construire la table de maturité

### Diviser le produit en catégorie et fonctionnalités 

La première étape a été de diviser le produit en élément majeurs avec des 
fonctionnalités sous-jacentes.

Après une nouvelle série d'interviews utilisateurs, je me suis basée sur leur 
contenu pour les organiser en lien avec les préoccupations de nos clients. Cela 
a eu pour résultat une énorme 
[carte mentale](https://fr.wikipedia.org/wiki/Carte_heuristique) de mon produit, 
avec pleins de mot clefs dans tous les sens.  

<img src="images/schema_word_cloud.png" align="right" />
  
Une fois tous ces éléments identifiés, je les ai organisés en grandes catégories 
majeures:  

(images de la mind map avec les mots reliés les uns avec les autres)

Les avantages de cette techniques sont multiples:
- fractionner un produit de grande ampleur en catégorie majeure et en brique 
  fonctionnelle, pour avoir une meilleure vision du paysage,
- s'organiser en fonction des différents sujets que l'on souhaite prioriser,
- transmettre cette vision complexe du produit à n'importe quelle personne.

Par contre, une fois construite cette liste, on se retrouve avec une énorme 
bazar dans tous les sens, l’étape suivante est de mettre un peu d’ordre là 
dedans.

### Le modèle de maturité

La maturité est une mesure de la capacité du produit dans un domaine 
particulier. Il existe différentes échelles pour mesurer la maturité d'un 
produit ou d'une technologie. 

De mon côté, nous avons choisi de construire une échelle simple, qui va de 0 à 
5, permettant d'évaluer le niveau de services sur un sujet :
- Un score de 0 signifie que nous ne mettons rien en œuvre ou que nous ne 
  proposons pas de services particuliers.
- Un score de 5 indique que nous faisons un excellent travail et que le produit 
  est stable.  

Tout cela nous a permis de:
- disposer d'une méthode d'évaluation claire et simple,
- pouvoir communiquer sur la maturité de chaque sujet et en discuter 
  collégialement,
- être capable d'estimer la quantité d'efforts à fournir pour augmenter le score
  point par point.

### Estimer la priorité pour chaque catégorie et brique fonctionnelle

Dernier élément important, savoir qui faire passer en premier. En effet, pour 
les clients, le système d'installation n'est pas aussi important que la manière 
de
  
Nous l'identifions grâce à la connaissance des clients, aux entretiens et à la 
recherche.  
  
Pour la noter, nous utilisons P0, P1, P2,...  
  
- P0 est un sujet critique, un état majeur pour les clients, et qui doit être irréprochable pour nous, afin de ne pas nous apporter trop de soutien. Son score de maturité devrait être d'au moins 3 et nous devrions viser à l'augmenter à 4 dans l'année à venir.  
- P1 est un sujet majeur, toujours important pour les clients et les gardiens. Il aide beaucoup dans le cycle de vie du produit. Son score de maturité devrait donc être de 2 et nous devrions viser à l'augmenter à 3 au cours de l'année prochaine et planifier régulièrement des coups de pouce pour le faire mûrir facilement.  
- P2 et P3 sont des sujets intéressants qui peuvent devenir des priorités plus tard. Il n'est pas nécessaire de s'occuper de leur maturité dans l'urgence, mais nous devons avoir une vision à long terme pour eux.  
- P4 regroupe des sujets qui existent mais pour lesquels nous n'avons clairement pas la capacité de les traiter (humainement et/ou techniquement). Nous les gardons à l'esprit pour la future feuille de route, mais il ne s'agit clairement pas d'une urgence.  

Cette approche permet:
- Ajouter une vision centrée sur le client pour prioriser les sujets.  
- Ouvrir le débat sur la façon dont nous priorisons chaque sujet (comme le Poker 
  Planning).  
- Donner une estimation des sujets sur lesquels nous voulons nous concentrer.  

## Et ensuite ?

Maintenant que nous avons une vision claire de la priorité et de la maturité de 
chaque élément, nous pouvons choisir le sujet sur lequel nous voulons nous 
concentrer.

- Sur quel sujet vais-je me concentrer dans ma feuille de route trimestrielle ?
- Quelle fonctionnalité répondra à quel point du tableau de maturité ?
- Combien de points de maturité vais-je gagner/perdre si j'implémente/rejette cette fonctionnalité ?

### Nourrir ce tableau de maturité

À chaque étape du travail sur le produit et l'ingénierie, nous devons entretenir 
et améliorer le tableau de maturité.

- Lorsque nous lançons une fonctionnalité, nous devons accéder au nouveau niveau 
  de maturité d'un sujet.
- Régulièrement, nous devons vérifier et revalider la priorité de chaque 
  élément.

### L'intégrer dans nos processus

Il reste encore quelques questions d'amélioration :

- Comment intégrer ce tableau dans notre processus Produit actuel ?
- Comment le lier à nos outils (Productboard, Zendesk,...) ?

Elle est voué à évoluer, s'affiner et s'améliorer, au fur et à mesure de ma 
pratique.

N'hésitez pas à repasser si l'envie vous en prend 😉


Post-face: des exemples de maturity table
[GitLab Maturity Table](https://about.gitlab.com/direction/maturity/#category-maturity)