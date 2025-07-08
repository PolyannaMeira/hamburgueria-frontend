import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import { Container, ProductImage, EditButton, DeleteButton } from './styles';
import { Pencil, XCircle, CheckCircle, Trash } from '@phosphor-icons/react';
import { formatPrice } from '../../../utils/formatPrice';

export function Products() {
	const [product, setProducts] = useState([]);
    const navigate = useNavigate();

	useEffect(() => {
		async function loadProducts() {
			const { data } = await api.get('/products');

			setProducts(data);
		}
		loadProducts();
	}, []);

    function isOffer(offer) {
        if(offer) {
            return  <CheckCircle color='#61A120'size='28'/>;
        // biome-ignore lint/style/noUselessElse: <explanation>
        }else {
            return <XCircle color='#FF3205' size='28'/>;
        // biome-ignore lint/correctness/noUnreachable: <explanation>
        };
    }

    function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const category = product.category || 'Sem categoria';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});
}

    function editProduct(product) {
        navigate('/admin/editar-produto', {state:{product}});
    }

    function deleteProduct(product) {
        navigate('/admin/delete-produto', {state:{product}});
    }

	return (
  <Container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Preço</TableCell>
            <TableCell align="center">Produto em Oferta</TableCell>
            <TableCell align="center">Imagem do Produto</TableCell>
            <TableCell align="center">Editar Produto</TableCell>
            <TableCell align="center">Deletar Produto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(groupByCategory(product)).map(([category, products]) => (
            <React.Fragment key={category}>
              <TableRow>
                <TableCell colSpan={6} style={{ fontWeight: 'bold', background: '#f5f5f5' }}>
                  {category}
                </TableCell>
              </TableRow>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">{formatPrice(product.price)}</TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <ProductImage src={product.url} />
                  </TableCell>
                  <TableCell align="center">
                    <EditButton onClick={() => editProduct(product)}>
                      <Pencil/>
                    </EditButton>
                  </TableCell>
                  <TableCell align="center">
                    <DeleteButton onClick={() => deleteProduct(product)}>
                      <Trash/>
                    </DeleteButton>
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
	);
}
