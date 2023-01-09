import css from "./Filter.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filter);

    return (
      <div className={css.filterContainer}>
        <label className={css.labelFilter}>Find contacts by name</label>
        <input
          className={css.inputFilter}
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(filterContact(e.target.value))}
        />
      </div>
    );
};
