import {makeStyles} from "@mui/styles";

export const useFooterStyles = makeStyles(()=>({
    footerContainer : {
        marginTop : 50,
        position : 'relative',
        left: 0,
        right : 0,
        top: 'auto',
        bottom : 0,
        background : "#1f1f1f",
        "&> *":{
            color:"#FFFF"
        },
    },
    iconWrapper : {
        color : "#FFFF",
        background: "#5c5c5c"
    },
}));