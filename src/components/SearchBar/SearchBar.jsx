import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import styles from "./SearchBar.module.css";

const notify = () => {
    toast.error('Please type something');
};

const SearchBar = ({ onSubmit }) => {

    const handleSubmit = (values, actions) => {
        if (!values.search.trim()) {
            notify();
            return;
        }
        onSubmit(values.search);
        actions.resetForm();
    };

    return (
        <header className={styles.header}>
            <Toaster position="top-right" />
            <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
                <Form className={styles.searchForm}>
                    <Field
                        className={styles.searchField}
                        type="text"
                        name="search"
                        placeholder="Search images and photos"
                        autoComplete="off"
                        autoFocus
                    />
                    <button className={styles.submitBtn} type="submit">Search</button>
                </Form>
            </Formik>
        </header>
    );
};

export default SearchBar;
