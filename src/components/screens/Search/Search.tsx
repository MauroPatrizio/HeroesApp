import { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { heroesData } from "../../../data/heroes";
import { IHeroes } from "../../../types/Heroes";
import { Form, InputGroup } from "react-bootstrap";
import { CardHero } from "../../ui/CardHero/CardHero";
import styles from "./Search.module.css";

export const Search = () => {
	const { values, handleChange } = useForm({
		search: "",
	});

	const { search } = values;

	const [heroes, setHeroes] = useState<IHeroes[]>([]);
	useEffect(() => {
		const result = heroesData.filter((h) => h.superhero.toLowerCase().trim().includes(search));
		setHeroes(result);
	}, [search]);

	return (
		<div className={styles.containerSearch}>
			<div>
				<InputGroup className="mb-3">
					<InputGroup.Text>Ingrese heroe</InputGroup.Text>
					<Form.Control onChange={handleChange} type="text" name="search" />
				</InputGroup>
			</div>
			<div className={styles.containerListHeroes}>
				{heroes.length > 0 ? (
					<>
						{heroes.map((hero) => (
							<div key={hero.id} style={{ width: "80%" }}>
								<CardHero hero={hero} />
							</div>
						))}
					</>
				) : (
					<div>
						<h2>No coincide la búsqueda</h2>
					</div>
				)}
			</div>
		</div>
	);
};
