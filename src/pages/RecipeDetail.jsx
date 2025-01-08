import { useParams } from 'react-router-dom';
import Menus from "../data/Menus";

function RecipeDetail() {
    const { key } = useParams();

    const recipe = Menus.find((menu) => menu.key === key);

    if (!recipe) {
        return <p>Receta no encontrada</p>;
    }

    return (
        <div className="flex flex-col items-center bg-white  border-gray-200 rounded-lg max-w-4xl mx-auto p-5">
            {/* Imagen */}
            <img className="object-cover w-full rounded-lg h-96 w-auto mb-5" src={recipe.image} alt={recipe.title} />

            {/* Título */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{recipe.title}</h1>

            {/* Descripción */}
            <p className="mb-5 text-gray-700">{recipe.description}</p>

            {/* Ingredientes */}
            <div className="mb-5">
                <h2 className="font-semibold text-lg text-gray-900">Ingredientes:</h2>
                <ul className="list-disc pl-5 text-gray-700">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            {/* Receta */}
            <div>
                <h2 className="font-semibold text-lg text-gray-900">Receta:</h2>
                <ul className="pl-5 text-gray-700">
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RecipeDetail;
