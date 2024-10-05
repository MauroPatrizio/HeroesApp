import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/Heroes";
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";

export const DcHeroes = () => {
	const [heroes, setHeroes] = useState<IHeroes[]>([]);

	const handleGetHeroesDC = () => {
		const result = heroesData.filter((hero) => hero.publisher === "DC Comics");
		setHeroes(result);
	};

	useEffect(() => {
		handleGetHeroesDC();
	}, []);

	return <ListHeroes heroes={heroes} title="Heroes DC Comics" />;
};
