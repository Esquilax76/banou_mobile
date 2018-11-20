module.exports = {
    beers: [
        {
            name: "BLANCHE",
            description: "La bière d’été par excellence, rafraichissante aux arômes d’agrumes",
            description_long: "Bière blanche brassée à partir de malts de blé et d’orge. Une bière sèche,  et désaltérante, qui offre des arômes de citron vert et de fruits tropicaux.",
            alcool: "4.8",
            ibu: "30",
            ebc: "8",
            bottle: require("../../img/stats/blanche_stats.png"),
            color: "white"
        },
        {
            name: "IPA",
            description: "Une Indian Pale Ale houblonnée aux arômes floraux et à l’amertume caractéristique.",
            description_long: "Bière ambrée de type India Pale Ale. Une bière sèche et très houblonnée présentant une longue amertume et des arômes d’agrumes et de fruit de la passion.",
            alcool: "7",
            ibu: "70",
            ebc: "18",
            bottle: require("../../img/stats/ipa_stats.png"),
            color: "white"
        },
        {
            name: "BLONDE",
            description: "Une pale ale classique, désaltérante et légère, aux arômes équilibrés de céréales et de houblons.",
            description_long: "Bière blonde de type Pale Ale, ronde et légère, aux arômes équilibrés de céréales et de houblons. Elle présente des notes subtiles d’agrumes, de pêche et de pin.",
            alcool: "5",
            ibu: "35",
            ebc: "14",
            bottle: require("../../img/stats/blonde_stats.png"),
            color: "#571e04"
        },
        {
            name: "ROUSSE",
            description: "Une bière à la robe élégante, appréciée des amateurs pour sa finesse et la richesse de ses arômes.",
            description_long: "Bière rousse, à la robe élégante et au caractère prononcé qui laisse s’exprimer ses malts plus, torréfiés apportant des notes de biscuit et de caramel.",
            alcool: "7",
            ibu: "50",
            ebc: "28",
            bottle: require("../../img/stats/rousse_stats.png"),
            color: "white"
        },
        {
            name: "BRUNE",
            description: "Une bière de caractère, réconfortante, aux arômes torréfiés.",
            description_long: "Bière brune de type Oatmeal Stout. Une bière de caractère réconfortante aux malts torréfiés qui apportent des saveurs de café et de chocolat.",
            alcool: "6",
            ibu: "23",
            ebc: "44",
            bottle: require("../../img/stats/brune_stats.png"),
            color: "white"
        },
        {
            name: "SESSION IPA",
            description: "Une bière rafraîchissante et légère, aux notes d’agrumes et de fruits tropicaux apportés par ses houblons.",
            description_long: "Une session IPA, rafraichissante et légère. La bière idéale par temps chaud, aux notes d’agrumes et de fruits tropicaux apportés par ses quatre houblons.",
            alcool: "4",
            ibu: "19",
            ebc: "35",
            bottle: require("../../img/stats/session_ipa_stats.png"),
            color: "#571e04"
        }
    ],
    story: [
        {
            title: "DECOUVERTE DE LA BIERE ARTISANALE",
            picture: require("../../img/story/story1.jpg"),
            description: "L’histoire de La Banou commence en septembre 2014 au Canada, où nous découvrons la culture de la bière artisanale au travers des microbrasseries québécoises.",
        },
        {
            title: "NOS DEBUTS DE BRASSEURS",
            picture: require("../../img/story/story2.jpg"),
            description: "Une fois rentrés en France, nous nous initions donc au brassage dans notre petit appartement parisien. Nous élaborons petit à petit nos recettes.",
        },
        {
            title: "UNE PASSION QUI S'ENRICHIE",
            picture: require("../../img/story/story3.jpg"),
            description: "Le projet se précise peu à peu. Nous rencontrons beaucoup de brasseurs afin de recueillir de précieux conseils  et de nous former au brassage à plus grande échelle.",
        },
        {
            title: "NAISSANCE DE LA BANOU",
            picture: require("../../img/story/story4.jpg"),
            description: "La Banou prendra vie en 2019. Cela pourra prendre un peu de temps, mais nous ferons notre maximum pour que vous puissiez déguster la Banou le plus tôt possible !",
        },
    ],
    info: {
        opening_bar: ["Du mardi au jeudi de 16h à 20h", "Le vendredi et le samedi de 16h à 22h"],
        opening_brewery: ["Du mardi au vendredi de 9h à 18h", "Visite le samedi de 10h à 16h"],
        address: "Recherche du local en cours à Brive-la-Gaillarde",
    },
    barNews: [
        {
            title: "Notre business plan est prêt !",
            desc: "Première grande étape du projet finalisée. Notre business plan est enfin fini, et nous pouvons commencer les démarches de financement... le crowdfounding arrive bientôt !",
            image: require("../../img/news/business.jpg")
        },
        {
            title: "Découvrez la Session IPA !",
            desc: "La recette de notre bière de saison est prête. Une session IPA légère et désaltérante aux arômes d'agrumes. La bière idéale pour les fortes chaleurs !",
            image: require("../../img/news/session.jpg")
        },
    ]
};
