import React, { useState, useEffect }  from 'react'
import { Container, Grow, Grid, Paper } from '@material-ui/core';
import { getPosts } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';
import Pagination from '../Pagination';

const Home = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={6}>
                            <Pagination></Pagination>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home