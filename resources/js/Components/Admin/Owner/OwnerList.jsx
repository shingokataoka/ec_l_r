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
import { router, useForm, usePage } from '@inertiajs/react';
import { Box, Button, Container } from '@mui/material';

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
    const [message, setMessage] = React.useState(null)
    const [ownerList, setOwnerList] = React.useState(owners)
    const [pageColor, setPageColor] = React.useState('primary')
    const [page, setPage] = React.useState(owners.current_page)
    const _token = usePage().props._token
    const axiosObj = axios.create({
        xsrfCookieName: 'ADMIN-XSRF-TOKEN',
        withCredentials: true,
    })
    const { delete: destroy } = useForm({
        _token: _token,
    })

    // ページを変えた処理
    const handlePagination = (e, currentPage) => {
        setPageColor('secondary')

        // 生成したインスタンスでaxiosのPOST送信
        axiosObj(route('admin.api.owners.index'), {
            params: {page: currentPage}
        }).then(res => {
            setOwnerList(res.data)
            setPage(currentPage)
            history.pushState(null, null, route('admin.owners.index',{page: currentPage}))
            setPageColor('primary')
        })
    }

    // 「削除」押した処理
    const deleteClick = owner => {
        // if (!confirm('本当に削除しますか？')) return
        axiosObj.delete(route('admin.owners.destroy', {owner: owner.id}))
        const newList = ownerList.data.filter(row => row.id !== owner.id)
        setOwnerList({
            ...ownerList,
            data: newList,
        })
        setMessage(`「${owner.name}」を削除しました。`)
    }
    return (
        <Container maxWidth="md">
            { message !== null &&
                <Box sx={{
                    bgcolor: 'error.main',
                    m:2, p:2,
                    borderRadius: 1,
                    }}
                >
                    {message}
                </Box>
            }

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
                    <StyledTableCell align="right"><Button variant="contained" color="error" onClick={() => deleteClick(row)}>削除</Button></StyledTableCell>
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
