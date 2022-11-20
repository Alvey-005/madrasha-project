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

// const rows = [
//     createData('প্রথম', '১৩', '১২', '২৫', ''),
//     createData('দ্বিতীয়', '০৯', '০৪', '১৩', ''),
//     createData('তৃতীয়', '০৩', '০৪', '০৭', ''),
//     createData('চতুর্থ', '০৫', '০৫', '১০', ''),
//     createData('পঞ্চম', '১৪', '১৩', '২৭', ''),
//     createData('মোট (প্রথম থেকে পঞ্চম)', '৪৪', '৩৮', '৮২', ''),
//     createData('ষষ্ঠ', '২৫', '৩৯', '৬৪', ''),
//     createData('সপ্তম', '২৭', '৩৪', '৬১', ''),
//     createData('অষ্টম', '১৬', '৪৭', '৬৩', ''),
//     createData('নবম', '৩১', '৩৩', '৬৪', ''),
//     createData('দশম', '২৯', '৩৬', '৬৫', ''),
//     createData('ষষ্ঠ থেকে দশম', '১২৮', '১৮৯', '৩১৭', ''),
//     createData('মোট', '১৭২', '২২৭', '৩৯৯', ''),
// ];

const MyTable = ({heading,rows}) => {
    return (<TableContainer component={Paper}>
            <Table sx={{minWidth: 140}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {/*<TableCell>শ্রেণি</TableCell>*/}
                        {/*<TableCell>ছাত্র</TableCell>*/}
                        {/*<TableCell>ছাত্রী</TableCell>*/}
                        {/*<TableCell>মোট</TableCell>*/}
                        {/*<TableCell>মন্তব্য</TableCell>*/}
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
                            {/*<TableCell>{row.sclass}</TableCell>*/}
                            {/*<TableCell>{row.male}</TableCell>*/}
                            {/*<TableCell>{row.female}</TableCell>*/}
                            {/*<TableCell>{row.total}</TableCell>*/}
                            {/*<TableCell>{row.comment}</TableCell>*/}
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