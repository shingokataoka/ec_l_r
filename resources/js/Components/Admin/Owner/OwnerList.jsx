import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import axios from 'axios';
import { router } from '@inertiajs/react';
import { Button, Container } from '@mui/material';

import dayjs from 'dayjs';
// プラグインが必要
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(timezone);



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables({ owners }) {
    const [ownerList, setOwnerList] = React.useState(owners)
    const [pageColor, setPageColor] = React.useState('primary')
    const [page, setPage] = React.useState(owners.current_page)
    // ページを変えた処理
    const handlePagination = (e, currentPage) => {
        setPageColor('secondary')

        // ADMIN-XSRF-TOKENを指定したaxiosのインスタンスを生成
        const axiosPost = axios.create({
            xsrfCookieName: 'ADMIN-XSRF-TOKEN',
            withCredentials: true
        })
        // 生成したインスタンスでaxiosのPOST送信
        axiosPost(route('admin.api.owners.index'), {
            params: {page: currentPage}
        }).then(res => {
            setOwnerList(res.data)
            setPage(currentPage)
            history.pushState(null, null, route('admin.owners.index',{page: currentPage}))
            setPageColor('primary')
        })
    }

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>名前</StyledTableCell>
                    <StyledTableCell align="right">メールアドレス</StyledTableCell>
                    <StyledTableCell align="right">作成日</StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {ownerList.data.map((row) => (
                    <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">{ dayjs.tz(row.created_at, 'utc').tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss') }</StyledTableCell>
                    <StyledTableCell align="right">
                        <Button variant="contained" onClick={() => router.get(route('admin.owners.update', {owner: row.id}))}>編集</Button>
                    </StyledTableCell>
                    <StyledTableCell align="right"><Button variant="contained" color="error">削除</Button></StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>

            <Stack spacing={2} sx={{textAlign: 'right'}}>
            <Pagination
                count={ownerList.last_page}
                page={page}
                siblingCount={1} boundaryCount={1}
                color={pageColor}
                onChange={handlePagination} />
            </Stack>
        </Container>
    );
}
