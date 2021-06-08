import React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, useMediaQuery, useTheme, Drawer, CssBaseline, Divider} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {List, ListItem, ListItemText} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DropdownMenu from './DropdownMenu';
import Logo from './Logo';
import axios from 'axios';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
//import DrawerMenu from './DrawerMenu';

const menus = [
  {
    title: "Beranda",
    isParent: "Y",
    children: [
        {title: "Berita", id:0, isParent: "N", path:"/beranda/berita", type:"list", children: []},
        {title: "Lelang", id:0, isParent: "N", path:"/beranda/lelang", type:"list", children: []},
        {title: "Pengumuman", id:0, isParent: "N", path:"/beranda/pengumuman", type:"list", children: []},
    ]
  },
  {
    title: "Tentang Kami",
    isParent: "Y",
    children: [
        {title: "Sejarah Singkat", id:1, isParent: "N", path:"/tentangkami/sejarahsingkat", type:"page", children: []},
        {title: "Visi, Misi & Motto", id:2, isParent: "N", path:"/tentangkami/visimisi", type:"page", children: []},
        {title: "Logo Bank Aceh", id:3, isParent: "N", path:"/tentangkami/logo", type:"page", children: []},
        {title: "Manajemen Periode Berjalan", isParent: "Y", children: [
          {title:"Dewan Komisaris", isParent:"N", id:0, path:"tentangkami/manajemen/dewankomisaris", type:"page", children:[]},
          {title:"Dewan Pengawas Syariah", isParent:"N", id:0, path:"tentangkami/manajemen/dewanpengawassyariah", type:"page", children:[]},
          {title:"Direksi", isParent:"N", id:0, path:"tentangkami/manajemen/direksi", type:"page", children:[]},
          {title:"Manajemen Eksekutif", isParent:"N", id:0, path:"tentangkami/manajemen/manajemeneksekutif", type:"page", children:[]}
        ]},
        {title: "Target & Sasaran", id:5, isParent: "N", path:"/tentangkami/targetsasaran", type:"page", children: []},
        {title: "Penghargaan", id:6, isParent: "N", path:"/tentangkami/penghargaan", type:"page", children: []},
    ]
  },
  {
    title: "Investor Relation",
    isParent: "Y",
    children: [
        {title: "Laporan Keuangan", isParent: "N", children: []},
        {title: "Laporan Tahunan", isParent: "N", children: []},
        {title: "Laporan GCG", isParent: "N", children: []},
        {title: "Pemodalan dan Pemegang Saham", isParent: "N", children: []}
    ]
  },
  {
    title: "Produk & Layanan",
    isParent: "Y",
    children: [
        {title: "Dana", isParent: "Y", children: [{title:"Giro Bank Aceh", isParent:"N", children:[]}, {title:"Deposito Mudharabah", isParent:"N", children:[]}]},
        {title: "Pembiayaan", isParent: "Y", children: [{title:"Pembiayaan Mudharabah", isParent:"N", children:[]}, {title:"Pembiayaan Musyarakah", isParent:"N", children:[]}]},
        {title: "Layanan", isParent: "Y", children: [{title:"RAHN (Gadai Emas)", isParent:"N", children:[]}, {title:"Bank Garansi Syariah", isParent:"N", children:[]}]},
    ]
  },
  {
    title: "Jaringan",
    isParent: "Y",
    children: [
        {title: "Jaringan Operasional", isParent: "N", children: []}
    ]
  }
]


function Navbar() {
    const [open, setOpen] = useState(false);
  //  const [menus, setMenus] = useState([]);

 /*   useEffect(() => {
      axios.get(`http://dev.semangatngedrakor.my.id/api/menu`).then(res=>{
          console.log(res.data);
         // setMenus(res.data.menu);
          const m = res.data.menu;
          const m_sort = m.filter( mm => mm.level === 1);
          console.log(m_sort);
          setMenus(m_sort);
      });
    }, []); */

    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isLG = useMediaQuery(theme.breakpoints.down('lg'));
    const isXL = useMediaQuery(theme.breakpoints.down('xl'));

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        toolBar:{
          paddingTop:"5px",
          paddingBottom:'5px',
        },
        drawerListItem:{
          minWidth: 200,
          backgroundColor:"pink",
        }
      }));

      const classes = useStyles();

      const toggleDrawerStatus = ()=>{
        setOpen(!open);
      }
      const closeDrawer = ()=>{
          setOpen(false);
      }

      

    return (
            <Grid container>
                <AppBar position="fixed" color="white">
                    <Toolbar variant="dense" className={classes.toolBar}>
                      <Logo/>
                      <Grid container justify="flex-end">
                          {(isSM) ? <IconButton onClick={toggleDrawerStatus}><MenuIcon/></IconButton> : <DropdownMenu menus={menus}/>}
                      </Grid>
                    </Toolbar>
                </AppBar>
                <Toolbar style={{height:70}}/>
                {/* Drawer Menu(Side Bar) */}
                <Drawer variant="temporary" anchor="left" open={open}  onClose={closeDrawer}>
                  <List style={{backgroundColor:"cyan", marginBottom:0}}>
                      <ListItem style={{height:60}}>
                        <img height="50px" src={window.location.origin + "/images/bank_aceh_oke.png"} alt="image"/>
                      </ListItem>
                  </List>
                  <List component="nav" style={{backgroundColor:"cyan", minHeight:"100vh", paddingBottom:0}}  aria-label="secondary mailbox folders">
                      <ProSidebar>
                        <Menu iconShape="square">
                          {/* <MenuItem icon={<MenuIcon/>}>Dashboard</MenuItem> */}
                          {menus.map((item)=>{
                             return recursiveFunc(item);
                          })}
                        </Menu>
                      </ProSidebar>
                  </List>
                </Drawer>
            </Grid>
    );
}

function recursiveFunc(item){
    if(item.isParent == "Y"){
      return (<SubMenu title={item.title}>{item.children.map((itemChild)=>{return recursiveFunc(itemChild)})}</SubMenu>)
    }
    else{
      return(<MenuItem><Button variant="text" style={{textTransform:"none"}} color="inherit" href={window.location.origin+item.path+"/"+item.type+"/"+item.id} >{item.title}</Button></MenuItem>)
    }
}

export default Navbar;
