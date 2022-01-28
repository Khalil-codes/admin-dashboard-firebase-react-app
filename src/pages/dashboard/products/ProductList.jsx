import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDatabase, deleteProduct } from '../../../firebase';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import styles from './Products.module.css';
const ProductList = ({ setSelectedProductToEdit, setFormOpen }) => {
    const products = useDatabase();
    const handleDelete = async (id) => {
        await deleteProduct(id);
    };
    const handleEdit = (id) => {
        setSelectedProductToEdit(products.find((p) => p.id === id));
        setFormOpen(true);
    };
    let idx = 0;
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            minWidth: 100,
        },
        { field: 'name', headerName: 'Name', minWidth: 400 },
        {
            field: 'price',
            headerName: 'Price',
            minWidth: 200,
            renderCell: (params) => `$ ${params.row.price}`,
        },
        { field: 'stock', headerName: 'Stock', minWidth: 200 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            sortable: false,
            renderCell: (params) => {
                return (
                    <div className={styles.actionBtn}>
                        <small
                            className={styles.deleteIcon}
                            onClick={() => handleDelete(params.id)}>
                            <DeleteOutline color="error" />
                        </small>
                        <small
                            className={styles.editIcon}
                            onClick={() => handleEdit(params.id)}>
                            <EditOutlined color="warning" />
                        </small>
                    </div>
                );
            },
        },
    ];
    const rows = [...products];
    return (
        <div
            style={{ height: '500px', width: '100%', backgroundColor: '#fff' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
};

export default ProductList;
