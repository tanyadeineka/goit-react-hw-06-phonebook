import css from "./Filter.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/actions';

export const Filter = () => {
    const dispatch = useDispatch();

    const filter = useSelector(getFilter);

    const handleChange = e => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <div className={css.filterContainer}>
            <label className={css.labelFilter}>Find contacts by name</label>
            <input
                className={css.inputFilter}
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
            />
        </div>
    );
};
