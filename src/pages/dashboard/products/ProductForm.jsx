import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import { addProductToFirestore, updateProduct } from '../../../firebase';
import styles from './Products.module.css';
const ProductForm = ({
    setFormOpen,
    setSelectedProductToEdit,
    selectedProductToEdit,
}) => {
    const action = selectedProductToEdit ? 'Update' : 'Add';
    const [nameInput, setNameInput] = useState('');
    const [priceInput, setPriceInput] = useState('');
    const [stockInput, setStockInput] = useState('');
    useEffect(() => {
        if (selectedProductToEdit) {
            setNameInput(selectedProductToEdit.name);
            setPriceInput(selectedProductToEdit.price);
            setStockInput(selectedProductToEdit.stock);
        }
    }, [selectedProductToEdit]);
    const closeProductForm = () => {
        setFormOpen(false);
        setSelectedProductToEdit(null);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nameInput.length > 0 && +priceInput > 0 && +stockInput >= 0) {
            if (selectedProductToEdit) {
                await updateProduct(selectedProductToEdit.id, {
                    name: nameInput,
                    price: +priceInput,
                    stock: +stockInput,
                });
                setSelectedProductToEdit(null);
            } else
                await addProductToFirestore({
                    name: nameInput,
                    price: +priceInput,
                    stock: +stockInput,
                });
        }
        setFormOpen(false);
    };
    return (
        <Card>
            <h1 className={styles.formTitle}>{action} Product:</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formControl}>
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="Product Name..."
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                </div>
                <div className={styles.formControl}>
                    <label>Price:</label>
                    <input
                        type="number"
                        placeholder="Product Price..."
                        value={priceInput}
                        onChange={(e) => setPriceInput(e.target.value)}
                    />
                </div>
                <div className={styles.formControl}>
                    <label>Stock:</label>
                    <input
                        type="number"
                        placeholder="Product Stock"
                        value={stockInput}
                        onChange={(e) => setStockInput(e.target.value)}
                    />
                </div>
                <div className={styles.formBtns}>
                    <Button fn={handleSubmit}>{action} Product</Button>
                    <Button mode="dark" fn={closeProductForm}>
                        Cancel
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default ProductForm;
