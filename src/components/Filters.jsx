import { useId } from "react";
import { useFilters } from "../hooks/useFilters.js";
import "./Filters.css";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      categoria: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="2500"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="entrada">Entradas</option>
          <option value="principal">Principal</option>
          <option value="postre">Postres</option>
          <option value="bebidas">Bebidas</option>
        </select>
      </div>
    </section>
  );
}
