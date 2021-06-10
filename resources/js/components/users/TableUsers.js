import React, {Component, Fragment} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const USER_URL = "http://dev.semangatngedrakor.my.id/api/user";

class TableUsers extends Component{
    constructor (props) {
        super(props);

        this.state = {
            checkedA: [],
            // active: false,
            user: [],
        };

        // const [state, setState] = useState({
        //     checkedA: true,
        //     user: []
        // })

        // this.getUsersData = this.getUsersData.bind(this);
    }

    componentDidMount() {
        this.getUsersData();
    }
    
    getUsersData = () => {
        axios.get(USER_URL)
        .then((res) => {
            this.setState({
                user: res.data.user,
                // checkedA: Boolean(res.data.user[res.data.user.length-1].status),
                checkedA: res.data.user.map((user) => {
                    return Boolean(user.status);
                }),
            })
            // console.log(Boolean(this.state.user[res.data.user.length - 1].status))
            // console.log(this.state.user);
            // console.log(res.data.user[0].status);
            // let status = [];
            // res.data.user.map((user) => {
            //     status.push(user.status);
            //     console.log(user.status);
            //     return user;
            // })
            // console.log(checkedA);
        })
        .catch(err => console.log(err))
    }

    handleSwitchChange = (event) => {
        let newStatus = [...this.state.checkedA];
        newStatus[event.target.name] = event.target.checked;

        this.setState({
            // ...this.state,
            // [event.target.name]: event.target.checked,
            checkedA: newStatus,
        });
        if(Boolean(this.state.user[this.state.user.length-1].status) === true) {
            // console.log(this.state.user[this.state.user.length-1].status, 1);
            console.log(this.state.checkedA[parseInt(event.target.name)]);
        } else {
            console.log(this.state.checkedA[parseInt(event.target.name)]);
            // console.log(this.state.user[this.state.user.length-1].status, 0);
        }
        // console.log([...this.state.checkedA]);
        // console.log(newStatus[event.target.name]);
    }

    render(){
        // const users = this.state.user.map((user) => (
        //     <li key={user.id}>Name: {user.name}, Email: {user.email}</li>
        // ));
        // console.log(users);

        var data = [{
            id: 0,
            name:'',
            email:'',
            status: false,
        }];
        var i = [];

        const listUser = this.state.user.map((user, index) => {
            data = [{
                id: user.id,
                name: user.name,
                email:user.email,
                status: user.status
            }];
            // i = [...index];
            // i.push(index);
            // console.log(i);
            return user;
        });
        console.log(listUser);
        // console.log(i);
        // console.log(this.state.checkedA);
        
        // Set columns name
        const columns = [
            { field: 'id', headerName: 'ID', width: 100},
            { field: 'name', headerName: 'Name', width: 180},
            { field: 'email', headerName: 'Email', width: 240},
            { 
            field: 'isActive', 
            headerName: 'IsActive?', 
            width: 140,
            renderCell: (params) => (
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>Off</Grid>
                    {/* {this.state.checkedA.map((status, i) => {
                        <Switch
                        key={i}
                        checked={status}
                        onChange={this.handleSwitchChange}
                        color="primary"
                        name={i.toString()}
                        inputProps={{ 
                            'aria-label':'is Active?' }}
                        />
                    })} */}
                    
                    <Switch
                    checked={this.state.checkedA?true:false}
                    // checked={this.state.user.map((user) => {
                    //     // this.state.checkedA= user.status;
                    //     return user.status?true:false;
                    // })}
                    onChange={this.handleSwitchChange}
                    color="primary"
                    name={listUser.id}
                    // name={i.map((nama) => {

                    // })}
                    inputProps={{ 
                        'aria-label':'is Active?' }}
                    // value={this.state.checkedA?true:false}
                    />
                    <Grid item>On</Grid>
                    
                </Grid>

                // <Grid component="label" container alignItems="center" spacing={1}>
            
                //     <Button
                //         color={this.state.checkedA === true? "primary":"secondary"}
                //         variant="contained"
                //         onClick={() =>
                //             console.log(this.state.checkedA) }
                //     >                        
                //         Active
                //     </Button>

                // </Grid>
                
            ),
            },
        ];

        return(
            <Fragment>
                <div style={{ height: 400, width: '100%' }}>
                    {/* <DataGrid rows={listUser} columns={columns} pageSize={5} disableSelectionOnClick /> */}
                    
                    {/* SHow user table */}
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>                                   
                                    <TableCell align="left">ID</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">Active</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>                                
                                {listUser.map((user, index) => (
                                    <TableRow key={user.id}>
                                        <TableCell>
                                            {user.id}
                                        </TableCell>
                                        <TableCell align="left">{user.name}</TableCell>
                                        <TableCell align="left">{user.email}</TableCell>
                                        <TableCell align="left">
                                            {/* {user.status === 1 ? 'Active' : 'Nonactive'} */}
                                            <Grid component="label" container alignItems="center" spacing={1}>
                                                <Grid item>No</Grid>                                                
                                                <Switch
                                                    name={index.toString()}
                                                    checked={this.state.checkedA[index]}
                                                    
                                                    color="primary"
                                                    onChange={this.handleSwitchChange}
                                                />
                                                <Grid item>Yes</Grid>
                                            </Grid>
                                            </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Fragment>
        );
    }
}

export default TableUsers;