import React from 'react'
import { Typography, Paper, Avatar, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import createMuiTheme from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import MaterialDatatable from "material-datatable";
 


function ListFarmers(props) {
    const { classes } = props
    const columns = [
        {   
            name: 'Name', 
            field: 'name',
            options: {
                width: 70,
            },
        },
        {
            name: 'Title', 
            field: 'title'
        },
        {
            name: 'Location', 
            field: 'location',
            options: {
                width: 100,
            },
        },
        {
            name: 'Age', 
            field: 'age'
        },
        {
            name: 'Salary', 
            field: 'salary'
        },
        {
            name: 'Veeeeery loooooooooong naaaaaaaaaaame title', 
            field: 'salary',
            options: {
                headerNoWrap: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return `${value.name} (${value.title})`; 
                }
            },
        }
    ];
     const data = [
        {name: "Veeeeery loooooooooong naaaaaaaaaaame", title: "Title 1", location: "Location 1", age: 30, salary: 10},
        {name: "Name 2", title: "Title 2", location: "Location 2", age: 31, salary: 11},
    ];
     
    const options = {
        filterType: 'checkbox',
    };
    // const theme = createMuiTheme({
    //     typography: {
    //         useNextVariants: true
    //     },
    // });
     
	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				
				<MaterialDatatable
                title={"Farmers List"}
                data={data}
                columns={columns}
                options={options}
                />
                
              
			</Paper>
		</main>
	)
}

export default ListFarmers;