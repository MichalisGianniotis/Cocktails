const cocktails = [
  {
    id : 1,
    name: "Mojito",
    slug: "mojito",
    gradient: "from-green-400 to-yellow-400",
    ingredients: [
      "50 ml λευκό ρούμι",
      "30 ml φρέσκος χυμός λάιμ",
      "15 ml σιρόπι ζάχαρης",
      "6–8 φύλλα δυόσμου",
      "Σόδα για γέμισμα",
      "Crushed ice"
    ],
    image : "/mojito.png",
    prepTime: "5 λεπτά",
    difficulty: "Εύκολο",
    recipe: [
      "Σε ποτήρι highball βάλτε τη ζάχαρη και τον χυμό λάιμ και πολτοποιήστε ελαφρά.",
      "Προσθέστε τα φύλλα δυόσμου και muddle 1–2 φορές χωρίς να τα λιώσετε υπερβολικά.",
      "Γεμίστε με crushed ice, ρίξτε το ρούμι και ανακατέψτε ελαφρά.",
      "Συμπληρώστε με σόδα, διακοσμήστε με κλαδάκι δυόσμου και φέτα λάιμ."
    ],
    // image: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
  },
  {
    id : 2,
    name: "Margarita",
    slug: "margarita",
    gradient: "from-yellow-200 to-green-200",
    ingredients: [
      "50 ml Tequila blanco",
      "25 ml Triple Sec ή Cointreau",
      "25 ml φρέσκος χυμός λάιμ",
      "Αλάτι (προαιρετικό)",
      "Πάγος",
      "Φέτα λάιμ"
    ],
    image : "/margarita.png",
    prepTime: "5 λεπτά",
    difficulty: "Μέτριο",
    recipe: [
      "Βρέξτε το χείλος του ποτηριού με λίγο λάιμ και βουτήξτε σε αλάτι για να δημιουργήσετε το κλασικό αλατισμένο χείλος (προαιρετικό).",
      "Σε shaker βάλτε την tequila, Triple Sec και φρέσκο χυμό λάιμ μαζί με αρκετό πάγο.",
      "Κάντε shake δυνατά για 10–15 δευτερόλεπτα, μέχρι να κρυώσει καλά το μείγμα.",
      "Στραγγίστε σε κρύο ποτήρι coupe ή Margarita glass.",
      "Γαρνίρετε με φέτα λάιμ στο χείλος ή μέσα στο ποτό."
    ],
    // image : "margarita.png",
    // image: "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
  },
  {
    id : 3,
    name: "Old Fashioned",
    slug: "old-fashioned",
    gradient: "from-orange-400 to-yellow-400",
    ingredients: [
      "60 ml bourbon ή rye ουίσκι",
      "10–15 ml σιρόπι ζάχαρης",
      "2–3 σταγόνες Angostura bitters",
      "Μεγάλο παγάκι",
      "Φλούδα πορτοκαλιού ",
      "Κερασάκι (προαιρετικό)"
    ],
    image : "/old-fashioned.png",
    prepTime: "4 λεπτά",
    difficulty: "Μέτριο",
    recipe: [
      "Σε ποτήρι rocks βάλτε το σιρόπι ζάχαρης και τα bitters.",
      "Ανακατέψτε ελαφρά για να ενωθούν.",
      "Προσθέστε το ουίσκι και ανακατέψτε απαλά με μεγάλο κουτάλι bar.",
      "Βάλτε ένα μεγάλο παγάκι.",
      "Στρίψτε φλούδα πορτοκαλιού πάνω από το ποτήρι για να βγάλει τα αιθέρια έλαια και αφήστε την μέσα ως γαρνιτούρα.",
      "Προαιρετικά προσθέστε κερασάκι στο τέλος.",
    ],
    // image: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
  },
  {
    id : 4,
    name : "Negroni",
    slug: "negroni",
    gradient: "from-red-500 to-orange-500",
    ingredients: [
      "30 ml gin",
      "30 ml Campari",
      "30 ml γλυκό βερμούτ",
      "Πάγος",
      "Φλούδα πορτοκαλιού"
    ],
    image : "/negroni.png",
    prepTime: "3 λεπτά",
    difficulty: "Εύκολο",
    recipe: [
      "Γεμίστε ένα ποτήρι rocks με πάγο.",
      "Ρίξτε το gin, το Campari και το γλυκό βερμούτ πάνω στον πάγο.",
      "Ανακατέψτε καλά με ένα κουτάλι για λίγα δευτερόλεπτα μέχρι να κρυώσει το ποτό.",
      "Βάλτε ένα μεγάλο παγάκι.",
      "Στρίψτε φλούδα πορτοκαλιού πάνω από το ποτήρι για να βγάλει τα αιθέρια έλαια και αφήστε την μέσα ως γαρνιτούρα.",
      "Προσθέστε φλούδα ή φέτα πορτοκαλιού για γαρνιτούρα.",
    ],
  },
  {
    id : 5,
    name : "Screwdriver",
    slug: "screwdriver",
    gradient: "from-yellow-500 to-orange-500",
    ingredients: [
      "50 ml βότκα",
      "100–120 ml φρέσκος χυμός πορτοκαλιού",
      "Πάγος",
      "Φέτα πορτοκαλιού (προαιρετικό)",
    ],
    image : "/screwdriver.png",
    prepTime: "3 λεπτά",
    difficulty: "Πολύ Εύκολο",
    recipe: [
      "Γεμίστε ένα ποτήρι highball με πάγο.",
      "Ρίξτε τη βότκα και τον φρέσκο χυμό πορτοκαλιού πάνω στον πάγο.",
      "Ανακατέψτε καλά με κουτάλι για λίγα δευτερόλεπτα.",
      "Γαρνίρετε με φέτα πορτοκαλιού αν θέλετε.",
    ],
  },
  {
    id : 6,
    name : "Paloma",
    slug: "paloma",
    gradient: "from-orange-400 to-pink-400",
    ingredients: [
      "50 ml tequila blanco",
      "100–120 ml σόδα γκρέιπφρουτ",
      "10–15 ml φρέσκος χυμός λάιμ",
      "Πάγος",
      "Φέτα ροζ γκρέιπφρουτ",
    ],
    image : "/paloma.png",
    prepTime: "4 λεπτά",
    difficulty: "Εύκολο",
    recipe: [
      "Βρέξτε το χείλος του ποτηριού με λάιμ και βουτήξτε σε αλάτι (προαιρετικό).",
      "Γεμίστε το ποτήρι με πάγο.",
      "Ρίξτε την tequila, το χυμό λάιμ και τη σόδα γκρέιπφρουτ πάνω στον πάγο.",
      "Ανακατέψτε καλά με κουτάλι για λίγα δευτερόλεπτα.",
      "Γαρνίρετε με φέτα ροζ γκρέιπφρουτ."
    ],
    // 410 * 410
  },
];

export default cocktails