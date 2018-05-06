import React from 'react'
import { Grid, Paper } from 'material-ui';
import {inventory} from '../../store'
const style = {
    Paper: {
        padding: 20, marginTop: 20, marginBottom: 10
    }

}

class Inventory extends React.Component {

    render() {
        return (
            <Grid container spacing={16}>
                <Grid item sm>
                    <Paper style={style.Paper}>
                        <ul>
                            {inventory.map(item => 
                                <li key={item.id}>{item.name}</li>
                            )}
                        </ul>
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper style={style.Paper}>
                        right pane
                    </Paper>
                </Grid>   
            </Grid>
        
        )
    }
}

export default Inventory
