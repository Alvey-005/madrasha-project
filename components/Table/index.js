import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function createData(sclass, male, female, total, comment) {
    return {sclass, male, female, total, comment};
}
const MyTable = ({heading,rows}) => {
    return (<TableContainer component={Paper}>
            <Table sx={{minWidth: 140}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            heading?.map(head=>(<TableCell key={head.id}>{head.name}</TableCell>))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (<TableRow
                            key={row.sclass}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                        {
                            heading?.map(head=>{
                                return (<TableCell key={head.id}>{row[`${head.id}`]}</TableCell>)
                            }
                            )
                        }
                        </TableRow>))}
                </TableBody>
            </Table>
        </TableContainer>);
}
export default MyTable