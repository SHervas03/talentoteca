import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"
import image4 from "../assets/4.png"
import image5 from "../assets/5.png"
import image6 from "../assets/6.png"
import image7 from "../assets/7.png"
import image8 from "../assets/8.png"

const Menus = [
    {
        "id": 1,
        "title": "Muffins de Calabaza y Avena",
        "description": "Deliciosos muffins sin azúcar hechos con calabaza y avena, perfectos para un desayuno saludable o un premio para tu perro.",
        "image": image1,
        "key": "8b40c51d-c272-4a73-bdf0-15315347c94f",
        "ingredients": [
            "1 taza de puré de calabaza",
            "1 taza de avena",
            "1/2 taza de harina integral",
            "1 huevo",
            "1 cucharadita de canela (opcional)"
        ],
        "steps": [
            "1. Precalienta el horno a 180°C (350°F).",
            "2. Mezcla en un bol el puré de calabaza, el huevo y la canela.",
            "3. Añade la harina integral y la avena, y mezcla hasta obtener una masa homogénea.",
            "4. Coloca la masa en moldes para muffins.",
            "5. Hornea durante 20-25 minutos o hasta que estén dorados."
        ]
    },
    {
        "id": 2,
        "title": "Sopa de Pollo y Verduras",
        "description": "Un reconfortante plato de sopa con pollo, zanahorias y calabacín, ideal para compartir en familia.",
        "image": image2,
        "key": "efd665ff-34bb-4638-adde-e73a76f2c591",
        "ingredients": [
            "1 pechuga de pollo",
            "2 zanahorias",
            "1 calabacín",
            "1 litro de caldo de pollo",
            "Sal y pimienta al gusto"
        ],
        "steps": [
            "1. Corta la pechuga de pollo en trozos pequeños.",
            "2. Pela y corta las zanahorias y el calabacín en cubos.",
            "3. En una olla, calienta el caldo de pollo y añade las verduras.",
            "4. Agrega el pollo y cocina a fuego medio durante 20-25 minutos.",
            "5. Añade sal y pimienta al gusto antes de servir."
        ]
    },
    {
        "id": 3,
        "title": "Tortitas de Manzana y Canela",
        "description": "Tortitas saludables y deliciosas con un toque de manzana y canela.",
        "image": image3,
        "key": "1a488503-fc33-4b85-9946-64f6e903f37e",
        "ingredients": [
            "1 manzana rallada",
            "1 taza de harina de avena",
            "1 huevo",
            "1/2 taza de leche",
            "1 cucharadita de canela"
        ],
        "steps": [
            "1. En un bol, mezcla la harina de avena, la manzana rallada y la canela.",
            "2. Añade el huevo y la leche, y mezcla hasta obtener una masa suave.",
            "3. Calienta una sartén y vierte pequeñas porciones de la masa.",
            "4. Cocina cada tortita hasta que se dore por ambos lados.",
            "5. Sirve con frutas frescas o un poco de miel."
        ]
    },
    {
        "id": 4,
        "title": "Ensalada de Quinoa y Manzana",
        "description": "Fresca ensalada rica en fibra y vitaminas, adecuada para acompañar tus comidas o como un snack para tu perro.",
        "image": image4,
        "key": "1283350b-fcc0-453f-9cd8-a1d8b30f0c54",
        "ingredients": [
            "1 taza de quinoa",
            "1 manzana roja (cortada en cubos)",
            "1 zanahoria rallada",
            "1 pepino (cortado en rodajas finas)",
            "2 cucharadas de aceite de oliva",
            "1 cucharadita de jugo de limón",
            "Perejil fresco picado"
        ],
        "steps": [
            "1. Enjuaga bien la quinoa bajo agua fría.",
            "2. Cocina la quinoa en una olla con 2 tazas de agua durante 15 minutos o hasta que esté tierna.",
            "3. Deja enfriar la quinoa antes de mezclarla con los demás ingredientes.",
            "4. En un tazón grande, mezcla la quinoa cocida con la manzana, la zanahoria y el pepino.",
            "5. Agrega el aceite de oliva, el jugo de limón y el perejil picado.",
            "6. Mezcla bien y sirve. Esta ensalada es apta tanto para humanos como para perros (sin agregar sal ni condimentos adicionales)."
        ]
    },
    {
        "id": 5,
        "title": "Tortitas de Batata y Coco",
        "description": "Tortitas ligeras y deliciosas, hechas con batata y coco rallado, perfectas para compartir con tu perro.",
        "image": image5,
        "key": "d574a21b-b61b-4c6f-9dd6-101b7059d13e",
        "ingredients": [
            "1 batata grande (cocida y hecha puré)",
            "1/2 taza de coco rallado",
            "1 huevo",
            "1/2 taza de harina de avena",
            "1 cucharada de aceite de coco",
            "1 pizca de canela (opcional)"
        ],
        "steps": [
            "1. Precalienta el horno a 180°C (350°F).",
            "2. En un bol grande, mezcla el puré de batata, el huevo y el aceite de coco.",
            "3. Añade la harina de avena y el coco rallado. Mezcla bien hasta obtener una masa homogénea.",
            "4. Forma pequeñas tortitas con las manos y colócalas en una bandeja para hornear forrada con papel vegetal.",
            "5. Hornea durante 15-20 minutos o hasta que las tortitas estén doradas.",
            "6. Deja enfriar antes de servir. ¡Disfrútalo con tu perro!"
        ]
    },
    {
        "id": 6,
        "title": "Albóndigas de Pollo y Espinacas",
        "description": "Albóndigas suaves y jugosas, sin especias, ideales para toda la familia y para los perros.",
        "image": image6,
        "key": "0e22fae1-5a6e-4145-8c54-ef4e8df40dc5",
        "ingredients": [
            "500g de pechuga de pollo molida",
            "1 taza de espinacas frescas (bien picadas)",
            "1 huevo",
            "1/2 taza de avena en hojuelas",
            "1 cucharada de aceite de oliva"
        ],
        "steps": [
            "1. Precalienta el horno a 180°C (350°F).",
            "2. En un bol grande, mezcla la pechuga de pollo molida con el huevo y la avena.",
            "3. Añade las espinacas picadas y mezcla bien hasta que todos los ingredientes estén integrados.",
            "4. Forma pequeñas albóndigas con las manos y colócalas en una bandeja para hornear previamente engrasada o con papel vegetal.",
            "5. Hornea durante 20-25 minutos o hasta que estén doradas y cocidas por dentro.",
            "6. Deja enfriar antes de servir. ¡Perfectas para compartir con tu perro!"
        ]
    },
    {
        "id": 7,
        "title": "Helado de Yogur y Arándanos",
        "description": "Un postre refrescante y saludable que puedes disfrutar con tu perro en los días calurosos.",
        "image": image7,
        "key": "9481cdc3-a864-41b3-907a-0d042aaad5cd",
        "ingredients": [
            "1 taza de yogur natural (sin azúcar ni edulcorantes)",
            "1/2 taza de arándanos frescos o congelados",
            "1 cucharada de miel (opcional, para un toque dulce)",
            "1/2 taza de agua"
        ],
        "steps": [
            "1. Coloca los arándanos en una licuadora o procesador de alimentos.",
            "2. Añade el yogur natural, miel (si usas) y agua. Licúa hasta obtener una mezcla homogénea.",
            "3. Vierte la mezcla en moldes para helado o en una bandeja pequeña.",
            "4. Congela durante al menos 4 horas o hasta que esté completamente sólido.",
            "5. Desmolda y sirve como un delicioso postre para ti y tu perro. ¡Disfruta!"
        ]
    },
    {
        "id": 8,
        "title": "Arroz Integral con Zanahorias y Calabacín",
        "description": "Un plato nutritivo y fácil de digerir que puedes preparar para ti y tu perro.",
        "image": image8,
        "key": "1a488503-fc33-4b85-9946-64f6e903f37e",
        "ingredients": [
            "1 taza de arroz integral",
            "1 zanahoria (pelada y rallada)",
            "1 calabacín (picado en cubos pequeños)",
            "1 cucharada de aceite de oliva",
            "2 tazas de agua"
        ],
        "steps": [
            "1. Enjuaga el arroz integral y colócalo en una olla con 2 tazas de agua.",
            "2. Lleva a ebullición, luego cubre y reduce el fuego. Cocina por unos 30-40 minutos o hasta que el arroz esté tierno.",
            "3. Mientras se cocina el arroz, calienta el aceite de oliva en una sartén grande a fuego medio.",
            "4. Añade la zanahoria rallada y el calabacín picado. Cocina durante 5-7 minutos o hasta que estén tiernos.",
            "5. Mezcla las verduras con el arroz ya cocido y sirve. Este plato es apto para ti y para tu perro (sin sal ni especias)."
        ]
    }  
];

export default Menus;
