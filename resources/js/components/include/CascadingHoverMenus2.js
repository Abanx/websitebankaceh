import * as React from 'react';
import {useState} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Menu from 'material-ui-popup-state/HoverMenu';
import MenuItem from '@material-ui/core/MenuItem';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import { ExpandMore } from '@material-ui/icons';

const ParentPopupState = React.createContext(null);

export default function CascadingHoverMenus2(props) {
    const [menu, setMenu] = useState(props.menu);

    const popupState = usePopupState({
        popupId: 'demoMenu',
        variant: 'popover',
        deferOpenClose: true,
      });

      // Fungsi Recursive Untuk membuat Cascading Nested Menu
      function recursiveFunc(children){
        console.log("Recursive");
        console.log(children);
        return children.map(
            (item)=>{
              if(item.isParent == "Y"){
               return (<Submenu popupId={item.title+"Menu"} title={item.title}>{recursiveFunc(item.children)}</Submenu>)
              }
              else{
                return (<MenuItem onClick={()=>{popupState.close; (item.title === "Berita") ? window.location=window.location.origin+"/beranda/berita" : window.location="https://www.google.com"}}>{item.title}</MenuItem>)
              } 
            }
          );
    }

    return (
        <div style={{ height: 600 }}>
            <Button variant="text" size="large" endIcon={(menu.isParent == "Y") ? <ExpandMore/> : ""} style={{textTransform:"none"}} {...bindHover(popupState)}>
                {menu.title}
            </Button>
            <ParentPopupState.Provider value={popupState}>
                <Menu
                    {...bindMenu(popupState)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    getContentAnchorEl={null}>
                      { 
                        (menu.isParent == "Y") ? recursiveFunc(menu.children) : ""
                      }
                      {/* {menu.children.map((item)=>(<MenuItem onClick={popupState.close}>{item.title}</MenuItem>))} */}
                  {/* <Submenu popupId="moreChoicesMenu" title="More Choices"> */}
                      {/* <MenuItem onClick={popupState.close}>Cheesecake</MenuItem> */}
                      {/* <MenuItem onClick={popupState.close}>Cheesedeath</MenuItem> */}
                  {/* </Submenu> */}
                </Menu>
            </ParentPopupState.Provider>
        </div>
    )
}



const submenuStyles = (theme) => ({
    menu: {
      marginTop: theme.spacing(-1),
    },
    title: {
      flexGrow: 1,
    },
    moreArrow: {
      marginRight: theme.spacing(-1),
    },
});

const Submenu = withStyles(submenuStyles)(
    // Unfortunately, MUI <Menu> injects refs into its children, which causes a
    // warning in some cases unless we use forwardRef here.
    React.forwardRef(({ classes, title, popupId, children, ...props }, ref) => {
      const parentPopupState = React.useContext(ParentPopupState)
      const popupState = usePopupState({
        popupId,
        variant: 'popover',
        parentPopupState,
        deferOpenClose: true,
      })
      return (
        <ParentPopupState.Provider value={popupState}>
          <MenuItem
            {...bindHover(popupState)}
            selected={popupState.isOpen}
            ref={ref}
          >
            <span className={classes.title}>{title}</span>
            <ChevronRight className={classes.moreArrow} />
          </MenuItem>
          <Menu
            {...bindMenu(popupState)}
            classes={{ paper: classes.menu }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            getContentAnchorEl={null}
            {...props}
          >
            {children}
          </Menu>
        </ParentPopupState.Provider>
      )
    })
  );
