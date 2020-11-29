import React, { useState, useEffect } from 'react';
import db from './firebase-config';
import { AddCircleOutlineRounded } from '@material-ui/icons';
import { Button, TextField, Container } from '@material-ui/core';


export default function AddFarmer() {
    const [farmers, setFarmers ] = useState([]);
    const [input , setInput] = useState('');

    useEffect(()=> {
        console.log('effect hook');
        db.collection('farmers').orderBy('datetime', 'desc').onSnapshot(
            snapshot => {
                console.log('Firebase snapshot')
                setFarmers(
                    snapshot.doc.map(
                        doc =>{
                            return {
                                id: doc.id,
                                name: doc.data().farmer,
                                datatime: doc.data().datatime
                            }
                        }
                    )
                )

            }
        )


    },[])


    return (
        <div>
            <Container maxWidth="sm">

            <form noValidate>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name "
                    name="firstname"
                    type="text"
                    autoFocus
                    value={input}
                    onChange={event => setInput(event.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    label="Last Name"
                    name="lastname"
                    type="text"
                    autoFocus
                    value={input}
                    onChange={event => setInput(event.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    autoFocus
                    value={input}
                    onChange={event => setInput(event.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoFocus
                    value={input}
                    onChange={event => setInput(event.target.value)}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={AddFarmer}
                    disabled={!input}
                    startIcon={<AddCircleOutlineRounded />}
                >
                    Add Farmer
                </Button>

            </form>


            </Container >
            
        </div>
    )
}

